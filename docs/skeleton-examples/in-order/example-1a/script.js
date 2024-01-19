window.addEventListener('load', () => {
  const navDelay = 250;
  const heroDelay = 500;
  const articleDelay = 3500;
  const footerDelay = 3750;

  setTimeout(() => {
    document.querySelector('.page-grid').innerHTML += `
      <nav>
        <ul>
          <li><a href="#">World</a>
          <li><a href="#">U.S.</a>
          <li><a href="#">Technology</a>
          <li><a href="#">Design</a>
          <li><a href="#">Culture</a>
          <li><a href="#">Business</a>
          <li><a href="#">Politics</a>
          <li><a href="#">Opinion</a>
          <li><a href="#">Science</a>
          <li><a href="#">Health</a>
          <li><a href="#">Style</a>
          <li><a href="#">Travel</a>
        </ul>
      </nav>
    `;
  }, navDelay);

  setTimeout(() => {
    document.querySelector('.page-grid').innerHTML += `
      <article id="hero">
        <h2>Title of a longer featured blog post</h2>
        <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most
          interesting in this post's contents.</p>
        <p><a>Continue reading...</a></p>
      </article>
      <article id="featured-1" class="featured nested-grid-container">
        <div class="page-grid">
          <div class="featured__article">
            <h2>Featured Post 1</h2>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="featured__thumbnail">
            Thumbnail
          </div>
        </div>
      </article>
      <article id="featured-2" class="featured nested-grid-container">
        <div class="page-grid">
          <div class="featured__article">
            <h2>Featured Post 2</h2>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="featured__thumbnail">
            Thumbnail
          </div>
        </div>
      </article>
      <main>
        <h1>From the Firehose</h1>
      </main>
    `;
  }, heroDelay);

  setTimeout(() => {
    document.querySelector('main').innerHTML += `
      <article>
        <h2>Sample blog post</h2>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
          mattis consectetur purus sit amet fermentum.</p>
        <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor
          id nibh ultricies vehicula ut id elit.
          Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean
          lacinia bibendum nulla sed consectetur.</p>
        <h3>Heading</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.</p>
        <h4>Sub-heading</h4>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <pre><code>Example code block</code></pre>
        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
          dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
        <h4>Sub-heading</h4>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
          bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Donec id elit non mi porta gravida at eget metus.
          Nulla vitae elit libero, a pharetra augue.
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        <p>Vestibulum id ligula porta felis euismod semper.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
      </article>
      `;
  }, articleDelay);

  setTimeout(() => {
    document.body.innerHTML += `
      <footer>This pen is a "stretchy" CSS Grid recreation of the <a href="https://getbootstrap.com/docs/4.0/examples/blog/">Bootstrap Blog Example</a>.</footer>
    `;
  }, footerDelay);
});
