export default { title: 'Lightbox Dialog' };

export const base = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
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

export const mini = () => `
<div aria-label="mini Example" aria-modal="true" class="lightbox-dialog lightbox-dialog--mask-fade" role="dialog">
    <div class="lightbox-dialog__window lightbox-dialog__window--fade lightbox-dialog__window--mini">
        <div class="lightbox-dialog__header">
            <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                <svg aria-hidden="true" class="icon icon--close" focusable="false" height="16" width="16">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>
`;

export const miniMinHeight = () => `
<div aria-label="miniMinHeight Example" aria-modal="true" class="lightbox-dialog lightbox-dialog--mask-fade" role="dialog">
    <div class="lightbox-dialog__window lightbox-dialog__window--fade lightbox-dialog__window--mini">
        <div class="lightbox-dialog__header">
            <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                <svg aria-hidden="true" class="icon icon--close" focusable="false" height="16" width="16">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</div>
`;

export const baseRTL = () => `
<div dir="rtl">
    <div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
        <div class="lightbox-dialog__window">
            <div class="lightbox-dialog__header">
                <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
                <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--close" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
            <div class="lightbox-dialog__main">
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

export const miniRTL = () => `
<div dir="rtl">
    <div aria-label="mini Example RTL" aria-modal="true" class="lightbox-dialog lightbox-dialog--mask-fade" role="dialog">
        <div class="lightbox-dialog__window lightbox-dialog__window--fade lightbox-dialog__window--mini">
            <div class="lightbox-dialog__header">
                <button aria-label="Close dialog" class="icon-btn lightbox-dialog__close" type="button">
                    <svg aria-hidden="true" class="icon icon--close" focusable="false" height="16" width="16">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
            <div class="lightbox-dialog__main">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
</div>
`;
