export default { title: "Skin/Section Notice/Legacy" };

export const legacy = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled-16">
            <use href="#icon-confirmation-filled-16"></use>
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
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled-16">
            <use href="#icon-confirmation-filled-16"></use>
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
