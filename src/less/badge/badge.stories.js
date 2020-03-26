export default { title: 'badge' };

export const oneDigit = () => `
<span class="badge">1</span>
`;

export const twoDigits = () => `
<span class="badge">10</span>
`;

export const threeDigits = () => `
<span class="badge">99+</span>
`;

export const iconButtonOneDigit = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</button>
`;

export const iconButtonTwoDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</button>
`;

export const iconButtonThreeDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</button>
`;

export const iconLinkOneDigit = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</a>
`;

export const iconLinkTwoDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</a>
`;

export const iconLinkThreeDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</a>
`;

export const menu = () => `
<span class="menu">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
`;
