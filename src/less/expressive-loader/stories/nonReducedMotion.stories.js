export default { title: "Skin/Expressive Loader/Without Reduced Motion" };

export const base = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-loader__progress">
        <div class="expressive-loader__lines">
        <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 35%;"></div>
        <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 30%;"></div>
        <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 19%;"></div>
        <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 22%;"></div>
        <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 24%;"></div>
        <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 28%;"></div>
        <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 29%;"></div>
        <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 37%;"></div>
        <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 35%;"></div>
        </div>
    </div>
</div>
`;

export const baseInInitialState = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 16%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 30%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 29%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 18%;"></div>
        </div>
    </div>
</div>
`;

export const withMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message">
            We're finishing your order.
        </div>
        <div role="status" id="unique-id" class="expressive-loader__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 22%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 34%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 13%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 33%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 31%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 21%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 26%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 17%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 19%;"></div>
        </div>
    </div>
</div>
`;

export const withMessagesInInitialState = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message">Hang tight.</div>
        <div role="status" id="unique-id" class="expressive-loader__message expressive-loader__message--initial"></div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-1" style="width: 13%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2" style="width: 33%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3" style="width: 18%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4" style="width: 26%;"></div>
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
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 22%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 34%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 13%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 33%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 31%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 21%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 26%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 17%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 19%;"></div>
        </div>
    </div>
</div>
`;

export const withMediumText = () => `
<div class="expressive-loader expressive-loader--medium">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message">
            We're finishing your order.
        </div>
        <div role="status" id="unique-id" class="expressive-loader__message">
            Hang tight.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 22%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 34%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 13%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 33%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 31%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 21%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 26%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 17%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 19%;"></div>
        </div>
    </div>
</div>
`;

export const withLongMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message">
            Work with a content designer to simplify your messages.
        </div>
        <div role="status" id="unique-id" class="expressive-loader__message">
            Messages should be one line, but sometimes that's hard to achieve.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="unique-id" class="expressive-loader__progress">
        <div class="expressive-loader__lines">
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 22%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 34%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 13%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 33%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 31%;"></div>
            <div class="expressive-loader__line expressive-loader__line-4 expressive-loader__line--scaling" style="width: 21%;"></div>
            <div class="expressive-loader__line expressive-loader__line-1 expressive-loader__line--scaling" style="width: 26%;"></div>
            <div class="expressive-loader__line expressive-loader__line-2 expressive-loader__line--scaling" style="width: 17%;"></div>
            <div class="expressive-loader__line expressive-loader__line-3 expressive-loader__line--scaling" style="width: 19%;"></div>
        </div>
    </div>
</div>
`;
