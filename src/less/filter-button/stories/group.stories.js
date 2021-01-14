export default { title: 'Filter/Filter/Button/Group' };

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

export const RTL = () => `
<div dir="rtl">
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
</div>`;
