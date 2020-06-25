export default { title: 'Button/Default' };

export const button = () => '<button class="btn">Button</button>';

export const disabled = () => '<button class="btn" disabled>Button</button>';

export const inheritColorRed = () => '<button class="btn" style="color: red;">Button</button>';

export const inheritFontSize200Percent = () => '<button class="btn" style="font-size: 200%">Button</button>';

inheritFontSize200Percent.story = {
    name: 'Inherit Font-Size (200%)'
}

export const formSubmit = () => '<button type="submit" class="btn">Submit</button>';

export const formReset = () => '<button type="reset" class="btn">Reset</button>';

export const large = () => '<button class="btn btn--large">Button</button>';

export const fluid = () => '<button class="btn btn--fluid">Button</button>';

export const fiftyPercentWidth = () => '<button class="btn" style="width: 50%;">Button</button>';

fiftyPercentWidth.story = {
    name: '50% Width'
}

export const fixedWidth = () => `
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`;

export const fixedWidthFixedHeightIntentionallyBroken = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`;

fixedWidthFixedHeightIntentionallyBroken.story = {
    name: 'Fixed Width, Fixed Height (intentionally broken)'
}

export const fixedWidthFixedHeightTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`;

fixedWidthFixedHeightTruncated.story = {
    name: 'Fixed Width, Fixed height, Truncated'
}

export const criticalIcon = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
    </span>
</button>
`;

