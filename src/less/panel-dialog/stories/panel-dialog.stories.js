export default { title: 'Panel Dialog' };

export const panelStart = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Left Panel</h2>
            <button class="icon-btn panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
        <div class="panel-dialog__window">
            <div class="panel-dialog__header">
                <h2 id="panel-title">Left Panel</h2>
                <button class="icon-btn panel-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--close" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
            <div class="panel-dialog__main">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            </div>
        </div>
    </div>
</div>
`;

export const panelEnd = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window panel-dialog__window--end">
        <div class="panel-dialog__header">
            <button class="icon-btn panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
            <h2 id="panel-title">Right Panel</h2>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const panelEndSecondaryButton = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window panel-dialog__window--end">
        <div class="panel-dialog__header">
            <button class="icon-btn panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
            <h2 id="panel-title">Right Panel</h2>
            <button class="fake-link panel-dialog__close" type="button">Reset</button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;
