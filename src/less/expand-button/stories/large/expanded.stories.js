export default { title: 'Expand Button/Large/Expanded' };

export const base = () => `
<button type="button" class="expand-btn expand-btn--large" aria-expanded="true">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const inheritFontSize200Percent = () => `
<button type="button" class="expand-btn expand-btn--large" style="font-size: 200%" aria-expanded="true">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

inheritFontSize200Percent.story = {
    name: 'Inherit Font-Size (200%)'
}
