export default { title: 'Menu Button/Menu Button' };

export const collapsed = () => `
<span class="menu-button">
    <button class="expand-btn" aria-haspopup="true" type="button">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem">
                <span>Item 10000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
</span>
`;

export const expanded = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem" tabindex="0">
                <span>Item 10000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
</span>
`;

export const expandedDisabledItem = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div aria-disabled="true" class="menu-button__item" role="menuitem">
                <span>Item 10000</span>
            </div>
            <div class="menu-button__item" role="menuitem" tabindex="0">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
</span>
`;

export const radioItems = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                <span>Item 10000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 20000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 30000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const radioItemsDisabledItem = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemradio" aria-checked="true" aria-disabled="true">
                <span>Item 10000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio" tabindex="0">
                <span>Item 20000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 30000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxItems = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemcheckbox" tabindex="0" aria-checked="true">
                <span>Item 10000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox">
                <span>Item 20000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true">
                <span>Item 30000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxItemsDisabledItem = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
                <span>Item 10000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" tabindex="0">
                <span>Item 20000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true">
                <span>Item 30000</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const longOptionText = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem" tabindex="0">
                <span>Item 1 with a very very very long string</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
</span>
`;

export const menuFixWidth = () => `
<span class="menu-button">
    <button class="expand-btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--fix-width">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem">
                <span>Menu Item 1 with a long string</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Menu Item 2</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const separator = () => `
<span class="menu-button">
    <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem" tabindex="0">
                <span>Item 10000</span>
            </div>
            <hr class="menu-button__separator" role="separator" />
            <div class="menu-button__item" role="menuitem">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
</span>
`;

export const rtl = () => `
<div dir="rtl">
    <span class="menu-button">
        <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Button</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__menu">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem" tabindex="0">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const inheritColour = () => `
<div style="color: purple">
    <span class="menu-button" style="color: purple">
        <button class="expand-btn" aria-expanded="true" aria-haspopup="true" style="background-color: #6a29b9; color: white" type="button">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Button</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__menu">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem" tabindex="0">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%">
    <span class="menu-button" style="font-size: 200%">
        <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
            <span class="expand-btn__cell">
                <span class="expand-btn__text">Button</span>
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__menu">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                    <span>Item 10000</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="menu-button__item" role="menuitemradio">
                    <span>Item 20000</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
                <div class="menu-button__item" role="menuitemradio">
                    <span>Item 30000</span>
                    <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-tick-small"></use>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</div>
`;
