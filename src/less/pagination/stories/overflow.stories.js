export default { title: 'Pagination/Overflow' };

export const start = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-prev"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=1" class="pagination__item">1</a>
        </li>
        <li>
            <span class="pagination__item">
                <svg class="icon icon--overflow" focusable="false" width="8" height="8" role="separator">
                    <use href="#icon-overflow"></use>
                </svg>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=76" class="pagination__item">76</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=77" class="pagination__item">77</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=78" class="pagination__item">78</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=79" class="pagination__item">79</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=80" class="pagination__item" aria-current="page">80</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-next"></use>
        </svg>
    </a>
</nav>
`;

export const middle = () => `
<nav class="pagination" aria-labelledby="pagination-heading-4" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading-3">Results Pagination - Page 10</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page - Results Pagination" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-prev"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=1" class="pagination__item">1</a>
        </li>
        <li>
            <span class="pagination__item">
                <svg class="icon icon--overflow" focusable="false" width="8" height="8" role="separator">
                    <use href="#icon-overflow"></use>
                </svg>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=43" class="pagination__item">43</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=44" class="pagination__item" aria-current="page">44</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=45" class="pagination__item">45</a>
        </li>
        <li>
            <span class="pagination__item">
                <svg class="icon icon--overflow" focusable="false" width="8" height="8" role="separator">
                    <use href="#icon-overflow"></use>
                </svg>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=80" class="pagination__item">80</a>
        </li>
    </ol>
    <a aria-label="Next Page - Results Pagination" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-next"></use>
        </svg>
    </a>
</nav>
`;

export const end = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-prev"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=1" class="pagination__item" aria-current="page" >1</a>
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
            <span class="pagination__item">
                <svg class="icon icon--overflow" focusable="false" width="8" height="8" role="separator">
                    <use href="#icon-overflow"></use>
                </svg>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=10" class="pagination__item">7</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-next"></use>
        </svg>
    </a>
</nav>
`;

export const endMenuCollapsed = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-prev"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=1" class="pagination__item" aria-current="page" >1</a>
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
            <span class="pagination__item">
                <span class="fake-menu-button">
                    <button class="icon-btn icon-btn--transparent fake-menu-button__button" type="button" aria-label="Menu">
                        <svg class="icon icon--overflow" focusable="false" width="8" height="8" aria-hidden="true">
                            <use href="#icon-overflow"></use>
                        </svg>
                    </button>
                    <ul class="fake-menu-button__menu">
                        <li>
                            <a class="fake-menu-button__item" href="http://www.ebay.com">
                                <span>6</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>7<span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>8<span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>9<span>
                            </a>
                        </li>
                    </ul>
                </span>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=10" class="pagination__item">7</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-next"></use>
        </svg>
    </a>
</nav>
`;

export const endMenuExpanded = () => `
<nav class="pagination" aria-labelledby="pagination-heading" role="navigation">
    <span aria-live="polite" role="status">
        <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    </span>
    <a aria-disabled="true" aria-label="Previous Page" class="icon-link pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
        <svg class="icon icon--pagination-prev" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-prev"></use>
        </svg>
    </a>
    <ol class="pagination__items">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=1" class="pagination__item" aria-current="page" >1</a>
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
            <span class="pagination__item">
                <span class="fake-menu-button">
                    <button class="icon-btn icon-btn--transparent fake-menu-button__button" type="button" aria-expanded="true" aria-label="Menu">
                        <svg class="icon icon--overflow" focusable="false" width="8" height="8" aria-hidden="true">
                            <use href="#icon-overflow"></use>
                        </svg>
                    </button>
                    <ul class="fake-menu-button__menu">
                        <li>
                            <a class="fake-menu-button__item" href="http://www.ebay.com">
                                <span>6</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>7<span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>8<span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ebay.com" class="fake-menu-button__item">
                                <span>9<span>
                            </a>
                        </li>
                    </ul>
                </span>
            </span>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=10" class="pagination__item">10</a>
        </li>
    </ol>
    <a aria-label="Next Page" class="icon-link pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg class="icon icon--pagination-next" focusable="false" height="24" width="24" aria-hidden="true">
            <use href="#icon-pagination-next"></use>
        </svg>
    </a>
</nav>
`;
