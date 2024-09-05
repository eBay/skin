export default { title: "Skin/File Preview Card" };

export const base = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content">
                <svg class="image-placeholder" height="62" width="62" aria-hidden="true">
                    <use href="#image-placeholder"></use>
                </svg>
            </div>
        </div>
    </div>
`;

export const uploading = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content">
                <progress class="progress-bar" value=60 max=100></progress>
            </div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Cancel upload">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const uploadingRTL = () => `
    <div class="file-preview-card" dir="rtl">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content">
                <progress class="progress-bar" value=60 max=100></progress>
            </div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Cancel upload">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const uploadedSquareImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const uploadedPortraitImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const uploadedLandscapeImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const uploadedVideo = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <button class="icon-btn file-preview-card__label" type="button" aria-label="Cancel upload">
                <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                <span class="file-preview-card__label-text">0:21</span>
            </button>
        </div>
    </div>
`;

export const uploadedVideoRTL = () => `
    <div class="file-preview-card" dir="rtl">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <button class="icon-btn file-preview-card__label" type="button" aria-label="Cancel upload">
                <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                <span class="file-preview-card__label-text">0:21</span>
            </button>
        </div>
    </div>
`;

export const uploadedDocumentWithTitle = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>        
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
        </div>
    </div>
`;

export const uploadedDocumentWithTitleAndDescription = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
            <span class="file-preview-card__details-subtitle">English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </div>
`;

export const uploadedDocumentWithTitleAndDescriptionRTL = () => `
    <div class="file-preview-card" dir="rtl">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png)"></div>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
            <span class="file-preview-card__details-subtitle">English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </div>
`;

export const uploadedWithOverflow = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image file-preview-card__content--overflow" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__overflow-action" type="button" aria-label="Open menu">
                <span>+15</span>
            </button>
        </div>
    </div>
`;

export const uploadedWithOverflowRTL = () => `
    <div class="file-preview-card" dir="rtl">
        <div class="file-preview-card__container">
            <div class="file-preview-card__content file-preview-card__content--image file-preview-card__content--overflow" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
            <button class="icon-btn file-preview-card__overflow-action" type="button" aria-label="Open menu">
                <span>+15</span>
            </button>
        </div>
    </div>
`;
