export default { title: 'Textbox/Textbox' };

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

export const large = () => `
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const overrideFontSize = () => `
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const overrideColor = () => `
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%;">
    <span class="textbox">
         <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const inheritColor = () => `
<div style="color: green">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const fluid = () => `
<div class="textbox">
    <input class="textbox__control textbox__control--fluid" type="text" placeholder="placeholder text" />
</div>
`;
