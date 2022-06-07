export default { title: 'Fake Button/Cascade' };

export const RTL = () => `
<div dir="rtl">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`;

export const color = () => `
<div style="color: red;">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`;

export const fontSize = () => `
<div style="font-size: 200%">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--settings" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`;
