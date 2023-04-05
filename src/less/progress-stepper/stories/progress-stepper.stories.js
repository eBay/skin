export default { title: "Progress Stepper" };

export const base = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
`;
export const multipleUpcoming = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
`;

export const allSelected = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const currentBubble = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items  progress-stepper__items--current" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-current-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const noneSelected = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div class="progress-stepper" dir="rtl">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>

`;

export const currentBubbleRTL = () => `
<div class="progress-stepper" dir="rtl">
    <div class="progress-stepper__items  progress-stepper__items--current" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-current-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const vertical = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`;

export const verticalUpcoming = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div aria-current="current" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`;

export const verticalSingleLine = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Delivered</h3>
            </span>
        </div>
    </div>
</div>
`;

export const verticalRTL = () => `
<div dir="rtl">
    <div class="progress-stepper progress-stepper--vertical">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Order placed</h3>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Preparing for shipment</h3>
                    <p>We will notify you once it ships.</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Delivered</h3>
                    <p>Guaranteed Wednesday, October 09.</p>
                </span>
            </div>
        </div>
    </div>
</div>
`;

export const currentBubbleVertical = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items  progress-stepper__items--current" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-current-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const currentBubbleVerticalRTL = () => `
<div dir="rtl">
    <div class="progress-stepper progress-stepper--vertical">
        <div class="progress-stepper__items  progress-stepper__items--current" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Started</h4>
                    <p>July 3rd</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Shipped</h4>
                    <p>July 4th</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-current-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Transit</h4>
                    <p>July 5th</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-upcoming-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Delivered</h4>
                    <p>July 6th</p>
                </span>
            </div>
        </div>
    </div>
</div>
`;

export const errorState = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;

export const errorStateVertical = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;

export const allSelectedVertical = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const noneSelectedVertical = () => `
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`;

export const smallScreens = () => `
<div style="width: 320px">
    <div class="progress-stepper">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Gestartet</h4>
                    <p>July 3rd</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Verschicken</h4>
                    <p>bis 27. Jan</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <svg role="img" aria-label="upcoming" class="icon" focusable="false" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                <span class="progress-stepper__text">
                    <h4>Ruckerstattung</h4>
                </span>
            </div>

        </div>
    </div>
</div>
`;
