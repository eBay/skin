export default { title: 'Button/Primary' };

export const base = () => '<button class="btn btn--primary">Button</button>';

export const disabled = () => '<button class="btn btn--primary" disabled>Button</button>';

export const partiallyDisabled = () => '<button class="btn btn--primary" aria-disabled="true">Button</button>';

export const nonCriticalIcon = () => `
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const nonCriticalIconDisabled = () => `
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const nonCriticalIconPartiallyDisabled = () => `
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
