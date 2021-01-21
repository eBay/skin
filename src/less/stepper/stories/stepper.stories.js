export default { title: 'Stepper/Stepper' };

export const base = () => `
<div class="stepper">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div aria-current="step" class="stepper__item stepper__item--current" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
            </span>
            <span class="stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div class="stepper" dir="rtl">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div aria-current="step" class="stepper__item stepper__item--current" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
            </span>
            <span class="stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
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
                    <use xlink:href="#icon-stepper-confirmation"></use>
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


export const infoState = () => `
<div class="stepper">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
            <div aria-current="step" class="stepper__item stepper__item--information stepper__item--transition-upcoming" role="listitem">
                <span class="stepper__icon">
                    <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use xlink:href="#icon-stepper-information"></use>
                    </svg>
                </span>
                <span class="stepper__text">
                    <h4>On Hold</h4>
                    <p>July 5th</p>
                </span>
            </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
            </span>
            <span class="stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;

export const errorState = () => `
<div class="stepper">
    <div class="stepper__items" role="list">
        <div class="stepper__item stepper__item--confirmation" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div aria-current="step" class="stepper__item stepper__item--attention stepper__item--transition-upcoming" role="listitem">
            <span class="stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-attention"></use>
                </svg>
            </span>
            <span class="stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="stepper__separator" role="presentation" />
        <div class="stepper__item stepper__item--upcoming" role="listitem">
            <span class="stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
            </span>
            <span class="stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;