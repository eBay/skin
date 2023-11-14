export default { title: "Skin/Skeleton/Base" };

export const avatar = () =>
    '<div role="img" class="skeleton-avatar" aria-label="loading"></div>';

export const button = () =>
    '<div role="img" class="skeleton-btn" aria-label="loading"></div>';

export const buttonSmall = () =>
    '<div role="img" class="skeleton-btn skeleton-btn--small" aria-label="loading"></div>';

export const buttonLarge = () =>
    '<div role="img" class="skeleton-btn skeleton-btn--large" aria-label="loading"></div>';

export const textSmall = () =>
    '<div role="img" class="skeleton-text skeleton-text--small" aria-label="loading"></div>';

export const textLarge = () =>
    '<div role="img" class="skeleton-text skeleton-text--large" aria-label="loading"></div>';

export const textSmallMultiLine = () =>
    '<div role="img" class="skeleton-text skeleton-text--small skeleton-text--multiline" aria-label="loading"></div>';

export const textLargeMultiLine = () =>
    '<div role="img" class="skeleton-text skeleton-text--large skeleton-text--multiline" aria-label="loading"></div>';

export const form = () =>
    '<div role="img" class="skeleton-form" aria-label="loading"></div>';

export const smallImage = () =>
    `<div role="img" class="skeleton" style="height: 50px; width: 50px;">
        <div class="skeleton-image" aria-label="loading"></div>
    </div>`;

export const image = () =>
    `<div role="img" class="skeleton" style="height: 250px; width: 250px;">
        <div class="skeleton-image" aria-label="loading"></div>
    </div>`;

export const tile = () =>
    `<div class="skeleton" role="img" aria-label="loading" style="width: 225px;">
        <div class="skeleton__tile">
        <div class="skeleton-image"></div>
        <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
        </div>
    </div>`;

export const rtl = () =>
    `<div class="skeleton" role="img" aria-label="loading" style="width: 225px;" dir="rtl">
        <div class="skeleton__tile">
        <div class="skeleton-image"></div>
        <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
        </div>
    </div>`;
