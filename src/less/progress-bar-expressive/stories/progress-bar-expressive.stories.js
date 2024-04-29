export default { title: "Skin/Progress Bar Expressive" };

export const base = () => `
<div class="progress-bar-expressive">
    <div role="progressbar" aria-label="Loading..." class="progress-bar-expressive__progress">
        <div class="progress-bar-expressive__lines">
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
        </div>
    </div>
</div>
`;

export const withMessages = () => `
<div class="progress-bar-expressive">
    <div class="progress-bar-expressive__messages">
        <div aria-hidden="true" class="progress-bar-expressive__message">
            We're finishing your order.
        </div>
        <div role="status" id="unique-id" class="progress-bar-expressive__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="progress-bar-expressive__progress">
        <div class="progress-bar-expressive__lines">
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
        </div>
    </div>
</div>
`;

export const withMediumText = () => `
<div class="progress-bar-expressive progress-bar-expressive--medium">
    <div class="progress-bar-expressive__messages progress-bar-expressive__messages--medium">
        <div aria-hidden="true" class="progress-bar-expressive__message">
            We're finishing your order.
        </div>
        <div role="status" id="unique-id" class="progress-bar-expressive__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="progress-bar-expressive__progress">
        <div class="progress-bar-expressive__lines">
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
        </div>
    </div>
</div>
`;

export const withLongMessages = () => `
<div class="progress-bar-expressive">
    <div class="progress-bar-expressive__messages">
        <div aria-hidden="true" class="progress-bar-expressive__message">
            Work with a content designer to simplify your messages.
        </div>
        <div role="status" id="unique-id" class="progress-bar-expressive__message">
            Messages should be one line, but sometimes that's hard to achieve.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="progress-bar-expressive__progress">
        <div class="progress-bar-expressive__lines">
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div class="progress-bar-expressive demo-a11y-text-spacing">
    <div class="progress-bar-expressive__messages">
        <div aria-hidden="true" class="progress-bar-expressive__message">
            Work with a content designer to simplify your messages.
        </div>
        <div role="status" id="unique-id" class="progress-bar-expressive__message">
            Ideally, on one line, but not always possible.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="progress-bar-expressive__progress">
        <div class="progress-bar-expressive__lines">
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
            <div class="progress-bar-expressive__line"></div>
        </div>
    </div>
</div>
`;
