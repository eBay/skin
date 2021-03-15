export default { title: 'Checkbox/Checkbox/Checked' };

export const base = () => `
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" checked />
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

export const disabled = () => `
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled checked type="checkbox" />
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

export const customColour = () => `
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" checked />
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

export const RTL = () => `
<div dir="rtl">
    <span class="checkbox">
        <input aria-label="RTL checkbox" class="checkbox__control" type="checkbox" checked />
        <span class="checkbox__icon" hidden>
            <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
                <use xlink:href="#icon-checkbox-unchecked"></use>
            </svg>
            <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
                <use xlink:href="#icon-checkbox-checked"></use>
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
            <use xlink:href="#icon-attention"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" focusable="false" style="color: #5ba71b">
            <use xlink:href="#icon-confirmation"></use>
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
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
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
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
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
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-3">Option 3</label>
    </div>
</div>
`;
