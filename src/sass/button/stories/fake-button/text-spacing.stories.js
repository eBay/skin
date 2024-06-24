export default { title: "Skin/Fake Button/Text Spacing" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="fake-btn demo-a11y-text-spacing">Fake Button</a>';

export const iconAndText = () => `
<a class="fake-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;
