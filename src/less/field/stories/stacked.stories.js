export default { title: "Skin/Field/Stacked" };

export const group = () => `
<fieldset>
    <legend class="clipped">Account Type</legend>
    <div class="field-group">
        <span class="field">
            <span class="radio">
                <input class="radio__control" id="paccount" type="radio" name="account"/>
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" focusable="false" height="18" width="18">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" focusable="false" height="18" width="18">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label class="field__label field__label--end" for="paccount">Personal account</label>
        </span>
        <span class="field">
            <span class="radio">
                <input class="radio__control" id="baccount" type="radio" name="account"/>
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" focusable="false" height="18" width="18">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" focusable="false" height="18" width="18">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label class="field__label field__label--end" for="baccount">Business account</label>
        </span>
    </div>
</fieldset>

<div class="field">
    <label class="field__label field__label--stacked" for="email">Email</label>
    <div class="field__control textbox">
        <input class="textbox__control textbox__control--fluid" id="email" name="email" type="text" />
    </div>
</div>

<div class="field">
    <label class="field__label field__label--stacked" for="password">Password</label>
    <div class="field__control textbox">
        <input class="textbox__control textbox__control--fluid" id="password" name="password" type="password" />
    </div>
</div>

<div class="field-group">
    <span class="field fluid">
        <label class="field__label field__label--stacked" for="password">First Name</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="fname" id="fname" type="text" />
        </div>
    </span>

    <span class="field fluid">
        <label class="field__label field__label--stacked" for="lname">Last Name</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="lname" id="lname" type="text" />
        </div>
    </span>
</div>

<div class="field-group">
    <span class="field fluid">
        <label class="field__label field__label--stacked" for="dial-code">Dialing Code</label>
        <div class="field__control select">
            <select class="fluid" id="dial-code" name="dc">
                <option value="1">United States +1</option>
                <option value="44">United Kingdom +44</option>
                <option value="1">Canada +1</option>
            </select>
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </div>
    </span>

    <span class="field fluid">
        <label class="field__label field__label--stacked" for="phone">Mobile Phone</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="phone" id="phone" type="text" />
        </div>
    </span>
</div>

<div class="field">
    <button class="btn btn--fluid btn--primary" type="submit">Register</button>
</div>
`;

export const descriptions = () => `
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-1">Textbox Field - Default</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-1-description" class="textbox__control textbox__control--fluid" id="field-descriptions-1" type="text" />
    </div>
    <div class="field__description" id="field-descriptions-1-description">
        <span>Field description - default</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-2">Textbox Field - Confirmation</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-2-description" class="textbox__control textbox__control--fluid" id="field-descriptions-2" type="text" />
    </div>
    <div class="field__description field__description--confirmation" id="field-descriptions-2-description">
        <span>Field description - confirmation</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-3">Textbox Field - Information</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-3-description" class="textbox__control textbox__control--fluid" id="field-descriptions-3" type="text" />
    </div>
    <div class="field__description field__description--information" id="field-descriptions-3-description">
        <span>Field description - information</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-4">Textbox Field - Error</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-4-description" class="textbox__control textbox__control--fluid" id="field-descriptions-4" type="text" aria-invalid="true" />
    </div>
    <div class="field__description field__description--attention" id="field-descriptions-4-description">
        <svg class="icon icon--attention-filled-16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>Field description - error</span>
    </div>
</div>

<span class="field">
    <label class="field__label field__label--stacked" for="field-listbox-button-1">Listbox Button Field - Error</label>
    <div class="field__control textbox">
        <span class="listbox-button listbox-button--form listbox-button--error" data-makeup-auto-select="false">
            <button class="btn btn--form" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox" aria-describedby="field-listbox-button-1-description">
                <span class="btn__cell">
                    <span class="btn__label">Color: </span>
                    <span class="btn__text">-</span>
                    <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
                        <use href="#icon-chevron-down-12"></use>
                    </svg>
                </span>
            </button>
            <div class="listbox-button__listbox">
                <div class="listbox-button__options" role="listbox">
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Red</span>
                        <svg class="icon icon--tick-16" focusable="false" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Blue</span>
                        <svg class="icon icon--tick-16" focusable="false" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option" aria-disabled="true">
                        <span class="listbox-button__value">Yellow</span>
                        <svg class="icon icon--tick-16" focusable="false" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Green</span>
                        <svg class="icon icon--tick-16" focusable="false" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <select id="field-listbox-button-1" hidden="" class="listbox__native">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
            </select>
        </span>
    </div>
    <div class="field__description field__description--attention" id="field-listbox-button-1-description">
        <svg class="icon icon--attention-filled-16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>There was an error</span>
    </div>
</span>
`;
