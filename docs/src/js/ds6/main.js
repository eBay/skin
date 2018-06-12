// Most of this is code for the menu and combobox logic, which will be abstracted away into their own modules at some point

// makeup-js accessibility modules
var Expander = require('makeup-expander');
var Rover = require('makeup-roving-tabindex');
var keyEmitter = require('makeup-key-emitter');
var scrollKeyPreventer = require('makeup-prevent-scroll-keys');
var modal = require('makeup-modal');
var transition = require("./transition");

// util function
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

// BUTTON WIDGET

// simple button logic on buttons
nodeListToArray(document.querySelectorAll('.btn:not([aria-disabled="true"]):not(.dialog-button)')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        alert('You clicked ' + this);
    });
});

// simple aria-expanded logic on expand button example
nodeListToArray(document.querySelectorAll('.expand-btn-example')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// MENU WIDGET (basic interactivity only)

// roving tab index logic on menu items container
nodeListToArray(document.querySelectorAll('[role=menu]')).forEach(function(el, i) {
    var widget = Rover.createLinear(el, '[role^=menuitem]', {autoReset: 0});
});

// aria expanded logic on menu button and overlay
// escape key logic on menu (closes menu)
nodeListToArray(document.querySelectorAll('.menu, .fake-menu')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        expandOnClick: true,
        focusManagement: 'interactive',
        hostSelector: '.expand-btn',
        contentSelector: '.menu__items, .fake-menu__items'
    });

    keyEmitter.addKeyDown(el);

    el.addEventListener('escapeKeyDown', function() {
        this.querySelector('.expand-btn').focus();
        widget.collapse();
    });
});

// prevent scroll keys logic on menu items
nodeListToArray(document.querySelectorAll('[role^=menuitem]')).forEach(function(el, i) {
    scrollKeyPreventer.add(el);
});

// COMBOBOX WIDGET (basic interactivity only)

nodeListToArray(document.querySelectorAll('.combobox')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        expandOnClick: true,
        hostSelector: 'input[role=combobox]',
        hostContainerClass: 'combobox__control',
        contentSelector: '.combobox__options',
        simulateSpacebarClick: true
    });

    var inputEl = el.querySelector('input[role=combobox]');
    var optionEls = nodeListToArray(el.querySelectorAll('[role=option]'));
    var selectedOptionEl = el.querySelector('[role=option][aria-selected=true]');
    var size = optionEls.length;
    var currentIndex;

    var updateCombobox = function(newIndex) {
        selectedOptionEl.setAttribute('aria-selected', 'false');
        currentIndex = newIndex;
        inputEl.value = 'Option ' + (currentIndex + 1);
        selectedOptionEl = optionEls[currentIndex];
        selectedOptionEl.setAttribute('aria-selected', 'true');
    };

    optionEls.forEach(function(el, i) {
        if (!el.dataset) {
            el.dataset = {};
        }

        // assign an index data attribute to each el
        el.dataset.comboboxIndex = i;

        // add a click handler to each el
        el.addEventListener('click', function(e) {
            updateCombobox(parseInt(this.dataset.comboboxIndex, 10));
            widget.collapse();
            inputEl.focus();
        });
    });

    currentIndex = parseInt(selectedOptionEl.dataset.comboboxIndex, 10);

    keyEmitter.addKeyDown(el);
    scrollKeyPreventer.add(el);

    el.addEventListener('escapeKeyDown', function() {
        widget.collapse();
        inputEl.focus();
    });

    el.addEventListener('arrowDownKeyDown', function(e) {
        if (currentIndex < (size - 1)) {
            updateCombobox(currentIndex + 1);
        }
    });

    el.addEventListener('arrowUpKeyDown', function(e) {
        if (currentIndex > 0) {
            updateCombobox(currentIndex - 1);
        }
    });
});

// DIALOG WIDGET
nodeListToArray(document.querySelectorAll('.dialog-button')).forEach(function (btn) {
    var cancel;
    var dialog = btn.nextElementSibling;
    var dialogBody = dialog.querySelector('.dialog__body');
    var dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd);
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute("style", "overflow:hidden");
        dialogClose.focus();
        modal.modal(dialog);
    }

    function handleClose (ev) {
        if (dialogBody.contains(ev.target)) {
            return;
        }

        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--hide', handleTransitionEnd);
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        dialog.removeEventListener('click', handleClose, true);
        document.body.removeAttribute("style");
        modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd () {
        cancel = undefined;
    }
});

// set up initial matchMedia query
window.mobileMediaQuery = 'all and (max-width: 600px)';
window.mm = window.matchMedia(window.mobileMediaQuery);

window.sidebar = document.querySelector('nav .fixed-nav');
window.sidebar_top = sidebar.offsetTop;

// debounce utility function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function fixTheSidebar() {
    var isMobile = window.mm.matches;
    var y = window.scrollY || window.pageYOffset;

    // fix the navigation on scroll
    if (!isMobile && y >= window.sidebar_top) {
        window.sidebar.classList.add('fixed');
    } else {
        window.sidebar.classList.remove('fixed');
    }
}

window.addEventListener('resize', debounce(function() {
    // re-run matchMedia on resize
    mm = window.matchMedia(mobileMediaQuery);
}, 50));

window.addEventListener('load', function() {
    fixTheSidebar();

    // On page load, inline the label based on whether the input has value or not.
    toggleFloatingLabels();
    window.addEventListener('scroll', fixTheSidebar);
});

// Trying to get the label which is input's ancestor
function getParentContainer(el) {
    if (!el) {
        return null;
    }

    return el.parentNode ? el.parentNode.parentNode : null;
}

// This method inlines the label if the input tag has no default value else keeps it floated it on top of the input.
function toggleFloatingLabels() {
    const inputEls = document.querySelectorAll('.floated-label .textbox__control');
    nodeListToArray(inputEls).forEach(function(input) {
        const siblingLabel = getParentContainer(input).querySelector('.floated-label__label');
        if (!input.value) {
            siblingLabel.classList.add('floated-label__label--inline');
        }
    });
}

// Make sure to attach event listeners to the parent container of the inputs, which usually would be the <form> tag
const inputWrapper = document.querySelector('#label');

// This event listener removes the inline class from the label when the focus event gets fired.
inputWrapper.addEventListener('focus', function (event) {
    const inputEl = event.target;
    if (!inputEl.classList.contains('textbox__control')) {
        event.stopPropagation();
    }

    const siblingLabel = getParentContainer(inputEl).querySelector('.floated-label__label');

    // In order to avoid animating the label on page, the animate class is added later
    if (!siblingLabel.classList.contains('floated-label__label--animate')) {
        siblingLabel.classList.add('floated-label__label--animate');
    }

    siblingLabel.classList.remove('floated-label__label--inline');
}, true);

/*
* When the blur event gets fired, this event listener checks:-
* 1. if input has a value, the inline class is removed from the label
* 2. if input has no value, the inline class is added to the label
*/
inputWrapper.addEventListener('blur', function (event) {
    const inputEl = event.target;
    if (!inputEl.classList.contains('textbox__control')) {
        event.stopPropagation();
    }

    const siblingLabel = getParentContainer(inputEl).querySelector('.floated-label__label');
    if (inputEl.value !== '') {
        siblingLabel.classList.remove('floated-label__label--inline');
    } else {
        siblingLabel.classList.add('floated-label__label--inline');
    }
}, true);
