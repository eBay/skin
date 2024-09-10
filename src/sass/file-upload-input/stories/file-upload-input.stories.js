export default { title: "Skin/File Upload Input" };

export const base = () => `
    <div class="file-upload-input">
        <input id="file-upload-input__input" class="file-upload-input__input" type="file" />
        <label for="file-upload-input__input">
            <div class="file-upload-input__container">
                <div class="file-upload-input__upload-icon">
                    <svg class="icon" aria-hidden="true">   
                        <use href="#icon-upload-24"></use>
                    </svg>
                </div>
                <div class="file-upload-input__content">
                    <span class="file-upload-input__content-header">Add files</span>
                    <span class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                    <span class="file-upload-input__content-cta">Browse files</span>
                </div>
            </div>
        </label>
    </div>
`;

export const RTL = () => `
    <div class="file-upload-input" dir="rtl">
        <input id="file-upload-input__input" class="file-upload-input__input" type="file" />
        <label for="file-upload-input__input">
            <div class="file-upload-input__container">
                <div class="file-upload-input__upload-icon">
                    <svg class="icon" aria-hidden="true">   
                        <use href="#icon-upload-24"></use>
                    </svg>
                </div>
                <div class="file-upload-input__content">
                    <span class="file-upload-input__content-header">Add files</span>
                    <span class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
                    <span class="file-upload-input__content-cta">Browse files</span>
                </div>
            </div>
        </label>
    </div>
`;
