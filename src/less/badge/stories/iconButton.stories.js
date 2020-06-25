export default { title: 'Badge/Icon Button' };

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
