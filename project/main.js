import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page">

    <!-- MOBILE: photo banner (text over its blank area, fading at the bottom) then a scrollable footer with the button and sign-off -->
    <div class="mobile-page">
      <div class="m-hero">
        <img src="/hero-mobile-placeholder.png" alt="Book propped against a sunlit wall beside a candle, coffee, and a handwritten note. (Placeholder photo — final cover art to be swapped in.)">
        <div class="m-hero__text" aria-labelledby="page-title-m">
          <div class="ornament ornament-top" aria-hidden="true">✦</div>
          <h1 id="page-title-m">Maybe it's for you.</h1>
          <div class="rule" aria-hidden="true"><span>✦</span></div>
          <div class="intro-copy">
            <p>For the dreamer. The overthinker.<br />The one healing in silence.<br />The one trying again.<br />The one becoming.</p>
            <p>If you've ever paused and asked<br /><em>"Is this all there is?"</em><br />— this book is for you.</p>
          </div>
        </div>
      </div>

      <div class="m-footer">
        <div class="heart" aria-hidden="true">♡</div>
        <h2>Take this book with you.</h2>
        <p class="subheading"><em>Let it find you in the moments you need it most.</em></p>
        <div class="rule rule-bottom" aria-hidden="true"><span>✦</span></div>
        <a class="order-button" href="#preorder">PRE-ORDER YOUR COPY <span aria-hidden="true">♡</span></a>
        <p class="availability"><span aria-hidden="true">✧</span> AVAILABLE SOON <span aria-hidden="true">✧</span></p>
      </div>

      <footer class="page-footer mobile-footer">THANK YOU FOR BEING HERE. <span aria-hidden="true">✦</span> KEEP BECOMING.</footer>
    </div>

    <!-- DESKTOP: original full-bleed, single-viewport hero, unchanged -->
    <section class="desktop-hero">
      <div class="message" aria-labelledby="page-title-d">
        <div class="ornament ornament-top" aria-hidden="true">✦</div>
        <h1 id="page-title-d">Maybe it's for you.</h1>
        <div class="rule" aria-hidden="true"><span>✦</span></div>

        <div class="intro-copy">
          <p>For the dreamer. The overthinker.<br />The one healing in silence.<br />The one trying again.<br />The one becoming.</p>
          <p>If you've ever paused and asked<br /><em>"Is this all there is?"</em><br />— this book is for you.</p>
        </div>

        <div class="heart" aria-hidden="true">♡</div>
        <h2>Take this book with you.</h2>
        <p class="subheading"><em>Let it find you in the moments you need it most.</em></p>
        <div class="rule rule-bottom" aria-hidden="true"><span>✦</span></div>
        <a class="order-button" href="#preorder">PRE-ORDER YOUR COPY <span aria-hidden="true">♡</span></a>
        <p class="availability"><span aria-hidden="true">✧</span> AVAILABLE SOON <span aria-hidden="true">✧</span></p>
      </div>
      <footer class="page-footer">THANK YOU FOR BEING HERE. <span aria-hidden="true">✦</span> KEEP BECOMING.</footer>
    </section>

  </main>
`
