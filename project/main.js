import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page">

    <!-- MOBILE: one continuous photo (text overlaid on its blank top, fading into
         the page background near the bottom), then button + sign-off below -->
    <div class="mobile-page">
      <div class="m-hero">
        <img src="/nmobile-background.png" alt="Book propped against a sunlit wall beside a candle, coffee, and a handwritten note.">

       <div class="m-hero__text" aria-labelledby="page-title-m"><div class="brand-mark">
  21 LESSONS
  <svg class="brand-leaf" aria-hidden="true" viewBox="0 0 28 16" width="20" height="12"><path d="M27 8C20 2 9 2 1 8c7 6 18 6 26 0Z" fill="none" stroke="currentColor" stroke-width="1"/></svg>
</div>

<div class="m-hero__text" aria-labelledby="page-title-m">
  <div class="ornament ornament-top" aria-hidden="true">✦</div>
          <h1 id="page-title-m">It all started with a thought.</h1>

          <span class="sparkle sparkle-a" aria-hidden="true">✦</span>
          <span class="sparkle sparkle-b" aria-hidden="true">✦</span>

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
              So I sat with them. Some days the words came easily,
              some days they didn't, but I kept going.
            </p>

            <p>
              And eventually, there were 21.
            </p>

            <p>
              Once upon a time, they lived scattered across
              my notes and journals.
            </p>

            <p>
              Now, put together, they can live in yours next.
            </p>

            <p class="lesson-line">
              <em>Maybe there's a lesson for you, too.</em>
            </p>
          </div>
        </div>
      </div>

      <div class="m-footer">
        <a class="order-button" href="#preorder">
          Explore the Book <span aria-hidden="true">♡</span>
        </a>

        <p class="availability">
          <svg class="leaf" aria-hidden="true" viewBox="0 0 28 16" width="22" height="13"><path d="M27 8C20 2 9 2 1 8c7 6 18 6 26 0Z" fill="none" stroke="currentColor" stroke-width="1"/><path d="M14 4v8M9 6c2 1 3 3 5 3M19 6c-2 1-3 3-5 3" stroke="currentColor" stroke-width="0.8" fill="none"/></svg>
          ENJOY THE JOURNEY
          <svg class="leaf leaf-flip" aria-hidden="true" viewBox="0 0 28 16" width="22" height="13"><path d="M27 8C20 2 9 2 1 8c7 6 18 6 26 0Z" fill="none" stroke="currentColor" stroke-width="1"/><path d="M14 4v8M9 6c2 1 3 3 5 3M19 6c-2 1-3 3-5 3" stroke="currentColor" stroke-width="0.8" fill="none"/></svg>
        </p>

        <div class="rule rule-bottom" aria-hidden="true">
          <span>♡</span>
        </div>

        <p class="page-footer mobile-footer">
          <i>Thanks for stopping by.</i>
          <span aria-hidden="true">✦</span>
          Jess.
        </p>

        <svg class="laurel" aria-hidden="true" viewBox="0 0 120 20" width="120" height="20">
          <path d="M60 10H10M60 10H110" stroke="currentColor" stroke-width="0" fill="none"/>
          <g stroke="currentColor" stroke-width="1" fill="none">
            <path d="M60 10c-8-2-16-2-24 0M60 10c8-2 16-2 24 0"/>
            <path d="M48 8c-2-3-5-4-9-4M72 8c2-3 5-4 9-4"/>
            <path d="M38 9c-2-2-4-2-7-1M82 9c2-2 4-2 7-1"/>
            <path d="M30 10c-2-1-4-1-6 0M90 10c2-1 4-1 6 0"/>
          </g>
        </svg>
      </div>
    </div>


    <!-- DESKTOP: unchanged -->
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
