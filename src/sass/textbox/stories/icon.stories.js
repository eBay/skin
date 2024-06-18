export default { title: "Skin/Textbox/Icon" };

export const base = () => `
<span class="textbox">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-mail-24"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const end = () => `
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-mail-24"></use>
    </svg>
</span>
`;

export const dual = () => `
<span class="textbox">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-search-24"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-mail-24"></use>
    </svg>
</span>
`;

export const actionable = () => `
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
            <use href="#icon-mail-24"></use>
        </svg>
    </button>
</span>
`;

export const dualActionable = () => `
<span class="textbox">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-search-24"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-mail-24"></use>
        </svg>
    </button>
</span>
`;

export const actionableLarge = () => `
<span class="textbox">
    <input class="textbox__control textbox__control--large" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
            <use href="#icon-mail-24"></use>
        </svg>
    </button>
</span>
`;

export const dualActionableLarge = () => `
<span class="textbox">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-search-24"></use>
    </svg>
    <input class="textbox__control textbox__control--large" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-mail-24"></use>
        </svg>
    </button>
</span>
`;

export const fullyDecorated = () => `
<span class="textbox">
    <svg class="icon icon--search-24" width="16" height="16" aria-hidden="true">
        <use href="#icon-search-24"></use>
    </svg>
    <span>$</span>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <span>%</span>
    <svg class="icon icon--mail-24" width="16" height="16" aria-hidden="true">
        <use href="#icon-mail-24"></use>
    </svg>
</span>
`;
