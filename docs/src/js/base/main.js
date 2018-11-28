var modal = require('makeup-modal');
var transition = require("./transition");

// EXPAND BUTTONS - Toggle state
querySelectorAllToArray('.expand-btn-example').forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// LISTBOX, MENU & FAKE MENU WIDGETS - EXPAND/COLLAPSE ONLY
querySelectorAllToArray('.listbox, .menu, .fake-menu').forEach(function(widgetEl, widgetIndex) {
    var buttonEl = widgetEl.querySelector('button');

    if (buttonEl) {
        buttonEl.addEventListener('click', function(e) {
            var isExpanded = buttonEl.getAttribute('aria-expanded') === 'true';
            buttonEl.setAttribute('aria-expanded', !isExpanded);
        });

        buttonEl.addEventListener('blur', function(e) {
            buttonEl.setAttribute('aria-expanded', 'false');
        });
    }
});


// COMBOBOX WIDGETS (basic expand/collapse only)
querySelectorAllToArray('.combobox').forEach(function(widgetEl, widgetIndex) {
    var inputWrapperEl = widgetEl.querySelector('.combobox__control');
    var inputEl = widgetEl.querySelector('input');

    inputEl.addEventListener('focus', function(e) {
        var isExpanded = inputEl.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            inputWrapperEl.classList.remove('combobox__control--expanded');
        } else {
            inputWrapperEl.classList.add('combobox__control--expanded');
        }

        inputEl.setAttribute('aria-expanded', !isExpanded);
    });

    inputEl.addEventListener('blur', function(e) {
        inputEl.setAttribute('aria-expanded', 'false');
        inputWrapperEl.classList.remove('combobox__control--expanded');
    });
});

// DIALOG WIDGETS
querySelectorAllToArray('.dialog-button').forEach(function (btn) {
    var cancel;
    var dialog = btn.nextElementSibling;
    var dialogBody = dialog.querySelector('.dialog__body');
    var dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd(true));
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute("style", "overflow:hidden");
        modal.modal(dialog.querySelector('.dialog__window'));
    }

    function handleClose (ev) {
        if (dialogBody.contains(ev.target)) {
            return;
        }

        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--hide', handleTransitionEnd(false));
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        dialog.removeEventListener('click', handleClose, true);
        document.body.removeAttribute("style");
        modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd (isOpening) {
        // focus on the close button
        if (isOpening) {
            // hack: safari needs an additional timeout
            window.setTimeout(function() {
                dialogClose.focus();
            }, 250);
        }

        cancel = undefined;
    }
});

var Expander = require('makeup-expander');

// TOOLTIP WIDGETS
querySelectorAllToArray('.tooltip').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    });
});

// INFOTIP/BUBBLEHELP WIDGETS
querySelectorAllToArray('.infotip').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.infotip__overlay',
        expandOnFocus: false,
        expandOnClick: true,
        hostSelector: '.infotip__host'
    });
});
