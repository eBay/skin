export default { title: 'Section Title/Section Title/Deprecated' };

export const arrowCTASeeAll = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title">
            <a href="https://www.ebay.com">Marketing Type Content Title</a>
        </h2>
    </div>
    <div class="section-title__cta">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <span class="section-title__cta-text">See All</span>
            <svg class="icon icon--cta" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-cta"></use>
            </svg>
        </a>
    </div>
</div>
`;

export const arrowCTANoText = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title"><a href="https://www.ebay.com">Marketing Type Content Title</a></h2>
    </div>
    <div class="section-title__cta section-title__cta--no-text">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <svg aria-hidden="true" class="icon icon--cta" focusable="false">
                <use xlink:href="#icon-cta"></use>
            </svg>
        </a>
    </div>
</div>
`;
