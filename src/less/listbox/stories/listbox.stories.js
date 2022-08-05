export default { title: 'Listbox' };

export const unselected = () => `
<span class="listbox">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
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
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
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
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="true">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;
