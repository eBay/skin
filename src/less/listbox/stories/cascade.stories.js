export default { title: "Skin/Listbox/Cascade" };

export const RTL = () => `
<span class="listbox" dir="rtl">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const color = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" style="color: red" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const fontSize = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" style="font-size: 200%" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;
