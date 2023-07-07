export default { title: "Skin/Field/Helper Texts/Unstacked" };

export const characterMeterOnly = () => `
<span class="field field--grid">
    <label class="field__label" for="field-character-meter-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-meter-1-metergroup" class="textbox__control" id="field-character-meter-1-input" />
    </span>

    <span class="field__helper-text-blocks">
        <div id="field-character-meter-1-metergroup" class="field__character-meter">
            <meter aria-label="Characters Remaining" class="field__character-meter_meter clipped" high="100" low="30" min="0" max="140" value="0"></meter>

            <div id="field-character-meter-1" class="field__character-meter_text">
                0 of 140
            </div>
        </div>
    </span>
</span>
`;

export const descriptionCharacterMeter = () => `
<span class="field field--grid">
    <label class="field__label" for="field-character-meter-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-meter-1-description field-character-meter-1-metergroup" class="textbox__control" id="field-character-meter-1-input" />
    </span>

    <span class="field__helper-text-blocks">
        <span id="field-character-meter-1-description" class="field__description">
            Field description or error
        </span>
        <div id="field-character-meter-1-metergroup" class="field__character-meter">
            <meter aria-label="Characters Remaining" class="field__character-meter_meter clipped" high="100" low="30" min="0" max="140" value="0"></meter>

            <div id="field-character-meter-1" class="field__character-meter_text">
                0 of 140
            </div>
        </div>
    </span>
</span>
`;

export const fluidDescriptionCharacterMeter = () => `
<span class="field field--grid field--grid-fluid">
    <label class="field__label" for="field-character-meter-3-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" maxlength="140" aria-describedby="field-character-meter-3-description field-character-meter-1-metergroup" class="textbox__control" id="field-character-meter-3-input" />
    </span>

    <span class="field__helper-text-blocks">
        <span id="field-character-meter-3-description" class="field__description">
            Field description or error
        </span>

        <div id="field-character-meter-1-metergroup" class="field__character-meter">
            <meter aria-label="Characters Remaining" class="field__character-meter_meter clipped" high="100" low="30" min="0" max="140" value="0"></meter>

            <div id="field-character-meter-3" class="field__character-meter_text">
                0 of 140
            </div>
        </div>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="field field--grid">
        <label class="field__label" for="field-character-meter-3-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" maxlength="140" aria-describedby="field-character-meter-3-description field-character-meter-1-metergroup" class="textbox__control" id="field-character-meter-3-input" />
        </span>

        <span class="field__helper-text-blocks">
            <span id="field-character-meter-3-description" class="field__description">
                Field description or error
            </span>

            <div id="field-character-meter-1-metergroup" class="field__character-meter">
                <meter aria-label="Characters Remaining" class="field__character-meter_meter clipped" high="100" low="30" min="0" max="140" value="0"></meter>

                <div id="field-character-meter-3" class="field__character-meter_text">
                    0 of 140
                </div>
            </div>
        </span>
    </span>
</div>
`;
