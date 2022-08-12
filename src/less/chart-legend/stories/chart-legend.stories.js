export default { title: 'Chart-legend/Chart-legend' };

export const basic = () => `
<div class="chart-legend">
    <ul>
        <li id="chart-legend-label-0" data-id="0" class="chart-legend__item--secondary">Value 1<span class="chart-legend--hidden">50.00%</span></li>
        <li id="chart-legend-label-1" data-id="1" class="chart-legend__item--quinary">Value 2<span class="chart-legend--hidden">33.30%</span></li>
        <li id="chart-legend-label-2" data-id="2" class="chart-legend__item--septenary">Value 3<span class="chart-legend--hidden">16.67%</span></li>
    </ul>
</div>
`;

export const table = () => `
<div class="chart-legend chart-legend__table">
    <ul>
        <li id="chart-legend-label-0" data-id="0" class="chart-legend__item--secondary">Value 1<span class="value">$ 3</span><span class="chart-legend--hidden">50.00%</span></li>
        <li id="chart-legend-label-1" data-id="1" class="chart-legend__item--quinary">Value 2<span class="value">$ 2</span><span class="chart-legend--hidden">33.30%</span></li>
        <li id="chart-legend-label-2" data-id="2" class="chart-legend__item--septenary">Value 3<span class="value">$ 1</span><span class="chart-legend--hidden">16.67%</span></li>
    </ul>
</div>
`;

export const patternfill = () => `
<div class="chart-legend">
    <ul>
        <li id="chart-legend-label-0" data-id="0" class="chart-legend__item--pattern-0 chart-legend__item--patternfill">Value 1<span class="chart-legend--hidden">50.00%</span></li>
        <li id="chart-legend-label-1" data-id="1" class="chart-legend__item--pattern-1 chart-legend__item--patternfill">Value 2<span class="chart-legend--hidden">33.30%</span></li>
        <li id="chart-legend-label-2" data-id="2" class="chart-legend__item--pattern-2 chart-legend__item--patternfill">Value 3<span class="chart-legend--hidden">16.67%</span></li>
    </ul>
</div>
`;
