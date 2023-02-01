export default { title: 'Carousel' };

export const continuous = () => `
<div class="carousel">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--default-demo">
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
                <li>Card 5</li>
                <li>Card 6</li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const imageTreatment = () => `
<div class="carousel">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--image-treatment carousel__list--image-treatment-demo">
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"/></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"/></li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const imageTreatmentLarge = () => `
<div class="carousel">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--image-treatment-large carousel__list--image-treatment-demo">
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"/></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg" /></li>
                <li><img src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"/></li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const slides = () => `
<div class="carousel carousel--slides">
    <div class="carousel__container">
        <h4 class="clipped" aria-live="polite">
            <span>Top Products - Slide 1 of 2</span>
        </h4>
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false" >
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport">
            <ul class="carousel__list carousel__list--discrete-demo">
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
                <li>Card 5</li>
                <li>Card 6</li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const slideshow = () => `
<div class="carousel carousel--slides">
    <div class="carousel__container">
        <h4 class="clipped" aria-live="polite">
            <span>Top Products - Slide 1 of 4</span>
        </h4>
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false" >
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport">
            <ul class="carousel__list carousel__list--slideshow-demo">
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
    <button class="carousel__playback" aria-label="Play - Top Products">
        <svg class="icon icon--play" focusable="false" aria-hidden="true">
            <use href="#icon-play"></use>
        </svg>
    </button>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="carousel carousel--slides">
        <div class="carousel__container">
            <h4 class="clipped" aria-live="polite">
                <span>Top Products - Slide 1 of 4</span>
            </h4>
            <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
                <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                    <use href="#icon-carousel-prev"></use>
                </svg>
            </button>
            <div class="carousel__viewport">
                <ul class="carousel__list carousel__list--slideshow-demo">
                    <li>Card 1</li>
                    <li>Card 2</li>
                    <li>Card 3</li>
                    <li>Card 4</li>
                </ul>
            </div>
            <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
                <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false" >
                    <use href="#icon-carousel-next"></use>
                </svg>
            </button>
        </div>
        <button class="carousel__playback" aria-label="Play - Top Products">
            <svg class="icon icon--play" focusable="false" aria-hidden="true">
                <use href="#icon-play"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const hiddenScrollbar = () => `
<div class="carousel carousel--hidden-scrollbar">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--default-demo">
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
                <li>Card 5</li>
                <li>Card 6</li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;
