/* eslint-disable no-console */

if (window.URLSearchParams !== undefined) {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has('debug') && searchParams.get('debug') === '1') {
        document.querySelectorAll('.page-grid').forEach((pageGridElement) => {
            pageGridElement.classList.add('page-grid--debug');
        });
    }

    if (searchParams.has('dark') && searchParams.get('dark') === '1') {
        document.querySelector('body').classList.add('skin-experiment-dark-mode');
    }
}

const pageWidgets = [];

import * as RovingTabindex from 'makeup-roving-tabindex';
import Expander from 'makeup-expander';
import FloatingLabel from 'makeup-floating-label';
import * as ScrollKeyPreventer from 'makeup-prevent-scroll-keys';
import Combobox from 'makeup-combobox';
import DialogButton from 'makeup-dialog-button';
import Listbox from 'makeup-listbox';
import ListboxButton from 'makeup-listbox-button';
import Menu from 'makeup-menu';
import MenuButton from 'makeup-menu-button';
import Switch from 'makeup-switch';
import LightboxDialog from 'makeup-lightbox-dialog';
import AlertDialog from 'makeup-alert-dialog';
import ConfirmDialog from 'makeup-confirm-dialog';
import DrawerDialog from 'makeup-drawer-dialog';
import FullscreenDialog from 'makeup-fullscreen-dialog';
import InputDialog from 'makeup-input-dialog';
import PanelDialog from 'makeup-panel-dialog';
import SnackbarDialog from 'makeup-snackbar-dialog';
import ToastDialog from 'makeup-toast-dialog';
import { autoUpdate, flip, computePosition, shift, offset, arrow, inline } from '@floating-ui/dom';

let progressBarInterval;

const logEvent = (e) => console.log(e.type, e.detail); // eslint-disable-line no-console

// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
    let timeout;

    // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass
    return function executedFunction(...args) {

        // The callback function to be executed after
        // the debounce time has elapsed
        const later = () => {
            // null timeout to indicate the debounce ended
            timeout = null;

            // Execute the callback
            func(...args);
        };
        // This will reset the waiting every function execution.
        // This is the step that prevents the function from
        // being executed because it will never reach the
        // inside of the previous setTimeout
        clearTimeout(timeout);

        // Restart the debounce waiting period.
        // setTimeout returns a truthy value (it differs in web vs Node)
        timeout = setTimeout(later, wait);
    };
};

// BUSY BUTTON
document.getElementById('busy-button').addEventListener('click', function () {
    const button = this;
    button.setAttribute('aria-label', 'Busy...');
    button.innerHTML = `
        <span class="btn__cell">
            <span class="progress-spinner" role="img" aria-label="Busy">
                <svg class="icon icon--24" height="24" width="24" aria-hidden="true" >
                    <use href="static/icons.svg#icon-spinner-24"></use>
                </svg>
            </span>
        </span>
    `;

    window.setTimeout(function () {
        button.removeAttribute('aria-label');
        button.innerHTML = `Activate Spinner`;
    }, 2000);
});

// MIXED CHECKBOX
document.querySelectorAll('.checkbox input[aria-checked="mixed"]').forEach(function (el) {
    el.addEventListener('click', function () {
        const isChecked = (this.checked === true);

        this.setAttribute('aria-checked', isChecked ? 'mixed' : 'false');
    });
});

