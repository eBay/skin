export default { title: 'cta-button' };

export const defaultButton = () => `
<a class="cta-btn" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const inheritColorRed = () => `
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;

export const inheritFontSize200Percent = () => `
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--cta" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-cta"></use>
        </svg>
    </span>
</a>
`;