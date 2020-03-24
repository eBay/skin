export default { title: 'expand-button' };

export const collapsed = () => `
<button type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const expanded = () => `
<button type="button" class="expand-btn" aria-expanded="true">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="expand-btn" disabled>
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const primary = () => `
<button type="button" class="expand-btn expand-btn--primary">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const primaryDisabled = () => `
<button type="button" class="expand-btn expand-btn--primary" disabled>
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const secondary = () => `
<button type="button" class="expand-btn expand-btn--secondary">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const secondaryDisabled = () => `
<button type="button" class="expand-btn expand-btn--secondary" disabled>
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const large = () => `
<button type="button" class="expand-btn expand-btn--large">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const longText = () => `
<button type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <span>Button with a lot of text that should just get wider and wider and wider</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const longTextFixedWidth = () => `
<button style="width: 200px;" type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <span>Button with a lot of text that should just get taller and taller and taller</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const longTextFixedWidthFixedHeightIntentionallyBrokenOverflow = () => `
<button style="width: 200px;" type="button" class="expand-btn expand-btn--fixed-height">
    <span class="expand-btn__cell expand-btn__cell--fixed-height">
        <span>Button with a lot of text that should wrap with some truncation</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const longTextFixedWidthFixedHeightTruncated = () => `
<button style="width: 200px;" type="button" class="expand-btn expand-btn--fixed-height expand-btn--truncated">
    <span class="expand-btn__cell expand-btn__cell--fixed-height expand-btn__cell--truncated">
        <span>Button with a lot of text that should wrap with some truncation</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const rtl = () => `
<div dir="rtl">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const inheritColour = () => `
<div style="color: green">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const largeInheritFontSize = () => `
<div style="font-size: 200%">
    <button type="button" class="expand-btn expand-btn--large">
        <span class="expand-btn__cell">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const iconCollapsed = () => `
<button type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <svg aria-hidden="true" class="icon icon--settings" focusable="false" height="16" width="16">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const iconExpanded = () => `
<button type="button" class="expand-btn" aria-expanded="true">
    <span class="expand-btn__cell">
        <svg aria-hidden="true" class="icon icon--settings" focusable="false" height="16" width="16">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const iconRTL = () => `
<div dir="rtl">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <svg aria-hidden="true" class="icon icon--settings" focusable="false" height="16" width="16">
                <use xlink:href="#icon-settings"></use>
            </svg>
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;
