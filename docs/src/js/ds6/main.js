// Most of this is code for the menu and combobox logic, which will be abstracted away into their own modules at some point

// makeup-js accessibility modules
var Expander = require('makeup-expander');
var Rover = require('makeup-roving-tabindex');
var keyEmitter = require('makeup-key-emitter');
var scrollKeyPreventer = require('makeup-prevent-scroll-keys');
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
        click: true,
        focusManagement: 'interactive',
        hostSelector: '.expand-btn',
        contentSelector: '.menu__items, .fake-menu__items'
    });

    keyEmitter.addKeyDown(el);

    el.addEventListener('escapeKeyDown', function() {
        this.querySelector('.expand-btn').focus();
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
        click: true,
        hostSelector: 'input[role=combobox]',
        hostContainerClass: 'combobox__control',
        contentSelector: '.combobox__options',
        spacebar: true
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
    var closeTargets = nodeListToArray(dialog.querySelectorAll('.dialog__close, .dialog__mask'));
    btn.addEventListener('click', handleOpen);

    function handleOpen () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd);
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        closeTargets.forEach(function (el) {
            el.addEventListener('click', handleClose);
        });
    }

    function handleClose () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--hide', handleTransitionEnd);
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        closeTargets.forEach(function (el) {
            el.removeEventListener('click', handleClose);
        });
    }

    function handleTransitionEnd () {
        cancel = undefined;
    }
});

// set up initial matchMedia query
var mobileMediaQuery = 'all and (max-width: 600px)';
var mm = window.matchMedia(mobileMediaQuery);

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

window.addEventListener('resize', debounce(function() {
    // re-run matchMedia on resize
    mm = window.matchMedia(mobileMediaQuery);
}), 250);

window.addEventListener('load', function() {
    var sidebar = document.querySelector('nav .fixed-nav');
    var top = sidebar.offsetTop;
    
    window.addEventListener('scroll', debounce(function(event) {
        var isMobile = mm.matches;
        var y = window.scrollY || window.pageYOffset;
        
        // fix the navigation on scroll
        if (!isMobile && y >= top) {
            sidebar.classList.add('fixed');
        } else {
            sidebar.classList.remove('fixed');
        }
    }), 100);
});
