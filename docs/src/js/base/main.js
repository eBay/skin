var Modal = require('makeup-modal');
var transition = require("./transition");
var RovingTabindex = require('makeup-roving-tabindex');
var Expander = require('makeup-expander');
var FloatingLabel = require('makeup-floating-label');
var ScrollKeyPreventer = require('makeup-prevent-scroll-keys');
var ActiveDescendant = require('makeup-active-descendant');

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
document.querySelectorAll('.expand-btn-example').forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// MENU
document.querySelectorAll('.menu').forEach(function(widgetEl, i) {
    // check this isn't a buttonless menu
    if (widgetEl.querySelector('.expand-btn')) {
        var widget = new Expander(widgetEl, {
            autoCollapse: true,
            contentSelector: '[role=menu]',
            expandOnClick: true,
            focusManagement: 'focusable',
            hostSelector: '.expand-btn'
        });

        var contentEl = widgetEl.querySelector('[role=menu]');
        var rovingTabindexState = RovingTabindex.createLinear(contentEl, '.menu__item');

        contentEl.querySelectorAll('.menu__item').forEach(function(el) {
            ScrollKeyPreventer.add(el);
        });
    }
});

// FAKE MENU
document.querySelectorAll('.fake-menu').forEach(function(widgetEl) {
    var widget = new Expander(widgetEl, {
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        contentSelector: '.fake-menu__items',
        expandOnClick: true,
        hostSelector: '.expand-btn'
    });
});

// COMBOBOX
document.querySelectorAll('.combobox').forEach(function(widgetEl) {
    var expanderWidget = new Expander(widgetEl, {
        autoCollapse: true,
        contentSelector: '[role=listbox]',
        expandedClass: 'combobox--expanded',
        expandOnFocus: true,
        hostSelector: 'input'
    });

    var focusEl = widgetEl.querySelector('input');
    var ownedEl = widgetEl.querySelector('[role=listbox]');
    var activeDescendantWidget = ActiveDescendant.createLinear(widgetEl, focusEl, ownedEl, '[role=option]', {
        activeDescendantClassName: 'combobox__option--active'
    });
});

// LISTBOX
document.querySelectorAll('.listbox').forEach(function(widgetEl) {
    var expanderWidget = new Expander(widgetEl, {
        autoCollapse: true,
        contentSelector: '[role=listbox]',
        expandedClass: 'listbox--expanded',
        expandOnClick: true,
        focusManagement: 'content',
        hostSelector: 'button'
    });

    var focusEl = widgetEl.querySelector('button');
    var ownedEl = widgetEl.querySelector('[role=listbox]');
    var optionEls = ownedEl.querySelectorAll('[role=option]');
    var initialIndex = 0;

    // check for existing selected state
    optionEls.forEach(function(el, elIndex) {
        if (el.hasAttribute('aria-selected')) {
            initialIndex = elIndex;
        }
    });

    var activeDescendantWidget = ActiveDescendant.createLinear(widgetEl, ownedEl, ownedEl, '[role=option]', {
        activeDescendantClassName: 'listbox__option--active',
        autoInit: initialIndex,
        autoReset: null
    });

    ScrollKeyPreventer.add(widgetEl.querySelector('[role=listbox]'));

    var buttonLabelEl = focusEl.querySelector('.expand-btn__cell > span:first-child');

    widgetEl.addEventListener('activeDescendantChange', function(e) {
        if (e.detail.toIndex > -1) {
            buttonLabelEl.innerText = optionEls[e.detail.toIndex].innerText;
        }
    });
});

// DIALOG
document.querySelectorAll('.dialog-button').forEach(function (btn) {
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
        Modal.modal(dialog.querySelector('.dialog__window'));
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
        Modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd (isOpening) {
        // focus on the close button
        if (isOpening) {
            // hack: safari needs an additional timeout
            window.setTimeout(function() {
                dialogClose.focus();
            }, 250);
        }

        cancel = undefined;
    }
});

// TOOLTIP
document.querySelectorAll('.tooltip').forEach(function(widgetEl) {
    var widget = new Expander(widgetEl, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    });
});

// INFOTIP
document.querySelectorAll('.infotip').forEach(function(widgetEl) {
    var widget = new Expander(widgetEl, {
        contentSelector: '.infotip__overlay',
        expandOnFocus: false,
        expandOnClick: true,
        hostSelector: '.infotip__host'
    });

    widgetEl.querySelector('.infotip__close').addEventListener('click', function() {
        widget.collapse();
    });
});

// TOURTIP
document.querySelectorAll('.tourtip').forEach(function(widgetEl) {
    widgetEl.querySelector('.tourtip__close').addEventListener('click', function() {
        widgetEl.classList.remove('tourtip--expanded');
    });
});

// FLOATING LABEL
document.querySelectorAll('.floating-label').forEach(function (el) {
    var floatingLabel = new FloatingLabel(el);
});

// TABS
document.querySelectorAll('.tabs').forEach(function(widgetEl) {
    var rovingTabindex = RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    var tabItems = widgetEl.querySelectorAll('[role=tab]');
    var tabPanels = widgetEl.querySelectorAll('[role=tabpanel]');

    widgetEl.addEventListener('rovingTabindexChange', function(e) {
        tabItems[e.detail.fromIndex].setAttribute('aria-selected', 'false');
        tabItems[e.detail.toIndex].setAttribute('aria-selected', 'true');

        tabPanels[e.detail.fromIndex].hidden = true;
        tabPanels[e.detail.toIndex].hidden = false;
    });

    widgetEl.querySelectorAll('[role=tab]').forEach(function(el) {
        ScrollKeyPreventer.add(el);
    });
});
