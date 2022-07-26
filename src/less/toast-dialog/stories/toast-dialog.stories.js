export default { title: 'Toast Dialog/Toast Dialog' };

export const primaryAction = () => `
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--close icon--close-small" focusable="false">
                    <use href="#icon-close-small"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`;

export const secondaryAction = () => `
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--close icon--close-small" focusable="false">
                    <use href="#icon-close-small"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`;

export const RTL = () => `
<div dir="rtl">
    <aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
        <div class="toast-dialog__window">
            <div class="toast-dialog__header">
                <h2>User Privacy Preferences</h2>
                <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                    <svg class="icon icon--close icon--close-small" focusable="false">
                        <use href="#icon-close-small"></use>
                    </svg>
                </button>
            </div>
            <div class="toast-dialog__main">
                <p>We detected something unusual about a recent sign-in to your eBay account.
                To help keep you safe, we recommend you change the password.</p>
            </div>
            <div class="toast-dialog__footer">
                <button accesskey="d" class="btn btn--secondary">Dismiss</button>
                <button accesskey="a" class="btn btn--primary">Accept</button>
            </div>
        </div>
    </aside>
</div>
`;
