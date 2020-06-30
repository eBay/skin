export default { title: 'Combobox' };

export const collapsed = () => `
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
`;

export const expanded = () => `
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
`;

export const disabled = () => `
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
`;

export const large = () => `
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
`;

export const longOptions = () => `
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
`;

export const actionableIcon = () => `
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox1" />
        <button class="icon-btn icon-btn--actionable" type="button" aria-label="Expand Suggestions">
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </button>
    </span>
    <div class="combobox__listbox">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const rtl = () => `
<div dir="rtl">
    <span class="combobox combobox--expanded">
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
</div>
`;

export const actionableIconRtl = () => `
<div dir="rtl">
    <span class="combobox combobox--expanded">
        <span class="combobox__control combobox__control--actionable">
            <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox5" />
            <button class="icon-btn" type="button" aria-label="Expand Suggestions">
                <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                    <use xlink:href="#icon-dropdown"></use>
                </svg>
            </button>
        </span>
        <div class="combobox__listbox">
            <div id="listbox5" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 3</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const inheritColour = () => `
<div style="color: red">
    <span class="combobox combobox--expanded">
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
</div>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%;">
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
</div>
`;
