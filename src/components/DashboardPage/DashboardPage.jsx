import React from "react";
import "./DashboardPage.css";

/**
 * Dashboard shell: optional navbar + sidebar + scrollable main content.
 * Pass composed Navbar and Sidebar as nodes, or leave null for partial layouts.
 * @param {React.ReactNode} navbar - Top bar (e.g. Navbar component)
 * @param {React.ReactNode} sidebar - Side rail (e.g. Sidebar component)
 * @param {React.ReactNode} children - Main area content
 * @param {boolean} sidebarCollapsed - When true, main area uses collapsed spacing (optional visual)
 * @param {'fluid'|'contained'} mainWidth - Main content max-width
 * @param {boolean} fullHeight - Fill viewport height (min-height 100vh)
 * @param {string} className
 */
function DashboardPage({
  navbar,
  sidebar,
  children,
  sidebarCollapsed = false,
  mainWidth = "fluid",
  fullHeight = true,
  className = "",
}) {
  const classNames = [
    "ui-dashboard",
    fullHeight && "ui-dashboard--full-height",
    sidebarCollapsed && "ui-dashboard--sidebar-collapsed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mainClass = [
    "ui-dashboard-main",
    mainWidth === "contained" && "ui-dashboard-main--contained",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {navbar && <div className="ui-dashboard-navbar">{navbar}</div>}
      <div className="ui-dashboard-body">
        {sidebar && <div className="ui-dashboard-sidebar-wrap">{sidebar}</div>}
        <main className={mainClass} role="main">
          <div className="ui-dashboard-main-inner">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
