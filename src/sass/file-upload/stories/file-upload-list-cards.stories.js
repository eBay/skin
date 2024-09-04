import {
    base as uploadedListCard,
    uploading as uploadingListCard,
} from "../../list-card/stories/list-card.stories";
export default { title: "Skin/File Upload/List Cards" };

export const base = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container">
                    <div class="file-uploader__upload-icon-button">
                        <svg class="icon" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
                        </svg>
                    </div>
                    <div class="file-uploader__content">
                        <div class="file-uploader__content-header">Add files</div>
                        <div class="file-uploader__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                        <button class="fake-link file-uploader__content__button" type="button">Browse files</button>
                    </div>
                </div>
            </label>
            <input id="file-uploader-input" class="file-uploader-input" type="file" />
        </div>
    </div>
`;

export const uploading = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container">
                    <div class="file-uploader__upload-icon-button">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
                        </svg>
                    </div>
                    <div class="file-uploader__content">
                        <div class="file-uploader__content-header">Add files</div>
                        <div class="file-uploader__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                        <button class="fake-link file-uploader__content__button" type="button">Browse files</button>
                    </div>
                </div>
            </label>
            <input id="file-uploader-input" class="file-uploader-input" type="file" />
        </div>
        <div class="file-upload__assets file-upload__assets--list">
            ${uploadingListCard()}
        </div>
    </div>
`;

export const uploaded = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container">
                    <div class="file-uploader__upload-icon-button">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
                        </svg>
                    </div>
                    <div class="file-uploader__content">
                        <div class="file-uploader__content-header">Add files</div>
                        <div class="file-uploader__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                        <button class="fake-link file-uploader__content__button" type="button">Browse files</button>
                    </div>
                </div>
            </label>
            <input id="file-uploader-input" class="file-uploader-input" type="file" />
        </div>
        <div class="file-upload__assets file-upload__assets--list">
            ${uploadedListCard()}
            ${uploadedListCard()}
        </div>
    </div>
`;

export const RTL = () => `
    <div class="file-upload" dir="rtl">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container">
                    <div class="file-uploader__upload-icon-button">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
                        </svg>
                    </div>
                    <div class="file-uploader__content">
                        <div class="file-uploader__content-header">Add files</div>
                        <div class="file-uploader__content-subheader">Up to 10MB per file in JPG, JPEG, PNG, MP4.</div>
                        <button class="fake-link file-uploader__content__button" type="button">Browse files</button>
                    </div>
                </div>
            </label>
            <input id="file-uploader-input" class="file-uploader-input" type="file" />
        </div>
        <div class="file-upload__assets file-upload__assets--list">
            ${uploadedListCard()}
            ${uploadedListCard()}
        </div>
    </div>
`;
