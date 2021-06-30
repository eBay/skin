export default { title: 'Page Notice/Page Notice' };

export const general = () => `
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
</section>
`;

export const generalWithButton = () => `
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const generalWithLink = () => `
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`;

export const confirmationWithButton = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const confirmationWithLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`;

export const attentionWithButton = () => `
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--attention-filled" focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const attentionWithLink = () => `
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--attention-filled" focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`;

export const informationWithButton = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled" focusable="false" height="24" width="24" role="img" aria-label="Information">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const informationWithLink = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled" focusable="false" height="24" width="24" role="img" aria-label="Information">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn more</a>
    </div>
</section>
`;
