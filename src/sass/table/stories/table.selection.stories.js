export default { title: "Skin/Table/Selection" };

export const base = () => `
<div class="table table--mode-selection">
    <table>
        <caption>
            Video game consoles for sale.
        </caption>
        <thead>
            <tr>
                <th scope="col">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th scope="col">Seller</th>
                <th scope="col">Item</th>
                <th scope="col">Image</th>
                <th scope="col" class="table__cell--numeric">List Price</th>
                <th scope="col" class="table__cell--numeric">Quantity Available</th>
                <th scope="col" class="table__cell--numeric">Quantity Sold</th>
                <th scope="col" class="table__cell--numeric">Watchers</th>
                <th scope="col" class="table__cell--numeric">Protection</th>
                <th scope="col">Shipping</th>
                <th scope="col">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>Switch</td>
                <td></td>
                <td class="table__cell--numeric">$287.96</td>
                <td class="table__cell--numeric">300</td>
                <td class="table__cell--numeric">207</td>
                <td class="table__cell--numeric">95</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/1 - 4/5</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>SNES</td>
                <td></td>
                <td class="table__cell--numeric" contenteditable="true">
                $89.85
                </td>
                <td class="table__cell--numeric">45</td>
                <td class="table__cell--numeric">17</td>
                <td class="table__cell--numeric">5</td>
                <td class="table__cell--numeric">$18.95</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX 360</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">345</td>
                <td class="table__cell--numeric">455</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/17 - 4/25</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX One</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">399</td>
                <td class="table__cell--numeric">407</td>
                <td class="table__cell--numeric">305</td>
                <td class="table__cell--numeric">$27.99</td>
                <td>FREE</td>
                <td>4/9 - 4/11</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Sony</th>
                <td>Playstation 5</td>
                <td></td>
                <td class="table__cell--numeric">$519.99</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">265</td>
                <td class="table__cell--numeric">199</td>
                <td class="table__cell--numeric">$29.99</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export const compact = () => `
