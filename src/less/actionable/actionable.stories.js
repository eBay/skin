export default { title: 'actionable' };

export const iconButton = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
<button aria-label="information" type="button" class="icon-btn">
    <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</button>
`;

export const iconLink = () => `
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
<a aria-label="information" class="icon-link" href="http://www.ebay.com">
    <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</a>
`;

export const iconButtonDisabled = () => `
<button type="button" class="icon-btn" aria-label="menu" disabled>
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
 </button>
<button type="button" class="icon-btn" aria-label="information" disabled>
     <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</button>
`;

export const iconLinkDisabled = () => `
<a class="icon-link">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
 <a class="icon-link">
    <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</a>
`;

export const iconButtonPartiallyDisabled = () => `
<button type="button" class="icon-btn" aria-label="menu" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
<button type="button" class="icon-btn" aria-label="information" aria-disabled="true">
    <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</button>
`;

export const iconLinkPartiallyDisabled = () => `
<a class="icon-link" href="http://www.ebay.com" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</a>
<a class="icon-link" href="http://www.ebay.com" aria-disabled="true">
    <svg class="icon icon--information" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-information"></use></svg>
</a>
`;

export const imageLink = () => `
<a class="img-link" href="http://www.ebay.com"><img src="/static/iphone.jpg" alt="iphone" /></a>
`;

export const imageButton = () => `
<button class="img-btn" type="button"><img src="/static/iphone.jpg" alt="iphone" /></button>
`;