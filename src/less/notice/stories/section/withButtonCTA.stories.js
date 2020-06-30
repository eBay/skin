export default { title: 'Notice/Section/With Button CTA' };

export const base = () => `
<div class="section-notice" role="region">
    <span class="section-notice__content">
        <p>Something went wrong. Please try again.</p>
        <p>Click button to get More info</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;

export const confirmation = () => `
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
    <button class="btn btn--secondary btn--transparent">Action Button</button>
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
        <p>Here's a second line</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action Button</button>
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
        <p>Something went wrong. Please try again.</p>
        <p>Here's a second line</p>
    </span>
    <button class="btn btn--secondary btn--transparent">Action Button</button>
</div>
`;
