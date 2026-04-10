import { jsx as e, jsxs as p, Fragment as A } from "react/jsx-runtime";
import v, { useState as D, useEffect as I, useRef as P, useId as R, useCallback as z } from "react";
function ce({ items: i = [], multiple: a = !1, disabled: l = !1, variant: n = "default", className: t = "" }) {
  const [r, c] = v.useState(a ? [] : null), o = (s) => a ? Array.isArray(r) && r.includes(s) : r === s, d = (s) => {
    if (l) return;
    const b = i[s];
    b != null && b.disabled || c(
      a ? (u) => u.includes(s) ? u.filter((f) => f !== s) : [...u, s] : (u) => u === s ? null : s
    );
  }, m = [
    "ui-accordion",
    `ui-accordion--${n}`,
    l && "ui-accordion--disabled",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: m, role: "region", "aria-label": "Accordion", children: i.map((s, b) => {
    const u = l || s.disabled;
    return /* @__PURE__ */ p("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ p(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => d(b),
          "aria-expanded": o(b),
          "aria-controls": `ui-accordion-panel-${b}`,
          "aria-disabled": u,
          id: `ui-accordion-trigger-${b}`,
          disabled: u,
          children: [
            /* @__PURE__ */ e("span", { className: "ui-accordion-trigger-text", children: s.title }),
            /* @__PURE__ */ e("span", { className: "ui-accordion-trigger-icon", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          id: `ui-accordion-panel-${b}`,
          role: "region",
          "aria-labelledby": `ui-accordion-trigger-${b}`,
          className: "ui-accordion-panel",
          hidden: !o(b),
          children: s.content
        }
      )
    ] }, b);
  }) });
}
function oe({
  type: i = "info",
  children: a,
  title: l,
  className: n = "",
  dismissible: t = !1,
  onDismiss: r,
  ...c
}) {
  const [o, d] = v.useState(!1), m = () => {
    d(!0), r == null || r();
  }, s = [
    "ui-alert",
    `ui-alert--${i}`,
    n
  ].filter(Boolean).join(" ");
  return o ? null : /* @__PURE__ */ p(
    "div",
    {
      className: s,
      role: "alert",
      "aria-live": "polite",
      ...c,
      children: [
        /* @__PURE__ */ p("div", { className: "ui-alert-content", children: [
          l && /* @__PURE__ */ e("div", { className: "ui-alert-title", children: l }),
          /* @__PURE__ */ e("div", { className: "ui-alert-message", children: a })
        ] }),
        t && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "ui-alert-dismiss",
            onClick: m,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
function de({
  open: i,
  onClose: a,
  title: l,
  description: n,
  confirmLabel: t = "OK",
  cancelLabel: r = "Cancel",
  onConfirm: c,
  showCancel: o = !0
}) {
  return i ? /* @__PURE__ */ e("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ p("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ e("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: l }),
    n && /* @__PURE__ */ e("p", { className: "ui-alertdialog-desc", children: n }),
    /* @__PURE__ */ p("div", { className: "ui-alertdialog-actions", children: [
      o && /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: a, children: r }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        c == null || c(), a == null || a();
      }, children: t })
    ] })
  ] }) }) : null;
}
function ue({ ratio: i = 16 / 9, children: a, className: l = "" }) {
  const n = ["ui-aspectratio", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: n, style: { aspectRatio: i }, children: a });
}
function me({ src: i, alt: a = "", fallback: l, size: n = "md", className: t = "" }) {
  const [r, c] = v.useState(!1), o = ["ui-avatar", `ui-avatar--${n}`, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, role: "img", "aria-label": a || void 0, children: [
    i && /* @__PURE__ */ e(
      "img",
      {
        src: i,
        alt: a,
        className: "ui-avatar-img",
        onLoad: () => c(!0),
        onError: () => c(!1)
      }
    ),
    (!i || !r) && /* @__PURE__ */ e("span", { className: "ui-avatar-fallback", children: l || (a ? a[0] : "?") })
  ] });
}
function be({ children: i, variant: a = "default", className: l = "" }) {
  const n = ["ui-badge", `ui-badge--${a}`, l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: n, children: i });
}
function pe({ items: i = [], separator: a = "/", className: l = "" }) {
  const n = ["ui-breadcrumb", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("nav", { className: n, "aria-label": "Breadcrumb", children: /* @__PURE__ */ e("ol", { className: "ui-breadcrumb-list", children: i.map((t, r) => /* @__PURE__ */ p("li", { className: "ui-breadcrumb-item", children: [
    r > 0 && /* @__PURE__ */ e("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: a }),
    t.href ? /* @__PURE__ */ e("a", { href: t.href, className: "ui-breadcrumb-link", children: t.label }) : /* @__PURE__ */ e("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: t.label })
  ] }, r)) }) });
}
function U({
  variant: i = "primary",
  size: a = "md",
  disabled: l = !1,
  onClick: n,
  children: t,
  leftIcon: r,
  rightIcon: c,
  type: o = "button",
  className: d = "",
  ariaLabel: m,
  ...s
}) {
  const b = t != null && t !== "", u = [
    "ui-btn",
    `ui-btn--${i}`,
    `ui-btn--${a}`,
    l && "ui-btn--disabled",
    r && "ui-btn--has-left-icon",
    c && "ui-btn--has-right-icon",
    (r || c) && !b && "ui-btn--icon-only",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "button",
    {
      type: o,
      className: u,
      disabled: l,
      onClick: n,
      "aria-label": m,
      "aria-disabled": l,
      ...s,
      children: [
        r && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: r }),
        b && /* @__PURE__ */ e("span", { className: "ui-btn-label", children: t }),
        c && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: c })
      ]
    }
  );
}
function he({ children: i, className: a = "" }) {
  const l = ["ui-buttongroup", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: l, role: "group", children: i });
}
function X({ value: i, onChange: a, className: l = "" }) {
  const n = ["ui-calendar", l].filter(Boolean).join(" "), t = i ? new Date(i) : /* @__PURE__ */ new Date(), [r, c] = v.useState({ year: t.getFullYear(), month: t.getMonth() }), o = new Date(r.year, r.month + 1, 0).getDate(), d = new Date(r.year, r.month, 1).getDay(), m = Array.from({ length: o }, (u, f) => f + 1), b = [...Array.from({ length: d }, () => null), ...m];
  return /* @__PURE__ */ p("div", { className: n, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ p("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: () => c((u) => ({ ...u, month: u.month - 1 })), children: "←" }),
      /* @__PURE__ */ e("span", { children: new Date(r.year, r.month).toLocaleString("default", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: () => c((u) => ({ ...u, month: u.month + 1 })), children: "→" })
    ] }),
    /* @__PURE__ */ p("div", { className: "ui-calendar-grid", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((u) => /* @__PURE__ */ e("div", { className: "ui-calendar-weekday", children: u }, u)),
      b.map((u, f) => u ? /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-calendar-day",
          onClick: () => a == null ? void 0 : a(new Date(r.year, r.month, u)),
          children: u
        },
        f
      ) : /* @__PURE__ */ e("div", { className: "ui-calendar-day ui-calendar-day--empty" }, f))
    ] })
  ] });
}
function y(...i) {
  return i.filter(Boolean).join(" ");
}
function Y({
  children: i,
  title: a,
  footer: l,
  className: n = "",
  variant: t = "outlined",
  color: r,
  borderColor: c,
  ...o
}) {
  const d = y(
    "ui-card",
    `ui-card--${t}`,
    r && `ui-card--bg-${r}`,
    c && `ui-card--border-${c}`,
    n
  ), m = a != null || l != null ? /* @__PURE__ */ p(A, { children: [
    a != null && /* @__PURE__ */ e(T, { children: typeof a == "string" || typeof a == "number" ? /* @__PURE__ */ e("h3", { className: "ui-card-title", children: a }) : a }),
    /* @__PURE__ */ e(H, { children: i }),
    l != null && /* @__PURE__ */ e(W, { children: l })
  ] }) : i;
  return /* @__PURE__ */ e("div", { className: d, ...o, children: m });
}
function T({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-header", a), children: i });
}
function H({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-body", a), children: i });
}
function W({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-footer", a), children: i });
}
function _({ children: i, className: a = "", as: l = "h3", ...n }) {
  return /* @__PURE__ */ e(l, { className: y("ui-card-title", a), ...n, children: i });
}
function q({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("p", { className: y("ui-card-subtitle", a), children: i });
}
function V({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-text", a), children: i });
}
function J({ children: i, className: a = "", href: l = "#", ...n }) {
  return /* @__PURE__ */ e("a", { className: y("ui-card-link", a), href: l, ...n, children: i });
}
function Q({ src: i, alt: a = "", position: l = "top", className: n = "" }) {
  return /* @__PURE__ */ e(
    "img",
    {
      src: i,
      alt: a,
      className: y("ui-card-img", l && `ui-card-img--${l}`, n)
    }
  );
}
function Z({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-img-wrap", a), children: i });
}
function ee({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-img-overlay", a), children: i });
}
function ae({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("ul", { className: y("ui-card-list-group", a), children: i });
}
function ie({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("li", { className: y("ui-card-list-group-item", a), children: i });
}
function le({ children: i, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: y("ui-card-group", a), children: i });
}
const g = Y;
g.Header = T;
g.Body = H;
g.Footer = W;
g.Title = _;
g.Subtitle = q;
g.Text = V;
g.Link = J;
g.Img = Q;
g.ImgOverlayWrap = Z;
g.ImgOverlay = ee;
g.ListGroup = ae;
g.ListGroupItem = ie;
g.Group = le;
function fe({ children: i, className: a = "" }) {
  const [l, n] = v.useState(0), t = v.Children.toArray(i), r = t.length;
  return /* @__PURE__ */ p("div", { className: `ui-carousel ${a}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ e("div", { className: "ui-carousel-track", style: { transform: `translateX(-${l * 100}%)` }, children: t.map((c, o) => /* @__PURE__ */ e("div", { className: "ui-carousel-slide", children: c }, o)) }),
    r > 1 && /* @__PURE__ */ e("div", { className: "ui-carousel-dots", children: t.map((c, o) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${o + 1}`,
        className: `ui-carousel-dot ${o === l ? "ui-carousel-dot--active" : ""}`,
        onClick: () => n(o)
      },
      o
    )) })
  ] });
}
function Ne({ data: i = [], type: a = "bar", className: l = "" }) {
  const n = ["ui-chart", `ui-chart--${a}`, l].filter(Boolean).join(" "), t = Math.max(...i.map((r) => r.value), 1);
  return /* @__PURE__ */ e("div", { className: n, role: "img", "aria-label": "Chart", children: /* @__PURE__ */ e("div", { className: "ui-chart-bars", children: i.map((r, c) => /* @__PURE__ */ p("div", { className: "ui-chart-bar-wrap", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "ui-chart-bar",
        style: { height: `${r.value / t * 100}%` },
        title: r.label
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-chart-label", children: r.label })
  ] }, c)) }) });
}
function ve({
  checked: i = !1,
  onChange: a,
  disabled: l = !1,
  label: n,
  id: t,
  className: r = "",
  indeterminate: c,
  ...o
}) {
  const d = t || `ui-checkbox-${v.useId().replace(/:/g, "")}`, m = v.useRef(null);
  v.useEffect(() => {
    m.current && (m.current.indeterminate = !!c);
  }, [c]);
  const s = [
    "ui-checkbox-wrapper",
    l && "ui-checkbox-wrapper--disabled",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ p("label", { className: "ui-checkbox-label", htmlFor: d, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: m,
        id: d,
        type: "checkbox",
        className: "ui-checkbox",
        checked: i,
        onChange: a,
        disabled: l,
        "aria-checked": c ? "mixed" : i,
        "aria-disabled": l,
        ...o
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
    n && /* @__PURE__ */ e("span", { className: "ui-checkbox-text", children: n })
  ] }) });
}
function ye({ open: i, defaultOpen: a = !1, onOpenChange: l, trigger: n, children: t, className: r = "" }) {
  const [c, o] = v.useState(a), d = i !== void 0, m = d ? i : c, s = (u) => {
    d || o(u), l == null || l(u);
  }, b = ["ui-collapsible", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: b, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => s(!m),
        "aria-expanded": m,
        children: n
      }
    ),
    /* @__PURE__ */ e("div", { className: "ui-collapsible-content", hidden: !m, children: t })
  ] });
}
function ge({ options: i = [], value: a, onChange: l, placeholder: n = "Select...", className: t = "" }) {
  const [r, c] = D(!1), [o, d] = D(""), m = i.filter((u) => u.label.toLowerCase().includes(o.toLowerCase())), s = i.find((u) => u.value === a), b = ["ui-combobox", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: b, children: [
    /* @__PURE__ */ e("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: r ? o : (s == null ? void 0 : s.label) ?? "",
        onChange: (u) => {
          d(u.target.value), c(!0);
        },
        onFocus: () => c(!0),
        onBlur: () => setTimeout(() => c(!1), 150),
        placeholder: n,
        role: "combobox",
        "aria-expanded": r,
        "aria-autocomplete": "list"
      }
    ) }),
    r && /* @__PURE__ */ e("ul", { className: "ui-combobox-list", role: "listbox", children: m.map((u) => /* @__PURE__ */ e(
      "li",
      {
        role: "option",
        "aria-selected": a === u.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          l == null || l(u.value), c(!1), d("");
        },
        children: u.label
      },
      u.value
    )) })
  ] });
}
function ke({ children: i, placeholder: a = "Search...", className: l = "" }) {
  const n = ["ui-command", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: n, role: "command", children: [
    /* @__PURE__ */ e("input", { type: "text", className: "ui-command-input", placeholder: a }),
    /* @__PURE__ */ e("div", { className: "ui-command-list", children: i })
  ] });
}
function we({ children: i, items: a = [], onOpenChange: l }) {
  const [n, t] = v.useState(!1), [r, c] = v.useState({ x: 0, y: 0 }), o = v.useRef(null);
  return v.useEffect(() => {
    const d = (s) => {
      s.button === 2 && (s.preventDefault(), c({ x: s.clientX, y: s.clientY }), t(!0), l == null || l(!0));
    }, m = o.current;
    return m == null || m.addEventListener("contextmenu", d), () => m == null ? void 0 : m.removeEventListener("contextmenu", d);
  }, [l]), v.useEffect(() => {
    if (!n) return;
    const d = () => {
      t(!1), l == null || l(!1);
    };
    return document.addEventListener("click", d), () => document.removeEventListener("click", d);
  }, [n, l]), /* @__PURE__ */ p("div", { ref: o, className: "ui-contextmenu-wrapper", children: [
    i,
    n && /* @__PURE__ */ e(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: r.x, top: r.y },
        role: "menu",
        children: a.map((d, m) => /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: d.onClick, children: d.label }) }, m))
      }
    )
  ] });
}
function xe({
  navbar: i,
  sidebar: a,
  children: l,
  sidebarCollapsed: n = !1,
  mainWidth: t = "fluid",
  fullHeight: r = !0,
  className: c = ""
}) {
  const o = [
    "ui-dashboard",
    r && "ui-dashboard--full-height",
    n && "ui-dashboard--sidebar-collapsed",
    c
  ].filter(Boolean).join(" "), d = [
    "ui-dashboard-main",
    t === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, children: [
    i && /* @__PURE__ */ e("div", { className: "ui-dashboard-navbar", children: i }),
    /* @__PURE__ */ p("div", { className: "ui-dashboard-body", children: [
      a && /* @__PURE__ */ e("div", { className: "ui-dashboard-sidebar-wrap", children: a }),
      /* @__PURE__ */ e("main", { className: d, role: "main", children: /* @__PURE__ */ e("div", { className: "ui-dashboard-main-inner", children: l }) })
    ] })
  ] });
}
function Be({
  columns: i = [],
  data: a = [],
  className: l = "",
  emptyMessage: n = "No data"
}) {
  const t = ["ui-datatable", l].filter(Boolean).join(" ");
  return i.length ? a.length ? /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ p("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: i.map((r) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: r.header }, r.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: a.map((r, c) => /* @__PURE__ */ e("tr", { className: "ui-datatable-tr", children: i.map((o) => /* @__PURE__ */ e("td", { className: "ui-datatable-td", children: r[o.key] ?? "" }, o.key)) }, c)) })
  ] }) }) : /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ p("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: i.map((r) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: r.header }, r.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: i.length, className: "ui-datatable-empty-cell", children: n }) }) })
  ] }) }) : /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ e("p", { className: "ui-datatable-empty", children: n }) });
}
function re({
  label: i,
  error: a,
  type: l = "text",
  placeholder: n,
  disabled: t = !1,
  id: r,
  className: c = "",
  ...o
}) {
  const d = r || `ui-input-${v.useId().replace(/:/g, "")}`, m = a ? `${d}-error` : void 0, s = [
    "ui-input",
    a && "ui-input--error",
    t && "ui-input--disabled",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-input-wrapper", children: [
    i && /* @__PURE__ */ e("label", { htmlFor: d, className: "ui-input-label", children: i }),
    /* @__PURE__ */ e(
      "input",
      {
        id: d,
        type: l,
        className: s,
        placeholder: n,
        disabled: t,
        "aria-invalid": !!a,
        "aria-describedby": m,
        ...o
      }
    ),
    a && /* @__PURE__ */ e("span", { id: m, className: "ui-input-error", role: "alert", children: a })
  ] });
}
function je({ value: i, onChange: a, placeholder: l = "Select date", className: n = "" }) {
  const [t, r] = v.useState(!1), c = i ? new Date(i).toLocaleDateString() : "", o = ["ui-datepicker", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, children: [
    /* @__PURE__ */ e(
      re,
      {
        readOnly: !0,
        value: c,
        placeholder: l,
        onFocus: () => r(!0),
        onClick: () => r((d) => !d)
      }
    ),
    t && /* @__PURE__ */ p(A, { children: [
      /* @__PURE__ */ e("div", { className: "ui-datepicker-overlay", onClick: () => r(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ e("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ e(X, { value: i, onChange: (d) => {
        a == null || a(d), r(!1);
      } }) })
    ] })
  ] });
}
function De({ open: i, onClose: a, title: l, children: n, footer: t, className: r = "" }) {
  const c = v.useRef(null);
  I(() => {
    if (!i) return;
    const d = (m) => {
      m.key === "Escape" && (a == null || a());
    };
    return document.addEventListener("keydown", d), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", d), document.body.style.overflow = "";
    };
  }, [i, a]);
  const o = (d) => {
    d.target === d.currentTarget && (a == null || a());
  };
  return i ? /* @__PURE__ */ e(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": l ? "ui-dialog-title" : void 0,
      onClick: o,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: c,
          className: `ui-dialog ${r}`,
          role: "document",
          onClick: (d) => d.stopPropagation(),
          children: [
            /* @__PURE__ */ p("div", { className: "ui-dialog-content", children: [
              l && /* @__PURE__ */ e("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: l }),
              /* @__PURE__ */ e("div", { className: "ui-dialog-body", children: n }),
              t && /* @__PURE__ */ e("div", { className: "ui-dialog-footer", children: t })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: "ui-dialog-close",
                onClick: a,
                "aria-label": "Close dialog",
                children: "×"
              }
            )
          ]
        }
      )
    }
  ) : null;
}
function $e({ open: i, onClose: a, title: l, children: n, side: t = "right", className: r = "" }) {
  return I(() => (i && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [i]), i ? /* @__PURE__ */ p(A, { children: [
    /* @__PURE__ */ e("div", { className: "ui-drawer-overlay", onClick: a, "aria-hidden": "true" }),
    /* @__PURE__ */ p("div", { className: `ui-drawer ui-drawer--${t} ${r}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      l && /* @__PURE__ */ e("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: l }),
      /* @__PURE__ */ e("div", { className: "ui-drawer-body", children: n }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-drawer-close", onClick: a, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function Le({
  trigger: i,
  items: a = [],
  align: l = "end",
  placement: n,
  size: t = "md",
  variant: r = "default",
  split: c = !1,
  primaryLabel: o = "Action",
  onPrimaryClick: d,
  splitButtonSize: m = "md",
  className: s = ""
}) {
  const [b, u] = D(!1), f = P(null), k = R().replace(/:/g, ""), C = n || (c ? "bottom-end" : l === "start" ? "bottom-start" : "bottom-end");
  I(() => {
    if (!b) return;
    const h = (N) => {
      f.current && !f.current.contains(N.target) && u(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [b]), I(() => {
    if (!b) return;
    const h = (N) => {
      N.key === "Escape" && u(!1);
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [b]);
  const F = (h) => {
    var N;
    h.disabled || h.type === "header" || h.type === "divider" || ((N = h.onClick) == null || N.call(h), u(!1));
  }, $ = (h) => {
    var x, E, G, O, K;
    if (!b) return;
    const N = (x = f.current) == null ? void 0 : x.querySelectorAll(".ui-dropdown-item:not(:disabled)"), w = N ? Array.from(N) : [], M = document.activeElement, j = w.indexOf(M);
    h.key === "ArrowDown" && j < w.length - 1 ? (h.preventDefault(), (E = w[j + 1]) == null || E.focus()) : h.key === "ArrowUp" && j > 0 ? (h.preventDefault(), (G = w[j - 1]) == null || G.focus()) : h.key === "Home" ? (h.preventDefault(), (O = w[0]) == null || O.focus()) : h.key === "End" && (h.preventDefault(), (K = w[w.length - 1]) == null || K.focus());
  }, B = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${C}`,
    `ui-dropdown-menu--size-${t}`,
    r === "dark" && "ui-dropdown-menu--dark"
  ].filter(Boolean).join(" "), S = () => a.map((h, N) => h.type === "divider" ? /* @__PURE__ */ e("li", { className: "ui-dropdown-sep", role: "separator", "aria-orientation": "horizontal" }, N) : h.type === "header" ? /* @__PURE__ */ e("li", { className: "ui-dropdown-header", role: "presentation", children: h.label }, N) : /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: ["ui-dropdown-item", h.active && "ui-dropdown-item--active"].filter(Boolean).join(" "),
      role: "menuitem",
      disabled: h.disabled,
      onClick: () => F(h),
      tabIndex: 0,
      children: h.label
    }
  ) }, N)), L = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": !0, children: /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) });
  return c ? /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", "ui-dropdown--split", s].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: $,
      children: [
        /* @__PURE__ */ e(U, { variant: "secondary", size: m, type: "button", onClick: d, children: o }),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: [
              "ui-dropdown-split-toggle",
              `ui-dropdown-split-toggle--${m}`
            ].join(" "),
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": k,
            onClick: () => u((h) => !h),
            children: [
              /* @__PURE__ */ e("span", { className: "ui-sr-only", children: "Open menu" }),
              /* @__PURE__ */ e(L, {})
            ]
          }
        ),
        b && /* @__PURE__ */ e("ul", { id: k, className: B, role: "menu", children: S() })
      ]
    }
  ) : /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", s].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: $,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => u((h) => !h),
            onKeyDown: (h) => {
              (h.key === "Enter" || h.key === " ") && (h.preventDefault(), u((N) => !N));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": k,
            tabIndex: 0,
            children: i
          }
        ),
        b && /* @__PURE__ */ e("ul", { id: k, className: B, role: "menu", children: S() })
      ]
    }
  );
}
function Ee({ title: i = "No data", description: a, icon: l, children: n, className: t = "" }) {
  const r = ["ui-empty", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: r, role: "status", children: [
    l && /* @__PURE__ */ e("div", { className: "ui-empty-icon", children: l }),
    /* @__PURE__ */ e("h3", { className: "ui-empty-title", children: i }),
    a && /* @__PURE__ */ e("p", { className: "ui-empty-desc", children: a }),
    n && /* @__PURE__ */ e("div", { className: "ui-empty-actions", children: n })
  ] });
}
function Se({ label: i, error: a, hint: l, id: n, children: t, className: r = "" }) {
  const c = ["ui-field", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: c, children: [
    i && /* @__PURE__ */ e("label", { htmlFor: n, className: "ui-field-label", children: i }),
    t,
    l && /* @__PURE__ */ e("span", { className: "ui-field-hint", children: l }),
    a && /* @__PURE__ */ e("span", { className: "ui-field-error", role: "alert", children: a })
  ] });
}
function Ie({ trigger: i, content: a, className: l = "" }) {
  const [n, t] = D(!1), r = ["ui-hovercard", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "div",
    {
      className: r,
      onMouseEnter: () => t(!0),
      onMouseLeave: () => t(!1),
      children: [
        /* @__PURE__ */ e("div", { className: "ui-hovercard-trigger", children: i }),
        n && /* @__PURE__ */ e("div", { className: "ui-hovercard-content", children: a })
      ]
    }
  );
}
function Ae({ left: i, right: a, children: l, className: n = "" }) {
  const t = ["ui-inputgroup", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: t, children: [
    i && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: i }),
    /* @__PURE__ */ e("span", { className: "ui-inputgroup-input", children: l }),
    a && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: a })
  ] });
}
function Ce({ length: i = 6, value: a = "", onChange: l, className: n = "" }) {
  const t = P([]), r = a.split("").concat(Array(i).fill("")).slice(0, i), c = (m, s) => {
    var u;
    const b = r.slice();
    b[m] = s.replace(/\D/g, "").slice(-1), l == null || l(b.join("")), s && m < i - 1 && ((u = t.current[m + 1]) == null || u.focus());
  }, o = (m, s) => {
    var b;
    s.key === "Backspace" && !r[m] && m > 0 && ((b = t.current[m - 1]) == null || b.focus());
  }, d = ["ui-inputotp", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: d, role: "group", "aria-label": "One-time code", children: r.map((m, s) => /* @__PURE__ */ e(
    "input",
    {
      ref: (b) => t.current[s] = b,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: m,
      onChange: (b) => c(s, b.target.value),
      onKeyDown: (b) => o(s, b),
      "aria-label": `Digit ${s + 1}`
    },
    s
  )) });
}
function ne({
  href: i,
  onClick: a,
  active: l = !1,
  disabled: n = !1,
  icon: t,
  children: r,
  className: c = "",
  ...o
}) {
  const d = [
    "ui-navlink",
    l && "ui-navlink--active",
    n && "ui-navlink--disabled",
    c
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ p(A, { children: [
    t && /* @__PURE__ */ e("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("span", { className: "ui-navlink-text", children: r })
  ] });
  return i && !n ? /* @__PURE__ */ e(
    "a",
    {
      href: i,
      className: d,
      onClick: a,
      "aria-current": l ? "page" : void 0,
      ...o,
      children: m
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: d,
      onClick: n ? void 0 : a,
      disabled: n,
      "aria-current": l ? "page" : void 0,
      ...o,
      children: m
    }
  );
}
function Fe({
  brand: i,
  nav: a,
  actions: l,
  variant: n = "default",
  sticky: t = !1,
  dense: r = !1,
  brandMark: c = !1,
  logo: o,
  logoSrc: d,
  logoAlt: m = "",
  logoPlaceholder: s = !1,
  mobileMenuOpen: b,
  onMobileMenuChange: u,
  className: f = ""
}) {
  const k = R().replace(/:/g, ""), [C, F] = D(!1), $ = b !== void 0, B = $ ? b : C, S = (E) => {
    $ || F(E), u == null || u(E);
  }, L = o != null && o !== "" && o !== !1, h = !!d, N = s && !L && !h, w = c && !L && !h && !N, M = [
    "ui-navbar",
    `ui-navbar--${n}`,
    t && "ui-navbar--sticky",
    r && "ui-navbar--dense",
    f
  ].filter(Boolean).join(" "), j = [
    "ui-navbar-brand",
    w && "ui-navbar-brand--with-mark"
  ].filter(Boolean).join(" ");
  let x = null;
  return L ? x = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", children: o }) : h ? x = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", children: /* @__PURE__ */ e("img", { className: "ui-navbar-logo", src: d, alt: m }) }) : N && (x = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: "ui-navbar-logo-placeholder", title: "Add logo via logoSrc or logo prop" }) })), /* @__PURE__ */ p("header", { className: M, role: "banner", children: [
    /* @__PURE__ */ p("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ p("div", { className: j, children: [
        x,
        i
      ] }),
      /* @__PURE__ */ e("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: a }),
      /* @__PURE__ */ e("div", { className: "ui-navbar-actions", children: l }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": B,
          "aria-controls": `ui-navbar-mobile-${k}`,
          "aria-label": "Toggle menu",
          onClick: () => S(!B),
          children: /* @__PURE__ */ e("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        id: `ui-navbar-mobile-${k}`,
        className: "ui-navbar-mobile",
        hidden: !B,
        role: "navigation",
        "aria-label": "Mobile",
        children: /* @__PURE__ */ p("div", { className: "ui-navbar-mobile-inner", children: [
          a,
          l && /* @__PURE__ */ e("div", { className: "ui-navbar-mobile-actions", children: l })
        ] })
      }
    )
  ] });
}
function Me({
  value: i = 0,
  max: a = 100,
  variant: l = "default",
  size: n = "md",
  striped: t = !1,
  showLabel: r = !1,
  className: c = ""
}) {
  const o = a <= 0 ? 0 : Math.min(100, Math.max(0, Number(i) / a * 100)), d = R().replace(/:/g, ""), m = r ? d : void 0;
  return /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-progress", `ui-progress--${n}`, c].filter(Boolean).join(" "),
      role: "progressbar",
      "aria-valuenow": Math.round(o),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": m,
      children: [
        r && /* @__PURE__ */ p("div", { className: "ui-progress-label", id: m, children: [
          Math.round(o),
          "%"
        ] }),
        /* @__PURE__ */ e("div", { className: "ui-progress-track", children: /* @__PURE__ */ e(
          "div",
          {
            className: [
              "ui-progress-bar",
              `ui-progress-bar--${l}`,
              t && "ui-progress-bar--striped"
            ].filter(Boolean).join(" "),
            style: { width: `${o}%` }
          }
        ) })
      ]
    }
  );
}
function Re({
  items: i = [],
  header: a,
  footer: l,
  collapsed: n = !1,
  onToggleCollapse: t,
  showCollapseButton: r = !0,
  position: c = "left",
  variant: o = "default",
  width: d = "normal",
  className: m = ""
}) {
  const s = [
    "ui-sidebar",
    `ui-sidebar--${o}`,
    `ui-sidebar--${c}`,
    `ui-sidebar--width-${d}`,
    n && "ui-sidebar--collapsed",
    m
  ].filter(Boolean).join(" "), b = !!(r && t);
  return /* @__PURE__ */ p("aside", { className: s, "aria-label": "Sidebar navigation", children: [
    !!(a || b) && /* @__PURE__ */ p(
      "div",
      {
        className: [
          "ui-sidebar-top",
          !a && b && "ui-sidebar-top--collapse-only"
        ].filter(Boolean).join(" "),
        children: [
          a ? /* @__PURE__ */ e("div", { className: "ui-sidebar-header", children: a }) : null,
          b ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "ui-sidebar-collapse-btn",
              onClick: () => t(!n),
              "aria-expanded": !n,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ e("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ e("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ e("ul", { className: "ui-sidebar-list", children: i.map((f, k) => /* @__PURE__ */ e("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ e(
      ne,
      {
        href: f.href,
        onClick: f.onClick,
        active: f.active,
        disabled: f.disabled,
        icon: f.icon,
        children: f.label
      }
    ) }, f.id ?? k)) }) }),
    l && /* @__PURE__ */ e("div", { className: "ui-sidebar-footer", children: l })
  ] });
}
function Ge({ size: i = "md", className: a = "", label: l }) {
  return /* @__PURE__ */ e(
    "span",
    {
      className: ["ui-spinner", `ui-spinner--${i}`, a].filter(Boolean).join(" "),
      role: l ? "status" : "presentation",
      "aria-label": l || void 0,
      children: /* @__PURE__ */ e("span", { className: "ui-spinner-ring", "aria-hidden": !0 })
    }
  );
}
function Oe({ items: i = [], defaultTabId: a, onTabChange: l, className: n = "" }) {
  var m;
  const t = (m = i[0]) == null ? void 0 : m.id, [r, c] = D(a ?? t), o = z(
    (s) => {
      c(s), l == null || l(s);
    },
    [l]
  ), d = (s, b) => {
    if (s.key === "ArrowRight" || s.key === "ArrowDown") {
      s.preventDefault();
      const u = (b + 1) % i.length;
      o(i[u].id);
    } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
      s.preventDefault();
      const u = (b - 1 + i.length) % i.length;
      o(i[u].id);
    } else s.key === "Home" ? (s.preventDefault(), o(i[0].id)) : s.key === "End" && (s.preventDefault(), o(i[i.length - 1].id));
  };
  return i.length ? /* @__PURE__ */ p("div", { className: ["ui-tabs", n].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e("div", { className: "ui-tabs-list", role: "tablist", "aria-orientation": "horizontal", children: i.map((s, b) => {
      const u = s.id === r;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          id: `ui-tab-${s.id}`,
          "aria-selected": u,
          "aria-controls": `ui-tabpanel-${s.id}`,
          tabIndex: u ? 0 : -1,
          className: ["ui-tabs-tab", u && "ui-tabs-tab--active"].filter(Boolean).join(" "),
          onClick: () => o(s.id),
          onKeyDown: (f) => d(f, b),
          children: s.label
        },
        s.id
      );
    }) }),
    i.map((s) => /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `ui-tabpanel-${s.id}`,
        "aria-labelledby": `ui-tab-${s.id}`,
        hidden: s.id !== r,
        className: "ui-tabs-panel",
        tabIndex: 0,
        children: s.panel
      },
      s.id
    ))
  ] }) : null;
}
export {
  ce as Accordion,
  oe as Alert,
  de as AlertDialog,
  ue as AspectRatio,
  me as Avatar,
  be as Badge,
  pe as Breadcrumb,
  U as Button,
  he as ButtonGroup,
  X as Calendar,
  g as Card,
  le as CardGroup,
  fe as Carousel,
  Ne as Chart,
  ve as Checkbox,
  ye as Collapsible,
  ge as Combobox,
  ke as Command,
  we as ContextMenu,
  xe as DashboardPage,
  Be as DataTable,
  je as DatePicker,
  De as Dialog,
  $e as Drawer,
  Le as DropdownMenu,
  Ee as Empty,
  Se as Field,
  Ie as HoverCard,
  re as Input,
  Ae as InputGroup,
  Ce as InputOTP,
  ne as NavLink,
  Fe as Navbar,
  Me as Progress,
  Re as Sidebar,
  Ge as Spinner,
  Oe as Tabs
};
//# sourceMappingURL=tri-ui-library.js.map
