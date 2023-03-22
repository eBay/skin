export default { title: 'Radio/Unchecked' };

export const base = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r2" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r4" type="radio" disabled />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customColour = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r6" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false" style="color: #5ba71b">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customIcon = () => `
<span class="radio" style="color: #5ba71b">
    <input aria-label="Custom radio example" class="radio__control" name="r8" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked" focusable="false">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" focusable="false">
            <use href="#icon-confirmation"></use>
        </svg>
    </span>
</span>
`;
