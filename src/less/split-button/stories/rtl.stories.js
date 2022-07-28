export default { title: 'Split Button/RTL' };

export const primaryCollapsed = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--primary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--primary btn--split-end" aria-haspopup="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;

export const primaryExpanded = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--primary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--primary btn--split-end" aria-haspopup="true" aria-expanded="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;

export const secondaryCollapsed = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--secondary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--secondary btn--split-end" aria-haspopup="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;

export const secondaryExpanded = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--secondary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--secondary btn--split-end" aria-expanded="true" aria-haspopup="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;

export const tertiaryCollapsed = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--tertiary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--tertiary btn--split-end" aria-haspopup="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;

export const tertiaryExpanded = () => `
<div dir="rtl">
    <span class="split-button">
        <button class="btn btn--tertiary btn--split-start" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
            </span>
        </button>
        <span class="menu-button">
            <button class="btn btn--tertiary btn--split-end" aria-expanded="true" aria-haspopup="true" type="button">
                <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
            <div class="menu-button__menu menu-button__menu--reverse">
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
    </span>
</div>
`;
