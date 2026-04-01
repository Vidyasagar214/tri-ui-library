import { Link } from "react-router-dom";
import {
  PACKAGE_VERSION,
  GITHUB_REPO_URL,
  NPM_PACKAGE_URL,
  GITHUB_ISSUES_URL,
} from "../siteMeta";

function ExternalIcon() {
  return (
    <svg className="demo-footer-external-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function FooterExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="demo-footer-link demo-footer-link--external"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ExternalIcon />
    </a>
  );
}

export default function DemoFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="demo-footer" role="contentinfo">
      <div className="demo-footer-accent" aria-hidden="true" />

      <div className="demo-footer-links-wrap">
        <div className="demo-footer-links-inner">
          <nav className="demo-footer-col" aria-label="Documentation">
            <h3 className="demo-footer-col-title">Docs</h3>
            <ul className="demo-footer-list">
              <li>
                <Link to="/" className="demo-footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/installation" className="demo-footer-link">
                  Installation &amp; usage
                </Link>
              </li>
              <li>
                <Link to="/components" className="demo-footer-link">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/examples" className="demo-footer-link">
                  Layout examples
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="demo-footer-col" aria-label="Community">
            <h3 className="demo-footer-col-title">Community</h3>
            <ul className="demo-footer-list">
              <li>
                <FooterExternalLink href={NPM_PACKAGE_URL}>
                  npm v{PACKAGE_VERSION}
                </FooterExternalLink>
              </li>
              <li>
                <FooterExternalLink href={GITHUB_ISSUES_URL}>GitHub Issues</FooterExternalLink>
              </li>
            </ul>
          </nav>
          <nav className="demo-footer-col" aria-label="More">
            <h3 className="demo-footer-col-title">More</h3>
            <ul className="demo-footer-list">
              <li>
                <FooterExternalLink href={GITHUB_REPO_URL}>GitHub</FooterExternalLink>
              </li>
            </ul>
          </nav>
        </div>

        <p className="demo-footer-legal">
          Copyright © {year} Tri UI Library. MIT License. Built with React and Vite.
        </p>
      </div>
    </footer>
  );
}
