export default { title: 'Window Notice' };

export const base = () => `
<section class="window-notice" role="region" aria-label="Congratulations" aria-roledescription="Notice">
    <div class="window-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="35" width="35" role="img" aria-label="Congratulations">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="window-notice__main">
        <h2 class="window-notice__title">Your first order has been placed!</h2>
        <p>You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
    </div>
    <div class="window-notice__footer">
        <button class="btn btn--large">Continue</button>
    </div>
</section>
`;

export const screen = () => `
<div class="demo" style="width: 320px; max-width:90vw">
    <div class="demo__inner" style="height: 500px; max-height: 90vh">
    <section class="window-notice window-notice--screen" role="region" aria-label="Congratulations" aria-roledescription="Notice">
        <div class="window-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="35" width="35" role="img" aria-label="Congratulations">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="window-notice__main">
            <h2 class="window-notice__title">Your first order has been placed!</h2>
            <p>You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
        </div>
        <div class="window-notice__footer">
            <button class="btn btn--large">Continue</button>
        </div>
    </section>
    </div>
</div>
`;
