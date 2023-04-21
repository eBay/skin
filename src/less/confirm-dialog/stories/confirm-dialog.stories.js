export default { title: "Confirm Dialog" };

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