<div class="table table--density-compact table--mode-selection">
    <table>
        <caption>
            Video game consoles for sale.
        </caption>
        <thead>
            <tr>
                <th scope="col">
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th scope="col">Seller</th>
                <th scope="col">Item</th>
                <th scope="col">Image</th>
                <th scope="col" class="table__cell--numeric">List Price</th>
                <th scope="col" class="table__cell--numeric">Quantity Available</th>
                <th scope="col" class="table__cell--numeric">Quantity Sold</th>
                <th scope="col" class="table__cell--numeric">Watchers</th>
                <th scope="col" class="table__cell--numeric">Protection</th>
                <th scope="col">Shipping</th>
                <th scope="col">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>Switch</td>
                <td></td>
                <td class="table__cell--numeric">$287.96</td>
                <td class="table__cell--numeric">300</td>
                <td class="table__cell--numeric">207</td>
                <td class="table__cell--numeric">95</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/1 - 4/5</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>SNES</td>
                <td></td>
                <td class="table__cell--numeric" contenteditable="true">
                $89.85
                </td>
                <td class="table__cell--numeric">45</td>
                <td class="table__cell--numeric">17</td>
                <td class="table__cell--numeric">5</td>
                <td class="table__cell--numeric">$18.95</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX 360</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">345</td>
                <td class="table__cell--numeric">455</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/17 - 4/25</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX One</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">399</td>
                <td class="table__cell--numeric">407</td>
                <td class="table__cell--numeric">305</td>
                <td class="table__cell--numeric">$27.99</td>
                <td>FREE</td>
                <td>4/9 - 4/11</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Sony</th>
                <td>Playstation 5</td>
                <td></td>
                <td class="table__cell--numeric">$519.99</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">265</td>
                <td class="table__cell--numeric">199</td>
                <td class="table__cell--numeric">$29.99</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export const relaxed = () => `
<div class="table table--density-relaxed table--mode-selection">
    <table>
        <caption>
            Video game consoles for sale.
        </caption>
        <thead>
            <tr>
                <th scope="col">
                    <span class="checkbox"><input aria-label="Select all rows" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </th>
                <th scope="col">Seller</th>
                <th scope="col">Item</th>
                <th scope="col">Image</th>
                <th scope="col" class="table__cell--numeric">List Price</th>
                <th scope="col" class="table__cell--numeric">Quantity Available</th>
                <th scope="col" class="table__cell--numeric">Quantity Sold</th>
                <th scope="col" class="table__cell--numeric">Watchers</th>
                <th scope="col" class="table__cell--numeric">Protection</th>
                <th scope="col">Shipping</th>
                <th scope="col">Delivery</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>Switch</td>
                <td></td>
                <td class="table__cell--numeric">$287.96</td>
                <td class="table__cell--numeric">300</td>
                <td class="table__cell--numeric">207</td>
                <td class="table__cell--numeric">95</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/1 - 4/5</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Nintendo</th>
                <td>SNES</td>
                <td></td>
                <td class="table__cell--numeric" contenteditable="true">
                $89.85
                </td>
                <td class="table__cell--numeric">45</td>
                <td class="table__cell--numeric">17</td>
                <td class="table__cell--numeric">5</td>
                <td class="table__cell--numeric">$18.95</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX 360</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">345</td>
                <td class="table__cell--numeric">455</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">$17.99</td>
                <td>FREE</td>
                <td>4/17 - 4/25</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Microsoft</th>
                <td>XBOX One</td>
                <td></td>
                <td class="table__cell--numeric">$499.99</td>
                <td class="table__cell--numeric">399</td>
                <td class="table__cell--numeric">407</td>
                <td class="table__cell--numeric">305</td>
                <td class="table__cell--numeric">$27.99</td>
                <td>FREE</td>
                <td>4/9 - 4/11</td>
            </tr>
            <tr>
                <td>
                    <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                </td>
                <th>Sony</th>
                <td>Playstation 5</td>
                <td></td>
                <td class="table__cell--numeric">$519.99</td>
                <td class="table__cell--numeric">205</td>
                <td class="table__cell--numeric">265</td>
                <td class="table__cell--numeric">199</td>
                <td class="table__cell--numeric">$29.99</td>
                <td>FREE</td>
                <td>4/11 - 4/15</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="table table--mode-selection">
        <table>
            <caption>
                Video game consoles for sale.
            </caption>
            <thead>
                <tr>
                    <th scope="col">
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </th>
                    <th scope="col">Seller</th>
                    <th scope="col">Item</th>
                    <th scope="col">Image</th>
                    <th scope="col" class="table__cell--numeric">List Price</th>
                    <th scope="col" class="table__cell--numeric">Quantity Available</th>
                    <th scope="col" class="table__cell--numeric">Quantity Sold</th>
                    <th scope="col" class="table__cell--numeric">Watchers</th>
                    <th scope="col" class="table__cell--numeric">Protection</th>
                    <th scope="col">Shipping</th>
                    <th scope="col">Delivery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th>Nintendo</th>
                    <td>Switch</td>
                    <td></td>
                    <td class="table__cell--numeric">$287.96</td>
                    <td class="table__cell--numeric">300</td>
                    <td class="table__cell--numeric">207</td>
                    <td class="table__cell--numeric">95</td>
                    <td class="table__cell--numeric">$17.99</td>
                    <td>FREE</td>
                    <td>4/1 - 4/5</td>
                </tr>
                <tr>
                    <td>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th>Nintendo</th>
                    <td>SNES</td>
                    <td></td>
                    <td class="table__cell--numeric" contenteditable="true">
                    $89.85
                    </td>
                    <td class="table__cell--numeric">45</td>
                    <td class="table__cell--numeric">17</td>
                    <td class="table__cell--numeric">5</td>
                    <td class="table__cell--numeric">$18.95</td>
                    <td>FREE</td>
                    <td>4/11 - 4/15</td>
                </tr>
                <tr>
                    <td>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th>Microsoft</th>
                    <td>XBOX 360</td>
                    <td></td>
                    <td class="table__cell--numeric">$499.99</td>
                    <td class="table__cell--numeric">345</td>
                    <td class="table__cell--numeric">455</td>
                    <td class="table__cell--numeric">205</td>
                    <td class="table__cell--numeric">$17.99</td>
                    <td>FREE</td>
                    <td>4/17 - 4/25</td>
                </tr>
                <tr>
                    <td>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th>Microsoft</th>
                    <td>XBOX One</td>
                    <td></td>
                    <td class="table__cell--numeric">$499.99</td>
                    <td class="table__cell--numeric">399</td>
                    <td class="table__cell--numeric">407</td>
                    <td class="table__cell--numeric">305</td>
                    <td class="table__cell--numeric">$27.99</td>
                    <td>FREE</td>
                    <td>4/9 - 4/11</td>
                </tr>
                <tr>
                    <td>
                        <span class="checkbox"><input aria-label="Select row" class="checkbox__control" type="checkbox" name="checkbox-default"><span class="checkbox__icon" hidden=""><svg class="checkbox__unchecked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-unchecked-18"></use></svg><svg class="checkbox__checked" height="18" width="18" aria-hidden="true"><use href="#icon-checkbox-checked-18"></use></svg></span></span>
                    </td>
                    <th>Sony</th>
                    <td>Playstation 5</td>
                    <td></td>
                    <td class="table__cell--numeric">$519.99</td>
                    <td class="table__cell--numeric">205</td>
                    <td class="table__cell--numeric">265</td>
                    <td class="table__cell--numeric">199</td>
                    <td class="table__cell--numeric">$29.99</td>
                    <td>FREE</td>
                    <td>4/11 - 4/15</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;
