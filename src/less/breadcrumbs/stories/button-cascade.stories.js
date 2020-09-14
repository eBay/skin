export default { title: 'Breadcrumbs/Buttons/Cascade' };

export const color = () => `
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

export const RTL = () => `
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
