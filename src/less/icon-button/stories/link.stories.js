export default { title: 'Icon Button/Link' };

export const menu = () => `
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const settings = () => `
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</a>
`;

export const disabledMenu = () => `
<a class="icon-link">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const disabledSettings = () => `
<a class="icon-link">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</a>
`;

export const partiallyDisabledMenu = () => `
<a class="icon-link" href="http://www.ebay.com" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const partiallyDisabledSettings = () => `
<a class="icon-link" href="http://www.ebay.com" aria-disabled="true">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</a>
`;
