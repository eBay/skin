export default { title: 'Fake Button/Primary' };

export const nonCriticalIcon = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const nonCriticalIconDisabled = () => `
<a class="fake-btn fake-btn--primary">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const nonCriticalIconPartiallyDisabled = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use xlink:href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;
