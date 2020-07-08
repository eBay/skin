export default { title: 'Dialog Mini' };

export const full = () => `
<div aria-labelledby="dialog-mini-title" aria-modal="true" class="dialog-mini" id="dialog" role="dialog">
    <div class="dialog-mini__window">
        <div class="dialog-mini__header">
            <button class="dialog-mini__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="dialog-mini__main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        </div>
    </div>
</div>
`;
