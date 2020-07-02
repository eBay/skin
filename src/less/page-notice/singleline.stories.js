export default { title: 'Page Notice/Singleline' };

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
        <h3 class="page-notice__title"><b>Congrats:</b> You just listed <a href="#">"Spam and Eggs From the Cow's Perspective</a> (paperback)."</h3>
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
        <h3 class="page-notice__title"><b>Error:</b> <a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.</h3>
    </div>
</section>
`;

export const information = () => `
<section class="page-notice page-notice--information" role="region" aria-labelledby="information-status">
    <div class="page-notice__header">
        <h2 aria-label="Information Notice" class="page-notice__status" id="information-status">
            <svg aria-hidden="true" class="icon icon--information-filled" focusable="false" height="24" width="24">
                <use xlink:href="#icon-information-filled"></use>
            </svg>
        </h2>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title"><b>Hooray:</b> free shipping on your next pair of shoes! <a href="#">Learn more</a>.</h3>
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
        <h3 class="page-notice__title"><b>Congrats:</b> You just listed <a href="#">"Spam and Eggs From the Cow's Perspective</a> (paperback)."</h3>
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
        <h3 class="page-notice__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
</div>
`;
