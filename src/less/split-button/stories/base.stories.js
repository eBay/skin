export default { title: 'Split Button/Base' };
export const primaryCollapsed = () => `
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
`;

export const primaryExpanded = () => `
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
`;

export const secondaryCollapsed = () => `
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
`;

export const secondaryExpanded = () => `
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
`;

export const tertiaryCollapsed = () => `
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
`;

export const tertiaryExpanded = () => `
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
`;

export const fakePrimaryCollapsed = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--primary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;

export const fakePrimaryExpanded = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--primary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;

export const fakeSecondaryCollapsed = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--secondary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;

export const fakeSecondaryExpanded = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--secondary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;

export const fakeTertiaryCollapsed = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--tertiary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;

export const fakeTertiaryExpanded = () => `
<span class="split-button">
    <a class="fake-btn fake-btn--tertiary fake-btn--split-start" href="https://ebay.com">
        Link
    </a>
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
`;
