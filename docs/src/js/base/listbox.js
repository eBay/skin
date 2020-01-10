/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*
* A listbox can be a standalone focusable widget, or controlled by a separate, focusable widget
* (a textbox for example, in the case of a combobox or datepicker)
*
* This listbox code currently supports single-selct only!
*/

const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const PreventScrollKeys = require('makeup-prevent-scroll-keys');

/*
*   For listbox with auto select, the first keyboard focus should set selection to first option
*/
function onFocus(e) {
    if (this._mouseDownFlag !== true && this._options.autoSelect === true && this.index === -1) {
        this._activeDescendant.index = 0;
        this.items[0].setAttribute('aria-selected', 'true');

        if (this._options.useAriaChecked === true) {
            this.items[0].setAttribute('aria-checked', 'true');
        }
    }
    this._mouseDownFlag = false;
}

/*
*   This flag is used to help us detect if first focus comes from keyboard or as a result of mouse onClick
*/
function onMouseDown(e) {
    this._mouseDownFlag = true;
}

function onKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 32) { // enter key or spacebar key
        const toElIndex = this._activeDescendant.index;
        const toEl = this.items[toElIndex];
        const isTolElSelected = toEl.getAttribute('aria-selected') === 'true';

        if (isTolElSelected === false) {
            this.unselect(this.index);
            this.select(toElIndex);
        }
    }
}

function onClick(e) {
    const toEl = e.target;
    const toElIndex = toEl.dataset.makeupIndex;
    const isTolElSelected = toEl.getAttribute('aria-selected') === 'true';

    if (isTolElSelected === false) {
        this.unselect(this.index);
        this.select(toElIndex);
    }
}

function _onActiveDescendantChange(e) {
    this.el.dispatchEvent(new CustomEvent('listbox-active-descendant-change', {
        detail: e.detail
    }));

    if (this._options.autoSelect === true) {
        const fromEl = this.items[e.detail.fromIndex];
        const toEl = this.items[e.detail.toIndex];

        if (fromEl) {
            this.unselect(e.detail.fromIndex);
        }

        if (toEl) {
            this.select(e.detail.toIndex);
        }
    }
}

const defaultOptions = {
    activeDescendantClassName: 'listbox__option--active', // the classname applied to the current active desdcendant
    autoReset: null, // passed to makeup-active-descendant
    autoSelect: true, // when true, aria-checked state matches active-descendant
    focusableElement: null, // used in a combobox/datepicker scenario
    listboxOwnerElement: null, // used in a combobox/datepicker scenario
    multiSelect: false, // todo
    useAriaChecked: true // doubles up on support for aria-selected to announce visible selected/checked state
};

module.exports = class {
    constructor(widgetEl, selectedOptions) {
        this._options = Object.assign({}, defaultOptions, selectedOptions);

        this.el = widgetEl;

        // in cases such as comboboc, the active-descendant logic is controlled by a parent widget
        this._activeDescendantRootEl = this._options.listboxOwnerElement || this.el;

        this._listboxEl = (widgetEl.getAttribute('role') === 'listbox') ? widgetEl : this.el.querySelector('[role=listbox]');

        if (!this._options.focusableElement) {
            this._listboxEl.setAttribute('tabindex', '0');
        }

        this._activeDescendant = ActiveDescendant.createLinear(
            this._activeDescendantRootEl,
            this._options.focusableElement || this._listboxEl,
            this._listboxEl,
            '[role=option]',
            {
                activeDescendantClassName: this._options.activeDescendantClassName,
                autoInit: this.index,
                autoReset: this._options.autoReset,
                axis: 'y'
            }
        );

        PreventScrollKeys.add(this.el);

        this._onFocusListener = onFocus.bind(this);
        this._onMouseDownListener = onMouseDown.bind(this);
        this._onKeyDownListener = onKeyDown.bind(this);
        this._onClickListener = onClick.bind(this);
        this._onActiveDescendantChangeListener = _onActiveDescendantChange.bind(this);

        this.el.classList.add('listbox--js');

        this.wake();
    }

    get index() {
        return findIndex(Array.prototype.slice.call(this.items), (el) => el.getAttribute('aria-selected') === 'true');
    }

    get items() {
        return this._listboxEl.querySelectorAll('[role=option]');
    }

    select(index) {
        if (index > -1 && index < this.items.length) {
            this.items[index].setAttribute('aria-selected', 'true');

            if (this._options.useAriaChecked === true) {
                this.items[index].setAttribute('aria-checked', 'true');
            }

            this.el.dispatchEvent(new CustomEvent('listbox-change', {
                detail: {
                    optionIndex: index,
                    optionValue: this.items[index].innerText
                }
            }));
        }
    }

    unselect(index) {
        if (index > -1 && index < this.items.length) {
            this.items[index].setAttribute('aria-selected', 'false');
            if (this._options.useAriaChecked === true) {
                this.items[index].setAttribute('aria-checked', 'false');
            }
        }
    }

    sleep() {
        this._listboxEl.removeEventListener('focus', this._onFocusListener);
        this._listboxEl.removeEventListener('mousedown', this._onMouseDownListener);
        this._listboxEl.removeEventListener('keydown', this._onKeyDownListener);
        this._listboxEl.removeEventListener('click', this._onClickListener);
        this._activeDescendantRootEl.removeEventListener('activeDescendantChange', this._onActiveDescendantChangeListener);
    }

    wake() {
        if (this._destroyed !== true) {
            this._listboxEl.addEventListener('focus', this._onFocusListener);
            this._listboxEl.addEventListener('mousedown', this._onMouseDownListener);
            this._activeDescendantRootEl.addEventListener('activeDescendantChange', this._onActiveDescendantChangeListener);
            this._listboxEl.addEventListener('keydown', this._onKeyDownListener);
            this._listboxEl.addEventListener('click', this._onClickListener);
        }
    }

    destroy() {
        this._destroyed = true;
        this.sleep();

        this._onFocusListener = null;
        this._onMouseDownListener = null;
        this._onKeyDownListener = null;
        this._onClickListener = null;
        this._onActiveDescendantChangeListener = null;
    }
};
