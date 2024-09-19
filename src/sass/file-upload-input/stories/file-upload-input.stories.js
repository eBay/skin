export default { title: "Skin/File Upload Input" };

export const base = () => `
    <div class="file-upload-input">
        <input id="file-upload-input-1" class="file-upload-input__input" type="file" multiple/>
        <div class="file-upload-input__container">
            <div class="file-upload-input__upload-icon">
                <svg class="icon file-upload-input__upload-icon-small" aria-hidden="true">   
                    <use href="#icon-upload-16"></use>
                </svg>
                <svg class="icon file-upload-input__upload-icon-large" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-upload-input__content">
                <span class="file-upload-input__content-header">Drag and drop files</span>
                <span class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-upload-input-1">
                    <span class="file-upload-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
    </div>
`;

export const draggedOver = () => `
    <div class="file-upload-input">
        <input id="file-upload-input-1" class="file-upload-input__input" type="file" multiple/>
        <div class="file-upload-input__container file-upload-input___container--dragged-over">
            <div class="file-upload-input__upload-icon">
                <svg class="icon file-upload-input__upload-icon-small" aria-hidden="true">   
                    <use href="#icon-upload-16"></use>
                </svg>
                <svg class="icon file-upload-input__upload-icon-large" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-upload-input__content">
                <span class="file-upload-input__content-header">Drag and drop files</span>
                <span class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-upload-input-1">
                    <span class="file-upload-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
    </div>
`;

export const RTL = () => `
    <div class="file-upload-input" dir="rtl">
        <input id="file-upload-input-1" class="file-upload-input__input" type="file" multiple/>
        <div class="file-upload-input__container">
            <div class="file-upload-input__upload-icon">
                <svg class="icon file-upload-input__upload-icon-small" aria-hidden="true">   
                    <use href="#icon-upload-16"></use>
                </svg>
                <svg class="icon file-upload-input__upload-icon-large" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-upload-input__content">
                <span class="file-upload-input__content-header">Drag and drop files</span>
                <span class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-upload-input-1">
                    <span class="file-upload-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
    </div>
`;
