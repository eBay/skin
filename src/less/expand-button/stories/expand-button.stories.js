export default { title: 'Expand Button' };

export const collapsed = () => `
<button type="button" class="expand-btn" aria-expanded="false">
     <span class="expand-btn__cell">
         <span>Button</span>
         <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
             <use xlink:href="#icon-dropdown"></use>
         </svg>
     </span>
 </button>
`;

export const expanded = () => `
<button type="button" class="expand-btn" aria-expanded="true">
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

export const large = () => `
<button type="button" class="expand-btn expand-btn--large" aria-expanded="true">
     <span class="expand-btn__cell">
         <span>Button</span>
         <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
             <use xlink:href="#icon-dropdown"></use>
         </svg>
     </span>
 </button>
`;

export const longText = () => `
<button type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <span>Button with a lot of text that should just get wider and wider and wider</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const fixedWidth = () => `
<button style="width: 200px;" type="button" class="expand-btn">
    <span class="expand-btn__cell">
        <span>Button with a lot of text that should just get taller and taller and taller</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;
