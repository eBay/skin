export default { title: 'fake-btn' };

export const base = () => '<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>';

export const baseDisabled = () => '<a class="fake-btn">Fake Button</a>';

export const primary = () => '<a href="http://www.ebay/com" class="fake-btn fake-btn--primary">Fake Button</a>';

export const primaryDisabled = () => '<a class="fake-btn fake-btn--primary">Fake Button</a>';

export const primaryPartiallyDisabled = () => '<a class="fake-btn fake-btn--primary" href="http://www.ebay.com" aria-disabled="true">Fake Button</a>';

export const secondary = () => '<a href="http://www.ebay/com" class="fake-btn fake-btn--secondary">Fake Button</a>';

export const secondaryDisabled = () => '<a class="fake-btn fake-btn--secondary">Fake Button</a>';

export const secondaryPartiallyDisabled = () => '<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com" aria-disabled="true">Fake Button</a>';

export const baseInheritColorRed = () => '<a class="fake-btn" href="http://www.ebay.com" style="color: red;">Fake Button</a>';

export const baseInheritFontSize200Percent = () => '<a class="fake-btn" href="http://www.ebay.com" style="font-size: 200%">Fake Button</a>';

baseInheritFontSize200Percent.story = {
    name: 'Base Inherit Font-Size (200%)'
}

export const baseLarge = () => '<a class="fake-btn fake-btn--large" href="http://www.ebay.com">Fake Button</a>';

export const baseFluid = () => '<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>';

export const base50PercentWidth = () => '<a class="fake-btn" href="http://www.ebay.com" style="width: 50%;">Fake Button</a>';

base50PercentWidth.story = {
    name: 'Base, 50% Width'
}

export const baseFixedWidth = () => `
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`;

export const baseFixedWidthFixedHeightIntentionallyBroken = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;

baseFixedWidthFixedHeightIntentionallyBroken.story = {
    name: 'Base, Fixed Width, Fixed Height (intentionally broken)'
}

export const baseFixedWidthFixedHeightTruncated = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;

baseFixedWidthFixedHeightTruncated.story = {
    name: 'Base, Fixed Width, Fixed height, Truncated'
}

export const baseCriticalIcon = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</a>
`;

export const baseNonCriticalIcon = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconReversed = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <span>Fake Button</span>
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</a>
`;

export const baseNonCriticalIconPrimary = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconSecondary = () => `
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const largeSizeNonCriticalIcon = () => `
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconDisabled = () => `
<a class="fake-btn">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconPartiallyDisabled = () => `
<a class="fake-btn" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconPrimaryDisabled = () => `
<a class="fake-btn fake-btn--primary">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconPrimaryPartiallyDisabled = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconSecondaryDisabled = () => `
<a class="fake-btn fake-btn--secondary">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconSecondaryPartiallyDisabled = () => `
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const baseNonCriticalIconLongText = () => `
<a style="width: 200px;" class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

export const baseNonCriticalIconLongTextFixedHeightIntentionallyBroken = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

baseNonCriticalIconLongTextFixedHeightIntentionallyBroken.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height (intentionally broken)'
}

export const baseNonCriticalIconLongTextFixedHeightTruncated = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height fake-btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

baseNonCriticalIconLongTextFixedHeightTruncated.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height, Truncated'
}

export const baseNonCriticalIconLongTextFixedHeightTruncatedInheritFontSize200Percent = () => `
<a style="font-size: 200%; width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height fake-btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

baseNonCriticalIconLongTextFixedHeightTruncatedInheritFontSize200Percent.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height, Truncated, Inherit Font-Size (200%)'
}
