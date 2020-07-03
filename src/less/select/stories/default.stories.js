export default { title: 'Select/Default' };

export const base = () => `
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
`;

export const forcedSelection = () => `
<span class="select">
   <select>
       <option value="0" disabled selected>-select-</option>
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
   </select>
   <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
       <use xlink:href="#icon-dropdown"></use>
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
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
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
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
    </svg>
</span>
`;

export const borderlessDisabled = () => `
<span class="select select--borderless">
    <select name="options" id="options" disabled>
        <option value="1">Option 1</option>
        <option value="2" selected>Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
        <use xlink:href="#icon-dropdown"></use>
    </svg>
</span>
`;

export const borderlessRtl = () => `
<div dir="rtl">
    <span class="select select--borderless">
        <select name="options" id="options">
            <option value="1">Option 1</option>
            <option value="2" selected>Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</div>
`;

export const rtl = () => `
<div dir="rtl">
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
</div>
`;

export const inheritFontSize200Percent = () => `
<span class="select" style="font-size: 200%">
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

inheritFontSize200Percent.story = {
    name: 'Inherit Font-Size (200%)'
}

export const inheritFontSizeGreen = () => `
<span class="select" style="color: green">
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

inheritFontSizeGreen.story = {
    name: 'Inherit Font-Size (Green)'
}
