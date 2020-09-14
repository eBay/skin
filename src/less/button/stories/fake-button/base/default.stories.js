export default { title: 'Fake Button/Base' };

export const button = () => '<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>';

export const disabled = () => '<a class="fake-btn">Fake Button</a>';

export const inheritColorRed = () => '<a class="fake-btn" href="http://www.ebay.com" style="color: red;">Fake Button</a>';

export const inheritFontSize200Percent = () => '<a class="fake-btn" href="http://www.ebay.com" style="font-size: 200%">Fake Button</a>';

inheritFontSize200Percent.story = {
    name: 'Inherit Font-Size (200%)'
}

export const large = () => '<a class="fake-btn fake-btn--large" href="http://www.ebay.com">Fake Button</a>';

export const fluid = () => '<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>';

export const fiftyPercentWidth = () => '<a class="fake-btn" href="http://www.ebay.com" style="width: 50%;">Fake Button</a>';

fiftyPercentWidth.story = {
    name: '50% Width'
}

export const fixedWidth = () => `
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`;

export const fixedWidthFixedHeightIntentionallyBroken = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;

fixedWidthFixedHeightIntentionallyBroken.story = {
    name: 'Base, Fixed Width, Fixed Height (intentionally broken)'
}

export const fixedWidthFixedHeightTruncated = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;

fixedWidthFixedHeightTruncated.story = {
    name: 'Fixed Width, Fixed height, Truncated'
}

export const criticalIcon = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</a>
`;
