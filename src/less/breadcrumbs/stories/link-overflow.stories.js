export default { title: 'Breadcrumbs/Links/Overflow' };

export const collapsed = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <span class="fake-menu-button">
                <button class="fake-menu-button__button icon-btn" aria-expanded="false" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-small" focusable="false">
                        <use href="#icon-overflow-small"></use>
                    </svg>
                </button>

                <ul class="fake-menu-button__menu">

                    <div role="menu" class="fake-menu-button__items">
                        <div class="fake-menu-button__item" role="menuitem" tabindex="-1">
                            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                        </div>
                        <div class="fake-menu-button__item" role="menuitem" tabindex="-1">
                            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                        </div>
                        <div class="fake-menu-button__item" role="menuitem" tabindex="-1">
                            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                        </div>
                    </div>
                </ul>
            </span>

            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand1">Smart Watch Band Type 1</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand2">Smart Watch Band Type 2</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Current Band</a>
        </li>
    </ul>
</nav>
`;

export const expanded = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <span class="fake-menu-button">
                <button class="fake-menu-button__button icon-btn" aria-expanded="true" aria-haspopup="true" aria-label="eBay Menu"  type="button">
                    <svg aria-hidden="true" class="icon icon--overflow-small" focusable="false">
                        <use href="#icon-overflow-small"></use>
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
                        <a class="fake-menu-button__item" href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                    </li>
                </ul>
            </span>

            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand1">Smart Watch Band Type 1</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Current Band</a>
        </li>
    </ul>
</nav>
`;
