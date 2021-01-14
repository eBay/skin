export default { title: 'Filter/Filter/Menu Button' };

export const collapsed = () => `
<span class="filter-menu-button">
    <button type="button" class="filter-menu-button__button">
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
        </div>
        <button type="button" class="filter-menu__footer">Apply</button>
    </div>
</span>
`;

export const expanded = () => `
<span class="filter-menu-button">
    <button type="button" class="filter-menu-button__button" aria-expanded="true">
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
        </div>
        <button type="button" class="filter-menu__footer">Apply</button>
    </div>
</span>
`;

export const pressed = () => `
<span class="filter-menu-button">
    <button type="button" class="filter-menu-button__button" aria-expanded="true" aria-pressed="true">
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
        </div>
        <button type="button" class="filter-menu__footer">Apply</button>
    </div>
</span>
`;

export const disabled = () => `
<span class="filter-menu-button">
    <button aria-expaned="true" type="button" class="filter-menu-button__button" disabled>
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const overflow = () => `
<span class="filter-menu-button">
    <button type="button" class="filter-menu-button__button" aria-expanded="true">
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" tabindex="0" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 4</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 5</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 6</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 7</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 8</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 9</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 10</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 11</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 12</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 13</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 14</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 15</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 16</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 17</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 18</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 19</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 20</span>
            </div>
        </div>
        <button type="button" class="filter-menu__footer">Apply</button>
    </div>
</span>
`;

export const truncated = () => `
<span class="filter-menu-button">
    <button aria-expanded="true" type="button" class="filter-menu-button__button">
        <span class="filter-menu-button__button-cell">
            <span class="filter-menu-button__button-text">Filter Menu Button with a lot of text that will truncate</span>
            <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="filter-menu-button__menu">
        <div class="filter-menu-button__items" role="menu">
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 1</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 2</span>
            </div>
            <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                <span class="filter-menu-button__checkbox">
                    <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-unchecked"></use>
                    </svg>
                    <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                        <use xlink:href="#icon-checkbox-checked"></use>
                    </svg>
                </span>
                <span class="filter-menu-button__text">Item 3</span>
            </div>
        </div>
        <button type="button" class="filter-menu__footer">Apply</button>
    </div>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="filter-menu-button">
        <button type="button" class="filter-menu-button__button" aria-expanded="true">
            <span class="filter-menu-button__button-cell">
                <span class="filter-menu-button__button-text">Filter Menu Button</span>
                <svg class="icon icon--dropdown" focusable="false" height="12" width="12">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="filter-menu-button__menu">
            <div class="filter-menu-button__items" role="menu">
                <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                    <span class="filter-menu-button__checkbox">
                        <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-unchecked"></use>
                        </svg>
                        <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-checked"></use>
                        </svg>
                    </span>
                    <span class="filter-menu-button__text">Item 1</span>
                </div>
                <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                    <span class="filter-menu-button__checkbox">
                        <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-unchecked"></use>
                        </svg>
                        <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-checked"></use>
                        </svg>
                    </span>
                    <span class="filter-menu-button__text">Item 2</span>
                </div>
                <div class="filter-menu-button__item" role="menuitemcheckbox" aria-checked="false">
                    <span class="filter-menu-button__checkbox">
                        <svg class="icon icon--checkbox-unchecked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-unchecked"></use>
                        </svg>
                        <svg class="icon icon--checkbox-checked" focusable="false" height="18" width="18">
                            <use xlink:href="#icon-checkbox-checked"></use>
                        </svg>
                    </span>
                    <span class="filter-menu-button__text">Item 3</span>
                </div>
            </div>
            <button type="button" class="filter-menu__footer">Apply</button>
        </div>
    </span>
<div>
`;
