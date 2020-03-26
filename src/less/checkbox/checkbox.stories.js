export default { title: 'checkbox' };

export const unchecked = () => `
<span class="checkbox">
    <input aria-label="Foreground SVG checkbox example" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const checked = () => `
<span class="checkbox">
    <input aria-label="Foreground SVG checkbox example" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const uncheckedDisabled = () => `
<span class="checkbox">
    <input aria-label="Disabled Foreground SVG checkbox example" class="checkbox__control" disabled type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const checkedDisabled = () => `
<span class="checkbox">
    <input aria-label="Disabled Foreground SVG checkbox example" class="checkbox__control" disabled checked type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const customColourUnchecked = () => `
<span class="checkbox">
    <input aria-label="Foreground SVG checkbox example" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const customColourChecked = () => `
<span class="checkbox">
    <input aria-label="Foreground SVG checkbox example" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-checkbox-checked"></use>
        </svg>
    </span>
</span>
`;

export const customIconUnchecked = () => `
<span class="checkbox">
    <input aria-label="Custom checkbox example" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-attention"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-confirmation"></use>
        </svg>
    </span>
</span>
`;

export const customIconChecked = () => `
<span class="checkbox">
    <input aria-label="Custom checkbox example" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-attention"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-confirmation"></use>
        </svg>
    </span>
</span>
`;
