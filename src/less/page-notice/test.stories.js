export default { title: 'Page Notice/Page Notice/Tests' };

export const longText = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Your new listing is live:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</div>
`;

export const longTextAndLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Your new listing is live:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><a href="#">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const multiParagraph = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Your new listing is live:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</div>
`;

export const multiParagraphWithLink = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Your new listing is live:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p><a href="#">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const noTitle = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__header">
            <svg class="icon icon--confirmation-filled" focusable="false" height="24" width="24" role="img" aria-label="Confirmation">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <p><strong>Congrats:</strong> You just listed <a href="#">"Spam and Eggs From the Cow's Perspective</a> (paperback)."</p>
        </div>
    </div>
</section>
`;

export const noIcon = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__first_col">
        <div class="page-notice__main">
            <h3 class="page-notice__title">Your new listing is live:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</section>
`;
