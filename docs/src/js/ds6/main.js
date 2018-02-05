// Most of this is code for the menu logic, which will be abstracted away in it's own module soon

// makeup-js accessibility modules
var Expander = require('makeup-expander');
var Rover = require('makeup-roving-tabindex');
var keyEmitter = require('makeup-key-emitter');
var scrollKeyPreventer = require('makeup-prevent-scroll-keys');

// util function
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

// simple button logic on buttons
nodeListToArray(document.querySelectorAll('.btn:not([aria-disabled="true"])')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        alert('You clicked ' + this);
    });
});

// simple aria-expanded logic on expand button example
nodeListToArray(document.querySelectorAll('.expand-btn-example')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// roving tab index logic on menu items container
nodeListToArray(document.querySelectorAll('[role=menu]')).forEach(function(el, i) {
    var widget = Rover.createLinear(el, '[role^=menuitem]', {autoReset: 0});
});

// aria expanded logic on menu button and overlay
// escape key logic on menu (closes menu)
nodeListToArray(document.querySelectorAll('.menu, .fake-menu')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        click: true,
        focusManagement: 'interactive',
        hostSelector: '.expand-btn',
        contentSelector: '.menu__items, .fake-menu__items'
    });

    keyEmitter.addKeyDown(el);

    el.addEventListener('escapeKeyDown', function() {
        this.querySelector('.expand-btn').focus();
    });
});

// prevent scroll keys logic on menu items
nodeListToArray(document.querySelectorAll('[role^=menuitem]')).forEach(function(el, i) {
    scrollKeyPreventer.add(el);
});

// roving tab index logic on listbox options container
nodeListToArray(document.querySelectorAll('[role=listbox]')).forEach(function(el, i) {
    var widget = Rover.createLinear(el, '[role^=option]', {autoReset: 0});
});

// aria expanded logic on listbox input and overlay
// escape key logic on listbox (closes listbox)
nodeListToArray(document.querySelectorAll('.listbox')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        click: true,
        focusManagement: 'interactive',
        hostSelector: '.listbox__control > input',
        hostContainerClass: 'listbox__control',
        contentSelector: '.listbox__options',
        spacebar: true
    });

    keyEmitter.addKeyDown(el);

    el.addEventListener('escapeKeyDown', function() {
        widget.collapse();
        this.querySelector('.listbox__control > input').focus();
    });
});

// prevent scroll keys logic on the listbox button
nodeListToArray(document.querySelectorAll('.listbox__control > input')).forEach(function (el, i) {
    scrollKeyPreventer.add(el);
});

// prevent scroll keys logic on listbox options
nodeListToArray(document.querySelectorAll('[role^=option]')).forEach(function(el, i) {
    scrollKeyPreventer.add(el);
});
