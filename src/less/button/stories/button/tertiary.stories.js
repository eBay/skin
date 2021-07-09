export default { title: 'Button/Button/Tertiary' };

export const tertiary = () => `
<button class="btn btn--tertiary">Tertiary</button
`;

export const disabled = () => `
<button disabled class="btn btn--tertiary">Tertiary</button
`;

export const loading = () => `
<button class="btn btn--tertiary" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="btn__cell">
        <span class="progress-spinner">
    </span>
</button>
`;
