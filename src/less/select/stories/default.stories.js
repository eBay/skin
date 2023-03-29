export default { title: 'Select' };

export const defaultSelection = () => `
<span class="select">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const forcedSelection = () => `
<span class="select">
   <select>
       <option value="0" disabled selected>-select-</option>
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
   </select>
   <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
       <use href="#icon-chevron-down-12"></use>
   </svg>
</span>
`;

export const disabled = () => `
<span class="select">
    <select disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const fluid = () => `
<div class="select select--fluid">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</div>
`;

export const borderless = () => `
<span class="select select--borderless">
    <select>
        <option value="0" disabled selected>Choose a Size</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const large = () => `
<span class="select select--large">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const underline = () => `
<span class="select select--underline">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const invalid = () => `
<span class="select">
    <select aria-invalid="true">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;
