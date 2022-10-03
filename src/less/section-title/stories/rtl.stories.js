export default { title: 'Section Title/RTL' };

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
    <div class="section-title section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;

export const linkedWithSubheading = () => `
<div dir="rtl">
    <div class="section-title section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;

export const overflow = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
        <div class="section-title__overflow">
            <span class="menu-button">
                <button class="menu-button__button icon-btn" type="button" aria-expanded="true" aria-haspopup="true" type="button">
                    <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                        <use href="#icon-overflow"></use>
                    </svg>
                </button>
                <div class="menu-button__menu menu-button__menu--reverse">
                    <div class="menu-button__items" role="menu">
                        <div class="menu-button__item" role="menuitem"><span>Item 1</span></div>
                        <div class="menu-button__item" role="menuitem"><span>Item 2</span></div>
                        <div class="menu-button__item" role="menuitem"><span>Item 3</span></div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</div>
`;

export const withFavorite = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <div class="section-title__info">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--save-small" focusable="false" width="16" height="14">
                    <use href="#icon-save-small"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;

export const withFavoriteAndLink = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <div class="section-title__info">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--save-small" focusable="false" width="16" height="14">
                    <use href="#icon-save-small"></use>
                </svg>
            </button>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;
