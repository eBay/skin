export default { title: 'notice-inline' };

export const confirmatiion = () => `
<div class="inline-notice inline-notice--confirmation">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const attention = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const information = () => `
<div class="inline-notice inline-notice--information">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--information-filled">
            <use xlink:href="#icon-information-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const paragraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const longParagraph = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
</div>
`;

export const longParagraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const multiParagraph = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </span>
</div>
`;

export const multiParagraphAndLink = () => `
<div class="inline-notice inline-notice--attention">
    <span class="inline-notice__status" role="img">
        <svg aria-hidden="true" focusable="false" class="icon icon--attention-filled">
            <use xlink:href="#icon-attention-filled"></use>
        </svg>
    </span>
    <span class="inline-notice__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href="http://www.ebay.com">Use fewer refinements</a></p>
    </span>
</div>
`;

export const longWordInConstrainedWidth = () => `
<div style="width:300px;">
    <div class="inline-notice inline-notice--confirmation">
        <span class="inline-notice__status" role="img">
            <svg aria-hidden="true" focusable="false" class="icon icon--confirmation-filled">
                <use xlink:href="#icon-confirmation-filled"></use>
            </svg>
        </span>
        <span class="inline-notice__content">
            <p>We got your request. We're checking the info you gave us, and we'll email you at abcdefghijklmnopqrstuvwxyz@abcdefghijklmnopqrstuvwxyz.com in a few minutes with the results.</p>
        </span>
    </div>
</div>
`;
