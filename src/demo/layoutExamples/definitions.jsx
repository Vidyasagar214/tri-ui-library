import React, { useState } from "react";
import {
  DashboardPage,
  Navbar,
  Sidebar,
  NavLink,
  Card,
  Button,
  Badge,
  Chart,
  DataTable,
  Alert,
  Input,
} from "../../index";

const DEMO_LOGO =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="%232563eb"/></svg>'
  );

const I = {
  home: (
    <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 16l4-4 4 4 6-6" /></svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /></svg>
  ),
};

function PreviewShell({ className = "", children }) {
  return (
    <div className={`demo-example-preview-mount ${className}`.trim()}>
      {children}
    </div>
  );
}

export function PreviewAnalyticsPro() {
  const [c, setC] = useState(false);
  const [a, setA] = useState("dash");
  const items = [
    { id: "dash", label: "Overview", icon: I.home, active: a === "dash", onClick: () => setA("dash") },
    { id: "rep", label: "Reports", icon: I.chart, active: a === "rep", onClick: () => setA("rep") },
    { id: "team", label: "Team", icon: I.users, active: a === "team", onClick: () => setA("team") },
  ];
  return (
    <PreviewShell className="demo-example-preview-mount--analytics">
      <DashboardPage
        sidebarCollapsed={c}
        fullHeight={false}
        navbar={(
          <Navbar
            logoSrc={DEMO_LOGO}
            logoAlt=""
            brand={<strong>Northstar</strong>}
            variant="default"
            sticky={false}
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#" active>Live</NavLink>
                <NavLink href="#">Export</NavLink>
              </div>
            )}
            actions={<Button variant="primary" size="sm">New report</Button>}
          />
        )}
        sidebar={(
          <Sidebar
            header={<span>Analytics</span>}
            collapsed={c}
            onToggleCollapse={setC}
            variant="accent"
            items={items}
          />
        )}
      >
        <div className="demo-example-preview-inner">
          <div className="demo-example-stat-row">
            <Card variant="elevated" title={<><Badge variant="primary">Live</Badge> Revenue</>}>
              <p className="demo-example-stat-val">$48.2k</p>
              <p className="demo-example-stat-sub">+12% vs last week</p>
            </Card>
            <Card variant="elevated" title="Active users">
              <p className="demo-example-stat-val">2,841</p>
              <p className="demo-example-stat-sub">Sessions today</p>
            </Card>
            <Card variant="elevated" title="Conversion">
              <p className="demo-example-stat-val">3.8%</p>
              <p className="demo-example-stat-sub">Goal completions</p>
            </Card>
          </div>
          <Card title="Traffic trend">
            <Chart
              data={[
                { label: "Mon", value: 32 },
                { label: "Tue", value: 48 },
                { label: "Wed", value: 41 },
                { label: "Thu", value: 56 },
                { label: "Fri", value: 52 },
              ]}
            />
          </Card>
        </div>
      </DashboardPage>
    </PreviewShell>
  );
}

export function PreviewStudioWarm() {
  const [c, setC] = useState(false);
  const [a, setA] = useState("proj");
  return (
    <PreviewShell className="demo-example-preview-mount--studio">
      <DashboardPage
        sidebarCollapsed={c}
        fullHeight={false}
        navbar={(
          <Navbar
            logoPlaceholder
            brand={<span className="demo-example-brand-script">Bloom Studio</span>}
            variant="transparent"
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#" active>Projects</NavLink>
                <NavLink href="#">Gallery</NavLink>
                <NavLink href="#">Clients</NavLink>
              </div>
            )}
            actions={<Button variant="ghost" size="sm">Sign out</Button>}
          />
        )}
        sidebar={(
          <Sidebar
            header={<span>Workspace</span>}
            collapsed={c}
            onToggleCollapse={setC}
            variant="minimal"
            width="wide"
            items={[
              { id: "p", label: "Active shoots", icon: I.home, active: a === "proj", onClick: () => setA("proj") },
              { id: "d", label: "Deliverables", icon: I.chart, active: a === "del", onClick: () => setA("del") },
            ]}
          />
        )}
      >
        <div className="demo-example-preview-inner demo-example-preview-inner--studio">
          <Alert type="info" title="Welcome back">You have 3 drafts ready for review.</Alert>
          <div className="demo-example-studio-grid">
            <Card variant="elevated" title="Spring campaign">
              <p className="demo-example-muted">Hero shots · Due Friday</p>
              <Button variant="secondary" size="sm">Open</Button>
            </Card>
            <Card variant="elevated" title="Lookbook 2026">
              <p className="demo-example-muted">32 assets · In progress</p>
              <Button variant="primary" size="sm">Continue</Button>
            </Card>
          </div>
        </div>
      </DashboardPage>
    </PreviewShell>
  );
}

