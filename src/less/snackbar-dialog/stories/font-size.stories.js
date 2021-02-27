export default { title: 'Snackbar Dialog/Snackbar Dialog/Font-Size' };

export const noAction = () => `
    <div style="font-size: 200%">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
            </div>
        </aside>
    </div>
`;

export const action = () => `
    <div style="font-size: 200%">
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
    </div>
`;

export const actionAndDismiss = () => `
    <div style="font-size: 200%">
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
    </div>
`;

export const actionsStacked = () => `
    <div style="font-size: 200%">
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
    </div>
`;
