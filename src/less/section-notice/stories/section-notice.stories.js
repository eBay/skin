export default { title: 'Section Notice' };

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

export const confirmationWithButton = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
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
