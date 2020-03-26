export default { title: 'actionable' };

export const iconButtonMenu = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
`;

export const iconButtonSettings = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</button>
`;

export const iconLinkMenu = () => `
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const iconLinkSettings = () => `
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</a>
`;

export const iconButtonDisabled = () => `
<button type="button" class="icon-btn" aria-label="menu" disabled>
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
 </button>
 `;

export const iconLinkDisabled = () => `
<a class="icon-link">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const iconButtonPartiallyDisabled = () => `
<button type="button" class="icon-btn" aria-label="menu" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
`;

export const iconLinkPartiallyDisabled = () => `
<a class="icon-link" href="http://www.ebay.com" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
`;

export const imageLink = () => `
<a class="img-link" href="http://www.ebay.com"><img src="https://ebay.github.io/skin/static/iphone.jpg" alt="iphone" /></a>
`;

export const imageButton = () => `
<button class="img-btn" type="button"><img src="https://ebay.github.io/skin/static/iphone.jpg" alt="iphone" /></button>
`;
