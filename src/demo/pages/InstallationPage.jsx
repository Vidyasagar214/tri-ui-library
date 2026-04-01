import { Link } from "react-router-dom";
import { PACKAGE_VERSION } from "../siteMeta";

function Code({ children }) {
  return (
    <pre className="demo-install-pre">
      <code>{children}</code>
    </pre>
  );
}

function InstallationPage() {
  return (
    <div className="demo-install">
      <header className="demo-install-header">
        <div className="demo-doc-heading-row">
          <Link to="/" className="demo-back demo-page-heading-back">← Home</Link>
          <h1 className="demo-page-title">Installation &amp; usage</h1>
        </div>
        <p className="demo-page-lead">
          Install <strong>tri-ui-library</strong> from npm, add the global stylesheet once, and import
          only the components you need. React 18+ is required; the package ships as ES modules and UMD
          in <code className="demo-install-inline-code">dist/</code>.
        </p>
      </header>

      <section className="demo-install-section" aria-labelledby="install-requirements">
        <h2 id="install-requirements" className="demo-install-h2">Requirements</h2>
        <ul className="demo-install-list">
          <li>
            <strong>Node.js</strong> 18 or newer (for local development and compatible toolchains).
          </li>
          <li>
            <strong>React</strong> 18 or 19 and <strong>react-dom</strong> as peer dependencies—you
            install them in your app; the library does not bundle React.
          </li>
          <li>
            A bundler that understands npm packages (Vite, webpack, Parcel, Next.js with client
            components, etc.).
          </li>
        </ul>
      </section>

      <section className="demo-install-section" aria-labelledby="install-npm">
        <h2 id="install-npm" className="demo-install-h2">Install from npm</h2>
        <p className="demo-install-p">
          Latest published version: <strong>{PACKAGE_VERSION}</strong>.
        </p>
        <Code>{`npm install tri-ui-library react react-dom`}</Code>
        <p className="demo-install-p">
          If React is already in your project, run <code className="demo-install-inline-code">npm install tri-ui-library</code> only.
        </p>
      </section>

      <section className="demo-install-section" aria-labelledby="install-styles">
        <h2 id="install-styles" className="demo-install-h2">Import styles (required)</h2>
        <p className="demo-install-p">
          Import the bundled stylesheet <strong>once</strong> at your app entry (e.g.{' '}
          <code className="demo-install-inline-code">main.jsx</code> or{' '}
          <code className="demo-install-inline-code">App.jsx</code>). It includes design tokens
          (variables), reset, and component CSS.
        </p>
        <Code>{`import "tri-ui-library/styles.css";`}</Code>
      </section>

      <section className="demo-install-section" aria-labelledby="install-use">
        <h2 id="install-use" className="demo-install-h2">Use components</h2>
        <p className="demo-install-p">
          Named exports match the documentation. Tree-shaking friendly bundlers will include only
          what you import.
        </p>
        <Code>{`import { Button, Card, Alert, Input } from "tri-ui-library";
import "tri-ui-library/styles.css";

export function Example() {
  return (
    <Card title="Welcome">
      <Alert type="info" title="Tip">Import styles once at the root.</Alert>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="primary" type="button">Continue</Button>
    </Card>
  );
}`}</Code>
      </section>

      <section className="demo-install-section" aria-labelledby="install-theme">
        <h2 id="install-theme" className="demo-install-h2">Theming</h2>
        <p className="demo-install-p">
          Override CSS variables (e.g. <code className="demo-install-inline-code">--ui-primary</code>,{' '}
          <code className="demo-install-inline-code">--ui-muted</code>) on{' '}
          <code className="demo-install-inline-code">:root</code> or a wrapper class. See the README
          &quot;Design System&quot; section for the full token list.
        </p>
        <Code>{`:root {
  --ui-primary: #059669;
  --ui-primary-hover: #047857;
}`}</Code>
      </section>

      <section className="demo-install-section" aria-labelledby="install-local">
        <h2 id="install-local" className="demo-install-h2">Local / monorepo development</h2>
        <p className="demo-install-p">
          Point your app at a local checkout with npm or pnpm workspaces, or use{' '}
          <code className="demo-install-inline-code">npm link</code> /{' '}
          <code className="demo-install-inline-code">"tri-ui-library": "file:../tri-ui-library"</code>{' '}
          in <code className="demo-install-inline-code">package.json</code>. Run{' '}
          <code className="demo-install-inline-code">npm run build</code> in the library repo so{' '}
          <code className="demo-install-inline-code">dist/</code> is up to date.
        </p>
      </section>

      <section className="demo-install-section" aria-labelledby="install-next">
        <h2 id="install-next" className="demo-install-h2">Next steps</h2>
        <ul className="demo-install-list">
          <li>
            <Link to="/components">Browse all components</Link> with live demos and copyable code.
          </li>
          <li>
            <Link to="/examples">Explore layout examples</Link> (dashboard shells built with the library).
          </li>
        </ul>
      </section>
    </div>
  );
}

export default InstallationPage;
