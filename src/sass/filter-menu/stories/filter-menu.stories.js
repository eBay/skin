export default { title: "Skin/Filter/Menu" };

export const base = () => `
<span class="filter-menu">
    <div class="filter-menu__items" role="menu">
        <div class="filter-menu__item" role="menuitemcheckbox" tabindex="0" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 1 with a long string that will wrap to another line</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 2</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 3</span>
        </div>
    </div>
</span>
`;

export const withDisabled = () => `
<span class="filter-menu">
    <div class="filter-menu__items" role="menu">
        <div class="filter-menu__item" role="menuitemcheckbox" tabindex="0" aria-checked="false" aria-disabled="true">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 1 with a long string that will wrap to another line</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 2</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 3</span>
        </div>
    </div>
</span>
`;

export const withFooterButton = () => `
<span class="filter-menu">
    <div class="filter-menu__items" role="menu">
        <div class="filter-menu__item" role="menuitemcheckbox" tabindex="0" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 1 with a long string that will wrap to another line</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 2</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 3</span>
        </div>
    </div>
    <button type="button" class="filter-menu__footer">Apply</button>
</span>
`;

export const withHeaderSearch = () => `
<span class="filter-menu">
    <div class="filter-menu__header">
        <svg aria-hidden="true" class="icon icon--16" height="24" width="24">
            <use href="#icon-search-16"></use>
        </svg>
        <input
            type="text"
            class="filter-menu__search"
            placeholder="Search"
            aria-owns="filter-menu-search-items-1"
        />
        <button type="button" class="btn" aria-label="Clear search">
            <svg aria-hidden="true" class="icon icon--20" height="28" width="28">
                <use href="#icon-clear-20"></use>
            </svg>
        </button>
    </div>
    <div class="filter-menu__items" role="menu">
        <div class="filter-menu__item" role="menuitemcheckbox" tabindex="0" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 1 with a long string that will wrap to another line</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 2</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 3</span>
        </div>
    </div>
    <button type="button" class="filter-menu__footer">Apply</button>
</span>
`;

export const textSpacing = () => `
<span class="filter-menu demo-a11y-text-spacing">
    <div class="filter-menu__header">
        <svg aria-hidden="true" class="icon icon--16" height="24" width="24">
            <use href="#icon-search-16"></use>
        </svg>
        <input
            type="text"
            class="filter-menu__search"
            placeholder="Search"
            aria-owns="filter-menu-search-items-1"
        />
        <button type="button" class="btn" aria-label="Clear search">
            <svg aria-hidden="true" class="icon icon--20" height="28" width="28">
                <use href="#icon-clear-20"></use>
            </svg>
        </button>
    </div>
    <div class="filter-menu__items" role="menu">
        <div class="filter-menu__item" role="menuitemcheckbox" tabindex="0" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 1 with a long string that will wrap to another line</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 2</span>
        </div>
        <div class="filter-menu__item" role="menuitemcheckbox" aria-checked="false">
            <span class="filter-menu__checkbox">
                <svg class="icon icon--18 icon--unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="icon icon--18 icon--checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
            <span class="filter-menu__text">Item 3</span>
        </div>
    </div>
    <button type="button" class="filter-menu__footer">Apply</button>
</span>
`;

