export default { title: "Skin/Table/Loading" };

export const base = () => `
<div class="table table--loading-state" role="group" aria-label="Video games for sale" tabindex="0">
    <table aria-hidden="true" inert>
        <thead>
            <tr>
                <th class="table-cell" aria-sort="descending">
                    <button type="button" disabled>
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Status
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell" aria-sort="ascending">
                    <button type="button" disabled>
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
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
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Nintendo Switch" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo Switch Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell">
                    <div class="table__multiline">
                        <div class="table-cell__data">
                            <a>00-10542-89507</a>
                        </div>
                        <div class="table-cell__data table-cell__data--secondary">100</div>
                    </div>
                </td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Nintendo SNES" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo SNES Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">200</div>
                </td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="Microsoft XBOX 360" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX 360 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-sensitive">Backorder</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Microsoft XBOX One" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX One Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-neutral">Preparing</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell">Sony</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Sony Playstation 5" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Sony Playstation 5 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--trustworthy">Restocking</span>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
    <div role="status" aria-live="polite">
        <div class="progress-bar-expressive" tabindex="0">
            <div
                role="progressbar"
                aria-label="Loading..."
                class="progress-bar-expressive__progress"
            >
                <div class="progress-bar-expressive__lines">
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const compact = () => `
<div class="table table--density-compact table--loading-state" role="group" aria-label="Video games for sale" tabindex="0">
    <table aria-hidden="true" inert>
        <thead>
            <tr>
                <th class="table-cell" aria-sort="descending">
                    <button type="button" disabled>
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Status
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell" aria-sort="ascending">
                    <button type="button" disabled>
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
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
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Nintendo Switch" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo Switch Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell">
                    <div class="table__multiline">
                        <div class="table-cell__data">
                            <a>00-10542-89507</a>
                        </div>
                        <div class="table-cell__data table-cell__data--secondary">100</div>
                    </div>
                </td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Nintendo SNES" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo SNES Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">200</div>
                </td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="Microsoft XBOX 360" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX 360 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-sensitive">Backorder</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Microsoft XBOX One" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX One Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-neutral">Preparing</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell">Sony</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Sony Playstation 5" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Sony Playstation 5 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--trustworthy">Restocking</span>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
    <div role="status" aria-live="polite">
        <div class="progress-bar-expressive" tabindex="0">
            <div
                role="progressbar"
                aria-label="Loading..."
                class="progress-bar-expressive__progress"
            >
                <div class="progress-bar-expressive__lines">
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const relaxed = () => `
<div class="table table--density-relaxed table--loading-state" role="group" aria-label="Video games for sale" tabindex="0">
    <table aria-hidden="true" inert>
        <thead>
            <tr>
                <th class="table-cell" aria-sort="descending">
                    <button type="button" disabled>
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Status
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" disabled>
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell" aria-sort="ascending">
                    <button type="button" disabled>
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" disabled>
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
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Nintendo Switch" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo Switch Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell">
                    <div class="table__multiline">
                        <div class="table-cell__data">
                            <a>00-10542-89507</a>
                        </div>
                        <div class="table-cell__data table-cell__data--secondary">100</div>
                    </div>
                </td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Nintendo SNES" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo SNES Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">200</div>
                </td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="Microsoft XBOX 360" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX 360 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-sensitive">Backorder</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell">Microsoft</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Microsoft XBOX One" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Microsoft XBOX One Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--time-neutral">Preparing</span>
                </td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell">Sony</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Sony Playstation 5" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Sony Playstation 5 Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--trustworthy">Restocking</span>
                </td>
                <td class="table-cell table-cell--numeric">$519.99</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell">
                    <div class="table-cell__data">
                        <a>00-10542-89507</a>
                    </div>
                    <div class="table-cell__data table-cell__data--secondary">100</div>
                </td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
    <div role="status" aria-live="polite">
        <div class="progress-bar-expressive" tabindex="0">
            <div
                role="progressbar"
                aria-label="Loading..."
                class="progress-bar-expressive__progress"
            >
                <div class="progress-bar-expressive__lines">
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                <div class="progress-bar-expressive__line"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
