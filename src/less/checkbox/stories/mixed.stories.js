export default { title: 'Checkbox/Mixed' };

export const base = () => `
<span class="checkbox">
    <input aria-checked="mixed" aria-label="Mixed checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-web-checkbox-unselected-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use href="#icon-web-checkbox-indterminate-18"></use>
        </svg>
    </span>
</span>
`;
