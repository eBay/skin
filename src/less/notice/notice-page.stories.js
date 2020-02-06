export default { title: 'notice-page' };

export const pageNotice = () => `
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

export const pageNoticeLink = () => `
<div class="page-notice page-notice--celebration" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p><span class="page-notice__title">Congrats!</span><br/>You are the <a href="#">highest bidder</a>!</p>
    </span>
</div>
<div class="page-notice page-notice--confirmation" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p><a href="#">Congrats!</a></p>
        <p>You are the highest bidder!</p>
    </span>
</div>
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Something went wrong. <a href="#">Please try again.</a></p>
    </span>
</div>
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Try refining your search term for more results.</p>
        <p><a href="#">Please try again.</a></p>
    </span>
</div>
`;

export const pageNoticeButtonCTA = () => `
<div class="page-notice page-notice--celebration" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p><span class="page-notice__title">Congrats!</span><br/>You are the highest bidder!</p>
    </span>
    <button class="btn">Action button</button>
</div>
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
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
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
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
`;

export const pageNoticeLinkCTA = () => `
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
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
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
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
`;

export const multilineNotice = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
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
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
`;

export const multilineNoticeLinks = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="#">www.ebay.com</a></p>
    </span>
</div>
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
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="#">www.ebay.com</a></p>
    </span>
</div>
`;

export const multilineNoticeButtonCTA = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
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
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
`;

export const multilineNoticeLinkCTA = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
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
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
`;

export const multipleParagraphNotice = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
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
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const multipleParagraphNoticeLink = () => `
<div class="page-notice page-notice--attention" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="#">www.ebay.com</a></p>
    </span>
</div>
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
<div class="page-notice page-notice--information" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="#">www.ebay.com</a></p>
    </span>
</div>
`;

export const noticeLongWordBreakMaxWidthSet = () => `
<div class="page-notice page-notice--confirmation" style="width: 300px;" role="region">
    <h3 class="page-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="page-notice__content">
        <p>We got your request. We're checking the info you gave us, and we'll email you at abcdefghijklmnopqrstuvwxyz@abcdefghijklmnopqrstuvwxyz.com in a few minutes with the results.</p>
    </span>
</div>
`;