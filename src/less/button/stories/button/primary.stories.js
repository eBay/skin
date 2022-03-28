export default { title: 'Button/Button/Primary' };

export const textOnly = () => '<button class="btn btn--primary">Button</button>';

export const iconOnly = () => `
<button type="button" class="btn btn--primary btn--icon-only">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const iconAndText = () => `
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const loadingDeprecated = () => `
<button class="btn btn--primary" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn btn--primary btn--busy" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;
