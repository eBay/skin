export default { title: 'Checkbox/Mixed' };

export const base = () => `
<span class="checkbox">
    <input aria-checked="mixed" aria-label="Mixed checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use xlink:href="#icon-checkbox-unchecked"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use xlink:href="#icon-checkbox-mixed"></use>
        </svg>
    </span>
</span>
`;
