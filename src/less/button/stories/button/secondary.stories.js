export default { title: 'Button/Secondary' };

export const base = () => '<button class="btn btn--secondary">Button</button>';

export const disabled = () => '<button class="btn btn--secondary" disabled>Button</button>';

export const partiallyDisabled = () => '<button class="btn btn--secondary" aria-disabled="true">Button</button>';

export const nonCriticalIcon = () => `
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const nonCriticalIconDisabled = () => `
<button type="button" class="btn btn--secondary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const nonCriticalIconPartiallyDisabled = () => `
<button type="button" class="btn btn--secondary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
