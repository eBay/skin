setTimeout(() => {
  const asyncButton = document.getElementById('asyncButton');
  asyncButton.addEventListener('click', function(event) {
    event.preventDefault();
    // load some skeletons first
    document.getElementById('featured-3').innerHTML = `
    <ul class="example-tile-container" role="img" aria-label="loading">
      <li>
        <div class="skeleton-tile">
          <div class="skeleton-image"></div>
          <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
        </div>
      </li>
      <li>
        <div class="skeleton-tile">
          <div class="skeleton-image"></div>
          <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
        </div>
      </li>
      <li>
        <div class="skeleton-tile">
          <div class="skeleton-image"></div>
          <div class="skeleton-text skeleton-text--small skeleton-text--multiline"></div>
        </div>
      </li>
    </ul>
    `;
    // load async content
    setTimeout(() => {
      document.getElementById('featured-3').innerHTML = `
    <ul class="example-tile-container" role="img" aria-label="loading" style="margin-top: 10px;">
      <li>
        <div class="skeleton-tile">
          <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1;">
          </div>
          <div style="margin-top:20px">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</div>
        </div>
      </li>
      <li>
        <div class="skeleton-tile">
          <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1;">
          </div>
        <div style="margin-top:20px">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,     making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</div>
        </div>
      </li>
      <li>
        <div class="skeleton-tile">
          <div style="background-image: url('https://opensource.ebay.com/skin/static/img/tb-landscape-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover; aspect-ratio: 1 / 1;">
          </div>
        <div style="margin-top:20px">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</div>
        </div>
      </li>
    </ul>
    `;
    }, 3000);
  });
}, 1000);
