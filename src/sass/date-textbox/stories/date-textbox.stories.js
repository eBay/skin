export default { title: "Skin/Date Textbox" };

export const base = () => `
<span class="date-textbox">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`;

export const disabled = () => `
<span class="date-textbox textbox--disabled">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" disabled />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar" disabled>
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="date-textbox demo-a11y-text-spacing">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`;
