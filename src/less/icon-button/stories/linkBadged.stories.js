export default { title: 'Icon Button/Link/Badged' };

export const oneDigit = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">1</span>
</a>
`;

export const twoDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">10</span>
</a>
`;

export const threeDigits = () => `
<a aria-label="Settings" class="icon-link icon-link--badged" href="http://www.ebay.com">
    <svg class="icon icon--menu" focusable="false" width="24" height="24" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="badge">99+</span>
</a>
`;
