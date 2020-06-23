export default { title: 'menu' };

export const stateless = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`;

export const singleSelect = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="false" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectSelected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectDisabled = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const multiSelectSelected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const multiSelectDisabled = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectInheritColour = () => `
<span class="menu" style="color: red">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectInheritFontSize = () => `
<h2 style="color: red">Broken, spacing should not scale</h2>
<span class="menu" style="font-size: 200%">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
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
