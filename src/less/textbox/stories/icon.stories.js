export default { title: 'Textbox/Icon' };

export const base = () => `
<span class="textbox">
    <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-messages"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const end = () => `
<span class="textbox textbox--icon-end">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-messages"></use>
    </svg>
</span>
`;

export const dual = () => `
<span class="textbox textbox--icon-end">
    <svg class="icon icon--search" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-messages"></use>
    </svg>
</span>
`;

export const actionable = () => `
<span class="textbox textbox--icon-end">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg aria-hidden="true" class="icon icon--messages" focusable="false" width="16" height="16">
            <use xlink:href="#icon-messages"></use>
        </svg>
    </button>
</span>
`;

export const dualActionable = () => `
<span class="textbox textbox--icon-end">
    <svg class="icon icon--search" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-messages"></use>
        </svg>
    </button>
</span>
`;
