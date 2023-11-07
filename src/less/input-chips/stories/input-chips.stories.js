export default { title: "Skin/Input Chips/Base" };

export const simple = () => `
<div class="input-chips">
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-1-heading">
                <span class="chip">
                    <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-1">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-1" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
</div>
`;

export const expanded = () => `
<div class="input-chips input-chips--expanded">
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-3-heading">
                <span class="chip">
                    <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox combobox--expanded">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-3" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
</div>
`;

export const withLabel = () => `
<div class="input-chips">
    <label id="input-chips-3-heading" for="input-chips-3-input">Sports</label>
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-3-heading">
                <span class="chip">
                    <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-3" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
</div>
`;

export const withHelperText = () => `
<div class="input-chips">
    <label id="input-chips-3-heading" for="input-chips-3-input">Sports</label>
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-3-heading">
                <span class="chip">
                    <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-3" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
    <div class="input-chips__helper-text">Helper text goes here.</div>
</div>
`;

export const disabledState = () => `
<div class="input-chips" aria-disabled="true">
    <label id="input-chips-3-heading" for="input-chips-3-input">Sports</label>
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-3-heading">
                <span class="chip">
                    <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-3" disabled>
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-3" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
    <div class="input-chips__helper-text">Helper text goes here.</div>
</div>
`;

export const errorState = () => `
<div class="input-chips input-chips--error-state">
    <label id="input-chips-3-heading" for="input-chips-3-input">Sports</label>
    <div class="input-chips__container">
        <div class="input-chips__content">
            <div class="input-chips_items" role="group" aria-describedby="input-chips-3-heading">
                <span class="chip">
                    <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
                <span class="chip">
                    <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                        <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </div>
            <button type="button" class="icon-btn icon-btn--small input-chips_list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-input-chips-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js input-chips__combobox">
            <span class="combobox__control input-chips_combobox__control">
                <input id="input-chips-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-input-chips-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-input-chips-3" class="combobox__options" role="listbox">
                    <div class="combobox__option" role="option">
                        <span>Baseball</span>
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
    </div>
    <div class="input-chips__helper-text">Helper text goes here.</div>
</div>
`;
