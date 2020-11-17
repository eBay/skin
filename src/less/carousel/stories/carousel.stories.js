export default { title: 'Carousel/Carousel' };

export const continuous = () => `
<div class="carousel">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use xlink:href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--default-demo">
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HxJ4seuyUbgl_6ZTuZzbywHaE8%26pid%3DApi&f=1" /></li>
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ryczKwfKPHOEUpqsspzn8AAAAA%26pid%3DApi&f=1" /></li>
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uaG09RTqJi-901pnY2SB5AHaE6%26pid%3DApi&f=1" /></li>
                <li>Russia</li>
                <li>Card 5</li>
                <li>Card 6</li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use xlink:href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
</div>
`;

export const imageTreatment = () => `
<div class="carousel carousel--image-treatment">
    <div class="carousel__container">
        <button class="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-prev" focusable="false">
                <use xlink:href="#icon-carousel-prev"></use>
            </svg>
        </button>
        <div class="carousel__viewport carousel__viewport--mask">
            <ul class="carousel__list carousel__list--default-demo">
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HxJ4seuyUbgl_6ZTuZzbywHaE8%26pid%3DApi&f=1" /></li>
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ryczKwfKPHOEUpqsspzn8AAAAA%26pid%3DApi&f=1" /></li>
                <li><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uaG09RTqJi-901pnY2SB5AHaE6%26pid%3DApi&f=1" /></li>
                <li>Russia</li>
                <li>Card 5</li>
                <li>Card 6</li>
                <li>Card 7</li>
                <li>Card 8</li>
            </ul>
        </div>
        <button class="carousel__control carousel__control--next" aria-label="Next Slide - Top Products">
            <svg aria-hidden="true" class="icon icon--carousel-next" focusable="false">
                <use xlink:href="#icon-carousel-next"></use>
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
                <use xlink:href="#icon-carousel-prev"></use>
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
                <use xlink:href="#icon-carousel-next"></use>
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
                <use xlink:href="#icon-carousel-prev"></use>
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
                <use xlink:href="#icon-carousel-next"></use>
            </svg>
        </button>
    </div>
    <button class="carousel__playback" aria-label="Play - Top Products">
        <svg class="icon icon--play" focusable="false" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
        </svg>
    </button>
</div>
`;
