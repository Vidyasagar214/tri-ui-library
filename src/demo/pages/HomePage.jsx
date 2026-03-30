import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { componentsRegistry } from "../componentsRegistry";
import DemoPageSearch from "../components/DemoPageSearch";

function normalize(text) {
  return String(text).toLowerCase().trim();
}

function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return componentsRegistry;
    return componentsRegistry.filter(
      (c) =>
        normalize(c.name).includes(q) ||
        normalize(c.description).includes(q) ||
        normalize(c.id).includes(q)
    );
  }, [query]);

  return (
    <div className="demo-home">
      <header className="demo-home-header">
        <p className="demo-page-eyebrow">Component library</p>
        <div className="demo-page-title-row">
          <h1 className="demo-page-title">Tri UI Library</h1>
          <DemoPageSearch
            id="demo-home-search"
            value={query}
            onChange={setQuery}
            placeholder="Search components…"
            ariaLabel="Search components"
          />
        </div>
        <p className="demo-page-lead">
          Reusable React components with plain CSS. Click a component to see the demo and copy the code.
        </p>
      </header>
      <div className="demo-home-grid">
        {filtered.length === 0 ? (
          <p className="demo-list-empty" role="status">
            {query.trim()
              ? `No components match “${query.trim()}”. Try another name or keyword.`
              : "No components available."}
          </p>
        ) : (
          filtered.map((comp) => (
            <Link
              key={comp.id}
              to={`/components/${comp.id}`}
              className="demo-home-card"
            >
              <span className="demo-home-card-name">{comp.name}</span>
              <p className="demo-home-card-desc">{comp.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
