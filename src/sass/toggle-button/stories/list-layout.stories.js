export default { title: "Skin/Toggle Button/List Layout" };

export const titleOnly = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Simple Text Button</span>
    </span>
</button>
`;

export const titleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Text Title</span>
        <span class="toggle-button__subtitle">Text Subtitle</span>
    </span>
</button>
`;

export const titleMultilineSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Multiline Text Title</span>
        <span class="toggle-button__subtitle">
            <p>Text Subtitle Line 1</p>
            <p>Text Subtitle Line 2 (max)</p>
        </span>
    </span>
</button>
`;

export const iconTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__icon">
        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
            <use href="#icon-truck-16"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Icon Button Title</span>
        <span class="toggle-button__subtitle">Icon Button Subtitle</span>
    </span>
</button>
`;

export const longTitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false" style="width: 168px;">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Long Title for Toggle Button</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const profileImageTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const landscapeImageTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img alt="" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const squareImageTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const disabledImage = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false" disabled>
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img alt="" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const disabledIcon = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false" disabled>
    <span class="toggle-button__icon">
        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
            <use href="#icon-truck-16"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Icon Button Title</span>
        <span class="toggle-button__subtitle">Icon Button Subtitle</span>
    </span>
</button>
`;

export const disabledIconColored = () => `
<button type="button" class="toggle-button toggle-button--list-layout" aria-pressed="false" disabled>
    <span class="toggle-button__icon">
        <svg aria-hidden="true" class="icon icon--32-colored" height="16" width="16">
            <use href="#icon-mastercard-32-colored"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Icon Button Title</span>
        <span class="toggle-button__subtitle">Icon Button Subtitle</span>
    </span>
</button>
`;

export const textSpacing = () => `
<button type="button" class="toggle-button toggle-button--list-layout demo-a11y-text-spacing" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;
