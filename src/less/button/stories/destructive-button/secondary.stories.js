export default { title: 'Button/Destructive/Secondary' };

export const textOnly = () =>
    '<button class="btn btn--secondary btn--destructive">Destructive Button</button>';

export const iconAndText = () => `
<button type="button" class="btn btn--secondary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button disabled class="btn btn--secondary btn--destructive">Tertiary</button
`;

export const disabledWithIcon = () => `
<button type="button" class="btn btn--secondary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn btn--secondary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
