export default { title: 'btn' };

export const base = () => '<button class="btn">Button</button>';

export const baseDisabled = () => '<button class="btn" disabled>Button</button>';

export const primary = () => '<button class="btn btn--primary">Button</button>';

export const primaryDisabled = () => '<button class="btn btn--primary" disabled>Button</button>';

export const primaryPartiallyDisabled = () => '<button class="btn btn--primary" aria-disabled="true">Button</button>';

export const secondary = () => '<button class="btn btn--secondary">Button</button>';

export const secondaryDisabled = () => '<button class="btn btn--secondary" disabled>Button</button>';

export const secondaryPartiallyDisabled = () => '<button class="btn btn--secondary" aria-disabled="true">Button</button>';

export const baseInheritColorRed = () => '<button class="btn" style="color: red;">Button</button>';

export const baseInheritFontSize200Percent = () => '<button class="btn" style="font-size: 200%">Button</button>';

baseInheritFontSize200Percent.story = {
    name: 'Base Inherit Font-Size (200%)'
}

export const baseFormSubmit = () => '<button type="submit" class="btn">Submit</button>';

export const baseFormReset = () => '<button type="reset" class="btn">Reset</button>';

export const baseLarge = () => '<button class="btn btn--large">Button</button>';

export const baseFluid = () => '<button class="btn btn--fluid">Button</button>';

export const base50PercentWidth = () => '<button class="btn" style="width: 50%;">Button</button>';

base50PercentWidth.story = {
    name: 'Base, 50% Width'
}

export const baseFixedWidth = () => `
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`;

export const baseFixedWidthFixedHeightIntentionallyBroken = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`;

baseFixedWidthFixedHeightIntentionallyBroken.story = {
    name: 'Base, Fixed Width, Fixed Height (intentionally broken)'
}

export const baseFixedWidthFixedHeightTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`;

baseFixedWidthFixedHeightTruncated.story = {
    name: 'Base, Fixed Width, Fixed height, Truncated'
}

export const baseCriticalIcon = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const baseNonCriticalIcon = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconReversed = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <span>Button</span>
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const baseNonCriticalIconPrimary = () => `
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconSecondary = () => `
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const largeSizeNonCriticalIcon = () => `
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconDisabled = () => `
<button type="button" class="btn" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconPartiallyDisabled = () => `
<button type="button" class="btn" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconPrimaryDisabled = () => `
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconPrimaryPartiallyDisabled = () => `
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconSecondaryDisabled = () => `
<button type="button" class="btn btn--secondary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconSecondaryPartiallyDisabled = () => `
<button type="button" class="btn btn--secondary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const baseNonCriticalIconLongText = () => `
<button style="width: 200px;" type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

export const baseNonCriticalIconLongTextFixedHeightIntentionallyBroken = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    <span class="btn__cell btn__cell--fixed-height">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

baseNonCriticalIconLongTextFixedHeightIntentionallyBroken.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height (intentionally broken)'
}

export const baseNonCriticalIconLongTextFixedHeightTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    <span class="btn__cell btn__cell--fixed-height btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

baseNonCriticalIconLongTextFixedHeightTruncated.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height, Truncated'
}

export const baseNonCriticalIconLongTextFixedHeightTruncatedInheritFontSize200Percent = () => `
<button style="font-size: 200%; width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    <span class="btn__cell btn__cell--fixed-height btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

baseNonCriticalIconLongTextFixedHeightTruncatedInheritFontSize200Percent.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height, Truncated, Inherit Font-Size (200%)'
}
