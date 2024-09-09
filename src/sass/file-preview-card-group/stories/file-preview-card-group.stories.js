export default { title: "Skin/File Preview Card Group" };

const squareImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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

const portraitImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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

const portraitWithCSSImageContainBackground = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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

const landscapeImage = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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

const docWithTitle = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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
                    <span>PDF</span>
                </button>
            </div>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
        </div>
    </div>
`;

const portraitDocWithTitle = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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
                    <span>PDF</span>
                </button>
            </div>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
        </div>
    </div>
`;

const landscapeDocWithTitleAndDescription = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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
                    <span>PDF</span>
                </button>
            </div>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">certificate.pdf</span>
            <span class="file-preview-card__details-subtitle">English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </div>
`;

const generalDocument = () => `
    <div class="file-preview-card">
        <div class="file-preview-card__content">
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
                    <span>CSV</span>
                </button>
            </div>
        </div>
        <div class="file-preview-card__details">
            <span class="file-preview-card__details-title">some.csv</span>
        </div>
    </div>
`;

export const base = () => `
    <div class="file-preview-card-group">
        <ul aria-label="cards">
            <li>${squareImage()}</li>
            <li>${squareImage()}</li>
            <li>${squareImage()}</li>
            <li>${squareImage()}</li>
        </ul>
    </div>
`;

export const mixedTypes = () => `
    <div class="file-preview-card-group">
        <ul aria-label="cards">
            <li>${docWithTitle()}</li>
            <li>${squareImage()}</li>
            <li>${portraitImage()}</li>
            <li>${generalDocument()}</li>
            <li>${portraitWithCSSImageContainBackground()}</li>
            <li>${landscapeImage()}</li>
            <li>${portraitDocWithTitle()}</li>
            <li>${landscapeDocWithTitleAndDescription()}</li>
        </ul>
    </div>
`;

export const RTL = () => `
    <div class="file-preview-card-group" dir="rtl">
        <ul aria-label="cards">
            <li>${docWithTitle()}</li>
            <li>${squareImage()}</li>
            <li>${portraitImage()}</li>
            <li>${generalDocument()}</li>
            <li>${portraitWithCSSImageContainBackground()}</li>
            <li>${landscapeImage()}</li>
            <li>${portraitDocWithTitle()}</li>
            <li>${landscapeDocWithTitleAndDescription()}</li>
        </ul>
    </div>
`;

export const _320container = () => `
    <div style="width: 320px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _512container = () => `
    <div style="width: 512px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _768container = () => `
    <div style="width: 768px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _1024container = () => `
    <div style="width: 1024px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _1280container = () => `
    <div style="width: 1280px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _1440container = () => `
    <div style="width: 1440px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _1680container = () => `
    <div style="width: 1680px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;

export const _1920container = () => `
    <div style="width: 1920px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul aria-label="cards">
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
                <li>${squareImage()}</li>
            </ul>
        </div>
    </div>
`;
