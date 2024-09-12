export default { title: "Skin/Table/Inputs" };

export const base = () => `
<div class="table" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Image
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
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
                <th class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-1">
                            <option value="item1" selected>Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$287.96" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-2">
                            <option value="item1">Switch</option>
                            <option value="item2" selected>SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$89.85" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-3">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3" selected>XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-4">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3" selected>XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Sony" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-5">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3" selected>Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="List price" value="$519.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
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
                    <button type="button" class="btn btn--borderless">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Image
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
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
                <th class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-1">
                            <option value="item1" selected>Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$287.96" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-2">
                            <option value="item1">Switch</option>
                            <option value="item2" selected>SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$89.85" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-3">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3" selected>XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-4">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3" selected>XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Sony" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-5">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3" selected>Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="List price" value="$519.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
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
                    <button type="button" class="btn btn--borderless">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Image
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        List Price
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Quantity Available
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Orders
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Watchers
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell table-cell--numeric">
                    <button type="button" class="btn btn--borderless">
                        Protection
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
                        Shipping
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-up-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button" class="btn btn--borderless">
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
                <th class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-1">
                            <option value="item1" selected>Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$287.96" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Nintendo" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-2">
                            <option value="item1">Switch</option>
                            <option value="item2" selected>SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$89.85" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-3">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3" selected>XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Microsoft" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-4">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3" selected>XBOX One</option>
                            <option value="item3">Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="List price" value="$499.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <th class="table-cell" scope="row">
                    <span class="textbox textbox--fluid">
                        <input class="textbox__control" type="text" placeholder="Seller" value="Sony" />
                    </span>
                </th>
                <td class="table-cell">
                    <span class="select select--borderless select--fluid">
                        <select name="videogame-stations" id="videogame-stations-5">
                            <option value="item1">Switch</option>
                            <option value="item2">SNES</option>
                            <option value="item3">XBOX 360</option>
                            <option value="item3">XBOX One</option>
                            <option value="item3" selected>Playstation 5</option>
                        </select>
                        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                            <use href="#icon-chevron-down-12" />
                        </svg>
                    </span>
                </td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="List price" value="$519.99" />
                    </span>
                </td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">265</td>
                <td class="table-cell table-cell--numeric">199</td>
                <td class="table-cell table-cell--numeric">$29.99</td>
                <td class="table-cell">
                    <span class="textbox">
                        <input class="textbox__control" type="text" placeholder="Shipping" value="FREE shipping with the add-on of purchase protection" />
                    </span>
                </td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;
