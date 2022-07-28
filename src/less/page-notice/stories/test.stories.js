export default { title: 'Page Notice/Tests' };

export const RTL = () => `
<div dir="rtl">
    <section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">Your new listing is live.</h2>
        </div>

        <div class="page-notice__footer">
            <button class="fake-link">Dismiss</button>
        </div>
    </section>
<div>
`;

export const longText = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`;

export const legacy = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay.</h2>
        <p>You will now get paid directly.</p>
    </div>
</section>
`;

export const legacyLongText = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">Your new listing is live.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
</div>
`;

export const legacyLongTextAndCTA = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">Your new listing is live.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="page-notice__footer">
            <p><a href="#">www.ebay.com</a></p>
        </div>
</div>
`;

export const legacyMultiParagraph = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">Your new listing is live.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
</div>
`;

export const legacyMultiParagraphWithCTA = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h2 class="page-notice__title">Your new listing is live.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="page-notice__footer">
            <p><a href="#">www.ebay.com</a></p>
        </div>
</div>
`;
