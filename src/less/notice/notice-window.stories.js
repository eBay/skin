export default { title: 'notice-window' };

export const base = () => `
<section aria-labelledby="window-notice-title" class="window-notice" role="region">
    <h2 id="window-notice-title">
        <svg class="icon icon--confirmation-filled" focusable="false" height="35" width="35" role="img" aria-label="Success">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
        <span class="window-notice__title">Your first order has been placed!</span>
    </h2>
    <p class="window-notice__content">You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
    <button class="btn btn--large">Continue</button>
</section>
`;

export const fill = () => `
<div class="demo" style="width: 320px; max-width:90vw">
    <div class="demo__inner" style="height: 500px; max-height: 90vh">
        <section aria-labelledby="window-notice-title" class="window-notice window-notice--fill" role="region">
            <h2 id="window-notice-title">
                <svg class="icon icon--confirmation-filled" focusable="false" height="35" width="35" role="img" aria-label="Success">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
                <span class="window-notice__title">Your first order has been placed!</span>
            </h2>
            <p class="window-notice__content">You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
            <a class="fake-btn fake-btn--large" href="http://www.ebay.com">Continue</a>
        </section>
    </div>
</div>
`;
