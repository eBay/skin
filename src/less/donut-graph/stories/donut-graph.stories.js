export default { title: 'Donut-graph' };

export const basic = () => `
<div class="donut-graph donut-graph-vertical"><svg version="1.1" width="190"
        height="190" viewBox="0 0 190 190" role="graphics-document" aria-labelledby="donutcharttitle">
        <desc>This donut chart is displaying a selection of sample values</desc>
        <defs>
            <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5"
                x="0" y="0" id="dataVizPattern0">
                <rect x="0" y="0" width="3" height="5"
                    fill="var(--color-data-viz-chart-quaternary-background)"></rect>
                <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                    fill="none"></path>
            </pattern>
            <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5"
                height="3" x="0" y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                <rect x="0" y="0" width="4.5" height="3"
                    fill="var(--color-data-viz-chart-tertiary-background)"></rect>
                <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                    fill="none"></path>
            </pattern>
        </defs>
        <path class="donut-graph__segment donut-graph__segment--primary"
            d="M 95 11.299999999999997 A 83.7 83.7 0 0 1 112.40220852144647 176.87095418141953 Q 111.25741519711167 177.10594650272733 111.7090100636981 179.3866672389142 L 112.61219979687097 183.94810871128794 Q 113.0637946634574 186.22882944747482 114.33578724605164 185.96772686824391 A 93 93 0 0 0 95 2 Q 93.70151722845951 2.0090652671347016 93.73397929774802 4.333838635456345 L 93.79890343632505 8.98338537209959 Q 93.83136550561356 11.308158740421234 95 11.299999999999997"
            data-id="0" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-0"></path>
        <path class="donut-graph__segment donut-graph__segment--tertiary"
            d="M 100.8386168523833 178.4961110067473 A 83.7 83.7 0 0 1 15.396569586095652 69.13527757081687 Q 15.765456928316212 68.0263613092062 13.564497398547218 67.27709356779525 L 9.162578339009244 65.77855808497338 Q 6.96161880924025 65.02929034356244 6.5517439845507255 66.26141952312986 A 93 93 0 0 0 101.48735205820367 187.77345667416364 Q 102.78203942990534 187.6738359102039 102.5874884441577 185.35699001244882 L 102.19838647266243 180.72329821693862 Q 102.0038354869148 178.40645231918353 100.8386168523833 178.4961110067473"
            data-id="1" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-1"></path>
        <path class="donut-graph__segment donut-graph__segment--secondary"
            d="M 19.77093832475971 58.308335013754245 A 83.7 83.7 0 0 1 83.35121144964256 12.114562646330555 Q 84.50960835066778 11.959999499978196 84.21820858263077 9.653332819422033 L 83.63540904655676 5.0399994583097225 Q 83.34400927851975 2.73333277775356 82.05690161071396 2.9050696070339512 A 93 93 0 0 0 11.412153694177462 54.23148334861583 Q 10.851084120660175 55.40252588444828 12.954807017643674 56.39246273733707 L 17.162252811610657 58.372336443114655 Q 19.265975708594155 59.36227329600345 19.77093832475971 58.308335013754245"
            data-id="2" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-2"></path>
    </svg>
</div>
`;

