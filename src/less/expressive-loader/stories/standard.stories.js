export default { title: "Skin/Expressive Loader/Standard" };

export const base = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 12%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 35%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 35%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 12%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 14%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 16%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 13%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 21%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 24%;"></div>
        </div>
    </div>
</div>
`;

export const baseInInitialState = () => `
<div class="expressive-loader">
    <div role="progressbar" aria-label="Loading..." class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--red" style="width: 34%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue" style="width: 16%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow" style="width: 30%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green" style="width: 18%;"></div>
        </div>
    </div>
</div>
`;

export const withMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message expressive-loader__message--next">
            Just a moment longer.
        </div>
        <div role="status" id="c3-message" class="expressive-loader__message">
            We're finishing your order.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="c3-message" class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 14%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 19%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 37%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 26%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 24%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 34%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 13%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red" style="width: 15%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue" style="width: 28%;"></div>
        </div>
    </div>
</div>
`;

export const withMessagesInInitialState = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message expressive-loader__message--next">
            Hang tight.
        </div>
        <div role="status" id="c1-message" class="expressive-loader__message message--first">
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="c1-message" class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--red" style="width: 12%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue" style="width: 34%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow" style="width: 19%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green" style="width: 27%;"></div>
        </div>
    </div>
</div>
`;

export const withSingleMessage = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div role="status" id="c2-message" class="expressive-loader__message">
            We're processing your order
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="c2-message" class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 31%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 11%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 28%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 14%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 18%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 16%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 25%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red" style="width: 24%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue" style="width: 29%;"></div>
        </div>
    </div>
</div>
`;

export const withMediumText = () => `
<div class="expressive-loader expressive-loader--medium">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message expressive-loader__message--next">
            Just a moment longer.
        </div>
        <div role="status" id="c3-message" class="expressive-loader__message">
            We're finishing your order.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="c3-message" class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 14%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 19%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 37%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 26%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 24%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 34%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 13%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red" style="width: 15%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue" style="width: 28%;"></div>
        </div>
    </div>
</div>
`;

export const withLongMessages = () => `
<div class="expressive-loader">
    <div class="expressive-loader__message-container">
        <div aria-hidden="true" class="expressive-loader__message expressive-loader__message--next">
            Work with a content designer to simplify your messages.
        </div>
        <div role="status" id="c1-message" class="expressive-loader__message">
            Messages should be one line, but sometimes that's hard to achieve.
        </div>
    </div>
    <div role="progressbar" aria-label="Loading..." aria-describedby="c1-message" class="expressive-line-animation">
        <div class="expressive-line-animation__standard">
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 21%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 24%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 29%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 18%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 33%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--green expressive-line-animation__line--animated" style="width: 34%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--red expressive-line-animation__line--animated" style="width: 35%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--blue expressive-line-animation__line--animated" style="width: 36%;"></div>
            <div class="expressive-line-animation__line expressive-line-animation__line--yellow expressive-line-animation__line--animated" style="width: 19%;"></div>
        </div>
    </div>
</div>
  `;
