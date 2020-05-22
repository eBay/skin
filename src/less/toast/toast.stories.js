export default { title: 'Toast' };

export const toastPrimaryAction = () => `
<aside class="toast" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast__window">
        <div class="toast__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--close" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="toast__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`;

export const toastSecondaryAction = () => `
<aside class="toast" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast__window">
        <div class="toast__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--close" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="toast__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`;
