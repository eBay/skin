var Modal = require('makeup-modal');
var transition = require("./transition");
var RovingTabindex = require('makeup-roving-tabindex');
var Expander = require('makeup-expander');
var FloatingLabel = require('makeup-floating-label');
var ScrollKeyPreventer = require('makeup-prevent-scroll-keys');

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
querySelectorAllToArray('.expand-btn-example').forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// LISTBOX & MENU (similar behaviour, but with different ARIA roles)
querySelectorAllToArray('.listbox, .menu').forEach(function(widgetEl, i) {
    // check this isn't a buttonless menu
    if (widgetEl.querySelector('.expand-btn')) {
        var widget = new Expander(widgetEl, {
            collapseOnFocusOut: true,
            collapseOnMouseOut: true,
            contentSelector: '[role=listbox], [role=menu]',
            expandOnClick: true,
            focusManagement: 'focusable',
            hostSelector: '.expand-btn'
        });

        var contentEl = widgetEl.querySelector('[role=menu], [role=listbox]');
        var rovingTabindexState = RovingTabindex.createLinear(contentEl, '.listbox__option, .menu__item');

        querySelectorAllToArray('.listbox__option, .menu__item', contentEl).forEach(function(el) {
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
        hostSelector: '.expand-btn' });
});

// COMBOBOX WIDGETS (basic expand/collapse only)
querySelectorAllToArray('.combobox').forEach(function(widgetEl) {
    var inputEl = widgetEl.querySelector('input');

    inputEl.addEventListener('focus', function(e) {
        var isExpanded = inputEl.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            widgetEl.classList.remove('combobox--expanded');
        } else {
            widgetEl.classList.add('combobox--expanded');
        }

        inputEl.setAttribute('aria-expanded', !isExpanded);
    });

    inputEl.addEventListener('blur', function(e) {
        inputEl.setAttribute('aria-expanded', 'false');
        widgetEl.classList.remove('combobox--expanded');
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
querySelectorAllToArray('.infotip').forEach(function(el) {
    var widget = new Expander(el, {
        contentSelector: '.infotip__overlay',
        expandOnFocus: false,
        expandOnClick: true,
        hostSelector: '.infotip__host'
    });
});

// FLOATING LABEL
querySelectorAllToArray('.floating-label').forEach(function (el) {
    var floatingLabel = new FloatingLabel(el);
});

// TABS
querySelectorAllToArray('.tabs').forEach(function(widgetEl) {
    var rovingTabindex = RovingTabindex.createLinear(widgetEl, '.tabs__item', { wrap: true });
    var tabItems = querySelectorAllToArray('.tabs__item', widgetEl);
    var tabPanels = querySelectorAllToArray('.tabs__panel', widgetEl);

    widgetEl.addEventListener('rovingTabindexChange', function(e) {
        tabItems[e.detail.fromIndex].setAttribute('aria-selected', 'false');
        tabItems[e.detail.toIndex].setAttribute('aria-selected', 'true');

        tabPanels[e.detail.fromIndex].hidden = true;
        tabPanels[e.detail.toIndex].hidden = false;
    });
});
