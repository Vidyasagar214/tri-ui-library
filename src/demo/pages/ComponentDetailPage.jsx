import { useParams, Link } from "react-router-dom";
import { getComponentById } from "../componentsRegistry";
import { useState, useCallback, useEffect, useMemo } from "react";
import {
  buildOnThisPageNav,
  getAccessibilityBody,
  getOverviewExtra,
  getOnThisPageScrollIds,
} from "../docPageUtils";

const defaultInstall = "npm install tri-ui-library";

function CodeBlock({ code, componentName, onCopy, raw = false }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    const fullCode = raw
      ? code
      : `import { ${componentName} } from "tri-ui-library";
import "tri-ui-library/styles.css";

${code}`;
    navigator.clipboard.writeText(fullCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.();
    });
  }, [code, componentName, onCopy, raw]);

  return (
    <div className="demo-detail-code-wrap">
      <button
        type="button"
        className="demo-copy-btn"
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="demo-code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function OnThisPageNav({ items, scrollTo, activeId }) {
  return (
    <ul className="demo-on-this-page-list">
      {items.map((item) => (
        <li key={item.id}>
          {item.children ? (
            <>
              <button
                type="button"
                className={[
                  "demo-on-this-page-link",
                  activeId === item.id ? "demo-on-this-page-link--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => scrollTo(item.id)}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
              </button>
              <ul className="demo-on-this-page-sublist">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <button
                      type="button"
                      className={[
                        "demo-on-this-page-link",
                        "demo-on-this-page-link--sub",
                        activeId === child.id ? "demo-on-this-page-link--active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => scrollTo(child.id)}
                      aria-current={activeId === child.id ? "location" : undefined}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <button
              type="button"
              className={[
                "demo-on-this-page-link",
                activeId === item.id ? "demo-on-this-page-link--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => scrollTo(item.id)}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

function ComponentDetailPage() {
  const { id } = useParams();
  const comp = getComponentById(id);

  if (!comp) {
    return (
      <div className="demo-detail-wrap demo-detail-wrap--simple">
        <div className="demo-detail-main">
          <header className="demo-detail-header">
            <div className="demo-doc-heading-row">
              <Link to="/components" className="demo-back demo-page-heading-back">
                ← Back to components
              </Link>
              <h1 className="demo-page-title">Component not found</h1>
            </div>
            <p className="demo-page-lead">No component matches this URL in the catalog.</p>
          </header>
        </div>
      </div>
    );
  }

  const rawExamples = comp.examples;
  const api = comp.api || [];
  const hasApi = api.length > 0;
  const navItems = useMemo(() => buildOnThisPageNav(rawExamples, hasApi), [rawExamples, hasApi]);
  const scrollIds = useMemo(() => getOnThisPageScrollIds(navItems), [navItems]);
  const [activeSectionId, setActiveSectionId] = useState(() => scrollIds[0] ?? "overview");

  const usageCode = `import { ${comp.name} } from "tri-ui-library";
import "tri-ui-library/styles.css";`;

  const scrollTo = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveSectionId(sectionId);
  }, []);

  useEffect(() => {
    setActiveSectionId(scrollIds[0] ?? "overview");
  }, [comp.id, scrollIds]);

  useEffect(() => {
    if (!scrollIds.length) return undefined;

    const syncScrollMargin = () => {
      const nav = document.querySelector(".demo-nav");
      const h = nav ? Math.ceil(nav.getBoundingClientRect().height) + 12 : 88;
      document.documentElement.style.setProperty("--demo-doc-scroll-margin", `${h}px`);
    };

    const computeActive = () => {
      const nav = document.querySelector(".demo-nav");
      const offset = (nav ? nav.getBoundingClientRect().height : 72) + 12;
      const scrollY = window.scrollY;
      const trigger = scrollY + offset;
      let active = scrollIds[0];
      for (const sid of scrollIds) {
        const el = document.getElementById(sid);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= trigger) active = sid;
        else break;
      }
      setActiveSectionId((prev) => (prev === active ? prev : active));
    };

    syncScrollMargin();
    computeActive();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
      }
    };

    const onResize = () => {
      syncScrollMargin();
      computeActive();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [scrollIds]);

  return (
    <div className="demo-detail-wrap">
      <div className="demo-detail-main">
        <header className="demo-detail-header">
          <div className="demo-doc-heading-row">
            <Link to="/components" className="demo-back demo-page-heading-back">
              ← Back to components
            </Link>
            <h1 className="demo-page-title">{comp.name}</h1>
          </div>
        </header>

        <section id="overview" className="demo-detail-section">
          <h2 className="demo-detail-heading">Overview</h2>
          <p className="demo-detail-text">{comp.description}</p>
          <p className="demo-detail-text">{getOverviewExtra(comp)}</p>
        </section>

        <section id="accessibility" className="demo-detail-section">
          <h2 className="demo-detail-heading">Accessibility</h2>
          <p className="demo-detail-text">{getAccessibilityBody(comp)}</p>
        </section>

        <section id="installation" className="demo-detail-section">
          <h2 className="demo-detail-heading">Installation</h2>
          <p className="demo-detail-text">Install the library in your project (if not already installed):</p>
          <CodeBlock code={defaultInstall} componentName={comp.name} raw />
        </section>

        <section id="usage" className="demo-detail-section">
          <h2 className="demo-detail-heading">Usage</h2>
          <p className="demo-detail-text">Import the component and styles in your file:</p>
          <CodeBlock code={usageCode} componentName={comp.name} raw />
        </section>

        <section id="examples" className="demo-detail-section">
          <h2 className="demo-detail-heading">Examples</h2>
          {(rawExamples || []).map((ex) => (
            <div key={ex.id} id={`example-${ex.id}`} className="demo-detail-example">
              <h3 className="demo-detail-example-title">{ex.title}</h3>
              <div className="demo-detail-preview">
                <ex.Demo />
              </div>
              <CodeBlock code={ex.code} componentName={comp.name} />
            </div>
          ))}
        </section>

        {hasApi && (
          <section id="api-reference" className="demo-detail-section">
            <h2 className="demo-detail-heading">API Reference</h2>
            <div className="demo-api-table-wrap">
              <table className="demo-api-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {api.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <code>{row.name}</code>
                      </td>
                      <td>
                        <code>{row.type}</code>
                      </td>
                      <td>
                        <code>{row.default}</code>
                      </td>
                      <td>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>

      <aside className="demo-detail-sidebar">
        <nav className="demo-on-this-page" aria-label="On this page">
          <h3 className="demo-on-this-page-title">On this page</h3>
          <OnThisPageNav items={navItems} scrollTo={scrollTo} activeId={activeSectionId} />
        </nav>
      </aside>
    </div>
  );
}

export default ComponentDetailPage;
