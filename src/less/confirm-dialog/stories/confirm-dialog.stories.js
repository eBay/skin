export default { title: "Skin/Confirm Dialog" };

export const base = () => `
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade demo-a11y-text-spacing" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`;

export const baseWithHeaderOverflow = () => `
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">This title is long enough that it needs to wrap into multiple lines. No dialog header should ever be this long.</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`;
