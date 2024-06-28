export default { title: "Skin/Button/Dimensions" };

export const large = () => `
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const small = () => `
<button type="button" class="btn btn--small">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const formLarge = () =>
    '<button class="btn btn--form btn--large">Button</button>';

export const formSmall = () =>
    '<button class="btn btn--form btn--small">Button</button>';

export const fluid = () => '<button class="btn btn--fluid">Button</button>';

export const fixedWidth = () => `
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`;

export const fixedWidthAndHeight = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`;

export const fixedWidthAndHeightTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`;
