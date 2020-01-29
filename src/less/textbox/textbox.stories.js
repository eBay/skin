export default { title: 'textbox' };

export const singleLine = () => `
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const multiLine = () => `
<span class="textbox">
    <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
</span>
`;

export const Icon = () => `
<span class="textbox">
    <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-messages"></use>
    </svg>
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const iconEnd = () => `
<span class="textbox textbox--icon-end">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
        <use xlink:href="#icon-messages"></use>
    </svg>
</span>
`;

export const Large = () => `
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const inheritFontSize200Percent = () => `
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const inheritColorGreen = () => `
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const Fluid = () => `
<div class="textbox">
    <input class="textbox__control textbox__control--fluid" type="text" placeholder="placeholder text" />
</div>
`;

export const singleLineRTL = () => `
<div class="demo" dir="rtl">
    <span class="textbox">
        <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
 </div>
`;

export const multiLineRTL = () => `
<div class="demo" dir="rtl">
    <span class="textbox">
        <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
    </span>
</div>
`;

export const iconRTL = () => `
<div class="demo" dir="rtl">
    <span class="textbox">
        <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-messages"></use>
        </svg>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const iconEndRTL = () => `
<div class="demo" dir="rtl">
    <span class="textbox textbox--icon-end">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <svg class="icon icon--messages" focusable="false" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-messages"></use>
        </svg>
    </span>
</div>
`;

export const actionableIcon = () => `
<span class="textbox textbox--icon-end">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
    <button class="icon-btn" type="button" aria-label="Choose Contact">
        <svg aria-hidden="true" class="icon icon--messages" focusable="false" width="16" height="16">
            <use xlink:href="#icon-messages"></use>
        </svg>
    </button>
</span>
`;