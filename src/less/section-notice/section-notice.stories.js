export default { title: 'Section Notice/Section Notice' };

export const base = () => `
<div class="section-notice" role="region">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const confirmation = () => `
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

export const confirmationLink = () => `
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

export const RTL = () => `
<div dir="rtl">
    <div class="section-notice section-notice--confirmation" role="region">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <h3 class="section-notice__title">Your price has been updated</h3>
        </div>
        <div class="section-notice__footer">
            <button class="fake-link">Dismiss</button>
        </div>
    </div>
</div>
`;

export const attention = () => `
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
        <button class="fake-link">Add</button>
    </div>
</div>
`;

export const information = () => `
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
        <button class="fake-link">Send Offers</button>
    </div>
</div>
`;

export const informationLink = () => `
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

export const noFooter = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
    </div>
</div>
`;

export const longText = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
</div>
`;

export const buttonCta = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg role="img" focusable="false" class="icon--attention-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <span class="section-notice__main">
        <h3 class="section-notice__title">Congrats! You are the highest bidder!</h3>
        <p>Here's a second line</p>
    </span>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;
