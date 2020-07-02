export default { title: 'Textbox/RTL' };

export const singleLine = () => `
<div dir="rtl">
    <span class="textbox">
        <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
 </div>
`;

export const multiLine = () => `
<div dir="rtl">
    <span class="textbox">
        <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
    </span>
</div>
`;
