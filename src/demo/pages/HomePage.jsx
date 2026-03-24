import { Link } from "react-router-dom";
import { componentsRegistry } from "../componentsRegistry";

function HomePage() {
  return (
    <div className="demo-home">
      <header className="demo-home-header">
        <h1 className="demo-home-title">Tri UI Library</h1>
        <p className="demo-home-subtitle">
          Reusable React components with plain CSS. Click a component to see the demo and copy the code.
        </p>
      </header>
      <div className="demo-home-grid">
        {componentsRegistry.map((comp) => (
          <Link
            key={comp.id}
            to={`/components/${comp.id}`}
            className="demo-home-card"
          >
            <span className="demo-home-card-name">{comp.name}</span>
            <p className="demo-home-card-desc">{comp.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
