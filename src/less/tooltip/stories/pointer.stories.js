export default { title: 'Tooltip/Tooltip/Pointer' };

export const left = () => `
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
