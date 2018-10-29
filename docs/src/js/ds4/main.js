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
        expandOnClick: true,
        hostSelector: '.infotip__host'
    });
});
