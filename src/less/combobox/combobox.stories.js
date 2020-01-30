export default { title: 'combobox' };

export const defaultSize = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--expanded">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;

export const defaultSizeDisabled = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" disabled />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--expanded">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" disabled />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;

export const largeSize = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox combobox--large">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--large combobox--expanded">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;

export const defaultSizeInheritColourRed = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox" style="color: red">
                <span class="combobox__control">
                    <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--expanded" style="color: red">
                <span class="combobox__control">
                    <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;

export const defaultSizeInheritFontSize200Percent = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox" style="font-size: 200%;">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--expanded" style="font-size: 200%;">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Option 1</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;

export const defaultSizeLongOptions = () => `
<div class="demo" style="margin-bottom: 100px;">
    <div class="demo__inner">
        <form action="index.html">
            <span class="combobox">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
            </span>
            <span class="combobox combobox--expanded">
                <span class="combobox__control">
                    <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
                <div class="combobox__listbox">
                    <div id="listbox1" class="combobox__options" role="listbox">
                        <div class="combobox__option" role="option">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                        <div class="combobox__option" role="option">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
            </span>
        </form>
    </div>
</div>
`;