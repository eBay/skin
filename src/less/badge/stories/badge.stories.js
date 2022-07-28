export default { title: 'Badge' };

export const oneDigit = () => `
<span class="badge">1</span>
`;

export const twoDigits = () => `
<span class="badge">10</span>
`;

export const threeDigits = () => `
<span class="badge">99+</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="badge">+99</span>
</div>
`;
