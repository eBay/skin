export default { title: "Skin/Skeleton Loader/Base" };

export const avatar = () =>
    '<div role="img" class="skeleton skeleton--avatar" aria-label="loading"></div>';

export const button = () =>
    '<div role="img" class="skeleton skeleton--btn" aria-label="loading"></div>';

export const buttonSmall = () =>
    '<div role="img" class="skeleton skeleton--btn-small" aria-label="loading"></div>';

export const buttonLarge = () =>
    '<div role="img" class="skeleton skeleton--btn-large" aria-label="loading"></div>';

export const textSmall = () =>
    '<div role="img" class="skeleton skeleton--text-small" aria-label="loading"></div>';

export const textLarge = () =>
    '<div role="img" class="skeleton skeleton--text-large" aria-label="loading"></div>';

export const textSmallMultiLine = () =>
    '<div role="img" class="skeleton skeleton--text-small skeleton--text-multiline" aria-label="loading"></div>';

export const textLargeMultiLine = () =>
    '<div role="img" class="skeleton skeleton--text-large skeleton--text-multiline" aria-label="loading"></div>';

export const form = () =>
    '<div role="img" class="skeleton skeleton--form" aria-label="loading"></div>';

export const image = () =>
    '<div role="img" class="skeleton skeleton--image" aria-label="loading"></div>';

export const tile = () =>
    `<div class="skeleton--tile" role="img" aria-label="loading">
        <div class="skeleton__image-container">
        <div class="skeleton skeleton--image"></div>
        </div>
        <div class="skeleton skeleton--text-small skeleton--text-multiline"></div>
    </div>`;
