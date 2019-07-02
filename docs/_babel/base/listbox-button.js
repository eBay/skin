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
*/
var Expander = require('makeup-expander');

var Listbox = require('./listbox.js');

function onButtonFirstClick(e) {
  this.listbox.el.hidden = false;
}

function onListboxKeyDown(e) {
  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
    var widget = this;
    e.preventDefault();
    setTimeout(function () {
      widget._expander.collapse();

      widget._buttonEl.focus();
    }, 100);
  }
}

function onListboxClick(e) {
  var widget = this;
  setTimeout(function () {
    widget._expander.collapse();

    widget._buttonEl.focus();
  }, 150);
}

function onListboxChange(e) {
  var fromValue = this._buttonEl.children[0].innerText;
  var toValue = e.detail.optionValue;
  this._buttonLabelEl.innerText = toValue;
  this.el.dispatchEvent(new CustomEvent('listbox-button-change', {
    detail: {
      fromValue: fromValue,
      toValue: toValue
    }
  }));
}

var defaultOptions = {
  autoSelect: true,
  labelSelector: '.listbox-button__label',
  listboxSelector: '.listbox-button__listbox',
  hostSelector: 'button'
};

module.exports =
/*#__PURE__*/
function () {
  function _class(widgetEl, selectedOptions) {
    _classCallCheck(this, _class);

    this._options = _extends({}, defaultOptions, selectedOptions);
    this.el = widgetEl;
    this._buttonEl = this.el.querySelector(this._options.hostSelector);
    this._buttonLabelEl = widgetEl.querySelector(this._options.labelSelector);
    this.listbox = new Listbox(this.el.querySelector(this._options.listboxSelector), {
      autoSelect: this._options.autoSelect
    });
    this._expander = new Expander(this.el, {
      alwaysDoFocusManagement: true,
      collapseOnClick: true,
      collapseOnClickOut: true,
      collapseOnFocusOut: true,
      contentSelector: this._options.listboxSelector,
      expandedClass: 'listbox-button--expanded',
      expandOnClick: true,
      focusManagement: 'content',
      // known discrepancy between skin and mindpatterns, due to lack of wrapper element
      hostSelector: this._options.hostSelector
    });
    this._onButtonFirstClickListener = onButtonFirstClick.bind(this);
    this._onListboxClickListener = onListboxClick.bind(this);
    this._onListboxKeyDownListener = onListboxKeyDown.bind(this);
    this._onListboxChangeListener = onListboxChange.bind(this);
    this.wake();
  }

  _createClass(_class, [{
    key: "sleep",
    value: function sleep() {
      this._buttonEl.removeEventListener('click', this._onButtonFirstClickListener);

      this.listbox.el.removeEventListener('click', this._onListboxClickListener);
      this.listbox.el.removeEventListener('keydown', this._onListboxKeyDownListener);
      this.listbox.el.removeEventListener('listbox-change', this._onListboxChangeListener);
    }
  }, {
    key: "wake",
    value: function wake() {
      if (this._destroyed !== true) {
        this._buttonEl.addEventListener('click', this._onButtonFirstClickListener, {
          once: true
        });

        this.listbox.el.addEventListener('click', this._onListboxClickListener);
        this.listbox.el.addEventListener('keydown', this._onListboxKeyDownListener);
        this.listbox.el.addEventListener('listbox-change', this._onListboxChangeListener);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.sleep();
      this._onButtonFirstClickListener = null;
      this._onListboxClickListener = null;
      this._onListboxKeyDownListener = null;
      this._onListboxChangeListener = null;
    }
  }]);

  return _class;
}();