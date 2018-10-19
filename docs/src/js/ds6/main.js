var Expander = require('makeup-expander');
var FloatingLabel = require('makeup-floating-label');

// TOOLTIP WIDGETS
querySelectorAllToArray('.tooltip.tooltip--hover').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnClick: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    });
});

// INFOTIP WIDGETS
querySelectorAllToArray('.tooltip:not(.tooltip--hover)').forEach(function(el, i) {
    var widget = new Expander(el, {
        contentSelector: '.tooltip__overlay',
        expandOnClick: true,
        hostSelector: '.tooltip__host'
    });

    var inputEl = el.querySelector('.tooltip__host');
    var tooltipWindow = inputEl.nextElementSibling;
    var tooltipClose = tooltipWindow.querySelector('.tooltip__close');

    if (tooltipClose) {
        tooltipClose.addEventListener('click', function(e) {
            widget.collapse();
            inputEl.focus();
        });
    }
});

querySelectorAllToArray('.floating-label').forEach(function(el) {
    var floatingLabel = new FloatingLabel(el);
});

// set up initial matchMedia query
window.mobileMediaQuery = 'all and (max-width: 600px)';
window.mm = window.matchMedia(window.mobileMediaQuery);

window.sidebar = document.querySelector('nav .fixed-nav');
window.sidebar_top = sidebar.offsetTop;

// debounce utility function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function fixTheSidebar() {
    var isMobile = window.mm.matches;
    var y = window.scrollY || window.pageYOffset;

    // fix the navigation on scroll
    if (!isMobile && y >= window.sidebar_top) {
        window.sidebar.classList.add('fixed');
    } else {
        window.sidebar.classList.remove('fixed');
    }
}

window.addEventListener('resize', debounce(function() {
    // re-run matchMedia on resize
    mm = window.matchMedia(mobileMediaQuery);
}, 50));

window.addEventListener('load', function() {
    fixTheSidebar();

    window.addEventListener('scroll', fixTheSidebar);
});
