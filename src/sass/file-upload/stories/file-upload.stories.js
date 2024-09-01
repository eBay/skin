export default { title: "Skin/File Upload/Default" };

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
        <div class="file-upload__assets">
            <div class="card">
                <div class="card__content">
                    <progress class="progress-bar" value=60 max=100></progress>
                </div>
                <button class="icon-btn card__action" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const uploadedWrap = () => `
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
        <div class="file-upload__assets">
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const uploadedOverflow = () => `
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
        <div class="file-upload__assets">
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
                        <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image card__content--overflow" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__overflow-action" type="button" aria-label="Open menu">
                    <span>+15</span>
                </button>
            </div>
        </div>
    </div>
`;

export const uploadingMixedTypes = () => `
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
        <div class="file-upload__assets">
            <div class="card">
                <div class="card__content">
                    <progress class="progress-bar" value=60 max=100></progress>
                </div>
                <button class="icon-btn card__action" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
                <button class="icon-btn card__label" type="button" aria-label="Cancel upload">
                    <svg class="icon icon--12" height="12" width="12" aria-hidden="true">
                        <use href="#icon-play-16"></use>
                    </svg>
                    <span class="card__label-text">0:21</span>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
            <div class="card">
                <div class="card__content card__content--image" style="background-image: url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
                <button class="icon-btn card__action" type="button" aria-label="Open menu">
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                        <use href="#icon-overflow-vertical-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;
