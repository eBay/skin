export default { title: "Skin/Listbox Button/Base" };

export const collapsedUnselected = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">-</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const expandedUnselected = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">-</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const collapsedSelected = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const expandedSelected = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const disabled = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox" disabled>
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const invalid = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox" aria-invalid="true">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const longOption = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Red with very very very long text</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Red with very very very long text</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const borderless = () => `
<span class="listbox-button">
    <button class="btn btn--borderless" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Quantity: </span>
            <span class="btn__text">1</span>
            <svg class="icon icon--chevron-down-12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox" tabindex="0">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">1</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">2</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">3</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const floatingLabelSelected = () => `
<span class="listbox-button">
    <button class="btn btn--form btn--floating-label" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__floating-label">Color:</span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox" tabindex="0">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const textSpacing = () => `
<span class="listbox-button demo-a11y-text-spacing">
    <button class="btn btn--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">Blue</span>
            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;
