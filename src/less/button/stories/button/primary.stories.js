export default { title: 'Button/Button/Primary' };

export const textOnly = () => '<button class="btn btn--primary">Button</button>';

export const iconOnly = () => `
<button type="button" class="btn btn--primary btn--icon-only">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

export const iconAndText = () => `
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button type="button" class="btn btn--primary">
        <span class="btn__cell">
            <svg class="icon icon--close" width="16" height="16" style="margin-right: 0px;"><use xlink:href="#icon-close"></use></svg>
            <span style="margin-right: 8px;">Button</span>
        </span>
    </button>
</div>
`;

export const disabled = () => `
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Button</span>
    </span>
</button>
`;
