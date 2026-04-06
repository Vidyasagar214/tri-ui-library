import { useParams, Link } from "react-router-dom";
import { getComponentById } from "../componentsRegistry";
import { useState, useCallback } from "react";
import { buildOnThisPageNav, getAccessibilityBody, getOverviewExtra } from "../docPageUtils";

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

function OnThisPageNav({ items, scrollTo }) {
  return (
    <ul className="demo-on-this-page-list">
      {items.map((item) => (
        <li key={item.id}>
          {item.children ? (
            <>
              <button
                type="button"
                className="demo-on-this-page-link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
              <ul className="demo-on-this-page-sublist">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <button
                      type="button"
                      className="demo-on-this-page-link demo-on-this-page-link--sub"
                      onClick={() => scrollTo(child.id)}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <button type="button" className="demo-on-this-page-link" onClick={() => scrollTo(item.id)}>
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

  const examples = comp.examples || [];
  const api = comp.api || [];
  const hasApi = api.length > 0;
  const navItems = buildOnThisPageNav(examples, hasApi);

  const usageCode = `import { ${comp.name} } from "tri-ui-library";
import "tri-ui-library/styles.css";`;

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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
          {examples.map((ex) => (
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
          <OnThisPageNav items={navItems} scrollTo={scrollTo} />
        </nav>
      </aside>
    </div>
  );
}

export default ComponentDetailPage;
