export default { title: 'Progress Spinner/Progress Spinner' };

export const base = () =>
    `<span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>`;

export const RTL = () =>
    `<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span></div>`;

export const large = () =>
    `<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
        <svg class="icon icon--spinner-large" focusable="false" aria-hidden="true">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>`;

export const baseEmpty = () =>
    '<span class="progress-spinner" aria-label="Busy animation" role="img"></span>';

export const largeEmpty = () =>
    '<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img"></span>';
