export default { title: 'Button/Destructive/Primary' };

export const textOnly = () =>
    '<button class="btn btn--primary btn--destructive">Destructive Button</button>';

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

export const busy = () => `
<button class="btn btn--primary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
