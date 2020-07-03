export default { title: 'Tabs/Tabs/Block' };

export const two = () => `
<div class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" aria-selected="true" id="tab1" tabindex="0">
            <span>Tab 1</span>
        </div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2">
            <span>Tab 2</span>
        </div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1">
            <div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
        </div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2">
            <div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
        </div>
    </div>
</div>
`;

export const three = () => `
<div class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" aria-selected="false" id="tab3"><span>Tab 3</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</div>
`;

export const four = () => `
<div class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab3"><span>Tab 3</span></div>
        <div aria-controls="panel4" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab4"><span>Tab 4</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel4" role="tabpanel" hidden aria-labelledby="tab4"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</div>
`;
