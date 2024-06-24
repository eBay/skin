export default { title: "Skin/Icon Button/Buttons" };

export const base = () => `
<button class="icon-btn icon-btn--large" type="button" aria-label="Save">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn" type="button" aria-label="Save">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small" type="button" aria-label="Save">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const baseSpinner = () => `
<button class="icon-btn icon-btn--large" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
<button class="icon-btn" type="button" aria-label="Save">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--small" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
`;

export const baseDisabled = () => `
<button class="icon-btn icon-btn--large" type="button" aria-label="Save" disabled>
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn" type="button" aria-label="Save" disabled>
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small" type="button" aria-label="Save" disabled>
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const primary = () => `
<button class="icon-btn icon-btn--large icon-btn--primary" type="button" aria-label="Save">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--primary" type="button" aria-label="Save">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--primary" type="button" aria-label="Save">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const primarySpinner = () => `
<button class="icon-btn icon-btn--large icon-btn--primary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--primary" type="button" aria-label="Save">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--small icon-btn--primary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
`;

export const primaryDisabled = () => `
<button class="icon-btn icon-btn--large icon-btn--primary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--primary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--primary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const secondary = () => `
<button class="icon-btn icon-btn--large icon-btn--secondary" type="button" aria-label="Save">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--secondary" type="button" aria-label="Save">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--secondary" type="button" aria-label="Save">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const secondarySpinner = () => `
<button class="icon-btn icon-btn--large icon-btn--secondary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--secondary" type="button" aria-label="Save">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--small icon-btn--secondary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
`;

export const secondaryDisabled = () => `
<button class="icon-btn icon-btn--large icon-btn--secondary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--secondary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--secondary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const tertiary = () => `
<button class="icon-btn icon-btn--large icon-btn--tertiary" type="button" aria-label="Save">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--tertiary" type="button" aria-label="Save">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--tertiary" type="button" aria-label="Save">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;

export const tertiarySpinner = () => `
<button class="icon-btn icon-btn--large icon-btn--tertiary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--tertiary" type="button" aria-label="Save">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
<button class="icon-btn icon-btn--small icon-btn--tertiary" type="button" aria-label="Save">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</button>
`;

export const tertiaryDisabled = () => `
<button class="icon-btn icon-btn--large icon-btn--tertiary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-24"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--tertiary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-20"></use>
    </svg>
</button>
<button class="icon-btn icon-btn--small icon-btn--tertiary" type="button" aria-label="Save" disabled>
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-save-16"></use>
    </svg>
</button>
`;
