export default { title: "Skin/Table" };

export const base = () => `
<div class="table" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
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
<div class="table table--density-compact" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
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
<div class="table table--density-relaxed" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
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
