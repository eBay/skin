export default { title: "Skin/Chips Combobox/Base" };

export const empty = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports"></ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fluid = () => `
<span class="chips-combobox chips-combobox--fluid">
    <ul class="chips-combobox__items" aria-label="Selected sports"></ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const prefilled = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const manyChips = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Soccer</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Hockey</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Tennis</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Swimming</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Cricket</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Table Tennis</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Rugby</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Boxing</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Judo</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Fencing</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Volleyball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Golf</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const expanded = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js combobox--expanded chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const disabledState = () => `
<span class="chips-combobox" aria-disabled="true">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" disabled />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const errorState = () => `
<span class="chips-combobox chips-combobox--error">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;
