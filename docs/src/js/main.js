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
document.getElementById('busy-button').addEventListener('click', function() {
    const button = this;
    button.setAttribute('aria-label', 'Busy...');
    button.innerHTML = `
        <span class="btn__cell">
            <span class="progress-spinner" role="img" aria-label="Busy">
                <svg class="icon icon--spinner-24" focusable="false" height="24" width="24" aria-hidden="true" >
                    <use href="static/icons.svg#icon-spinner-24"></use>
                </svg>
            </span>
        </span>
    `;

    window.setTimeout(function() {
        button.removeAttribute('aria-label');
        button.innerHTML = `Activate Spinner`;
    }, 2000);
});

// MIXED CHECKBOX
document.querySelectorAll('.checkbox input[aria-checked="mixed"]').forEach(function(el) {
    el.addEventListener('click', function() {
        const isChecked = (this.checked === true);

        this.setAttribute('aria-checked', isChecked ? 'mixed' : 'false');
    });
});

// BREADCRUMBS
document.querySelectorAll('.breadcrumbs').forEach(function(el) {
    const width = el.offsetWidth;
    const scrollLength = el.scrollWidth;
    const difference = scrollLength - width;
    if (difference) {
        el.scroll(difference, 0);
    }
})

// EXPAND BUTTON
// Potential candidate for makeup-expander, but expander currently requires a wrapper around the "host"
document.querySelectorAll('.expand-btn').forEach(function(el) {
    el.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

document.querySelectorAll('.filter-menu-button--form button').forEach(function(el) {
    el.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

// FAKE MENU BUTTON
document.querySelectorAll('.fake-menu-button').forEach(function(widgetEl) {
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
document.querySelectorAll('.combobox').forEach(function(widgetEl) {
    pageWidgets.push(new Combobox(widgetEl));

    widgetEl.addEventListener('makeup-combobox-change', logEvent);
});

// DIALOGS
document.querySelectorAll('.dialog-button').forEach(function(el) {
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

// TOOLTIP
document.querySelectorAll('.tooltip').forEach(function(widgetEl) {
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

// INFOTIP
document.querySelectorAll('.infotip').forEach(function(widgetEl) {
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

// TOURTIP
document.querySelectorAll('.tourtip').forEach(function(widgetEl) {
    widgetEl.querySelector('.tourtip__close').addEventListener('click', function() {
        widgetEl.classList.remove('tourtip--expanded');
    });
});

// FLOATING LABEL
document.querySelectorAll('.floating-label').forEach(function(el) {
    pageWidgets.push(new FloatingLabel(el));
});

document.querySelectorAll('.legacy-floating-label').forEach(function(el) {
    pageWidgets.push(new FloatingLabel(el, {
        labelElementInlineModifier: 'legacy-floating-label__label--inline',
        labelElementDisabledModifier: 'legacy-floating-label__label--disabled',
        labelElementAnimateModifier: 'legacy-floating-label__label--animate',
        textboxElementBackgroundRGB: ['rgba(0, 0, 0, 0)']
    }));
});

// PROGRESS BAR PLAY
document.querySelectorAll('.progress-bar-toggle').forEach(function(el) {
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

    el.addEventListener('click', function() {
        if(progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        } else {
            progressRun();
            progressBarInterval = setInterval(progressRun, 1000);
        }
    });
});

// PROGRESS BAR RESET
document.querySelectorAll('.progress-bar-reset').forEach(function(el) {
    const progressId = el.dataset.progressResetButtonFor;
    const progress = document.getElementById(progressId);

    el.addEventListener('click', function() {
        if(progressBarInterval) {
            clearInterval(progressBarInterval);
            progressBarInterval = null;
        }
        progress.value = 0;
    });
});

// STAR RATING SELECT
document.querySelectorAll('.star-rating-select').forEach(function(widgetEl) {
    widgetEl.addEventListener('change', function(e) {
        const selectedIndex = (e.target.value - 1);
        widgetEl.querySelectorAll('input').forEach(function(inputEl, index) {
            inputEl.classList.toggle('star-rating-select__control--filled', index < selectedIndex);
        });
    });
});

// TABS
document.querySelectorAll('.tabs').forEach(function(widgetEl) {
    RovingTabindex.createLinear(widgetEl, '[role=tab]', { wrap: true });
    const tabItems = widgetEl.querySelectorAll('[role=tab]');
    const tabPanels = widgetEl.querySelectorAll('[role=tabpanel]');

    ScrollKeyPreventer.add(widgetEl);

    widgetEl.addEventListener('rovingTabindexChange', function(e) {
        tabItems[e.detail.fromIndex].setAttribute('aria-selected', 'false');
        tabItems[e.detail.toIndex].setAttribute('aria-selected', 'true');

        tabPanels[e.detail.fromIndex].hidden = true;
        tabPanels[e.detail.toIndex].hidden = false;
    });

    widgetEl.querySelectorAll('[role=tab]').forEach(function(el) {
        ScrollKeyPreventer.add(el);
    });
});

document.querySelectorAll('.listbox').forEach(function(widgetEl) {
    pageWidgets.push(new Listbox(widgetEl, {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true'
    }));

    widgetEl.addEventListener('makeup-listbox-change', logEvent);
});

document.querySelectorAll('.listbox-button').forEach(function(widgetEl) {
    pageWidgets.push(new ListboxButton(widgetEl, {
        autoSelect: widgetEl.dataset.makeupAutoSelect === 'true',
        buttonLabelSelector: '.btn__text',
        floatingLabelSelector: '.btn__floating-label',
        floatingLabelInline: 'btn__floating-label--inline',
        floatingLabelAnimate: 'btn__floating-label--animate'
    }));

    widgetEl.addEventListener('makeup-listbox-button-change', logEvent);
});

document.querySelectorAll('.menu-button').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        menuSelector: '.menu-button__menu',
        buttonTextSelector: `.btn__text`
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu-button:not(.filter-menu-button--form)').forEach(function(widgetEl) {
    const widget = new MenuButton(widgetEl, {
        expandedClass: 'filter-menu-button--expanded',
        menuSelector: '.filter-menu-button__menu'
    });

    widget.menu.el.addEventListener('makeup-menu-select', logEvent);
    widget.menu.el.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
});

document.querySelectorAll('.filter-menu').forEach(function(widgetEl) {
    pageWidgets.push(new Menu(widgetEl));

    widgetEl.addEventListener('makeup-menu-select', logEvent);
    widgetEl.addEventListener('makeup-menu-change', logEvent);
    widgetEl.addEventListener('makeup-menu-toggle', logEvent);
});

// segmented-buttons
document.querySelectorAll('.segmented-buttons').forEach(function(widgetEl) {
    const buttons = widgetEl.querySelectorAll('button');
    buttons.forEach(function(buttonEl) {
        buttonEl.addEventListener('click', function() {
            buttons.forEach(function(el) {
                el.removeAttribute('aria-current');
            });
            buttonEl.setAttribute('aria-current', 'true');
        });
    });
});


// SWITCH - CHECKBOX/FORM VERSION
document.querySelectorAll('input.switch__control').forEach(function(widgetEl) {
    widgetEl.setAttribute('aria-checked', widgetEl.checked ? 'true' : 'false');

    widgetEl.addEventListener('change', function(e) {
        e.target.setAttribute('aria-checked', e.target.checked ? 'true' : 'false');
    });
});

// SWITCH - ARIA/JAVASCRIPT VERSION
document.querySelectorAll('.switch:not(.switch--form)').forEach(function(widgetEl) {
    pageWidgets.push(new Switch(widgetEl, {
        bem: {
            control: 'switch__control'
        }
    }));

    widgetEl.addEventListener('makeup-switch-toggle', logEvent);
});

// TOGGLE-BUTTON
document.querySelectorAll('.toggle-button').forEach(function(elToggleButton) {
    const elGroupPrent = elToggleButton.closest(".toggle-button-group");

    // exit if toggle button IS inside a toggle button group
    // since that will be a separate delegated event handler with params for variations
    if (elGroupPrent) return;

    elToggleButton.addEventListener("click", function() {
        const isToggled = this.getAttribute('aria-pressed') === 'true';

        this.setAttribute('aria-pressed', !isToggled);
    });
});

// TOGGLE-BUTTON-GROUP
(function(){
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
const debouncedKeydown = debounce(function(elInput, elMeterText) {
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

document.querySelectorAll('.field').forEach(function(elCharContainer) {
    const elInput = elCharContainer.querySelector('input,textarea')
    const characterCount = elInput && elInput.dataset.fieldCount;
    if (characterCount) {
        const elMeterText = elCharContainer.querySelector(`#${characterCount}`);
        elInput.addEventListener('keydown', debouncedKeydown.bind(this, elInput, elMeterText));

    }
});

// INPUT CHIPS
document.querySelectorAll('.input-chips').forEach(function(elInputChips) {
    const elBtnListToggle = elInputChips.querySelector('.input-chips_list-toggle')
        , elCombobox = elInputChips.querySelector('.input-chips__combobox')
    ;

    elBtnListToggle.addEventListener('click', function() {
        const isExpanded = elCombobox.classList.contains('combobox--expanded');

        if (isExpanded) {
            elInputChips.classList.remove('input-chips--expanded');
            return elCombobox.classList.remove('combobox--expanded');
        }

        elInputChips.classList.add('input-chips--expanded');
        return elCombobox.classList.add('combobox--expanded');
    });
});
