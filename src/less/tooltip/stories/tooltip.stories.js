export default { title: 'Tooltip' };

export const collapsed = () => `
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

export const expanded = () => `
<span class="tooltip">
    <button accesskey="s" class="icon-btn tooltip__host" aria-describedby="tooltip-0" aria-expanded="true" aria-label="Settings">
        <svg class="icon icon--settings" focusable="false" height="16" width="16" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="bottom: calc(100% - 90px); left: 4px">
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
