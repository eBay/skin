window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", function (e) {
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
          <div class="image" style="background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg');"></div>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
        <div>
          <div class="image" style="background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg');"></div>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
      </div>
      `;
        }, 3000);
    });
});

export default {};
