export default { title: 'Notice/Page/Long Text' };

export const base = () => `
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

export const withLink = () => `
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

export const withButtonCTA = () => `
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

export const withLinkCTA = () => `
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

