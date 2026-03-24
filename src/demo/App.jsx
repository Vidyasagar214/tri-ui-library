import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import "./demo.css";

function App() {
  return (
    <div className="demo-layout">
      <nav className="demo-nav">
        <Link to="/" className="demo-nav-logo">Tri UI</Link>
      </nav>
      <main className="demo-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/:id" element={<ComponentDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
