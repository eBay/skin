export default { title: 'Listbox Button/Form' };

export const enabled = () => `
<span class="listbox-button listbox-button--form">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">-</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
    <select hidden="" class="listbox__native">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
    </select>
</span>
`;

export const disabled = () => `
<span class="listbox-button listbox-button--form">
    <button class="btn btn--form" aria-expanded="false" aria-haspopup="listbox" disabled>
        <span class="btn__cell">
            <span class="btn__label">Color: </span>
            <span class="btn__text">-</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
    <select hidden="" class="listbox__native">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
    </select>
</span>
`;
