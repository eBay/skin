export default { title: 'Fake Button/Base/Cascade' };

export const color = () => `
<a class="fake-btn" href="http://www.ebay.com" style="color: red;">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const fontSize = () => `
<a class="fake-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="fake-btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;
