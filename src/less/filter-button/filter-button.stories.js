export default { title: 'filter-button' };

export const button = () => `
<button type="button" class="filter-button">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
`;

export const link = () => `
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`;

export const group = () => `
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

export const pressedButton = () => `
<button type="button" class="filter-button" aria-pressed="true">
    <span class="filter-button__cell">Button</span>
</button>
`;

export const selectedLink = () => `
<a href="http://www.ebay.com" class="filter-link filter-link--selected">
    <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
</a>
`;

export const truncatedButton = () => `
<button type="button" class="filter-button">
    <span class="filter-button__cell">Button with lots of text that will become truncated</span>
</button>
`;

export const truncatedLink = () => `
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link with lots of text that will become truncated</span>
</a>
`;

export const disabledButton = () => `
<button type="button" class="filter-button" disabled>
    <span class="filter-button__cell">Button</span>
</button>
`;

export const disabledLink = () => `
<a class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`;
