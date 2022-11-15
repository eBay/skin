export default { title: 'Chart-legend' };

export const basic = () => `
<div class="chart-legend">
    <dl>
        <div id="chart-legend-label-0" data-id="0" class="chart-legend__item chart-legend__item--primary">
            <dt>Value 1</dt>
            <dd class="value">$ 50<span class="clipped">28.09%</span></dd>
        </div>
        <div id="chart-legend-label-1" data-id="1" class="chart-legend__item chart-legend__item--tertiary">
            <dt>Value 2</dt>
            <dd class="value">$ 42<span class="clipped">23.60%</span></dd>
        </div>
        <div id="chart-legend-label-2" data-id="2" class="chart-legend__item chart-legend__item--secondary">
            <dt>Value 3</dt>
            <dd class="value">$ 35<span class="clipped">19.66%</span></dd>
        </div>
        <div id="chart-legend-label-3" data-id="3" class="chart-legend__item chart-legend__item--quaternary">
            <dt>Value 1</dt>
            <dd class="value">$ 29<span class="clipped">16.29%</span></dd>
        </div>
        <div id="chart-legend-label-4" data-id="4" class="chart-legend__item chart-legend__item--quinary">
            <dt>Value 2</dt>
            <dd class="value">$ 22<span class="clipped">12.36%</span></dd>
        </div>
    </dl>
</div>
`;
