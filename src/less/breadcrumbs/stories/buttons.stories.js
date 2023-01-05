export default { title: 'Breadcrumbs/Buttons' };

export const currentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Cell Phones, Smart Watches &amp; Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button aria-current="location">Smart Watch Bands</button>
        </li>
    </ul>
</nav>
`;

export const noCurrentLocation = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <button>ebay</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Cell Phones, Smart Watches &amp; Accessories</button>
            <svg class="icon icon--breadcrumb" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <button>Smart Watch Accessories</button>
        </li>
    </ul>
</nav>
`;
