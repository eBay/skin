export default { title: "Listbox Button/Base" };

export const collapsedUnselected = () => `
<span class="listbox-button">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">-</span>
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
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
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Red with very very very long text</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;
