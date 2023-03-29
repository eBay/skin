export default { title: 'Page Notice' };

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
        <svg class="icon icon--confirmation-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
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
        <svg class="icon icon--confirmation-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
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
        <svg class="icon icon--attention-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
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
        <svg class="icon icon--attention-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
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
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
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
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
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

export const InformationWithParagraph = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <p>You have opted into eBay Pay</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const dismissableWithTitle = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`;

export const dismissableWithoutTitle = () => `
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--information-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Opt into eBay payments before Jan 12th to pay no selling fees.</h3>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`;

export const formErrors = () => `
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--attention-filled-16" focusable="false" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">We found problems with your form.</h2>
        <p><a href="#">Error 1</a>, <a href="#">Error 2</a>, <a href="#">Error 3</a>.</p>
    </div>
</section>
`;
