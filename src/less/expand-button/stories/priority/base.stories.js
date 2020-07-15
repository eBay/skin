export default { title: 'Expand Button/Priority/Base' };

export const active = () => `
<button type="button" class="expand-btn">
     <span class="expand-btn__cell">
         <span>Button</span>
         <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
             <use xlink:href="#icon-dropdown"></use>
         </svg>
     </span>
 </button>
`;

export const disabled = () => `
<button type="button" class="expand-btn" disabled>
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const inheritColourGreen = () => `
<button type="button" class="expand-btn" style="color: green">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

inheritColourGreen.story = {
    name: 'Inherit Colour (Green)'
}
