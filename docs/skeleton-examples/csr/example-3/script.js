setTimeout(() => {
  const refreshButton = document.querySelector('#refreshButton');
  refreshButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('ul.example-tile-container').innerHTML = "";
    refreshButton.setAttribute('style', "display: none;");
    // load async content
    document.querySelector('ul.example-tile-container').innerHTML = 
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
  });
}, 500);