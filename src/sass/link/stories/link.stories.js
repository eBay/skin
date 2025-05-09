export default { title: "Skin/Link" };

export const base = () => `
<a href="https://www.ebay.com/urw/ZTE-AXON-7-Mini-32GB-Ion-Gold-Unlocked-Smartphone/product-reviews/230215749?_itm=222972816761">Link</a>
`;

export const action = () => `
<a class="action-link" href="https://www.ebay.com/?r=${Math.floor(
    Math.random() * Math.floor(1000),
)}">See all 17 Reviews</a>
`;

export const RTL = () => `
<div dir="rtl">
    <a class="action-link" href="https://www.ebay.com/?r=${Math.floor(
        Math.random() * Math.floor(1000),
    )}">See all 17 Reviews</a>
<div>
`;

export const fake = () =>
    `<button class="fake-link" type="button">Button</button>`;

export const disabledFake = () =>
    `<button class="fake-link" disbaled type="button">Button</button>`;

export const nav = () =>
    `<a class="nav-link" href="https://www.ebay.com/?r=${Math.floor(
        Math.random() * Math.floor(1000),
    )}">Link 1</a></li>`;

export const legal = () => `
<a class="legal-link" href="https://www.ebay.com/urw/ZTE-AXON-7-Mini-32GB-Ion-Gold-Unlocked-Smartphone/product-reviews/230215749?_itm=222972816761">Link</a>
`;

export const legalFake = () =>
    `<button class="fake-link legal-link" type="button">Button</button>`;

export const textSpacing = () => `
<a class="action-link demo-a11y-text-spacing" href="https://www.ebay.com/?r=${Math.floor(
    Math.random() * Math.floor(1000),
)}">Text Spacing</a>
`;
