export default { title: 'Button/Button/Deprecated' };

export const loadingBase = () => `
<button class="btn" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const loadingBaseLarge = () => `
<button class="btn btn--large" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner progress-spinner--large">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const loadingPrimary = () => `
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

export const loadingSecondary = () => `
<button class="btn btn--secondary" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const loadingTertiary = () => `
<button class="btn btn--tertiary" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const loadingDestructivePrimary = () => `
<button class="btn btn--primary btn--destructive" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;

export const loadingDestructiveSecondary = () => `
<button class="btn btn--secondary btn--destructive" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;

export const loadingDestructiveTertiary = () => `
<button class="btn btn--tertiary btn--destructive" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
