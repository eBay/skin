var FloatingLabel = require('makeup-floating-label');

querySelectorAllToArray('.floating-label').forEach(function(el, i) {
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
