export default { title: 'Snackbar Dialog/Snackbar Dialog/Base' };

export const noAction = () => `
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
        </div>
    </aside>
`;

export const action = () => `
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
            <div class="snackbar-dialog__actions">
                <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button>
            </div>
        </div>
    </aside>
`;

export const actionAndDismiss = () => `
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
            <div class="snackbar-dialog__actions">
                <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
                <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
            </div>
        </div>
    </aside>
`;

export const actionsStacked = () => `
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window snackbar-dialog__window--column">
            <div class="snackbar-dialog__main">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="snackbar-dialog__actions">
            <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
            <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
            </div>
        </div>
    </aside>
`;
