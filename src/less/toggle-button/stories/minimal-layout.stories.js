export default { title: "Skin/Toggle Button/Minimal Layout" };

export const toggledOff = () => `
<button type="button" class="toggle-button" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`;

export const toggledOn = () => `
<button type="button" class="toggle-button" aria-pressed="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`;
