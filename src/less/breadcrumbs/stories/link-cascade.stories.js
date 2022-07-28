export default { title: 'Breadcrumbs/Links/Cascade' };

export const color = () => `
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

export const fontSize = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation" style="font-size: 200%">
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

export const RTL = () => `
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
