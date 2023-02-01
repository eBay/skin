export default { title: 'Menu/Fake Menu' };

export const links = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttons = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><button class="fake-menu__item"><span><span>Button 1</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 3</span></span></button></li>
    </ul>
</div>
`;

export const mixed = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const linksSelected = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <a aria-current="page" class="fake-menu__item" href="http://www.ebay.com">
                <span>Link 1</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-small"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttonsSelected = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <button aria-current="page" class="fake-menu__item">
                <span>Button 1</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-small"></use>
                </svg>
            </button>
        </li>
        <li><button class="fake-menu__item"><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span>Button 3</span></span></button></li>
    </ul>
</div>
`;

export const linksDisabled = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <a aria-current="page" class="fake-menu__item">
                <span>Link 1</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-small"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttonsDisabled = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <button aria-current="page" class="fake-menu__item" disabled>
                <span>Button 1</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-small"></use>
                </svg>
            </button>
        </li>
        <li><button class="fake-menu__item"><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span>Button 3</span></span></button></li>
    </ul>
</div>
`;
