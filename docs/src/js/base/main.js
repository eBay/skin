/* eslint-disable no-console */

const pageWidgets = [];

const Modal = require('makeup-modal');
const transition = require('./transition');
const RovingTabindex = require('makeup-roving-tabindex');
const Expander = require('makeup-expander');
const FloatingLabel = require('makeup-floating-label');
const ScrollKeyPreventer = require('makeup-prevent-scroll-keys');
const Combobox = require('./combobox.js');
const Listbox = require('./listbox.js');
const ListboxButton = require('./listbox-button.js');
const Menu = require('./menu.js');
const MenuButton = require('./menu-button.js');
const Switch = require('./switch.js');

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
document.querySelectorAll('.expand-btn-example').forEach(function(el) {
    el.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

document.querySelectorAll('.filter-menu-button--form button').forEach(function(el) {
    el.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

// FAKE MENU BUTTON
document.querySelectorAll('.fake-menu-button').forEach(function(widgetEl) {
    pageWidgets.push(new Expander(widgetEl, {
        expandOnClick: true,
        collapseOnFocusOut: true,
        collapseOnClickOut: true,
        contentSelector: '.fake-menu-button__menu',
        focusManagement: 'focusable',
        hostSelector: '.expand-btn'
    }));
});

// COMBOBOX
document.querySelectorAll('.combobox:not(.combobox--readonly)').forEach(function(widgetEl) {
    pageWidgets.push(new Combobox(widgetEl, {
        autoSelect: false
    }));

    widgetEl.addEventListener('combobox-change', function(e) {
        console.log(e.type, e.detail);
    });
});

// READONLY COMBOBOX
document.querySelectorAll('.combobox--readonly').forEach(function(widgetEl) {
    pageWidgets.push(new Combobox(widgetEl));

    widgetEl.addEventListener('combobox-change', function(e) {
        console.log(e.type, e.detail);
    });
});

// DIALOG
document.querySelectorAll('.dialog-button').forEach(function(btn) {
    let cancel;
    const dialog = btn.nextElementSibling;
    const dialogBody = dialog.querySelector('.dialog__body, .dialog__main');
    const dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen() {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd(true));
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute('style', 'overflow:hidden');
        Modal.modal(dialog.querySelector('.dialog__window'));
    }

    function handleClose(ev) {
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
        document.body.removeAttribute('style');
        Modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd(isOpening) {
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
    pageWidgets.push(new Expander(widgetEl, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    }));
});

// INFOTIP
document.querySelectorAll('.infotip').forEach(function(widgetEl) {
    const widget = new Expander(widgetEl, {
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
document.querySelectorAll('.floating-label').forEach(function(el) {
    pageWidgets.push(new FloatingLabel(el));
});

// TABS
document.querySelectorAll('.tabs').forEach(function(widgetEl) {
    RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    const tabItems = widgetEl.querySelectorAll('[role=tab]');
    const tabPanels = widgetEl.querySelectorAll('[role=tabpanel]');

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

document.querySelectorAll('.listbox').forEach(function(widgetEl) {
    pageWidgets.push(new Listbox(widgetEl, {
        autoSelect: widgetEl.dataset.autoSelect === 'true'
    }));

    widgetEl.addEventListener('listbox-change', function(e) {
        console.log(e.type, e.detail);
    });
});

document.querySelectorAll('.listbox-button').forEach(function(widgetEl) {
    pageWidgets.push(new ListboxButton(widgetEl, {
        labelSelector: '.expand-btn__text'
    }));

    widgetEl.addEventListener('listbox-button-change', function(e) {
        console.log(e.type, e.detail);
    });
});

document.querySelectorAll('.menu-button').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        menuSelector: '.menu-button__menu'
    });

    widget.menu.el.addEventListener('menu-select', function(e) {
        console.log(e.type, e.detail);
    });

    widget.menu.el.addEventListener('menu-change', function(e) {
        console.log(e.type, e.detail);
    });

    widget.menu.el.addEventListener('menu-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});

document.querySelectorAll('.filter-menu-button:not(.filter-menu-button--form)').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        expandedClass: 'filter-menu-button--expanded',
        menuSelector: '.filter-menu-button__menu'
    });

    widget.menu.el.addEventListener('menu-select', function(e) {
        console.log(e.type, e.detail);
    });

    widget.menu.el.addEventListener('menu-change', function(e) {
        console.log(e.type, e.detail);
    });

    widget.menu.el.addEventListener('menu-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});

document.querySelectorAll('.menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('menu-select', function(e) {
        console.log(e.type, e.detail);
    });

    widgetEl.addEventListener('menu-change', function(e) {
        console.log(e.type, e.detail);
    });

    widgetEl.addEventListener('menu-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});

document.querySelectorAll('.filter-menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('menu-select', function(e) {
        console.log(e.type, e.detail);
    });

    widgetEl.addEventListener('menu-change', function(e) {
        console.log(e.type, e.detail);
    });

    widgetEl.addEventListener('menu-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});

// SWITCH - FORM BASED VERSION
document.querySelectorAll('input.switch__control').forEach(function(widgetEl) {
    widgetEl.setAttribute('aria-checked', widgetEl.checked ? 'true' : 'false');

    widgetEl.addEventListener('change', function(e) {
        e.target.setAttribute('aria-checked', e.target.checked ? 'true' : 'false');
    });
});

// SWITCH - JAVASCRIPT BASED VERSION
document.querySelectorAll('.switch:not(.switch--form)').forEach(function(widgetEl) {
    pageWidgets.push(new Switch(widgetEl));
});
