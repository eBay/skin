export default { title: "Skin/Infotip" };

export const collapsed = () => `
<span class="infotip">
    <button class="icon-btn icon-btn--transparent infotip__host" type="button" aria-expanded="false" aria-label="Help">
        <svg class="icon icon--information-16" focusable="false" width="16" height="16" aria-hidden="true">
            <use href="#icon-information-16"></use>
        </svg>
    </button>
    <div class="infotip__overlay">
        <span class="infotip__pointer infotip__pointer--top-left"></span>
        <div class="infotip__mask">
            <div class="infotip__cell">
                <span class="infotip__content">
                    <h3 class="infotip__heading">Infotip</h3>
                    <p>Here's a tip to help you be successful at your task.</p>
                </span>
                <button class="icon-btn infotip__close" type="button" aria-label="Dismiss infotip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</span>`;

export const expanded = () => `
<span class="infotip">
    <button class="icon-btn icon-btn--transparent infotip__host" type="button" aria-expanded="true" aria-label="Help">
        <svg class="icon icon--information-16" focusable="false" width="16" height="16" aria-hidden="true">
            <use href="#icon-information-16"></use>
        </svg>
    </button>
    <div class="infotip__overlay">
        <span class="infotip__pointer infotip__pointer--top-left"></span>
        <div class="infotip__mask">
            <div class="infotip__cell">
                <span class="infotip__content">
                    <h3 class="infotip__heading">Infotip</h3>
                    <p>Here's a tip to help you be successful at your task.</p>
                </span>
                <button class="icon-btn infotip__close" type="button" aria-label="Dismiss infotip">
                    <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</span>`;

export const paragraphCollapsed = () => `
<p>
    Inside paragraph
    <span class="infotip">
        <button class="icon-btn icon-btn--transparent infotip__host" type="button" aria-expanded="false" aria-label="Help">
            <svg class="icon icon--information-16" focusable="false" width="16" height="16" aria-hidden="true">
                <use href="#icon-information-16"></use>
            </svg>
        </button>
        <span class="infotip__overlay">
            <span class="infotip__pointer infotip__pointer--top-left"></span>
            <span class="infotip__mask">
                <span class="infotip__cell">
                    <span class="infotip__content">
                        <span class="infotip__heading" role="heading" aria-level=5>Infotip</span>
                        <span>Here's a tip to help you be successful at your task.</span>
                    </span>
                    <button class="icon-btn infotip__close" type="button" aria-label="Dismiss infotip">
                        <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                            <use href="#icon-close-16"></use>
                        </svg>
                    </button>
                </span>
            </span>
        </span>
    </span>
</p>`;

export const paragraphExpanded = () => `
<p>
    Inside paragraph
    <span class="infotip">
        <button class="icon-btn icon-btn--transparent infotip__host" type="button" aria-expanded="true" aria-label="Help">
            <svg class="icon icon--information-16" focusable="false" width="16" height="16" aria-hidden="true">
                <use href="#icon-information-16"></use>
            </svg>
        </button>
        <span class="infotip__overlay">
            <span class="infotip__pointer infotip__pointer--top-left"></span>
            <span class="infotip__mask">
                <span class="infotip__cell">
                    <span class="infotip__content">
                        <span class="infotip__heading" role="heading" aria-level=5>Infotip</span>
                        <span>Here's a tip to help you be successful at your task.</span>
                    </span>
                    <button class="icon-btn infotip__close" type="button" aria-label="Dismiss infotip">
                        <svg class="icon icon--close-16" focusable="false" height="24" width="24" aria-hidden="true">
                            <use href="#icon-close-16"></use>
                        </svg>
                    </button>
                </span>
            </span>
        </span>
    </span>
</p>`;

export const infotipModal = () => `
    <span class="infotip infotip--modal">
        <button class="icon-btn icon-btn--transparent dialog-button" type="button" data-makeup-for="lightbox-dialog-mini-infotip-0" aria-expanded="true" aria-label="Help">
            <svg class="icon icon--information-16" focusable="false" width="16" height="16" aria-hidden="true">
                <use href="#icon-information-16"></use>
            </svg>
        </button>
    </span>
    <div aria-labelledby="mini-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
        <div class="lightbox-dialog__window">
            <button class="lightbox-dialog__handle" type="button"></button>
            <div class="lightbox-dialog__header">
                <h2>Info</h2>
                <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                    <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="lightbox-dialog__main" id="mini-dialog-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
 `;
