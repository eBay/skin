export default { title: 'breadcrumbs' };

export const smallScreenLinksCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Smart Watch Bands</a>
        </li>
    </ul>
</nav>
`;

smallScreenLinksCurrentLocation.story = {
    name: 'Small Screen, Links, Current Location'
}

export const smallScreenButtonsCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Cell Phones, Smart Watches &amp; Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Smart Watch Bands</button>
        </li>
    </ul>
</nav>
`;

smallScreenButtonsCurrentLocation.story = {
    name: 'Small Screen, Buttons, Current Location'
}

export const largeScreenLinksCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Smart Watch Bands</a>
        </li>
    </ul>
</nav>
`;

largeScreenLinksCurrentLocation.story = {
    name: 'Large Screen, Links, Current Location'
}

export const largeScreenNotCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
        </li>
    </ul>
</nav>
`;

largeScreenNotCurrentLocation.story = {
    name: 'Large Screen, Not Current Location'
}

export const largeScreenButtonsCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Cell Phones, Smart Watches &amp; Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Smart Watch Bands</button>
        </li>
    </ul>
</nav>
`;

largeScreenButtonsCurrentLocation.story = {
    name: 'Large Screen, Buttons, Current Location'
}

export const largeScreenLinksCurrentLocationInheritColorGreen = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation" style="color: green">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Smart Watch Bands</a>
        </li>
    </ul>
</nav>
`;

largeScreenLinksCurrentLocationInheritColorGreen.story = {
    name: 'Large Screen, Links, Current Location, Inherit Color (green)'
}

export const largeScreenButtonsCurrentLocationInheritColorGreen = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation" style="color: green">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Cell Phones, Smart Watches &amp; Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Smart Watch Bands</button>
        </li>
    </ul>
</nav>
`;

largeScreenButtonsCurrentLocationInheritColorGreen.story = {
    name: 'Large Screen, Buttons, Current Location, Inherit Color (green)'
}

export const largeScreenLinksCurrentLocationRTL = () => `
<div dir="rtl">
    <nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
        <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
        <ul>
            <li>
                <a href="https://www.ebay.com/">ebay</a>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <a href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <a href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <a aria-current="location">Smart Watch Bands</a>
            </li>
        </ul>
    </nav>
</div>
`;

largeScreenLinksCurrentLocationRTL.story = {
    name: 'Large Screen, Links, Current Location, RTL'
}

export const largeScreenButtonsCurrentLocationRTL = () => `
<div dir="rtl">
    <nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
        <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
        <ul>
            <li>
                <button>ebay</button>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <button>Cell Phones, Smart Watches &amp; Accessories</button>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <button>Smart Watch Accessories</button>
                <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-breadcrumb"></use>
                </svg>
            </li>
            <li>
                <button aria-current="location">Smart Watch Bands</button>
            </li>
        </ul>
    </nav>
</div>
`;

largeScreenButtonsCurrentLocationRTL.story = {
    name: 'Large Screen, Buttons, Current Location, RTL'
}

