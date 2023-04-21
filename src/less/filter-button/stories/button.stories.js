export default { title: "Filter/Button" };

export const base = () => `
<button type="button" class="filter-button">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
`;

export const pressed = () => `
<button type="button" class="filter-button" aria-pressed="true">
    <span class="filter-button__cell">Button</span>
</button>
`;

export const truncated = () => `
<button type="button" class="filter-button">
    <span class="filter-button__cell">Button with lots of text that will become truncated</span>
</button>
`;

export const disabled = () => `
<button type="button" class="filter-button" disabled>
    <span class="filter-button__cell">Button</span>
</button>
`;
