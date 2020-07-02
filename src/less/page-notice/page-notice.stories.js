export default { title: 'Page Notice' };

export const confirmation = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p><a href="#">Spam and Eggs From the Cow's Perspective</a> (paperback).</p>
    </div>
</section>
`;

export const attention = () => `
<section class="page-notice page-notice--attention" role="region" aria-labelledby="attention-status">
    <div class="page-notice__header">
        <svg aria-hidden="true" class="icon icon--attention-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Please check the following details:</h3>
        <p><a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</p>
    </div>
</section>
`;

export const information = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg aria-hidden="true" class="icon icon--information-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes:</h2>
        <p><a href="#">Learn more</a>.</p>
    </div>
</section>
`;

export const celebration = () => `
<section class="page-notice page-notice--celebration" role="region" aria-label="Success!">
    <div class="page-notice__header">
        <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your order's in!</h2>
        <p>We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
    </div>
</section>
`
