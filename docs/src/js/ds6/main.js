console.log('skin-ds6');

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

nodeListToArray(document.querySelectorAll('.btn:not([aria-disabled="true"])')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        alert('You clicked ' + this);
    });
});

nodeListToArray(document.querySelectorAll('.expand-btn')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});
