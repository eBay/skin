export default { title: "Skin/Layout Grid" };

export const base = () => `
<div class="layout-grid">
    <ul aria-label="List of options">
        <li>
            <button class="btn btn--fluid">Button 1</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 2</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 3</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 4</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 5</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 6</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 7</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 8</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 9</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 10</button>
        </li>
    </ul>
</div>
`;

export const custom = () => `
<div class="layout-grid"
    data-columns-min="2"
    data-columns-xs="3"
    data-columns-sm="4"
    data-columns-md="6"
    data-columns-lg="8"
>
    <ul aria-label="List of options">
        <li>
            <button class="btn btn--fluid">Button 1</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 2</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 3</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 4</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 5</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 6</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 7</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 8</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 9</button>
        </li>
        <li>
            <button class="btn btn--fluid">Button 10</button>
        </li>
    </ul>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="layout-grid">
        <ul aria-label="List of options">
            <li>
                <button class="btn btn--fluid">Button 1</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 2</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 3</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 4</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 5</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 6</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 7</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 8</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 9</button>
            </li>
            <li>
                <button class="btn btn--fluid">Button 10</button>
            </li>
        </ul>
    </div>
</div>
`;
