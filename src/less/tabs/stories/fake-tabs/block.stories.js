export default { title: "Tabs/Fake Tabs/Block" };

export const two = () => `
<div class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">
                Fake 1<span class="clipped"> - current page</span>
            </a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;

export const three = () => `
<div class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;

export const four = () => `
<div class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 4</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;
