export default { title: "Skin/Menu Button/Base" };

export const collapsed = () => `
<span class="menu-button">
    <button class="btn btn--secondary" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const disabled = () => `
<span class="menu-button">
    <button class="btn btn--secondary" aria-haspopup="true" type="button" disabled>
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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
    <button class="btn btn--secondary" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const collapsedForm = () => `
<span class="menu-button">
    <button class="btn btn--form" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const expandedForm = () => `
<span class="menu-button">
    <button class="btn btn--form" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const badged = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item menu-button__item--badged" role="menuitem" tabindex="0">
                <span>Item 10000<span class="badge">2</span></span>
            </div>
            <div class="menu-button__item menu-button__item--badged" role="menuitem">
                <span>Item 20000<span class="badge">24</span></span>
            </div>
            <div class="menu-button__item menu-button__item--badged" role="menuitem">
                <span>Item 30000<span class="badge">99+</span></span>
            </div>
        </div>
    </div>
</span>
`;

export const expandedDisabledItem = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                <span>Item 10000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 20000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 30000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const radioItemsDisabledItem = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemradio" aria-checked="true" aria-disabled="true">
                <span>Item 10000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio" tabindex="0">
                <span>Item 20000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemradio">
                <span>Item 30000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxItems = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemcheckbox" tabindex="0" aria-checked="true">
                <span>Item 10000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox">
                <span>Item 20000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true">
                <span>Item 30000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxItemsDisabledItem = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
                <span>Item 10000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" tabindex="0">
                <span>Item 20000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="menu-button__item" role="menuitemcheckbox" aria-checked="true">
                <span>Item 30000</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const longOptionText = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const menuIcons = () => `
<span class="menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem">
                <svg class="icon icon--24" aria-label="Settings" role="icon">
                    <use href="#icon-settings-24"></use>
                </svg>
                <span style="margin: auto 5px;">
                    Profile
                </span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <svg class="icon icon--24" aria-label="Calendar" role="icon">
                    <use href="#icon-calendar-24"></use>
                </svg>
                <span style="margin: auto 5px;">
                    Calendar
                </span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <svg class="icon icon--24" aria-label="Profile" role="icon">
                    <use href="#icon-profile-24"></use>
                </svg>
                <span style="margin: auto 5px;">
                    Profile
                </span>
            </div>
        </div>
    </div>
</span>
`;

export const separator = () => `
<span class="menu-button">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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

export const textSpacing = () => `
<span class="menu-button demo-a11y-text-spacing">
    <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
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
