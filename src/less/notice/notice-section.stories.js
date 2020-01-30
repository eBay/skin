export default { title: 'notice-section' };

export const sectionNotice = () => `
<div class="section-notice" role="region">
    <span class="section-notice__content">
        <p>Here you go</p>
    </span>
</div>
<div class="section-notice section-notice--attention" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
    </span>
</div>
<div class="section-notice section-notice--confirmation" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Congrats! You are the highest bidder!</p>
    </span>
</div>
<div class="section-notice section-notice--information" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Try refining your search term for more results.</p>
    </span>
</div>
`;

export const sectionNoticeButtonCTA = () => `
<div class="section-notice" role="region">
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Click button to get More info</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
<div class="section-notice section-notice--attention" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
<div class="section-notice section-notice--information" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
<div class="section-notice section-notice--confirmation" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Congrats! You are the highest bidder!</p>
        <p>Here's a second line</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action button</button>
</div>
`;

export const sectionNoticeLinkCTA = () => `
<div class="section-notice section-notice--attention" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
<div class="section-notice section-notice--information" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
<div class="section-notice section-notice--confirmation" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Congrats! You are the highest bidder!</p>
        <p>Here's a second line</p>
    </span>
    <a href="https://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--transparent">Action button</a>
</div>
`;

export const sectionNoticeMultiline = () => `
<div class="section-notice section-notice--guidance" role="region">
    <span class="section-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
<div class="section-notice section-notice--attention" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
<div class="section-notice section-notice--confirmation" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
<div class="section-notice section-notice--information" role="region">
    <h3 class="section-notice__status">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </h3>
    <span class="section-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
`;