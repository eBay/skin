export default { title: 'Expand Button/Cascade' };

export const color = () => `
<button type="button" class="expand-btn" style="color: green">
    <span class="expand-btn__cell">
        <span>Button</span>
        <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
            <use xlink:href="#icon-dropdown"></use>
        </svg>
    </span>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const iconAndTextRTL = () => `
<div dir="rtl">
    <button type="button" class="expand-btn">
        <span class="expand-btn__cell">
            <svg aria-hidden="true" class="icon icon--settings" focusable="false" height="16" width="16">
                <use xlink:href="#icon-settings"></use>
            </svg>
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;

export const centeredRTL = () => `
<div dir="rtl">
    <button type="button" class="expand-btn" style="width: 200px;">
        <span class="expand-btn__cell expand-btn__cell--center">
            <span>Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
</div>
`;
