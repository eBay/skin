export default { title: "Inline Notice" };

export const confirmation = () => `
<div class="inline-notice inline-notice--confirmation">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--confirmation-filled-16" role="img">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="inline-notice inline-notice--confirmation">
        <span class="inline-notice__header">
            <svg focusable="false" class="icon icon--confirmation-filled-16" role="img">
                <use href="#icon-confirmation-filled-16"></use>
            </svg>
        </span>
        <span class="inline-notice__main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </span>
    </div>
</div>
`;

export const attention = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--attention-filled-16" role="img">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const information = () => `
<div class="inline-notice inline-notice--information">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--information-filled-16" role="img">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const general = () => `
<div class="inline-notice">
    <span class="inline-notice__main">
        <p>Your price has been updated. <a href="http://www.ebay.com">Dismiss</a></p>
    </span>
</div>
`;

export const paragraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--attention-filled-16" role="img">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const longParagraph = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--attention-filled-16" role="img">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
`;

export const longParagraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header" role="img">
        <svg focusable="false" class="icon icon--attention-filled-16">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const multiParagraph = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--attention-filled-16" role="img">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const multiParagraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__header">
        <svg focusable="false" class="icon icon--attention-filled-16" role="img">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </span>
    <span class="inline-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const longWordInConstrainedWidth = () => `
<div style="width:300px;">
    <div class="inline-notice inline-notice--confirmation">
        <span class="inline-notice__header">
            <svg focusable="false" class="icon icon--confirmation-filled-16" role="img">
                <use href="#icon-confirmation-filled-16"></use>
            </svg>
        </span>
        <span class="inline-notice__main">
            <p>We got your request. We're checking the info you gave us, and we'll email you at abcdefghijklmnopqrstuvwxyz@abcdefghijklmnopqrstuvwxyz.com in a few minutes with the results.</p>
        </span>
    </div>
</div>
`;
