export default { title: 'Fake Button/Fake Button/Base' };

export const textOnly = () => '<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>';

export const RTL = () =>
    '<div dir="rtl"><a href="http://www.ebay/com" class="fake-btn">Fake Button</a></div>';

export const iconOnly = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const large = () => `
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>';

export const fixedWidth = () => `
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`;
