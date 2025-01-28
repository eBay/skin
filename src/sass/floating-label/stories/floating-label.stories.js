export default { title: "Skin/Floating Label" };

export const base = () => `
<span class="floating-label">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label" for="firstName">First Name</label>
        <span class="textbox">
            <input class="textbox__control" id="firstName" type="text" />
        </span>
    </span>
<div>
`;

export const value = () => `
<span class="floating-label">
    <label class="floating-label__label" for="lastName">Last Name</label>
    <span class="textbox">
        <input class="textbox__control" id="lastName" type="text" value="Smith" />
    </span>
</span>
`;

export const placeholder = () => `
<span class="floating-label">
    <label class="floating-label__label" for="dob">Date Of Birth</label>
    <span class="textbox">
        <input class="textbox__control" id="dob" type="text" placeholder="MM/DD/YYYY" />
    </span>
</span>
`;

export const disabledTextbox = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--disabled" for="firstName">First Name</label>
    <span class="textbox textbox--disabled">
        <input class="textbox__control" id="firstName02" type="text" disabled />
    </span>
</span>
`;

export const invalidTextbox = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />
    </span>
</span>
`;

export const invalidTextboxWithValue = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" value="value" />
    </span>
</span>
`;

export const invalidTextboxWithPlaceholder = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" placeholder="placeholder" />
    </span>
</span>
`;

export const longText = () => `
<span class="floating-label">
    <label class="floating-label__label" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`;

export const longTextInline = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`;

export const select = () => `
<span class="floating-label">
    <label class="floating-label__label">Select Option</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
            <option value="">Choose an option</option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`;

export const selectInline = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`;

export const selectInlineDoubled = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text with ellipsis</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>

`;

export const RTLSelectInline = () => `
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
        <span class="select">
            <select aria-label="Select demo" name="options">
                <option value=""></option>
                <option value="item1">Pick Option 1 (default)</option>
                <option value="item2">Pick Option 2</option>
                <option value="item3">Pick Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</div>
`;

export const TextArea = () => `
<span class="floating-label floating-label--opaque">
    <label class="floating-label__label" for="first-name">Enter list of users</label>
    <span class="textbox">
        <textarea aria-label="Textbox demo" class="textbox__control"></textarea>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="floating-label demo-a11y-text-spacing">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`;

export const phoneInput = () => `
<span class="phone-input">
    <span class="listbox-button listbox-button--form">
    <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " aria-label="Country: United States of America (+1)">
        <span class="btn__cell">
        <span class="btn__text">
            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">
            <use href="#flag-us"></use>
            </svg>
        </span>
        <svg class="icon icon--12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--al" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="355">
                <use href="#flag-al"></use>
            </svg>
            <span>Albania</span>
            <span>(+355)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--in" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="91">
                <use href="#flag-in"></use>
            </svg>
            <span>India</span>
            <span>(+91)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--sh" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="290">
                <use href="#flag-sh"></use>
            </svg>
            <span>Saint Helena, Ascension and Tristan da Cunha</span>
            <span>(+290)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--gb" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="44">
                <use href="#flag-gb"></use>
            </svg>
            <span>United Kingdom</span>
            <span>(+44)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">
                <use href="#flag-us"></use>
            </svg>
            <span>United States of America</span>
            <span>(+1)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        </div>
    </div>
    </span>
    <span class="field floating-label">
    <label class="floating-label__label" for="field1"><span class="clipped">Area code + </span>Phone
        Number</label>
        <span class="textbox">
        <span id="floating-phone-prefix-0">+1</span>
        <input class="textbox__control" type="tel" aria-label="area code + phone number"
            autocomplete="tel-national" aria-describedby="floating-phone-prefix-0"/>
        </span>
    </span>
</span>
`;
