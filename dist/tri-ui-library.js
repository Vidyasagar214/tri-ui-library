import { jsx as e, jsxs as h, Fragment as M } from "react/jsx-runtime";
import v, { useState as B, useEffect as L, useRef as O, useId as R, useCallback as G } from "react";
function X({ items: i = [], multiple: a = !1, disabled: l = !1, variant: r = "default", className: t = "" }) {
  const [n, o] = v.useState(a ? [] : null), c = (s) => a ? Array.isArray(n) && n.includes(s) : n === s, u = (s) => {
    if (l) return;
    const b = i[s];
    b != null && b.disabled || o(
      a ? (d) => d.includes(s) ? d.filter((f) => f !== s) : [...d, s] : (d) => d === s ? null : s
    );
  }, m = [
    "ui-accordion",
    `ui-accordion--${r}`,
    l && "ui-accordion--disabled",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: m, role: "region", "aria-label": "Accordion", children: i.map((s, b) => {
    const d = l || s.disabled;
    return /* @__PURE__ */ h("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => u(b),
          "aria-expanded": c(b),
          "aria-controls": `ui-accordion-panel-${b}`,
          "aria-disabled": d,
          id: `ui-accordion-trigger-${b}`,
          disabled: d,
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
          hidden: !c(b),
          children: s.content
        }
      )
    ] }, b);
  }) });
}
function Y({
  type: i = "info",
  children: a,
  title: l,
  className: r = "",
  dismissible: t = !1,
  onDismiss: n,
  ...o
}) {
  const [c, u] = v.useState(!1), m = () => {
    u(!0), n == null || n();
  }, s = [
    "ui-alert",
    `ui-alert--${i}`,
    r
  ].filter(Boolean).join(" ");
  return c ? null : /* @__PURE__ */ h(
    "div",
    {
      className: s,
      role: "alert",
      "aria-live": "polite",
      ...o,
      children: [
        /* @__PURE__ */ h("div", { className: "ui-alert-content", children: [
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
function _({
  open: i,
  onClose: a,
  title: l,
  description: r,
  confirmLabel: t = "OK",
  cancelLabel: n = "Cancel",
  onConfirm: o,
  showCancel: c = !0
}) {
  return i ? /* @__PURE__ */ e("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ h("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ e("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: l }),
    r && /* @__PURE__ */ e("p", { className: "ui-alertdialog-desc", children: r }),
    /* @__PURE__ */ h("div", { className: "ui-alertdialog-actions", children: [
      c && /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: a, children: n }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        o == null || o(), a == null || a();
      }, children: t })
    ] })
  ] }) }) : null;
}
function q({ ratio: i = 16 / 9, children: a, className: l = "" }) {
  const r = ["ui-aspectratio", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: r, style: { aspectRatio: i }, children: a });
}
function V({ src: i, alt: a = "", fallback: l, size: r = "md", className: t = "" }) {
  const [n, o] = v.useState(!1), c = ["ui-avatar", `ui-avatar--${r}`, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: c, role: "img", "aria-label": a || void 0, children: [
    i && /* @__PURE__ */ e(
      "img",
      {
        src: i,
        alt: a,
        className: "ui-avatar-img",
        onLoad: () => o(!0),
        onError: () => o(!1)
      }
    ),
    (!i || !n) && /* @__PURE__ */ e("span", { className: "ui-avatar-fallback", children: l || (a ? a[0] : "?") })
  ] });
}
function J({ children: i, variant: a = "default", className: l = "" }) {
  const r = ["ui-badge", `ui-badge--${a}`, l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: r, children: i });
}
function Q({ items: i = [], separator: a = "/", className: l = "" }) {
  const r = ["ui-breadcrumb", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("nav", { className: r, "aria-label": "Breadcrumb", children: /* @__PURE__ */ e("ol", { className: "ui-breadcrumb-list", children: i.map((t, n) => /* @__PURE__ */ h("li", { className: "ui-breadcrumb-item", children: [
    n > 0 && /* @__PURE__ */ e("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: a }),
    t.href ? /* @__PURE__ */ e("a", { href: t.href, className: "ui-breadcrumb-link", children: t.label }) : /* @__PURE__ */ e("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: t.label })
  ] }, n)) }) });
}
function T({
  variant: i = "primary",
  size: a = "md",
  disabled: l = !1,
  onClick: r,
  children: t,
  leftIcon: n,
  rightIcon: o,
  type: c = "button",
  className: u = "",
  ariaLabel: m,
  ...s
}) {
  const b = t != null && t !== "", d = [
    "ui-btn",
    `ui-btn--${i}`,
    `ui-btn--${a}`,
    l && "ui-btn--disabled",
    n && "ui-btn--has-left-icon",
    o && "ui-btn--has-right-icon",
    (n || o) && !b && "ui-btn--icon-only",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "button",
    {
      type: c,
      className: d,
      disabled: l,
      onClick: r,
      "aria-label": m,
      "aria-disabled": l,
      ...s,
      children: [
        n && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: n }),
        b && /* @__PURE__ */ e("span", { className: "ui-btn-label", children: t }),
        o && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: o })
      ]
    }
  );
}
function Z({ children: i, className: a = "" }) {
  const l = ["ui-buttongroup", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: l, role: "group", children: i });
}
function z({ value: i, onChange: a, className: l = "" }) {
  const r = ["ui-calendar", l].filter(Boolean).join(" "), t = i ? new Date(i) : /* @__PURE__ */ new Date(), [n, o] = v.useState({ year: t.getFullYear(), month: t.getMonth() }), c = new Date(n.year, n.month + 1, 0).getDate(), u = new Date(n.year, n.month, 1).getDay(), m = Array.from({ length: c }, (d, f) => f + 1), b = [...Array.from({ length: u }, () => null), ...m];
  return /* @__PURE__ */ h("div", { className: r, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ h("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: () => o((d) => ({ ...d, month: d.month - 1 })), children: "←" }),
      /* @__PURE__ */ e("span", { children: new Date(n.year, n.month).toLocaleString("default", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: () => o((d) => ({ ...d, month: d.month + 1 })), children: "→" })
    ] }),
    /* @__PURE__ */ h("div", { className: "ui-calendar-grid", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ e("div", { className: "ui-calendar-weekday", children: d }, d)),
      b.map((d, f) => d ? /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-calendar-day",
          onClick: () => a == null ? void 0 : a(new Date(n.year, n.month, d)),
          children: d
        },
        f
      ) : /* @__PURE__ */ e("div", { className: "ui-calendar-day ui-calendar-day--empty" }, f))
    ] })
  ] });
}
function ee({ children: i, title: a, footer: l, className: r = "", variant: t = "outlined", ...n }) {
  const o = ["ui-card", `ui-card--${t}`, r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: o, ...n, children: [
    a && /* @__PURE__ */ e("div", { className: "ui-card-header", children: /* @__PURE__ */ e("h3", { className: "ui-card-title", children: a }) }),
    /* @__PURE__ */ e("div", { className: "ui-card-body", children: i }),
    l && /* @__PURE__ */ e("div", { className: "ui-card-footer", children: l })
  ] });
}
function ae({ children: i, className: a = "" }) {
  const [l, r] = v.useState(0), t = v.Children.toArray(i), n = t.length;
  return /* @__PURE__ */ h("div", { className: `ui-carousel ${a}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ e("div", { className: "ui-carousel-track", style: { transform: `translateX(-${l * 100}%)` }, children: t.map((o, c) => /* @__PURE__ */ e("div", { className: "ui-carousel-slide", children: o }, c)) }),
    n > 1 && /* @__PURE__ */ e("div", { className: "ui-carousel-dots", children: t.map((o, c) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${c + 1}`,
        className: `ui-carousel-dot ${c === l ? "ui-carousel-dot--active" : ""}`,
        onClick: () => r(c)
      },
      c
    )) })
  ] });
}
function ie({ data: i = [], type: a = "bar", className: l = "" }) {
  const r = ["ui-chart", `ui-chart--${a}`, l].filter(Boolean).join(" "), t = Math.max(...i.map((n) => n.value), 1);
  return /* @__PURE__ */ e("div", { className: r, role: "img", "aria-label": "Chart", children: /* @__PURE__ */ e("div", { className: "ui-chart-bars", children: i.map((n, o) => /* @__PURE__ */ h("div", { className: "ui-chart-bar-wrap", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "ui-chart-bar",
        style: { height: `${n.value / t * 100}%` },
        title: n.label
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-chart-label", children: n.label })
  ] }, o)) }) });
}
function le({
  checked: i = !1,
  onChange: a,
  disabled: l = !1,
  label: r,
  id: t,
  className: n = "",
  indeterminate: o,
  ...c
}) {
  const u = t || `ui-checkbox-${v.useId().replace(/:/g, "")}`, m = v.useRef(null);
  v.useEffect(() => {
    m.current && (m.current.indeterminate = !!o);
  }, [o]);
  const s = [
    "ui-checkbox-wrapper",
    l && "ui-checkbox-wrapper--disabled",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ h("label", { className: "ui-checkbox-label", htmlFor: u, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: m,
        id: u,
        type: "checkbox",
        className: "ui-checkbox",
        checked: i,
        onChange: a,
        disabled: l,
        "aria-checked": o ? "mixed" : i,
        "aria-disabled": l,
        ...c
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
    r && /* @__PURE__ */ e("span", { className: "ui-checkbox-text", children: r })
  ] }) });
}
function ne({ open: i, defaultOpen: a = !1, onOpenChange: l, trigger: r, children: t, className: n = "" }) {
  const [o, c] = v.useState(a), u = i !== void 0, m = u ? i : o, s = (d) => {
    u || c(d), l == null || l(d);
  }, b = ["ui-collapsible", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: b, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => s(!m),
        "aria-expanded": m,
        children: r
      }
    ),
    /* @__PURE__ */ e("div", { className: "ui-collapsible-content", hidden: !m, children: t })
  ] });
}
function re({ options: i = [], value: a, onChange: l, placeholder: r = "Select...", className: t = "" }) {
  const [n, o] = B(!1), [c, u] = B(""), m = i.filter((d) => d.label.toLowerCase().includes(c.toLowerCase())), s = i.find((d) => d.value === a), b = ["ui-combobox", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: b, children: [
    /* @__PURE__ */ e("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: n ? c : (s == null ? void 0 : s.label) ?? "",
        onChange: (d) => {
          u(d.target.value), o(!0);
        },
        onFocus: () => o(!0),
        onBlur: () => setTimeout(() => o(!1), 150),
        placeholder: r,
        role: "combobox",
        "aria-expanded": n,
        "aria-autocomplete": "list"
      }
    ) }),
    n && /* @__PURE__ */ e("ul", { className: "ui-combobox-list", role: "listbox", children: m.map((d) => /* @__PURE__ */ e(
      "li",
      {
        role: "option",
        "aria-selected": a === d.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          l == null || l(d.value), o(!1), u("");
        },
        children: d.label
      },
      d.value
    )) })
  ] });
}
function te({ children: i, placeholder: a = "Search...", className: l = "" }) {
  const r = ["ui-command", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: r, role: "command", children: [
    /* @__PURE__ */ e("input", { type: "text", className: "ui-command-input", placeholder: a }),
    /* @__PURE__ */ e("div", { className: "ui-command-list", children: i })
  ] });
}
function se({ children: i, items: a = [], onOpenChange: l }) {
  const [r, t] = v.useState(!1), [n, o] = v.useState({ x: 0, y: 0 }), c = v.useRef(null);
  return v.useEffect(() => {
    const u = (s) => {
      s.button === 2 && (s.preventDefault(), o({ x: s.clientX, y: s.clientY }), t(!0), l == null || l(!0));
    }, m = c.current;
    return m == null || m.addEventListener("contextmenu", u), () => m == null ? void 0 : m.removeEventListener("contextmenu", u);
  }, [l]), v.useEffect(() => {
    if (!r) return;
    const u = () => {
      t(!1), l == null || l(!1);
    };
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  }, [r, l]), /* @__PURE__ */ h("div", { ref: c, className: "ui-contextmenu-wrapper", children: [
    i,
    r && /* @__PURE__ */ e(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: n.x, top: n.y },
        role: "menu",
        children: a.map((u, m) => /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: u.onClick, children: u.label }) }, m))
      }
    )
  ] });
}
function oe({
  navbar: i,
  sidebar: a,
  children: l,
  sidebarCollapsed: r = !1,
  mainWidth: t = "fluid",
  fullHeight: n = !0,
  className: o = ""
}) {
  const c = [
    "ui-dashboard",
    n && "ui-dashboard--full-height",
    r && "ui-dashboard--sidebar-collapsed",
    o
  ].filter(Boolean).join(" "), u = [
    "ui-dashboard-main",
    t === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: c, children: [
    i && /* @__PURE__ */ e("div", { className: "ui-dashboard-navbar", children: i }),
    /* @__PURE__ */ h("div", { className: "ui-dashboard-body", children: [
      a && /* @__PURE__ */ e("div", { className: "ui-dashboard-sidebar-wrap", children: a }),
      /* @__PURE__ */ e("main", { className: u, role: "main", children: /* @__PURE__ */ e("div", { className: "ui-dashboard-main-inner", children: l }) })
    ] })
  ] });
}
function ce({
  columns: i = [],
  data: a = [],
  className: l = "",
  emptyMessage: r = "No data"
}) {
  const t = ["ui-datatable", l].filter(Boolean).join(" ");
  return i.length ? a.length ? /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ h("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: i.map((n) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: n.header }, n.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: a.map((n, o) => /* @__PURE__ */ e("tr", { className: "ui-datatable-tr", children: i.map((c) => /* @__PURE__ */ e("td", { className: "ui-datatable-td", children: n[c.key] ?? "" }, c.key)) }, o)) })
  ] }) }) : /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ h("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: i.map((n) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: n.header }, n.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: i.length, className: "ui-datatable-empty-cell", children: r }) }) })
  ] }) }) : /* @__PURE__ */ e("div", { className: t, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ e("p", { className: "ui-datatable-empty", children: r }) });
}
function H({
  label: i,
  error: a,
  type: l = "text",
  placeholder: r,
  disabled: t = !1,
  id: n,
  className: o = "",
  ...c
}) {
  const u = n || `ui-input-${v.useId().replace(/:/g, "")}`, m = a ? `${u}-error` : void 0, s = [
    "ui-input",
    a && "ui-input--error",
    t && "ui-input--disabled",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: "ui-input-wrapper", children: [
    i && /* @__PURE__ */ e("label", { htmlFor: u, className: "ui-input-label", children: i }),
    /* @__PURE__ */ e(
      "input",
      {
        id: u,
        type: l,
        className: s,
        placeholder: r,
        disabled: t,
        "aria-invalid": !!a,
        "aria-describedby": m,
        ...c
      }
    ),
    a && /* @__PURE__ */ e("span", { id: m, className: "ui-input-error", role: "alert", children: a })
  ] });
}
function de({ value: i, onChange: a, placeholder: l = "Select date", className: r = "" }) {
  const [t, n] = v.useState(!1), o = i ? new Date(i).toLocaleDateString() : "", c = ["ui-datepicker", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: c, children: [
    /* @__PURE__ */ e(
      H,
      {
        readOnly: !0,
        value: o,
        placeholder: l,
        onFocus: () => n(!0),
        onClick: () => n((u) => !u)
      }
    ),
    t && /* @__PURE__ */ h(M, { children: [
      /* @__PURE__ */ e("div", { className: "ui-datepicker-overlay", onClick: () => n(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ e("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ e(z, { value: i, onChange: (u) => {
        a == null || a(u), n(!1);
      } }) })
    ] })
  ] });
}
function ue({ open: i, onClose: a, title: l, children: r, footer: t, className: n = "" }) {
  const o = v.useRef(null);
  L(() => {
    if (!i) return;
    const u = (m) => {
      m.key === "Escape" && (a == null || a());
    };
    return document.addEventListener("keydown", u), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", u), document.body.style.overflow = "";
    };
  }, [i, a]);
  const c = (u) => {
    u.target === u.currentTarget && (a == null || a());
  };
  return i ? /* @__PURE__ */ e(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": l ? "ui-dialog-title" : void 0,
      onClick: c,
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: o,
          className: `ui-dialog ${n}`,
          role: "document",
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ h("div", { className: "ui-dialog-content", children: [
              l && /* @__PURE__ */ e("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: l }),
              /* @__PURE__ */ e("div", { className: "ui-dialog-body", children: r }),
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
function me({ open: i, onClose: a, title: l, children: r, side: t = "right", className: n = "" }) {
  return L(() => (i && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [i]), i ? /* @__PURE__ */ h(M, { children: [
    /* @__PURE__ */ e("div", { className: "ui-drawer-overlay", onClick: a, "aria-hidden": "true" }),
    /* @__PURE__ */ h("div", { className: `ui-drawer ui-drawer--${t} ${n}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      l && /* @__PURE__ */ e("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: l }),
      /* @__PURE__ */ e("div", { className: "ui-drawer-body", children: r }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-drawer-close", onClick: a, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function be({
  trigger: i,
  items: a = [],
  align: l = "end",
  placement: r,
  size: t = "md",
  variant: n = "default",
  split: o = !1,
  primaryLabel: c = "Action",
  onPrimaryClick: u,
  splitButtonSize: m = "md",
  className: s = ""
}) {
  const [b, d] = B(!1), f = O(null), y = R().replace(/:/g, ""), S = r || (o ? "bottom-end" : l === "start" ? "bottom-start" : "bottom-end");
  L(() => {
    if (!b) return;
    const p = (N) => {
      f.current && !f.current.contains(N.target) && d(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [b]), L(() => {
    if (!b) return;
    const p = (N) => {
      N.key === "Escape" && d(!1);
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [b]);
  const A = (p) => {
    var N;
    p.disabled || p.type === "header" || p.type === "divider" || ((N = p.onClick) == null || N.call(p), d(!1));
  }, j = (p) => {
    var k, $, F, K, P;
    if (!b) return;
    const N = (k = f.current) == null ? void 0 : k.querySelectorAll(".ui-dropdown-item:not(:disabled)"), g = N ? Array.from(N) : [], I = document.activeElement, x = g.indexOf(I);
    p.key === "ArrowDown" && x < g.length - 1 ? (p.preventDefault(), ($ = g[x + 1]) == null || $.focus()) : p.key === "ArrowUp" && x > 0 ? (p.preventDefault(), (F = g[x - 1]) == null || F.focus()) : p.key === "Home" ? (p.preventDefault(), (K = g[0]) == null || K.focus()) : p.key === "End" && (p.preventDefault(), (P = g[g.length - 1]) == null || P.focus());
  }, w = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${S}`,
    `ui-dropdown-menu--size-${t}`,
    n === "dark" && "ui-dropdown-menu--dark"
  ].filter(Boolean).join(" "), E = () => a.map((p, N) => p.type === "divider" ? /* @__PURE__ */ e("li", { className: "ui-dropdown-sep", role: "separator", "aria-orientation": "horizontal" }, N) : p.type === "header" ? /* @__PURE__ */ e("li", { className: "ui-dropdown-header", role: "presentation", children: p.label }, N) : /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: ["ui-dropdown-item", p.active && "ui-dropdown-item--active"].filter(Boolean).join(" "),
      role: "menuitem",
      disabled: p.disabled,
      onClick: () => A(p),
      tabIndex: 0,
      children: p.label
    }
  ) }, N)), D = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": !0, children: /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) });
  return o ? /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-dropdown", "ui-dropdown--split", s].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: j,
      children: [
        /* @__PURE__ */ e(T, { variant: "secondary", size: m, type: "button", onClick: u, children: c }),
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            className: [
              "ui-dropdown-split-toggle",
              `ui-dropdown-split-toggle--${m}`
            ].join(" "),
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": y,
            onClick: () => d((p) => !p),
            children: [
              /* @__PURE__ */ e("span", { className: "ui-sr-only", children: "Open menu" }),
              /* @__PURE__ */ e(D, {})
            ]
          }
        ),
        b && /* @__PURE__ */ e("ul", { id: y, className: w, role: "menu", children: E() })
      ]
    }
  ) : /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-dropdown", s].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: j,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => d((p) => !p),
            onKeyDown: (p) => {
              (p.key === "Enter" || p.key === " ") && (p.preventDefault(), d((N) => !N));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": y,
            tabIndex: 0,
            children: i
          }
        ),
        b && /* @__PURE__ */ e("ul", { id: y, className: w, role: "menu", children: E() })
      ]
    }
  );
}
function he({ title: i = "No data", description: a, icon: l, children: r, className: t = "" }) {
  const n = ["ui-empty", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: n, role: "status", children: [
    l && /* @__PURE__ */ e("div", { className: "ui-empty-icon", children: l }),
    /* @__PURE__ */ e("h3", { className: "ui-empty-title", children: i }),
    a && /* @__PURE__ */ e("p", { className: "ui-empty-desc", children: a }),
    r && /* @__PURE__ */ e("div", { className: "ui-empty-actions", children: r })
  ] });
}
function pe({ label: i, error: a, hint: l, id: r, children: t, className: n = "" }) {
  const o = ["ui-field", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: o, children: [
    i && /* @__PURE__ */ e("label", { htmlFor: r, className: "ui-field-label", children: i }),
    t,
    l && /* @__PURE__ */ e("span", { className: "ui-field-hint", children: l }),
    a && /* @__PURE__ */ e("span", { className: "ui-field-error", role: "alert", children: a })
  ] });
}
function fe({ trigger: i, content: a, className: l = "" }) {
  const [r, t] = B(!1), n = ["ui-hovercard", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "div",
    {
      className: n,
      onMouseEnter: () => t(!0),
      onMouseLeave: () => t(!1),
      children: [
        /* @__PURE__ */ e("div", { className: "ui-hovercard-trigger", children: i }),
        r && /* @__PURE__ */ e("div", { className: "ui-hovercard-content", children: a })
      ]
    }
  );
}
function Ne({ left: i, right: a, children: l, className: r = "" }) {
  const t = ["ui-inputgroup", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: t, children: [
    i && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: i }),
    /* @__PURE__ */ e("span", { className: "ui-inputgroup-input", children: l }),
    a && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: a })
  ] });
}
function ve({ length: i = 6, value: a = "", onChange: l, className: r = "" }) {
  const t = O([]), n = a.split("").concat(Array(i).fill("")).slice(0, i), o = (m, s) => {
    var d;
    const b = n.slice();
    b[m] = s.replace(/\D/g, "").slice(-1), l == null || l(b.join("")), s && m < i - 1 && ((d = t.current[m + 1]) == null || d.focus());
  }, c = (m, s) => {
    var b;
    s.key === "Backspace" && !n[m] && m > 0 && ((b = t.current[m - 1]) == null || b.focus());
  }, u = ["ui-inputotp", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: u, role: "group", "aria-label": "One-time code", children: n.map((m, s) => /* @__PURE__ */ e(
    "input",
    {
      ref: (b) => t.current[s] = b,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: m,
      onChange: (b) => o(s, b.target.value),
      onKeyDown: (b) => c(s, b),
      "aria-label": `Digit ${s + 1}`
    },
    s
  )) });
}
function C({
  href: i,
  onClick: a,
  active: l = !1,
  disabled: r = !1,
  icon: t,
  children: n,
  className: o = "",
  ...c
}) {
  const u = [
    "ui-navlink",
    l && "ui-navlink--active",
    r && "ui-navlink--disabled",
    o
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ h(M, { children: [
    t && /* @__PURE__ */ e("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("span", { className: "ui-navlink-text", children: n })
  ] });
  return i && !r ? /* @__PURE__ */ e(
    "a",
    {
      href: i,
      className: u,
      onClick: a,
      "aria-current": l ? "page" : void 0,
      ...c,
      children: m
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: u,
      onClick: r ? void 0 : a,
      disabled: r,
      "aria-current": l ? "page" : void 0,
      ...c,
      children: m
    }
  );
}
function ye({
  brand: i,
  nav: a,
  actions: l,
  variant: r = "default",
  sticky: t = !1,
  dense: n = !1,
  brandMark: o = !1,
  logo: c,
  logoSrc: u,
  logoAlt: m = "",
  logoPlaceholder: s = !1,
  mobileMenuOpen: b,
  onMobileMenuChange: d,
  className: f = ""
}) {
  const y = R().replace(/:/g, ""), [S, A] = B(!1), j = b !== void 0, w = j ? b : S, E = ($) => {
    j || A($), d == null || d($);
  }, D = c != null && c !== "" && c !== !1, p = !!u, N = s && !D && !p, g = o && !D && !p && !N, I = [
    "ui-navbar",
    `ui-navbar--${r}`,
    t && "ui-navbar--sticky",
    n && "ui-navbar--dense",
    f
  ].filter(Boolean).join(" "), x = [
    "ui-navbar-brand",
    g && "ui-navbar-brand--with-mark"
  ].filter(Boolean).join(" ");
  let k = null;
  return D ? k = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", children: c }) : p ? k = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", children: /* @__PURE__ */ e("img", { className: "ui-navbar-logo", src: u, alt: m }) }) : N && (k = /* @__PURE__ */ e("span", { className: "ui-navbar-logo-wrap", "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: "ui-navbar-logo-placeholder", title: "Add logo via logoSrc or logo prop" }) })), /* @__PURE__ */ h("header", { className: I, role: "banner", children: [
    /* @__PURE__ */ h("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ h("div", { className: x, children: [
        k,
        i
      ] }),
      /* @__PURE__ */ e("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: a }),
      /* @__PURE__ */ e("div", { className: "ui-navbar-actions", children: l }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": w,
          "aria-controls": `ui-navbar-mobile-${y}`,
          "aria-label": "Toggle menu",
          onClick: () => E(!w),
          children: /* @__PURE__ */ e("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        id: `ui-navbar-mobile-${y}`,
        className: "ui-navbar-mobile",
        hidden: !w,
        role: "navigation",
        "aria-label": "Mobile",
        children: /* @__PURE__ */ h("div", { className: "ui-navbar-mobile-inner", children: [
          a,
          l && /* @__PURE__ */ e("div", { className: "ui-navbar-mobile-actions", children: l })
        ] })
      }
    )
  ] });
}
function ge({
  value: i = 0,
  max: a = 100,
  variant: l = "default",
  size: r = "md",
  striped: t = !1,
  showLabel: n = !1,
  className: o = ""
}) {
  const c = a <= 0 ? 0 : Math.min(100, Math.max(0, Number(i) / a * 100)), u = R().replace(/:/g, ""), m = n ? u : void 0;
  return /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-progress", `ui-progress--${r}`, o].filter(Boolean).join(" "),
      role: "progressbar",
      "aria-valuenow": Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": m,
      children: [
        n && /* @__PURE__ */ h("div", { className: "ui-progress-label", id: m, children: [
          Math.round(c),
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
            style: { width: `${c}%` }
          }
        ) })
      ]
    }
  );
}
function ke({
  items: i = [],
  header: a,
  footer: l,
  collapsed: r = !1,
  onToggleCollapse: t,
  showCollapseButton: n = !0,
  position: o = "left",
  variant: c = "default",
  width: u = "normal",
  className: m = ""
}) {
  const s = [
    "ui-sidebar",
    `ui-sidebar--${c}`,
    `ui-sidebar--${o}`,
    `ui-sidebar--width-${u}`,
    r && "ui-sidebar--collapsed",
    m
  ].filter(Boolean).join(" "), b = !!(n && t);
  return /* @__PURE__ */ h("aside", { className: s, "aria-label": "Sidebar navigation", children: [
    !!(a || b) && /* @__PURE__ */ h(
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
              onClick: () => t(!r),
              "aria-expanded": !r,
              "aria-label": r ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ e("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ e("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ e("ul", { className: "ui-sidebar-list", children: i.map((f, y) => /* @__PURE__ */ e("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ e(
      C,
      {
        href: f.href,
        onClick: f.onClick,
        active: f.active,
        disabled: f.disabled,
        icon: f.icon,
        children: f.label
      }
    ) }, f.id ?? y)) }) }),
    l && /* @__PURE__ */ e("div", { className: "ui-sidebar-footer", children: l })
  ] });
}
function we({ size: i = "md", className: a = "", label: l }) {
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
function xe({ items: i = [], defaultTabId: a, onTabChange: l, className: r = "" }) {
  var m;
  const t = (m = i[0]) == null ? void 0 : m.id, [n, o] = B(a ?? t), c = G(
    (s) => {
      o(s), l == null || l(s);
    },
    [l]
  ), u = (s, b) => {
    if (s.key === "ArrowRight" || s.key === "ArrowDown") {
      s.preventDefault();
      const d = (b + 1) % i.length;
      c(i[d].id);
    } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
      s.preventDefault();
      const d = (b - 1 + i.length) % i.length;
      c(i[d].id);
    } else s.key === "Home" ? (s.preventDefault(), c(i[0].id)) : s.key === "End" && (s.preventDefault(), c(i[i.length - 1].id));
  };
  return i.length ? /* @__PURE__ */ h("div", { className: ["ui-tabs", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e("div", { className: "ui-tabs-list", role: "tablist", "aria-orientation": "horizontal", children: i.map((s, b) => {
      const d = s.id === n;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          id: `ui-tab-${s.id}`,
          "aria-selected": d,
          "aria-controls": `ui-tabpanel-${s.id}`,
          tabIndex: d ? 0 : -1,
          className: ["ui-tabs-tab", d && "ui-tabs-tab--active"].filter(Boolean).join(" "),
          onClick: () => c(s.id),
          onKeyDown: (f) => u(f, b),
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
        hidden: s.id !== n,
        className: "ui-tabs-panel",
        tabIndex: 0,
        children: s.panel
      },
      s.id
    ))
  ] }) : null;
}
export {
  X as Accordion,
  Y as Alert,
  _ as AlertDialog,
  q as AspectRatio,
  V as Avatar,
  J as Badge,
  Q as Breadcrumb,
  T as Button,
  Z as ButtonGroup,
  z as Calendar,
  ee as Card,
  ae as Carousel,
  ie as Chart,
  le as Checkbox,
  ne as Collapsible,
  re as Combobox,
  te as Command,
  se as ContextMenu,
  oe as DashboardPage,
  ce as DataTable,
  de as DatePicker,
  ue as Dialog,
  me as Drawer,
  be as DropdownMenu,
  he as Empty,
  pe as Field,
  fe as HoverCard,
  H as Input,
  Ne as InputGroup,
  ve as InputOTP,
  C as NavLink,
  ye as Navbar,
  ge as Progress,
  ke as Sidebar,
  we as Spinner,
  xe as Tabs
};
//# sourceMappingURL=tri-ui-library.js.map
