import { useParams, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { getLayoutExampleById } from "../layoutExamples/definitions";

function LayoutCodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

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

function ExampleLayoutDetailPage() {
  const { id } = useParams();
  const ex = getLayoutExampleById(id);
  const [tab, setTab] = useState("preview");

  if (!ex) {
    return (
      <div className="demo-example-page">
        <p>Example not found.</p>
        <Link to="/examples" className="demo-back">← Back to examples</Link>
      </div>
    );
  }

  const Preview = ex.Preview;

  return (
    <div className="demo-example-detail">
      <header className="demo-example-detail-header">
        <Link to="/examples" className="demo-back">← All examples</Link>
        <h1 className="demo-page-title">{ex.title}</h1>
        <p className="demo-page-lead">{ex.tagline}</p>
      </header>

      <div className="demo-example-tabs" role="tablist" aria-label="Example view">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "preview"}
          className={`demo-example-tab${tab === "preview" ? " demo-example-tab--active" : ""}`}
          onClick={() => setTab("preview")}
        >
          Preview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "code"}
          className={`demo-example-tab${tab === "code" ? " demo-example-tab--active" : ""}`}
          onClick={() => setTab("code")}
        >
          Code
        </button>
      </div>

      {tab === "preview" ? (
        <div
          className="demo-example-detail-preview demo-dashboard-preview"
          role="tabpanel"
        >
          <Preview />
        </div>
      ) : (
        <div className="demo-example-detail-code" role="tabpanel">
          <LayoutCodeBlock code={ex.code} />
        </div>
      )}
    </div>
  );
}

export default ExampleLayoutDetailPage;
