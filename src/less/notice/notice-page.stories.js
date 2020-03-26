export default { title: 'notice-page' };

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

export const celebrationWithButtonCTA = () => `
<div class="page-notice page-notice--celebration" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p><span class="page-notice__title">Congrats!</span><br/>You are the highest bidder!</p>
    </span>
    <button class="btn">Action Button</button>
</div>
`;

export const confirmationWithButtonCTA = () => `
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
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;

export const attentionWithButtonCTA = () => `
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
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;

export const informationWithButtonCTA = () => `
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
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;

export const confirmationWithLinkCTA = () => `
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

export const attentionWithLinkCTA = () => `
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

export const informationWithLinkCTA = () => `
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

export const longText = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
`;

export const longTextAndLink = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="#">www.ebay.com</a></p>
    </span>
</div>
`;

export const longTextWithButtonCTA = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;

export const longTextWithLinkCTA = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action Link</a>
</div>
`;

export const multiParagraph = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const multiParagraphWithLink = () => `
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="#">www.ebay.com</a></p>
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
