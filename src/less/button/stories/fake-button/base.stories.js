export default { title: "Fake Button/Base" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>';

export const iconAndText = () => `
<a class="fake-btn" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings-24" width="16" height="16"><use href="#icon-settings-24"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="fake-btn">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings-24" width="16" height="16"><use href="#icon-settings-24"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;
