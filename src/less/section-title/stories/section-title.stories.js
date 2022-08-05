export default { title: 'Section Title' };

export const heading = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title">Marketing Type Content Title</h2>
    </div>
</div>
`;

export const subheading = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title">Marketing Type Content Title</h2>
        <span class="section-title__subtitle">Recommended for you</span>
    </div>
</div>
`;

export const linked = () => `
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
`;

export const linkedWithSubheading = () => `
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
`;

export const info = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title">Marketing Type Content Title</h2>
    </div>
    <div class="section-title__info">
        <span class="infotip">
            <button class="icon-btn infotip__host" type="button" aria-expanded="true" aria-label="Help">
                <svg class="icon icon--information" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-information"></use>
                </svg>
            </button>
            <div class="infotip__overlay" style="left: -6px; right: auto; top: calc(100%); bottom: auto">
                <span class="infotip__pointer infotip__pointer--top-left"></span>
                <div class="infotip__mask">
                    <div class="infotip__cell">
                        <span class="infotip__content">
                            <h3 class="infotip__heading">Infotip</h3>
                            <p>Here's a tip to help you be successful at your task.</p>
                        </span>
                        <button class="infotip__close" type="button" aria-label="Dismiss infotip">
                            <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const overflow = () => `
<div class="section-title">
    <div class="section-title__title-container">
        <h2 class="section-title__title">Marketing Type Content Title</h2>
    </div>
    <div class="section-title__overflow">
        <span class="menu-button">
            <button class="menu-button__button icon-btn" type="button" aria-expanded="true" aria-haspopup="true" type="button">
                <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-overflow"></use>
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
`;

export const giant = () => `
<div class="section-title section-title--giant">
    <div class="section-title__title-container">
        <h2 class="section-title__title"><a href="https://www.ebay.com">Marketing Type Content Title</a></h2>
        <span class="section-title__subtitle">Recommended for you</span>
    </div>
    <div class="section-title__cta">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <span class="section-title__cta-text">See All</span>
            <svg aria-hidden="true" class="section-title__cta-icon" focusable="false">
                <use xlink:href="#icon-arrow-right-bold"></use>
            </svg>
        </a>
    </div>
    <div class="section-title__info">
        <span class="infotip">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--information" focusable="false" width="24" height="24">
                    <use xlink:href="#icon-information"></use>
                </svg>
            </button>
            <div class="infotip__overlay" style="left: -6px; right: auto; top: calc(100%); bottom: auto">
                <span class="infotip__pointer infotip__pointer--top-left"></span>
                <div class="infotip__mask">
                    <div class="infotip__cell">
                        <span class="infotip__content">
                            <h3 class="infotip__heading">Infotip</h3>
                            <p>Here's a tip to help you be successful at your task.</p>
                        </span>
                        <button class="infotip__close" type="button" aria-label="Dismiss infotip">
                            <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="section-title__overflow">
        <span class="menu-button">
            <button class="menu-button__button icon-btn" type="button" aria-expanded="false" aria-haspopup="true" type="button">
                <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-overflow"></use>
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
`;

export const large = () => `
<div class="section-title section-title--large">
    <div class="section-title__title-container">
        <h2 class="section-title__title"><a href="https://www.ebay.com">Marketing Type Content Title</a></h2>
        <span class="section-title__subtitle">Recommended for you</span>
    </div>
    <div class="section-title__cta">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <span class="section-title__cta-text">See All</span>
            <svg aria-hidden="true" class="section-title__cta-icon" focusable="false">
                <use xlink:href="#icon-arrow-right-bold"></use>
            </svg>
        </a>
    </div>
    <div class="section-title__info">
        <span class="infotip">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--information" focusable="false" width="24" height="24">
                    <use xlink:href="#icon-information"></use>
                </svg>
            </button>
            <div class="infotip__overlay" style="left: -6px; right: auto; top: calc(100%); bottom: auto">
                <span class="infotip__pointer infotip__pointer--top-left"></span>
                <div class="infotip__mask">
                    <div class="infotip__cell">
                        <span class="infotip__content">
                            <h3 class="infotip__heading">Infotip</h3>
                            <p>Here's a tip to help you be successful at your task.</p>
                        </span>
                        <button class="infotip__close" type="button" aria-label="Dismiss infotip">
                            <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="section-title__overflow">
        <span class="menu-button">
            <button class="menu-button__button icon-btn" type="button" aria-expanded="false" aria-haspopup="true" type="button">
                <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-overflow"></use>
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
`;

export const medium = () => `
<div class="section-title section-title--medium">
    <div class="section-title__title-container">
        <h2 class="section-title__title"><a href="https://www.ebay.com">Marketing Type Content Title</a></h2>
        <span class="section-title__subtitle">Recommended for you</span>
    </div>
    <div class="section-title__cta">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <span class="section-title__cta-text">See All</span>
            <svg aria-hidden="true" class="section-title__cta-icon" focusable="false">
                <use xlink:href="#icon-arrow-right-bold"></use>
            </svg>
        </a>
    </div>
    <div class="section-title__info">
        <span class="infotip">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--information" focusable="false" width="24" height="24">
                    <use xlink:href="#icon-information"></use>
                </svg>
            </button>
            <div class="infotip__overlay" style="left: -6px; right: auto; top: calc(100%); bottom: auto">
                <span class="infotip__pointer infotip__pointer--top-left"></span>
                <div class="infotip__mask">
                    <div class="infotip__cell">
                        <span class="infotip__content">
                            <h3 class="infotip__heading">Infotip</h3>
                            <p>Here's a tip to help you be successful at your task.</p>
                        </span>
                        <button class="infotip__close" type="button" aria-label="Dismiss infotip">
                            <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="section-title__overflow">
        <span class="menu-button">
            <button class="menu-button__button icon-btn" type="button" aria-expanded="false" aria-haspopup="true" type="button">
                <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-overflow"></use>
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
`;

export const small = () => `
<div class="section-title section-title--small">
    <div class="section-title__title-container">
        <h2 class="section-title__title"><a href="https://www.ebay.com">Marketing Type Content Title</a></h2>
        <span class="section-title__subtitle">Recommended for you</span>
    </div>
    <div class="section-title__cta">
        <a href="https://www.ebay.com" tabindex="-1" aria-hidden="true">
            <span class="section-title__cta-text">See All</span>
            <svg aria-hidden="true" class="section-title__cta-icon" focusable="false">
                <use xlink:href="#icon-arrow-right-bold"></use>
            </svg>
        </a>
    </div>
    <div class="section-title__info">
        <span class="infotip">
            <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--information" focusable="false" width="24" height="24">
                    <use xlink:href="#icon-information"></use>
                </svg>
            </button>
            <div class="infotip__overlay" style="left: -6px; right: auto; top: calc(100%); bottom: auto">
                <span class="infotip__pointer infotip__pointer--top-left"></span>
                <div class="infotip__mask">
                    <div class="infotip__cell">
                        <span class="infotip__content">
                            <h3 class="infotip__heading">Infotip</h3>
                            <p>Here's a tip to help you be successful at your task.</p>
                        </span>
                        <button class="infotip__close" type="button" aria-label="Dismiss infotip">
                            <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="section-title__overflow">
        <span class="menu-button">
            <button class="menu-button__button icon-btn" type="button" aria-expanded="false" aria-haspopup="true" type="button">
                <svg class="icon icon--overflow" focusable="false" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-overflow"></use>
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
`;
