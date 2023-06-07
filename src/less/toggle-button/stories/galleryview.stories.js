export default { title: "Skin/Toggle Button/Gallery View Variations" };

export const iconTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button-theme-gallery" aria-pressed="false">
    <span class="toggle-button__icon">
        <svg aria-hidden="true" class="icon icon--on-the-way-16" focusable="false" height="64" width="64">
            <use href="#icon-on-the-way-16"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Icon Button Title</span>
        <span class="toggle-button__subtitle">Icon Button Subtitle</span>
    </span>
</button>
`;

export const imageTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button-theme-gallery" aria-pressed="false">
    <span class="toggle-button__image">
        <svg aria-hidden="true" class="icon icon--image-64" focusable="false" height="64" width="64">
            <use href="#icon-image-64"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Text Title</span>
        <span class="toggle-button__subtitle">Text Subtitle</span>
    </span>
</button>
`;
