export default { title: 'Notice/Section' };

export const base = () => `
<div class="section-notice" role="region">
    <span class="section-notice__content">
        <p>Here you go</p>
    </span>
</div>
`;

export const confirmation = () => `
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
`;

export const attention = () => `
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
`;

export const information = () => `
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

export const longText = () => `
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
`;
