export default { title: "Skin/Table/Selection" };

export const base = () => `
<div class="table table--mode-selection" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th>Seller</th>
                <th>Item</th>
                <th>Image</th>
                <th class="table__cell table__cell--numeric">List Price</th>
                <th class="table__cell table__cell--numeric">Quantity Available</th>
                <th class="table__cell table__cell--numeric">Quantity Sold</th>
                <th class="table__cell table__cell--numeric">Watchers</th>
                <th class="table__cell table__cell--numeric">Protection</th>
                <th>Shipping</th>
                <th>Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell scope="row">Nintendo</th>
                <td class="table__cell>Switch</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$287.96</td>
                <td class="table__cell table__cell--numeric">300</td>
                <td class="table__cell table__cell--numeric">207</td>
                <td class="table__cell table__cell--numeric">95</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell scope="row">Nintendo</th>
                <td class="table__cell>SNES</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$89.85</td>
                <td class="table__cell table__cell--numeric">45</td>
                <td class="table__cell table__cell--numeric">17</td>
                <td class="table__cell table__cell--numeric">5</td>
                <td class="table__cell table__cell--numeric">$18.95</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX 360</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">345</td>
                <td class="table__cell table__cell--numeric">455</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX One</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">399</td>
                <td class="table__cell table__cell--numeric">407</td>
                <td class="table__cell table__cell--numeric">305</td>
                <td class="table__cell table__cell--numeric">$27.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Sony</th>
                <td class="table__cell>Playstation 5</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$519.99</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">265</td>
                <td class="table__cell table__cell--numeric">199</td>
                <td class="table__cell table__cell--numeric">$29.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
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
                <th>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th>Seller</th>
                <th>Item</th>
                <th>Image</th>
                <th class="table__cell table__cell--numeric">List Price</th>
                <th class="table__cell table__cell--numeric">Quantity Available</th>
                <th class="table__cell table__cell--numeric">Quantity Sold</th>
                <th class="table__cell table__cell--numeric">Watchers</th>
                <th class="table__cell table__cell--numeric">Protection</th>
                <th>Shipping</th>
                <th>Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Nintendo</th>
                <td class="table__cell>Switch</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$287.96</td>
                <td class="table__cell table__cell--numeric">300</td>
                <td class="table__cell table__cell--numeric">207</td>
                <td class="table__cell table__cell--numeric">95</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Nintendo</th>
                <td class="table__cell>SNES</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">
                $89.85
                </td>
                <td class="table__cell table__cell--numeric">45</td>
                <td class="table__cell table__cell--numeric">17</td>
                <td class="table__cell table__cell--numeric">5</td>
                <td class="table__cell table__cell--numeric">$18.95</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX 360</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">345</td>
                <td class="table__cell table__cell--numeric">455</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX One</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">399</td>
                <td class="table__cell table__cell--numeric">407</td>
                <td class="table__cell table__cell--numeric">305</td>
                <td class="table__cell table__cell--numeric">$27.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Sony</th>
                <td class="table__cell>Playstation 5</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$519.99</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">265</td>
                <td class="table__cell table__cell--numeric">199</td>
                <td class="table__cell table__cell--numeric">$29.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
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
                <th>
                    <span class="checkbox"><input aria-label="Select all rows" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th>Seller</th>
                <th>Item</th>
                <th>Image</th>
                <th class="table__cell table__cell--numeric">List Price</th>
                <th class="table__cell table__cell--numeric">Quantity Available</th>
                <th class="table__cell table__cell--numeric">Quantity Sold</th>
                <th class="table__cell table__cell--numeric">Watchers</th>
                <th class="table__cell table__cell--numeric">Protection</th>
                <th>Shipping</th>
                <th>Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Nintendo</th>
                <td class="table__cell>Switch</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$287.96</td>
                <td class="table__cell table__cell--numeric">300</td>
                <td class="table__cell table__cell--numeric">207</td>
                <td class="table__cell table__cell--numeric">95</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/1 - 4/5</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Nintendo</th>
                <td class="table__cell>SNES</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$89.85</td>
                <td class="table__cell table__cell--numeric">45</td>
                <td class="table__cell table__cell--numeric">17</td>
                <td class="table__cell table__cell--numeric">5</td>
                <td class="table__cell table__cell--numeric">$18.95</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX 360</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">345</td>
                <td class="table__cell table__cell--numeric">455</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">$17.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/17 - 4/25</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Microsoft</th>
                <td class="table__cell>XBOX One</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$499.99</td>
                <td class="table__cell table__cell--numeric">399</td>
                <td class="table__cell table__cell--numeric">407</td>
                <td class="table__cell table__cell--numeric">305</td>
                <td class="table__cell table__cell--numeric">$27.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/9 - 4/11</td>
            </tr>
            <tr>
                <td class="table__cell>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th class="table__cell>Sony</th>
                <td class="table__cell>Playstation 5</td>
                <td class="table__cell></td>
                <td class="table__cell table__cell--numeric">$519.99</td>
                <td class="table__cell table__cell--numeric">205</td>
                <td class="table__cell table__cell--numeric">265</td>
                <td class="table__cell table__cell--numeric">199</td>
                <td class="table__cell table__cell--numeric">$29.99</td>
                <td class="table__cell>FREE</td>
                <td class="table__cell>4/11 - 4/15</td>
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
                    <th>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </th>
                    <th>Seller</th>
                    <th>Item</th>
                    <th>Image</th>
                    <th class="table__cell table__cell--numeric">List Price</th>
                    <th class="table__cell table__cell--numeric">Quantity Available</th>
                    <th class="table__cell table__cell--numeric">Quantity Sold</th>
                    <th class="table__cell table__cell--numeric">Watchers</th>
                    <th class="table__cell table__cell--numeric">Protection</th>
                    <th>Shipping</th>
                    <th>Delivery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table__cell>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table__cell>Nintendo</th>
                    <td class="table__cell>Switch</td>
                    <td class="table__cell></td>
                    <td class="table__cell table__cell--numeric">$287.96</td>
                    <td class="table__cell table__cell--numeric">300</td>
                    <td class="table__cell table__cell--numeric">207</td>
                    <td class="table__cell table__cell--numeric">95</td>
                    <td class="table__cell table__cell--numeric">$17.99</td>
                    <td class="table__cell>FREE</td>
                    <td class="table__cell>4/1 - 4/5</td>
                </tr>
                <tr>
                    <td class="table__cell>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table__cell>Nintendo</th>
                    <td class="table__cell>SNES</td>
                    <td class="table__cell></td>
                    <td class="table__cell table__cell--numeric">$89.85</td>
                    <td class="table__cell table__cell--numeric">45</td>
                    <td class="table__cell table__cell--numeric">17</td>
                    <td class="table__cell table__cell--numeric">5</td>
                    <td class="table__cell table__cell--numeric">$18.95</td>
                    <td class="table__cell>FREE</td>
                    <td class="table__cell>4/11 - 4/15</td>
                </tr>
                <tr>
                    <td class="table__cell>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table__cell>Microsoft</th>
                    <td class="table__cell>XBOX 360</td>
                    <td class="table__cell></td>
                    <td class="table__cell table__cell--numeric">$499.99</td>
                    <td class="table__cell table__cell--numeric">345</td>
                    <td class="table__cell table__cell--numeric">455</td>
                    <td class="table__cell table__cell--numeric">205</td>
                    <td class="table__cell table__cell--numeric">$17.99</td>
                    <td class="table__cell>FREE</td>
                    <td class="table__cell>4/17 - 4/25</td>
                </tr>
                <tr>
                    <td class="table__cell>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table__cell>Microsoft</th>
                    <td class="table__cell>XBOX One</td>
                    <td class="table__cell></td>
                    <td class="table__cell table__cell--numeric">$499.99</td>
                    <td class="table__cell table__cell--numeric">399</td>
                    <td class="table__cell table__cell--numeric">407</td>
                    <td class="table__cell table__cell--numeric">305</td>
                    <td class="table__cell table__cell--numeric">$27.99</td>
                    <td class="table__cell>FREE</td>
                    <td class="table__cell>4/9 - 4/11</td>
                </tr>
                <tr>
                    <td class="table__cell>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th class="table__cell>Sony</th>
                    <td class="table__cell>Playstation 5</td>
                    <td class="table__cell></td>
                    <td class="table__cell table__cell--numeric">$519.99</td>
                    <td class="table__cell table__cell--numeric">205</td>
                    <td class="table__cell table__cell--numeric">265</td>
                    <td class="table__cell table__cell--numeric">199</td>
                    <td class="table__cell table__cell--numeric">$29.99</td>
                    <td class="table__cell>FREE</td>
                    <td class="table__cell>4/11 - 4/15</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;
