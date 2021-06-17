export default { title: 'Icon Button/Icon Button/Button/Badged' };

export const oneDigit = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</button>
`;

export const twoDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</button>
`;

export const threeDigits = () => `
<button aria-label="Menu" class="icon-btn icon-btn--badged" type="button">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</button>
`;

export const cartBadgedMatte = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--matte icon-btn--cart">
    <svg class="icon icon--cart" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-cart"></use></svg>
    <span class="badge">1</span>
</button>
`;

export const cartBadgedTwoDigitsMatte = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--matte icon-btn--cart">
    <svg class="icon icon--cart" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-cart"></use></svg>
    <span class="badge">11</span>
</button>
`;

export const cartBadgedThreeDigits = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--cart">
    <svg class="icon icon--cart" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-cart"></use></svg>
    <span class="badge">99+</span>
</button>
`;

export const saveBadgedMatte = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--matte icon-btn--save">
    <svg class="icon icon--save" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-save"></use></svg>
    <span class="badge">1</span>
</button>
`;

export const saveBadgedTwoDigits = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--save">
    <svg class="icon icon--save" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-save"></use></svg>
    <span class="badge">48</span>
</button>
`;

export const saveBadgedThreeDigitsMatte = () => `
<button aria-label="menu" type="button" class="icon-btn icon-btn--badged icon-btn--matte icon-btn--save">
    <svg class="icon icon--save" aria-hidden="true" focusable="false" width="24" height="24"><use xlink:href="#icon-save"></use></svg>
    <span class="badge">99+</span>
</button>
`;
