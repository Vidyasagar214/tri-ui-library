import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import ExamplesGalleryPage from "./pages/ExamplesGalleryPage";
import ExampleLayoutDetailPage from "./pages/ExampleLayoutDetailPage";
import "./demo.css";
import "./demo-examples.css";

function App() {
  const { pathname } = useLocation();
  const componentsNavActive = pathname === "/" || pathname.startsWith("/components");
  const examplesNavActive = pathname.startsWith("/examples");

  return (
    <div className="demo-layout">
      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <Link to="/" className="demo-nav-logo">Tri UI</Link>
          <div className="demo-nav-links">
            <Link
              to="/"
              className={`demo-nav-link${componentsNavActive ? " demo-nav-link--active" : ""}`}
            >
              Components
            </Link>
            <Link
              to="/examples"
              className={`demo-nav-link${examplesNavActive ? " demo-nav-link--active" : ""}`}
            >
              Examples
            </Link>
          </div>
        </div>
      </nav>
      <main className="demo-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/:id" element={<ComponentDetailPage />} />
          <Route path="/examples" element={<ExamplesGalleryPage />} />
          <Route path="/examples/:id" element={<ExampleLayoutDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
