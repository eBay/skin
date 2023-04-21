export default { title: "Button/Base" };

export const textOnly = () => '<button class="btn">Button</button>';

export const form = () => '<button class="btn btn--form">Button</button>';

export const formSlim = () =>
    '<button class="btn btn--form btn--slim"><svg class="icon icon--chevron-down-12" width="16" height="16"><use href="#icon-chevron-down-12"></use></svg></button>';

export const iconAndText = () => `
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--settings-16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn" disabled>
    <span class="btn__cell">
        <svg class="icon icon--settings-16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner-24" focusable="false" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const formBusy = () => `
<button class="btn btn--form" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner-24" focusable="false" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const submit = () => '<button type="submit" class="btn">Submit</button>';

export const reset = () => '<button type="reset" class="btn">Reset</button>';
