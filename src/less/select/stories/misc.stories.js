export default { title: 'Select' };

export const largeSize = () => `
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
`;

export const underline = () => `
<span class="select select--underline">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
    </svg>
</span>
`;
