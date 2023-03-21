export default { title: 'Radio/Checked' };

export const base = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
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

export const RTL = () => `
<div dir="rtl">
    <span class="radio">
        <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
        <span class="radio__icon" hidden>
            <svg aria-hidden="true" class="radio__unchecked" focusable="false">
                <use href="#icon-radio-unchecked-18"></use>
            </svg>
            <svg aria-hidden="true" class="radio__checked" focusable="false">
                <use href="#icon-radio-checked-18"></use>
            </svg>
        </span>
    </span>
</div>
`;

export const disabled = () => `
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r3" disabled checked type="radio" />
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
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r5" type="radio" checked />
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
<input aria-label="Custom radio example" class="radio__control" name="r7" type="radio" checked />
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

export const multiLineLabel = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-1" type="radio" value="1" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-2" type="radio" value="2" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">Option 2</label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-3" type="radio" value="3" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" focusable="false" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">Option 3</label>
    </div>
</fieldset>`;
