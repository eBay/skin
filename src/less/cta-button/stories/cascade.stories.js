export default { title: 'CTA Button/Cascade' };

export const color = () => `
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const fontSize = () => `
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;
