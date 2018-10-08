function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector, parentNode) {
    parentNode = parentNode || document;
    return nodeListToArray(parentNode.querySelectorAll(selector));
}

$('#header-large .grid__cell').skipTo();
// $('.dialog-button').dialogButton();
$('.fake-menu').clickFlyout({closeOnEsc: true, focusManagement: 'first', triggerSelector: '.expand-btn', overlaySelector: '.fake-menu__items'});
$('.menu').menu();
$('.tabs').tabs();
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
$('.combobox__control').on('click', function() {
    const $this = $(this);
    const $input = $this.find('input');
    if (!$this.find('input').prop('disabled')){
        if ($this.hasClass('combobox__control--expanded')) {
            $this.removeClass('combobox__control--expanded');
            $input.attr('aria-expanded', 'false');
        } else {
            $this.addClass('combobox__control--expanded');
            $input.attr('aria-expanded', 'true');
        }
    }
});

// LISTBOX WIDGET - Expand/Collapse only
querySelectorAllToArray('.listbox').forEach(function(el, index) {
    var $buttonEl = $(el.querySelector('button'));

    $buttonEl.on('click', function(e) {
        var isExpanded = $buttonEl.attr('aria-expanded');
        $buttonEl.attr('aria-expanded', isExpanded === 'true' ? 'false' : 'true');
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
