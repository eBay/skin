export default { title: 'Progress Stepper/Progress Stepper' };

export const base = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--current" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
            </span>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item progress-stepper__item--current" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
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
                <span class="step" role="img" aria-label="1">1</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="2">2</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--current" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--current" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="4">4</span>
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
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--current" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="2">2</span>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
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
                    <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use xlink:href="#icon-stepper-confirmation"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Order placed</h3>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item progress-stepper__item--current" role="listitem">
                <span class="progress-stepper__icon">
                    <span class="step" role="img" aria-label="2">2</span>
                </span>
                <span class="progress-stepper__text">
                    <h3>Preparing for shipment</h3>
                    <p>We will notify you once it ships.</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <span class="step" role="img" aria-label="3">3</span>
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


export const infoState = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item progress-stepper__item--information progress-stepper__item--transition-upcoming" role="listitem">
                <span class="progress-stepper__icon">
                    <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                        <use xlink:href="#icon-stepper-information"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>On Hold</h4>
                    <p>July 5th</p>
                </span>
            </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;

export const errorState = () => `
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-confirmation"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention progress-stepper__item--transition-upcoming" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-stepper-attention"></use>
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
                <span class="step" role="img" aria-label="3">3</span>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`;