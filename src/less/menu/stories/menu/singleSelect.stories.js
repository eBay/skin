export default { title: 'Menu/Menu/Single Select' };

export const unselected = () => `
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

export const selected = () => `
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

export const RTL = () => `
<div dir="rtl">
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
</div>
`;

export const disabled = () => `
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

export const inheritColour = () => `
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

inheritColour.story = {
    name: 'Selected, Inherit Colour, Red (broken)',
};

export const inheritFontSize = () => `
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

inheritFontSize.story = {
    name: 'Selected, Inherit Font-Size (200%) (broken, spacing should not scale)',
};
