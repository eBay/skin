export default { title: 'Section Notice/Section Notice' };

export const base = () => `
<div class="section-notice" role="region">
    <div class="section-notice__main">
        <p>Your price has been updated.</p>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link fake-link--action">Dismiss</button>
    </div>
</div>
`;

export const confirmation = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__first_col">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <p>Your price has been updated.</p>
        </div>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link fake-link--action">Dismiss</button>
    </div>

</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__first_col">

        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <p>Your price has been updated</p>
        </div>
        </div>
        <div class="section-notice__footer">
            <button class="fake-link fake-link--action">Dismiss</button>
        </div>
    </div>
</div>
`;

export const attention = () => `
<div class="section-notice section-notice--attention" role="region">
<div class="section-notice__first_col">

    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Add required aspects to keep item live.</p>
    </div>
    </div>

    <div class="section-notice__footer">
        <button class="fake-link fake-link--action">Add</button>
    </div>
</div>
`;

export const information = () => `
<div class="section-notice section-notice--information" role="region">
<div class="section-notice__first_col">

    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Send offers to interested buyers.</p>
    </div>
    </div>

    <div class="section-notice__footer">
        <button class="fake-link fake-link--action">Send Offers</button>
    </div>
</div>
`;

export const noFooter = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__first_col">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <p>Your price has been updated.</p>
        </div>
    </div>
</div>
`;

export const longText = () => `
<div class="section-notice section-notice--confirmation" role="region">
<div class="section-notice__first_col">

    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    
    <div class="section-notice__main">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
</div>
`;

export const buttonCta = () => `
<div class="section-notice section-notice--confirmation" role="region">
<div class="section-notice__first_col">

    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg role="img" focusable="false" class="icon--attention-filled">
            <title>Comfirmation</title>
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <span class="section-notice__main">
        <p>Congrats! You are the highest bidder!</p>
        <p>Here's a second line</p>
    </span>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link fake-link--action">Dismiss</button>
    </div>
</div>
`;
