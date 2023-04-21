export default { title: "Image Placeholder" };

export const insideHeading = () => `
<h2>
    <svg class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
`;

export const RTLInsideHeading = () => `
<div dir="rtl">
    <h2>
        <svg class="image-placeholder">
            <use href="#image-placeholder"></use>
        </svg>
    </h2>
</div>
`;

export const differentWidths = () => `
<p>
    <svg class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
`;

export const inContainerVariableWidth = () => `
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
`;
