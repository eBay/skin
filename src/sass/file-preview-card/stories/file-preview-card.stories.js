export default { title: "Skin/File Preview Card" };

export const uploading = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">    
                <span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
                    <svg class="icon icon--30" aria-hidden="true">
                        <use href="#icon-spinner-30"></use>
                    </svg>
                </span>
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const squareImage = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const portraitImage = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const portraitWithCSSImageContainBackground = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <span style="height: 100%; width: 100%; background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: contain;"></span>
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const landscapeImage = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const video = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <!-- <div class="file-preview-card__preview-action">
                <button class="icon-btn" type="button">
                    <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="file-preview-card__preview-action-text">0:21</span>
                </button>
            </div> -->
        </div>
    </div>
`;

export const videoRTL = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card" dir="rtl">
            <div class="file-preview-card__body">
                <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <!-- <div class="file-preview-card__preview-action">
                <button class="icon-btn" type="button">
                    <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="file-preview-card__preview-action-text">0:21</span>
                </button>
            </div> -->
        </div>
    </div>
`;

export const document = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <svg class="icon file-preview-card__document-icon" aria-hidden="true">
                    <use href="#icon-file-24"></use>
                </svg>
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <!-- <div class="file-preview-card__preview-action">
                <button class="icon-btn" type="button">
                    <span class="file-preview-card__preview-action-text">CSV</span>
                </button>
            </div> -->
        </div>
    </div>
`;

export const seeMore = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__body file-preview-card__body--fade">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__body-action">
                <button class="icon-btn" type="button">
                    <span>+15</span>
                </button>
            </div>
        </div>
    </div>
`;

export const seeMoreRTL = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card" dir="rtl">
            <div class="file-preview-card__body file-preview-card__body--fade">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__body-action">
                <button class="icon-btn" type="button">
                    <span>+15</span>
                </button>
            </div>
        </div>
    </div>
`;
