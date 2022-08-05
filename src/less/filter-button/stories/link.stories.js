export default { title: 'Filter/Button/Link' };

export const base = () => `
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`;

export const selected = () => `
<a href="http://www.ebay.com" class="filter-link filter-link--selected">
    <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
</a>
`;

export const truncated = () => `
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link with lots of text that will become truncated</span>
</a>
`;

export const disabled = () => `
<a class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`;