// BREADCRUMBS
document.querySelectorAll('.breadcrumbs').forEach(function (el) {
    const width = el.offsetWidth;
    const scrollLength = el.scrollWidth;
    const difference = scrollLength - width;
    if (difference) {
        el.scroll(difference, 0);
    }
})

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
document.querySelectorAll('.expand-btn').forEach(function (el) {
    el.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

document.querySelectorAll('.filter-menu-button--form button').forEach(function (el) {
    el.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

// FAKE MENU BUTTON
document.querySelectorAll('.fake-menu-button').forEach(function (widgetEl) {
    let hostSelector = '.icon-btn';
    if (widgetEl.querySelector('.expand-btn')) {
        hostSelector = '.expand-btn';
    } else if (widgetEl.querySelector('.btn')) {
        hostSelector = '.btn';
    }

    pageWidgets.push(new Expander(widgetEl, {
        expandOnClick: true,
        collapseOnFocusOut: true,
        collapseOnClickOut: true,
        contentSelector: '.fake-menu-button__menu',
        focusManagement: 'focusable',
        hostSelector
    }));
});

// COMBOBOX
document.querySelectorAll('.combobox').forEach(function (widgetEl) {
    pageWidgets.push(new Combobox(widgetEl));

    widgetEl.addEventListener('makeup-combobox-change', logEvent);
});

// DIALOGS
document.querySelectorAll('.dialog-button').forEach(function (el) {
    const dialogId = el.dataset.makeupFor;
    const dialogEl = document.getElementById(dialogId);
    const dialogClassList = dialogEl.classList;
    let dialogWidget;

    if (dialogClassList.contains('confirm-dialog')) {
        dialogWidget = new ConfirmDialog(dialogEl);
    } else if (dialogClassList.contains('alert-dialog')) {
        dialogWidget = new AlertDialog(dialogEl);
    } else if (dialogClassList.contains('lightbox-dialog--input')) {
        dialogWidget = new InputDialog(dialogEl);
    } else if (dialogClassList.contains('fullscreen-dialog')) {
        dialogWidget = new FullscreenDialog(dialogEl);
    } else if (dialogClassList.contains('snackbar-dialog')) {
        dialogWidget = new SnackbarDialog(dialogEl);
    } else if (dialogClassList.contains('toast-dialog')) {
        dialogWidget = new ToastDialog(dialogEl);
    } else if (dialogClassList.contains('drawer-dialog')) {
        dialogWidget = new DrawerDialog(dialogEl);
    } else if (dialogClassList.contains('panel-dialog')) {
        dialogWidget = new PanelDialog(dialogEl);
    } else if (dialogClassList.contains('lightbox-dialog')) {
        dialogWidget = new LightboxDialog(dialogEl);
    }

    pageWidgets.push(new DialogButton(el, dialogWidget));

    dialogWidget._el.addEventListener('dialog-open', logEvent);
    dialogWidget._el.addEventListener('dialog-close', logEvent);
    dialogWidget._el.addEventListener('dialog-acknowledge', logEvent);
    dialogWidget._el.addEventListener('dialog-confirm', logEvent);
    dialogWidget._el.addEventListener('dialog-reject', logEvent);
    dialogWidget._el.addEventListener('dialog-cta', logEvent);
});

// progress-bar-expressive
// Simple expressive progress bar implementation that handles rotating messages.
class ProgressBarExpressive {
    constructor(widgetEl, messages) {
        this.messageContainerEl = widgetEl.querySelector('.progress-bar-expressive__messages');
        this.messages = messages;

        if (this.messageContainerEl && this.messages) {
            this.isInitialized = true;
            this.nextMessageEl = widgetEl.querySelector('[aria-hidden="true"]');
            this.currentMessageEl = widgetEl.querySelector('[role="status"]');
            this.messageIndex = 0;
            this.message = this.messages[this.messageIndex];
        }
    }

    queueNextMessage() {
        if(this.isInitialized && this.messages.length > 1) {
            this.messageIndex = (this.messageIndex + 1) % this.messages.length;
            this.message = this.messages[this.messageIndex];

            this.nextMessageEl.innerText = this.messages[this.messageIndex];
            this.nextMessageEl.classList.add('progress-bar-expressive__message--in');
            this.currentMessageEl.classList.add('progress-bar-expressive__message--out');

            setTimeout(this.showMessage.bind(this), 833); // --progress-bar-expressive-message-animatein-duration
        }
    }

    showMessage() {
        if (this.isInitialized) {
            this.currentMessageEl.innerText = this.message;
            this.currentMessageEl.classList.remove('progress-bar-expressive__message--out');
            this.nextMessageEl.classList.remove('progress-bar-expressive__message--in');

            setTimeout(this.queueNextMessage.bind(this), 2000);
        }
    }
}

document.querySelectorAll('.progress-bar-expressive-messages-example').forEach(function (widgetEl) {
    const expressiveProgressBar = new ProgressBarExpressive(widgetEl, ['Hang tight.', "We're finishing your order.", "Just another moment."]);

    if(expressiveProgressBar.isInitialized) {
        expressiveProgressBar.queueNextMessage()
    }
});


class PopperTooltip {
    constructor(widgetEl, prefix) {
        this.host = widgetEl.querySelector(`.${prefix}__host`);
        this.overlay = widgetEl.querySelector(`.${prefix}__overlay`);
        this.arrowEl = widgetEl.querySelector(`.${prefix}__pointer`);

        if (this.host && this.overlay) {
            this.isInitialized = true;
        }
    }

    init() {
        this.cleanup = autoUpdate(
            this.host,
            this.overlay,
            this.update.bind(this),
        );
    }

    update() {
        if (this.isInitialized) {
            computePosition(this.host, this.overlay, {
                placement: 'bottom-start',
                middleware: [
                    offset(6),
                    inline(),
                    flip(),
                    shift(),
                    arrow({ element: this.arrowEl, padding: 20 }),
                ],
            }).then(({ x, y, placement, middlewareData }) => {
                Object.assign(this.overlay.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

                if (middlewareData.arrow) {
                    // Accessing the data
                    const { x: arrowX, y: arrowY } = middlewareData.arrow;

                    const staticSide = {
                        top: 'bottom',
                        right: 'left',
                        bottom: 'top',
                        left: 'right',
                    }[placement.split('-')[0]];

                    Object.assign(this.arrowEl.style, {
                        // eslint-disable-next-line eqeqeq
                        left: arrowX != null ? `${arrowX}px` : '',
                        // eslint-disable-next-line eqeqeq
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: '-4px',
                    });
                }
            });
        }

    }

    show() {
        this.host.setAttribute('aria-expanded', 'true')
        this.init();
    }
    isExpanded() {
        console.log(this.host, this.host.getAttribute('aria-expanded'))
        return this.host.getAttribute('aria-expanded') === 'true';
    }

    hide() {
        if (this.isExpanded()) {
            this.host.setAttribute('aria-expanded', 'false')
            if (this.cleanup) this.cleanup();
        }
    }
}

// TOOLTIP
document.querySelectorAll('.tooltip').forEach(function(widgetEl) {
    if (widgetEl.classList.contains('tooltip--js')) { return }
    pageWidgets.push(new Expander(widgetEl, {
        contentSelector: '.tooltip__overlay',
        collapseOnFocusOut: true,
        collapseOnMouseOut: true,
        expandOnFocus: true,
        expandOnHover: true,
        focusManagement: 'focusable',
        hostSelector: '.tooltip__host'
    }));
});


document.querySelectorAll('.tooltip--js').forEach(function (widgetEl) {
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];
    const popperTooltip = new PopperTooltip(widgetEl, 'tooltip');
    if (!popperTooltip.isInitialized) { return; }

    showEvents.forEach((event) => {
        popperTooltip.host.addEventListener(event, () => popperTooltip.show());
    });

    hideEvents.forEach((event) => {
        popperTooltip.host.addEventListener(event, () => popperTooltip.hide());
    });
});

// INFOTIP
document.querySelectorAll('.infotip').forEach(function(widgetEl) {
    if (widgetEl.classList.contains('infotip--js')) { return }
    const infotipButton = widgetEl.querySelector('button');
    const hostSelector = '.infotip__host'
    if (!widgetEl.querySelector(hostSelector)) {
        return;
    }
    const widget = new Expander(widgetEl, {
        contentSelector: '.infotip__overlay',
        expandOnFocus: false,
        expandOnClick: true,
        hostSelector
    });

    widgetEl.querySelector('.infotip__close').addEventListener('click', function() {
        widget.expanded = false;
        infotipButton.focus();
    });
});


document.querySelectorAll('.infotip--js').forEach(function (widgetEl) {
    const popperTooltip = new PopperTooltip(widgetEl, 'infotip');
    if (!popperTooltip.isInitialized) { return; }
    console.log('init', widgetEl)

    popperTooltip.host.addEventListener('click', () => {
        if (popperTooltip.isExpanded()) {
            popperTooltip.hide();
        } else {
            popperTooltip.show();
        }
    });
    const infotipButton = widgetEl.querySelector('button');
    widgetEl.querySelector('.infotip__close').addEventListener('click', function () {
        infotipButton.focus();
        if (popperTooltip.isInitialized) {
            popperTooltip.hide();
        }
    });
});

// TOURTIP
document.querySelectorAll('.tourtip').forEach(function(widgetEl) {
    if (widgetEl.classList.contains('tourtip--js')) { return }
    widgetEl.querySelector('.tourtip__close').addEventListener('click', function() {
        widgetEl.classList.remove('tourtip--expanded');
    });
});


document.querySelectorAll('.tourtip--js').forEach(function (widgetEl) {
    const popperTooltip = new PopperTooltip(widgetEl, 'tourtip');
    if (!popperTooltip.isInitialized) { return; }

    popperTooltip.init();
    widgetEl.querySelector('.tourtip__close').addEventListener('click', function () {
        widgetEl.classList.remove('tourtip--expanded');
        popperTooltip.hide();
    });
});

// FLOATING LABEL
document.querySelectorAll('.floating-label').forEach(function (el) {
    const isPhoneInput = el.parentElement.classList.contains('phone-input');
    // phone input always has floating label fixed to the input
    if(isPhoneInput){
       return;
    }
    pageWidgets.push(new FloatingLabel(el));
});

// PROGRESS BAR PLAY
document.querySelectorAll('.progress-bar-toggle').forEach(function (el) {
    const progressId = el.dataset.progressPlayButtonFor;
    const progress = document.getElementById(progressId);
    const progressRun = function () {
        const value = progress.value;
        const valuePlus = value + 10;
        let final;
        if (valuePlus > 100) {
            final = 100;
        } else {
            final = valuePlus;
        }
        progress.value = final;
    }

    el.addEventListener('click', function () {
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        } else {
            progressRun();
            progressBarInterval = setInterval(progressRun, 1000);
        }
    });
});

// PROGRESS BAR RESET
document.querySelectorAll('.progress-bar-reset').forEach(function (el) {
    const progressId = el.dataset.progressResetButtonFor;
    const progress = document.getElementById(progressId);

    el.addEventListener('click', function () {
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        }
        progress.value = 0;
    });
});

// STAR RATING SELECT
document.querySelectorAll('.star-rating-select').forEach(function (widgetEl) {
    widgetEl.addEventListener('change', function (e) {
        const selectedIndex = (e.target.value - 1);
        widgetEl.querySelectorAll('input').forEach(function (inputEl, index) {
            inputEl.classList.toggle('star-rating-select__control--filled', index < selectedIndex);
        });
    });
});

// TABS
document.querySelectorAll('.tabs').forEach(function (widgetEl) {
    RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    const tabItems = widgetEl.querySelectorAll('[role=tab]');
    const tabPanels = widgetEl.querySelectorAll('[role=tabpanel]');

    ScrollKeyPreventer.add(widgetEl);

    widgetEl.addEventListener('rovingTabindexChange', function (e) {
        tabItems[e.detail.fromIndex].setAttribute('aria-selected', 'false');
        tabItems[e.detail.toIndex].setAttribute('aria-selected', 'true');

        tabPanels[e.detail.fromIndex].hidden = true;
        tabPanels[e.detail.toIndex].hidden = false;
    });

    widgetEl.querySelectorAll('[role=tab]').forEach(function (el) {
        ScrollKeyPreventer.add(el);
    });
});

document.querySelectorAll('.listbox').forEach(function (widgetEl) {
    pageWidgets.push(new Listbox(widgetEl, {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true'
    }));

    widgetEl.addEventListener('makeup-listbox-change', logEvent);
});

document.querySelectorAll('.listbox-button').forEach(function (widgetEl) {
    const isPhoneInput = widgetEl.parentElement.classList.contains('phone-input');
    if(isPhoneInput) {
        return;
    }

    const options = {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true',
        buttonLabelSelector: '.btn__text',
        floatingLabelSelector: '.btn__floating-label',
        floatingLabelInline: 'btn__floating-label--inline',
        floatingLabelAnimate: 'btn__floating-label--animate',
    };

    pageWidgets.push(new ListboxButton(widgetEl, options));

    widgetEl.addEventListener('makeup-listbox-button-change', (e) => {
        console.log(e.type, e.detail);
    }
    );
});

document.querySelectorAll('.phone-input .listbox-button').forEach(function (widgetEl) {
    const options = {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true',
        buttonLabelSelector: '.btn__text',
        buttonValueType: 'icon',
        listboxOptionIconSelector: '.fflag',
        listboxOptionAriaLabelSelector : '.listbox-button__value span'
    };

    pageWidgets.push(new ListboxButton(widgetEl, options));

    widgetEl.addEventListener('makeup-listbox-button-change', (e) => {
        console.log(e.type, e.detail);
        const selectedOption = widgetEl.querySelector('.listbox-button__option[aria-selected="true"]');
            widgetEl.nextElementSibling.querySelector('.textbox > span').textContent = `+${selectedOption.querySelector('span.fflag')?.dataset.countryCode}`;
    }
    );
});

document.querySelectorAll('.menu-button').forEach(function (widgetEl) {
    const widget = new MenuButton(widgetEl, {
        menuSelector: '.menu-button__menu',
        buttonTextSelector: `.btn__text`
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu-button:not(.filter-menu-button--form)').forEach(function (widgetEl) {
    const widget = new MenuButton(widgetEl, {
        expandedClass: 'filter-menu-button--expanded',
        menuSelector: '.filter-menu-button__menu'
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.menu').forEach(function (widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu').forEach(function (widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
    widgetEl.addEventListener('makeup-menu-toggle', logEvent);
});

// segmented-buttons
document.querySelectorAll('.segmented-buttons').forEach(function (widgetEl) {
    const buttons = widgetEl.querySelectorAll('button');
    buttons.forEach(function (buttonEl) {
        buttonEl.addEventListener('click', function () {
            buttons.forEach(function (el) {
                el.removeAttribute('aria-current');
            });
            buttonEl.setAttribute('aria-current', 'true');
        });
    });
});


// SWITCH - CHECKBOX/FORM VERSION
document.querySelectorAll('input.switch__control').forEach(function (widgetEl) {
    widgetEl.setAttribute('aria-checked', widgetEl.checked ? 'true' : 'false');

    widgetEl.addEventListener('change', function (e) {
        e.target.setAttribute('aria-checked', e.target.checked ? 'true' : 'false');
    });
});

// SWITCH - ARIA/JAVASCRIPT VERSION
document.querySelectorAll('.switch:not(.switch--form)').forEach(function (widgetEl) {
    pageWidgets.push(new Switch(widgetEl, {
        bem: {
            control: 'switch__control'
        }
    }));

    widgetEl.addEventListener('makeup-switch-toggle', logEvent);
});

// TOGGLE-BUTTON
document.querySelectorAll('.toggle-button').forEach(function (elToggleButton) {
    const elGroupPrent = elToggleButton.closest(".toggle-button-group");

    // exit if toggle button IS inside a toggle button group
    // since that will be a separate delegated event handler with params for variations
    if (elGroupPrent) return;

    elToggleButton.addEventListener("click", function () {
        const isToggled = this.getAttribute('aria-pressed') === 'true';

        this.setAttribute('aria-pressed', !isToggled);
    });
});

// TOGGLE-BUTTON-GROUP
(function () {
    const sSelectorButtonGroups = ".toggle-button-group",
        sSelectorButtons = ".toggle-button",
        sAriaSelectedAttr = "aria-pressed"
        ;
    document.querySelectorAll(sSelectorButtonGroups).forEach(function (elToggleButtonGroup) {
        elToggleButtonGroup.addEventListener("click", function (event) {
            const sSelectionType = this.getAttribute(
                "data-selection-type"
            );
            const elClicked = event.target;
            // if delegated event target is not the button, return
            if (!elClicked.matches("button")) return;

            switch (sSelectionType) {
                case "single-optional":
                    handleSingleOptionalSelection(
                        elClicked,
                        elToggleButtonGroup
                    );
                    break;
                case "single-required":
                    handleSingleRequiredlSelection(
                        elClicked,
                        elToggleButtonGroup
                    );
                    break;
                default:
                    handleMultiSelection(elClicked);
            }
        });

        function toggleButton(elButton) {
            const isToggled =
                elButton.getAttribute(sAriaSelectedAttr) === "true";
            elButton.setAttribute(sAriaSelectedAttr, !isToggled);
        }

        function isButtonSelected(elButton) {
            return (
                elButton.getAttribute(sAriaSelectedAttr) &&
                elButton.getAttribute(sAriaSelectedAttr) === "true"
            );
        }

        function handleMultiSelection(elButton) {
            toggleButton(elButton);
        }

        function handleSingleOptionalSelection(elButton, elButtonGroup) {
            if (isButtonSelected(elButton)) {
                return toggleButton(elButton);
            }

            elButtonGroup
                .querySelectorAll(sSelectorButtons)
                .forEach(function (elBtn) {
                    if (isButtonSelected(elBtn)) {
                        toggleButton(elBtn);
                    }
                });

            toggleButton(elButton);
        }

        function handleSingleRequiredlSelection(elButton, elButtonGroup) {
            // if clicked button is already selected, do nothing
            if (isButtonSelected(elButton)) return;

            elButtonGroup
                .querySelectorAll(sSelectorButtons)
                .forEach(function (elBtn) {
                    // console.warn(elBtn);
                    if (isButtonSelected(elBtn)) {
                        toggleButton(elBtn);
                    }
                });

            toggleButton(elButton);
        }
    });
})();
// CHARACTER-METER-COUNTER
const debouncedKeydown = debounce(function (elInput, elMeterText) {
    let ariaLive = 'off'
    const characterCount = elInput.value.length;
    // Match the text to get the max and current character count
    const text = elMeterText.innerHTML.split(/([0-9]+)( \w+ )([0-9]+)/g);

    if (text.length <= 1) {
        return;
    }
    text[1] = characterCount;
    const maxCharacterCount = text[3];

    elMeterText.innerHTML = text.join('');

    if (characterCount >= maxCharacterCount) {
        ariaLive = 'polite';
    }

    elInput.setAttribute('aria-live', ariaLive);
}, 500);

document.querySelectorAll('.field').forEach(function (elCharContainer) {
    const elInput = elCharContainer.querySelector('input,textarea')
    const characterCount = elInput && elInput.dataset.fieldCount;
    if (characterCount) {
        const elMeterText = elCharContainer.querySelector(`#${characterCount}`);
        elInput.addEventListener('keydown', debouncedKeydown.bind(this, elInput, elMeterText));

    }
});

// CHIPS COMBOBOX
(function(){
    document.querySelectorAll('.chips-combobox').forEach(function(elChipsCombobox) {
        const elChipsItems = elChipsCombobox.querySelector('.chips-combobox__items')
            , elCombobox = elChipsCombobox.querySelector('.chips-combobox__combobox')
            , elComboboxOptions = elCombobox.querySelector('.combobox__options')
            , sComboboxOptionSelector = 'div.combobox__option'
            , sChipDeleteSelector = 'button.chip__button'
        ;

        elChipsCombobox.addEventListener("click", function (event) {
            const elClicked = event.target;

            // if delegated event target is not the listbox item or the chip delete, early exit
            if (!elClicked.matches(sComboboxOptionSelector) && !elClicked.matches(sChipDeleteSelector)) return;

            // if clicked item is a combobox item...
            if (elClicked.matches(sComboboxOptionSelector)) {
                const sItemSelected = elClicked.innerText.trim();

                // delete combobox list item
                elComboboxOptions.removeChild(elClicked);

                addChipItem(sItemSelected);
            };

            // if clicked item is a chip delete button...
            if (elClicked.matches(sChipDeleteSelector)) {
                const sChipText = elClicked.previousElementSibling.innerText.trim();
                const elChipParentLI = elClicked.closest("li");

                // delete chip
                elChipsItems.removeChild(elChipParentLI);

                addComboboxItem(sChipText);
            };
        });

        function addChipItem(sChipName) {
            const sChipItem = `
            <li>
                <span class="chip">
                    <span id="chip-interactive-1-1-text" class="chip__text">
                        ${sChipName}
                    </span>
                    <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                        <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                            <use href="#icon-close-12"></use>
                        </svg>
                    </button>
                </span>
            </li>
            `;
            elChipsItems.insertAdjacentHTML('beforeend', sChipItem);
        }

        function addComboboxItem(sComboboxItemText) {
            const sComboboxItem = `
            <div class="combobox__option" role="option">
                <span>${sComboboxItemText}</span>
            </div>
            `;
            elComboboxOptions.insertAdjacentHTML('beforeend', sComboboxItem);
        }
    });
})();
