export default { title: 'WizardStepper' };

export const wizardStepperDefault = () => `
<div class="wizard-stepper">
    <div class="wizard-stepper__items" role="list">
        <div class="wizard-stepper__item wizard-stepper__item--confirmation" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Started</span>
        </div>
        <hr class="wizard-stepper__separator" role="presentation" />
        <div class="wizard-stepper__item wizard-stepper__item--confirmation" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Shipped</span>
        </div>
        <hr class="wizard-stepper__separator" role="presentation" />
        <div aria-current="step" class="wizard-stepper__item wizard-stepper__item--current" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Transit</span>
        </div>
        <hr class="wizard-stepper__separator" role="presentation" />
        <div class="wizard-stepper__item wizard-stepper__item--upcoming" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Delivered</span>
        </div>
    </div>
</div>
`;

export const wizardStepperVertical = () => `
<div class="wizard-stepper wizard-stepper--vertical">
    <div class="wizard-stepper__items" role="list">
        <div class="wizard-stepper__item wizard-stepper__item--confirmation" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="wizard-stepper__separator" role="presentation" />
        <div aria-current="step" class="wizard-stepper__item wizard-stepper__item--current" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="wizard-stepper__separator" role="presentation" />
        <div class="wizard-stepper__item wizard-stepper__item--upcoming" role="listitem">
            <span class="wizard-stepper__icon">
                <svg aria-hidden="true" class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`;
