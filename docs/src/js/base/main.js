var Modal = require('makeup-modal');
var transition = require("./transition");
var RovingTabindex = require('makeup-roving-tabindex');
var Expander = require('makeup-expander');
var FloatingLabel = require('makeup-floating-label');
var ScrollKeyPreventer = require('makeup-prevent-scroll-keys');
var ActiveDescendant = require('makeup-active-descendant');

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
querySelectorAllToArray('.expand-btn-example').forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// MENU
querySelectorAllToArray('.menu').forEach(function(widgetEl, i) {
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

        querySelectorAllToArray('.menu__item', contentEl).forEach(function(el) {
            ScrollKeyPreventer.add(el);
        });
    }
});

// FAKE MENU
querySelectorAllToArray('.fake-menu').forEach(function(widgetEl) {
    var widget = new Expander(widgetEl, {
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        contentSelector: '.fake-menu__items',
        expandOnClick: true,
        hostSelector: '.expand-btn'
    });
});

// COMBOBOX
querySelectorAllToArray('.combobox').forEach(function(widgetEl) {
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
querySelectorAllToArray('.listbox').forEach(function(widgetEl) {
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
    var activeDescendantWidget = ActiveDescendant.createLinear(widgetEl, focusEl, ownedEl, '[role=option]', {
        activeDescendantClassName: 'listbox__option--active'
    });

    ScrollKeyPreventer.add(widgetEl.querySelector('[role=listbox]'));

    var optionEls = querySelectorAllToArray('[role=option]', ownedEl);
    var buttonLabelEl = focusEl.querySelector('.expand-btn__cell > span:first-child');

    widgetEl.addEventListener('activeDescendantChange', function(e) {
        // todo: update button label with value of active option (running into a bug which is preventing this)
    });
});

// DIALOG
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
querySelectorAllToArray('.tooltip').forEach(function(widgetEl) {
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
querySelectorAllToArray('.infotip').forEach(function(widgetEl) {
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
querySelectorAllToArray('.tourtip').forEach(function(widgetEl) {
    widgetEl.querySelector('.tourtip__close').addEventListener('click', function() {
        widgetEl.classList.remove('tourtip--expanded');
    });
});

// FLOATING LABEL
querySelectorAllToArray('.floating-label').forEach(function (el) {
    var floatingLabel = new FloatingLabel(el);
});

// TABS
querySelectorAllToArray('.tabs').forEach(function(widgetEl) {
    var rovingTabindex = RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    var tabItems = querySelectorAllToArray('[role=tab]', widgetEl);
    var tabPanels = querySelectorAllToArray('[role=tabpanel]', widgetEl);

    widgetEl.addEventListener('rovingTabindexChange', function(e) {
        tabItems[e.detail.fromIndex].setAttribute('aria-selected', 'false');
        tabItems[e.detail.toIndex].setAttribute('aria-selected', 'true');

        tabPanels[e.detail.fromIndex].hidden = true;
        tabPanels[e.detail.toIndex].hidden = false;
    });

    querySelectorAllToArray('[role=tab]', widgetEl).forEach(function(el) {
        ScrollKeyPreventer.add(el);
    });
});
