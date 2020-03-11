export default { title: 'WizardStepper' };

export const wizardStepperDefault = () => `
<div class="wizard-stepper">
    <ul class="wizard-stepper__items">
        <li class="wizard-stepper__item wizard-stepper__item--confirmation">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Started</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--confirmation">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Shipped</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--inprogress">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Transit</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--upcoming">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Delivered</span>
        </li>
    </ul>
</div>
`;

export const wizardStepperVertical = () => `
<div class="wizard-stepper wizard-stepper--vertical">
    <ul class="wizard-stepper__items">
        <li class="wizard-stepper__item wizard-stepper__item--confirmation">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Started</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--confirmation">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-confirmation-filled"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Shipped</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--inprogress">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Transit</span>
        </li>
        <li class="wizard-stepper__item wizard-stepper__item--upcoming">
            <span class="wizard-stepper__icon">
                <svg class="icon" focusable="false" height="24" width="24">
                    <use xlink:href="#icon-circle"></use>
                </svg>
            </span>
            <span class="wizard-stepper__text">Delivered</span>
        </li>
    </ul>
</div>
`;
