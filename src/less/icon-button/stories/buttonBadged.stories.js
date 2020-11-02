export default { title: 'Icon Button/Button/Badged' };

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
