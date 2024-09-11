export default { title: "Skin/File Preview Card" };

export const uploading = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">    
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

export const uploadError = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">    
                <div class="inline-notice inline-notice--attention">
                    <span class="inline-notice__header">
                        <svg class="icon--attention-filled icon icon--16" aria-hidden="true">
                            <use href="#icon-attention-filled-16"></use>
                        </svg>
                    </span>
                    <span class="inline-notice__main">
                        <p>Upload failed</p>
                    </span>
                </div>
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-refresh-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const squareImage = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">
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
            <div class="file-preview-card__center">
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
            <div class="file-preview-card__center">
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
            <div class="file-preview-card__center">
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
            <div class="file-preview-card__center">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="file-preview-card__label">
                <button class="icon-btn" type="button" aria-label="Preview">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="file-preview-card__label-text">0:21</span>
                </button>
            </div>
        </div>
    </div>
`;

export const videoRTL = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card" dir="rtl">
            <div class="file-preview-card__center">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="file-preview-card__label">
                <button class="icon-btn" type="button" aria-label="Preview">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="file-preview-card__label-text">0:21</span>
                </button>
            </div>
        </div>
    </div>
`;

export const generalDoc = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">
                <svg class="icon" height="40%" width="40%" aria-hidden="true">
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
            <div class="file-preview-card__label">
                <button class="icon-btn" type="button" aria-label="Preview">
                    <span class="file-preview-card__label-text">CSV</span>
                </button>
            </div>
        </div>
    </div>
`;

export const portraitDoc = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-portrait-doc.jpeg" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="file-preview-card__label">
                <button class="icon-btn" type="button" aria-label="Preview">
                    <span class="file-preview-card__label-text">PDF</span>
                </button>
            </div>
        </div>
    </div>
`;

export const landscapeDoc = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-doc.png" alt="Image">
            </div>
            <div class="file-preview-card__menu-action">
                <button class="icon-btn" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="file-preview-card__label">
                <button class="icon-btn" type="button" aria-label="Preview">
                    <span class="file-preview-card__label-text">PDF</span>
                </button>
            </div>
        </div>
    </div>
`;

export const overflow = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card">
            <div class="file-preview-card__center file-preview-card__center--overflow">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__center-action">
                <button class="icon-btn" type="button" aria-label="Open overflow">
                    <span>+15</span>
                </button>
            </div>
        </div>
    </div>
`;

export const overflowRTL = () => `
    <div style="height: 168px; width: 168px;">
        <div class="file-preview-card" dir="rtl">
            <div class="file-preview-card__center file-preview-card__center--overflow">
                <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            </div>
            <div class="file-preview-card__center-action">
                <button class="icon-btn" type="button" aria-label="Open overflow">
                    <span>+15</span>
                </button>
            </div>
        </div>
    </div>
`;
