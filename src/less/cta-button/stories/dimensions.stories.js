export default { title: 'CTA Button/Dimensions' };

export const large = () => `
<a class="cta-btn cta-btn--large" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const largeTruncated = () => `
<a class="cta-btn cta-btn--large-truncated" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const largeFixedHeight = () => `
<a class="cta-btn cta-btn--large-fixed-height" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;
