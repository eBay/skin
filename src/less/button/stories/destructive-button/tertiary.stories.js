export default { title: 'Button/Button/Destructive Button/Tertiary' };

export const tertiary = () => `
<button class="btn btn--tertiary btn--destructive">Tertiary</button
`;

export const textOnly = () => '<button class="btn btn--tertiary btn--destructive">Button</button>';

export const iconOnly = () => `
<button type="button" class="btn btn--tertiary btn--destructive btn--icon-only">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const iconAndText = () => `
<button type="button" class="btn btn--tertiary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button disabled class="btn btn--tertiary btn--destructive">Tertiary</button
`;

export const disabledWithIcon = () => `
<button type="button" class="btn btn--tertiary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn btn--tertiary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
