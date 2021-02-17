export default { title: 'Progress Spinner/Progress Spinner' };

export const base = () =>
    '<span class="progress-spinner" aria-label="Busy animation" role="img"></span>';

export const RTL = () =>
    '<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img"></span></div>';

export const large = () =>
    '<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img"></span>';
