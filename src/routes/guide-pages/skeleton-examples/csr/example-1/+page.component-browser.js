window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", function (e) {
        // load some skeletons first
        document.querySelector("main").innerHTML += `
      <div class="skeleton items" role="img" aria-label="loading">
        <div>
          <div class="skeleton__image" style="width: 150px; height: 150px"></div>
          <div class="skeleton__text skeleton__text--multiline"></div>
        </div>
        <div>
          <div class="skeleton__image" style="width: 150px; height: 150px"></div>
          <div class="skeleton__text skeleton__text--multiline"></div>
        </div>
      </div>
    `;

        setTimeout(() => {
            document.querySelectorAll(".skeleton:not([hidden])")[0].hidden =
                true;
            document.querySelector("main").innerHTML += `
      <div class="items">
        <div>
          <div class="image" style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg');"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo et mi cursus rutrum vitae et tortor.</p>
        </div>
        <div>
          <div class="image" style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg');"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo et mi cursus rutrum vitae et tortor. Maecenas dictum diam consectetur, luctus elit nec, interdum turpis. Pellentesque ut finibus est. Maecenas ullamcorper bibendum quam.</p>
        </div>
      </div>
      `;
        }, 3000);
    });
});

export default {};
