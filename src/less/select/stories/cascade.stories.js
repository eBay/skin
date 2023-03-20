export default { title: 'Select/Cascade' };

export const RTL = () => `
<div dir="rtl">
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
</div>
`;

export const fontSize = () => `
<span class="select" style="font-size: 200%">
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

export const color = () => `
<span class="select" style="color: green">
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
