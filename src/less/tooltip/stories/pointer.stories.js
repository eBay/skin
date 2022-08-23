export default { title: 'Tooltip/Pointer' };

const pointerStyles = {
    left: {
        transform: 'translateX(16px) translateY(-50%)',
        left: '100%',
        right: 'auto',
        top: '0',
        bottom: 'auto',
    },
    'left-top': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: '-25%',
        bottom: 'auto',
    },
    'left-bottom': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: 'auto',
        bottom: '8px',
    },
    right: {
        transform: 'translateX(-16px) translateY(-50%)',
        left: 'auto',
        right: '100%',
        top: '0',
        bottom: 'auto',
    },
    'right-top': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: '-25%',
        bottom: 'auto',
    },
    'right-bottom': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: 'auto',
        bottom: '4px',
    },
    top: {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-left': {
        left: '4px',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-right': {
        left: 'auto',
        right: '4px',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'bottom-right': {
        left: 'auto',
        right: '4px',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    'bottom-left': {
        left: '4px',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    bottom: {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
};

function getPointerStyle(key) {
    const ret = [];
    for (const pointerKey of Object.keys(pointerStyles[key])) {
        ret.push(`${pointerKey}: ${pointerStyles[key][pointerKey]}`);
    }
    return ret.join('; ');
}

export const top = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle('top')}">
        <span class="tooltip__pointer tooltip__pointer--top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const topLeft = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'top-left'
    )}">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const leftTop = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'left-top'
    )}">
        <span class="tooltip__pointer tooltip__pointer--left-top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
               </div>
            </div>
        </div>
    </div>
</span>`;

export const left = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle('left')}">
        <span class="tooltip__pointer tooltip__pointer--left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const leftBottom = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'left-bottom'
    )}">
        <span class="tooltip__pointer tooltip__pointer--left-bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const bottomLeft = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'bottom-left'
    )}">
        <span class="tooltip__pointer tooltip__pointer--bottom-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const bottom = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'bottom'
    )}">
        <span class="tooltip__pointer tooltip__pointer--bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const bottomRight = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'bottom-right'
    )}">
        <span class="tooltip__pointer tooltip__pointer--bottom-right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const rightBottom = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'right-bottom'
    )}">
        <span class="tooltip__pointer tooltip__pointer--right-bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const right = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle('right')}">
        <span class="tooltip__pointer tooltip__pointer--right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const rightTop = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'right-top'
    )}">
        <span class="tooltip__pointer tooltip__pointer--right-top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const topRight = () => `
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${getPointerStyle(
        'top-right'
    )}">
        <span class="tooltip__pointer tooltip__pointer--top-right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`;
