export default { title: 'Button/Secondary' };

export const textOnly = () => '<button class="btn btn--secondary">Button</button>';

export const iconAndText = () => `
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn btn--secondary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn btn--secondary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
