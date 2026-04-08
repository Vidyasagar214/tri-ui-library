import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import InstallationPage from "./pages/InstallationPage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import ExamplesGalleryPage from "./pages/ExamplesGalleryPage";
import ExampleLayoutDetailPage from "./pages/ExampleLayoutDetailPage";
import { PACKAGE_VERSION, GITHUB_REPO_URL } from "./siteMeta";
import DemoFooter from "./components/DemoFooter";
import DemoFeedbackDialog, { DemoFeedbackNavTriggers } from "./components/DemoFeedbackDialog";
import DemoThemeToggle from "./components/DemoThemeToggle";
import triLogoImg from "./assets/tri-img.png";
import "./demo.css";
import "./demo-examples.css";
import "./demo-theme.css";

const THEME_STORAGE_KEY = "tri-ui-demo-theme";

function readStoredTheme() {
  if (typeof window === "undefined") return "light";
  const s = localStorage.getItem(THEME_STORAGE_KEY);
  if (s === "light" || s === "dark") return s;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function GitHubMark() {
  return (
    <svg className="demo-nav-github-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
      />
    </svg>
  );
}

function ExternalTabIcon() {
  return (
    <svg className="demo-nav-external-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const { pathname } = useLocation();
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSentiment, setFeedbackSentiment] = useState(null);
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const openFeedback = (kind) => {
    setFeedbackSentiment(kind === "up" ? "positive" : "negative");
    setFeedbackOpen(true);
  };
  const isLanding = pathname === "/";
  const componentsNavActive =
    pathname === "/components" || pathname.startsWith("/components/");
  const examplesNavActive = pathname.startsWith("/examples");
  const isDocShell =
    pathname === "/installation" ||
    pathname === "/components" ||
    pathname.startsWith("/components/") ||
    pathname === "/examples" ||
    pathname.startsWith("/examples/");

  return (
    <div
      className={`demo-layout${isDocShell ? " demo-layout--doc" : ""}`}
    >
      <nav className={`demo-nav${isLanding ? " demo-nav--landing" : ""}`}>
        <div className="demo-nav-inner">
          <Link to="/" className="demo-nav-brand">
            <img
              src={triLogoImg}
              alt=""
              className="demo-nav-logo-img"
              width={32}
              height={32}
            />
            <span className={`demo-nav-logo-text${isLanding ? " demo-nav-logo-text--landing" : ""}`}>
              Tri UI
            </span>
          </Link>
          {isLanding ? (
            <div className="demo-nav-landing-right">
              <DemoFeedbackNavTriggers onOpen={openFeedback} />
              <span className="demo-nav-version-pill" title={`npm package v${PACKAGE_VERSION}`}>
                v{PACKAGE_VERSION}
              </span>
              <a
                href={GITHUB_REPO_URL}
                className="demo-nav-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubMark />
                <span>GitHub</span>
                <ExternalTabIcon />
              </a>
              <DemoThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          ) : (
            <div className="demo-nav-end">
              <DemoFeedbackNavTriggers onOpen={openFeedback} />
              <div className="demo-nav-links">
                <Link
                  to="/components"
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
              <DemoThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          )}
        </div>
      </nav>
      <main
        className={`demo-main${isLanding ? " demo-main--landing" : ""}${isDocShell ? " demo-main--doc" : ""}`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="/components" element={<HomePage />} />
          <Route path="/components/:id" element={<ComponentDetailPage />} />
          <Route path="/examples" element={<ExamplesGalleryPage />} />
          <Route path="/examples/:id" element={<ExampleLayoutDetailPage />} />
        </Routes>
      </main>
      <DemoFooter />
      <DemoFeedbackDialog
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        initialSentiment={feedbackSentiment}
        pagePath={pathname}
      />
    </div>
  );
}

export default App;
