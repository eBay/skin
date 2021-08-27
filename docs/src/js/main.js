/* eslint-disable no-console */

if (window.URLSearchParams !== undefined) {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has('debug') && searchParams.get('debug') === '1') {
        document.querySelector('.page-grid').classList.add('page-grid--debug');
    }

    if (searchParams.has('dark') && searchParams.get('dark') === '1') {
        document.querySelector('body').classList.add('skin-experiment-dark-mode');
    }
}

const pageWidgets = [];

const RovingTabindex = require('makeup-roving-tabindex');
const Expander = require('makeup-expander');
const FloatingLabel = require('makeup-floating-label');
const ScrollKeyPreventer = require('makeup-prevent-scroll-keys');
const Combobox = require('makeup-combobox');
const DialogButton = require('makeup-dialog-button');
const Listbox = require('makeup-listbox');
const ListboxButton = require('makeup-listbox-button');
const Menu = require('makeup-menu');
const MenuButton = require('makeup-menu-button');
const Switch = require('makeup-switch');
const LightboxDialog = require('makeup-lightbox-dialog');
const AlertDialog = require('makeup-alert-dialog');
const ConfirmDialog = require('makeup-confirm-dialog');
const DrawerDialog = require('makeup-drawer-dialog');
const FullscreenDialog = require('makeup-fullscreen-dialog');
const InputDialog = require('makeup-input-dialog');
const PanelDialog = require('makeup-panel-dialog');
const SnackbarDialog = require('makeup-snackbar-dialog');
const ToastDialog = require('makeup-toast-dialog');

let progressBarInterval;

const logEvent = (e) => console.log(e.type, e.detail); // eslint-disable-line no-console

// LOADING BUTTON
document.getElementById('loading-button').addEventListener('click', function() {
    const button = this;
    button.setAttribute('aria-label', 'Loading...');
    button.setAttribute('aria-disabled', 'true');
    button.innerHTML = `<span class="btn__cell"><span class="progress-spinner"></span></span>`;

    window.setTimeout(function() {
        button.setAttribute('aria-disabled', 'false');
        button.removeAttribute('aria-label');
        button.innerHTML = `Done`;
    }, 2000);
});

// MIXED CHECKBOX
document.querySelectorAll('.checkbox input[aria-checked="mixed"]').forEach(function(el) {
    el.addEventListener('click', function() {
        const isChecked = (this.checked === true);

        this.setAttribute('aria-checked', isChecked ? 'mixed' : 'false');
    });
});

// BREADCRUMBS
document.querySelectorAll('.breadcrumbs').forEach(function(el) {
    const width = el.offsetWidth;
    const scrollLength = el.scrollWidth;
    const difference = scrollLength - width;
    if (difference) {
        el.scroll(difference, 0);
    }
})

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
        hostSelector: widgetEl.querySelector('.expand-btn') ? '.expand-btn' : '.icon-btn'
    }));
});

// COMBOBOX
document.querySelectorAll('.combobox').forEach(function(widgetEl) {
    pageWidgets.push(new Combobox(widgetEl));

    widgetEl.addEventListener('makeup-combobox-change', logEvent);
});

// DIALOGS
document.querySelectorAll('.dialog-button').forEach(function(el) {
        const dialogId = el.dataset.makeupFor;
        const dialogEl = document.getElementById(dialogId);
        const dialogClassList = dialogEl.classList;
        let dialogWidget;

        if (dialogClassList.contains('confirm-dialog')) {
            dialogWidget = new ConfirmDialog(dialogEl);
        } else if (dialogClassList.contains('alert-dialog')) {
            dialogWidget = new AlertDialog(dialogEl);
        } else if (dialogClassList.contains('lightbox-dialog--input')) {
            dialogWidget = new InputDialog(dialogEl);
        } else if (dialogClassList.contains('fullscreen-dialog')) {
            dialogWidget = new FullscreenDialog(dialogEl);
        } else if (dialogClassList.contains('snackbar-dialog')) {
            dialogWidget = new SnackbarDialog(dialogEl);
        } else if (dialogClassList.contains('toast-dialog')) {
            dialogWidget = new ToastDialog(dialogEl);
        } else if (dialogClassList.contains('drawer-dialog')) {
            dialogWidget = new DrawerDialog(dialogEl);
        } else if (dialogClassList.contains('panel-dialog')) {
            dialogWidget = new PanelDialog(dialogEl);
        } else if (dialogClassList.contains('lightbox-dialog')) {
            dialogWidget = new LightboxDialog(dialogEl);
        }

        pageWidgets.push(new DialogButton(el, dialogWidget));

        dialogWidget._el.addEventListener('dialog-open', logEvent);
        dialogWidget._el.addEventListener('dialog-close', logEvent);
        dialogWidget._el.addEventListener('dialog-acknowledge', logEvent);
        dialogWidget._el.addEventListener('dialog-confirm', logEvent);
        dialogWidget._el.addEventListener('dialog-reject', logEvent);
        dialogWidget._el.addEventListener('dialog-cta', logEvent);
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

// PROGRESS BAR PLAY
document.querySelectorAll('.progress-bar-toggle').forEach(function(el) {
    const progressId = el.dataset.progressPlayButtonFor;
    const progress = document.getElementById(progressId);
    const progressRun = function () {
        const value = progress.value;
        const valuePlus = value + 10;
        let final;
        if (valuePlus > 100) {
            final = 100;
        } else {
            final = valuePlus;
        }
        progress.value = final;
    }

    el.addEventListener('click', function() {
        if(progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        } else {
            progressRun();
            progressBarInterval = setInterval(progressRun, 1000);
        }
    });
});

// PROGRESS BAR RESET
document.querySelectorAll('.progress-bar-reset').forEach(function(el) {
    const progressId = el.dataset.progressResetButtonFor;
    const progress = document.getElementById(progressId);

    el.addEventListener('click', function() {
        if(progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        }
        progress.value = 0;
    });
});

// TABS
document.querySelectorAll('.tabs').forEach(function(widgetEl) {
    RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    const tabItems = widgetEl.querySelectorAll('[role=tab]');
    const tabPanels = widgetEl.querySelectorAll('[role=tabpanel]');

    ScrollKeyPreventer.add(widgetEl);

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
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true'
    }));

    widgetEl.addEventListener('makeup-listbox-change', logEvent);
});

document.querySelectorAll('.listbox-button').forEach(function(widgetEl) {
    pageWidgets.push(new ListboxButton(widgetEl, {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true'
    }));

    widgetEl.addEventListener('makeup-listbox-button-change', logEvent);
});

document.querySelectorAll('.menu-button').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        menuSelector: '.menu-button__menu',
        buttonTextSelector: `.expand-btn__text`
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu-button:not(.filter-menu-button--form)').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        expandedClass: 'filter-menu-button--expanded',
        menuSelector: '.filter-menu-button__menu'
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
    widgetEl.addEventListener('makeup-menu-toggle', logEvent);
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

    widgetEl.addEventListener('makeup-switch-toggle', logEvent);
});
