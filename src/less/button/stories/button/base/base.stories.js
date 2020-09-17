export default { title: 'Button/Base' };

export const textOnly = () => '<button class="btn">Button</button>';

export const iconOnly = () => `
<button type="button" class="btn btn--icon-only">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
    </span>
</button>
`;

export const iconAndText = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const large = () => `
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
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

export const formSubmit = () => '<button type="submit" class="btn">Submit</button>';

export const formReset = () => '<button type="reset" class="btn">Reset</button>';
