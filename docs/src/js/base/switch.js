/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*/

function onKeyDown(e) {
    if (e.keyCode === 32) {
        e.preventDefault();
        this.toggle();
    }
}

function onClick() {
    this.toggle();
}

module.exports = class {
    constructor(widgetEl) {
        this.el = widgetEl;
        this.controlEl = widgetEl.querySelector('span.switch__control');

        this.controlEl.tabIndex = (this.disabled === true) ? '-1' : '0';

        this._onKeyDownListener = onKeyDown.bind(this);
        this._onClickListener = onClick.bind(this);

        this.el.classList.add('switch--js');

        this.wake();
    }

    get disabled() {
        return this.controlEl.getAttribute('aria-disabled') === 'true';
    }

    set disabled(bool) {
        this.controlEl.setAttribute('aria-disabled', bool.toString());
        this.controlEl.tabIndex = (bool === true) ? '-1' : '0';
    }

    get checked() {
        return this.controlEl.getAttribute('aria-checked') === 'true';
    }

    set checked(bool) {
        this.controlEl.setAttribute('aria-checked', bool.toString());
    }

    toggle() {
        if (!this.disabled) {
            this.checked = !(this.checked);
        }
    }

    sleep() {
        this.controlEl.removeEventListener('keydown', this._onKeyDownListener);
        this.controlEl.removeEventListener('click', this._onClickListener);
    }

    wake() {
        if (this._destroyed !== true) {
            this.controlEl.addEventListener('keydown', this._onKeyDownListener);
            this.controlEl.addEventListener('click', this._onClickListener);
        }
    }

    destroy() {
        this._destroyed = true;
        this.sleep();

        this._onKeyDownListener = null;
        this._onClickListener = null;
    }
};
