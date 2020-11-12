export default { title: 'Button/Button/Base/Cascade' };

export const color = () => `
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const fontSize = () => `
<button type="button" class="btn" style="font-size: 200%;">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
