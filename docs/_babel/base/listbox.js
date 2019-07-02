"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Copyright 2019 eBay Inc.
*
* Use of this source code is governed by a MIT-style
* license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.
*
* A listbox can be a standalone focusable widget, or controlled by a separate, focusable widget
* (a textbox for example, in the case of a combobox or datepicker)
*/
var ActiveDescendant = require('makeup-active-descendant');

var PreventScrollKeys = require('makeup-prevent-scroll-keys');
/*
*   For listbox with auto select, the first keyboard focus should set selection to first option
*/


function onFocus(e) {
  if (this._mouseDownFlag !== true && this._options.autoSelect === true && this.index === -1) {
    this._activeDescendant.index = 0;
    this.items[0].setAttribute('aria-checked', 'true');
  }

  this._mouseDownFlag = false;
}
/*
*   This flag is used to help us detect if first focus comes from keyboard or as a result of mouse onClick
*/


function onMouseDown(e) {
  this._mouseDownFlag = true;
}
/*
*   A keydown only happens on a listbox with manual selection
*/


function onKeyDown(e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
    // enter key or spacebar key
    var toElIndex = this._activeDescendant.index;
    var toEl = this.items[toElIndex];
    var isTolElChecked = toEl.getAttribute('aria-checked') === 'true';

    if (isTolElChecked === false) {
      this.uncheck(this.index);
      this.check(toElIndex);
      this.el.dispatchEvent(new CustomEvent('listbox-change', {
        detail: {
          optionIndex: toElIndex,
          optionValue: toEl.innerText
        }
      }));
    }
  }
}
/*
*   A click only happens on a listbox with manual selection
*/


function onClick(e) {
  var toEl = e.target;
  var toElIndex = toEl.dataset.makeupIndex;
  var isTolElChecked = toEl.getAttribute('aria-checked') === 'true';

  if (isTolElChecked === false) {
    this.uncheck(this.index);
    this.check(toElIndex);
    this.el.dispatchEvent(new CustomEvent('listbox-change', {
      detail: {
        optionIndex: toElIndex,
        optionValue: toEl.innerText
      }
    }));
  }
}
/*
*   The maekeup-active-descendant does all of the heavy lifting for managing aria-activedescendant state
*/


function _onActiveDescendantChange(e) {
  var fromEl = this.items[e.detail.fromIndex];
  var toEl = this.items[e.detail.toIndex];

  if (fromEl) {
    fromEl.setAttribute('aria-checked', 'false');
    fromEl.classList.remove(this._options.activeDescendantClassName);
  }

  if (toEl) {
    toEl.setAttribute('aria-checked', 'true');
    toEl.classList.add(this._options.activeDescendantClassName);
    this.el.dispatchEvent(new CustomEvent('listbox-change', {
      detail: {
        optionValue: toEl.innerText
      }
    }));
  }
}

var defaultOptions = {
  activeDescendantClassName: 'listbox__option--active',
  // the classname applied to the current active desdcendant
  autoReset: null,
  // passed to makeup-active-descendant
  autoSelect: true,
  // when true, aria-checked state matches active-descendant
  focusableElement: null,
  // used in a combobox/datepicker scenario
  listboxOwnerElement: null,
  // used in a combobox/datepicker scenario
  multiSelect: false // todo

};

module.exports =
/*#__PURE__*/
function () {
  function _class(widgetEl, selectedOptions) {
    _classCallCheck(this, _class);

    this._options = _extends({}, defaultOptions, selectedOptions);
    this.el = widgetEl; // in cases such as comboboc, the active-descendant logic is controlled by a parent widget

    this._activeDescendantRootEl = this._options.listboxOwnerElement || this.el;
    this._listboxEl = widgetEl.getAttribute('role') === 'listbox' ? widgetEl : this.el.querySelector('[role=listbox]');

    if (!this._options.focusableElement) {
      this._listboxEl.setAttribute('tabindex', '0');
    }

    this._activeDescendant = ActiveDescendant.createLinear(this._activeDescendantRootEl, this._options.focusableElement || this._listboxEl, this._listboxEl, '[role=option]', {
      autoReset: this._options.autoReset,
      axis: 'y'
    });
    PreventScrollKeys.add(this.el);
    this._onFocusListener = onFocus.bind(this);
    this._onMouseDownListener = onMouseDown.bind(this);
    this._onKeyDownListener = onKeyDown.bind(this);
    this._onClickListener = onClick.bind(this);
    this._onActiveDescendantChangeListener = _onActiveDescendantChange.bind(this);
    this.el.classList.add('listbox--js');
    this.wake();
  }

  _createClass(_class, [{
    key: "check",
    value: function check(index) {
      if (index > -1 && index < this.items.length) {
        this.items[index].setAttribute('aria-checked', 'true');
      }
    }
  }, {
    key: "uncheck",
    value: function uncheck(index) {
      if (index > -1 && index < this.items.length) {
        this.items[index].setAttribute('aria-checked', 'false');
      }
    }
  }, {
    key: "sleep",
    value: function sleep() {
      this._listboxEl.removeEventListener('focus', this._onFocusListener);

      this._listboxEl.removeEventListener('mousedown', this._onMouseDownListener);

      this._listboxEl.removeEventListener('keydown', this._onKeyDownListener);

      this._listboxEl.removeEventListener('click', this._onClickListener);

      this._activeDescendantRootEl.removeEventListener('activeDescendantChange', this._onActiveDescendantChangeListener);
    }
  }, {
    key: "wake",
    value: function wake() {
      if (this._destroyed !== true) {
        this._listboxEl.addEventListener('focus', this._onFocusListener);

        this._listboxEl.addEventListener('mousedown', this._onMouseDownListener);

        if (this._options.autoSelect === true) {
          this._activeDescendantRootEl.addEventListener('activeDescendantChange', this._onActiveDescendantChangeListener);
        } else {
          this._listboxEl.addEventListener('keydown', this._onKeyDownListener);

          this._listboxEl.addEventListener('click', this._onClickListener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.sleep();
      this._onFocusListener = null;
      this._onMouseDownListener = null;
      this._onKeyDownListener = null;
      this._onClickListener = null;
      this._onActiveDescendantChangeListener = null;
    }
  }, {
    key: "index",
    get: function get() {
      return Array.prototype.slice.call(this.items).findIndex(function (el) {
        return el.getAttribute('aria-checked') === 'true';
      });
    }
  }, {
    key: "items",
    get: function get() {
      return this._listboxEl.querySelectorAll('[role=option]');
    }
  }]);

  return _class;
}();