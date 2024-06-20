export default { title: "Skin/Lightbox Dialog" };

export const base = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const expressiveBase = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--expressive" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
        <div class="lightbox-dialog__header">
           <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const basePrev = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <button class="icon-btn lightbox-dialog__prev" type="button" aria-label="Go back">
                <svg class="icon icon--chevron-left-16" aria-hidden="true">
                    <use href="#icon-chevron-left-16"></use>
                </svg>
            </button>
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const scrollingLightbox = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const expandedLightbox = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window lightbox-dialog__window--expanded">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const expressiveScrolling = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--expressive" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const baseWithFooter = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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
        <div class="lightbox-dialog__footer">
            <button class="btn btn--primary">Submit</button>
            <button class="btn">Cancel</button>
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
                    <svg class="icon icon--close-16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
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

export const prevRTL = () => `
<div dir="rtl">
    <div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
        <div class="lightbox-dialog__window">
            <div class="lightbox-dialog__header">
                <button class="icon-btn lightbox-dialog__prev" type="button" aria-label="Go back">
                    <svg class="icon icon--chevron-left-16" aria-hidden="true">
                        <use href="#icon-chevron-left-16"></use>
                    </svg>
                </button>
                <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
                <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--close-16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
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

export const baseWithLongHeader = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox with a very long header that should wrap to the next line, but is actually cut off</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const wide = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--wide" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const narrow = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--narrow" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const expressiveWide = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--wide lightbox-dialog--expressive" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const expressivePrev = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog lightbox-dialog--expressive" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
        <div class="lightbox-dialog__header">
            <button class="icon-btn lightbox-dialog__prev" type="button" aria-label="Go back">
                <svg class="icon icon--chevron-left-16" aria-hidden="true">
                    <use href="#icon-chevron-left-16"></use>
                </svg>
            </button>
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const textSpacing = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog demo-a11y-text-spacing" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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

export const baseWithHeaderOverflow = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox with a title that is so long it wraps across multiple lines. No dialog header should ever be this long.</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
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
