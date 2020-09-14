export default { title: 'Link' };

export const base = () => `
<a href="https://www.ebay.com/urw/ZTE-AXON-7-Mini-32GB-Ion-Gold-Unlocked-Smartphone/product-reviews/230215749?_itm=222972816761">Link</a>
`

export const action = () => `
<a class="action-link" href="https://www.ebay.com/?r=${Math.floor(Math.random() * Math.floor(1000))}">See all 17 Reviews</a>
`;

export const fake = () => `<button class="fake-link" type="button">Button</button>`;

export const fakeAction = () => `<button class="fake-link fake-link--action" type="button">Button</button>`;

export const nav = () => `<a class="nav-link" href="https://www.ebay.com/?r=${Math.floor(Math.random() * Math.floor(1000))}">Link 1</a></li>`;

export const image = () => `<a class="img-link" href="http://www.ebay.com"><img src="https://ebay.github.io/skin/static/iphone.jpg" alt="iphone" /></a>`;
