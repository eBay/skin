export default { title: "Skin/Toggle Button/Gallery Layout" };

export const iconTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
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

export const longTitle = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false" style="width: 168px;">
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

export const profileImageTitle = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image">
            <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
    </span>
</button>
`;

export const profileImageTitleSubtitle = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
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
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
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
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
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

export const profileCSSImageContainBackground = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image" style="background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-position-y: 20%; background-size: contain;">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const profileCSSImageCoverBackground = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false">
    <span class="toggle-button__image-container">
        <span class="toggle-button__image" style="background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-position-y: 20%; background-size: cover;">
        </span>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Image Button Title</span>
        <span class="toggle-button__subtitle">Image Button Subtitle</span>
    </span>
</button>
`;

export const disabledImage = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false" disabled>
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

export const disabledIcon = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false" disabled>
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

export const disabledIconColored = () => `
<button type="button" class="toggle-button toggle-button--gallery-layout" aria-pressed="false" disabled>
    <span class="toggle-button__icon">
        <svg aria-hidden="true" class="icon icon--mastercard-32-colored" focusable="false" height="64" width="64">
            <use href="#icon-mastercard-32-colored"></use>
        </svg>
    </span>
    <span class="toggle-button__content">
        <span class="toggle-button__title">Icon Button Title</span>
        <span class="toggle-button__subtitle">Icon Button Subtitle</span>
    </span>
</button>
`;
