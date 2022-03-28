export default { title: 'Button/Button/Tertiary' };

export const tertiary = () => `
<button class="btn btn--tertiary">Tertiary</button
`;

export const disabled = () => `
<button disabled class="btn btn--tertiary">Tertiary</button
`;

export const busy = () => `
<button class="btn btn--tertiary btn--busy" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;
