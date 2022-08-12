export default { title: 'Chart-legend' };

export const basic = () => `
<div class="chart-legend">
    <ul>
        <li id="chart-legend-label-0" data-id="0" class="chart-legend__item chart-legend__item--primary">
            Value 1<span class="clipped">28.09%</span>
        </li>
        <li id="chart-legend-label-1" data-id="1" class="chart-legend__item chart-legend__item--tertiary">
            Value 2<span class="clipped">23.60%</span>
        </li>
        <li id="chart-legend-label-2" data-id="2" class="chart-legend__item chart-legend__item--secondary">
            Value 3<span class="clipped">19.66%</span>
        </li>
        <li id="chart-legend-label-3" data-id="3" class="chart-legend__item chart-legend__item--quaternary">
            Value 1<span class="clipped">16.29%</span>
        </li>
        <li id="chart-legend-label-4" data-id="4" class="chart-legend__item chart-legend__item--quinary">
            Value 2<span class="clipped">12.36%</span>
        </li>
    </ul>
</div>
`;

export const table = () => `
<div class="chart-legend chart-legend__table">
    <ul>
        <li id="chart-legend-label-0" data-id="0" class="chart-legend__item chart-legend__item--primary">
            Value 1<span class="value">$ 50</span><span class="clipped">28.09%</span>
        </li>
        <li id="chart-legend-label-1" data-id="1" class="chart-legend__item chart-legend__item--tertiary">
            Value 2<span class="value">$ 42</span><span class="clipped">23.60%</span>
        </li>
        <li id="chart-legend-label-2" data-id="2" class="chart-legend__item chart-legend__item--secondary">
            Value 3<span class="value">$ 35</span><span class="clipped">19.66%</span>
        </li>
        <li id="chart-legend-label-3" data-id="3" class="chart-legend__item chart-legend__item--quaternary">
            Value 1<span class="value">$ 29</span><span class="clipped">16.29%</span>
        </li>
        <li id="chart-legend-label-4" data-id="4" class="chart-legend__item chart-legend__item--quinary">
            Value 2<span class="value">$ 22</span><span class="clipped">12.36%</span>
        </li>
    </ul>
</div>
`;
