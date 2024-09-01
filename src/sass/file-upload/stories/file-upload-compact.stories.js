export default { title: "Skin/File Upload/Compact" };

export const base = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" height="16" width="16" aria-hidden="true">   
                            <use href="#icon-upload-16"></use>
                        </svg>
                    </div>
                    <div class="file-uploader__content">
                        <div class="file-uploader__content-header file-uploader__content-header--compact">Add files</div>
                        <div class="file-uploader__content-subheader file-uploader__content-subheader--compact">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                        <button class="fake-link file-uploader__content__button" type="button">Browse files</button>
                    </div>
                </div>
            </label>
            <input id="file-uploader-input" class="file-uploader-input" type="file" />
        </div>
    </div>
`;
