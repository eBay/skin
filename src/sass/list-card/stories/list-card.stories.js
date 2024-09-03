export default { title: "Skin/List Card" };

export const base = () => `
    <div class="list-card">
        <div class="list-card__title">certificate.pdf</div>
        <button class="icon-btn" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const RTL = () => `
    <div class="list-card" dir="rtl">
        <div class="list-card__title">certificate.pdf</div>
        <button class="icon-btn" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploading = () => `
    <div class="list-card">
        <div class="list-card__title">certificate.pdf</div>
        <div class="list-card__spinner">
            <span class="progress-spinner" aria-label="Busy animation" role="img">
                <svg class="icon icon--24" aria-hidden="true">
                    <use href="#icon-spinner-24"></use>
                </svg>
            </span>
        </div>
        <button class="icon-btn" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;

export const uploadingRTL = () => `
    <div class="list-card" dir="rtl">
        <div class="list-card__title">certificate.pdf</div>
        <div class="list-card__spinner">
            <span class="progress-spinner" aria-label="Busy animation" role="img">
                <svg class="icon icon--24" aria-hidden="true">
                    <use href="#icon-spinner-24"></use>
                </svg>
            </span>
        </div>
        <button class="icon-btn" type="button" aria-label="Open menu">
            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                <use href="#icon-overflow-vertical-16"></use>
            </svg>
        </button>
    </div>
`;
