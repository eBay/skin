export default { title: "Skin/File Preview Card Group" };

const squareImage = () => `
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`;

const portraitImage = () => `
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`;

const landscapeImage = () => `
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`;

const video = () => `
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__label">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </li>
`;

const withDescription = () => `
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__label">
                CSV
            </div>
        </div>
        <div class="file-preview-card__footer">
          <span>countries.csv</span>
          <span>English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </li>
`;

export const base = () => `
    <div class="file-preview-card-group">
        <ul>
            ${squareImage().repeat(28)}
        </ul>
    </div>
`;

export const mixedTypesWithDetails = () => `
    <div class="file-preview-card-group">
        <ul>
            ${withDescription()}
            ${squareImage()}
            ${portraitImage()}
            ${video()}
            ${landscapeImage()}
        </ul>
    </div>
`;

export const RTL = () => `
    <div class="file-preview-card-group" dir="rtl">
        <ul>
            ${withDescription()}
            ${squareImage()}
            ${portraitImage()}
            ${video()}
            ${landscapeImage()}
        </ul>
    </div>
`;

export const _320container = () => `
    <div style="width: 320px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _512container = () => `
    <div style="width: 512px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _768container = () => `
    <div style="width: 768px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _1024container = () => `
    <div style="width: 1024px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _1280container = () => `
    <div style="width: 1280px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _1440container = () => `
    <div style="width: 1440px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _1680container = () => `
    <div style="width: 1680px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;

export const _1920container = () => `
    <div style="width: 1920px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
`;
