import {
    uploading as uploadingCard,
    uploadedPortraitImage as uploadedPortraitImageCard,
    uploadedLandscapeImage as uploadedLandscapeImageCard,
    uploadedVideo as uploadedVideoCard,
    uploadedDocumentWithTitle as uploadedDocumentWithTitleCard,
    uploadedDocumentWithTitleAndDescription as uploadedDocumentWithTitleAndDescriptionCard,
    uploadedWithOverflow as uploadedWithOverflowCard,
} from "../../card/stories/card-large.stories";

export default { title: "Skin/File Upload/Compact" };

export const base = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
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

export const uploading = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
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
        <div class="file-upload__assets file-upload__assets--compact">
            ${uploadingCard()}
            ${uploadedPortraitImageCard()}
        </div>
    </div>
`;

export const uploadedOverflow = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
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
        <div class="file-upload__assets file-upload__assets--compact">
            ${uploadedPortraitImageCard()}
            ${uploadedLandscapeImageCard()}
            ${uploadedVideoCard()}
            ${uploadedWithOverflowCard()}
        </div>
    </div>
`;

export const uploadingMixedTypes = () => `
    <div class="file-upload">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
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
        <div class="file-upload__assets file-upload__assets--compact">
            ${uploadedDocumentWithTitleCard()}
            ${uploadedPortraitImageCard()}
            ${uploadedVideoCard()}
            ${uploadedDocumentWithTitleAndDescriptionCard()}
        </div>
    </div>
`;

export const RTL = () => `
    <div class="file-upload" dir="rtl">
        <div class="file-uploader" tabindex="0">
            <label for="file-uploader-input">
                <div class="file-uploader__container file-uploader__container--compact">
                    <div class="file-uploader__upload-icon-button file-uploader__upload-icon-button--compact">
                        <svg class="icon" height="24" width="24" aria-hidden="true">   
                            <use href="#icon-upload-24"></use>
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
        <div class="file-upload__assets file-upload__assets--compact">
            ${uploadedDocumentWithTitleCard()}
            ${uploadedPortraitImageCard()}
            ${uploadedVideoCard()}
            ${uploadedDocumentWithTitleAndDescriptionCard()}
        </div>
    </div>
`;
