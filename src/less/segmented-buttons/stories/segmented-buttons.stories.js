export default { title: "Segmented Buttons" };
export const base = () => `
    <div class="segmented-buttons">
        <ul class="segmented-buttons__items">
            <li class="segmented-buttons__item"><button type="button" class="btn" aria-current="true">Day</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Month</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Year</button></li>
        </ul>
    </div>
`;

export const shortItems = () => `
    <div class="segmented-buttons">
        <ul class="segmented-buttons__items">
            <li class="segmented-buttons__item"><button type="button" class="btn">Q1</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn" aria-current="true">Q2</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Q3</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Q4</button></li>
        </ul>
    </div>
`;

export const withIcons = () => `
    <div class="segmented-buttons">
        <ul class="segmented-buttons__items">
            <li class="segmented-buttons__item">
                <button type="button" aria-current="true" class="btn">
                <span class="btn__cell">
                        <svg aria-hidden="true" class="icon icon--tick-24" focusable="false" height="16" width="16">
                            <use href="#icon-tick-24"></use>
                        </svg>
                        <span>Desktop</span>
                    </span>
                </button>
            </li>
            <li class="segmented-buttons__item">
                <button type="button" class="btn">
                    <span class="btn__cell">
                        <svg aria-hidden="true" class="icon icon--mobile-24" focusable="false" height="16" width="16">
                            <use href="#icon-mobile-24"></use>
                        </svg>
                        <span>Mobile</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
`;

export const inContainer = () => `
<div style="width: 300px;">
    <div class="segmented-buttons">
        <ul class="segmented-buttons__items">
            <li class="segmented-buttons__item"><button type="button" class="btn">Q1</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Q2</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn" aria-current="true">Q3</button></li>
            <li class="segmented-buttons__item"><button type="button" class="btn">Q4</button></li>
        </ul>
    </div>
</div>
`;
