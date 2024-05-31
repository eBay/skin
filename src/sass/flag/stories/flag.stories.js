export default { title: "Skin/Flag" };

export const insideHeading = () => `
<h2>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</h2>
`;

export const RTLInsideHeading = () => `
<div dir="rtl">
    <h2>
        <svg class="flag flag--us">
            <use href="#flag-us"></use>
        </svg>
        <span style="vertical-align: middle;">United States of America</span>
    </h2>
</div>
`;

export const insideParagraph = () => `
<p>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`;

export const insideLink = () => `
<a href="http://www.ebay.com">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span>United States of America</span>
</a>
`;

export const beforeLink = () => `
<svg class="flag flag--us">
    <use href="#flag-us"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">United States of America</span>
</a>
`;

export const textSpacing = () => `
<p class="demo-a11y-text-spacing">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`;
