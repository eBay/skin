export default { title: 'Button/Button/Tertiary' };

export const textOnly = () => `
<button class="btn btn--tertiary">Tertiary</button
`;

export const disabled = () => `
<button disabled class="btn btn--tertiary">Tertiary</button
`;

export const busy = () => `
<button class="btn btn--tertiary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner" focusable="false" aria-hidden="true">
                <use xlink:href="#icon-spinner"></use>
            </svg>
        </span>
    </span>
</button>
`;
