export default { title: 'Tooltip/Tooltip' };

export const baseOpen = () => `
<span class="tooltip">
    <button accesskey="s" class="icon-btn tooltip__host" aria-describedby="tooltip-0" aria-expanded="true" aria-label="Settings">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="bottom: calc(100% - 100px); left: 0">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Use Access Key 'S' to display settings.</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const baseClosed = () => `
<span class="tooltip">
    <button accesskey="s" class="icon-btn tooltip__host" aria-describedby="tooltip-0" aria-expanded="false" aria-label="Settings">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="bottom: calc(100% + 12px); left: 0">
        <span class="tooltip__pointer tooltip__pointer--bottom-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Use Access Key 'S' to display settings.</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const pointerLeftOpen = () => `
<span class="tooltip">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="bottom: -4px; left: calc(100% + 12px)">
        <span class="tooltip__pointer tooltip__pointer--left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer Left</p>
                </div>
            </div>
        </div>
    </div>
</span>`;
