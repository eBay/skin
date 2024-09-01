export default { title: "Skin/Card/Default" };

export const base = () => `
    <div class="card">
        <div class="card__content">
            <svg class="image-placeholder" height="62" width="62" aria-hidden="true">
                <use href="#image-placeholder"></use>
            </svg>
        </div>
    </div>
`;

export const uploading = () => `
    <div class="card">
        <div class="card__content">
            <progress class="progress-bar" value=60 max=100></progress>
        </div>
        <button class="icon-btn card__action" type="button" aria-label="Cancel upload">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploadedSquareImage = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploadedPortraitImage = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploadedLandscapeImage = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploadedVideo = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
        <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
            <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                <use href="#icon-play-16"></use>
            </svg>
            <span class="card__label-text">0:21</span>
        </button>
    </div>
`;

export const uploadedDocumentWithTitle = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>        
    </div>
    <div class="card__details">
        <span class="card__details-title">certificate.pdf</span>
    </div>
`;

export const uploadedDocumentWithTitleAndDescription = () => `
    <div class="card">
        <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png)"></div>
        <button class="icon-btn card__action" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
    <div class="card__details">
        <span class="card__details-title">certificate.pdf</span>
        <span class="card__details-subtitle">English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
    </div>
`;

export const uploadedWithOverflow = () => `
    <div class="card">
        <div class="card__content card__content--image card__content--overflow" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
        <button class="icon-btn card__overflow-action" type="button" aria-label="Open menu">
            <span>+15</span>
        </button>
    </div>
`;
