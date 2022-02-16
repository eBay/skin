export default { title: 'Button/Button/Tertiary' };

export const tertiary = () => `
<button class="btn btn--tertiary">Tertiary</button
`;

export const disabled = () => `
<button disabled class="btn btn--tertiary">Tertiary</button
`;

export const loading = () => `
<button class="btn btn--tertiary" aria-disabled="true" aria-label="Loading" aria-live="polite">
    <span class="progress-spinner" aria-label="Busy" role="img">
        <svg aria-hidden="true" class="icon icon--spinner" focusable="false">
            <use xlink:href="#icon-spinner"></use>
        </svg>
    </span>
</button>
`;
