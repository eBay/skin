export default { title: "Breadcrumbs/Buttons/Overflow" };

export const minimum = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="fake-menu-button">
                <button class="fake-menu-button__button icon-btn" aria-expanded="false" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-horizontal-16" focusable="false">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <ul class="fake-menu-button__menu">
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="#">Smart Watch Bands</a>
                    </li>
                </ul>
            </span>

            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Current Band</button>
        </li>
    </ul>
</nav>
`;

export const collapsed = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="fake-menu-button">
                <button class="fake-menu-button__button icon-btn" aria-expanded="false" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-horizontal-16" focusable="false">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <ul class="fake-menu-button__menu">
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="#">Smart Watch Bands</a>
                    </li>
                </ul>
            </span>

            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Long Band Text Type 2</button>
            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
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
            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="fake-menu-button">
                <button class="fake-menu-button__button icon-btn" aria-expanded="true" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-horizontal-16" focusable="false">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>
                <ul class="fake-menu-button__menu">
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                    </li>
                    <li>
                        <a class="fake-menu-button__item" href="#">Smart Watch Bands</a>
                    </li>
                </ul>
            </span>

            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Band Long Band Text Type 2</button>
            <svg class="icon icon--chevron-right-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Current Band</button>
        </li>
    </ul>
</nav>
`;
