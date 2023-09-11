export default { title: "Skin/Section Notice/Icon 24" };

export const body = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const title = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
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
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
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
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
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
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
    <button aria-label="Close notice" class="fake-link section-notice__dismiss">
        <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
            <use href="#icon-close-16"></use>
        </svg>
    </button>
    </div>
</div>
`;

export const dismissAndLinkCTA = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="fake-link section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const dismissAndFakeLinkCTA = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
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
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const education = () => `
<div class="section-notice section-notice--large-icon section-notice--education" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
            <use href="#icon-lightbulb-24"></use>
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
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;
// known issue: https://github.com/eBay/skin/issues/2142
export const RTL = () => `
<div dir="rtl">
    <div class="section-notice section-notice--large-icon" role="region">
        <div class="section-notice__header" role="region" aria-roledescription="Notice">
            <svg aria-hidden="true" focusable="false" class="icon--lightbulb-24">
                <use href="#icon-lightbulb-24"></use>
            </svg>
        </div>
        <div class="section-notice__main">
            <h3 class="section-notice__title">Notification Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
        <div class="section-notice__footer">
            <button aria-label="Close notice" class="fake-link section-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;

export const vault = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--the-ebay-vault-24-fit">
            <use href="#icon-the-ebay-vault-24-fit"></use>
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
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const selling = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--selling-24">
            <use href="#icon-selling-24"></use>
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
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const warranty = () => `
<div class="section-notice section-notice--large-icon" role="region">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" focusable="false" class="icon--free-warranty-24-fit">
            <use href="#icon-free-warranty-24-fit"></use>
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
            <svg aria-hidden="true" class="icon icon--close-16" focusable="false" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</div>
`;
