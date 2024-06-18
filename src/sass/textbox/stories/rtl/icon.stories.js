export default { title: "Skin/Textbox/RTL/Icon" };

export const base = () => `
<div dir="rtl">
    <span class="textbox">
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-mail-24"></use>
        </svg>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const end = () => `
<div dir="rtl">
    <span class="textbox textbox--icon-end">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-mail-24"></use>
        </svg>
    </span>
</div>
`;

export const dual = () => `
<div dir="rtl">
    <span class="textbox textbox--icon-end">
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-24"></use>
        </svg>

        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
            <use href="#icon-mail-24"></use>
        </svg>
    </span>
</div>
`;

export const actionable = () => `
<div dir="rtl">
    <span class="textbox textbox--icon-end">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <button class="icon-btn" type="button" aria-label="Choose Contact">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-mail-24"></use>
            </svg>
        </button>
    </span>
</div>
`;

export const dualActionable = () => `
<div dir="rtl">
    <span class="textbox textbox--icon-end">
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
</div>
`;

export const fullyDecorated = () => `
<div dir="rtl">
    <span class="textbox textbox--icon-end">
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
</div>
`;
