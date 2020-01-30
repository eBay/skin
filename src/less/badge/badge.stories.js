export default { title: 'badge' };

export const badgeOneDigit = () => `
<p>
    <span class="badge">1</span>
</p>
`;

export const badgeTwoDigits = () => `
<p>
    <span class="badge">10</span>
</p>
`;

export const badgeThreeDigits = () => `
<p>
    <span class="badge">99+</span>
</p>
`;

export const badgedIconButtonOneDigit = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</button>
`;

export const badgeIconButtonTwoDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</button>
`;

export const badgeIconButtonThreeDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</button>
`;

export const badgedIconLinkOneDigit = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</a>
`;

export const badgedIconLinkTwoDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</a>
`;

export const badgedIconLinkThreeDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</a>
`;

export const badgedMenu = () => `
<span class="menu">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
`;