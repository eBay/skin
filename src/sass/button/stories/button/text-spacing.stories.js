export default { title: "Skin/Button/Text Spacing" };

export const textOnly = () =>
    '<button class="btn demo-a11y-text-spacing">Button</button>';

export const form = () =>
    '<button class="btn btn--form demo-a11y-text-spacing">Button</button>';

export const iconAndText = () => `
<button type="button" class="btn demo-a11y-text-spacing">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
