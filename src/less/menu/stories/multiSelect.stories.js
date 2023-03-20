export default { title: 'Menu/Multi Select' };

export const unselected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const selected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const disabled = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;
