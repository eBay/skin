export default { title: 'Star Rating Select/Star Rating Select' };

export const base = () => `
<div role="radiogroup" aria-label="Rate this product" class="star-rating-select">
    <span class="star-rating-select__radio">
        <input aria-label="1 Star" type="radio" name="radio-star-rating-select" value="1">
        <span class="star-rating-select__icon">
            <svg focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="star-rating-select__radio">
        <input aria-label="2 Stars" type="radio" name="radio-star-rating-select" value="2">
        <span class="star-rating-select__icon">
            <svg focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="star-rating-select__radio">
        <input aria-label="3 Stars" type="radio" name="radio-star-rating-select" value="3">
        <span class="star-rating-select__icon">
            <svg focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="star-rating-select__radio">
        <input aria-label="4 Stars" type="radio" name="radio-star-rating-select" value="4">
        <span class="star-rating-select__icon">
            <svg focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="star-rating-select__radio">
        <input aria-label="5 Stars" type="radio" name="radio-star-rating-select" value="5">
        <span class="star-rating-select__icon">
            <svg focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>
</div>
`;
