// Most of this is code for the menu and listbox logic, which will be abstracted away into their own modules at some point

// makeup-js accessibility modules
var Expander = require('makeup-expander');
var Rover = require('makeup-roving-tabindex');
var keyEmitter = require('makeup-key-emitter');
var scrollKeyPreventer = require('makeup-prevent-scroll-keys');

// util function
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

// BUTTON WIDGET

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

// MENU WIDGET (basic interactivity only)

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

// LISTBOX WIDGET (basic interactivity only)

nodeListToArray(document.querySelectorAll('.listbox')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        click: true,
        hostSelector: 'input[role=combobox]',
        hostContainerClass: 'listbox__control',
        contentSelector: '.listbox__options',
        spacebar: true
    });

    var inputEl = el.querySelector('input[role=combobox]');
    var optionEls = nodeListToArray(el.querySelectorAll('[role=option]'));
    var selectedOptionEl = el.querySelector('[role=option][aria-selected=true]');
    var size = optionEls.length;
    var currentIndex;

    var updateListbox = function(newIndex) {
        selectedOptionEl.setAttribute('aria-selected', 'false');
        currentIndex = newIndex;
        inputEl.value = 'Option ' + (currentIndex + 1);
        selectedOptionEl = optionEls[currentIndex];
        selectedOptionEl.setAttribute('aria-selected', 'true');
    };

    optionEls.forEach(function(el, i) {
        // assign an index data attribute to each el
        el.dataset.listboxIndex = i;

        // add a click handler to each el
        el.addEventListener('click', function(e) {
            updateListbox(parseInt(this.dataset.listboxIndex, 10));
        });
    });

    currentIndex = parseInt(selectedOptionEl.dataset.listboxIndex, 10);

    keyEmitter.addKeyDown(el);
    scrollKeyPreventer.add(el);

    el.addEventListener('escapeKeyDown', function() {
        widget.collapse();
        inputEl.focus();
    });

    el.addEventListener('arrowDownKeyDown', function(e) {
        if (currentIndex < (size - 1)) {
            updateListbox(currentIndex + 1);
        }
    });

    el.addEventListener('arrowUpKeyDown', function(e) {
        if (currentIndex > 0) {
            updateListbox(currentIndex - 1);
        }
    });
});
