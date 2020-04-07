export default { title: 'Toast' };

export const toastMessage = () => `
<aside class="toast toast--show" id="default-toast">
    <header class="toast__header">
        <h3>User Privacy Preferences</h3>
        <button id="default-toast-btn-hide" class="icon-btn" type="button" aria-label="Close toast">
            <svg class="icon icon--close" focusable="false" height="24" width="24">
                <use xlink:href="#icon-close"></use>
            </svg>
        </button>
    </header>
    <p class="toast__body">
        We detected something unusual about a recent sign-in to your eBay account.
        To help keep you safe, we recommend you change the password.
    </p>
    <section class="toast__actions">
        <button class="btn btn--delete">Reject</button>
        <button class="btn btn--secondary">Accept</button>
    </section>
</aside>
`;
