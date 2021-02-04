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

function onResetButtonClick() {
    this.open = false;
}

function onDoneButtonClick() {
    this.open = false;
}

function onRejectButtonClick() {
    this.open = false;
}

function onCtaButtonClick() {
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

        this._el = widgetEl;

        const baseClass = this._options.dialogBaseClass;

        this._isModal = this._el.getAttribute('aria-modal') === 'true';
        this._hasTransitions = (this._el.dataset) ? this._el.dataset.makeupDialogHasTransitions === 'true' : false;

        this._windowEl = this._el.querySelector(`.${baseClass}__window`);
        this._closeButtonEl = this._el.querySelector(`.${baseClass}__close`);
        this._resetButtonEl = this._el.querySelector(`.${baseClass}__reset`);
        this._doneButtonEl = this._el.querySelector(`.${baseClass}__done`);
        this._confirmButtonEl = this._el.querySelector(`.${baseClass}__confirm`);
        this._rejectButtonEl = this._el.querySelector(`.${baseClass}__reject`);
        this._ctaButtonEl = this._el.querySelector(`.${baseClass}__cta`);

        this._onCloseButtonClickListener = onCloseButtonClick.bind(this);
        this._onResetButtonClickListener = onResetButtonClick.bind(this);
        this._onDoneButtonClickListener = onDoneButtonClick.bind(this);
        this._onConfirmButtonClickListener = onConfirmButtonClick.bind(this);
        this._onRejectButtonClickListener = onRejectButtonClick.bind(this);
        this._onCtaButtonClickListener = onCtaButtonClick.bind(this);
        this._onKeyDownListener = onKeyDown.bind(this);
        this._onOpenTransitionEndListener = onOpenTransitionEnd.bind(this);
        this._onCloseTransitionEndListener = onCloseTransitionEnd.bind(this);
        this._autoDismissTimeout = null;

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
                    Modal.modal(this._el);
                }

                this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-open`));
            }

            // only non-modal snackbar dialogs WITHOUT any action may autodismiss
            const autoDismiss = (this._el.dataset) ? this._el.dataset.makeupSnackbarAutoDismiss === 'true' : false;

            if (autoDismiss === true) {
                const widget = this;

                this._autoDismissTimeout = setTimeout(function() {
                    widget.open = false;
                }, 6000);
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
                Modal.unmodal();
                this._el.hidden = true;
                this._el.dispatchEvent(new CustomEvent(`${this._options.dialogBaseClass}-close`));
            }

            this._autoDismissTimeout = null;
        }
    }

    unobserveEvents() {
        this._el.removeEventListener('click', this._onCloseButtonClickListener);
        document.removeEventListener('keydown', this._onKeyDownListener);

        // lightbox-dialog, panel-dialog, fullscreen-dialog
        if (this._closeButtonEl) {
            this._closeButtonEl.addEventListener('click', this._onCloseButtonClickListener);
        }

        // panel dialog
        if (this._resetButtonEl) {
            this._resetButtonEl.removeEventListener('click', this._onResetButtonClickListener);
        }

        // panel dialog
        if (this._doneButtonEl) {
            this._doneButtonEl.removeEventListener('click', this._onDoneButtonClickListener);
        }

        // confirm dialog
        if (this._confirmButtonEl) {
            this._confirmButtonEl.removeEventListener('click', this._onConfirmButtonClickListener);
        }

        // confirm dialog
        if (this._rejectButtonEl) {
            this._rejectButtonEl.removeEventListener('click', this._onRejectButtonClickListener);
        }

        // snackbar dialog
        if (this._ctaButtonEl) {
            this._ctaButtonEl.removeEventListener('click', this._onctaButtonClickListener);
        }
    }

    observeEvents() {
        if (this._destroyed !== true) {
            document.addEventListener('keydown', this._onKeyDownListener);

            // lightbox-dialog, panel-dialog, fullscreen-dialog
            if (this._closeButtonEl) {
                this._closeButtonEl.addEventListener('click', this._onCloseButtonClickListener);
            }

            // panel dialog
            if (this._resetButtonEl) {
                this._resetButtonEl.addEventListener('click', this._onResetButtonClickListener);
            }

            // panel dialog
            if (this._doneButtonEl) {
                this._doneButtonEl.addEventListener('click', this._onDoneButtonClickListener);
            }

            // confirm dialog
            if (this._confirmButtonEl) {
                this._confirmButtonEl.addEventListener('click', this._onConfirmButtonClickListener);
            }

            // confirm dialog
            if (this._rejectButtonEl) {
                this._rejectButtonEl.addEventListener('click', this._onRejectButtonClickListener);
            }

            // snackbar dialog
            if (this._ctaButtonEl) {
                this._ctaButtonEl.addEventListener('click', this._onCtaButtonClickListener);
            }
        }
    }

    destroy() {
        this._destroyed = true;
        this.unobserveEvents();

        this._onCloseButtonClickListener = null;
        this._onResetButtonClickListener = null;
        this._onDoneButtonClickListener = null;
        this._onConfirmButtonClickListener = null;
        this._onRejectButtonClickListener = null;
        this._onCtaButtonClickListener = null;
        this._onKeyDownListener = null;
        this._onOpenTransitionEndListener = null;
        this._onCloseTransitionEndListener = null;
        this._autoDismissTimeout = null;
    }
};
