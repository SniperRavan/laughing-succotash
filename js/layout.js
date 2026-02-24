/* ===== SHARED LAYOUT INJECTOR ===== */
// This injects the nav and footer into every page

function injectNav(activePage) {
  const navHTML = `
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <div class="mobile-menu">
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="works.html">Works</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
    </div>

    <nav>
      <a href="index.html" class="nav-logo">
        akash<span>.</span>dev
      </a>
      <ul class="nav-links">
        <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
        <li><a href="works.html" ${activePage==='works'?'class="active"':''}>Works</a></li>
        <li><a href="blog.html" ${activePage==='blog'?'class="active"':''}>Blog</a></li>
      </ul>
      <a href="index.html#contact" class="nav-cta">Say Hello</a>
      <button class="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-left">
        © <span id="year"></span> Akash Das Dhibar — Built with <span>♥</span> & Jekyll
      </div>
      <div class="footer-right">
        West Bengal, India &nbsp;·&nbsp; Available for opportunities
      </div>
    </footer>
  `;

  

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}