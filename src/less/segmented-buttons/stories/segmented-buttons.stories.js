export default { title: "Segmented Buttons" };
export const base = () => `
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
`;

export const shortItems = () => `
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
`;

export const withIcons = () => `
    <div class="segmented-buttons">
        <ul>
            <li>
                <button type="button" aria-current="true" class="segmented-buttons__button">
                <span class="segmented-buttons__button-cell">
                        <svg aria-hidden="true" class="icon icon--full-view-24" focusable="false" height="16" width="16">
                            <use href="#icon-full-view-24"></use>
                        </svg>
                        <span>Desktop</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="segmented-buttons__button">
                    <span class="segmented-buttons__button-cell">
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
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`;

export const inheritFontSize = () => `
<div style="font-size: 300%">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`;

export const inheritColors = () => `
<div style="color:red;">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`;

export const rtl = () => `
<div dir="rtl">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`;
