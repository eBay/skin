import {
    uploading,
    uploadedPortraitImage,
    uploadedLandscapeImage,
    uploadedVideo,
    uploadedPDFWithTitle,
    uploadedPDFWithTitleAndDescription,
    uploadedWithOverflow,
} from "../../file-preview-card/stories/file-preview-card.stories";
export default { title: "Skin/File Preview Card Group" };

export const base = () => `
    <div class="file-preview-card-group">
        ${uploading()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
    </div>
`;

export const uploadedOverflow = () => `
    <div class="file-preview-card-group">
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedWithOverflow()}
    </div>
`;

export const uploadingMixedTypes = () => `
    <div class="file-preview-card-group">
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPDFWithTitle()}
        ${uploadedPDFWithTitleAndDescription()}
    </div>
`;

export const RTL = () => `
    <div class="file-preview-card-group" dir="rtl">
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedVideo()}
        ${uploadedPortraitImage()}
        ${uploadedLandscapeImage()}
        ${uploadedWithOverflow()}
    </div>
`;
