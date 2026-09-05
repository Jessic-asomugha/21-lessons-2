import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page">

    <!-- MOBILE -->
    <div class="mobile-page">
      <div class="m-hero">
        <img src="/nmobile-background.png" alt="Book propped against a sunlit wall beside a candle, coffee, and a handwritten note.">

        <div class="m-hero__text" aria-labelledby="page-title-m">
          <div class="ornament ornament-top" aria-hidden="true">✦</div>

          <h1 id="page-title-m">It all started with a thought.</h1>

          <div class="rule" aria-hidden="true">
            <span>✦</span>
          </div>

          <div class="intro-copy">
            <p>
              I was turning 21, and I thought—
              <br />
              <em>why not 21 lessons?</em>
            </p>

            <p>
              They were things I had learned along the way,
              things I had experienced, things I had watched,
              things love taught me, things pain taught me,
              and things I'm still learning through growth.
            </p>

            <p>
              So I sat with them.
            </p>

            <p>
              Some days the words came easily,
              some days they didn't,
              but I kept going.
              And eventually, there were 21.
            </p>

            <p>
              Once upon a time, they lived scattered across
              my notes and journals.
            </p>

            <p>
              Now, put together,
              <br />
              they can live in yours next.
            </p>

            <p>
              Maybe there's a lesson for you, too.
            </p>
          </div>
        </div>
      </div>

      <div class="m-footer">
        <div class="heart" aria-hidden="true">♡</div>

        <h2>Take the book with you.</h2>

        <p class="subheading">
          <em>Enjoy the journey.</em>
        </p>

        <div class="rule rule-bottom" aria-hidden="true">
          <span>✦</span>
        </div>

        <a class="order-button" href="#preorder">
          Take the book with you <span aria-hidden="true">♡</span>
        </a>

        <p class="availability">
          <span aria-hidden="true">✧</span>
          Thanks for stopping by.
          <span aria-hidden="true">✧</span>
        </p>
      </div>

      <footer class="page-footer mobile-footer">
        <i>Thanks for stopping by.</i>
        <span aria-hidden="true">✦</span>
        Jess.
      </footer>
    </div>


    <!-- DESKTOP -->
    <section class="desktop-hero">

      <div class="message" aria-labelledby="page-title-d">

        <div class="ornament ornament-top" aria-hidden="true">✦</div>

        <h1 id="page-title-d">It all started with a thought.</h1>

        <div class="rule" aria-hidden="true">
          <span>✦</span>
        </div>

        <div class="intro-copy">

          <p>
            I was turning 21, and I thought—
            <br />
            <em>why not 21 lessons?</em>
          </p>

          <p>
            They were things I had learned along the way,
            things I had experienced, things I had watched,
            things love taught me, things pain taught me,
            and things I'm still learning through growth.
          </p>

          <p>
            So I sat with them.
          </p>

          <p>
            Some days the words came easily,
            some days they didn't,
            but I kept going.
            And eventually, there were 21.
          </p>

          <p>
            Once upon a time, they lived scattered across
            my notes and journals.
          </p>

          <p>
            Now, put together, they can live in yours next.
          </p>

          <p>
            Maybe there's a lesson for you, too.
          </p>

        </div>

        <div class="heart" aria-hidden="true">♡</div>

        <h2>Take the book with you.</h2>

        <p class="subheading">
          <em>Enjoy the journey.</em>
        </p>

        <div class="rule rule-bottom" aria-hidden="true">
          <span>✦</span>
        </div>

        <a class="order-button" href="#preorder">
          Take the book with you <span aria-hidden="true">♡</span>
        </a>

        <p class="availability">
          <span aria-hidden="true">✧</span>
          Thanks for stopping by.
          <span aria-hidden="true">✧</span>
        </p>

      </div>

      <footer class="page-footer">
        Thanks for stopping by.
        <span aria-hidden="true">✦</span>
        Jess.
      </footer>

    </section>

  </main>
`