export const maxValues = () => `
<div class="donut-graph">
    <svg version="1.1" width="190"
        height="190" viewBox="0 0 190 190" role="graphics-document" aria-labelledby="donutcharttitle">
        <desc>This donut chart is displaying a selection of sample values</desc>
        <defs>
            <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5"
                x="0" y="0" id="dataVizPattern0">
                <rect x="0" y="0" width="3" height="5"
                    fill="var(--color-data-viz-chart-quaternary-background)"></rect>
                <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                    fill="none"></path>
            </pattern>
            <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5"
                height="3" x="0" y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                <rect x="0" y="0" width="4.5" height="3"
                    fill="var(--color-data-viz-chart-tertiary-background)"></rect>
                <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                    fill="none"></path>
            </pattern>
        </defs>
        <path class="donut-graph__segment donut-graph__segment--primary"
            d="M 95 11.299999999999997 A 83.7 83.7 0 0 1 178.6998390577587 94.83586071375336 Q 178.6939720753408 96.00450896067477 181.01880463298914 96.03241198736018 L 185.66846974828584 96.088218040731 Q 187.9933023059342 96.1161210674164 187.99982117528745 94.81762301528151 A 93 93 0 0 0 95 2 Q 93.70151722845951 2.0090652671347016 93.73397929774802 4.333838635456345 L 93.79890343632505 8.98338537209959 Q 93.83136550561356 11.308158740421234 95 11.299999999999997"
            data-id="0" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-0"></path>
        <path class="donut-graph__segment donut-graph__segment--tertiary"
            d="M 177.9081217511633 106.48622425753061 A 83.7 83.7 0 0 1 104.63002252571047 178.14416796236708 Q 103.46820996248563 178.27051951339837 103.70343801699912 180.58358949988167 L 104.1738941260261 185.2097294728482 Q 104.40912218053958 187.5227994593315 105.7000250285672 187.38240884707454 A 93 93 0 0 0 187.12013527907033 107.76247139725623 Q 187.28934770484264 106.47502942108022 184.9821140122216 106.18815368555322 L 180.36764662697945 105.61440221449921 Q 178.0604129343584 105.3275264789722 177.9081217511633 106.48622425753061"
            data-id="1" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-1"></path>
        <path class="donut-graph__segment donut-graph__segment--secondary"
            d="M 92.96487212640598 178.6752547324364 A 83.7 83.7 0 0 1 19.570602296331415 131.27803691025463 Q 19.071434357909027 130.22134181905457 16.962307534517606 131.1997124251394 L 12.744053887734779 133.1564536373091 Q 10.634927064343373 134.13482424339398 11.189558107034912 135.30892990028292 A 93 93 0 0 0 92.73874680711776 187.9725052582627 Q 94.03706611001093 187.99501469607662 94.06113945726065 185.67013932867474 L 94.1092861517601 181.0203885938709 Q 94.13335949900983 178.69551322646896 92.96487212640598 178.6752547324364"
            data-id="2" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-2"></path>
        <path class="donut-graph__segment donut-graph__segment--quaternary"
            d="M 15.25574911610444 120.42723836688369 A 83.7 83.7 0 0 1 25.97882856793973 47.65268862811589 Q 26.646628174951957 46.69361781144516 24.747923402033948 45.35177386176308 L 20.950513856197958 42.668085962398926 Q 19.05180908327995 41.32624201271685 18.309809519933026 42.3918762534621 A 93 93 0 0 0 6.395276795671606 123.2524870743152 Q 6.7983799484072165 124.48684825942689 9.003420449697046 123.74967705294122 L 13.413501452276677 122.27533463996988 Q 15.618541953566492 121.53816343348421 15.25574911610444 120.42723836688369"
            data-id="3" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-3"></path>
        <path class="donut-graph__segment donut-graph__segment--quinary"
            d="M 33.24001000943969 38.50757894756244 A 83.7 83.7 0 0 1 83.35121144964256 12.114562646330555 Q 84.50960835066778 11.959999499978196 84.21820858263077 9.653332819422033 L 83.63540904655676 5.0399994583097225 Q 83.34400927851975 2.73333277775356 82.05690161071396 2.9050696070339512 A 93 93 0 0 0 26.377788899377435 32.23064327506938 Q 25.508080839022583 33.19487746695927 27.245378818047016 34.74000553028529 L 30.71997477609588 37.83026165693732 Q 32.45727275512032 39.37538972026334 33.24001000943969 38.50757894756244"
            data-id="4" role="graphics-symbol" tabindex="-1" aria-labelledby="chart-legend-label-4"></path>
    </svg>
</div>
`;
