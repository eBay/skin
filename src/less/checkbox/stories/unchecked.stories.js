export default { title: "Checkbox/Unchecked" };

export const base = () => `
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customColour = () => `
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customIcon = () => `
<span class="checkbox">
    <input aria-label="Custom icon checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-attention-24"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use href="#icon-confirmation-24"></use>
        </svg>
    </span>
</span>
`;
