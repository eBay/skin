export default { title: "Skin/Listbox" };

export const unselected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const selected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const multiSelected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const subtitleUnselected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 1</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 1
            </span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 2
            </span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 3
            </span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const subtitleSelected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 1
            </span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 2
            </span>
             <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <span class="listbox__description">
                <span class="clipped">.</span>
                More info about option 3
            </span>
            <svg class="icon icon--tick-16" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;
