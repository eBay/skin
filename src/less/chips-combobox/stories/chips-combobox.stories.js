export default { title: "Skin/Chips Combobox/Base" };

export const empty = () => `
<div class="chips-combobox">
    <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-1-heading"></div>
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
`;

export const prefilled = () => `
<div class="chips-combobox">
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
    
    <span class="combobox combobox--js chips-combobox__combobox" id="nid-y2h-7">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" role="combobox" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" autocomplete="off" aria-expanded="false" aria-controls="nid-y2h-7-content">
            <svg class="icon icon--chevron-down-16" focusable="false" height="16" width="16" aria-hidden="true">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
        <div class="combobox__listbox listbox--js" id="nid-y2h-7-content">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option" id="nid-y2h-8">
                    <span>Baseball</span>
                </div>
                <div class="combobox__option" role="option" id="nid-y2h-9">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option" id="nid-y2h-10">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const expanded = () => `
<div class="chips-combobox">
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
`;

export const disabledState = () => `
<div class="chips-combobox" aria-disabled="true">
    <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-1-heading">
        <span class="chip">
            <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
        <span class="chip">
            <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
        <span class="chip">
            <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
    </div>
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
`;

export const errorState = () => `
<div class="chips-combobox chips-combobox--error">
    <div class="chips-combobox__items" role="group" aria-describedby="chips-combobox-1-heading">
        <span class="chip">
            <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
        <span class="chip">
            <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
        <span class="chip">
            <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
            <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                <svg class="icon icon--close-12" focusable="false" width="13" height="12" aria-hidden="true">
                    {% include symbol.html name="close-12" %}
                </svg>
            </button>
        </span>
    </div>
    
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
`;
