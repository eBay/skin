/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*/

const Dialog = require('./dialog.js');

function onClick() {
    this.dialog.open = true;
}

function onClose() {
    if (this.dialog._isModal) {
        this._el.focus();
    }
}

const defaultOptions = {
    dialogBaseClass: 'dialog'
};

module.exports = class {
    constructor(widgetEl, selectedOptions) {
        this._options = Object.assign({}, defaultOptions, selectedOptions);

        this._el = widgetEl;

        const dialogId = this._el.dataset.makeupDialogButtonFor;
        const dialogEl = document.getElementById(dialogId);

        this.dialog = new Dialog(dialogEl, {
            dialogBaseClass: this._options.dialogBaseClass
        });

        this._onClickListener = onClick.bind(this);
        this._onDialogCloseListener = onClose.bind(this);

        this._el.classList.add(`${this._options.dialogBaseClass}-button--js`);

        this._destroyed = false;

        this.observeEvents();
    }

    get dialog() {
        return this._dialog;
    }

    set dialog(dialogWidget) {
        this._dialog = dialogWidget;
    }

    observeEvents() {
        if (this._destroyed !== true) {
            this._el.addEventListener('click', this._onClickListener);
            this.dialog._el.addEventListener(`${this._options.dialogBaseClass}-close`, this._onDialogCloseListener);
        }
    }

    unobserveEvents() {
        this._el.removeEventListener('click');
        this.dialog._el.removeEventListener(`${this._options.dialogBaseClass}-close`, this._onDialogCloseListener);
    }

    destroy() {
        this._destroyed = true;

        this.unobserveEvents();

        this._onClickListener = null;
        this._onDialogCloseListener = null;
    }
};
