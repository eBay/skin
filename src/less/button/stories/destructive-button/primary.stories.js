export default { title: 'Button/Button/Destructive Button/Primary' };

export const textOnly = () =>
    '<button class="btn btn--primary btn--destructive">Destructive Button</button>';

export const iconOnly = () => `
<button type="button" class="btn btn--primary btn--destructive btn--icon-only">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const iconAndText = () => `
<button type="button" class="btn btn--primary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button disabled class="btn btn--primary btn--destructive">Tertiary</button
`;

export const disabledWithIcon = () => `
<button type="button" class="btn btn--primary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const loading = () => `
<button class="btn btn--primary btn--destructive" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="progress-spinner" aria-label="Busy" role="img">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
