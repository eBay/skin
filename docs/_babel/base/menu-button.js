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

var Menu = require('./menu.js');

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
  var widget = this;
  setTimeout(function (e) {
    widget._expander.collapse();

    widget._buttonEl.focus();
  }, 150);
}

var defaultOptions = {
  expandedClass: 'menu-button--expanded',
  menuSelector: '.menu-button__menu'
};

module.exports =
/*#__PURE__*/
function () {
  function _class(widgetEl, selectedOptions) {
    _classCallCheck(this, _class);

    this._options = _extends({}, defaultOptions, selectedOptions);
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

  _createClass(_class, [{
    key: "sleep",
    value: function sleep() {
      this._buttonEl.removeEventListener('click', this._onButtonFirstClickListener);

      this.menu.el.removeEventListener('keydown', this._onMenuKeyDownListener);
      this.menu.el.removeEventListener('menu-select', this._onMenuItemSelectListener);
      this.menu.el.removeEventListener('menu-toggle', this._onMenuItemSelectListener);
      this.menu.el.removeEventListener('menu-change', this._onMenuItemSelectListener);
    }
  }, {
    key: "wake",
    value: function wake() {
      if (this._destroyed !== true) {
        this._buttonEl.addEventListener('click', this._onButtonFirstClickListener, {
          once: true
        });

        this.menu.el.addEventListener('keydown', this._onMenuKeyDownListener);
        this.menu.el.addEventListener('menu-select', this._onMenuItemSelectListener);
        this.menu.el.addEventListener('menu-toggle', this._onMenuItemSelectListener);
        this.menu.el.addEventListener('menu-change', this._onMenuItemSelectListener);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.sleep();
      this._onButtonFirstClickListener = null;
      this._onMenuKeyDownListener = null;
      this._onMenuItemSelectListener = null;
    }
  }]);

  return _class;
}();