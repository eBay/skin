export default { title: "Skin/Charts/Chart Legend" };

export const basic = () => `
<div style="width:250px;">
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
</div>`;
