export default { title: 'menu' };

export const defaultMenu = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`;

export const fakeLinks = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const fakeLinksButtons = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span><span class="fake-menu__status"></span></button></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const fakeLinksSelected = () => `
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <a aria-current="page" class="fake-menu__item" href="http://www.ebay.com">
                <span>Link 1</span>
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-tick-small"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const singleSelectUnselected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="false" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectSelected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const multiSelectSelected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectSelectedInheritColourRed = () => `
<span class="menu" style="color: red">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const singleSelectSelectedInheritFontSize200PercentBrokenSpacingShouldNotScale = () => `
<span class="menu" style="font-size: 200%">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemradio" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemradio" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;