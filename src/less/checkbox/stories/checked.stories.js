export default { title: 'Checkbox/Checked' };

export const base = () => `
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-web-checkbox-unselected-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use href="#icon-web-checkbox-selected-18"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled checked type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-web-checkbox-unselected-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false">
            <use href="#icon-web-checkbox-selected-18"></use>
        </svg>
    </span>
</span>
`;

export const customColour = () => `
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
            <use href="#icon-web-checkbox-unselected-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use href="#icon-web-checkbox-selected-18"></use>
        </svg>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="checkbox">
        <input aria-label="RTL checkbox" class="checkbox__control" type="checkbox" checked />
        <span class="checkbox__icon" hidden>
            <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
                <use href="#icon-web-checkbox-unselected-18"></use>
            </svg>
            <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
                <use href="#icon-web-checkbox-selected-18"></use>
            </svg>
        </span>
    </span>
</div>
`;

export const customIcon = () => `
<span class="checkbox">
    <input aria-label="Custom icon checkbox" class="checkbox__control" type="checkbox" checked />
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

export const multiLineLabel = () => `
<legend>Choose an Option</legend>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input aria-label="Multiline checkbox 1" class="checkbox__control" id="group-checkbox-1" type="checkbox" value="1" name="checkbox-group" checked />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-unselected-18"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-selected-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input aria-label="Multiline checkbox 2" class="checkbox__control" id="group-checkbox-2" type="checkbox" value="2" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-unselected-18"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-selected-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-2">Option 2</label>
    </div>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input aria-label="Multiline checkbox 3" class="checkbox__control" id="group-checkbox-3" type="checkbox" value="3" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-unselected-18"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use href="#icon-web-checkbox-selected-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-3">Option 3</label>
    </div>
</div>
`;
