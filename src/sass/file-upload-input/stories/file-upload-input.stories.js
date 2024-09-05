export default { title: "Skin/File Upload Input" };

export const base = () => `
    <div class="file-upload-input" tabindex="0">
        <label for="file-upload-input__input">
            <div class="file-upload-input__container">
                <div class="file-upload-input__upload-icon">
                    <svg class="icon" aria-hidden="true">   
                        <use href="#icon-upload-24"></use>
                    </svg>
                </div>
                <div class="file-upload-input__content">
                    <div class="file-upload-input__content-header">Add files</div>
                    <div class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                    <button class="fake-link file-upload-input__content__button" tabindex="0" type="button">Browse files</button>
                </div>
            </div>
        </label>
        <input id="file-upload-input__input" type="file" />
    </div>
`;

export const RTL = () => `
    <div class="file-upload-input" tabindex="0" dir="rtl">
        <label for="file-upload-input__input">
            <div class="file-upload-input__container">
                <div class="file-upload-input__upload-icon-button">
                    <svg class="icon" height="24" width="24" aria-hidden="true">   
                        <use href="#icon-upload-24"></use>
                    </svg>
                </div>
                <div class="file-upload-input__content">
                    <div class="file-upload-input__content-header">Add files</div>
                    <div class="file-upload-input__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                    <button class="fake-link file-upload-input__content__button" tabindex="0" type="button">Browse files</button>
                </div>
            </div>
        </label>
        <input id="file-upload-input__input" type="file" />
    </div>
`;
