export default { title: "CTA Button/Cascade" };

export const color = () => `
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--arrow-right-24" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <a class="cta-btn" href="http://www.ebay.com" style="color: red">
        <span class="cta-btn__cell">
            <span style="margin-right: 2px;">Link</span>
            <svg style="margin-right: 5px; margin-left: 2px;" class="icon icon--arrow-right-24" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-arrow-right-24"></use>
            </svg>
        </span>
    </a>
<div>
`;

export const fontSize = () => `
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--arrow-right-24" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;