export function PreviewFinanceSlate() {
  const [c, setC] = useState(false);
  return (
    <PreviewShell className="demo-example-preview-mount--finance">
      <DashboardPage
        sidebarCollapsed={c}
        mainWidth="contained"
        fullHeight={false}
        navbar={(
          <Navbar
            logoSrc={DEMO_LOGO}
            logoAlt=""
            brand={<strong>LedgerOne</strong>}
            variant="bordered"
            dense
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#" active>Accounts</NavLink>
                <NavLink href="#">Transfers</NavLink>
                <NavLink href="#">Compliance</NavLink>
              </div>
            )}
            actions={<Button variant="secondary" size="sm">Support</Button>}
          />
        )}
        sidebar={(
          <Sidebar
            header={<span>Operations</span>}
            collapsed={c}
            onToggleCollapse={setC}
            variant="default"
            items={[
              { id: "1", label: "Reconciliation", active: true, onClick: () => {} },
              { id: "2", label: "Exceptions", onClick: () => {} },
              { id: "3", label: "Audit log", onClick: () => {} },
            ]}
          />
        )}
      >
        <div className="demo-example-preview-inner">
          <Card title="Settlement queue">
            <DataTable
              columns={[
                { key: "id", header: "Ref" },
                { key: "amt", header: "Amount" },
                { key: "st", header: "Status" },
              ]}
              data={[
                { id: "TX-9021", amt: "$12,400.00", st: <Badge variant="primary">Pending</Badge> },
                { id: "TX-9022", amt: "$3,210.50", st: <Badge>Queued</Badge> },
                { id: "TX-9023", amt: "$890.00", st: <Badge variant="danger">Hold</Badge> },
              ]}
            />
          </Card>
        </div>
      </DashboardPage>
    </PreviewShell>
  );
}

export function PreviewStartupSpark() {
  const [c, setC] = useState(false);
  return (
    <PreviewShell className="demo-example-preview-mount--startup">
      <DashboardPage
        sidebarCollapsed={c}
        fullHeight={false}
        navbar={(
          <Navbar
            brandMark
            brand={<strong>Pulse</strong>}
            variant="default"
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#" active>Product</NavLink>
                <NavLink href="#">Pricing</NavLink>
              </div>
            )}
            actions={<Button variant="primary" size="sm">Launch</Button>}
          />
        )}
        sidebar={(
          <Sidebar
            collapsed={c}
            onToggleCollapse={setC}
            showCollapseButton
            header={<span>Build</span>}
            variant="minimal"
            items={[
              { id: "a", label: "Roadmap", active: true, onClick: () => {} },
              { id: "b", label: "Feedback", onClick: () => {} },
            ]}
          />
        )}
      >
        <div className="demo-example-preview-inner">
          <Alert type="success" title="All systems go">Your last deploy completed in 42s.</Alert>
          <div className="demo-example-spark-grid">
            <Card title="Uptime"><p className="demo-example-big-num">99.98%</p></Card>
            <Card title="API calls"><p className="demo-example-big-num">1.2M</p></Card>
            <Card title="Errors"><p className="demo-example-big-num demo-example-big-num--ok">12</p></Card>
            <Card title="Latency"><p className="demo-example-big-num">84ms</p></Card>
          </div>
        </div>
      </DashboardPage>
    </PreviewShell>
  );
}

