import { useParams, Link } from "react-router-dom";
import { getComponentById } from "../componentsRegistry";
import { useState, useCallback } from "react";

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

function ComponentDetailPage() {
  const { id } = useParams();
  const comp = getComponentById(id);

  if (!comp) {
    return (
      <div className="demo-detail-wrap">
        <div className="demo-detail-main">
          <p>Component not found.</p>
          <Link to="/" className="demo-back">← Back to components</Link>
        </div>
      </div>
    );
  }

  const examples = comp.examples || [];
  const api = comp.api || [];
  const hasApi = api.length > 0;

  const usageCode = `import { ${comp.name} } from "tri-ui-library";
import "tri-ui-library/styles.css";`;

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="demo-detail-wrap">
      <div className="demo-detail-main">
        <header className="demo-detail-page-header">
          <Link to="/" className="demo-back">← Back</Link>
          <h1 className="demo-detail-title">{comp.name}</h1>
        </header>
        <p className="demo-detail-desc">{comp.description}</p>

        <section id="installation" className="demo-detail-section">
          <h2 className="demo-detail-heading">Installation</h2>
          <p className="demo-detail-text">
            Install the library in your project (if not already installed):
          </p>
          <CodeBlock code={defaultInstall} componentName={comp.name} raw />
        </section>

        <section id="usage" className="demo-detail-section">
          <h2 className="demo-detail-heading">Usage</h2>
          <p className="demo-detail-text">
            Import the component and styles in your file:
          </p>
          <CodeBlock code={usageCode} componentName={comp.name} raw />
        </section>

        <section id="examples" className="demo-detail-section">
          <h2 className="demo-detail-heading">Examples</h2>
          {examples.map((ex) => (
            <div
              key={ex.id}
              id={`example-${ex.id}`}
              className="demo-detail-example"
            >
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
                      <td><code>{row.name}</code></td>
                      <td><code>{row.type}</code></td>
                      <td><code>{row.default}</code></td>
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
          <ul className="demo-on-this-page-list">
            <li>
              <button type="button" className="demo-on-this-page-link" onClick={() => scrollTo("installation")}>
                Installation
              </button>
            </li>
            <li>
              <button type="button" className="demo-on-this-page-link" onClick={() => scrollTo("usage")}>
                Usage
              </button>
            </li>
            <li>
              <span className="demo-on-this-page-group">Examples</span>
              <ul className="demo-on-this-page-sublist">
                {examples.map((ex) => (
                  <li key={ex.id}>
                    <button
                      type="button"
                      className="demo-on-this-page-link demo-on-this-page-link--sub"
                      onClick={() => scrollTo(`example-${ex.id}`)}
                    >
                      {ex.title}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            {hasApi && (
              <li>
                <button type="button" className="demo-on-this-page-link" onClick={() => scrollTo("api-reference")}>
                  API Reference
                </button>
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default ComponentDetailPage;
