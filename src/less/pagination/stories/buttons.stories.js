export default { title: 'Pagination/Buttons' };

export const base = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <button aria-disabled="true" aria-label="Previous Page" class="pagination__previous">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-prev"></use>
        </svg>
    </button>
    <ol class="pagination__items">
        <li>
            <button aria-current="page" class="pagination__item">1</button>
        </li>
        <li>
            <button class="pagination__item">2</button>
        </li>
        <li>
            <button class="pagination__item">3</button>
        </li>
        <li>
            <button class="pagination__item">4</button>
        </li>
        <li>
            <button class="pagination__item">5</button>
        </li>
    </ol>
    <button aria-label="Next Page" class="pagination__next">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-next"></use>
        </svg>
    </button>
</nav>
`;

export const inheritFontSize200Percent = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation" style="font-size: 200%">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <button aria-disabled="true" aria-label="Previous Page" class="pagination__previous">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-prev"></use>
        </svg>
    </button>
    <ol class="pagination__items">
        <li>
            <button aria-current="page" class="pagination__item">1</button>
        </li>
        <li>
            <button class="pagination__item">2</button>
        </li>
        <li>
            <button class="pagination__item">3</button>
        </li>
        <li>
            <button class="pagination__item">4</button>
        </li>
        <li>
            <button class="pagination__item">5</button>
        </li>
    </ol>
    <button aria-label="Next Page" class="pagination__next">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-next"></use>
        </svg>
    </button>
</nav>
`;

inheritFontSize200Percent.story = {
    name: 'Inherit Font-Size (200%)'
}

export const inheritColorGreen = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation" style="color: green">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <button aria-disabled="true" aria-label="Previous Page" class="pagination__previous">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-prev"></use>
        </svg>
    </button>
    <ol class="pagination__items">
        <li>
            <button aria-current="page" class="pagination__item">1</button>
        </li>
        <li>
            <button class="pagination__item">2</button>
        </li>
        <li>
            <button class="pagination__item">3</button>
        </li>
        <li>
            <button class="pagination__item">4</button>
        </li>
        <li>
            <button class="pagination__item">5</button>
        </li>
    </ol>
    <button aria-label="Next Page" class="pagination__next">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use xlink:href="#icon-pagination-next"></use>
        </svg>
    </button>
</nav>
`;

inheritColorGreen.story = {
    name: 'Inherit Color (green)'
}

export const rtl = () => `
<div dir="rtl">
    <nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
        <span aria-live="polite" role="status">
            <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
        </span>
        <button aria-disabled="true" aria-label="Previous Page" class="pagination__previous">
            <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
                <use xlink:href="#icon-pagination-prev"></use>
            </svg>
        </button>
        <ol class="pagination__items">
            <li>
                <button aria-current="page" class="pagination__item">1</button>
            </li>
            <li>
                <button class="pagination__item">2</button>
            </li>
            <li>
                <button class="pagination__item">3</button>
            </li>
            <li>
                <button class="pagination__item">4</button>
            </li>
            <li>
                <button class="pagination__item">5</button>
            </li>
        </ol>
        <button aria-label="Next Page" class="pagination__next">
            <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
                <use xlink:href="#icon-pagination-next"></use>
            </svg>
        </button>
    </nav>
</div>
`;
