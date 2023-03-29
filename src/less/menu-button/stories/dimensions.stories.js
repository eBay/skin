export default { title: 'Menu Button/Dimensions' };

export const fixedWidth = () => `
<span class="menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
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
