export default { title: 'Breadcrumbs/Buttons/Overflow' };

export const collapsed = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="menu-button__button icon-btn" aria-expanded="false" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-small" focusable="false">
                        <use href="#icon-overflow-small"></use>
                    </svg>
                </button>

                <span tabindex="-1" class="menu-button__menu">
                    <div role="menu" class="menu-button__items">
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                        </div>
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                        </div>
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="#">Smart Watch Bands</a>
                        </div>
                    </div>
                </span>
            </span>

            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Type 1</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Type 2</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Current Band</button>
        </li>
    </ul>
</nav>
`;

export const expanded = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="menu-button__button icon-btn" aria-expanded="true" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-small" focusable="false">
                        <use href="#icon-overflow-small"></use>
                    </svg>
                </button>

                <span tabindex="-1" class="menu-button__menu">
                    <div role="menu" class="menu-button__items">
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="#">Cell Phones, Smart Watches &amp; Accessories</a>
                        </div>
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="#">Smart Watch Accessories</a>
                        </div>
                        <div class="menu-button__item" role="menuitem" tabindex="-1">
                            <a href="#">Smart Watch Bands</a>
                        </div>
                    </div>
                </span>
            </span>

            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Type 1</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Type 2</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Current Band</button>
        </li>
    </ul>
</nav>
`;
