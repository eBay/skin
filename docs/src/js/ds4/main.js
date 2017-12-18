$('#header-large .grid__cell').skipTo();
$('.dialog-button').dialogButton();
$('.fake-menu').clickFlyout({closeOnEsc: true, focusManagement: 'first', triggerSelector: '.expand-btn', overlaySelector: '.fake-menu__items'});
$('.menu').menu();
$('.tabs, .hijax-tabs').tabs();
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
