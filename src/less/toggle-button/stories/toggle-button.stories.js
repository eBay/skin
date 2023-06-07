export default { title: "Skin/Toggle Button" };

export const toggledOff = () => `
<button type="button" class="toggle-button" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Text Button Toggled Off</span>
    </span>
</button>
`;

export const toggledOn = () => `
<button type="button" class="toggle-button" aria-pressed="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">Text Button Toggled On</span>
    </span>
</button>
`;
