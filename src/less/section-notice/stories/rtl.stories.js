export default { title: "Section Notice/RTL" };

export const confirmationWithButton = () => `
<div dir="rtl">
    <section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Confirmation">
                <use href="#icon-confirmation-filled-16"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">You have opted into eBay Pay</h2>
        </div>
        <div class="page-notice__footer">
            <button class="fake-link">Dismiss</button>
        </div>
    </section>
</div>
`;

export const dismissableWithTitle = () => `
<div dir="rtl">
    <section class="page-notice page-notice--information" role="region" aria-label="Information">
        <div class="page-notice__header">
            <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
                <use href="#icon-information-filled-16"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Notice Title</h3>
            <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
        </div>
        <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
        <div class="page-notice__footer">
            <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="14" width="14">
                    <use href="#icon-close-16"></use>
                </svg>
            </a>
        </div>
    </section>
</div>
`;

export const dismissableWithoutTitle = () => `
<div dir="rtl">
    <section class="page-notice page-notice--information" role="region" aria-label="Information">
        <div class="page-notice__header">
            <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
                <use href="#icon-information-filled-16"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Opt into eBay payments before Jan 12th to pay no selling fees.</h3>
        </div>
        <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
        <div class="page-notice__footer">
            <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="14" width="14">
                    <use href="#icon-close-16"></use>
                </svg>
            </a>
        </div>
    </section>
</div>
`;
