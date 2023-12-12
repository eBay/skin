export default { title: "Skin/Chips Combobox/Base" };

export const simple = () => `
<div class="chips-combobox">
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-1-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
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
<div class="chips-combobox chips-combobox--expanded">
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-3-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox combobox--expanded">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox">
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
<div class="chips-combobox">
    <label id="chips-combobox-3-heading" for="chips-combobox-3-input">Sports</label>
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-3-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox">
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
<div class="chips-combobox">
    <label id="chips-combobox-3-heading" for="chips-combobox-3-input">Sports</label>
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-3-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox">
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
    <div class="chips-combobox__helper-text">Helper text goes here.</div>
</div>
`;

export const disabledState = () => `
<div class="chips-combobox" aria-disabled="true">
    <label id="chips-combobox-3-heading" for="chips-combobox-3-input">Sports</label>
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-3-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3" disabled>
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox">
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
    <div class="chips-combobox__helper-text">Helper text goes here.</div>
</div>
`;

export const errorState = () => `
<div class="chips-combobox chips-combobox--error-state">
    <label id="chips-combobox-3-heading" for="chips-combobox-3-input">Sports</label>
    <div class="chips-combobox__container">
        <div class="chips-combobox__content">
            <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-3-heading">
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
            <button type="button" class="icon-btn icon-btn--small chips-combobox__list-toggle" aria-label="Toggle options list" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3">
                <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                    <use href="#icon-chevron-down-16"></use>
                </svg>
            </button>    
        </div>
        <span class="combobox combobox--js chips-combobox__combobox">
            <span class="combobox__control chips-combobox_combobox__control">
                <input id="chips-combobox-3-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" />
            </span>
            <div class="combobox__listbox">
                <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox">
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
    <div class="chips-combobox__helper-text">Helper text goes here.</div>
</div>
`;
