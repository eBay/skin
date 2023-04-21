export default { title: "Tourtip" };

export const collapsed = () => `
<div class="tourtip">
    <p class="tourtip__host">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="tourtip__overlay" style="left: calc(50% - 200px); right: auto; top: calc(100% + 12px); bottom: auto" role="region" aria-labelledby="tourtip-label">
        <span class="tourtip__pointer tourtip__pointer--top"></span>
        <div class="tourtip__mask">
            <div class="tourtip__cell">
                <span class="tourtip__content">
                    <h2 class="tourtip__heading" id="tourtip-label">Tourtip</h2>
                    <p>Here's something new to help you be successful at your task.</p>
                </span>
                <button class="icon-btn tourtip__close" type="button" aria-label="Dismiss tourtip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>`;

export const expanded = () => `
<div class="tourtip tourtip--expanded">
    <p class="tourtip__host">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="tourtip__overlay" style="left: calc(50% - 200px); right: auto; top: calc(100% + 12px); bottom: auto" role="region" aria-labelledby="tourtip-label">
        <span class="tourtip__pointer tourtip__pointer--top"></span>
        <div class="tourtip__mask">
            <div class="tourtip__cell">
                <span class="tourtip__content">
                    <h2 class="tourtip__heading" id="tourtip-label">Tourtip</h2>
                    <p>Here's something new to help you be successful at your task.</p>
                </span>
                <button class="icon-btn tourtip__close" type="button" aria-label="Dismiss tourtip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>`;

export const withActions = () => `
<div class="tourtip tourtip--expanded">
    <p class="tourtip__host">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="tourtip__overlay" style="left: calc(50% - 200px); right: auto; top: calc(100% + 12px); bottom: auto" role="region" aria-labelledby="tourtip-label">
        <span class="tourtip__pointer tourtip__pointer--top"></span>
        <div class="tourtip__mask">
            <div class="tourtip__cell">
                <span class="tourtip__content">
                    <h2 class="tourtip__heading" id="tourtip-label">Tourtip</h2>
                    <p>Here's something new to help you be successful at your task.</p>
                </span>
                <button class="icon-btn tourtip__close" type="button" aria-label="Dismiss tourtip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
                <div class="tourtip__footer">
                    <span class="tourtip__index">1 / 3</span>
                    <button class="fake-link">Back</button>
                    <button class="btn btn--primary">Next</button>
                </span>
            </div>
        </div>
    </div>
</div>`;

export const withOneAction = () => `
<div class="tourtip tourtip--expanded">
    <p class="tourtip__host">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="tourtip__overlay" style="left: calc(50% - 200px); right: auto; top: calc(100% + 12px); bottom: auto" role="region" aria-labelledby="tourtip-label">
        <span class="tourtip__pointer tourtip__pointer--top"></span>
        <div class="tourtip__mask">
            <div class="tourtip__cell">
                <span class="tourtip__content">
                    <h2 class="tourtip__heading" id="tourtip-label">Tourtip</h2>
                    <p>Here's something new to help you be successful at your task.</p>
                </span>
                <button class="icon-btn tourtip__close" type="button" aria-label="Dismiss tourtip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
                <div class="tourtip__footer">
                    <span class="tourtip__index">2 / 3</span>
                    <button class="btn btn--primary">Next</button>
                </span>
            </div>
        </div>
    </div>
</div>`;