export const formVersion = () => `
<span class="filter-menu-form">
    <form name="filter-menu-form-1">
        <div class="filter-menu-form__items">
            <label for="filter-menu-form-checkbox-item-1" class="filter-menu-form__item">
                <span class="checkbox">
                    <input aria-label="filter menu checkbox example option 1" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-1" id="filter-menu-form-checkbox-item-1" />
                    <span class="checkbox__icon" hidden>
                        <svg class="checkbox__unchecked" height="18" width="18">
                            <use href="#icon-checkbox-unchecked-18"></use>
                        </svg>
                        <svg class="checkbox__checked" height="18" width="18">
                            <use href="#icon-checkbox-checked-18"></use>
                        </svg>
                    </span>
                </span>
                <span class="filter-menu-form__text">Item 1 with a long string that will wrap to another line</span>
            </label>
            <label for="filter-menu-form-checkbox-item-2" class="filter-menu-form__item">
                <span class="checkbox">
                    <input aria-label="filter menu checkbox example option 2" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-2" id="filter-menu-form-checkbox-item-2" />
                    <span class="checkbox__icon" hidden>
                        <svg class="checkbox__unchecked" height="18" width="18">
                            <use href="#icon-checkbox-unchecked-18"></use>
                        </svg>
                        <svg class="checkbox__checked" height="18" width="18">
                            <use href="#icon-checkbox-checked-18"></use>
                        </svg>
                    </span>
                </span>
                <span for="filter-menu-form-checkbox-item-2" class="filter-menu-form__text">Item 2</span>
            </label>
            <label for="filter-menu-form-checkbox-item-3" class="filter-menu-form__item">
                <span class="checkbox">
                    <input aria-label="filter menu checkbox example option 3" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-3" id="filter-menu-form-checkbox-item-3" />
                    <span class="checkbox__icon" hidden>
                        <svg class="checkbox__unchecked" height="18" width="18">
                            <use href="#icon-checkbox-unchecked-18"></use>
                        </svg>
                        <svg class="checkbox__checked" height="18" width="18">
                            <use href="#icon-checkbox-checked-18"></use>
                        </svg>
                    </span>
                </span>
                <span for="filter-menu-form-checkbox-item-3" class="filter-menu-form__text">Item 3</span>
            </label>
        </div>
        <button type="submit" class="filter-menu-form__footer">Apply</button>
    </form>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="filter-menu-form">
        <form name="filter-menu-form-1">
            <div class="filter-menu__header">
                <svg aria-hidden="true" class="icon icon--16" height="24" width="24">
                    <use href="#icon-search-16"></use>
                </svg>
                <input
                    type="text"
                    class="filter-menu__search"
                    placeholder="Search"
                    aria-owns="filter-menu-search-items-1"
                />
                <button type="button" class="btn" aria-label="Clear search">
                    <svg aria-hidden="true" class="icon icon--20" height="28" width="28">
                        <use href="#icon-clear-20"></use>
                    </svg>
                </button>
            </div>
            <div class="filter-menu-form__items">
                <label for="filter-menu-form-checkbox-item-1" class="filter-menu-form__item">
                    <span class="checkbox">
                        <input aria-label="filter menu checkbox example option 1" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-1" id="filter-menu-form-checkbox-item-1" />
                        <span class="checkbox__icon" hidden>
                            <svg class="checkbox__unchecked" height="18" width="18">
                                <use href="#icon-checkbox-unchecked-18"></use>
                            </svg>
                            <svg class="checkbox__checked" height="18" width="18">
                                <use href="#icon-checkbox-checked-18"></use>
                            </svg>
                        </span>
                    </span>
                    <span class="filter-menu-form__text">Item 1 with a long string that will wrap to another line</span>
                </label>
                <label for="filter-menu-form-checkbox-item-2" class="filter-menu-form__item">
                    <span class="checkbox">
                        <input aria-label="filter menu checkbox example option 2" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-2" id="filter-menu-form-checkbox-item-2" />
                        <span class="checkbox__icon" hidden>
                            <svg class="checkbox__unchecked" height="18" width="18">
                                <use href="#icon-checkbox-unchecked-18"></use>
                            </svg>
                            <svg class="checkbox__checked" height="18" width="18">
                                <use href="#icon-checkbox-checked-18"></use>
                            </svg>
                        </span>
                    </span>
                    <span for="filter-menu-form-checkbox-item-2" class="filter-menu-form__text">Item 2</span>
                </label>
                <label for="filter-menu-form-checkbox-item-3" class="filter-menu-form__item">
                    <span class="checkbox">
                        <input aria-label="filter menu checkbox example option 3" class="checkbox__control" type="checkbox" name="filter-menu-form-checkbox-item-3" id="filter-menu-form-checkbox-item-3" />
                        <span class="checkbox__icon" hidden>
                            <svg class="checkbox__unchecked" height="18" width="18">
                                <use href="#icon-checkbox-unchecked-18"></use>
                            </svg>
                            <svg class="checkbox__checked" height="18" width="18">
                                <use href="#icon-checkbox-checked-18"></use>
                            </svg>
                        </span>
                    </span>
                    <span for="filter-menu-form-checkbox-item-3" class="filter-menu-form__text">Item 3</span>
                </label>
            </div>
            <button type="submit" class="filter-menu-form__footer">Apply</button>
        </form>
    </span>
</div>
`;
