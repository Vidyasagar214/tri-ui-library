import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { layoutExamples } from "../layoutExamples/definitions";
import DemoPageSearch from "../components/DemoPageSearch";

function normalize(text) {
  return String(text).toLowerCase().trim();
}

function ExamplesGalleryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return layoutExamples;
    return layoutExamples.filter(
      (ex) =>
        normalize(ex.title).includes(q) ||
        normalize(ex.tagline).includes(q) ||
        normalize(ex.id).includes(q)
    );
  }, [query]);

  return (
    <div className="demo-example-page">
      <header className="demo-examples-header">
        <p className="demo-page-eyebrow">Dashboard layouts</p>
        <div className="demo-page-title-row">
          <h1 className="demo-page-title">Layout examples</h1>
          <DemoPageSearch
            id="demo-examples-search"
            value={query}
            onChange={setQuery}
            placeholder="Search layouts…"
            ariaLabel="Search layout examples"
          />
        </div>
        <p className="demo-page-lead">
          Full dashboard shells built with Tri UI—navbar, sidebar, cards, tables, and charts. Open one to preview the layout and copy the code.
        </p>
      </header>
      <div className="demo-examples-grid">
        {filtered.length === 0 ? (
          <p className="demo-list-empty" role="status">
            {query.trim()
              ? `No layouts match “${query.trim()}”. Try another title or keyword.`
              : "No layout examples available."}
          </p>
        ) : (
          filtered.map((ex) => (
            <Link
              key={ex.id}
              to={`/examples/${ex.id}`}
              className="demo-example-gallery-card"
            >
              <div className={`demo-example-thumb ${ex.thumbClass}`} aria-hidden="true">
                <span className="demo-example-thumb-ui" />
              </div>
              <div className="demo-example-gallery-body">
                <span className="demo-example-gallery-title">{ex.title}</span>
                <p className="demo-example-gallery-desc">{ex.tagline}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ExamplesGalleryPage;
