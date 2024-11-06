export default { title: "Skin/EEK" };

export const typical = () => `
    <div class="eek eek--rating-4" role="figure" aria-label="Energy Rating: B. Range: A++ - E">
        <div class="eek__container">
            <span class="eek__rating-range">
                <span aria-hidden="true">A++</span>
                <svg class="icon icon--eek-range-arrow" aria-hidden="true">
                    <use href="#icon-eek-range-arrow"></use>
                </svg>
                <span aria-hidden="true">E</span>
            </span>
            <span class="eek__rating" aria-hidden="true">
                B
            </span>
        </div>
        <svg class="icon icon--eek-arrow" aria-hidden="true">
            <use href="#icon-eek-arrow"></use>
        </svg>
    </div>
`;

export const large = () => `
    <div class="eek eek--large eek--rating-1" role="figure" aria-label="Energy Rating: A+++. Range: A+++ - D">
        <div class="eek__container">
            <span class="eek__rating-range">
                <span aria-hidden="true">A+++</span>
                <svg class="icon icon--eek-range-arrow" aria-hidden="true">
                    <use href="#icon-eek-range-arrow"></use>
                </svg>
                <span aria-hidden="true">D</span>
            </span>
            <span class="eek__rating" aria-hidden="true">
                A+++
            </span>
        </div>
        <svg class="icon icon--eek-arrow" aria-hidden="true">
            <use href="#icon-eek-arrow"></use>
        </svg>
    </div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="eek eek--rating-4" role="figure" aria-label="Energy Rating: B. Range: A++ - E">
        <div class="eek__container">
            <span class="eek__rating-range">
                <span aria-hidden="true">A++</span>
                <svg class="icon icon--eek-range-arrow" aria-hidden="true">
                    <use href="#icon-eek-range-arrow"></use>
                </svg>
                <span aria-hidden="true">E</span>
            </span>
            <span class="eek__rating" aria-hidden="true">
                B
            </span>
        </div>
        <svg class="icon icon--eek-arrow" aria-hidden="true">
            <use href="#icon-eek-arrow"></use>
        </svg>
    </div>
</div>
`;

export const RTLLarge = () => `
<div dir="rtl">
    <div class="eek eek--large eek--rating-1" role="figure" aria-label="Energy Rating: A+++. Range: A+++ - D">
        <div class="eek__container">
            <span class="eek__rating-range">
                <span aria-hidden="true">A+++</span>
                <svg class="icon icon--eek-range-arrow" aria-hidden="true">
                    <use href="#icon-eek-range-arrow"></use>
                </svg>
                <span aria-hidden="true">D</span>
            </span>
            <span class="eek__rating" aria-hidden="true">
                A+++
            </span>
        </div>
        <svg class="icon icon--eek-arrow" aria-hidden="true">
            <use href="#icon-eek-arrow"></use>
        </svg>
    </div>
</div>
`;
