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
