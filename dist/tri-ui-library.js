import { jsx as e, jsxs as b, Fragment as x } from "react/jsx-runtime";
import p, { useState as y, useEffect as w, useRef as B, useId as D } from "react";
function A({ items: n = [], multiple: a = !1, disabled: i = !1, variant: t = "default", className: s = "" }) {
  const [l, o] = p.useState(a ? [] : null), u = (d) => a ? Array.isArray(l) && l.includes(d) : l === d, r = (d) => {
    if (i) return;
    const h = n[d];
    h != null && h.disabled || o(
      a ? (m) => m.includes(d) ? m.filter((f) => f !== d) : [...m, d] : (m) => m === d ? null : d
    );
  }, c = [
    "ui-accordion",
    `ui-accordion--${t}`,
    i && "ui-accordion--disabled",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: c, role: "region", "aria-label": "Accordion", children: n.map((d, h) => {
    const m = i || d.disabled;
    return /* @__PURE__ */ b("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => r(h),
          "aria-expanded": u(h),
          "aria-controls": `ui-accordion-panel-${h}`,
          "aria-disabled": m,
          id: `ui-accordion-trigger-${h}`,
          disabled: m,
          children: [
            /* @__PURE__ */ e("span", { className: "ui-accordion-trigger-text", children: d.title }),
            /* @__PURE__ */ e("span", { className: "ui-accordion-trigger-icon", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          id: `ui-accordion-panel-${h}`,
          role: "region",
          "aria-labelledby": `ui-accordion-trigger-${h}`,
          className: "ui-accordion-panel",
          hidden: !u(h),
          children: d.content
        }
      )
    ] }, h);
  }) });
}
function F({
  type: n = "info",
  children: a,
  title: i,
  className: t = "",
  dismissible: s = !1,
  onDismiss: l,
  ...o
}) {
  const [u, r] = p.useState(!1), c = () => {
    r(!0), l == null || l();
  }, d = [
    "ui-alert",
    `ui-alert--${n}`,
    t
  ].filter(Boolean).join(" ");
  return u ? null : /* @__PURE__ */ b(
    "div",
    {
      className: d,
      role: "alert",
      "aria-live": "polite",
      ...o,
      children: [
        /* @__PURE__ */ b("div", { className: "ui-alert-content", children: [
          i && /* @__PURE__ */ e("div", { className: "ui-alert-title", children: i }),
          /* @__PURE__ */ e("div", { className: "ui-alert-message", children: a })
        ] }),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "ui-alert-dismiss",
            onClick: c,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
function R({
  open: n,
  onClose: a,
  title: i,
  description: t,
  confirmLabel: s = "OK",
  cancelLabel: l = "Cancel",
  onConfirm: o,
  showCancel: u = !0
}) {
  return n ? /* @__PURE__ */ e("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ b("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ e("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: i }),
    t && /* @__PURE__ */ e("p", { className: "ui-alertdialog-desc", children: t }),
    /* @__PURE__ */ b("div", { className: "ui-alertdialog-actions", children: [
      u && /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: a, children: l }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        o == null || o(), a == null || a();
      }, children: s })
    ] })
  ] }) }) : null;
}
function I({ ratio: n = 16 / 9, children: a, className: i = "" }) {
  const t = ["ui-aspectratio", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: t, style: { aspectRatio: n }, children: a });
}
function T({ src: n, alt: a = "", fallback: i, size: t = "md", className: s = "" }) {
  const [l, o] = p.useState(!1), u = ["ui-avatar", `ui-avatar--${t}`, s].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: u, role: "img", "aria-label": a || void 0, children: [
    n && /* @__PURE__ */ e(
      "img",
      {
        src: n,
        alt: a,
        className: "ui-avatar-img",
        onLoad: () => o(!0),
        onError: () => o(!1)
      }
    ),
    (!n || !l) && /* @__PURE__ */ e("span", { className: "ui-avatar-fallback", children: i || (a ? a[0] : "?") })
  ] });
}
function K({ children: n, variant: a = "default", className: i = "" }) {
  const t = ["ui-badge", `ui-badge--${a}`, i].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: t, children: n });
}
function M({ items: n = [], separator: a = "/", className: i = "" }) {
  const t = ["ui-breadcrumb", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("nav", { className: t, "aria-label": "Breadcrumb", children: /* @__PURE__ */ e("ol", { className: "ui-breadcrumb-list", children: n.map((s, l) => /* @__PURE__ */ b("li", { className: "ui-breadcrumb-item", children: [
    l > 0 && /* @__PURE__ */ e("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: a }),
    s.href ? /* @__PURE__ */ e("a", { href: s.href, className: "ui-breadcrumb-link", children: s.label }) : /* @__PURE__ */ e("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: s.label })
  ] }, l)) }) });
}
function P({
  variant: n = "primary",
  size: a = "md",
  disabled: i = !1,
  onClick: t,
  children: s,
  leftIcon: l,
  rightIcon: o,
  type: u = "button",
  className: r = "",
  ariaLabel: c,
  ...d
}) {
  const h = s != null && s !== "", m = [
    "ui-btn",
    `ui-btn--${n}`,
    `ui-btn--${a}`,
    i && "ui-btn--disabled",
    l && "ui-btn--has-left-icon",
    o && "ui-btn--has-right-icon",
    (l || o) && !h && "ui-btn--icon-only",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    "button",
    {
      type: u,
      className: m,
      disabled: i,
      onClick: t,
      "aria-label": c,
      "aria-disabled": i,
      ...d,
      children: [
        l && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: l }),
        h && /* @__PURE__ */ e("span", { className: "ui-btn-label", children: s }),
        o && /* @__PURE__ */ e("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: o })
      ]
    }
  );
}
function O({ children: n, className: a = "" }) {
  const i = ["ui-buttongroup", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: i, role: "group", children: n });
}
function j({ value: n, onChange: a, className: i = "" }) {
  const t = ["ui-calendar", i].filter(Boolean).join(" "), s = n ? new Date(n) : /* @__PURE__ */ new Date(), [l, o] = p.useState({ year: s.getFullYear(), month: s.getMonth() }), u = new Date(l.year, l.month + 1, 0).getDate(), r = new Date(l.year, l.month, 1).getDay(), c = Array.from({ length: u }, (m, f) => f + 1), h = [...Array.from({ length: r }, () => null), ...c];
  return /* @__PURE__ */ b("div", { className: t, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ b("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: () => o((m) => ({ ...m, month: m.month - 1 })), children: "←" }),
      /* @__PURE__ */ e("span", { children: new Date(l.year, l.month).toLocaleString("default", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ e("button", { type: "button", onClick: () => o((m) => ({ ...m, month: m.month + 1 })), children: "→" })
    ] }),
    /* @__PURE__ */ b("div", { className: "ui-calendar-grid", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((m) => /* @__PURE__ */ e("div", { className: "ui-calendar-weekday", children: m }, m)),
      h.map((m, f) => m ? /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-calendar-day",
          onClick: () => a == null ? void 0 : a(new Date(l.year, l.month, m)),
          children: m
        },
        f
      ) : /* @__PURE__ */ e("div", { className: "ui-calendar-day ui-calendar-day--empty" }, f))
    ] })
  ] });
}
function G({ children: n, title: a, footer: i, className: t = "", variant: s = "outlined", ...l }) {
  const o = ["ui-card", `ui-card--${s}`, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: o, ...l, children: [
    a && /* @__PURE__ */ e("div", { className: "ui-card-header", children: /* @__PURE__ */ e("h3", { className: "ui-card-title", children: a }) }),
    /* @__PURE__ */ e("div", { className: "ui-card-body", children: n }),
    i && /* @__PURE__ */ e("div", { className: "ui-card-footer", children: i })
  ] });
}
function H({ children: n, className: a = "" }) {
  const [i, t] = p.useState(0), s = p.Children.toArray(n), l = s.length;
  return /* @__PURE__ */ b("div", { className: `ui-carousel ${a}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ e("div", { className: "ui-carousel-track", style: { transform: `translateX(-${i * 100}%)` }, children: s.map((o, u) => /* @__PURE__ */ e("div", { className: "ui-carousel-slide", children: o }, u)) }),
    l > 1 && /* @__PURE__ */ e("div", { className: "ui-carousel-dots", children: s.map((o, u) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${u + 1}`,
        className: `ui-carousel-dot ${u === i ? "ui-carousel-dot--active" : ""}`,
        onClick: () => t(u)
      },
      u
    )) })
  ] });
}
function X({ data: n = [], type: a = "bar", className: i = "" }) {
  const t = ["ui-chart", `ui-chart--${a}`, i].filter(Boolean).join(" "), s = Math.max(...n.map((l) => l.value), 1);
  return /* @__PURE__ */ e("div", { className: t, role: "img", "aria-label": "Chart", children: /* @__PURE__ */ e("div", { className: "ui-chart-bars", children: n.map((l, o) => /* @__PURE__ */ b("div", { className: "ui-chart-bar-wrap", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "ui-chart-bar",
        style: { height: `${l.value / s * 100}%` },
        title: l.label
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-chart-label", children: l.label })
  ] }, o)) }) });
}
function Y({
  checked: n = !1,
  onChange: a,
  disabled: i = !1,
  label: t,
  id: s,
  className: l = "",
  indeterminate: o,
  ...u
}) {
  const r = s || `ui-checkbox-${p.useId().replace(/:/g, "")}`, c = p.useRef(null);
  p.useEffect(() => {
    c.current && (c.current.indeterminate = !!o);
  }, [o]);
  const d = [
    "ui-checkbox-wrapper",
    i && "ui-checkbox-wrapper--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ b("label", { className: "ui-checkbox-label", htmlFor: r, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: c,
        id: r,
        type: "checkbox",
        className: "ui-checkbox",
        checked: n,
        onChange: a,
        disabled: i,
        "aria-checked": o ? "mixed" : n,
        "aria-disabled": i,
        ...u
      }
    ),
    /* @__PURE__ */ e("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
    t && /* @__PURE__ */ e("span", { className: "ui-checkbox-text", children: t })
  ] }) });
}
function _({ open: n, defaultOpen: a = !1, onOpenChange: i, trigger: t, children: s, className: l = "" }) {
  const [o, u] = p.useState(a), r = n !== void 0, c = r ? n : o, d = (m) => {
    r || u(m), i == null || i(m);
  }, h = ["ui-collapsible", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: h, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => d(!c),
        "aria-expanded": c,
        children: t
      }
    ),
    /* @__PURE__ */ e("div", { className: "ui-collapsible-content", hidden: !c, children: s })
  ] });
}
function q({ options: n = [], value: a, onChange: i, placeholder: t = "Select...", className: s = "" }) {
  const [l, o] = y(!1), [u, r] = y(""), c = n.filter((m) => m.label.toLowerCase().includes(u.toLowerCase())), d = n.find((m) => m.value === a), h = ["ui-combobox", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: h, children: [
    /* @__PURE__ */ e("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: l ? u : (d == null ? void 0 : d.label) ?? "",
        onChange: (m) => {
          r(m.target.value), o(!0);
        },
        onFocus: () => o(!0),
        onBlur: () => setTimeout(() => o(!1), 150),
        placeholder: t,
        role: "combobox",
        "aria-expanded": l,
        "aria-autocomplete": "list"
      }
    ) }),
    l && /* @__PURE__ */ e("ul", { className: "ui-combobox-list", role: "listbox", children: c.map((m) => /* @__PURE__ */ e(
      "li",
      {
        role: "option",
        "aria-selected": a === m.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          i == null || i(m.value), o(!1), r("");
        },
        children: m.label
      },
      m.value
    )) })
  ] });
}
function U({ children: n, placeholder: a = "Search...", className: i = "" }) {
  const t = ["ui-command", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: t, role: "command", children: [
    /* @__PURE__ */ e("input", { type: "text", className: "ui-command-input", placeholder: a }),
    /* @__PURE__ */ e("div", { className: "ui-command-list", children: n })
  ] });
}
function V({ children: n, items: a = [], onOpenChange: i }) {
  const [t, s] = p.useState(!1), [l, o] = p.useState({ x: 0, y: 0 }), u = p.useRef(null);
  return p.useEffect(() => {
    const r = (d) => {
      d.button === 2 && (d.preventDefault(), o({ x: d.clientX, y: d.clientY }), s(!0), i == null || i(!0));
    }, c = u.current;
    return c == null || c.addEventListener("contextmenu", r), () => c == null ? void 0 : c.removeEventListener("contextmenu", r);
  }, [i]), p.useEffect(() => {
    if (!t) return;
    const r = () => {
      s(!1), i == null || i(!1);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, [t, i]), /* @__PURE__ */ b("div", { ref: u, className: "ui-contextmenu-wrapper", children: [
    n,
    t && /* @__PURE__ */ e(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: l.x, top: l.y },
        role: "menu",
        children: a.map((r, c) => /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: r.onClick, children: r.label }) }, c))
      }
    )
  ] });
}
function W({
  navbar: n,
  sidebar: a,
  children: i,
  sidebarCollapsed: t = !1,
  mainWidth: s = "fluid",
  fullHeight: l = !0,
  className: o = ""
}) {
  const u = [
    "ui-dashboard",
    l && "ui-dashboard--full-height",
    t && "ui-dashboard--sidebar-collapsed",
    o
  ].filter(Boolean).join(" "), r = [
    "ui-dashboard-main",
    s === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: u, children: [
    n && /* @__PURE__ */ e("div", { className: "ui-dashboard-navbar", children: n }),
    /* @__PURE__ */ b("div", { className: "ui-dashboard-body", children: [
      a && /* @__PURE__ */ e("div", { className: "ui-dashboard-sidebar-wrap", children: a }),
      /* @__PURE__ */ e("main", { className: r, role: "main", children: /* @__PURE__ */ e("div", { className: "ui-dashboard-main-inner", children: i }) })
    ] })
  ] });
}
function z({
  columns: n = [],
  data: a = [],
  className: i = "",
  emptyMessage: t = "No data"
}) {
  const s = ["ui-datatable", i].filter(Boolean).join(" ");
  return n.length ? a.length ? /* @__PURE__ */ e("div", { className: s, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ b("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((l) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: l.header }, l.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: a.map((l, o) => /* @__PURE__ */ e("tr", { className: "ui-datatable-tr", children: n.map((u) => /* @__PURE__ */ e("td", { className: "ui-datatable-td", children: l[u.key] ?? "" }, u.key)) }, o)) })
  ] }) }) : /* @__PURE__ */ e("div", { className: s, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ b("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((l) => /* @__PURE__ */ e("th", { scope: "col", className: "ui-datatable-th", children: l.header }, l.key)) }) }),
    /* @__PURE__ */ e("tbody", { children: /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: n.length, className: "ui-datatable-empty-cell", children: t }) }) })
  ] }) }) : /* @__PURE__ */ e("div", { className: s, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ e("p", { className: "ui-datatable-empty", children: t }) });
}
function $({
  label: n,
  error: a,
  type: i = "text",
  placeholder: t,
  disabled: s = !1,
  id: l,
  className: o = "",
  ...u
}) {
  const r = l || `ui-input-${p.useId().replace(/:/g, "")}`, c = a ? `${r}-error` : void 0, d = [
    "ui-input",
    a && "ui-input--error",
    s && "ui-input--disabled",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: "ui-input-wrapper", children: [
    n && /* @__PURE__ */ e("label", { htmlFor: r, className: "ui-input-label", children: n }),
    /* @__PURE__ */ e(
      "input",
      {
        id: r,
        type: i,
        className: d,
        placeholder: t,
        disabled: s,
        "aria-invalid": !!a,
        "aria-describedby": c,
        ...u
      }
    ),
    a && /* @__PURE__ */ e("span", { id: c, className: "ui-input-error", role: "alert", children: a })
  ] });
}
function J({ value: n, onChange: a, placeholder: i = "Select date", className: t = "" }) {
  const [s, l] = p.useState(!1), o = n ? new Date(n).toLocaleDateString() : "", u = ["ui-datepicker", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: u, children: [
    /* @__PURE__ */ e(
      $,
      {
        readOnly: !0,
        value: o,
        placeholder: i,
        onFocus: () => l(!0),
        onClick: () => l((r) => !r)
      }
    ),
    s && /* @__PURE__ */ b(x, { children: [
      /* @__PURE__ */ e("div", { className: "ui-datepicker-overlay", onClick: () => l(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ e("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ e(j, { value: n, onChange: (r) => {
        a == null || a(r), l(!1);
      } }) })
    ] })
  ] });
}
function Q({ open: n, onClose: a, title: i, children: t, footer: s, className: l = "" }) {
  const o = p.useRef(null);
  w(() => {
    if (!n) return;
    const r = (c) => {
      c.key === "Escape" && (a == null || a());
    };
    return document.addEventListener("keydown", r), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    };
  }, [n, a]);
  const u = (r) => {
    r.target === r.currentTarget && (a == null || a());
  };
  return n ? /* @__PURE__ */ e(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": i ? "ui-dialog-title" : void 0,
      onClick: u,
      children: /* @__PURE__ */ b(
        "div",
        {
          ref: o,
          className: `ui-dialog ${l}`,
          role: "document",
          onClick: (r) => r.stopPropagation(),
          children: [
            /* @__PURE__ */ b("div", { className: "ui-dialog-content", children: [
              i && /* @__PURE__ */ e("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: i }),
              /* @__PURE__ */ e("div", { className: "ui-dialog-body", children: t }),
              s && /* @__PURE__ */ e("div", { className: "ui-dialog-footer", children: s })
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
function Z({ open: n, onClose: a, title: i, children: t, side: s = "right", className: l = "" }) {
  return w(() => (n && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [n]), n ? /* @__PURE__ */ b(x, { children: [
    /* @__PURE__ */ e("div", { className: "ui-drawer-overlay", onClick: a, "aria-hidden": "true" }),
    /* @__PURE__ */ b("div", { className: `ui-drawer ui-drawer--${s} ${l}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      i && /* @__PURE__ */ e("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: i }),
      /* @__PURE__ */ e("div", { className: "ui-drawer-body", children: t }),
      /* @__PURE__ */ e("button", { type: "button", className: "ui-drawer-close", onClick: a, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function C({ trigger: n, items: a = [], align: i = "end" }) {
  const [t, s] = y(!1), l = B(null);
  w(() => {
    if (!t) return;
    const r = (c) => {
      l.current && !l.current.contains(c.target) && s(!1);
    };
    return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
  }, [t]), w(() => {
    if (!t) return;
    const r = (c) => {
      c.key === "Escape" && s(!1);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [t]);
  const o = (r) => {
    var c;
    r.disabled || ((c = r.onClick) == null || c.call(r), s(!1));
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: "ui-dropdown",
      ref: l,
      onKeyDown: (r) => {
        var f, N, k, g, v;
        if (!t) return;
        const c = (f = l.current) == null ? void 0 : f.querySelectorAll(".ui-dropdown-item"), d = c ? Array.from(c) : [], h = document.activeElement, m = d.indexOf(h);
        r.key === "ArrowDown" && m < d.length - 1 ? (r.preventDefault(), (N = d[m + 1]) == null || N.focus()) : r.key === "ArrowUp" && m > 0 ? (r.preventDefault(), (k = d[m - 1]) == null || k.focus()) : r.key === "Home" ? (r.preventDefault(), (g = d[0]) == null || g.focus()) : r.key === "End" && (r.preventDefault(), (v = d[d.length - 1]) == null || v.focus());
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => s((r) => !r),
            onKeyDown: (r) => {
              (r.key === "Enter" || r.key === " ") && (r.preventDefault(), s((c) => !c));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": t,
            "aria-controls": "ui-dropdown-menu",
            tabIndex: 0,
            children: n
          }
        ),
        t && /* @__PURE__ */ e(
          "ul",
          {
            id: "ui-dropdown-menu",
            className: `ui-dropdown-menu ui-dropdown-menu--${i}`,
            role: "menu",
            children: a.map((r, c) => /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: "ui-dropdown-item",
                role: "menuitem",
                disabled: r.disabled,
                onClick: () => o(r),
                tabIndex: 0,
                children: r.label
              }
            ) }, c))
          }
        )
      ]
    }
  );
}
function ee({ title: n = "No data", description: a, icon: i, children: t, className: s = "" }) {
  const l = ["ui-empty", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: l, role: "status", children: [
    i && /* @__PURE__ */ e("div", { className: "ui-empty-icon", children: i }),
    /* @__PURE__ */ e("h3", { className: "ui-empty-title", children: n }),
    a && /* @__PURE__ */ e("p", { className: "ui-empty-desc", children: a }),
    t && /* @__PURE__ */ e("div", { className: "ui-empty-actions", children: t })
  ] });
}
function ae({ label: n, error: a, hint: i, id: t, children: s, className: l = "" }) {
  const o = ["ui-field", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: o, children: [
    n && /* @__PURE__ */ e("label", { htmlFor: t, className: "ui-field-label", children: n }),
    s,
    i && /* @__PURE__ */ e("span", { className: "ui-field-hint", children: i }),
    a && /* @__PURE__ */ e("span", { className: "ui-field-error", role: "alert", children: a })
  ] });
}
function ie({ trigger: n, content: a, className: i = "" }) {
  const [t, s] = y(!1), l = ["ui-hovercard", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    "div",
    {
      className: l,
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ e("div", { className: "ui-hovercard-trigger", children: n }),
        t && /* @__PURE__ */ e("div", { className: "ui-hovercard-content", children: a })
      ]
    }
  );
}
function le({ left: n, right: a, children: i, className: t = "" }) {
  const s = ["ui-inputgroup", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: s, children: [
    n && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: n }),
    /* @__PURE__ */ e("span", { className: "ui-inputgroup-input", children: i }),
    a && /* @__PURE__ */ e("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: a })
  ] });
}
function ne({ length: n = 6, value: a = "", onChange: i, className: t = "" }) {
  const s = B([]), l = a.split("").concat(Array(n).fill("")).slice(0, n), o = (c, d) => {
    var m;
    const h = l.slice();
    h[c] = d.replace(/\D/g, "").slice(-1), i == null || i(h.join("")), d && c < n - 1 && ((m = s.current[c + 1]) == null || m.focus());
  }, u = (c, d) => {
    var h;
    d.key === "Backspace" && !l[c] && c > 0 && ((h = s.current[c - 1]) == null || h.focus());
  }, r = ["ui-inputotp", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: r, role: "group", "aria-label": "One-time code", children: l.map((c, d) => /* @__PURE__ */ e(
    "input",
    {
      ref: (h) => s.current[d] = h,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: c,
      onChange: (h) => o(d, h.target.value),
      onKeyDown: (h) => u(d, h),
      "aria-label": `Digit ${d + 1}`
    },
    d
  )) });
}
function E({
  href: n,
  onClick: a,
  active: i = !1,
  disabled: t = !1,
  icon: s,
  children: l,
  className: o = "",
  ...u
}) {
  const r = [
    "ui-navlink",
    i && "ui-navlink--active",
    t && "ui-navlink--disabled",
    o
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ b(x, { children: [
    s && /* @__PURE__ */ e("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: s }),
    /* @__PURE__ */ e("span", { className: "ui-navlink-text", children: l })
  ] });
  return n && !t ? /* @__PURE__ */ e(
    "a",
    {
      href: n,
      className: r,
      onClick: a,
      "aria-current": i ? "page" : void 0,
      ...u,
      children: c
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: r,
      onClick: t ? void 0 : a,
      disabled: t,
      "aria-current": i ? "page" : void 0,
      ...u,
      children: c
    }
  );
}
function re({
  brand: n,
  nav: a,
  actions: i,
  variant: t = "default",
  sticky: s = !1,
  dense: l = !1,
  /** When true, shows a gradient mark before brand (text logos). Set false for custom image logos. */
  brandMark: o = !1,
  mobileMenuOpen: u,
  onMobileMenuChange: r,
  className: c = ""
}) {
  const d = D().replace(/:/g, ""), [h, m] = y(!1), f = u !== void 0, N = f ? u : h, k = (v) => {
    f || m(v), r == null || r(v);
  }, g = [
    "ui-navbar",
    `ui-navbar--${t}`,
    s && "ui-navbar--sticky",
    l && "ui-navbar--dense",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("header", { className: g, role: "banner", children: [
    /* @__PURE__ */ b("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: ["ui-navbar-brand", o && "ui-navbar-brand--with-mark"].filter(Boolean).join(" "),
          children: n
        }
      ),
      /* @__PURE__ */ e("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: a }),
      /* @__PURE__ */ e("div", { className: "ui-navbar-actions", children: i }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": N,
          "aria-controls": `ui-navbar-mobile-${d}`,
          "aria-label": "Toggle menu",
          onClick: () => k(!N),
          children: /* @__PURE__ */ e("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        id: `ui-navbar-mobile-${d}`,
        className: "ui-navbar-mobile",
        hidden: !N,
        role: "navigation",
        "aria-label": "Mobile",
        children: /* @__PURE__ */ b("div", { className: "ui-navbar-mobile-inner", children: [
          a,
          i && /* @__PURE__ */ e("div", { className: "ui-navbar-mobile-actions", children: i })
        ] })
      }
    )
  ] });
}
function te({
  items: n = [],
  header: a,
  footer: i,
  collapsed: t = !1,
  onToggleCollapse: s,
  showCollapseButton: l = !0,
  position: o = "left",
  variant: u = "default",
  width: r = "normal",
  className: c = ""
}) {
  const d = [
    "ui-sidebar",
    `ui-sidebar--${u}`,
    `ui-sidebar--${o}`,
    `ui-sidebar--width-${r}`,
    t && "ui-sidebar--collapsed",
    c
  ].filter(Boolean).join(" "), h = !!(l && s);
  return /* @__PURE__ */ b("aside", { className: d, "aria-label": "Sidebar navigation", children: [
    !!(a || h) && /* @__PURE__ */ b(
      "div",
      {
        className: [
          "ui-sidebar-top",
          !a && h && "ui-sidebar-top--collapse-only"
        ].filter(Boolean).join(" "),
        children: [
          a ? /* @__PURE__ */ e("div", { className: "ui-sidebar-header", children: a }) : null,
          h ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "ui-sidebar-collapse-btn",
              onClick: () => s(!t),
              "aria-expanded": !t,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ e("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ e("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ e("ul", { className: "ui-sidebar-list", children: n.map((f, N) => /* @__PURE__ */ e("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ e(
      E,
      {
        href: f.href,
        onClick: f.onClick,
        active: f.active,
        disabled: f.disabled,
        icon: f.icon,
        children: f.label
      }
    ) }, f.id ?? N)) }) }),
    i && /* @__PURE__ */ e("div", { className: "ui-sidebar-footer", children: i })
  ] });
}
export {
  A as Accordion,
  F as Alert,
  R as AlertDialog,
  I as AspectRatio,
  T as Avatar,
  K as Badge,
  M as Breadcrumb,
  P as Button,
  O as ButtonGroup,
  j as Calendar,
  G as Card,
  H as Carousel,
  X as Chart,
  Y as Checkbox,
  _ as Collapsible,
  q as Combobox,
  U as Command,
  V as ContextMenu,
  W as DashboardPage,
  z as DataTable,
  J as DatePicker,
  Q as Dialog,
  Z as Drawer,
  C as DropdownMenu,
  ee as Empty,
  ae as Field,
  ie as HoverCard,
  $ as Input,
  le as InputGroup,
  ne as InputOTP,
  E as NavLink,
  re as Navbar,
  te as Sidebar
};
//# sourceMappingURL=tri-ui-library.js.map