export function PreviewOpsConsole() {
  const [c, setC] = useState(true);
  return (
    <PreviewShell className="demo-example-preview-mount--console">
      <DashboardPage
        sidebarCollapsed={c}
        fullHeight={false}
        navbar={(
          <Navbar
            logoSrc={DEMO_LOGO}
            logoAlt=""
            brand={<strong className="demo-example-mono">gridctl</strong>}
            variant="default"
            dense
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#" active>Clusters</NavLink>
                <NavLink href="#">Logs</NavLink>
              </div>
            )}
            actions={<Badge variant="danger">2 alerts</Badge>}
          />
        )}
        sidebar={(
          <Sidebar
            collapsed={c}
            onToggleCollapse={setC}
            variant="accent"
            header={<span className="demo-example-mono">env: prod</span>}
            items={[
              { id: "n1", label: "Nodes", icon: I.gear, active: true, onClick: () => {} },
              { id: "n2", label: "Volumes", icon: I.chart, onClick: () => {} },
            ]}
          />
        )}
      >
        <div className="demo-example-preview-inner demo-example-preview-inner--console">
          <div className="demo-example-console-panel">
            <span className="demo-example-mono demo-example-console-prompt">$</span>
            <Input placeholder="kubectl get pods --all-namespaces" className="demo-example-console-input" />
            <Button variant="secondary" size="sm">Run</Button>
          </div>
          <Card title="Cluster health">
            <div className="demo-example-console-metrics">
              <div><Badge variant="primary">OK</Badge> api-gateway</div>
              <div><Badge variant="primary">OK</Badge> workers</div>
              <div><Badge variant="danger">WARN</Badge> cache-redis</div>
            </div>
          </Card>
        </div>
      </DashboardPage>
    </PreviewShell>
  );
}

const CODE_ANALYTICS = `import { useState } from "react";
import {
  DashboardPage,
  Navbar,
  Sidebar,
  NavLink,
  Card,
  Button,
  Badge,
  Chart,
} from "tri-ui-library";
import "tri-ui-library/styles.css";

export function AnalyticsDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <DashboardPage
      sidebarCollapsed={collapsed}
      navbar={(
        <Navbar
          logoSrc="/logo.svg"
          logoAlt="App"
          brand={<strong>Northstar</strong>}
          nav={(
            <div className="demo-navbar-nav-wrap">
              <NavLink href="/live" active>Live</NavLink>
              <NavLink href="/export">Export</NavLink>
            </div>
          )}
          actions={<Button variant="primary" size="sm">New report</Button>}
        />
      )}
      sidebar={(
        <Sidebar
          variant="accent"
          header={<span>Analytics</span>}
          collapsed={collapsed}
          onToggleCollapse={setCollapsed}
          items={[{ id: "o", label: "Overview", active: true, href: "#" }]}
        />
      )}
    >
      <div className="demo-example-stat-row">
        <Card variant="elevated" title="Revenue">...</Card>
      </div>
      <Card title="Traffic trend">
        <Chart data={[{ label: "Mon", value: 32 }, { label: "Tue", value: 48 }]} />
      </Card>
    </DashboardPage>
  );
}`;

const CODE_STUDIO = `import { useState } from "react";
import { DashboardPage, Navbar, Sidebar, Card, Alert, Button, NavLink } from "tri-ui-library";
import "tri-ui-library/styles.css";

/* Theme wrapper: .my-app { --ui-primary: #ea580c; --ui-muted: #fff7ed; } */

export function StudioDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <DashboardPage
      sidebarCollapsed={collapsed}
      navbar={(
        <Navbar
          variant="transparent"
          logoPlaceholder
          brand={<span>Bloom Studio</span>}
          nav={(
            <div className="demo-navbar-nav-wrap">
              <NavLink href="#" active>Projects</NavLink>
              <NavLink href="#">Gallery</NavLink>
            </div>
          )}
          actions={<Button variant="ghost" size="sm">Sign out</Button>}
        />
      )}
      sidebar={(
        <Sidebar
          variant="minimal"
          width="wide"
          header={<span>Workspace</span>}
          collapsed={collapsed}
          onToggleCollapse={setCollapsed}
          items={[...]}
        />
      )}
    >
      <Alert type="info" title="Welcome back">You have drafts ready.</Alert>
      <Card variant="elevated" title="Campaign">...</Card>
    </DashboardPage>
  );
}`;

const CODE_FINANCE = `import { useState } from "react";
import { DashboardPage, Navbar, Sidebar, Card, DataTable, Badge, Button, NavLink } from "tri-ui-library";
import "tri-ui-library/styles.css";

export function FinanceDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <DashboardPage
      mainWidth="contained"
      sidebarCollapsed={collapsed}
      navbar={(
        <Navbar
          variant="bordered"
          dense
          logoSrc="/logo.svg"
          brand={<strong>LedgerOne</strong>}
          nav={(
            <div className="demo-navbar-nav-wrap">
              <NavLink href="#" active>Accounts</NavLink>
              <NavLink href="#">Transfers</NavLink>
            </div>
          )}
          actions={<Button variant="secondary" size="sm">Support</Button>}
        />
      )}
      sidebar={(
        <Sidebar
          variant="default"
          header={<span>Operations</span>}
          collapsed={collapsed}
          onToggleCollapse={setCollapsed}
          items={[...]}
        />
      )}
    >
      <Card title="Settlement queue">
        <DataTable
          columns={[
            { key: "id", header: "Ref" },
            { key: "amt", header: "Amount" },
            { key: "st", header: "Status" },
          ]}
          data={[
            { id: "TX-1", amt: "$1,200.00", st: <Badge variant="primary">Pending</Badge> },
          ]}
        />
      </Card>
    </DashboardPage>
  );
}`;

