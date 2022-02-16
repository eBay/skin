export default { title: 'Floating Label/Floating Label' };

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
    <span class="textbox">
        <input class="textbox__control" id="firstName02" type="text" disabled />
    </span>
</span>
`;

export const invalidTextbox = () => `
<span class="floating-label">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />
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
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
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
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
`;
