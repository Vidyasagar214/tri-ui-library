import { Link } from "react-router-dom";
import { PACKAGE_VERSION } from "../siteMeta";
import "../../components/Button/Button.css";

function FeatureCard({ title, children }) {
  return (
    <article className="demo-landing-feature">
      <h2 className="demo-landing-feature-title">{title}</h2>
      <p className="demo-landing-feature-text">{children}</p>
    </article>
  );
}

function LandingPage() {
  return (
    <div>
      <section className="demo-landing-hero">
        <h1 className="demo-landing-hero-title">Tri UI Library</h1>
        <p className="demo-landing-hero-lead">
          Reusable React components styled with plain CSS—no Tailwind, Material UI, Bootstrap, or
          other UI frameworks. Ship dashboards, forms, and overlays with a small, predictable
          dependency surface.
        </p>
        <div className="demo-landing-hero-actions">
          <Link to="/installation" className="ui-btn ui-btn--primary ui-btn--md demo-landing-cta">
            Get started
          </Link>
          <Link to="/components" className="ui-btn ui-btn--primary ui-btn--md demo-landing-cta">
            Components
          </Link>
          <Link to="https://demo-tri-ui.vercel.app" target="_blank" className="ui-btn ui-btn--primary ui-btn--md demo-landing-cta">
            Demo Site
          </Link>
        </div>
        <p className="demo-landing-version-line">
          Current version: <strong>{PACKAGE_VERSION}</strong> (npm)
        </p>
      </section>

      <section className="demo-landing-features" aria-labelledby="landing-features-heading">
        <h2 id="landing-features-heading" className="demo-landing-features-visually-hidden">
          Why Tri UI
        </h2>
        <div className="demo-landing-features-grid">
          <FeatureCard title="Plain CSS design system">
            Components share one stylesheet built on CSS custom properties (colors, spacing,
            typography, radii, shadows). Theme your app by overriding variables—no runtime CSS-in-JS
            and no framework-specific class names to fight.
          </FeatureCard>
          <FeatureCard title="Built for real app shells">
            Includes layout primitives such as DashboardPage, Navbar, and Sidebar, plus data and
            feedback components (tables, dialogs, alerts, inputs). Suitable for internal tools and
            product UI without pulling in a heavy kit.
          </FeatureCard>
          <FeatureCard title="Accessible patterns">
            Markup aims for sensible ARIA roles, labels, and keyboard support (for example Escape to
            close overlays, focus management in dialogs). Pair with your own audits for production
            compliance.
          </FeatureCard>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
