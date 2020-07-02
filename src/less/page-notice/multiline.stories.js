export default { title: 'Page Notice/Multiline' };

export const confirmation = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
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
        <h2 aria-label="Attention Notice" class="page-notice__status" id="attention-status">
            <svg aria-hidden="true" class="icon icon--attention-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-attention-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Please check the following details:</h3>
        <p><a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</p>
    </div>
</section>
`;

export const information = () => `
<section class="page-notice page-notice--attention" role="region" aria-labelledby="attention-status">
    <div class="page-notice__header">
        <h2 aria-label="Attention Notice" class="page-notice__status" id="attention-status">
            <svg aria-hidden="true" class="icon icon--attention-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-attention-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Please check the following details:</h3>
        <p><a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</p>
    </div>
</section>
`;

export const footer = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p><a href="#">Spam and Eggs From the Cow's Perspective</a> (paperback).</p>
    </div>
    <div class="page-notice__footer">
        <button class="btn">Action</button>
    </div>
</section>
`;

export const longText = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
`;

export const longTextAndLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="#">www.ebay.com</a></p>
    </div>
</div>
`;

export const multiParagraph = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const multiParagraphWithLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <h2 aria-label="Confirmation Notice" class="page-notice__status" id="confirmation-status">
            <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="#">www.ebay.com</a></p>
    </div>
</div>
`;
