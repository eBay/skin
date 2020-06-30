export default { title: 'Notice/Page/With Link CTA' };

export const confirmation = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Congrats! You are the highest bidder!</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action Link</a>
</div>
`;

export const attention = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action Link</a>
</div>
`;

export const information = () => `
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action Link</a>
</div>
`;
