export default { title: 'Menu' };

export const stateless = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
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
