export default { title: "Skin/Item Tile" };

export const base = () => `
<div class="item-tile">
    <div class="item-tile__header">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <a href="https://ebay.com">
                    <img
                        class="file-preview-card__asset"
                        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
                        alt="Puma..."
                    />
                </a>
                <button
                    class="icon-btn file-preview-card__action"
                    type="button"
                    aria-label="Open menu"
                >
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-heart-16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="item-tile__body">
        <div class="item-tile__aligned-section-1">
            <span class="signal signal--trustworthy"> Great Price </span>
        </div>
        <div class="item-tile__aligned-section-2">
            <a href="https://ebay.com?random=1" class="item-tile__title">
                PUMA Men's Astro Kicks Sneakers
            </a>
            <div class="item-tile__subtitle">
                Brand new &bull; Size 6
            </div>
        </div>
        <div class="item-tile__aligned-section-3">
            <div class="item-tile__price">
                $29.99 
                <span class="clipped">Was: </span>
                <s class="item-tile__list-price">$68.99</s>
            </div>
            <div class="item-tile__buy-links">
                <div><a href="https://ebay.com">Buy it now</a></div>
                <div>Free shipping</div>
            </div>
            <div class="item-tile__sponsored">
                Sponsored
            </div>
        </div>
    </div>
</div>
`;
