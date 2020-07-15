export default { title: 'Fake Button/Default/Non-critical Icon' };

export const nonCriticalIcon = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const reversed = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <span>Fake Button</span>
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</a>
`;

export const largeSize = () => `
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="fake-btn">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="fake-btn" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const longText = () => `
<a style="width: 200px;" class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

export const longTextFixedHeightIntentionallyBroken = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

longTextFixedHeightIntentionallyBroken.story = {
    name: 'Long Text, Fixed height (intentionally broken)'
}

export const longTextFixedHeightTruncated = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height fake-btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

longTextFixedHeightTruncated.story = {
    name: 'Long Text, Fixed height, Truncated'
}

export const longTextFixedHeightTruncatedInheritFontSize200Percent = () => `
<a style="font-size: 200%; width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    <span class="fake-btn__cell fake-btn__cell--fixed-height fake-btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Fake Button with a lot of text that should wrap</span>
    </span>
</a>
`;

longTextFixedHeightTruncatedInheritFontSize200Percent.story = {
    name: 'Long Text, Fixed height, Truncated, Inherit Font-Size (200%)'
}
