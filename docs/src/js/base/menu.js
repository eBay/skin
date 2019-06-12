/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*/

const RovingTabIndex = require('makeup-roving-tabindex');
const PreventScrollKeys = require('makeup-prevent-scroll-keys');

function onKeyDown(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        processMenuItemAction(this.el, e.target);
    }
    else if (e.keyCode === 32) {
        processMenuItemAction(this.el, e.target);
    }
}

function onClick(e) {
    processMenuItemAction(this.el, e.target);
}

function processMenuItemAction(widgetEl, menuItemEl) {
    switch (menuItemEl.getAttribute('role')) {
        case 'menuitemcheckbox':
            doMenuItemCheckbox(widgetEl, menuItemEl);
            break;
        case 'menuitemradio':
            doMenuItemRadio(widgetEl, menuItemEl, widgetEl.querySelectorAll(`[data-menuitemradio-name=${menuItemEl.dataset.menuitemradioName}]`));
            break;
        default:
            doMenuItem(widgetEl, menuItemEl);
            break;
    }
}

function doMenuItem(widgetEl, menuItemEl) {
    widgetEl.dispatchEvent(new CustomEvent('menu-select', {
        detail: {
            el: menuItemEl
        }
    }));
}

function doMenuItemCheckbox(widgetEl, menuItemEl) {
    menuItemEl.setAttribute('aria-checked', (menuItemEl.getAttribute('aria-checked') === 'true') ? 'false' : 'true');

    widgetEl.dispatchEvent(new CustomEvent('menu-toggle', {
        detail: {
            el: menuItemEl,
            checked: menuItemEl.getAttribute('aria-checked')
        }
    }));
}

function doMenuItemRadio(widgetEl, menuItemEl, radioGroupEls) {
    radioGroupEls.forEach(function(el) {
        el.setAttribute('aria-checked', 'false');
    });

    menuItemEl.setAttribute('aria-checked', 'true');

    widgetEl.dispatchEvent(new CustomEvent('menu-change', {
        detail: {
            el: menuItemEl
        }
    }));
}

module.exports = class {
    constructor(widgetEl) {
        this.el = widgetEl;

        this._rovingTabIndex = RovingTabIndex.createLinear(this.el, '[role^=menuitem]' , {
            autoReset: 0
        });

        PreventScrollKeys.add(this.el);

        this._onKeyDownListener = onKeyDown.bind(this);
        this._onClickListener = onClick.bind(this);

        this.el.classList.add('menu--js');

        this.wake();
    }

    get items() {
        return this.el.querySelectorAll('[role^=menuitem]');
    }

    sleep() {
        this.el.removeEventListener('keydown', this._onKeyDownListener);
        this.el.removeEventListener('click', this._onClickListener);
    }

    wake() {
        if (this._destroyed !== true) {
            this.el.addEventListener('keydown', this._onKeyDownListener);
            this.el.addEventListener('click', this._onClickListener);
        }
    }

    destroy() {
        this._destroyed = true;
        this.sleep();

        this._onKeyDownListener = null;
        this._onClickListener = null;
    }
}
