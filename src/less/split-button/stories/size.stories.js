export default { title: 'Split Button/Size' };
export const longTextCollapsed = () => `
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-dropdown"></use>
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

export const longTextExpanded = () => `
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--dropdown" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-dropdown"></use>
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
