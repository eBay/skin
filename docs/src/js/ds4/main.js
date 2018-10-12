function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector, parentNode) {
    parentNode = parentNode || document;
    return nodeListToArray(parentNode.querySelectorAll(selector));
}

$('#header-large .grid__cell').skipTo();
// $('.dialog-button').dialogButton();
$('.tooltip').tooltip();
$('.bubblehelp').clickFlyout({triggerSelector: '.bubblehelp__host', overlaySelector: '.bubblehelp__overlay', autoCollapse: false});
$('#banner-menu').on('click', 'a', function(e) {
    var target = document.querySelector(this.href.substring(this.href.indexOf('#')));
    target.setAttribute('tabindex', '-1');
    target.focus();
});
$('.expand-btn-example').on('click', function() {
    $(this).attr('aria-expanded', ($(this).attr('aria-expanded') === 'true') ? 'false' : 'true');
});

// COMBOBOX WIDGET - Expand/Collapse only
querySelectorAllToArray('.combobox').forEach(function(el, index) {
    var $inputWrapperEl = $(el.querySelector('.combobox__control'));
    var $inputEl = $(el.querySelector('input'));

    $inputEl.on('focus', function(e) {
        var isExpanded = $inputEl.attr('aria-expanded') === 'true';
        if (isExpanded) {
            $inputWrapperEl.removeClass('combobox__control--expanded');
        } else {
            $inputWrapperEl.addClass('combobox__control--expanded');
        }
        $inputEl.attr('aria-expanded', isExpanded === true ? 'false' : 'true');
    });

    $inputEl.on('blur', function(e) {
        $inputEl.attr('aria-expanded', 'false');
        $inputWrapperEl.removeClass('combobox__control--expanded');
    });
});

// LISTBOX, MENU AND FAKE MENU WIDGETS - Expand/Collapse only
querySelectorAllToArray('.listbox, .menu, .fake-menu').forEach(function(el) {
    var $buttonEl = $(el.querySelector('button'));

    $buttonEl.on('click', function(e) {
        var isExpanded = $buttonEl.attr('aria-expanded');
        $buttonEl.attr('aria-expanded', isExpanded === 'true' ? 'false' : 'true');
    });

    $buttonEl.on('blur', function(e) {
        $buttonEl.attr('aria-expanded', 'false');
    });
});

querySelectorAllToArray('.dialog-button').forEach(function(btn) {
    // var cancel;
    var dialog = btn.nextElementSibling;
    var dialogBody = dialog.querySelector('.dialog__body');
    var dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen() {
        // if (cancel) {
        //     cancel();
        // }

        // cancel = transition(dialog, 'dialog--show', handleTransitionEnd);
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute("style", "overflow:hidden");
        dialogClose.focus();
        // modal.modal(dialog);
    }

    function handleClose(ev) {
        if (dialogBody.contains(ev.target)) {
            return;
        }

        // if (cancel) {
        //     cancel();
        // }

        // cancel = transition(dialog, 'dialog--hide', handleTransitionEnd);
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        dialog.removeEventListener('click', handleClose, true);
        document.body.removeAttribute("style");
        // modal.unmodal();
        btn.focus();
    }

    // function handleTransitionEnd() {
    //     cancel = undefined;
    // }
});
