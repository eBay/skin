/* eslint-disable no-console */

// SVG for Everybody adds SVG External Content support to all browsers.
// https://github.com/jonathantneal/svg4everybody
// eslint-disable-next-line no-undef
svg4everybody();

const pageWidgets = [];

const RovingTabindex = require('makeup-roving-tabindex');
const Expander = require('makeup-expander');
const FloatingLabel = require('makeup-floating-label');
const ScrollKeyPreventer = require('makeup-prevent-scroll-keys');
const Combobox = require('./combobox.js');
const DialogButton = require('./dialog-button.js');
const Listbox = require('./listbox.js');
const ListboxButton = require('./listbox-button.js');
const Menu = require('./menu.js');
const MenuButton = require('./menu-button.js');
const Switch = require('makeup-switch-class');

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
document.querySelectorAll('.expand-btn:not([aria-haspopup])').forEach(function(el) {
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

// CONFIRM-DIALOG
document.querySelectorAll('.dialog-confirm-button').forEach(function(widgetEl) {
    pageWidgets.push(new DialogButton(widgetEl, { dialogBaseClass: 'confirm-dialog' }));
});

// LIGHTBOX-DIALOG
document.querySelectorAll('.dialog-lightbox-button').forEach(function(widgetEl) {
    pageWidgets.push(new DialogButton(widgetEl, { dialogBaseClass: 'lightbox-dialog' }));
});

// FULLSCREEN-DIALOG
document.querySelectorAll('.dialog-fullscreen-button').forEach(function(widgetEl) {
    pageWidgets.push(new DialogButton(widgetEl, { dialogBaseClass: 'fullscreen-dialog' }));
});

// PANEL-DIALOG
document.querySelectorAll('.dialog-panel-button').forEach(function(widgetEl) {
    pageWidgets.push(new DialogButton(widgetEl, { dialogBaseClass: 'panel-dialog' }));
});

// DRAWER (modal dialog)
document.querySelectorAll('.dialog-drawer-button').forEach(function(widgetEl) {
    const widget = new DialogButton(widgetEl, { dialogBaseClass: 'drawer-dialog' });

    pageWidgets.push(widget);

    // this bit is a little hacky until I create a drawer.js subclass
    widget.dialog._el.querySelector('.drawer-dialog__handle').addEventListener('click', function() {
        widget.dialog._el.querySelector('.drawer-dialog__window').classList.toggle('drawer-dialog__window--expanded');
    });
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

document.querySelectorAll('.legacy-floating-label').forEach(function(el) {
    pageWidgets.push(new FloatingLabel(el, {
        labelElementInlineModifier: 'legacy-floating-label__label--inline',
        labelElementDisabledModifier: 'legacy-floating-label__label--disabled',
        labelElementAnimateModifier: 'legacy-floating-label__label--animate',
        textboxElementBackgroundRGB: ['rgba(0, 0, 0, 0)']
    }));
});

document.querySelectorAll('.progress').forEach(function(progress, i) {
    console.log(progress);
    const startButton = document.getElementsByName(`start-progress-${i}`)[0];
    const endButton = document.getElementsByName(`end-progress-${i}`)[0];
    let interval;
    startButton.addEventListener('click', function() {
    interval = setInterval(function() {
        const value = progress.value;
        const valuePlus = value + 1;
        let final;
        if(valuePlus > 100) {
            final = 0;
        } else {
            final = valuePlus;
        }
        progress.value = final;
        }, 100);
    })
    endButton.addEventListener('click', function() {
        if(interval) {
            clearInterval(interval);
        }
    });
})

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

// SWITCH - CHECKBOX/FORM VERSION
document.querySelectorAll('input.switch__control').forEach(function(widgetEl) {
    widgetEl.setAttribute('aria-checked', widgetEl.checked ? 'true' : 'false');

    widgetEl.addEventListener('change', function(e) {
        e.target.setAttribute('aria-checked', e.target.checked ? 'true' : 'false');
    });
});

// SWITCH - ARIA/JAVASCRIPT VERSION
document.querySelectorAll('.switch:not(.switch--form)').forEach(function(widgetEl) {
    pageWidgets.push(new Switch(widgetEl, {
        bem: {
            control: 'switch__control'
        }
    }));

    widgetEl.addEventListener('makeup-switch-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});

// TOAST (non-modal dialog)
document.querySelectorAll('.dialog-toast-button').forEach(function(widgetEl) {
    pageWidgets.push(new DialogButton(widgetEl, { dialogBaseClass: 'toast-dialog' }));
});
