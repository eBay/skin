export default { title: "Skin/Skeleton/Base" };

export const avatar = () =>
    '<div role="img" class="skeleton-avatar" aria-label="loading"></div>';

export const button = () =>
    '<div role="img" class="skeleton-button" aria-label="loading"></div>';

export const buttonSmall = () =>
    '<div role="img" class="skeleton-button skeleton-button--small" aria-label="loading"></div>';

export const buttonLarge = () =>
    '<div role="img" class="skeleton-button skeleton-button--large" aria-label="loading"></div>';

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
    `<div role="img" class="skeleton-image" aria-label="loading" style="height: 50px; width: 50px;"></div>`;

export const image = () =>
    `<div role="img" class="skeleton-image" aria-label="loading" style="height: 250px; width: 250px;"></div>`;

export const tile = () =>
    `<div class="skeleton-tile" role="img" aria-label="loading" style="width: 225px;">
        <div class="skeleton-image"></div>
        <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
    </div>`;

export const rtl = () =>
    `<div class="skeleton-tile" role="img" aria-label="loading" style="width: 225px;" dir="rtl">
        <div class="skeleton-image"></div>
        <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
    </div>`;
