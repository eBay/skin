export default { title: "Skin/Expressive Loader/With Reduced Motion" };

export const base = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const baseInInitialState = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const withMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div role="status" id="unique-id" class="expressive-loader__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const withMessagesInInitialState = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div role="status" id="unique-id" class="expressive-loader__message expressive-loader__message--initial"></div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const withSingleMessage = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div role="status" id="unique-id" class="expressive-loader__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const withMediumText = () => `
<div class="expressive-loader expressive-loader--medium">
    <div class="expressive-loader__message-container">
        <div role="status" id="unique-id" class="expressive-loader__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;

export const withLongMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div role="status" id="unique-id" class="expressive-loader__message">
            Messages should be one line, but sometimes that's hard to achieve.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 15%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 35%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 25%"></div>
        </div>
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 10%"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 30%"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 25%"></div>
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 35%"></div>
        </div>
    </div>
</div>
`;
