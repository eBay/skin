export default { title: 'Star Rating Select/Star Rating Select' };

export const base = () => `
<div class="star-rating-select">
    <span class="radio">
        <input aria-label="1 Star" class="radio__control" type="radio" name="radio-star-rating-select" value="1">
        <span class="radio__icon">
            <svg class="star-rating-select__icon" focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="radio">
        <input aria-label="2 Stars" class="radio__control" type="radio" name="radio-star-rating-select" value="2">
        <span class="radio__icon">
            <svg class="star-rating-select__icon" focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="radio">
        <input aria-label="2 Stars" class="radio__control" type="radio" name="radio-star-rating-select" value="3">
        <span class="radio__icon">
            <svg class="star-rating-select__icon" focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="radio">
        <input aria-label="2 Stars" class="radio__control" type="radio" name="radio-star-rating-select" value="4">
        <span class="radio__icon">
            <svg class="star-rating-select__icon" focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>

    <span class="radio">
        <input aria-label="2 Stars" class="radio__control" type="radio" name="radio-star-rating-select" value="5">
        <span class="radio__icon">
            <svg class="star-rating-select__icon" focusable="false">
                <use xlink:href="#icon-star-dynamic"></use>
            </svg>
        </span>
    </span>
</div>
`;
