import { jsx as t, jsxs as p, Fragment as Q } from "react/jsx-runtime";
import F, { useState as W, useEffect as _, useMemo as V, useCallback as K, useRef as ne, useId as ie } from "react";
function Ue({ items: a = [], multiple: e = !1, disabled: n = !1, variant: i = "default", className: o = "" }) {
  const [r, d] = F.useState(e ? [] : null), c = (l) => e ? Array.isArray(r) && r.includes(l) : r === l, u = (l) => {
    if (n) return;
    const m = a[l];
    m != null && m.disabled || d(
      e ? (h) => h.includes(l) ? h.filter((v) => v !== l) : [...h, l] : (h) => h === l ? null : l
    );
  }, s = [
    "ui-accordion",
    `ui-accordion--${i}`,
    n && "ui-accordion--disabled",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: s, role: "region", "aria-label": "Accordion", children: a.map((l, m) => {
    const h = n || l.disabled;
    return /* @__PURE__ */ p("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ p(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => u(m),
          "aria-expanded": c(m),
          "aria-controls": `ui-accordion-panel-${m}`,
          "aria-disabled": h,
          id: `ui-accordion-trigger-${m}`,
          disabled: h,
          children: [
            /* @__PURE__ */ t("span", { className: "ui-accordion-trigger-text", children: l.title }),
            /* @__PURE__ */ t("span", { className: "ui-accordion-trigger-icon", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          id: `ui-accordion-panel-${m}`,
          role: "region",
          "aria-labelledby": `ui-accordion-trigger-${m}`,
          className: "ui-accordion-panel",
          hidden: !c(m),
          children: l.content
        }
      )
    ] }, m);
  }) });
}
function We({
  type: a = "info",
  children: e,
  title: n,
  className: i = "",
  dismissible: o = !1,
  onDismiss: r,
  ...d
}) {
  const [c, u] = F.useState(!1), s = () => {
    u(!0), r == null || r();
  }, l = [
    "ui-alert",
    `ui-alert--${a}`,
    i
  ].filter(Boolean).join(" ");
  return c ? null : /* @__PURE__ */ p(
    "div",
    {
      className: l,
      role: "alert",
      "aria-live": "polite",
      ...d,
      children: [
        /* @__PURE__ */ p("div", { className: "ui-alert-content", children: [
          n && /* @__PURE__ */ t("div", { className: "ui-alert-title", children: n }),
          /* @__PURE__ */ t("div", { className: "ui-alert-message", children: e })
        ] }),
        o && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: "ui-alert-dismiss",
            onClick: s,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
function He({
  open: a,
  onClose: e,
  title: n,
  description: i,
  confirmLabel: o = "OK",
  cancelLabel: r = "Cancel",
  onConfirm: d,
  showCancel: c = !0
}) {
  return a ? /* @__PURE__ */ t("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ p("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ t("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: n }),
    i && /* @__PURE__ */ t("p", { className: "ui-alertdialog-desc", children: i }),
    /* @__PURE__ */ p("div", { className: "ui-alertdialog-actions", children: [
      c && /* @__PURE__ */ t("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: e, children: r }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        d == null || d(), e == null || e();
      }, children: o })
    ] })
  ] }) }) : null;
}
function Ke({ ratio: a = 16 / 9, children: e, className: n = "" }) {
  const i = ["ui-aspectratio", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: i, style: { aspectRatio: a }, children: e });
}
function Ne(a) {
  const e = String(a).trim();
  if (!e) return "?";
  const n = e.split(/\s+/).filter(Boolean);
  if (n.length >= 2)
    return (n[0][0] + n[1][0]).toUpperCase();
  const i = n[0];
  return i.length <= 1 ? i.toUpperCase() : i.slice(0, 2).toUpperCase();
}
function ve({ fallback: a, alt: e }) {
  return a != null && String(a).trim() ? String(a).trim() : e && String(e).trim() ? Ne(e) : "?";
}
function Ve({
  src: a,
  alt: e = "",
  fallback: n,
  placeholder: i,
  size: o = "md",
  shape: r = "circle",
  ring: d = !1,
  presence: c,
  className: u = ""
}) {
  const [s, l] = W(!1), [m, h] = W(!1);
  _(() => {
    if (!a) {
      l(!1), h(!1);
      return;
    }
    l(!1), h(!1);
  }, [a]);
  const v = V(() => ve({ fallback: n, alt: e }), [n, e]), $ = e || v, D = !!(a && String(a).trim()), R = D && !m, M = D && !m && !s, P = !D || m, C = [
    "ui-avatar-root",
    `ui-avatar-root--${o}`,
    c ? "ui-avatar-root--has-presence" : "",
    u
  ].filter(Boolean).join(" "), E = [
    "ui-avatar",
    `ui-avatar--${o}`,
    `ui-avatar--${r}`,
    d ? "ui-avatar--ring" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("span", { className: C, children: [
    /* @__PURE__ */ p("span", { className: E, role: "img", "aria-label": $ || void 0, children: [
      R ? /* @__PURE__ */ t(
        "img",
        {
          src: a,
          alt: e,
          className: `ui-avatar-img${s ? " ui-avatar-img--visible" : ""}`,
          onLoad: () => l(!0),
          onError: () => {
            h(!0), l(!1);
          },
          draggable: !1
        },
        a
      ) : null,
      M ? /* @__PURE__ */ t("span", { className: "ui-avatar-placeholder", "aria-hidden": !0, children: i != null ? /* @__PURE__ */ t("span", { className: "ui-avatar-placeholder-custom", children: i }) : /* @__PURE__ */ t("span", { className: "ui-avatar-skeleton" }) }) : null,
      P ? /* @__PURE__ */ t("span", { className: "ui-avatar-fallback", children: v }) : null
    ] }),
    c ? /* @__PURE__ */ t("span", { className: `ui-avatar-presence ui-avatar-presence--${c}`, "aria-hidden": !0, title: c }) : null
  ] });
}
function Xe({ children: a, variant: e = "default", className: n = "" }) {
  const i = ["ui-badge", `ui-badge--${e}`, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("span", { className: i, children: a });
}
function _e({ items: a = [], separator: e = "/", className: n = "" }) {
  const i = ["ui-breadcrumb", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("nav", { className: i, "aria-label": "Breadcrumb", children: /* @__PURE__ */ t("ol", { className: "ui-breadcrumb-list", children: a.map((o, r) => /* @__PURE__ */ p("li", { className: "ui-breadcrumb-item", children: [
    r > 0 && /* @__PURE__ */ t("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: e }),
    o.href ? /* @__PURE__ */ t("a", { href: o.href, className: "ui-breadcrumb-link", children: o.label }) : /* @__PURE__ */ t("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: o.label })
  ] }, r)) }) });
}
function ge({
  variant: a = "primary",
  size: e = "md",
  disabled: n = !1,
  onClick: i,
  children: o,
  leftIcon: r,
  rightIcon: d,
  type: c = "button",
  className: u = "",
  ariaLabel: s,
  ...l
}) {
  const m = o != null && o !== "", h = [
    "ui-btn",
    `ui-btn--${a}`,
    `ui-btn--${e}`,
    n && "ui-btn--disabled",
    r && "ui-btn--has-left-icon",
    d && "ui-btn--has-right-icon",
    (r || d) && !m && "ui-btn--icon-only",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "button",
    {
      type: c,
      className: h,
      disabled: n,
      onClick: i,
      "aria-label": s,
      "aria-disabled": n,
      ...l,
      children: [
        r && /* @__PURE__ */ t("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: r }),
        m && /* @__PURE__ */ t("span", { className: "ui-btn-label", children: o }),
        d && /* @__PURE__ */ t("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: d })
      ]
    }
  );
}
function qe({ children: a, className: e = "" }) {
  const n = ["ui-buttongroup", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: n, role: "group", children: a });
}
function H(a) {
  const e = new Date(a);
  return e.setHours(0, 0, 0, 0), e;
}
function ce(a, e) {
  return !a || !e ? !1 : a.getFullYear() === e.getFullYear() && a.getMonth() === e.getMonth() && a.getDate() === e.getDate();
}
function ye(a, e) {
  const n = new Date(a, e, 1);
  return { year: n.getFullYear(), month: n.getMonth() };
}
function ue(a, e, n) {
  return ye(a, e + n);
}
function we(a) {
  const e = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())), n = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - n);
  const i = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e - i) / 864e5 + 1) / 7);
}
function xe(a, e, n) {
  const i = H(a).getTime();
  return !(e && i < H(e).getTime() || n && i > H(n).getTime());
}
function ke(a, e, n) {
  const o = (new Date(a, e, 1).getDay() - n + 7) % 7;
  new Date(a, e + 1, 0).getDate();
  const r = [], d = new Date(a, e, 1 - o);
  for (let c = 0; c < 42; c++) {
    const u = new Date(d);
    u.setDate(d.getDate() + c), r.push({
      date: u,
      outside: u.getMonth() !== e
    });
  }
  for (; r.length > 35 && r.slice(-7).every((c) => c.outside); )
    r.splice(-7, 7);
  return r;
}
function $e(a) {
  const e = [];
  for (let n = 0; n < a.length; n += 7)
    e.push(a.slice(n, n + 7));
  return e;
}
function Be({
  value: a,
  onChange: e,
  className: n = "",
  minDate: i,
  maxDate: o,
  isDateDisabled: r,
  weekStartsOn: d = 0,
  showOutsideDays: c = !0,
  showWeekNumbers: u = !1,
  locale: s,
  showTodayButton: l = !1
}) {
  const m = ["ui-calendar", n].filter(Boolean).join(" "), h = H(a || /* @__PURE__ */ new Date()), [v, $] = W(() => ({ year: h.getFullYear(), month: h.getMonth() }));
  _(() => {
    if (!a) return;
    const N = H(a);
    $((j) => j.year === N.getFullYear() && j.month === N.getMonth() ? j : { year: N.getFullYear(), month: N.getMonth() });
  }, [a]);
  const D = d === 1 ? 1 : 0, R = V(
    () => ke(v.year, v.month, D),
    [v.year, v.month, D]
  ), M = V(() => $e(R), [R]), P = V(
    () => new Date(v.year, v.month).toLocaleString(s || void 0, { month: "long", year: "numeric" }),
    [v.year, v.month, s]
  ), C = V(() => {
    const N = [], j = new Date(2024, 0, 1);
    for (let b = 0; b < 7; b++) {
      const g = (D + b) % 7, w = new Date(j), k = (g - w.getDay() + 7) % 7;
      w.setDate(1 + k), N.push(w.toLocaleString(s || void 0, { weekday: "short" }));
    }
    return N;
  }, [s, D]), E = K(() => {
    $((N) => ue(N.year, N.month, -1));
  }, []), f = K(() => {
    $((N) => ue(N.year, N.month, 1));
  }, []), y = K(() => {
    const N = /* @__PURE__ */ new Date();
    $({ year: N.getFullYear(), month: N.getMonth() }), e == null || e(H(N));
  }, [e]), B = K(
    (N) => !!(!xe(N, i, o) || typeof r == "function" && r(N)),
    [i, o, r]
  ), O = K(
    (N) => {
      B(N) || (e == null || e(H(N)), (N.getMonth() !== v.month || N.getFullYear() !== v.year) && $({ year: N.getFullYear(), month: N.getMonth() }));
    },
    [e, B, v.month, v.year]
  ), I = H(/* @__PURE__ */ new Date()), A = a ? H(a) : null;
  return /* @__PURE__ */ p("div", { className: m, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ p("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-nav-btn", onClick: E, "aria-label": "Previous month", children: "←" }),
      /* @__PURE__ */ t("span", { className: "ui-calendar-title", children: P }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-nav-btn", onClick: f, "aria-label": "Next month", children: "→" })
    ] }),
    l ? /* @__PURE__ */ t("div", { className: "ui-calendar-toolbar", children: /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-today-btn", onClick: y, children: "Today" }) }) : null,
    /* @__PURE__ */ p(
      "div",
      {
        className: ["ui-calendar-grid", u ? "ui-calendar-grid--weeks" : ""].filter(Boolean).join(" "),
        role: "grid",
        "aria-readonly": "true",
        children: [
          u ? /* @__PURE__ */ t("div", { className: "ui-calendar-weeknum-h", "aria-hidden": "true", children: "Wk" }) : null,
          C.map((N) => /* @__PURE__ */ t("div", { className: "ui-calendar-weekday", role: "columnheader", children: N }, N)),
          M.map((N, j) => /* @__PURE__ */ p(F.Fragment, { children: [
            u ? /* @__PURE__ */ t("div", { className: "ui-calendar-weeknum", "aria-hidden": "true", children: we(N[0].date) }) : null,
            N.map((b, g) => {
              const { date: w, outside: k } = b, U = ce(w, I), x = A && ce(w, A), S = B(w);
              return k && !c ? /* @__PURE__ */ t(
                "div",
                {
                  className: "ui-calendar-day ui-calendar-day--empty",
                  role: "gridcell"
                },
                `${j}-${g}`
              ) : /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  role: "gridcell",
                  disabled: S,
                  className: [
                    "ui-calendar-day",
                    k ? "ui-calendar-day--outside" : "",
                    U ? "ui-calendar-day--today" : "",
                    x ? "ui-calendar-day--selected" : "",
                    S ? "ui-calendar-day--disabled" : ""
                  ].filter(Boolean).join(" "),
                  onClick: () => O(w),
                  "aria-label": w.toLocaleDateString(s || void 0, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  }),
                  "aria-selected": x ? "true" : "false",
                  children: w.getDate()
                },
                `${j}-${g}`
              );
            })
          ] }, j))
        ]
      }
    )
  ] });
}
function Y(...a) {
  return a.filter(Boolean).join(" ");
}
function De({
  children: a,
  title: e,
  footer: n,
  className: i = "",
  variant: o = "outlined",
  color: r,
  borderColor: d,
  ...c
}) {
  const u = Y(
    "ui-card",
    `ui-card--${o}`,
    r && `ui-card--bg-${r}`,
    d && `ui-card--border-${d}`,
    i
  ), s = e != null || n != null ? /* @__PURE__ */ p(Q, { children: [
    e != null && /* @__PURE__ */ t(de, { children: typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ t("h3", { className: "ui-card-title", children: e }) : e }),
    /* @__PURE__ */ t(me, { children: a }),
    n != null && /* @__PURE__ */ t(he, { children: n })
  ] }) : a;
  return /* @__PURE__ */ t("div", { className: u, ...c, children: s });
}
function de({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-header", e), children: a });
}
function me({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-body", e), children: a });
}
function he({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-footer", e), children: a });
}
function Me({ children: a, className: e = "", as: n = "h3", ...i }) {
  return /* @__PURE__ */ t(n, { className: Y("ui-card-title", e), ...i, children: a });
}
function je({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("p", { className: Y("ui-card-subtitle", e), children: a });
}
function Le({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-text", e), children: a });
}
function Ee({ children: a, className: e = "", href: n = "#", ...i }) {
  return /* @__PURE__ */ t("a", { className: Y("ui-card-link", e), href: n, ...i, children: a });
}
function Se({ src: a, alt: e = "", position: n = "top", className: i = "" }) {
  return /* @__PURE__ */ t(
    "img",
    {
      src: a,
      alt: e,
      className: Y("ui-card-img", n && `ui-card-img--${n}`, i)
    }
  );
}
function Fe({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-img-wrap", e), children: a });
}
function Ce({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-img-overlay", e), children: a });
}
function Ie({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("ul", { className: Y("ui-card-list-group", e), children: a });
}
function Ae({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("li", { className: Y("ui-card-list-group-item", e), children: a });
}
function Te({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: Y("ui-card-group", e), children: a });
}
const G = De;
G.Header = de;
G.Body = me;
G.Footer = he;
G.Title = Me;
G.Subtitle = je;
G.Text = Le;
G.Link = Ee;
G.Img = Se;
G.ImgOverlayWrap = Fe;
G.ImgOverlay = Ce;
G.ListGroup = Ie;
G.ListGroupItem = Ae;
G.Group = Te;
function Ze({ children: a, className: e = "" }) {
  const [n, i] = F.useState(0), o = F.Children.toArray(a), r = o.length;
  return /* @__PURE__ */ p("div", { className: `ui-carousel ${e}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ t("div", { className: "ui-carousel-track", style: { transform: `translateX(-${n * 100}%)` }, children: o.map((d, c) => /* @__PURE__ */ t("div", { className: "ui-carousel-slide", children: d }, c)) }),
    r > 1 && /* @__PURE__ */ t("div", { className: "ui-carousel-dots", children: o.map((d, c) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${c + 1}`,
        className: `ui-carousel-dot ${c === n ? "ui-carousel-dot--active" : ""}`,
        onClick: () => i(c)
      },
      c
    )) })
  ] });
}
const J = 280, ae = 120, L = { top: 8, right: 8, bottom: 26, left: 40 };
function Re(a) {
  return typeof a == "number" && Number.isFinite(a) ? String(a) : String(a ?? "");
}
function Je({
  data: a = [],
  type: e = "bar",
  className: n = "",
  formatValue: i = Re,
  minValue: o,
  showGrid: r = !0,
  showYAxis: d = !0,
  yTickCount: c = 4
}) {
  var N, j;
  const u = ne(null), [s, l] = W(null), m = ["ui-chart", `ui-chart--${e}`, n].filter(Boolean).join(" "), h = J - L.left - L.right, v = ae - L.top - L.bottom, { maxV: $, minV: D, ticks: R, points: M, bars: P } = V(() => {
    const b = a.map((T) => Number(T.value)).filter((T) => Number.isFinite(T)), g = b.length ? Math.max(...b) : 1, w = b.length ? Math.min(...b) : 0, k = typeof o == "number" && Number.isFinite(o) ? o : e === "line" ? Math.min(w, 0) : 0, U = Math.max(g, k + 1e-6) * 1.02, x = U - k || 1, S = Math.max(2, Math.min(8, c)), q = [];
    for (let T = 0; T < S; T++) {
      const X = k + x * T / (S - 1);
      q.push(X);
    }
    const z = a.length || 1, Z = h / z, le = (T) => L.top + v - (Number(T) - k) / x * v, pe = a.map((T, X) => {
      const te = L.left + Z * X + Z / 2, ee = le(T.value);
      return { x: te, y: ee, i: X, d: T };
    }), be = a.map((T, X) => {
      const te = L.left + Z * X + Z / 2, ee = Math.max(6, Z * 0.52), re = L.top + v, se = le(T.value), oe = Math.min(re, se), fe = Math.max(re, se);
      return { x: te - ee / 2, w: ee, yTop: oe, h: Math.max(fe - oe, 2), i: X, d: T };
    });
    return { maxV: U, minV: k, ticks: q, points: pe, bars: be };
  }, [a, h, v, o, e, c]), C = V(() => e !== "line" || !M.length ? "" : M.map((b, g) => `${g === 0 ? "M" : "L"} ${b.x} ${b.y}`).join(" "), [e, M]), E = V(() => {
    if (!a.length) return "Empty chart";
    const b = a.map((g) => `${g.label} ${i(g.value)}`);
    return `${e} chart: ${b.join(", ")}`;
  }, [a, i, e]), f = K((b, g) => {
    const w = u.current;
    if (!w) return;
    const k = w.getBoundingClientRect(), U = b.clientX - k.left, x = b.clientY - k.top;
    l({ x: U, y: x, i: g });
  }, []), y = K((b) => {
    l((g) => {
      if (!g) return g;
      const w = u.current;
      if (!w) return g;
      const k = w.getBoundingClientRect();
      return { ...g, x: b.clientX - k.left, y: b.clientY - k.top };
    });
  }, []), B = K(() => l(null), []), O = s && a[s.i] ? a[s.i] : null, I = 56, A = s ? (() => {
    var U, x;
    const b = ((U = u.current) == null ? void 0 : U.offsetWidth) ?? J, g = ((x = u.current) == null ? void 0 : x.offsetHeight) ?? ae, w = Math.min(Math.max(s.x, I), Math.max(I, b - I)), k = Math.min(Math.max(s.y, 24), g - 8);
    return { left: w, top: k };
  })() : void 0;
  return a.length ? /* @__PURE__ */ t("div", { className: m, role: "img", "aria-label": E, children: /* @__PURE__ */ p(
    "div",
    {
      className: "ui-chart-frame",
      ref: u,
      onMouseLeave: B,
      onBlur: B,
      children: [
        /* @__PURE__ */ p(
          "svg",
          {
            className: "ui-chart-svg",
            viewBox: `0 0 ${J} ${ae}`,
            preserveAspectRatio: "xMidYMid meet",
            "aria-hidden": "true",
            children: [
              r ? R.map((b, g) => {
                const w = L.top + v - (b - D) / ($ - D || 1) * v;
                return /* @__PURE__ */ t(
                  "line",
                  {
                    className: "ui-chart-gridline",
                    x1: L.left,
                    x2: J - L.right,
                    y1: w,
                    y2: w
                  },
                  `g-${g}`
                );
              }) : null,
              d ? R.map((b, g) => {
                const w = L.top + v - (b - D) / ($ - D || 1) * v;
                return /* @__PURE__ */ t(
                  "text",
                  {
                    className: "ui-chart-axis-y",
                    x: L.left - 8,
                    y: w + 4,
                    textAnchor: "end",
                    children: i(b)
                  },
                  `y-${g}`
                );
              }) : null,
              /* @__PURE__ */ t(
                "line",
                {
                  className: "ui-chart-axis-x",
                  x1: L.left,
                  x2: J - L.right,
                  y1: L.top + v,
                  y2: L.top + v
                }
              ),
              a.map((b, g) => {
                const w = h / a.length, k = L.left + w * g + w / 2;
                return /* @__PURE__ */ t("text", { className: "ui-chart-axis-x-label", x: k, y: ae - 6, textAnchor: "middle", children: b.label }, `xl-${g}`);
              }),
              e === "bar" ? P.map((b) => /* @__PURE__ */ p("g", { children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    className: "ui-chart-hit",
                    x: b.x,
                    y: b.yTop,
                    width: b.w,
                    height: b.h,
                    onMouseEnter: (g) => f(g, b.i),
                    onMouseMove: y
                  }
                ),
                /* @__PURE__ */ t(
                  "rect",
                  {
                    className: "ui-chart-bar-fill",
                    x: b.x,
                    y: b.yTop,
                    width: b.w,
                    height: b.h,
                    pointerEvents: "none"
                  }
                )
              ] }, `b-${b.i}`)) : null,
              e === "line" ? /* @__PURE__ */ p(Q, { children: [
                /* @__PURE__ */ t("path", { className: "ui-chart-line-area", d: `${C} L ${(N = M[M.length - 1]) == null ? void 0 : N.x} ${L.top + v} L ${(j = M[0]) == null ? void 0 : j.x} ${L.top + v} Z` }),
                /* @__PURE__ */ t("path", { className: "ui-chart-line-stroke", d: C, fill: "none", pointerEvents: "none" }),
                M.map((b) => /* @__PURE__ */ t(
                  "circle",
                  {
                    className: "ui-chart-point-hit",
                    cx: b.x,
                    cy: b.y,
                    r: 10,
                    onMouseEnter: (g) => f(g, b.i),
                    onMouseMove: y
                  },
                  `hit-${b.i}`
                )),
                M.map((b) => /* @__PURE__ */ t(
                  "circle",
                  {
                    className: "ui-chart-point-dot",
                    cx: b.x,
                    cy: b.y,
                    r: (s == null ? void 0 : s.i) === b.i ? 4 : 3,
                    pointerEvents: "none"
                  },
                  `dot-${b.i}`
                ))
              ] }) : null
            ]
          }
        ),
        O && A ? /* @__PURE__ */ p(
          "div",
          {
            className: "ui-chart-tooltip",
            style: {
              left: A.left,
              top: A.top,
              transform: "translate(-50%, calc(-100% - 10px))"
            },
            role: "tooltip",
            children: [
              /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-label", children: O.label }),
              /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-value", children: i(O.value) }),
              O.hint ? /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-hint", children: O.hint }) : null
            ]
          }
        ) : null
      ]
    }
  ) }) : /* @__PURE__ */ t("div", { className: m, role: "img", "aria-label": "Empty chart", children: /* @__PURE__ */ t("p", { className: "ui-chart-empty", children: "No data" }) });
}
function Qe({
  checked: a = !1,
  onChange: e,
  disabled: n = !1,
  label: i,
  id: o,
  className: r = "",
  indeterminate: d,
  ...c
}) {
  const u = o || `ui-checkbox-${F.useId().replace(/:/g, "")}`, s = F.useRef(null);
  F.useEffect(() => {
    s.current && (s.current.indeterminate = !!d);
  }, [d]);
  const l = [
    "ui-checkbox-wrapper",
    n && "ui-checkbox-wrapper--disabled",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ p("label", { className: "ui-checkbox-label", htmlFor: u, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: s,
        id: u,
        type: "checkbox",
        className: "ui-checkbox",
        checked: a,
        onChange: e,
        disabled: n,
        "aria-checked": d ? "mixed" : a,
        "aria-disabled": n,
        ...c
      }
    ),
    /* @__PURE__ */ t("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
    i && /* @__PURE__ */ t("span", { className: "ui-checkbox-text", children: i })
  ] }) });
}
function ze({ open: a, defaultOpen: e = !1, onOpenChange: n, trigger: i, children: o, className: r = "" }) {
  const [d, c] = F.useState(e), u = a !== void 0, s = u ? a : d, l = (h) => {
    u || c(h), n == null || n(h);
  }, m = ["ui-collapsible", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: m, children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => l(!s),
        "aria-expanded": s,
        children: i
      }
    ),
    /* @__PURE__ */ t("div", { className: "ui-collapsible-content", hidden: !s, children: o })
  ] });
}
function ea({ options: a = [], value: e, onChange: n, placeholder: i = "Select...", className: o = "" }) {
  const [r, d] = W(!1), [c, u] = W(""), s = a.filter((h) => h.label.toLowerCase().includes(c.toLowerCase())), l = a.find((h) => h.value === e), m = ["ui-combobox", o].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: m, children: [
    /* @__PURE__ */ t("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ t(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: r ? c : (l == null ? void 0 : l.label) ?? "",
        onChange: (h) => {
          u(h.target.value), d(!0);
        },
        onFocus: () => d(!0),
        onBlur: () => setTimeout(() => d(!1), 150),
        placeholder: i,
        role: "combobox",
        "aria-expanded": r,
        "aria-autocomplete": "list"
      }
    ) }),
    r && /* @__PURE__ */ t("ul", { className: "ui-combobox-list", role: "listbox", children: s.map((h) => /* @__PURE__ */ t(
      "li",
      {
        role: "option",
        "aria-selected": e === h.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          n == null || n(h.value), d(!1), u("");
        },
        children: h.label
      },
      h.value
    )) })
  ] });
}
function aa({ children: a, placeholder: e = "Search...", className: n = "" }) {
  const i = ["ui-command", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: i, role: "command", children: [
    /* @__PURE__ */ t("input", { type: "text", className: "ui-command-input", placeholder: e }),
    /* @__PURE__ */ t("div", { className: "ui-command-list", children: a })
  ] });
}
function ta({ children: a, items: e = [], onOpenChange: n }) {
  const [i, o] = F.useState(!1), [r, d] = F.useState({ x: 0, y: 0 }), c = F.useRef(null);
  return F.useEffect(() => {
    const u = (l) => {
      l.button === 2 && (l.preventDefault(), d({ x: l.clientX, y: l.clientY }), o(!0), n == null || n(!0));
    }, s = c.current;
    return s == null || s.addEventListener("contextmenu", u), () => s == null ? void 0 : s.removeEventListener("contextmenu", u);
  }, [n]), F.useEffect(() => {
    if (!i) return;
    const u = () => {
      o(!1), n == null || n(!1);
    };
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  }, [i, n]), /* @__PURE__ */ p("div", { ref: c, className: "ui-contextmenu-wrapper", children: [
    a,
    i && /* @__PURE__ */ t(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: r.x, top: r.y },
        role: "menu",
        children: e.map((u, s) => /* @__PURE__ */ t("li", { role: "none", children: /* @__PURE__ */ t("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: u.onClick, children: u.label }) }, s))
      }
    )
  ] });
}
function na({
  navbar: a,
  sidebar: e,
  children: n,
  sidebarCollapsed: i = !1,
  mainWidth: o = "fluid",
  fullHeight: r = !0,
  className: d = ""
}) {
  const c = [
    "ui-dashboard",
    r && "ui-dashboard--full-height",
    i && "ui-dashboard--sidebar-collapsed",
    d
  ].filter(Boolean).join(" "), u = [
    "ui-dashboard-main",
    o === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: c, children: [
    a && /* @__PURE__ */ t("div", { className: "ui-dashboard-navbar", children: a }),
    /* @__PURE__ */ p("div", { className: "ui-dashboard-body", children: [
      e && /* @__PURE__ */ t("div", { className: "ui-dashboard-sidebar-wrap", children: e }),
      /* @__PURE__ */ t("main", { className: u, role: "main", children: /* @__PURE__ */ t("div", { className: "ui-dashboard-main-inner", children: n }) })
    ] })
  ] });
}
function ia({
  columns: a = [],
  data: e = [],
  className: n = "",
  emptyMessage: i = "No data",
  size: o = "md",
  variant: r = "default",
  striped: d = !1,
  responsive: c = "always",
  responsiveBreakpoint: u = "md",
  pageSize: s = 0,
  page: l,
  defaultPage: m = 1,
  onPageChange: h
}) {
  const $ = (/* @__PURE__ */ new Set(["sm", "md", "lg", "xl", "xxl"])).has(u) ? u : "md", D = c === !1 || c === "never", R = c === "breakpoint", M = !D && !R && (c === !0 || c === "always" || c == null), P = D ? "ui-datatable--scroll-never" : R ? `ui-datatable--scroll-below-${$}` : "ui-datatable--scroll-always", C = [
    "ui-datatable",
    o === "sm" && "ui-datatable--sm",
    r === "dark" && "ui-datatable--dark",
    d === "rows" && "ui-datatable--striped-rows",
    d === "columns" && "ui-datatable--striped-cols",
    d === "both" && "ui-datatable--striped-rows ui-datatable--striped-cols",
    n
  ].filter(Boolean).join(" "), E = typeof s == "number" && s > 0, f = e.length, y = E ? Math.max(1, Math.ceil(f / s)) : 1, B = typeof l == "number" && typeof h == "function", [O, I] = W(() => Math.max(1, m)), N = Math.min(Math.max(1, Number(B ? l : O) || 1), y);
  _(() => {
    !E || B || I((x) => Math.min(Math.max(1, x), y));
  }, [E, B, y]);
  const j = K(
    (x) => {
      const S = Math.min(Math.max(1, x), y);
      B ? h(S) : I(S);
    },
    [B, h, y]
  ), { visibleRows: b, rangeStart: g, rangeEnd: w } = V(() => {
    if (!E)
      return {
        visibleRows: e,
        rangeStart: f > 0 ? 1 : 0,
        rangeEnd: f
      };
    const x = (N - 1) * s, S = Math.min(x + s, f);
    return {
      visibleRows: e.slice(x, S),
      rangeStart: f === 0 ? 0 : x + 1,
      rangeEnd: S
    };
  }, [e, E, s, N, f]), k = (x) => /* @__PURE__ */ t("div", { className: ["ui-datatable-scroll", P].filter(Boolean).join(" "), children: /* @__PURE__ */ p("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: a.map((S) => /* @__PURE__ */ t("th", { scope: "col", className: "ui-datatable-th", children: S.header }, S.key)) }) }),
    x
  ] }) }), U = E && f > 0 ? /* @__PURE__ */ p("nav", { className: "ui-datatable-pagination", "aria-label": "Table pagination", children: [
    /* @__PURE__ */ p("p", { className: "ui-datatable-pagination-summary", children: [
      "Showing ",
      /* @__PURE__ */ t("strong", { children: g }),
      "–",
      /* @__PURE__ */ t("strong", { children: w }),
      " of ",
      /* @__PURE__ */ t("strong", { children: f })
    ] }),
    /* @__PURE__ */ p("div", { className: "ui-datatable-pagination-actions", children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => j(1),
          disabled: N <= 1,
          "aria-label": "First page",
          children: "First"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => j(N - 1),
          disabled: N <= 1,
          "aria-label": "Previous page",
          children: "Previous"
        }
      ),
      /* @__PURE__ */ p("span", { className: "ui-datatable-pagination-status", "aria-live": "polite", children: [
        "Page ",
        N,
        " of ",
        y
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => j(N + 1),
          disabled: N >= y,
          "aria-label": "Next page",
          children: "Next"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => j(y),
          disabled: N >= y,
          "aria-label": "Last page",
          children: "Last"
        }
      )
    ] })
  ] }) : null;
  return a.length ? e.length ? /* @__PURE__ */ p("div", { className: C, role: "region", "aria-label": "Data table", children: [
    k(
      /* @__PURE__ */ t("tbody", { children: b.map((x, S) => {
        const q = E ? (N - 1) * s + S : S;
        return /* @__PURE__ */ t("tr", { className: "ui-datatable-tr", children: a.map((z) => /* @__PURE__ */ t("td", { className: "ui-datatable-td", children: x[z.key] ?? "" }, z.key)) }, x.id != null ? String(x.id) : `row-${q}`);
      }) })
    ),
    U
  ] }) : /* @__PURE__ */ t("div", { className: C, role: "region", "aria-label": "Data table", children: k(
    /* @__PURE__ */ t("tbody", { children: /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: a.length, className: "ui-datatable-empty-cell", children: i }) }) })
  ) }) : /* @__PURE__ */ t("div", { className: C, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ t("p", { className: "ui-datatable-empty", children: i }) });
}
function Pe({
  label: a,
  error: e,
  type: n = "text",
  placeholder: i,
  disabled: o = !1,
  id: r,
  className: d = "",
  ...c
}) {
  const u = r || `ui-input-${F.useId().replace(/:/g, "")}`, s = e ? `${u}-error` : void 0, l = [
    "ui-input",
    e && "ui-input--error",
    o && "ui-input--disabled",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-input-wrapper", children: [
    a && /* @__PURE__ */ t("label", { htmlFor: u, className: "ui-input-label", children: a }),
    /* @__PURE__ */ t(
      "input",
      {
        id: u,
        type: n,
        className: l,
        placeholder: i,
        disabled: o,
        "aria-invalid": !!e,
        "aria-describedby": s,
        ...c
      }
    ),
    e && /* @__PURE__ */ t("span", { id: s, className: "ui-input-error", role: "alert", children: e })
  ] });
}
function la({ value: a, onChange: e, placeholder: n = "Select date", className: i = "" }) {
  const [o, r] = F.useState(!1), d = a ? new Date(a).toLocaleDateString() : "", c = ["ui-datepicker", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: c, children: [
    /* @__PURE__ */ t(
      Pe,
      {
        readOnly: !0,
        value: d,
        placeholder: n,
        onFocus: () => r(!0),
        onClick: () => r((u) => !u)
      }
    ),
    o && /* @__PURE__ */ p(Q, { children: [
      /* @__PURE__ */ t("div", { className: "ui-datepicker-overlay", onClick: () => r(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ t("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ t(Be, { value: a, onChange: (u) => {
        e == null || e(u), r(!1);
      } }) })
    ] })
  ] });
}
function ra({ open: a, onClose: e, title: n, children: i, footer: o, className: r = "" }) {
  const d = F.useRef(null);
  _(() => {
    if (!a) return;
    const u = (s) => {
      s.key === "Escape" && (e == null || e());
    };
    return document.addEventListener("keydown", u), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", u), document.body.style.overflow = "";
    };
  }, [a, e]);
  const c = (u) => {
    u.target === u.currentTarget && (e == null || e());
  };
  return a ? /* @__PURE__ */ t(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "ui-dialog-title" : void 0,
      onClick: c,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: d,
          className: `ui-dialog ${r}`,
          role: "document",
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ p("div", { className: "ui-dialog-content", children: [
              n && /* @__PURE__ */ t("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: n }),
              /* @__PURE__ */ t("div", { className: "ui-dialog-body", children: i }),
              o && /* @__PURE__ */ t("div", { className: "ui-dialog-footer", children: o })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: "ui-dialog-close",
                onClick: e,
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
function sa({ open: a, onClose: e, title: n, children: i, side: o = "right", className: r = "" }) {
  return _(() => (a && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [a]), a ? /* @__PURE__ */ p(Q, { children: [
    /* @__PURE__ */ t("div", { className: "ui-drawer-overlay", onClick: e, "aria-hidden": "true" }),
    /* @__PURE__ */ p("div", { className: `ui-drawer ui-drawer--${o} ${r}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      n && /* @__PURE__ */ t("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: n }),
      /* @__PURE__ */ t("div", { className: "ui-drawer-body", children: i }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-drawer-close", onClick: e, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function oa({
  trigger: a,
  items: e = [],
  align: n = "end",
  placement: i,
  size: o = "md",
  variant: r = "default",
  split: d = !1,
  primaryLabel: c = "Action",
  onPrimaryClick: u,
  splitButtonSize: s = "md",
  className: l = ""
}) {
  const [m, h] = W(!1), v = ne(null), $ = ie().replace(/:/g, ""), D = i || (d ? "bottom-end" : n === "start" ? "bottom-start" : "bottom-end");
  _(() => {
    if (!m) return;
    const f = (y) => {
      v.current && !v.current.contains(y.target) && h(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]), _(() => {
    if (!m) return;
    const f = (y) => {
      y.key === "Escape" && h(!1);
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [m]);
  const R = (f) => {
    var y;
    f.disabled || f.type === "header" || f.type === "divider" || ((y = f.onClick) == null || y.call(f), h(!1));
  }, M = (f) => {
    var A, N, j, b, g;
    if (!m) return;
    const y = (A = v.current) == null ? void 0 : A.querySelectorAll(".ui-dropdown-item:not(:disabled)"), B = y ? Array.from(y) : [], O = document.activeElement, I = B.indexOf(O);
    f.key === "ArrowDown" && I < B.length - 1 ? (f.preventDefault(), (N = B[I + 1]) == null || N.focus()) : f.key === "ArrowUp" && I > 0 ? (f.preventDefault(), (j = B[I - 1]) == null || j.focus()) : f.key === "Home" ? (f.preventDefault(), (b = B[0]) == null || b.focus()) : f.key === "End" && (f.preventDefault(), (g = B[B.length - 1]) == null || g.focus());
  }, P = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${D}`,
    `ui-dropdown-menu--size-${o}`,
    r === "dark" && "ui-dropdown-menu--dark"
  ].filter(Boolean).join(" "), C = () => e.map((f, y) => f.type === "divider" ? /* @__PURE__ */ t("li", { className: "ui-dropdown-sep", role: "separator", "aria-orientation": "horizontal" }, y) : f.type === "header" ? /* @__PURE__ */ t("li", { className: "ui-dropdown-header", role: "presentation", children: f.label }, y) : /* @__PURE__ */ t("li", { role: "none", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: ["ui-dropdown-item", f.active && "ui-dropdown-item--active"].filter(Boolean).join(" "),
      role: "menuitem",
      disabled: f.disabled,
      onClick: () => R(f),
      tabIndex: 0,
      children: f.label
    }
  ) }, y)), E = () => /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": !0, children: /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) });
  return d ? /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", "ui-dropdown--split", l].filter(Boolean).join(" "),
      ref: v,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ t(ge, { variant: "secondary", size: s, type: "button", onClick: u, children: c }),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: [
              "ui-dropdown-split-toggle",
              `ui-dropdown-split-toggle--${s}`
            ].join(" "),
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": $,
            onClick: () => h((f) => !f),
            children: [
              /* @__PURE__ */ t("span", { className: "ui-sr-only", children: "Open menu" }),
              /* @__PURE__ */ t(E, {})
            ]
          }
        ),
        m && /* @__PURE__ */ t("ul", { id: $, className: P, role: "menu", children: C() })
      ]
    }
  ) : /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", l].filter(Boolean).join(" "),
      ref: v,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => h((f) => !f),
            onKeyDown: (f) => {
              (f.key === "Enter" || f.key === " ") && (f.preventDefault(), h((y) => !y));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": $,
            tabIndex: 0,
            children: a
          }
        ),
        m && /* @__PURE__ */ t("ul", { id: $, className: P, role: "menu", children: C() })
      ]
    }
  );
}
function ca({ title: a = "No data", description: e, icon: n, children: i, className: o = "" }) {
  const r = ["ui-empty", o].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: r, role: "status", children: [
    n && /* @__PURE__ */ t("div", { className: "ui-empty-icon", children: n }),
    /* @__PURE__ */ t("h3", { className: "ui-empty-title", children: a }),
    e && /* @__PURE__ */ t("p", { className: "ui-empty-desc", children: e }),
    i && /* @__PURE__ */ t("div", { className: "ui-empty-actions", children: i })
  ] });
}
function ua({ label: a, error: e, hint: n, id: i, children: o, className: r = "" }) {
  const d = ["ui-field", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: d, children: [
    a && /* @__PURE__ */ t("label", { htmlFor: i, className: "ui-field-label", children: a }),
    o,
    n && /* @__PURE__ */ t("span", { className: "ui-field-hint", children: n }),
    e && /* @__PURE__ */ t("span", { className: "ui-field-error", role: "alert", children: e })
  ] });
}
function da({ trigger: a, content: e, className: n = "" }) {
  const [i, o] = W(!1), r = ["ui-hovercard", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "div",
    {
      className: r,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ t("div", { className: "ui-hovercard-trigger", children: a }),
        i && /* @__PURE__ */ t("div", { className: "ui-hovercard-content", children: e })
      ]
    }
  );
}
function ma({ left: a, right: e, children: n, className: i = "" }) {
  const o = ["ui-inputgroup", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, children: [
    a && /* @__PURE__ */ t("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: a }),
    /* @__PURE__ */ t("span", { className: "ui-inputgroup-input", children: n }),
    e && /* @__PURE__ */ t("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: e })
  ] });
}
function ha({ length: a = 6, value: e = "", onChange: n, className: i = "" }) {
  const o = ne([]), r = e.split("").concat(Array(a).fill("")).slice(0, a), d = (s, l) => {
    var h;
    const m = r.slice();
    m[s] = l.replace(/\D/g, "").slice(-1), n == null || n(m.join("")), l && s < a - 1 && ((h = o.current[s + 1]) == null || h.focus());
  }, c = (s, l) => {
    var m;
    l.key === "Backspace" && !r[s] && s > 0 && ((m = o.current[s - 1]) == null || m.focus());
  }, u = ["ui-inputotp", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: u, role: "group", "aria-label": "One-time code", children: r.map((s, l) => /* @__PURE__ */ t(
    "input",
    {
      ref: (m) => o.current[l] = m,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: s,
      onChange: (m) => d(l, m.target.value),
      onKeyDown: (m) => c(l, m),
      "aria-label": `Digit ${l + 1}`
    },
    l
  )) });
}
function Ye({
  href: a,
  onClick: e,
  active: n = !1,
  disabled: i = !1,
  icon: o,
  children: r,
  className: d = "",
  ...c
}) {
  const u = [
    "ui-navlink",
    n && "ui-navlink--active",
    i && "ui-navlink--disabled",
    d
  ].filter(Boolean).join(" "), s = /* @__PURE__ */ p(Q, { children: [
    o && /* @__PURE__ */ t("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: o }),
    /* @__PURE__ */ t("span", { className: "ui-navlink-text", children: r })
  ] });
  return a && !i ? /* @__PURE__ */ t(
    "a",
    {
      href: a,
      className: u,
      onClick: e,
      "aria-current": n ? "page" : void 0,
      ...c,
      children: s
    }
  ) : /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: u,
      onClick: i ? void 0 : e,
      disabled: i,
      "aria-current": n ? "page" : void 0,
      ...c,
      children: s
    }
  );
}
function pa({
  brand: a,
  nav: e,
  actions: n,
  variant: i = "default",
  sticky: o = !1,
  dense: r = !1,
  brandMark: d = !1,
  logo: c,
  logoSrc: u,
  logoAlt: s = "",
  logoPlaceholder: l = !1,
  mobileMenuOpen: m,
  onMobileMenuChange: h,
  className: v = ""
}) {
  const $ = ie().replace(/:/g, ""), [D, R] = W(!1), M = m !== void 0, P = M ? m : D, C = (N) => {
    M || R(N), h == null || h(N);
  }, E = c != null && c !== "" && c !== !1, f = !!u, y = l && !E && !f, B = d && !E && !f && !y, O = [
    "ui-navbar",
    `ui-navbar--${i}`,
    o && "ui-navbar--sticky",
    r && "ui-navbar--dense",
    v
  ].filter(Boolean).join(" "), I = [
    "ui-navbar-brand",
    B && "ui-navbar-brand--with-mark"
  ].filter(Boolean).join(" ");
  let A = null;
  return E ? A = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", children: c }) : f ? A = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", children: /* @__PURE__ */ t("img", { className: "ui-navbar-logo", src: u, alt: s }) }) : y && (A = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", "aria-hidden": "true", children: /* @__PURE__ */ t("span", { className: "ui-navbar-logo-placeholder", title: "Add logo via logoSrc or logo prop" }) })), /* @__PURE__ */ p("header", { className: O, role: "banner", children: [
    /* @__PURE__ */ p("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ p("div", { className: I, children: [
        A,
        a
      ] }),
      /* @__PURE__ */ t("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: e }),
      /* @__PURE__ */ t("div", { className: "ui-navbar-actions", children: n }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": P,
          "aria-controls": `ui-navbar-mobile-${$}`,
          "aria-label": "Toggle menu",
          onClick: () => C(!P),
          children: /* @__PURE__ */ t("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "div",
      {
        id: `ui-navbar-mobile-${$}`,
        className: "ui-navbar-mobile",
        hidden: !P,
        role: "navigation",
        "aria-label": "Mobile",
        children: /* @__PURE__ */ p("div", { className: "ui-navbar-mobile-inner", children: [
          e,
          n && /* @__PURE__ */ t("div", { className: "ui-navbar-mobile-actions", children: n })
        ] })
      }
    )
  ] });
}
function ba({
  value: a = 0,
  max: e = 100,
  variant: n = "default",
  size: i = "md",
  striped: o = !1,
  showLabel: r = !1,
  className: d = ""
}) {
  const c = e <= 0 ? 0 : Math.min(100, Math.max(0, Number(a) / e * 100)), u = ie().replace(/:/g, ""), s = r ? u : void 0;
  return /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-progress", `ui-progress--${i}`, d].filter(Boolean).join(" "),
      role: "progressbar",
      "aria-valuenow": Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": s,
      children: [
        r && /* @__PURE__ */ p("div", { className: "ui-progress-label", id: s, children: [
          Math.round(c),
          "%"
        ] }),
        /* @__PURE__ */ t("div", { className: "ui-progress-track", children: /* @__PURE__ */ t(
          "div",
          {
            className: [
              "ui-progress-bar",
              `ui-progress-bar--${n}`,
              o && "ui-progress-bar--striped"
            ].filter(Boolean).join(" "),
            style: { width: `${c}%` }
          }
        ) })
      ]
    }
  );
}
function fa({
  items: a = [],
  header: e,
  footer: n,
  collapsed: i = !1,
  onToggleCollapse: o,
  showCollapseButton: r = !0,
  position: d = "left",
  variant: c = "default",
  width: u = "normal",
  className: s = ""
}) {
  const l = [
    "ui-sidebar",
    `ui-sidebar--${c}`,
    `ui-sidebar--${d}`,
    `ui-sidebar--width-${u}`,
    i && "ui-sidebar--collapsed",
    s
  ].filter(Boolean).join(" "), m = !!(r && o);
  return /* @__PURE__ */ p("aside", { className: l, "aria-label": "Sidebar navigation", children: [
    !!(e || m) && /* @__PURE__ */ p(
      "div",
      {
        className: [
          "ui-sidebar-top",
          !e && m && "ui-sidebar-top--collapse-only"
        ].filter(Boolean).join(" "),
        children: [
          e ? /* @__PURE__ */ t("div", { className: "ui-sidebar-header", children: e }) : null,
          m ? /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: "ui-sidebar-collapse-btn",
              onClick: () => o(!i),
              "aria-expanded": !i,
              "aria-label": i ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ t("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ t("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ t("ul", { className: "ui-sidebar-list", children: a.map((v, $) => /* @__PURE__ */ t("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ t(
      Ye,
      {
        href: v.href,
        onClick: v.onClick,
        active: v.active,
        disabled: v.disabled,
        icon: v.icon,
        children: v.label
      }
    ) }, v.id ?? $)) }) }),
    n && /* @__PURE__ */ t("div", { className: "ui-sidebar-footer", children: n })
  ] });
}
function Na({ size: a = "md", className: e = "", label: n }) {
  return /* @__PURE__ */ t(
    "span",
    {
      className: ["ui-spinner", `ui-spinner--${a}`, e].filter(Boolean).join(" "),
      role: n ? "status" : "presentation",
      "aria-label": n || void 0,
      children: /* @__PURE__ */ t("span", { className: "ui-spinner-ring", "aria-hidden": !0 })
    }
  );
}
function va({ items: a = [], defaultTabId: e, onTabChange: n, className: i = "" }) {
  var s;
  const o = (s = a[0]) == null ? void 0 : s.id, [r, d] = W(e ?? o), c = K(
    (l) => {
      d(l), n == null || n(l);
    },
    [n]
  ), u = (l, m) => {
    if (l.key === "ArrowRight" || l.key === "ArrowDown") {
      l.preventDefault();
      const h = (m + 1) % a.length;
      c(a[h].id);
    } else if (l.key === "ArrowLeft" || l.key === "ArrowUp") {
      l.preventDefault();
      const h = (m - 1 + a.length) % a.length;
      c(a[h].id);
    } else l.key === "Home" ? (l.preventDefault(), c(a[0].id)) : l.key === "End" && (l.preventDefault(), c(a[a.length - 1].id));
  };
  return a.length ? /* @__PURE__ */ p("div", { className: ["ui-tabs", i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: "ui-tabs-list", role: "tablist", "aria-orientation": "horizontal", children: a.map((l, m) => {
      const h = l.id === r;
      return /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          role: "tab",
          id: `ui-tab-${l.id}`,
          "aria-selected": h,
          "aria-controls": `ui-tabpanel-${l.id}`,
          tabIndex: h ? 0 : -1,
          className: ["ui-tabs-tab", h && "ui-tabs-tab--active"].filter(Boolean).join(" "),
          onClick: () => c(l.id),
          onKeyDown: (v) => u(v, m),
          children: l.label
        },
        l.id
      );
    }) }),
    a.map((l) => /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `ui-tabpanel-${l.id}`,
        "aria-labelledby": `ui-tab-${l.id}`,
        hidden: l.id !== r,
        className: "ui-tabs-panel",
        tabIndex: 0,
        children: l.panel
      },
      l.id
    ))
  ] }) : null;
}
export {
  Ue as Accordion,
  We as Alert,
  He as AlertDialog,
  Ke as AspectRatio,
  Ve as Avatar,
  Xe as Badge,
  _e as Breadcrumb,
  ge as Button,
  qe as ButtonGroup,
  Be as Calendar,
  G as Card,
  Te as CardGroup,
  Ze as Carousel,
  Je as Chart,
  Qe as Checkbox,
  ze as Collapsible,
  ea as Combobox,
  aa as Command,
  ta as ContextMenu,
  na as DashboardPage,
  ia as DataTable,
  la as DatePicker,
  ra as Dialog,
  sa as Drawer,
  oa as DropdownMenu,
  ca as Empty,
  ua as Field,
  da as HoverCard,
  Pe as Input,
  ma as InputGroup,
  ha as InputOTP,
  Ye as NavLink,
  pa as Navbar,
  ba as Progress,
  fa as Sidebar,
  Na as Spinner,
  va as Tabs
};
//# sourceMappingURL=tri-ui-library.js.map
