export default { title: "Skin/Alert Dialog" };

export const base = () => `
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade demo-a11y-text-spacing" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`;

export const baseWithHeaderOverflow = () => `
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert! This title is so long that it wraps to the next line. No dialog should ever have a title this long.</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`;
