/**
 * Storybook meta configuration for the file preview card stories.
 * @type {import('@storybook/html').Meta}
 */
export default {
    title: "Skin/File Preview Card",
    decorators: [
        (story) => `
            <div style="width: 168px">
                ${story()}
            </div>
        `,
    ],
};

export const uploading = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <span class="progress-spinner progress-spinner--large file-preview-card__asset" aria-label="Busy" role="img">
                <svg class="icon icon--30" aria-hidden="true">
                    <use href="#icon-spinner-30"></use>
                </svg>
            </span>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Cancel upload">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const squareImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const portraitImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const portraitWithCSSImageContainBackground = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <span class="file-preview-card__asset" style="height: 100%; width: 100%; background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: contain;"></span>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const landscapeImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`;

export const video = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </div>
`;

export const videoRTL = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body" dir="rtl">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </div>
`;

export const document = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                CSV
            </div>
        </div>
    </div>
`;

export const seeMore = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset file-preview-card__asset--fade" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="file-preview-card__see-more" type="button">
                <span>+15</span>
            </button>
        </div>
    </div>
`;

export const seeMoreRTL = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body" dir="rtl">
            <img class="file-preview-card__asset file-preview-card__asset--fade" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="file-preview-card__see-more" type="button">
                <span>+15</span>
            </button>
        </div>
    </div>
`;

export const withDescription = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                CSV
            </div>
        </div>
        <div class="file-preview-card__footer">
          <span>countries.csv</span>
          <span>English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </div>
`;
