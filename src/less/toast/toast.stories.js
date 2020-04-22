export default { title: 'Toast' };

export const toastDefault = () => `
<aside class="toast" aria-label="Notification" aria-live="polite">
    <div class="toast__header">
        <h3>User Privacy Preferences</h3>
        <button class="icon-btn" type="button" aria-label="Close toast">
            <svg class="icon icon--close" focusable="false" height="24" width="24">
                <use xlink:href="#icon-close"></use>
            </svg>
        </button>
    </div>
    <div class="toast__main">
        We detected something unusual about a recent sign-in to your eBay account.
        To help keep you safe, we recommend you change the password.
    </div>
    <div class="toast__footer">
        <button class="btn btn--delete">Reject</button>
        <button class="btn btn--secondary">Accept</button>
    </div>
</aside>
`;

export const toastSlide = () => `
<aside class="toast toast--slide toast--show" aria-label="Notification" aria-live="polite">
    <div class="toast__header">
        <h3>User Privacy Preferences</h3>
        <button class="icon-btn" type="button" aria-label="Close toast">
            <svg class="icon icon--close" focusable="false" height="24" width="24">
                <use xlink:href="#icon-close"></use>
            </svg>
        </button>
    </div>
    <div class="toast__main">
        We detected something unusual about a recent sign-in to your eBay account.
        To help keep you safe, we recommend you change the password.
    </div>
    <div class="toast__footer">
        <button class="btn btn--delete">Reject</button>
        <button class="btn btn--secondary">Accept</button>
    </div>
</aside>
`;
