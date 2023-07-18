export default { title: "Skin/Field/Helper Texts/Stacked" };

export const characterMeterOnly = () => `
<span class="field">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>
    <div class="field__description field__description--group">
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`;

export const descriptionCharacterMeter = () => `
<span class="field ">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-1-description field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>

    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`;

export const longDescriptionCharacterMeter = () => `
<span class="field" style="width:200px">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-1-description field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>

    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error which is long and should wrap to next line
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`;

export const fluidDescriptionCharacterMeter = () => `
<div class="field fluid">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="field ">
        <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" maxlength="140" aria-describedby="field-character-1-description field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-1-description">
                Field description or error
            </span>
            <span id="field-character-1">
                0 / 140
            </span>
        </div>
    </span>
    <span class="field ">
        <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" maxlength="140" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off"  />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-1">
                0 / 140
            </span>
        </div>
    </span>
    <div class="field fluid">
        <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
        <div class="field__control textbox">
            <input type="text" maxlength="140" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
        </div>
        <div class="field__description field__description--group">
            <span id="field-character-1-description">
                Field description or error
            </span>
            <span id="field-character-1">
                0 of 140
            </span>
        </div>
    </div>
</div>
`;
