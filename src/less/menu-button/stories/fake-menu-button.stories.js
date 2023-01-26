export default { title: 'Menu Button/Fake Menu Button' };

export const links = () => `
<span class="fake-menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu">
        <li>
            <a class="fake-menu-button__item" href="http://www.ebay.com" aria-current="page">
                <span>Link 1</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 2</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 3</span>
            </a>
        </li>
    </ul>
</span>
`;

export const linksSelected = () => `
<span class="fake-menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu">
        <li>
        <a aria-current="page" class="fake-menu-button__item" href="http://www.ebay.com">
            <span>Link 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-small"></use>
            </svg>
        </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 2</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 3</span>
            </a>
        </li>
    </ul>
</span>
`;

export const linksDisabled = () => `
<span class="fake-menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu">
        <li>
        <a aria-current="page" class="fake-menu-button__item">
            <span>Link 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-small"></use>
            </svg>
        </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 2</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 3</span>
            </a>
        </li>
    </ul>
</span>
`;

export const linksFixedWidth = () => `
<span class="fake-menu-button">
    <button class="btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu fake-menu-button__menu--fix-width">
        <li>
            <a class="fake-menu-button__item" href="http://www.ebay.com" aria-current="page">
                <span>Link 10000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 20000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 30000</span>
            </a>
        </li>
    </ul>
</span>
`;
