setTimeout(() => {
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', function(event) {
    event.preventDefault();
    refreshButton.setAttribute('style', "display: none;");
    // load some skeletons first
    document.querySelector('#featured-3').innerHTML = `
    <ul class="skeleton example-tile-container" role="img" aria-label="loading">
      <li>
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text skeleton__text--multiline"></div>
      </li>
      <li>
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text skeleton__text--multiline"></div>
      </li>
      <li>
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text skeleton__text--multiline"></div>
      </li>
    </ul>`;
    // load async content
    setTimeout(() => {
      const container = document.querySelector('.example-tile-container');
      container.innerHTML = 
      `<li>
          <div>
            <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-square-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1; margin-top:12px;">
            </div>
            <div style="margin-top:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
          </div>
        </li>
        <li>
          <div>
            <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1; margin-top:12px;">
            </div>
            <div style="margin-top:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
          </div>
        </li>
        <li>
          <div>
            <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1; margin-top:12px;">
            </div>
            <div style="margin-top:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
          </div>
        </li>`;
        container.removeAttribute('role');
        container.removeAttribute('aria-label');
        container.classList.remove('skeleton');
    }, 3000);
  });
}, 1000);
