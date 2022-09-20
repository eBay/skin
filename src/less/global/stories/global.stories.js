export default { title: 'Global' };

export const headings = () => `
    <h1>This is a level 1 heading</h1>
    <hr/>
    <h2>This is a level 2 heading</h2>
    <hr/>
    <h3>This is a level 3 heading</h3>
    <hr/>
    <h4>This is a level 4 heading</h4>
    <hr/>
    <h5>This is a level 5 heading</h5>
    <hr/>
    <h6>This is a level 6 heading</h6>
`;

export const RTLHeadings = () => `
<div dir="rtl">
    <h1>This is a level 1 heading</h1>
    <hr/>
    <h2>This is a level 2 heading</h2>
    <hr/>
    <h3>This is a level 3 heading</h3>
    <hr/>
    <h4>This is a level 4 heading</h4>
    <hr/>
    <h5>This is a level 5 heading</h5>
    <hr/>
    <h6>This is a level 6 heading</h6>
</div>
`;

export const alignment = () => `
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>

<span class="select">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
    </svg>
</span>

<button class="btn btn--fixed-height">Button</button>

<a href="http://www.ebay.com" class="fake-btn fake-btn--fixed-height">Link</a>

<span class="combobox">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>

<span class="listbox-button">
    <button class="btn btn--form btn--fixed-height" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</span>

<span class="menu-button">
    <button class="btn btn--form btn--fixed-height" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Menu</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</span>
`;

export const RTLAlignment = () => `
<div dir="rtl">
    <span class="textbox">
        <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
    </span>

    <span class="select">
        <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>

    <button class="btn btn--fixed-height">Button</button>

    <a href="http://www.ebay.com" class="fake-btn fake-btn--fixed-height">Link</a>

    <span class="combobox">
        <span class="combobox__control">
            <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </span>

    <span class="listbox-button">
        <button class="btn btn--fixed-height" aria-expanded="false" aria-haspopup="listbox">
            <span class="btn__cell">
                <span class="btn__text">Options</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
    </span>

    <span class="menu-button">
        <button class="btn btn--fixed-height" aria-haspopup="true" type="button">
            <span class="btn__cell">
                <span class="btn__text">Menu</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
    </span>
<div>
`;

export const alignmentLarge = () => `
<span class="textbox textbox--large">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>

<span class="select select--large">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
    </svg>
</span>

<button class="btn btn--large btn--large-fixed-height">Button</button>

<a href="http://www.ebay.com" class="fake-btn fake-btn--large fake-btn--large-fixed-height">Link</a>

<span class="combobox combobox--large">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>

<span class="listbox-button">
    <button class="btn btn--large btn--form btn--large-fixed-height" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</span>

<span class="menu-button">
    <button class="btn btn--large btn--form btn--large-fixed-height" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Menu</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</span>
`;
