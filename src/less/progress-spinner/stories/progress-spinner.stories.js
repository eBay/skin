export default { title: 'Spinner/Spinner' };

export const base = () => '<span class="spinner" aria-label="Busy animation" role="img"></span>';

export const RTL = () =>
    '<div dir="rtl"><span class="spinner" aria-label="Busy animation" role="img"></span></div>';

export const large = () =>
    '<span class="spinner spinner--large" aria-label="Busy" role="img"></span>';
