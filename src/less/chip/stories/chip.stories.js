export default { title: "Skin/Chip" };

export const staticChip = () => `
<span class="chip">
    <span class="chip__text">Football</span>
</span>
`;

export const interactiveChip = () => `
<span class="chip">
    <span id="chip-interactive-1-text" class="chip__text">Football</span>
    <button class="icon-btn chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-text">
        <svg class="icon icon--close-16" focusable="false" width="14" height="14" aria-hidden="true">
            <use href="#icon-close-16"></use>
        </svg>
    </button>
</span>
`;
