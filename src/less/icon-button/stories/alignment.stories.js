export default { title: 'Icon Button/Icon Button/Alignment' };

export const menu = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const settings = () => `
<button aria-label="settings" type="button" class="icon-btn">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</button>
<a aria-label="settings" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</a>
`;

export const close = () => `
<button aria-label="close" type="button" class="icon-btn">
    <svg class="icon icon--close" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
</button>
<a aria-label="close" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--close" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
</a>
`;
