export default { title: 'Button/Borderless' };

export const base = () => `<button class="btn btn--borderless">
    <span class="btn__cell">
        <span class="btn__text">Button</span>
        <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const disabled = () => `<button class="btn btn--borderless" disabled="true">
    <span class="btn__cell">
        <span class="btn__text">Button</span>
        <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const ariaDisabled = () => `<button class="btn btn--borderless" aria-disabled="true">
    <span class="btn__cell">
        <span class="btn__text">Button</span>
        <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const empty = () => `<button class="btn btn--borderless" disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;
