import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { componentsRegistry } from "../componentsRegistry";
import { FORMS_NAV_LINKS, FORMS_SECTION_IDS } from "../formsNav";
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

  const isSearching = query.trim().length > 0;

  const mainList = useMemo(() => {
    if (isSearching) return filtered;
    return filtered.filter((c) => !FORMS_SECTION_IDS.has(c.id));
  }, [filtered, isSearching]);

  const formListOrdered = useMemo(() => {
    if (isSearching) return [];
    return FORMS_NAV_LINKS.map(({ id }) => componentsRegistry.find((c) => c.id === id)).filter(Boolean);
  }, [isSearching]);

  return (
    <div className="demo-home">
      <header className="demo-home-header">
        <div className="demo-page-title-row">
          <div className="demo-page-title-group">
            <Link to="/" className="demo-back demo-page-heading-back">
              ← Home
            </Link>
            <h1 className="demo-page-title">Components</h1>
          </div>
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
        {isSearching ? (
          filtered.length === 0 ? (
            <p className="demo-list-empty" role="status">
              {`No components match “${query.trim()}”. Try another name or keyword.`}
            </p>
          ) : (
            filtered.map((comp) => (
              <Link key={comp.id} to={`/components/${comp.id}`} className="demo-home-card">
                <span className="demo-home-card-name">{comp.name}</span>
                <p className="demo-home-card-desc">{comp.description}</p>
              </Link>
            ))
          )
        ) : (
          <>
            {mainList.length === 0 ? (
              <p className="demo-list-empty" role="status">
                No components available.
              </p>
            ) : (
              mainList.map((comp) => (
                <Link key={comp.id} to={`/components/${comp.id}`} className="demo-home-card">
                  <span className="demo-home-card-name">{comp.name}</span>
                  <p className="demo-home-card-desc">{comp.description}</p>
                </Link>
              ))
            )}
          </>
        )}
      </div>

      {!isSearching && formListOrdered.length > 0 ? (
        <details className="demo-forms-section" open>
          <summary className="demo-forms-section-summary">Forms</summary>
          <p className="demo-forms-section-lead">Inputs, labels, validation, and layout helpers for building forms.</p>
          <div className="demo-home-grid demo-home-grid--forms">
            {formListOrdered.map((comp) => {
              const navLabel = FORMS_NAV_LINKS.find((l) => l.id === comp.id)?.label;
              return (
                <Link key={comp.id} to={`/components/${comp.id}`} className="demo-home-card demo-home-card--form">
                  <span className="demo-home-card-name">{navLabel || comp.name}</span>
                  <p className="demo-home-card-desc">{comp.description}</p>
                </Link>
              );
            })}
          </div>
        </details>
      ) : null}
    </div>
  );
}

export default HomePage;
