export default { title: 'Button/Dimensions' };

export const large = () => `
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use href="#icon-settings"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

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
