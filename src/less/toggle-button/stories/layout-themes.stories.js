export default { title: "Toggle Button/Layout Themes" };

export const minimalView = () => `
<button type="button" class="toggle-button toggle-button-theme-minimal" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`;

export const listView = () => `
<button type="button" class="toggle-button" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Text Title</span>
        <span class="toggle-button__subtitle">Text Subtitle</span>
    </span>
</button>
`;

export const galleryView = () => `
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
