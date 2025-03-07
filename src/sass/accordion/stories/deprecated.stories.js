export default { title: "Skin/Accordion/Deprecated" };

export const closed = () => `
<ul
    class="accordion"
    aria-roledescription="accordion"
>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Shipping and returns
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Text wraps on small screen with this long text
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Specifications
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
</ul>
`;

export const open = () => `
<ul
    class="accordion"
    aria-roledescription="accordion"
>
    <li>
        <details class="details" open>
            <summary class="details__summary">
                <span class="details__label">
                    Shipping and returns
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Text wraps on small screen with this long text
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Specifications
                </span>
                <span class="details__icon" hidden>
                    <svg class="icon icon--16 details__expand" height="16" width="16" aria-hidden="true">
                        <use href="#icon-add-16"/>
                    </svg>
                    <svg class="icon icon--16 details__collapse" height="16" width="16" aria-hidden="true">
                        <use href="#icon-remove-16"/>
                    </svg>
                </span>
            </summary>
            <div class="details__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </details>
    </li>
</ul>
`;
