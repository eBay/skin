export default { title: 'Button/Button/Base' };

export const textOnly = () => '<button class="btn">Button</button>';

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

export const busy = () => `
<button class="btn btn--busy" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const busyLarge = () => `
<button class="btn btn--large btn--busy" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner progress-spinner--large">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
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

export const wide = () => '<button class="btn btn--wide">Button</button>';
