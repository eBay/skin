export default { title: 'Chart-legend' };

export const basic = () => `
<div class="chart-legend">
    <dl>
        <div class="chart-legend__item chart-legend__item--primary">
            <dt>Value 1</dt>
            <dd class="value">$ 50<span class="clipped">28.09%</span></dd>
        </div>
        <div class="chart-legend__item chart-legend__item--tertiary">
            <dt>Value 2</dt>
            <dd class="value">$ 42<span class="clipped">23.60%</span></dd>
        </div>
        <div class="chart-legend__item chart-legend__item--secondary">
            <dt>Value 3</dt>
            <dd class="value">$ 35<span class="clipped">19.66%</span></dd>
        </div>
        <div class="chart-legend__item chart-legend__item--quaternary">
            <dt>Value 1</dt>
            <dd class="value">$ 29<span class="clipped">16.29%</span></dd>
        </div>
        <div class="chart-legend__item chart-legend__item--quinary">
            <dt>Value 2</dt>
            <dd class="value">$ 22<span class="clipped">12.36%</span></dd>
        </div>
    </dl>
</div>
`;
