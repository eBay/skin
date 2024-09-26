export default { title: "Skin/Table/Actions" };

export const base = () => `
<div class="table" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <button type="button">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    Condition
                </th>
                <th class="table-cell">
                    Multiple Actions
                </th>
                <th class="table-cell table-cell--icon-action">
                    Actions Plus
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Delivery
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export const compact = () => `
<div class="table table--density-compact" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <button type="button">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    Condition
                </th>
                <th class="table-cell">
                    Multiple Actions
                </th>
                <th class="table-cell table-cell--icon-action">
                    Actions Plus
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Delivery
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export const relaxed = () => `
<div class="table table--density-relaxed" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <button type="button">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    Condition
                </th>
                <th class="table-cell">
                    Multiple Actions
                </th>
                <th class="table-cell table-cell--icon-action">
                    Actions Plus
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Delivery
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="options" id="options">
                            <option value="item1">New</option>
                            <option value="item2" selected>New without box</option>
                            <option value="item3">Used</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <a class="cta-btn" href="https://www.ebay.com">
                            <span class="cta-btn__cell">
                                <span>Edit Listing</span>
                                <svg aria-hidden="true" class="icon icon--24" height="8" width="8">
                                <use href="#icon-arrow-right-24" />
                                </svg>
                            </span>
                        </a>

                        <button
                            class="fake-menu-button__button icon-btn"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Actions"
                            type="button"
                            >
                            <svg aria-hidden="true" class="icon icon--16">
                                <use href="#icon-overflow-vertical-16" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="table-cell table-cell--icon-action">
                    <button
                        class="fake-menu-button__button icon-btn"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="Actions"
                        type="button"
                        >
                        <svg aria-hidden="true" class="icon icon--16">
                            <use href="#icon-overflow-vertical-16" />
                        </svg>
                    </button>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;
