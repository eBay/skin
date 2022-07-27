export default { title: 'Select/Select/Floating Label' };

export const defaultLabel = () => `
<span class="floating-label">
    <label class="floating-label__label" for="select-01">Choose Option</label>
    <span class="select">
        <select id="select-01">
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
`;

export const selectedOption = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="select-01">Here are your options</label>
    <span class="select">
        <select id="select-01">
            <option value=""></option>
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
`;

export const errorState = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="select-03">Choose Option</label>
    <span class="select">
        <select id="select-03" aria-invalid="true">
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="floating-label">
    <label class="floating-label__label" for="select-03">Choose Option</label>
    <span class="select">
        <select disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2 can't pick</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</span>
`;
