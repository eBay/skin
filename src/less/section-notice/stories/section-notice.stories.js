export default { title: "Section Notice" };

export const general = () => `
<div class="section-notice" role="region">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
</div>
`;

export const generalWithButton = () => `
<div class="section-notice" role="region">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const generalWithLink = () => `
<div class="section-notice" role="region">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
    <div class="section-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</div>
`;

export const confirmationWithParagraph = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Your price has been updated.</p>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const confirmationWithButton = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const confirmationWithLink = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
    <div class="section-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</div>
`;

export const attentionWithButton = () => `
<div class="section-notice section-notice--attention" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled-16">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Add required aspects to keep item live.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const attentionWithLink = () => `
<div class="section-notice section-notice--attention" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled-16">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Add required aspects to keep item live.</h3>
    </div>
    <div class="section-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</div>
`;

export const informationWithButton = () => `
<div class="section-notice section-notice--information" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled-16">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Send offers to interested buyers.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const informationWithLink = () => `
<div class="section-notice section-notice--information" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled-16">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Send offers to interested buyers.</h3>
    </div>
    <div class="section-notice__footer">
        <a href="https://ebay.com">Send Offers</a>
    </div>
</div>
`;

export const dismissableWithTitle = () => `
<section class="section-notice section-notice--information" role="region" aria-label="Information">
    <div class="section-notice__header">
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="section-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="section-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="10" width="10">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`;

export const dismissableWithoutTitle = () => `
<section class="section-notice section-notice--information" role="region" aria-label="Information">
    <div class="section-notice__header">
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Opt into eBay payments before Jan 12th to pay no selling fees.</h3>
    </div>
    <p class="section-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="section-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="10" width="10">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`;
