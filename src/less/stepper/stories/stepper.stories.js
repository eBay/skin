export default { title: 'Stepper' };

export const base = () => `
<div class="stepper">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="stepper__text">Started</span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="stepper__text">Shipped</span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div aria-current="step" class="stepper__item stepper__item--current" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="stepper__text">Transit</span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="stepper__text">Delivered</span>
        </div>
    </div>
</div>
`;

export const vertical = () => `
<div class="stepper stepper--vertical">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div aria-current="step" class="stepper__item stepper__item--current" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`;
