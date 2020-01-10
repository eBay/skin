/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*/

const Expander = require('makeup-expander');
const Menu = require('./menu.js');

function onButtonFirstClick(e) {
    this.menu.el.hidden = false;
}

function onMenuKeyDown(e) {
    if (e.keyCode === 27) {
        this._expander.collapse();
        this._buttonEl.focus();
    }
}

function onMenuItemSelect(e) {
    const widget = this;
    setTimeout(function() {
        widget._expander.collapse();
        widget._buttonEl.focus();
    }, 150);
}

const defaultOptions = {
    expandedClass: 'menu-button--expanded',
    menuSelector: '.menu-button__menu'
};

module.exports = class {
    constructor(widgetEl, selectedOptions) {
        this._options = Object.assign({}, defaultOptions, selectedOptions);
        this.el = widgetEl;
        this._buttonEl = widgetEl.querySelector('button');
        this.menu = new Menu(widgetEl.querySelector(this._options.menuSelector));

        this._expander = new Expander(widgetEl, {
            alwaysDoFocusManagement: true,
            collapseOnClick: true,
            collapseOnClickOut: true,
            collapseOnFocusOut: true,
            contentSelector: this._options.menuSelector,
            expandedClass: this._options.expandedClass,
            expandOnClick: true,
            focusManagement: 'focusable',
            hostSelector: 'button'
        });

        this._onButtonFirstClickListener = onButtonFirstClick.bind(this);
        this._onMenuKeyDownListener = onMenuKeyDown.bind(this);
        this._onMenuItemSelectListener = onMenuItemSelect.bind(this);

        this.wake();
    }

    sleep() {
        this._buttonEl.removeEventListener('click', this._onButtonFirstClickListener);
        this.menu.el.removeEventListener('keydown', this._onMenuKeyDownListener);
        this.menu.el.removeEventListener('menu-select', this._onMenuItemSelectListener);
        this.menu.el.removeEventListener('menu-toggle', this._onMenuItemSelectListener);
        this.menu.el.removeEventListener('menu-change', this._onMenuItemSelectListener);
    }

    wake() {
        if (this._destroyed !== true) {
            this._buttonEl.addEventListener('click', this._onButtonFirstClickListener, { once: true });
            this.menu.el.addEventListener('keydown', this._onMenuKeyDownListener);
            this.menu.el.addEventListener('menu-select', this._onMenuItemSelectListener);
            this.menu.el.addEventListener('menu-toggle', this._onMenuItemSelectListener);
            this.menu.el.addEventListener('menu-change', this._onMenuItemSelectListener);
        }
    }

    destroy() {
        this._destroyed = true;

        this.sleep();

        this._onButtonFirstClickListener = null;
        this._onMenuKeyDownListener = null;
        this._onMenuItemSelectListener = null;
    }
};
