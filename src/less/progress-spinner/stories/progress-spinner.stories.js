export default { title: 'Progress Spinner' };

export const base = () =>
    `<span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
            <use href="#icon-spinner"></use>
        </svg>
    </span>`;

export const RTL = () =>
    `<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
            <use href="#icon-spinner"></use>
        </svg>
    </span></div>`;

export const large = () =>
    `<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
        <svg class="icon icon--spinner-large" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-large"></use>
        </svg>
    </span>`;

export const small = () =>
    `<span class="progress-spinner progress-spinner--small" aria-label="Busy" role="img">
        <svg class="icon icon--spinner-small" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-small"></use>
        </svg>
    </span>`;
