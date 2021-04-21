export default { title: 'Infotip/Infotip' };

export const base = () => `
<span class="infotip">
    <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
        <svg class="icon icon--information-small" focusable="false" width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-information-small"></use>
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
                    <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</span>`;

export const baseOpen = () => `
<span class="infotip">
    <button class="icon-btn infotip__host" type="button" aria-expanded="true" aria-label="Help">
        <svg class="icon icon--information-small" focusable="false" width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-information-small"></use>
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
                    <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</span>`;

export const insideParagraph = () => `
<p>
Inside paragraph
<span class="infotip">
    <button class="icon-btn infotip__host" type="button" aria-expanded="false" aria-label="Help">
        <svg class="icon icon--information-small" focusable="false" width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-information-small"></use>
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
                    <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </span>
        </span>
    </span>
</span>
</p>`;

export const insideParagraphOpen = () => `
<p>
Inside paragraph
<span class="infotip">
    <button class="icon-btn infotip__host" type="button" aria-expanded="true" aria-label="Help">
        <svg class="icon icon--information-small" focusable="false" width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-information-small"></use>
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
                    <svg class="icon icon--close" focusable="false" height="24" width="24" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </span>
        </span>
    </span>
</span>
</p>`;

export const modal = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" hidden class="lightbox-dialog lightbox-dialog--mini" id="lightbox-dialog-mini-default-0" role="dialog">
    <div class="lightbox-dialog__window lightbox-dialog__window--mini">
        <div class="lightbox-dialog__header">
            <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                <svg aria-hidden="true" class="icon icon--close" focusable="false" height="16" width="16">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main" id="lightbox-dialog-title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>`;

export const modalOpen = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--mini" id="lightbox-dialog-mini-default-0" role="dialog">
    <div class="lightbox-dialog__window lightbox-dialog__window--mini">
        <div class="lightbox-dialog__header">
            <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                <svg aria-hidden="false" class="icon icon--close" focusable="true" height="16" width="16">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main" id="lightbox-dialog-title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>`;
