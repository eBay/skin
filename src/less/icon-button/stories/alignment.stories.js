export default { title: "Icon Button/Alignment" };

export const menu = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--menu-20" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</button>
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--menu-20" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</a>
`;

export const settings = () => `
<button aria-label="settings" type="button" class="icon-btn">
    <svg class="icon icon--settings-24" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</button>
<a aria-label="settings" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--settings-24" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</a>
`;

export const close = () => `
<button aria-label="close" type="button" class="icon-btn">
    <svg class="icon icon--close-16" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-close-16"></use></svg>
</button>
<a aria-label="close" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--close-16" aria-hidden="true" focusable="false" width="16" height="16"><use href="#icon-close-16"></use></svg>
</a>
`;
