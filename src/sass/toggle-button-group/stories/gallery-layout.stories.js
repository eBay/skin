export default { title: "Skin/Toggle Button Group/Gallery Layout" };

export const usingIMGTag = () => `
<div class="toggle-button-group toggle-button-group--gallery-layout">
    <ul aria-label="Toggle buttons">
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image">
                        <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">
                        <span>HTML Profile Image</span>
                    </span>
                    <span class="toggle-button__subtitle">Using Cover</span>
                </span>
            </button>
        </li>
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image">
                        <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">
                        <span>HTML Landscape Image</span>
                    </span>
                    <span class="toggle-button__subtitle">Using Cover</span>
                </span>
            </button>
        </li>
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image">
                        <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg" alt="">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">
                        <span>HTML Square Image</span>
                    </span>
                    <span class="toggle-button__subtitle">Using Cover</span>
                </span>
            </button>
        </li>
    </ul>
</div>
`;

export const usingCSSImage = () => `
<div class="toggle-button-group toggle-button-group--gallery-layout">
    <ul aria-label="Toggle buttons">
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; background-position: center 15%;">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">CSS Profile Image</span>
                    <span class="toggle-button__subtitle">Using Contain</span>
                </span>
            </button>
        </li>
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">CSS Profile Image</span>
                    <span class="toggle-button__subtitle">Using Cover</span>
                </span>
            </button>
        </li>
        <li>
            <button type="button" class="toggle-button" aria-pressed="false">
                <span class="toggle-button__image-container">
                    <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 30%;">
                    </span>
                </span>
                <span class="toggle-button__content">
                    <span class="toggle-button__title">CSS Square Image</span>
                    <span class="toggle-button__subtitle">Using Cover</span>
                </span>
            </button>
        </li>
    </ul>
</div>
`;

export const _320container = () => `
<div style="width: 320px; border: 1px dashed orange;">
    <div class="toggle-button-group toggle-button-group--gallery-layout">
        <ul aria-label="Buttons">
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 30%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

export const _512container = () => `
<div style="width: 512px; border: 1px dashed orange;">
    <div class="toggle-button-group toggle-button-group--gallery-layout">
        <ul aria-label="Buttons">
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 30%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

export const _768container = () => `
<div style="width: 768px; border: 1px dashed orange;">
    <div class="toggle-button-group toggle-button-group--gallery-layout">
        <ul aria-label="Buttons">
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 30%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

export const _1280container = () => `
<div style="width: 1280px; border: 1px dashed orange;">
    <div class="toggle-button-group toggle-button-group--gallery-layout">
        <ul aria-label="Buttons">
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false">
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 30%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="toggle-button" aria-pressed="false"> 
                    <span class="toggle-button__image-container">
                        <span class="toggle-button__image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg); background-repeat: no-repeat; background-position: center; background-size: cover; background-position: center 15%;">
                        </span>
                    </span>
                    <span class="toggle-button__content">
                        <span class="toggle-button__title">Gallery Layout Title</span>
                        <span class="toggle-button__subtitle">Subtitle</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;
