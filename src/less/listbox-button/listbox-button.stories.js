export default { title: 'listbox-button' };

export const collapsed = () => `
<span class="listbox-button">
    <button class="expand-btn" aria-expanded="false" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const expanded = () => `
<span class="listbox-button">
    <button class="expand-btn" aria-expanded="true" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const disabled = () => `
<span class="listbox-button">
    <button class="expand-btn" aria-expanded="false" aria-haspopup="listbox" disabled>
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const primary = () => `
<span class="listbox-button">
    <button class="expand-btn expand-btn--primary" aria-expanded="true" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const primaryDisabled = () => `
<span class="listbox-button">
    <button class="expand-btn expand-btn--primary" aria-expanded="true" aria-haspopup="listbox" disabled>
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const secondary = () => `
<span class="listbox-button">
    <button class="expand-btn expand-btn--secondary" aria-expanded="true" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const secondaryDisabled = () => `
<span class="listbox-button">
    <button class="expand-btn expand-btn--secondary" aria-expanded="true" aria-haspopup="listbox" disabled>
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const invalid = () => `
<span class="listbox-button">
    <button class="expand-btn" aria-expanded="false" aria-haspopup="listbox" aria-invalid="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const longOption = () => `
<span class="listbox-button">
    <button class="expand-btn" aria-expanded="true" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100 with very very very long text</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const fluid = () => `
<span class="listbox-button listbox-button--fluid">
    <button class="expand-btn expand-btn--regular" aria-expanded="true" aria-haspopup="listbox">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Options</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Option 100</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 200</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Option 300</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const rtl = () => `
<div dir="rtl">
    <span class="listbox-button">
        <button class="expand-btn" aria-expanded="true" aria-haspopup="listbox">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Options</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="listbox-button__listbox">
            <div class="listbox-button__options" role="listbox">
                <div class="listbox-button__option" role="option" aria-selected="true">
                    <span class="listbox-button__value">Option 100</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 200</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 300</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const inheritColor = () => `
<div style="color: red">
    <span class="listbox-button">
        <button class="expand-btn" aria-expanded="true" aria-haspopup="listbox">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Options</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="listbox-button__listbox">
            <div class="listbox-button__options" role="listbox">
                <div class="listbox-button__option" role="option" aria-selected="true">
                    <span class="listbox-button__value">Option 100</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 200</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 300</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%;">
    <span class="listbox-button" style="font-size: 200%;">
        <button class="expand-btn" aria-expanded="true" aria-haspopup="listbox">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Options</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="listbox-button__listbox">
            <div class="listbox-button__options" role="listbox">
                <div class="listbox-button__option" role="option" aria-selected="true">
                    <span class="listbox-button__value">Option 100</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 200</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="listbox-button__option" role="option">
                    <span class="listbox-button__value">Option 300</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</div>
`;
