export default { title: "Menu" };

export const stateless = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`;

export const badged = () => `
<span class="menu">
    <span class="menu__items" role="menu">
        <div class="menu__item menu__item--badged" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item menu__item--badged" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item menu__item--badged" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
`;

export const separator = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <hr class="menu__separator" role="separator" />
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`;
