export default { title: "Skin/Table/Selection" };

export const base = () => `
<div class="table table--mode-selection" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th class="table-cell">Seller</th>
                <th class="table-cell">Item</th>
                <th class="table-cell">Image</th>
                <th class="table-cell table-cell--numeric">List Price</th>
                <th class="table-cell table-cell--numeric">Quantity Available</th>
                <th class="table-cell table-cell--numeric">Quantity Sold</th>
                <th class="table-cell table-cell--numeric">Watchers</th>
                <th class="table-cell table-cell--numeric">Protection</th>
                <th class="table-cell">Shipping</th>
                <th class="table-cell">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell"></td>
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
<div class="table table--density-compact table--mode-selection" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th class="table-cell">Seller</th>
                <th class="table-cell">Item</th>
                <th class="table-cell">Image</th>
                <th class="table-cell table-cell--numeric">List Price</th>
                <th class="table-cell table-cell--numeric">Quantity Available</th>
                <th class="table-cell table-cell--numeric">Quantity Sold</th>
                <th class="table-cell table-cell--numeric">Watchers</th>
                <th class="table-cell table-cell--numeric">Protection</th>
                <th class="table-cell">Shipping</th>
                <th class="table-cell">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">
                $89.85
                </td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell"></td>
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
<div class="table table--density-relaxed table--mode-selection" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell">
                    <span class="checkbox"><input aria-label="Select all rows" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th class="table-cell">Seller</th>
                <th class="table-cell">Item</th>
                <th class="table-cell">Image</th>
                <th class="table-cell table-cell--numeric">List Price</th>
                <th class="table-cell table-cell--numeric">Quantity Available</th>
                <th class="table-cell table-cell--numeric">Quantity Sold</th>
                <th class="table-cell table-cell--numeric">Watchers</th>
                <th class="table-cell table-cell--numeric">Protection</th>
                <th class="table-cell">Shipping</th>
                <th class="table-cell">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">Switch</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$287.96</td>
                <td class="table-cell table-cell--numeric">300</td>
                <td class="table-cell table-cell--numeric">207</td>
                <td class="table-cell table-cell--numeric">95</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Nintendo</th>
                <td class="table-cell">SNES</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$89.85</td>
                <td class="table-cell table-cell--numeric">45</td>
                <td class="table-cell table-cell--numeric">17</td>
                <td class="table-cell table-cell--numeric">5</td>
                <td class="table-cell table-cell--numeric">$18.95</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX 360</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">345</td>
                <td class="table-cell table-cell--numeric">455</td>
                <td class="table-cell table-cell--numeric">205</td>
                <td class="table-cell table-cell--numeric">$17.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Microsoft</th>
                <td class="table-cell">XBOX One</td>
                <td class="table-cell"></td>
                <td class="table-cell table-cell--numeric">$499.99</td>
                <td class="table-cell table-cell--numeric">399</td>
                <td class="table-cell table-cell--numeric">407</td>
                <td class="table-cell table-cell--numeric">305</td>
                <td class="table-cell table-cell--numeric">$27.99</td>
                <td class="table-cell">FREE</td>
                <td class="table-cell">4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table-cell">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table-cell" scope="row">Sony</th>
                <td class="table-cell">Playstation 5</td>
                <td class="table-cell"></td>
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

export const RTL = () => `
<div dir="rtl">
    <div class="table table--mode-selection" role="group" aria-label="Video games for sale" tabindex="0">
        <table>
            <thead>
                <tr>
                    <th class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </th>
                    <th class="table-cell">Seller</th>
                    <th class="table-cell">Item</th>
                    <th class="table-cell">Image</th>
                    <th class="table-cell table-cell--numeric">List Price</th>
                    <th class="table-cell table-cell--numeric">Quantity Available</th>
                    <th class="table-cell table-cell--numeric">Quantity Sold</th>
                    <th class="table-cell table-cell--numeric">Watchers</th>
                    <th class="table-cell table-cell--numeric">Protection</th>
                    <th class="table-cell">Shipping</th>
                    <th class="table-cell">Delivery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table-cell" scope="row">Nintendo</th>
                    <td class="table-cell">Switch</td>
                    <td class="table-cell"></td>
                    <td class="table-cell table-cell--numeric">$287.96</td>
                    <td class="table-cell table-cell--numeric">300</td>
                    <td class="table-cell table-cell--numeric">207</td>
                    <td class="table-cell table-cell--numeric">95</td>
                    <td class="table-cell table-cell--numeric">$17.99</td>
                    <td class="table-cell">FREE</td>
                    <td class="table-cell">4/1 - 4/5</td>
                </tr>
                <tr>
                    <td class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table-cell" scope="row">Nintendo</th>
                    <td class="table-cell">SNES</td>
                    <td class="table-cell"></td>
                    <td class="table-cell table-cell--numeric">$89.85</td>
                    <td class="table-cell table-cell--numeric">45</td>
                    <td class="table-cell table-cell--numeric">17</td>
                    <td class="table-cell table-cell--numeric">5</td>
                    <td class="table-cell table-cell--numeric">$18.95</td>
                    <td class="table-cell">FREE</td>
                    <td class="table-cell">4/11 - 4/15</td>
                </tr>
                <tr>
                    <td class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table-cell" scope="row">Microsoft</th>
                    <td class="table-cell">XBOX 360</td>
                    <td class="table-cell"></td>
                    <td class="table-cell table-cell--numeric">$499.99</td>
                    <td class="table-cell table-cell--numeric">345</td>
                    <td class="table-cell table-cell--numeric">455</td>
                    <td class="table-cell table-cell--numeric">205</td>
                    <td class="table-cell table-cell--numeric">$17.99</td>
                    <td class="table-cell">FREE</td>
                    <td class="table-cell">4/17 - 4/25</td>
                </tr>
                <tr>
                    <td class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table-cell" scope="row">Microsoft</th>
                    <td class="table-cell">XBOX One</td>
                    <td class="table-cell"></td>
                    <td class="table-cell table-cell--numeric">$499.99</td>
                    <td class="table-cell table-cell--numeric">399</td>
                    <td class="table-cell table-cell--numeric">407</td>
                    <td class="table-cell table-cell--numeric">305</td>
                    <td class="table-cell table-cell--numeric">$27.99</td>
                    <td class="table-cell">FREE</td>
                    <td class="table-cell">4/9 - 4/11</td>
                </tr>
                <tr>
                    <td class="table-cell">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table-cell" scope="row">Sony</th>
                    <td class="table-cell">Playstation 5</td>
                    <td class="table-cell"></td>
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
</div>
`;
