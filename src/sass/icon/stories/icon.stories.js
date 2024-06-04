export default { title: "Skin/Icon" };

export const insideHeading = () => `
<h2>
    <svg class="icon icon--information-24">
        <use href="#icon-information-24"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</h2>
`;

export const RTLInsideHeading = () => `
<div dir="rtl">
    <h2>
        <svg class="icon icon--information-24">
            <use href="#icon-information-24"></use>
        </svg>
        <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
    </h2>
</div>
`;

export const insideParagraph = () => `
<p>
    <svg class="icon icon--information-24">
        <use href="#icon-information-24"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</p>
`;

export const insideLink = () => `
<a href="http://www.ebay.com">
    <svg class="icon icon--external-link-24">
        <use href="#icon-external-link-24"></use>
    </svg>
    <span>There was an error with your payment. Please try again.</span>
</a>
`;

export const beforeLink = () => `
<svg class="icon icon--external-link-24">
    <use href="#icon-external-link-24"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</a>
`;
