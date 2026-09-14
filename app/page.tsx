export default function Home() {
  return (
    <main className="page">
      <header>
        <h1 className="name">Christian Gutierrez </h1>
        <p className="intro">
          Stanford '30 &middot;{" "}
          <a href="mailto:cgutz@stanford.edu" style={{ color: "inherit" }}>
            cgutz [at] stanford [dot] edu
          </a>
        </p>
        <p className="intro">Programmer and writer. Currently interested in machine learning for underwater vehicles.</p>

        <ul className="social" aria-label="Elsewhere">
          <li>
            <a
              href="https://github.com/c-gutz"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aragong/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/cgutz_1"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>

      <hr className="rule" />

      <section>
        <h2 className="section-label">Programming</h2>

        <article className="project">
          <div className="project-head">
            <h3 className="project-title">County Storm Atlas</h3>
            <span className="project-links">
              <a href="https://county-storm-atlas.vercel.app" target="_blank" rel="noreferrer">site</a>
              <a href="https://github.com/c-gutz/county-storm-atlas" target="_blank" rel="noreferrer">repo</a>
            </span>
          </div>
          <ul className="notes">
            <li>Storm damage distributions for every county in the contiguous US </li>
            <li> Thirty years of NOAA data (1996&ndash;2026), mapped by season, with historical analogs matching current conditions to past months</li>
            <li> Interactive map with conditional monthly distributions, exceedance probabilities, and event type frequencies</li>
            <li> Data wrangling including a zone-to-county crosswalk that retained 97.42% of nominal property damage</li>
          </ul>
        </article>

        <article className="project">
          <div className="project-head">
            <h3 className="project-title">talkAble</h3>
            <span className="project-links">
              <a href="https://www.talkable.social" target="_blank" rel="noreferrer">site</a>
              <a href="https://chromewebstore.google.com/detail/talkable-the-social-web/fghkbclpikdmlipefdpgfhmdndpacmem" target="_blank" rel="noreferrer">extension</a>
            </span>
          </div>
          <ul className="notes">
            <li>A platform allowing users to comment on any text line or image across the internet, turning each page into its own post to discuss</li>
            <li> The extension: creates a ShadowDOM comment section on every page; right click on elements to leave your thoughts, or view other comments directly in the browser</li>
            <li>The site: a central hub to curate your browsing account, follow other users, and view posts across sites; resolves the emptiness issue with browser annotation tools</li>
            <li>Shipped 2025; live but unmaintained </li>
          </ul>
        </article>

        <article className="project">
          <div className="project-head">
            <h3 className="project-title">Loquent</h3>
            <span className="project-links">
              <a href="https://loquent-lang.vercel.app/" target="_blank" rel="noreferrer">site</a>
              <a href="https://github.com/c-gutz/loquent" target="_blank" rel="noreferrer">repo</a>
            </span>
          </div>
          <ul className="notes">
            <li>A programming language for writers, where traditional syntax is mapped to literary diction</li>
            <li>A Java-implemented, tree-walking interpreter inspired by Robert Nystrom's "Crafting Interpreters"</li>
            <li> Includes functions, classes, and inheritance</li>
            <li> Built a CheerpJ playground, using a WebAssembly JVM to run the language in the browser without a backend</li>
          </ul>
        </article>
      </section>

      <hr className="rule" />

      <section>
        <h2 className="section-label">Writing</h2>

        <article className="project">
          <div className="project-head">

            <h3 className="project-title">
                The Reflections of Andre Alfonz
            </h3>
            <span className="project-links">
                <a href="https://www.amazon.com/dp/B0DSM2M83J" target="_blank" rel="noreferrer">amazon</a>
              </span>
          </div>
          <ul className="notes">
            <li>310-page historical fiction novel set in 19th-century France </li>
            <li>Catalogued in 30+ libraries across Georgia </li>
            <li>Finalist in Next Generation Indie Book Awards, First Novel category</li>
          </ul>
        </article>
      </section>
    </main>
  );
}