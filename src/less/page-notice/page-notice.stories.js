export default { title: 'Page Notice/Page Notice' };

export const confirmation = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">You have opted into eBay Pay and </h3>
        <p>will now get paid directly.</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link fake-link--action">Dismiss</button>
    </div>
</section>
`;

export const confirmationLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">You have opted into eBay Pay and </h3>
        <p>will now get paid directly.</p>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`;

export const RTL = () => `
<div dir="rtl">
    <section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">:Your new listing is live</h3>
            <p><a href="#">Spam and Eggs From the Cow's Perspective</a> (paperback)</p>
        </div>

        <div class="page-notice__footer">
            <button class="fake-link fake-link--action">Dismiss</button>
        </div>
    </section>
<div>
`;

export const attention = () => `
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--attention-filled" focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Please check the following details:</h3>
        <p><a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link fake-link--action">Learn More</button>
    </div>
</section>
`;

export const attentionLink = () => `
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--attention-filled" focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Please check the following details:</h3>
        <p><a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</p>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`;

export const information = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled" focusable="false" height="24" width="24" role="img" aria-label="Information">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Free shipping on your next pair of shoes:</h3>
        <p><a href="#">Learn more</a>.</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link fake-link--action">Opt In</button>
    </div>
</section>
`;

export const general = () => `
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h3 class="page-notice__title">We've updated the look and feel of this page.</h3>
        <p>Customize anytime in settings.</p>
    </div>
</section>
`;

export const noFooter = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Your new listing is live:</h3>
        <p><a href="#">Spam and Eggs From the Cow's Perspective</a> (paperback).</p>
    </div>
</section>
`;
