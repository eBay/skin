export default { title: "Pagination/Links" };

export const base = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--arrow-left-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-left-16"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a aria-current="page" href="http://www.ebay.com/sch/i.html?_nkw=guitars" class="pagination__item">1</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2" class="pagination__item">2</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=3" class="pagination__item">3</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=4" class="pagination__item">4</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=5" class="pagination__item">5</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=6" class="pagination__item">6</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=7" class="pagination__item">7</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--arrow-right-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-right-16"></use>
        </svg>
    </a>
</nav>
`;

export const fluid = () => `
<nav class="pagination pagination--fluid" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--arrow-left-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-left-16"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a aria-current="page" href="http://www.ebay.com/sch/i.html?_nkw=guitars" class="pagination__item">1</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2" class="pagination__item">2</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=3" class="pagination__item">3</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=4" class="pagination__item">4</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=5" class="pagination__item">5</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=6" class="pagination__item">6</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=7" class="pagination__item">7</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--arrow-right-16" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-arrow-right-16"></use>
        </svg>
    </a>
</nav>
`;
