export default { title: 'Notice/Page' };

export const celebration = () => `
<div class="page-notice page-notice--celebration" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p><span class="page-notice__title">Congrats!</span><br/>You are the highest bidder!</p>
    </span>
</div>
`;

export const confirmation = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Congrats! You are the highest bidder!</p>
    </span>
</div>
`;

export const attention = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" class="icon icon--attention-filled"  focusable="false" height="24" width="24">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Something went wrong. Please try again.</p>
    </span>
</div>
`;

export const information = () => `
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" class="icon icon--information-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Try refining your search term for more results.</p>
    </span>
</div>
`;

export const longWordInConstrainedWidth = () => `
<div style="width: 300px;">
    <div class="page-notice page-notice--confirmation" role="region">
        <h3 class="page-notice__status">
            <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </h3>
        <span class="page-notice__content">
            <p>We got your request. We're checking the info you gave us, and we'll email you at abcdefghijklmnopqrstuvwxyz@abcdefghijklmnopqrstuvwxyz.com in a few minutes with the results.</p>
        </span>
    </div>
</div>
`;
