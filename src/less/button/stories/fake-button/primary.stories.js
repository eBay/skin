export default { title: 'Fake Button/Primary' };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="fake-btn fake-btn--primary">Fake Button</a>';

export const iconOnly = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use href="#icon-close"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="fake-btn fake-btn--primary">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--close" width="16" height="16"><use href="#icon-close"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;
