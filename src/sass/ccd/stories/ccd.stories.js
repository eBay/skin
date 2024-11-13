export default { title: "Skin/CCD" };

export const withChargerAndUsb = () => `
<div class="ccd" role="figure" aria-label="Charger included. 1001 - 2000 watts. Fast charging USB PD">
    <svg class="icon ccd__charger-icon">
        <use href="#icon-ccd-charger-included"/>
    </svg>
    <div class="ccd__description-figure">

        <svg class="icon ccd__top-icon" aria-hidden="true">
            <use href="#icon-ccd-top"/>
        </svg>
        <div class="ccd__body">
            <div>1001 - 2000</div>
            <div>W</div>
            <div>USB PD</div>
        </div>
    </div>
</div>
`;

export const withoutChargerAndUsb = () => `
<div class="ccd" role="figure" aria-label="Charger not included. 1001 - 2000 watts. Fast charging USB PD">
    <svg class="icon ccd__charger-icon">
        <use href="#icon-ccd-charger-not-included"/>
    </svg>
    <div class="ccd__description-figure">

        <svg class="icon ccd__top-icon" aria-hidden="true">
            <use href="#icon-ccd-top"/>
        </svg>
        <div class="ccd__body">
            <div>1001 - 2000</div>
            <div>W</div>
            <div>USB PD</div>
        </div>
    </div>
</div>
`;

export const withChargerAndNoUsb = () => `
<div class="ccd" role="figure" aria-label="Charger included. 1001 - 2000 watts">
    <svg class="icon ccd__charger-icon">
        <use href="#icon-ccd-charger-included"/>
    </svg>
    <div class="ccd__description-figure">

        <svg class="icon ccd__top-icon" aria-hidden="true">
            <use href="#icon-ccd-top"/>
        </svg>
        <div class="ccd__body">
            <div>1001 - 2000</div>
            <div>W</div>
        </div>
    </div>
</div>
`;

export const withoutChargerAndNoUsb = () => `
<div class="ccd" role="figure" aria-label="Charger not included. 1001 - 2000 watts. Fast charging USB PD">
    <svg class="icon ccd__charger-icon">
        <use href="#icon-ccd-charger-not-included"/>
    </svg>
    <div class="ccd__description-figure">

        <svg class="icon ccd__top-icon" aria-hidden="true">
            <use href="#icon-ccd-top"/>
        </svg>
        <div class="ccd__body">
            <div>1001 - 2000</div>
            <div>W</div>
        </div>
    </div>
</div>
`;

export const withChargerAndLargeText = () => `
<div class="ccd" role="figure" aria-label="Charger included. 1001.0003 - 2000.0005 watts. Fast charging USB PD">
    <svg class="icon ccd__charger-icon">
        <use href="#icon-ccd-charger-included"/>
    </svg>
    <div class="ccd__description-figure">

        <svg class="icon ccd__top-icon" aria-hidden="true">
            <use href="#icon-ccd-top"/>
        </svg>
        <div class="ccd__body">
            <div>1001.0003 - 2000.0005</div>
            <div>W</div>
            <div>USB PD</div>
        </div>
    </div>
</div>
`;

export const rtl = () => `
<div dir="rtl">
    <div class="ccd" role="figure" aria-label="Charger included. 1001 - 2000 watts. Fast charging USB PD">
        <svg class="icon ccd__charger-icon">
            <use href="#icon-ccd-charger-included"/>
        </svg>
        <div class="ccd__description-figure">

            <svg class="icon ccd__top-icon" aria-hidden="true">
                <use href="#icon-ccd-top"/>
            </svg>
            <div class="ccd__body">
                <div>1001 - 2000</div>
                <div>W</div>
                <div>USB PD</div>
            </div>
        </div>
    </div>
</div>`;

export const largerFontSize = () => `
<div style="font-size:200%">
    <div class="ccd" role="figure" aria-label="Charger included. 1001 - 2000 watts. Fast charging USB PD">
        <svg class="icon ccd__charger-icon">
            <use href="#icon-ccd-charger-included"/>
        </svg>
        <div class="ccd__description-figure">

            <svg class="icon ccd__top-icon" aria-hidden="true">
                <use href="#icon-ccd-top"/>
            </svg>
            <div class="ccd__body">
                <div>1001 - 2000</div>
                <div>W</div>
                <div>USB PD</div>
            </div>
        </div>
    </div>
</div>`;
