export default { title: "Skin/Education Notice" };

export const base = () => `
<section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--lightbulb-24" height="24" width="24" aria-label="Education">
            <use href="#icon-lightbulb-24"></use>
        </svg>
        <h3 class="education-notice__title">Did you know?</h3>
    </div>
    <div class="education-notice__main">
        <p>You can now split payments on two cards.</p>
    </div>
</section>
`;

export const prominentIcon = () => `
<section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--lightbulb-24 icon--prominent" height="24" width="24" aria-label="Education">
            <use href="#icon-lightbulb-24"></use>
        </svg>
        <h3 class="education-notice__title">Did you know?</h3>
    </div>
    <div class="education-notice__main">
        <p>You can now split payments on two cards.</p>
    </div>
</section>
`;

export const prominentNotice = () => `
<section class="education-notice education-notice--prominent" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--authenticity-guarantee-24" height="24" width="24" aria-label="Education">
            <use href="#icon-authenticity-guarantee-24"></use>
        </svg>
        <h3 class="education-notice__title">Authenticity Guaranteed</h3>
    </div>
    <div class="education-notice__main">
        <p>Authenticity Guarantee means your item is authentic or your money back.</p>
    </div>
</section>
`;

export const dismissable = () => `
<section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--lightbulb-24" height="24" width="24" aria-label="Education">
            <use href="#icon-lightbulb-24"></use>
        </svg>
        <h3 class="education-notice__title">Did you know?</h3>
        <button aria-label="Close notice" class="fake-link education-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="education-notice__main">
        <p>You can now split payments on two cards.</p>
    </div>
</section>
`;

export const actionableLink = () => `
<section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--the-ebay-vault-24" height="24" width="24" aria-label="Education">
            <use href="#icon-the-ebay-vault-24"></use>
        </svg>
        <h3 class="education-notice__title">The Vault</h3>
        <button aria-label="Close notice" class="fake-link education-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="education-notice__main">
        <p>You can now use the Vault to store items like this securely.</p>
    </div>
    <div class="education-notice__footer">
        <a href="https://www.ebay.com">Learn more link</a>
    </div>
</section>
`;

export const actionableButton = () => `
<section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--the-ebay-vault-24" height="24" width="24" aria-label="Education">
            <use href="#icon-the-ebay-vault-24"></use>
        </svg>
        <h3 class="education-notice__title">The Vault</h3>
        <button aria-label="Close notice" class="fake-link education-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="education-notice__main">
        <p>You can now use the Vault to store items like this securely.</p>
    </div>
    <div class="education-notice__footer">
        <button class="fake-link">Learn more button</button>
    </div>
</section>
`;

export const RTL = () => `
<div dir="rtl">
    <section class="education-notice" role="region" aria-label="Education" aria-roledescription="Notice">
        <div class="education-notice__header">
            <svg class="icon icon--the-ebay-vault-24" height="24" width="24" aria-label="Education">
                <use href="#icon-the-ebay-vault-24"></use>
            </svg>
            <h3 class="education-notice__title">The Vault</h3>
            <button aria-label="Close notice" class="fake-link education-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--close-16" height="16" width="16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="education-notice__main">
            <p>You can now use the Vault to store items like this securely.</p>
        </div>
        <div class="education-notice__footer">
            <a href="https://www.ebay.com">Learn more link</a>
        </div>
    </section>
</div>
`;

export const textSpacing = () => `
<section class="education-notice demo-a11y-text-spacing" role="region" aria-label="Education" aria-roledescription="Notice">
    <div class="education-notice__header">
        <svg class="icon icon--the-ebay-vault-24" height="24" width="24" aria-label="Education">
            <use href="#icon-the-ebay-vault-24"></use>
        </svg>
        <h3 class="education-notice__title">The Vault</h3>
        <button aria-label="Close notice" class="fake-link education-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--close-16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="education-notice__main">
        <p>You can now use the Vault to store items like this securely.</p>
    </div>
    <div class="education-notice__footer">
        <button class="fake-link">Learn more button</button>
    </div>
</section>
`;
