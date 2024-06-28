export default { title: "Skin/Section Notice/Base" };

export const body = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const title = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

// known issue: https://github.com/eBay/skin/issues/2146
export const linkCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
        <a href="https://www.ebay.com">Action</a>
    </div>
</div>
`;

// known issue: https://github.com/eBay/skin/issues/2146
export const fakeLinkCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
        <button class="fake-link" type="button">Action</button>
    </div>
</div>
`;

export const dismiss = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
    <button aria-label="Close notice" class="fake-link section-notice__dismiss">
        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
            <use href="#icon-close-16"></use>
        </svg>
    </button>
    </div>
</div>
`;

export const dismissAndLinkCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const dismissAndFakeLinkCTA = () => `
<div class="section-notice section-notice--confirmation" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta">
        <button class="fake-link" type="button">Action</button>
    </p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

// known issue: https://github.com/eBay/skin/issues/2142
export const RTL = () => `
<div dir="rtl">
    <div class="section-notice section-notice--confirmation" role="region">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" class="icon icon--16">
                <use href="#icon-confirmation-filled-16"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <h3 class="section-notice__title">Notification Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
        <div class="section-notice__footer">
            <button aria-label="Close notice" class="fake-link section-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div class="section-notice section-notice--confirmation demo-a11y-text-spacing" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta">
        <button class="fake-link" type="button">Action</button>
    </p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;
