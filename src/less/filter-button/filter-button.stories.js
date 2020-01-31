export default { title: 'filter-button' };

export const defaultButton = () => `
<div class="filter-group">
    <button type="button" class="filter-button">
        <span class="filter-button__cell">
            <span class="filter-button__text">Button</span>
        </span>
    </button>
    <a href="http://www.ebay.com" class="filter-link">
        <span class="filter-link__cell">Link</span>
    </a>
</div>
`;

export const selected = () => `
<div class="filter-group">
    <button type="button" class="filter-button" aria-pressed="true">
        <span class="filter-button__cell">Button</span>
    </button>
    <a href="http://www.ebay.com" class="filter-link filter-link--selected">
        <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
    </a>
</div>
`;

export const truncated = () => `
<div class="filter-group">
    <button type="button" class="filter-button">
        <span class="filter-button__cell">Button with lots of text that will become truncated</span>
    </button>
    <a href="http://www.ebay.com" class="filter-link">
        <span class="filter-link__cell">Link with lots of text that will become truncated</span>
    </a>
</div>
`;

export const disabled = () => `
<div class="filter-group">
    <button type="button" class="filter-button" aria-pressed="true" disabled>
        <span class="filter-button__cell">Button</span>
    </button>
    <a class="filter-link">
        <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
    </a>
</div>
`;