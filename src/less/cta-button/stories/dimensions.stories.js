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

export const largeFixedWidthTruncated = () => `
<a style="width: 200px;" class="cta-btn cta-btn--large cta-btn--truncated" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link with a lot of text that should wrap</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;
