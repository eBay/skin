export default { title: "Skin/Phone Input/Base" };

export const Default = () => `
  <span class="phone-input">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: ">
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" data-country-code="1"
              aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control" type="tel" aria-label="area code + phone number"
        autocomplete="tel-national" />
    </span>
  </span>`;

export const Large = () => `
  <span class="phone-input phone-input--large">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start btn--large btn--large-fixed-height" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: ">
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" data-country-code="1"
              aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control textbox__control--large" type="tel" aria-label="area code + phone number"
        autocomplete="tel-national" />
    </span>
  </span>`;

export const ReadOnly = () => `
  <span class="phone-input phone-input--readonly">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " disabled>
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" data-country-code="1"
              aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control" type="tel" aria-label="Area code + phone number" autocomplete="tel-national"
        readonly value="123456789" />
    </span>
  </span>`;

export const Disabled = () => `
  <span class="phone-input phone-input--disabled">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " disabled>
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us"
              data-country-code="1" aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control" type="tel" aria-label="area code + phone number" autocomplete="tel-national"
        value="123456789" disabled />
    </span>
  </span>`;

export const Error = () => `
  <span class="phone-input phone-input--error">
    <span class="listbox-button listbox-button--form listbox-button--error">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: ">
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" data-country-code="1"
              aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control" type="tel" aria-label="area code + phone number" autocomplete="tel-national"
        value="123456789" aria-invalid="true" />
    </span>
  </span>`;

export const Fluid = () => `
  <span class="phone-input phone-input--fluid">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: ">
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" data-country-code="1"
              aria-label="Country: United States of America (+1)">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span aria-hidden="true">+1</span>
      <input class="textbox__control" type="tel" aria-label="area code + phone number"
        autocomplete="tel-national" />
    </span>
  </span>`;

export const RTL = () => `
  <div dir="rtl">
    <span class="phone-input">
      <span class="listbox-button listbox-button--form">
        <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
          data-listbox-button-prefix="Country: ">
          <span class="btn__cell">
            <span class="btn__text">
              <span class="fflag fflag--us" data-country-code="1"
                aria-label="Country: United States of America (+1)">
              </span>
            </span>
            <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-chevron-down-12"></use>
            </svg>
          </span>
        </button>
        <div class="listbox-button__listbox">
          <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--al" data-country-code="355">
                </span>
                <span>Albania</span>
                <span>(+355)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--in" data-country-code="91">
                </span>
                <span>India</span>
                <span>(+91)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--sh" data-country-code="290">
                </span>
                <span>Saint Helena, Ascension and Tristan da Cunha</span>
                <span>(+290)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--gb" data-country-code="44">
                </span>
                <span>United Kingdom</span>
                <span>(+44)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
              <span class="listbox-button__value">
                <span class="fflag fflag--us" data-country-code="1">
                </span>
                <span>United States of America</span>
                <span>(+1)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
          </div>
        </div>
      </span>
      <span class="textbox">
        <span aria-hidden="true">+1</span>
        <input class="textbox__control" type="tel" aria-label="area code + phone number"
          autocomplete="tel-national" value="123456789" />
      </span>
    </span>
  </div>`;

export const TextSpacing = () => `
<div class="demo-a11y-text-spacing">
  <span class="field" role="group" aria-labelledby="phone-number-label-0">
  <label class="field__label field__label--stacked" id="phone-number-label-0">Phone number</label>
  <span class="phone-input">
    <span class="listbox-button listbox-button--form">
      <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " aria-label="Country: United States of America">
        <span class="btn__cell">
          <span class="btn__text">
            <span class="fflag fflag--us" aria-hidden="true"
              data-country-code="1">
            </span>
          </span>
          <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
          </svg>
        </span>
      </button>
      <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--al" aria-hidden="true"
                data-country-code="355">
              </span>
              <span>Albania</span>
              <span>(+355)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--in" aria-hidden="true"
                data-country-code="91">
              </span>
              <span>India</span>
              <span>(+91)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--sh" aria-hidden="true"
                data-country-code="290">
              </span>
              <span>Saint Helena, Ascension and Tristan da Cunha</span>
              <span>(+290)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
              <span class="fflag fflag--gb" aria-hidden="true"
                data-country-code="44">
              </span>
              <span>United Kingdom</span>
              <span>(+44)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
          <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
              <span class="fflag fflag--us" aria-hidden="true"
                data-country-code="1">
              </span>
              <span>United States of America</span>
              <span>(+1)</span>
            </span>
            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-tick-16"></use>
            </svg>
          </div>
        </div>
      </div>
    </span>
    <span class="textbox">
      <span id="phone-prefix-1">+1</span>
      <input class="textbox__control" type="tel" aria-label="area code + phone number" autocomplete="tel-national"
        aria-describedby="phone-prefix-1" value="123456789" />
    </span>
  </span>
  </span>
</div>`;

export const overrideFontSize = () => `
<div>
  <span class="field" role="group" aria-labelledby="phone-number-label-0">
    <label style="font-size: 200%;" class="field__label field__label--stacked" id="phone-number-label-0">Phone number</label>
    <span class="phone-input">
      <span class="listbox-button listbox-button--form" style="font-size: 200%;">
        <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
          data-listbox-button-prefix="Country: " aria-label="Country: United States of America">
          <span class="btn__cell">
            <span class="btn__text">
              <span class="fflag fflag--us" aria-hidden="true"
                data-country-code="1">
              </span>
            </span>
            <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">
              <use href="#icon-chevron-down-12"></use>
            </svg>
          </span>
        </button>
        <div class="listbox-button__listbox">
          <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--al" aria-hidden="true"
                  data-country-code="355">
                </span>
                <span>Albania</span>
                <span>(+355)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--in" aria-hidden="true"
                  data-country-code="91">
                </span>
                <span>India</span>
                <span>(+91)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--sh" aria-hidden="true"
                  data-country-code="290">
                </span>
                <span>Saint Helena, Ascension and Tristan da Cunha</span>
                <span>(+290)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option">
              <span class="listbox-button__value">
                <span class="fflag fflag--gb" aria-hidden="true"
                  data-country-code="44">
                </span>
                <span>United Kingdom</span>
                <span>(+44)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
              <span class="listbox-button__value">
                <span class="fflag fflag--us" aria-hidden="true"
                  data-country-code="1">
                </span>
                <span>United States of America</span>
                <span>(+1)</span>
              </span>
              <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">
                <use href="#icon-tick-16"></use>
              </svg>
            </div>
          </div>
        </div>
      </span>
      <span class="textbox" style="font-size: 200%;">
        <span id="phone-prefix-1">+1</span>
        <input class="textbox__control" type="tel" aria-label="area code + phone number" autocomplete="tel-national"
          aria-describedby="phone-prefix-1" value="123456789" />
      </span>
    </span>
  </span>
<div>
`;
