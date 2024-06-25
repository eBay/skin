export default { title: "Skin/Charts/Donut Chart" };

export const base = () => `
<div class="donut-chart">
    <div class="donut-chart__grid">
        <div class="donut-chart__title">
            Donut chart title
        </div>
        <div class="donut-chart__metric">
            <div class="donut-chart__metric-value">
                175
            </div>
            <div class="donut-chart__metric-label">
                Returns processed
            </div>
        </div>
        <div class="donut-chart__graph">
            <div style="position:absolute;width:100%;height:100%;background-color:var(--color-background-secondary);border-radius:16px;display:grid;place-items:center;">Graph placeholder</div>
        </div>
        <div class="donut-chart__legend">
            <div class="chart-legend">
                <dl>
                    <div class="chart-legend__item chart-legend__item--primary">
                        <dt class="chart-legend__label">Portion 1</dt>
                        <dd class="chart-legend__value">10%</dd>
                    </div>
                    <div class="chart-legend__item chart-legend__item--secondary">
                        <dt class="chart-legend__label">Portion 2</dt>
                        <dd class="chart-legend__value">20%</dd>
                    </div>
                    <div class="chart-legend__item chart-legend__item--tertiary">
                        <dt class="chart-legend__label">Portion 3</dt>
                        <dd class="chart-legend__value">30%</dd>
                    </div>
                </dl>
            <div>
        </div>
    </div>
</div>`;
