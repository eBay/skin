// TOOLTIP WIDGETS - Expand/Collapse only
querySelectorAllToArray('.tooltip').forEach(function(el, index) {

    var buttonEl = el.querySelector('button');

    buttonEl.addEventListener('focus', function(e) {
        buttonEl.setAttribute('aria-expanded', (buttonEl.getAttribute('aria-expanded') === 'true') ? 'false' : 'true');
    });

    buttonEl.addEventListener('blur', function(e) {
        buttonEl.setAttribute('aria-expanded', 'false');
    });

    buttonEl.addEventListener('mouseover', function(e) {
        buttonEl.setAttribute('aria-expanded', 'true');
    });

    el.addEventListener('mouseleave', function(e) {
        buttonEl.setAttribute('aria-expanded', 'false');
    });
});

// BUBBLE HELP WIDGETS - Expand/Collapse only
querySelectorAllToArray('.bubblehelp').forEach(function(el, index) {
    var buttonEl = el.querySelector('button');

    buttonEl.addEventListener('click', function(e) {
        buttonEl.setAttribute('aria-expanded', (buttonEl.getAttribute('aria-expanded') === 'true') ? 'false' : 'true');
    });
});