const CODE_STARTUP = `import { useState } from "react";
import { DashboardPage, Navbar, Sidebar, Card, Alert, Button, NavLink } from "tri-ui-library";
import "tri-ui-library/styles.css";

/* Theme: .my-app { --ui-primary: #059669; } */

export function StartupDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <DashboardPage
      sidebarCollapsed={collapsed}
      navbar={(
        <Navbar
          brandMark
          brand={<strong>Pulse</strong>}
          nav={(
            <div className="demo-navbar-nav-wrap">
              <NavLink href="#" active>Product</NavLink>
              <NavLink href="#">Pricing</NavLink>
            </div>
          )}
          actions={<Button variant="primary" size="sm">Launch</Button>}
        />
      )}
      sidebar={(
        <Sidebar
          variant="minimal"
          header={<span>Build</span>}
          collapsed={collapsed}
          onToggleCollapse={setCollapsed}
          showCollapseButton
          items={[...]}
        />
      )}
    >
      <Alert type="success" title="All systems go">Deploy completed in 42s.</Alert>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
        <Card title="Uptime"><strong>99.98%</strong></Card>
        <Card title="Latency"><strong>84ms</strong></Card>
      </div>
    </DashboardPage>
  );
}`;

const CODE_CONSOLE = `import { useState } from "react";
import { DashboardPage, Navbar, Sidebar, Card, Badge, Input, Button, NavLink } from "tri-ui-library";
import "tri-ui-library/styles.css";

export function OpsDashboard() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <DashboardPage
      sidebarCollapsed={collapsed}
      navbar={(
        <Navbar
          dense
          logoSrc="/logo.svg"
          brand={<strong>gridctl</strong>}
          nav={(
            <div className="demo-navbar-nav-wrap">
              <NavLink href="#" active>Clusters</NavLink>
              <NavLink href="#">Logs</NavLink>
            </div>
          )}
          actions={<Badge variant="danger">2 alerts</Badge>}
        />
      )}
      sidebar={(
        <Sidebar
          variant="accent"
          collapsed={collapsed}
          onToggleCollapse={setCollapsed}
          header={<span>env: prod</span>}
          items={[...]}
        />
      )}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Input placeholder="kubectl get pods" />
        <Button variant="secondary" size="sm">Run</Button>
      </div>
      <Card title="Cluster health">...</Card>
    </DashboardPage>
  );
}`;

export const layoutExamples = [
  {
    id: "analytics-pro",
    title: "Analytics Pro",
    tagline: "Accent rail, live metrics, and charts for data-heavy dashboards.",
    thumbClass: "demo-example-thumb--analytics",
    Preview: PreviewAnalyticsPro,
    code: CODE_ANALYTICS,
  },
  {
    id: "studio-warm",
    title: "Studio Warm",
    tagline: "Soft editorial layout with transparent bar and minimal sidebar.",
    thumbClass: "demo-example-thumb--studio",
    Preview: PreviewStudioWarm,
    code: CODE_STUDIO,
  },
  {
    id: "finance-slate",
    title: "Finance Slate",
    tagline: "Contained main column, bordered navbar, and dense data tables.",
    thumbClass: "demo-example-thumb--finance",
    Preview: PreviewFinanceSlate,
    code: CODE_FINANCE,
  },
  {
    id: "startup-spark",
    title: "Startup Spark",
    tagline: "Bright status alerts and a stat grid for product health.",
    thumbClass: "demo-example-thumb--startup",
    Preview: PreviewStartupSpark,
    code: CODE_STARTUP,
  },
  {
    id: "ops-console",
    title: "Ops Console",
    tagline: "Collapsed accent rail and command-line style controls.",
    thumbClass: "demo-example-thumb--console",
    Preview: PreviewOpsConsole,
    code: CODE_CONSOLE,
  },
];

export function getLayoutExampleById(id) {
  return layoutExamples.find((e) => e.id === id) ?? null;
}
