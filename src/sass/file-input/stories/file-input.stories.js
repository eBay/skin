export default { title: "Skin/File Input" };

export const base = () => `
    <div class="file-input">
        <div class="file-input__container">
            <div class="file-input__upload-icon">
                <svg class="icon" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-input__content">
                <h4 class="file-input__content-header">Drag and drop files</h4>
                <span class="file-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-input-1">
                    <span class="file-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
        <input id="file-input-1" class="file-input__input" type="file" multiple/>
    </div>
`;

export const draggedOver = () => `
    <div class="file-input">
        <div class="file-input__container file-input___container--dragged-over">
            <div class="file-input__upload-icon">
                <svg class="icon" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-input__content">
                <h4 class="file-input__content-header">Drag and drop files</h4>
                <span class="file-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-input-1">
                    <span class="file-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
        <input id="file-input-1" class="file-input__input" type="file" multiple/>
    </div>
`;

export const RTL = () => `
    <div class="file-input" dir="rtl">
        <div class="file-input__container">
            <div class="file-input__upload-icon">
                <svg class="icon" aria-hidden="true">   
                    <use href="#icon-upload-24"></use>
                </svg>
            </div>
            <div class="file-input__content">
                <h4 class="file-input__content-header">Drag and drop files</h4>
                <span class="file-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                <label for="file-input-1">
                    <span class="file-input__content-cta">Browse files</span>
                </label>
            </div>
        </div>
        <input id="file-input-1" class="file-input__input" type="file" multiple/>
    </div>
`;
