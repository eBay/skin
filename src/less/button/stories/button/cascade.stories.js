export default { title: 'Button/Cascade' };

export const color = () => `
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--settings-24" width="16" height="16"><use href="#icon-settings-24"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const fontSize = () => `
<div style="font-size: 200%;">
    <button type="button" class="btn">
        <span class="btn__cell">
            <svg class="icon icon--settings-24" width="16" height="16"><use href="#icon-settings-24"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <button type="button" class="btn btn--primary">
        <span class="btn__cell">
            <svg class="icon icon--close-16" width="16" height="16" style="margin-right: 0px;"><use href="#icon-close-16"></use></svg>
            <span style="margin-right: 8px;">Button</span>
        </span>
    </button>
</div>
`;
