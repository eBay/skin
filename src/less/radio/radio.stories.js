export default { title: 'radio' };

export const unchecked = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r2" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const checked = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const uncheckedDisabled = () => `
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r4" type="radio" disabled />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const checkedDisabled = () => `
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r3" disabled checked type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const customColourUnchecked = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r6" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const customColourChecked = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r5" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-radio-checked"></use>
        </svg>
    </span>
</span>
`;

export const customIconUnchecked = () => `
<span class="radio" style="color: #5ba71b">
    <input aria-label="Custom radio example" class="radio__control" name="r8" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use xlink:href="#icon-radio-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use xlink:href="#icon-confirmation"></use>
        </svg>
    </span>
</span>
`;

export const customIconChecked = () => `
<span class="radio" style="color: #5ba71b">
<input aria-label="Custom radio example" class="radio__control" name="r7" type="radio" checked />
<span class="radio__icon" hidden>
    <svg aria-hidden="true" class="radio__unchecked" focusable="false">
        <use xlink:href="#icon-radio-unchecked"></use>
    </svg>
    <svg aria-hidden="true" class="radio__checked" focusable="false">
        <use xlink:href="#icon-confirmation"></use>
    </svg>
</span>
</span>
`;
