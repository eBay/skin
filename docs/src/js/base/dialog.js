/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*/

const Modal = require('makeup-modal');
const focusables = require('makeup-focusables');
const transition = require('./transition');

function doFocusManagement(dialogWidget) {
    const autoFocusEl = dialogWidget._el.querySelector('[autofocus]');

    if (autoFocusEl) {
        autoFocusEl.focus();
    } else if (dialogWidget._confirmButtonEl) {
        dialogWidget._confirmButtonEl.focus();
    } else {
        dialogWidget.focusables[0].focus();
    }
}

function onOpenTransitionEnd() {
    this._el.hidden = false;
    this._cancelTransition = undefined;

    if (this._isModal) {
        document.body.classList.add('has-modal');
        doFocusManagement(this);
        Modal.modal(this._el);
    }

    this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-open`));
    this.observeEvents();
}

function onCloseTransitionEnd() {
    Modal.unmodal();
    document.body.classList.remove('has-modal');
    this._el.hidden = true;
    this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-close`));
    this._cancelTransition = undefined;
    this.observeEvents();
}

function onRejectButtonClick() {
    this.open = false;
}

function onConfirmButtonClick() {
    this.open = false;
}

function onCloseButtonClick() {
    this.open = false;
}

function onKeyDown(e) {
    if (e.keyCode === 27) {
        this.open = false;
    }
}

const defaultOptions = {
    dialogBaseClass: 'dialog'
};

module.exports = class {
    constructor(widgetEl, selectedOptions) {
        this._options = Object.assign({}, defaultOptions, selectedOptions);

        const baseClass = this._options.dialogBaseClass;

        this._el = widgetEl;

        this._isModal = this._el.getAttribute('aria-modal') === 'true';
        this._hasTransitions = (this._el.dataset) ? this._el.dataset.makeupDialogHasTransitions === 'true' : false;

        this._windowEl = this._el.querySelector(`.${baseClass}__window`);
        this._closeButtonEl = this._el.querySelector(`.${baseClass}__close`);
        this._confirmButtonEl = this._el.querySelector(`.${baseClass}__confirm`);
        this._rejectButtonEl = this._el.querySelector(`.${baseClass}__reject`);

        this._onCloseButtonClickListener = onCloseButtonClick.bind(this);
        this._onConfirmButtonClickListener = onConfirmButtonClick.bind(this);
        this._onRejectButtonClickListener = onRejectButtonClick.bind(this);
        this._onKeyDownListener = onKeyDown.bind(this);
        this._onOpenTransitionEndListener = onOpenTransitionEnd.bind(this);
        this._onCloseTransitionEndListener = onCloseTransitionEnd.bind(this);

        this._el.classList.add(`${baseClass}--js`);

        if (this._isModal && this.open) {
            document.body.classList.add('has-modal');
            doFocusManagement(this);
            Modal.modal(this._el);
        }

        this.observeEvents();
    }

    get focusables() {
        return focusables(this._windowEl);
    }

    get open() {
        return !this._el.hidden;
    }

    set open(bool) {
        if (bool === true && this.open !== true) {
            if (this._hasTransitions) {
                this.unobserveEvents();

                if (this._cancelTransition) {
                    this._cancelTransition();
                }

                this._cancelTransition = transition(
                    this._el,
                    `${this._options.dialogBaseClass}--show`,
                    this._onOpenTransitionEndListener
                );
            } else {
                this._el.hidden = false;

                if (this._isModal) {
                    doFocusManagement(this);
                }

                this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-open`));
            }
        } else if (bool === false && this.open !== false) {
            if (this._hasTransitions) {
                this.unobserveEvents();

                if (this._cancelTransition) {
                    this._cancelTransition();
                }

                this._cancelTransition = transition(
                    this._el,
                    `${this._options.dialogBaseClass}--hide`,
                    this._onCloseTransitionEndListener
                );
            } else {
                this._el.hidden = true;
                this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-close`));
            }
        }
    }

    unobserveEvents() {
        this._el.removeEventListener('click', this._onCloseButtonClickListener);
        document.removeEventListener('keydown', this._onKeyDownListener);

        if (this._confirmButtonEl) {
            this._confirmButtonEl.removeEventListener('click', this._onConfirmButtonClickListener);
        }

        if (this._rejectButtonEl) {
            this._rejectButtonEl.removeEventListener('click', this._onRejectButtonClickListener);
        }
    }

    observeEvents() {
        if (this._destroyed !== true) {
            this._closeButtonEl.addEventListener('click', this._onCloseButtonClickListener);
            document.addEventListener('keydown', this._onKeyDownListener);

            if (this._confirmButtonEl) {
                this._confirmButtonEl.addEventListener('click', this._onConfirmButtonClickListener);
            }

            if (this._rejectButtonEl) {
                this._rejectButtonEl.addEventListener('click', this._onRejectButtonClickListener);
            }
        }
    }

    destroy() {
        this._destroyed = true;
        this.unobserveEvents();

        this._onCloseButtonClickListener = null;
        this._onConfirmButtonClickListener = null;
        this._onRejectButtonClickListener = null;
        this._onKeyDownListener = null;
        this._onOpenTransitionEndListener = null;
        this._onCloseTransitionEndListener = null;
    }
};
