export default { title: 'Details' };

export const closed = () => `
<details class="details">
    <summary class="details__summary">
        <span class="details__label">Details</span>
        <span class="details__icon" hidden>
            <svg class="icon icon--dropdown" focusable="false" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</details>
`;

export const open = () => `
<details class="details" open>
    <summary class="details__summary">
        <span class="details__label">Details</span>
        <span class="details__icon" hidden>
            <svg class="icon icon--dropdown" focusable="false" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</details>
`;

export const centered = () => `
<details class="details" open>
    <summary class="details__summary details__summary--center">
        <span class="details__label">Details</span>
        <span class="details__icon" hidden>
            <svg class="icon icon--dropdown" focusable="false" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</details>
`;

export const small = () => `
<details class="details" open>
    <summary class="details__summary details__summary--small">
        <span class="details__label">Details</span>
        <span class="details__icon" hidden>
            <svg class="icon icon--dropdown" focusable="false" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</details>
`;
