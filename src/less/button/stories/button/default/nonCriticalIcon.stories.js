export default { title: 'Button/Default/Non-critical Icon' };

export const nonCriticalIcon = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const reversed = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <span>Button</span>
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const largeSize = () => `
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const longText = () => `
<button style="width: 200px;" type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

export const longTextFixedHeightIntentionallyBroken = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    <span class="btn__cell btn__cell--fixed-height">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

longTextFixedHeightIntentionallyBroken.story = {
    name: 'Long Text, Fixed height (intentionally broken)'
}

export const longTextFixedHeightTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    <span class="btn__cell btn__cell--fixed-height btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

longTextFixedHeightTruncated.story = {
    name: 'Long Text, Fixed height, Truncated'
}

export const longTextFixedHeightTruncatedInheritFontSize200Percent = () => `
<button style="font-size: 200%; width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    <span class="btn__cell btn__cell--fixed-height btn__cell--truncated">
        <svg class="icon icon--settings" focusable="false">
            <use xlink:href="#icon-settings"></use>
        </svg>
        <span>Button with a lot of text that should wrap</span>
    </span>
</button>
`;

longTextFixedHeightTruncatedInheritFontSize200Percent.story = {
    name: 'Base, Non-critical icon, Long Text, Fixed height, Truncated, Inherit Font-Size (200%)'
}
