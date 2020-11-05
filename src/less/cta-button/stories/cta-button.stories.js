export default { title: 'CTA Button/CTA Button' };

export const base = () => `
<a class="cta-btn" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const wide = () => `
<a class="cta-btn cta-btn--wide" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;
