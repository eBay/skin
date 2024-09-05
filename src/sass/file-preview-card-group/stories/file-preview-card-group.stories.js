import {
    uploading as uploadingCard,
    uploadedPortraitImage as uploadedPortraitImageCard,
    uploadedLandscapeImage as uploadedLandscapeImageCard,
    uploadedVideo as uploadedVideoCard,
    uploadedDocumentWithTitle as uploadedDocumentWithTitleCard,
    uploadedDocumentWithTitleAndDescription as uploadedDocumentWithTitleAndDescriptionCard,
    uploadedWithOverflow as uploadedWithOverflowCard,
} from "../../file-preview-card/stories/file-preview-card.stories";
export default { title: "Skin/File Preview Card Group" };

export const base = () => `
    <div class="file-preview-card-group">
        ${uploadingCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
    </div>
`;

export const uploadedOverflow = () => `
    <div class="file-preview-card-group">
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedWithOverflowCard()}
    </div>
`;

export const uploadingMixedTypes = () => `
    <div class="file-preview-card-group">
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedDocumentWithTitleCard()}
        ${uploadedDocumentWithTitleAndDescriptionCard()}
    </div>
`;

export const RTL = () => `
    <div class="file-preview-card-group" dir="rtl">
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedVideoCard()}
        ${uploadedPortraitImageCard()}
        ${uploadedLandscapeImageCard()}
        ${uploadedWithOverflowCard()}
    </div>
`;
