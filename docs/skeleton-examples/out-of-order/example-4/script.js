// Set content for featured-3 section
const data1 = `
<h2>Sample blog post</h2>
<p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic
  typography, images, and code are all supported.</p>

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
`;

const data2 = `
<h2>About</h2>
<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
`;

const data3 = `
<h2>Archives</h2>
<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
`;

// function to generate random time in milliseconds
function getTimeinMS() {
  return Math.floor(Math.random() * 4000) + 1000;
}

// function to get async content after a random delay of ms
function getAsyncContent(content) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, getTimeinMS());
  });
}

// function to set async content in the DOM 
function setAsyncContent(elementId, content) {
  const element = document.getElementById(elementId);
  element.innerHTML = content;
  element.previousElementSibling.setAttribute('hidden', true);
}

// get async content for all sections and load all the the sections at a time
Promise.all([getAsyncContent(data1), getAsyncContent(data2), getAsyncContent(data3)])
  .then(([content1, content2, content3]) => {
    setAsyncContent('featured-3', content1);
    setAsyncContent('section-1', content2);
    setAsyncContent('section-2', content3);
});