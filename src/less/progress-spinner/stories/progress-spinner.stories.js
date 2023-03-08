export default { title: 'Progress Spinner' };

export const base = () =>
    `<span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner-24" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>`;

export const RTL = () =>
    `<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner-24" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span></div>`;

export const large = () =>
    `<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
        <svg class="icon icon--spinner-30" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-30"></use>
        </svg>
    </span>`;

export const small = () =>
    `<span class="progress-spinner progress-spinner--small" aria-label="Busy" role="img">
        <svg class="icon icon--spinner-20" focusable="false" aria-hidden="true">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>`;
