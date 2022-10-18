export default { title: 'Section Notice/Tests' };

export const RTL = () => `
<div dir="rtl">
    <div class="section-notice section-notice--confirmation" role="region">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-small">
                <use href="#icon-confirmation-filled-small"></use>
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

export const RTLDismissable = () => `
<div dir="rtl">
    <section class="page-notice page-notice--information" role="region" aria-label="Information">
        <div class="page-notice__header">
            <svg class="icon icon--information-filled-small" focusable="false" height="16" width="16" role="img" aria-label="Information">
                <use href="#icon-information-filled-small"></use>
            </svg>
        </div>
        <div class="page-notice__main">
            <h3 class="page-notice__title">Notice Title</h3>
            <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
        </div>
        <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
        <div class="page-notice__footer">
            <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--close-small" focusable="false" height="14" width="14">
                    <use href="#icon-close-small"></use>
                </svg>
            </a>
        </div>
    </section>
</div>
`;

export const longText = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-small">
            <use href="#icon-confirmation-filled-small"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
</div>
`;

export const longTextWithCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-small">
            <use href="#icon-confirmation-filled-small"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;

export const legacy = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-small">
            <use href="#icon-confirmation-filled-small"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
`;

export const legacyWithCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--confirmation-filled-small">
            <use href="#icon-confirmation-filled-small"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Your price has been updated.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</div>
`;
