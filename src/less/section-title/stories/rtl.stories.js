export default { title: 'Section Title/Section Title/RTL' };

export const heading = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
    </div>
</div>
`;

export const subheading = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
    </div>
</div>
`;

export const linked = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">
                <a href="https://www.ebay.com">Today’s Deals – All With Free Shipping</a>
                <svg class="icon icon--arrow-right-extra-small" focusable="false" height="10" width="10" aria-hidden="true">
                    <use xlink:href="#icon-arrow-right-extra-small"></use>
                </svg>
            </h2>
        </div>
    </div>
</div>
`;

export const linkedWithSubheading = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">
                <a href="https://www.ebay.com">Today’s Deals – All With Free Shipping</a>
                <svg class="icon icon--arrow-right-extra-small" focusable="false" height="10" width="10" aria-hidden="true">
                    <use xlink:href="#icon-arrow-right-extra-small"></use>
                </svg>
            </h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
    </div>
</div>
`;
