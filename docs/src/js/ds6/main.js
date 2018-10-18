// Most of this is code for the menu and combobox logic, which will be abstracted away into their own modules at some point

// makeup-js accessibility modules
var Expander = require('makeup-expander');
var scrollKeyPreventer = require('makeup-prevent-scroll-keys');
var modal = require('makeup-modal');
var transition = require("./transition");
var FloatingLabel = require('makeup-floating-label');

// util functions
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector, parentNode) {
    parentNode = parentNode || document;
    return nodeListToArray(parentNode.querySelectorAll(selector));
}

// EXPAND BUTTONS - Toggle state
querySelectorAllToArray('.expand-btn-example').forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// LISTBOX, MENU & FAKE MENU WIDGETS - EXPAND/COLLAPSE ONLY
querySelectorAllToArray('.listbox, .menu, .fake-menu').forEach(function(widgetEl, widgetIndex) {
    var buttonEl = widgetEl.querySelector('button');

    if (buttonEl) {
        buttonEl.addEventListener('click', function(e) {
            var isExpanded = buttonEl.getAttribute('aria-expanded') === 'true';
            buttonEl.setAttribute('aria-expanded', !isExpanded);
        });

        buttonEl.addEventListener('blur', function(e) {
            buttonEl.setAttribute('aria-expanded', 'false');
        });
    }
});

// TOOLTIP WIDGETS
querySelectorAllToArray('.tooltip.tooltip--hover').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnClick: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    });
});

// INFOTIP WIDGETS
querySelectorAllToArray('.tooltip:not(.tooltip--hover)').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.tooltip__overlay',
        expandOnClick: true,
        hostSelector: '.tooltip__host'
    });

    var inputEl = el.querySelector('.tooltip__host');
    var tooltipWindow = inputEl.nextElementSibling;
    var tooltipClose = tooltipWindow.querySelector('.tooltip__close');

    if (tooltipClose) {
        tooltipClose.addEventListener('click', function(e) {
            widget.collapse();
            inputEl.focus();
        });
    }
});

// COMBOBOX WIDGETS (basic expand/collapse only)
querySelectorAllToArray('.combobox').forEach(function(widgetEl, widgetIndex) {
    var inputWrapperEl = widgetEl.querySelector('.combobox__control');
    var inputEl = widgetEl.querySelector('input');

    inputEl.addEventListener('focus', function(e) {
        var isExpanded = inputEl.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            inputWrapperEl.classList.remove('combobox__control--expanded');
        } else {
            inputWrapperEl.classList.add('combobox__control--expanded');
        }

        inputEl.setAttribute('aria-expanded', !isExpanded);
    });

    inputEl.addEventListener('blur', function(e) {
        inputEl.setAttribute('aria-expanded', 'false');
        inputWrapperEl.classList.remove('combobox__control--expanded');
    });
});

// DIALOG WIDGETS
querySelectorAllToArray('.dialog-button').forEach(function (btn) {
    var cancel;
    var dialog = btn.nextElementSibling;
    var dialogBody = dialog.querySelector('.dialog__body');
    var dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd(true));
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute("style", "overflow:hidden");
        modal.modal(dialog.querySelector('.dialog__window'));
        dialogClose.focus();
    }

    function handleClose (ev) {
        if (dialogBody.contains(ev.target)) {
            return;
        }

        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--hide', handleTransitionEnd(false));
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        dialog.removeEventListener('click', handleClose, true);
        document.body.removeAttribute("style");
        modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd (isOpening) {
        // focus on the close button
        if (isOpening) {
            dialogClose.focus();
        }

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

    window.addEventListener('scroll', fixTheSidebar);
});

querySelectorAllToArray('.floating-label').forEach(function(el) {
    var floatingLabel = new FloatingLabel(el);
});
