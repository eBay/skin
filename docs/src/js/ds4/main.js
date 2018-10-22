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

// BUBBLEHELP WIDGETS
querySelectorAllToArray('.bubblehelp').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.bubblehelp__overlay',
        expandOnClick: true,
        hostSelector: '.bubblehelp__host'
    });
});
