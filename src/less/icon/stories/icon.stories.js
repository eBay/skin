export default { title: 'Icon' };

export const insideHeading = () => `
<h2>
    <svg class="icon icon--information">
        <use xlink:href="#icon-information"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</h2>
`;

export const insideParagraph = () => `
<p>
    <svg class="icon icon--information">
        <use xlink:href="#icon-information"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</p>
`;

export const insideLink = () => `
<a href="http://www.ebay.com">
    <svg class="icon icon--window">
        <use xlink:href="#icon-window"></use>
    </svg>
    <span>There was an error with your payment. Please try again.</span>
</a>
`;

export const beforeLink = () => `
<svg class="icon icon--window">
    <use xlink:href="#icon-window"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</a>
`;
