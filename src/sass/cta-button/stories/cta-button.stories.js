export default { title: "Skin/CTA Button" };

export const base = () => `
<a class="cta-btn" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;

export const textSpacing = () => `
<a class="cta-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;
