export default { title: "Skin/Pagination/Buttons/Cascade" };

export const fontSize = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation" style="font-size: 200%">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <button aria-disabled="true" aria-label="Previous Page" class="icon-btn pagination__previous">
        <svg class="icon icon--arrow-left-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-left-16"></use>
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
        <li>
            <button class="pagination__item">6</button>
        </li>
        <li>
            <button class="pagination__item">7</button>
        </li>
    </ol>
    <button aria-label="Next Page" class="icon-btn pagination__next">
        <svg class="icon icon--arrow-right-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-right-16"></use>
        </svg>
    </button>
</nav>
`;

export const color = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation" style="color: green">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <button aria-disabled="true" aria-label="Previous Page" class="icon-btn pagination__previous">
        <svg class="icon icon--arrow-left-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-left-16"></use>
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
        <li>
            <button class="pagination__item">6</button>
        </li>
        <li>
            <button class="pagination__item">7</button>
        </li>
    </ol>
    <button aria-label="Next Page" class="icon-btn pagination__next">
        <svg class="icon icon--arrow-right-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-right-16"></use>
        </svg>
    </button>
</nav>
`;

export const RTL = () => `
<div dir="rtl">
    <nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
        <span aria-live="polite" role="status">
            <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
        </span>
        <button aria-disabled="true" aria-label="Previous Page" class="icon-btn pagination__previous">
            <svg class="icon icon--arrow-left-16" focusable="false" height="24" width="24" aria-hidden="true">
                <use href="#icon-arrow-left-16"></use>
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
            <li>
                <button class="pagination__item">6</button>
            </li>
            <li>
                <button class="pagination__item">7</button>
            </li>
        </ol>
        <button aria-label="Next Page" class="icon-btn pagination__next">
            <svg class="icon icon--arrow-right-16" focusable="false" height="24" width="24" aria-hidden="true">
                <use href="#icon-arrow-right-16"></use>
            </svg>
        </button>
    </nav>
</div>
`;
