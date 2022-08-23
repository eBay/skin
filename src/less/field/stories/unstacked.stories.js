export default { title: 'Field/Unstacked' };

export const inlineLevel = () => `
<span class="field">
    <label class="field__label" for="field-unstacked-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" />
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-unstacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-unstacked-2" name="options">
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-unstacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="field">
        <label class="field__label" for="field-unstacked-1">Field 1</label>
        <span class="field__control textbox">
            <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" />
        </span>
    </span>
    <span class="field">
        <label class="field__label" for="field-unstacked-2">Field 2</label>
        <span class="field__control select">
            <select id="field-unstacked-2" name="options">
                <option value="item1">Option 1</option>
                <option value="item2">Option 2</option>
                <option value="item3">Option 3</option>
            </select>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </span>
    <span class="field">
        <label class="field__label" for="field-unstacked-3">Field 3</label>
        <span class="field__control switch">
            <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
            <span class="switch__button"></span>
        </span>
    </span>
    <span class="field field--align-top">
        <label class="field__label" for="field-unstacked-4">Field 4</label>
        <span class="field__control textbox">
            <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
        </span>
    </span>
</div>
`;

export const blockLevel = () => `
<div class="field" style="margin-top: 0">
    <label class="field__label" for="field-stacked-1">Field 1</label>
    <span class="textbox">
        <input class="textbox__control" id="field-stacked-1" type="text" placeholder="placeholder text" />
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-stacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-stacked-2" name="options">
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-stacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-stacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</div>
<div class="field field--align-top">
    <label class="field__label" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</div>
`;

export const disabled = () => `
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" disabled />
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-unstacked-2" name="options" disabled>
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" disabled />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label field__label--disabled" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
`;
