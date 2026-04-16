import { jsx as a, jsxs as h, Fragment as Q } from "react/jsx-runtime";
import D, { useState as G, useEffect as X, useMemo as K, useCallback as H, useRef as ie, useId as z, useContext as ve, createContext as ye } from "react";
function Qe({ items: t = [], multiple: e = !1, disabled: n = !1, variant: i = "default", className: r = "" }) {
  const [l, d] = D.useState(e ? [] : null), c = (o) => e ? Array.isArray(l) && l.includes(o) : l === o, u = (o) => {
    if (n) return;
    const m = t[o];
    m != null && m.disabled || d(
      e ? (p) => p.includes(o) ? p.filter((b) => b !== o) : [...p, o] : (p) => p === o ? null : o
    );
  }, s = [
    "ui-accordion",
    `ui-accordion--${i}`,
    n && "ui-accordion--disabled",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: s, role: "region", "aria-label": "Accordion", children: t.map((o, m) => {
    const p = n || o.disabled;
    return /* @__PURE__ */ h("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => u(m),
          "aria-expanded": c(m),
          "aria-controls": `ui-accordion-panel-${m}`,
          "aria-disabled": p,
          id: `ui-accordion-trigger-${m}`,
          disabled: p,
          children: [
            /* @__PURE__ */ a("span", { className: "ui-accordion-trigger-text", children: o.title }),
            /* @__PURE__ */ a("span", { className: "ui-accordion-trigger-icon", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          id: `ui-accordion-panel-${m}`,
          role: "region",
          "aria-labelledby": `ui-accordion-trigger-${m}`,
          className: "ui-accordion-panel",
          hidden: !c(m),
          children: o.content
        }
      )
    ] }, m);
  }) });
}
function ze({
  type: t = "info",
  children: e,
  title: n,
  className: i = "",
  dismissible: r = !1,
  onDismiss: l,
  ...d
}) {
  const [c, u] = D.useState(!1), s = () => {
    u(!0), l == null || l();
  }, o = [
    "ui-alert",
    `ui-alert--${t}`,
    i
  ].filter(Boolean).join(" ");
  return c ? null : /* @__PURE__ */ h(
    "div",
    {
      className: o,
      role: "alert",
      "aria-live": "polite",
      ...d,
      children: [
        /* @__PURE__ */ h("div", { className: "ui-alert-content", children: [
          n && /* @__PURE__ */ a("div", { className: "ui-alert-title", children: n }),
          /* @__PURE__ */ a("div", { className: "ui-alert-message", children: e })
        ] }),
        r && /* @__PURE__ */ a(
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
function ea({
  open: t,
  onClose: e,
  title: n,
  description: i,
  confirmLabel: r = "OK",
  cancelLabel: l = "Cancel",
  onConfirm: d,
  showCancel: c = !0
}) {
  return t ? /* @__PURE__ */ a("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ h("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ a("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: n }),
    i && /* @__PURE__ */ a("p", { className: "ui-alertdialog-desc", children: i }),
    /* @__PURE__ */ h("div", { className: "ui-alertdialog-actions", children: [
      c && /* @__PURE__ */ a("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: e, children: l }),
      /* @__PURE__ */ a("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        d == null || d(), e == null || e();
      }, children: r })
    ] })
  ] }) }) : null;
}
function aa({ ratio: t = 16 / 9, children: e, className: n = "" }) {
  const i = ["ui-aspectratio", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: i, style: { aspectRatio: t }, children: e });
}
function ke(t) {
  const e = String(t).trim();
  if (!e) return "?";
  const n = e.split(/\s+/).filter(Boolean);
  if (n.length >= 2)
    return (n[0][0] + n[1][0]).toUpperCase();
  const i = n[0];
  return i.length <= 1 ? i.toUpperCase() : i.slice(0, 2).toUpperCase();
}
function we({ fallback: t, alt: e }) {
  return t != null && String(t).trim() ? String(t).trim() : e && String(e).trim() ? ke(e) : "?";
}
function ta({
  src: t,
  alt: e = "",
  fallback: n,
  placeholder: i,
  size: r = "md",
  shape: l = "circle",
  ring: d = !1,
  presence: c,
  className: u = ""
}) {
  const [s, o] = G(!1), [m, p] = G(!1);
  X(() => {
    if (!t) {
      o(!1), p(!1);
      return;
    }
    o(!1), p(!1);
  }, [t]);
  const b = K(() => we({ fallback: n, alt: e }), [n, e]), w = e || b, B = !!(t && String(t).trim()), T = B && !m, M = B && !m && !s, A = !B || m, E = ["ui-avatar-root", c ? "ui-avatar-root--has-presence" : "", u].filter(Boolean).join(" "), F = [
    "ui-avatar",
    `ui-avatar--${r}`,
    `ui-avatar--${l}`,
    d ? "ui-avatar--ring" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("span", { className: E, children: [
    /* @__PURE__ */ h("span", { className: F, role: "img", "aria-label": w || void 0, children: [
      T ? /* @__PURE__ */ a(
        "img",
        {
          src: t,
          alt: e,
          className: `ui-avatar-img${s ? " ui-avatar-img--visible" : ""}`,
          onLoad: () => o(!0),
          onError: () => {
            p(!0), o(!1);
          },
          draggable: !1
        },
        t
      ) : null,
      M ? /* @__PURE__ */ a("span", { className: "ui-avatar-placeholder", "aria-hidden": !0, children: i != null ? /* @__PURE__ */ a("span", { className: "ui-avatar-placeholder-custom", children: i }) : /* @__PURE__ */ a("span", { className: "ui-avatar-skeleton" }) }) : null,
      A ? /* @__PURE__ */ a("span", { className: "ui-avatar-fallback", children: b }) : null
    ] }),
    c ? /* @__PURE__ */ a("span", { className: `ui-avatar-presence ui-avatar-presence--${c}`, "aria-hidden": !0, title: c }) : null
  ] });
}
function na({ children: t, variant: e = "default", className: n = "" }) {
  const i = ["ui-badge", `ui-badge--${e}`, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("span", { className: i, children: t });
}
function ia({ items: t = [], separator: e = "/", className: n = "" }) {
  const i = ["ui-breadcrumb", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("nav", { className: i, "aria-label": "Breadcrumb", children: /* @__PURE__ */ a("ol", { className: "ui-breadcrumb-list", children: t.map((r, l) => /* @__PURE__ */ h("li", { className: "ui-breadcrumb-item", children: [
    l > 0 && /* @__PURE__ */ a("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: e }),
    r.href ? /* @__PURE__ */ a("a", { href: r.href, className: "ui-breadcrumb-link", children: r.label }) : /* @__PURE__ */ a("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: r.label })
  ] }, l)) }) });
}
function xe({
  variant: t = "primary",
  size: e = "md",
  disabled: n = !1,
  onClick: i,
  children: r,
  leftIcon: l,
  rightIcon: d,
  type: c = "button",
  className: u = "",
  ariaLabel: s,
  ...o
}) {
  const m = r != null && r !== "", p = [
    "ui-btn",
    `ui-btn--${t}`,
    `ui-btn--${e}`,
    n && "ui-btn--disabled",
    l && "ui-btn--has-left-icon",
    d && "ui-btn--has-right-icon",
    (l || d) && !m && "ui-btn--icon-only",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "button",
    {
      type: c,
      className: p,
      disabled: n,
      onClick: i,
      "aria-label": s,
      "aria-disabled": n,
      ...o,
      children: [
        l && /* @__PURE__ */ a("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: l }),
        m && /* @__PURE__ */ a("span", { className: "ui-btn-label", children: r }),
        d && /* @__PURE__ */ a("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: d })
      ]
    }
  );
}
function la({ children: t, className: e = "" }) {
  const n = ["ui-buttongroup", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: n, role: "group", children: t });
}
function U(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function ce(t, e) {
  return !t || !e ? !1 : t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function $e(t, e) {
  const n = new Date(t, e, 1);
  return { year: n.getFullYear(), month: n.getMonth() };
}
function ue(t, e, n) {
  return $e(t, e + n);
}
function Be(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), n = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - n);
  const i = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e - i) / 864e5 + 1) / 7);
}
function je(t, e, n) {
  const i = U(t).getTime();
  return !(e && i < U(e).getTime() || n && i > U(n).getTime());
}
function De(t, e, n) {
  const r = (new Date(t, e, 1).getDay() - n + 7) % 7;
  new Date(t, e + 1, 0).getDate();
  const l = [], d = new Date(t, e, 1 - r);
  for (let c = 0; c < 42; c++) {
    const u = new Date(d);
    u.setDate(d.getDate() + c), l.push({
      date: u,
      outside: u.getMonth() !== e
    });
  }
  for (; l.length > 35 && l.slice(-7).every((c) => c.outside); )
    l.splice(-7, 7);
  return l;
}
function Me(t) {
  const e = [];
  for (let n = 0; n < t.length; n += 7)
    e.push(t.slice(n, n + 7));
  return e;
}
function Le({
  value: t,
  onChange: e,
  className: n = "",
  minDate: i,
  maxDate: r,
  isDateDisabled: l,
  weekStartsOn: d = 0,
  showOutsideDays: c = !0,
  showWeekNumbers: u = !1,
  locale: s,
  showTodayButton: o = !1
}) {
  const m = ["ui-calendar", n].filter(Boolean).join(" "), p = U(t || /* @__PURE__ */ new Date()), [b, w] = G(() => ({ year: p.getFullYear(), month: p.getMonth() }));
  X(() => {
    if (!t) return;
    const g = U(t);
    w((L) => L.year === g.getFullYear() && L.month === g.getMonth() ? L : { year: g.getFullYear(), month: g.getMonth() });
  }, [t]);
  const B = d === 1 ? 1 : 0, T = K(
    () => De(b.year, b.month, B),
    [b.year, b.month, B]
  ), M = K(() => Me(T), [T]), A = K(
    () => new Date(b.year, b.month).toLocaleString(s || void 0, { month: "long", year: "numeric" }),
    [b.year, b.month, s]
  ), E = K(() => {
    const g = [], L = new Date(2024, 0, 1);
    for (let f = 0; f < 7; f++) {
      const v = (B + f) % 7, k = new Date(L), $ = (v - k.getDay() + 7) % 7;
      k.setDate(1 + $), g.push(k.toLocaleString(s || void 0, { weekday: "short" }));
    }
    return g;
  }, [s, B]), F = H(() => {
    w((g) => ue(g.year, g.month, -1));
  }, []), N = H(() => {
    w((g) => ue(g.year, g.month, 1));
  }, []), y = H(() => {
    const g = /* @__PURE__ */ new Date();
    w({ year: g.getFullYear(), month: g.getMonth() }), e == null || e(U(g));
  }, [e]), j = H(
    (g) => !!(!je(g, i, r) || typeof l == "function" && l(g)),
    [i, r, l]
  ), W = H(
    (g) => {
      j(g) || (e == null || e(U(g)), (g.getMonth() !== b.month || g.getFullYear() !== b.year) && w({ year: g.getFullYear(), month: g.getMonth() }));
    },
    [e, j, b.month, b.year]
  ), S = U(/* @__PURE__ */ new Date()), R = t ? U(t) : null;
  return /* @__PURE__ */ h("div", { className: m, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ h("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ a("button", { type: "button", className: "ui-calendar-nav-btn", onClick: F, "aria-label": "Previous month", children: "←" }),
      /* @__PURE__ */ a("span", { className: "ui-calendar-title", children: A }),
      /* @__PURE__ */ a("button", { type: "button", className: "ui-calendar-nav-btn", onClick: N, "aria-label": "Next month", children: "→" })
    ] }),
    o ? /* @__PURE__ */ a("div", { className: "ui-calendar-toolbar", children: /* @__PURE__ */ a("button", { type: "button", className: "ui-calendar-today-btn", onClick: y, children: "Today" }) }) : null,
    /* @__PURE__ */ h(
      "div",
      {
        className: ["ui-calendar-grid", u ? "ui-calendar-grid--weeks" : ""].filter(Boolean).join(" "),
        role: "grid",
        "aria-readonly": "true",
        children: [
          u ? /* @__PURE__ */ a("div", { className: "ui-calendar-weeknum-h", "aria-hidden": "true", children: "Wk" }) : null,
          E.map((g) => /* @__PURE__ */ a("div", { className: "ui-calendar-weekday", role: "columnheader", children: g }, g)),
          M.map((g, L) => /* @__PURE__ */ h(D.Fragment, { children: [
            u ? /* @__PURE__ */ a("div", { className: "ui-calendar-weeknum", "aria-hidden": "true", children: Be(g[0].date) }) : null,
            g.map((f, v) => {
              const { date: k, outside: $ } = f, O = ce(k, S), x = R && ce(k, R), I = j(k);
              return $ && !c ? /* @__PURE__ */ a(
                "div",
                {
                  className: "ui-calendar-day ui-calendar-day--empty",
                  role: "gridcell"
                },
                `${L}-${v}`
              ) : /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  role: "gridcell",
                  disabled: I,
                  className: [
                    "ui-calendar-day",
                    $ ? "ui-calendar-day--outside" : "",
                    O ? "ui-calendar-day--today" : "",
                    x ? "ui-calendar-day--selected" : "",
                    I ? "ui-calendar-day--disabled" : ""
                  ].filter(Boolean).join(" "),
                  onClick: () => W(k),
                  "aria-label": k.toLocaleDateString(s || void 0, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  }),
                  "aria-selected": x ? "true" : "false",
                  children: k.getDate()
                },
                `${L}-${v}`
              );
            })
          ] }, L))
        ]
      }
    )
  ] });
}
function P(...t) {
  return t.filter(Boolean).join(" ");
}
function Ce({
  children: t,
  title: e,
  footer: n,
  className: i = "",
  variant: r = "outlined",
  color: l,
  borderColor: d,
  ...c
}) {
  const u = P(
    "ui-card",
    `ui-card--${r}`,
    l && `ui-card--bg-${l}`,
    d && `ui-card--border-${d}`,
    i
  ), s = e != null || n != null ? /* @__PURE__ */ h(Q, { children: [
    e != null && /* @__PURE__ */ a(de, { children: typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ a("h3", { className: "ui-card-title", children: e }) : e }),
    /* @__PURE__ */ a(me, { children: t }),
    n != null && /* @__PURE__ */ a(he, { children: n })
  ] }) : t;
  return /* @__PURE__ */ a("div", { className: u, ...c, children: s });
}
function de({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-header", e), children: t });
}
function me({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-body", e), children: t });
}
function he({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-footer", e), children: t });
}
function Fe({ children: t, className: e = "", as: n = "h3", ...i }) {
  return /* @__PURE__ */ a(n, { className: P("ui-card-title", e), ...i, children: t });
}
function Ie({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("p", { className: P("ui-card-subtitle", e), children: t });
}
function Ee({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-text", e), children: t });
}
function Se({ children: t, className: e = "", href: n = "#", ...i }) {
  return /* @__PURE__ */ a("a", { className: P("ui-card-link", e), href: n, ...i, children: t });
}
function Re({ src: t, alt: e = "", position: n = "top", className: i = "" }) {
  return /* @__PURE__ */ a(
    "img",
    {
      src: t,
      alt: e,
      className: P("ui-card-img", n && `ui-card-img--${n}`, i)
    }
  );
}
function _e({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-img-wrap", e), children: t });
}
function Te({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-img-overlay", e), children: t });
}
function Ae({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("ul", { className: P("ui-card-list-group", e), children: t });
}
function Pe({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("li", { className: P("ui-card-list-group-item", e), children: t });
}
function We({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: P("ui-card-group", e), children: t });
}
const Y = Ce;
Y.Header = de;
Y.Body = me;
Y.Footer = he;
Y.Title = Fe;
Y.Subtitle = Ie;
Y.Text = Ee;
Y.Link = Se;
Y.Img = Re;
Y.ImgOverlayWrap = _e;
Y.ImgOverlay = Te;
Y.ListGroup = Ae;
Y.ListGroupItem = Pe;
Y.Group = We;
function ra({ children: t, className: e = "" }) {
  const [n, i] = D.useState(0), r = D.Children.toArray(t), l = r.length;
  return /* @__PURE__ */ h("div", { className: `ui-carousel ${e}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ a("div", { className: "ui-carousel-track", style: { transform: `translateX(-${n * 100}%)` }, children: r.map((d, c) => /* @__PURE__ */ a("div", { className: "ui-carousel-slide", children: d }, c)) }),
    l > 1 && /* @__PURE__ */ a("div", { className: "ui-carousel-dots", children: r.map((d, c) => /* @__PURE__ */ a(
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
const J = 280, te = 120, C = { top: 8, right: 8, bottom: 26, left: 40 };
function Ye(t) {
  return typeof t == "number" && Number.isFinite(t) ? String(t) : String(t ?? "");
}
function sa({
  data: t = [],
  type: e = "bar",
  className: n = "",
  formatValue: i = Ye,
  minValue: r,
  showGrid: l = !0,
  showYAxis: d = !0,
  yTickCount: c = 4
}) {
  var g, L;
  const u = ie(null), [s, o] = G(null), m = ["ui-chart", `ui-chart--${e}`, n].filter(Boolean).join(" "), p = J - C.left - C.right, b = te - C.top - C.bottom, { maxV: w, minV: B, ticks: T, points: M, bars: A } = K(() => {
    const f = t.map((_) => Number(_.value)).filter((_) => Number.isFinite(_)), v = f.length ? Math.max(...f) : 1, k = f.length ? Math.min(...f) : 0, $ = typeof r == "number" && Number.isFinite(r) ? r : e === "line" ? Math.min(k, 0) : 0, O = Math.max(v, $ + 1e-6) * 1.02, x = O - $ || 1, I = Math.max(2, Math.min(8, c)), q = [];
    for (let _ = 0; _ < I; _++) {
      const V = $ + x * _ / (I - 1);
      q.push(V);
    }
    const ee = t.length || 1, Z = p / ee, le = (_) => C.top + b - (Number(_) - $) / x * b, be = t.map((_, V) => {
      const ne = C.left + Z * V + Z / 2, ae = le(_.value);
      return { x: ne, y: ae, i: V, d: _ };
    }), Ne = t.map((_, V) => {
      const ne = C.left + Z * V + Z / 2, ae = Math.max(6, Z * 0.52), re = C.top + b, se = le(_.value), oe = Math.min(re, se), ge = Math.max(re, se);
      return { x: ne - ae / 2, w: ae, yTop: oe, h: Math.max(ge - oe, 2), i: V, d: _ };
    });
    return { maxV: O, minV: $, ticks: q, points: be, bars: Ne };
  }, [t, p, b, r, e, c]), E = K(() => e !== "line" || !M.length ? "" : M.map((f, v) => `${v === 0 ? "M" : "L"} ${f.x} ${f.y}`).join(" "), [e, M]), F = K(() => {
    if (!t.length) return "Empty chart";
    const f = t.map((v) => `${v.label} ${i(v.value)}`);
    return `${e} chart: ${f.join(", ")}`;
  }, [t, i, e]), N = H((f, v) => {
    const k = u.current;
    if (!k) return;
    const $ = k.getBoundingClientRect(), O = f.clientX - $.left, x = f.clientY - $.top;
    o({ x: O, y: x, i: v });
  }, []), y = H((f) => {
    o((v) => {
      if (!v) return v;
      const k = u.current;
      if (!k) return v;
      const $ = k.getBoundingClientRect();
      return { ...v, x: f.clientX - $.left, y: f.clientY - $.top };
    });
  }, []), j = H(() => o(null), []), W = s && t[s.i] ? t[s.i] : null, S = 56, R = s ? (() => {
    var O, x;
    const f = ((O = u.current) == null ? void 0 : O.offsetWidth) ?? J, v = ((x = u.current) == null ? void 0 : x.offsetHeight) ?? te, k = Math.min(Math.max(s.x, S), Math.max(S, f - S)), $ = Math.min(Math.max(s.y, 24), v - 8);
    return { left: k, top: $ };
  })() : void 0;
  return t.length ? /* @__PURE__ */ a("div", { className: m, role: "img", "aria-label": F, children: /* @__PURE__ */ h(
    "div",
    {
      className: "ui-chart-frame",
      ref: u,
      onMouseLeave: j,
      onBlur: j,
      children: [
        /* @__PURE__ */ h(
          "svg",
          {
            className: "ui-chart-svg",
            viewBox: `0 0 ${J} ${te}`,
            preserveAspectRatio: "xMidYMid meet",
            "aria-hidden": "true",
            children: [
              l ? T.map((f, v) => {
                const k = C.top + b - (f - B) / (w - B || 1) * b;
                return /* @__PURE__ */ a(
                  "line",
                  {
                    className: "ui-chart-gridline",
                    x1: C.left,
                    x2: J - C.right,
                    y1: k,
                    y2: k
                  },
                  `g-${v}`
                );
              }) : null,
              d ? T.map((f, v) => {
                const k = C.top + b - (f - B) / (w - B || 1) * b;
                return /* @__PURE__ */ a(
                  "text",
                  {
                    className: "ui-chart-axis-y",
                    x: C.left - 8,
                    y: k + 4,
                    textAnchor: "end",
                    children: i(f)
                  },
                  `y-${v}`
                );
              }) : null,
              /* @__PURE__ */ a(
                "line",
                {
                  className: "ui-chart-axis-x",
                  x1: C.left,
                  x2: J - C.right,
                  y1: C.top + b,
                  y2: C.top + b
                }
              ),
              t.map((f, v) => {
                const k = p / t.length, $ = C.left + k * v + k / 2;
                return /* @__PURE__ */ a("text", { className: "ui-chart-axis-x-label", x: $, y: te - 6, textAnchor: "middle", children: f.label }, `xl-${v}`);
              }),
              e === "bar" ? A.map((f) => /* @__PURE__ */ h("g", { children: [
                /* @__PURE__ */ a(
                  "rect",
                  {
                    className: "ui-chart-hit",
                    x: f.x,
                    y: f.yTop,
                    width: f.w,
                    height: f.h,
                    onMouseEnter: (v) => N(v, f.i),
                    onMouseMove: y
                  }
                ),
                /* @__PURE__ */ a(
                  "rect",
                  {
                    className: "ui-chart-bar-fill",
                    x: f.x,
                    y: f.yTop,
                    width: f.w,
                    height: f.h,
                    pointerEvents: "none"
                  }
                )
              ] }, `b-${f.i}`)) : null,
              e === "line" ? /* @__PURE__ */ h(Q, { children: [
                /* @__PURE__ */ a("path", { className: "ui-chart-line-area", d: `${E} L ${(g = M[M.length - 1]) == null ? void 0 : g.x} ${C.top + b} L ${(L = M[0]) == null ? void 0 : L.x} ${C.top + b} Z` }),
                /* @__PURE__ */ a("path", { className: "ui-chart-line-stroke", d: E, fill: "none", pointerEvents: "none" }),
                M.map((f) => /* @__PURE__ */ a(
                  "circle",
                  {
                    className: "ui-chart-point-hit",
                    cx: f.x,
                    cy: f.y,
                    r: 10,
                    onMouseEnter: (v) => N(v, f.i),
                    onMouseMove: y
                  },
                  `hit-${f.i}`
                )),
                M.map((f) => /* @__PURE__ */ a(
                  "circle",
                  {
                    className: "ui-chart-point-dot",
                    cx: f.x,
                    cy: f.y,
                    r: (s == null ? void 0 : s.i) === f.i ? 4 : 3,
                    pointerEvents: "none"
                  },
                  `dot-${f.i}`
                ))
              ] }) : null
            ]
          }
        ),
        W && R ? /* @__PURE__ */ h(
          "div",
          {
            className: "ui-chart-tooltip",
            style: {
              left: R.left,
              top: R.top,
              transform: "translate(-50%, calc(-100% - 10px))"
            },
            role: "tooltip",
            children: [
              /* @__PURE__ */ a("span", { className: "ui-chart-tooltip-label", children: W.label }),
              /* @__PURE__ */ a("span", { className: "ui-chart-tooltip-value", children: i(W.value) }),
              W.hint ? /* @__PURE__ */ a("span", { className: "ui-chart-tooltip-hint", children: W.hint }) : null
            ]
          }
        ) : null
      ]
    }
  ) }) : /* @__PURE__ */ a("div", { className: m, role: "img", "aria-label": "Empty chart", children: /* @__PURE__ */ a("p", { className: "ui-chart-empty", children: "No data" }) });
}
function oa({
  checked: t = !1,
  onChange: e,
  disabled: n = !1,
  label: i,
  id: r,
  className: l = "",
  indeterminate: d,
  ...c
}) {
  const u = r || `ui-checkbox-${D.useId().replace(/:/g, "")}`, s = D.useRef(null);
  D.useEffect(() => {
    s.current && (s.current.indeterminate = !!d);
  }, [d]);
  const o = [
    "ui-checkbox-wrapper",
    n && "ui-checkbox-wrapper--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ h("label", { className: "ui-checkbox-label", htmlFor: u, children: [
    /* @__PURE__ */ a(
      "input",
      {
        ref: s,
        id: u,
        type: "checkbox",
        className: "ui-checkbox",
        checked: t,
        onChange: e,
        disabled: n,
        "aria-checked": d ? "mixed" : t,
        "aria-disabled": n,
        ...c
      }
    ),
    /* @__PURE__ */ a("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
    i && /* @__PURE__ */ a("span", { className: "ui-checkbox-text", children: i })
  ] }) });
}
function ca({ open: t, defaultOpen: e = !1, onOpenChange: n, trigger: i, children: r, className: l = "" }) {
  const [d, c] = D.useState(e), u = t !== void 0, s = u ? t : d, o = (p) => {
    u || c(p), n == null || n(p);
  }, m = ["ui-collapsible", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: m, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => o(!s),
        "aria-expanded": s,
        children: i
      }
    ),
    /* @__PURE__ */ a("div", { className: "ui-collapsible-content", hidden: !s, children: r })
  ] });
}
function ua({ options: t = [], value: e, onChange: n, placeholder: i = "Select...", className: r = "" }) {
  const [l, d] = G(!1), [c, u] = G(""), s = t.filter((p) => p.label.toLowerCase().includes(c.toLowerCase())), o = t.find((p) => p.value === e), m = ["ui-combobox", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: m, children: [
    /* @__PURE__ */ a("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ a(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: l ? c : (o == null ? void 0 : o.label) ?? "",
        onChange: (p) => {
          u(p.target.value), d(!0);
        },
        onFocus: () => d(!0),
        onBlur: () => setTimeout(() => d(!1), 150),
        placeholder: i,
        role: "combobox",
        "aria-expanded": l,
        "aria-autocomplete": "list"
      }
    ) }),
    l && /* @__PURE__ */ a("ul", { className: "ui-combobox-list", role: "listbox", children: s.map((p) => /* @__PURE__ */ a(
      "li",
      {
        role: "option",
        "aria-selected": e === p.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          n == null || n(p.value), d(!1), u("");
        },
        children: p.label
      },
      p.value
    )) })
  ] });
}
function da({ children: t, placeholder: e = "Search...", className: n = "" }) {
  const i = ["ui-command", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: i, role: "command", children: [
    /* @__PURE__ */ a("input", { type: "text", className: "ui-command-input", placeholder: e }),
    /* @__PURE__ */ a("div", { className: "ui-command-list", children: t })
  ] });
}
function ma({ children: t, items: e = [], onOpenChange: n }) {
  const [i, r] = D.useState(!1), [l, d] = D.useState({ x: 0, y: 0 }), c = D.useRef(null);
  return D.useEffect(() => {
    const u = (o) => {
      o.button === 2 && (o.preventDefault(), d({ x: o.clientX, y: o.clientY }), r(!0), n == null || n(!0));
    }, s = c.current;
    return s == null || s.addEventListener("contextmenu", u), () => s == null ? void 0 : s.removeEventListener("contextmenu", u);
  }, [n]), D.useEffect(() => {
    if (!i) return;
    const u = () => {
      r(!1), n == null || n(!1);
    };
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  }, [i, n]), /* @__PURE__ */ h("div", { ref: c, className: "ui-contextmenu-wrapper", children: [
    t,
    i && /* @__PURE__ */ a(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: l.x, top: l.y },
        role: "menu",
        children: e.map((u, s) => /* @__PURE__ */ a("li", { role: "none", children: /* @__PURE__ */ a("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: u.onClick, children: u.label }) }, s))
      }
    )
  ] });
}
function ha({
  navbar: t,
  sidebar: e,
  children: n,
  sidebarCollapsed: i = !1,
  mainWidth: r = "fluid",
  fullHeight: l = !0,
  className: d = ""
}) {
  const c = [
    "ui-dashboard",
    l && "ui-dashboard--full-height",
    i && "ui-dashboard--sidebar-collapsed",
    d
  ].filter(Boolean).join(" "), u = [
    "ui-dashboard-main",
    r === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: c, children: [
    t && /* @__PURE__ */ a("div", { className: "ui-dashboard-navbar", children: t }),
    /* @__PURE__ */ h("div", { className: "ui-dashboard-body", children: [
      e && /* @__PURE__ */ a("div", { className: "ui-dashboard-sidebar-wrap", children: e }),
      /* @__PURE__ */ a("main", { className: u, role: "main", children: /* @__PURE__ */ a("div", { className: "ui-dashboard-main-inner", children: n }) })
    ] })
  ] });
}
function Oe() {
  return /* @__PURE__ */ h("svg", { className: "ui-datatable-page-btn__icon", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: [
    /* @__PURE__ */ a(
      "polyline",
      {
        points: "11 7 6 12 11 17",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ a(
      "polyline",
      {
        points: "18 7 13 12 18 17",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function Ge() {
  return /* @__PURE__ */ a("svg", { className: "ui-datatable-page-btn__icon", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: /* @__PURE__ */ a(
    "polyline",
    {
      points: "15 18 9 12 15 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Ue() {
  return /* @__PURE__ */ a("svg", { className: "ui-datatable-page-btn__icon", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: /* @__PURE__ */ a(
    "polyline",
    {
      points: "9 18 15 12 9 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function He() {
  return /* @__PURE__ */ h("svg", { className: "ui-datatable-page-btn__icon", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: [
    /* @__PURE__ */ a(
      "polyline",
      {
        points: "13 7 18 12 13 17",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ a(
      "polyline",
      {
        points: "6 7 11 12 6 17",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function pa({
  columns: t = [],
  data: e = [],
  className: n = "",
  emptyMessage: i = "No data",
  size: r = "md",
  variant: l = "default",
  striped: d = !1,
  responsive: c = "always",
  responsiveBreakpoint: u = "md",
  pageSize: s = 0,
  page: o,
  defaultPage: m = 1,
  onPageChange: p
}) {
  const w = (/* @__PURE__ */ new Set(["sm", "md", "lg", "xl", "xxl"])).has(u) ? u : "md", B = c === !1 || c === "never", T = c === "breakpoint", M = !B && !T && (c === !0 || c === "always" || c == null), A = B ? "ui-datatable--scroll-never" : T ? `ui-datatable--scroll-below-${w}` : "ui-datatable--scroll-always", E = [
    "ui-datatable",
    r === "sm" && "ui-datatable--sm",
    l === "dark" && "ui-datatable--dark",
    d === "rows" && "ui-datatable--striped-rows",
    d === "columns" && "ui-datatable--striped-cols",
    d === "both" && "ui-datatable--striped-rows ui-datatable--striped-cols",
    n
  ].filter(Boolean).join(" "), F = typeof s == "number" && s > 0, N = e.length, y = F ? Math.max(1, Math.ceil(N / s)) : 1, j = typeof o == "number" && typeof p == "function", [W, S] = G(() => Math.max(1, m)), g = Math.min(Math.max(1, Number(j ? o : W) || 1), y);
  X(() => {
    !F || j || S((x) => Math.min(Math.max(1, x), y));
  }, [F, j, y]);
  const L = H(
    (x) => {
      const I = Math.min(Math.max(1, x), y);
      j ? p(I) : S(I);
    },
    [j, p, y]
  ), { visibleRows: f, rangeStart: v, rangeEnd: k } = K(() => {
    if (!F)
      return {
        visibleRows: e,
        rangeStart: N > 0 ? 1 : 0,
        rangeEnd: N
      };
    const x = (g - 1) * s, I = Math.min(x + s, N);
    return {
      visibleRows: e.slice(x, I),
      rangeStart: N === 0 ? 0 : x + 1,
      rangeEnd: I
    };
  }, [e, F, s, g, N]), $ = (x) => /* @__PURE__ */ a("div", { className: ["ui-datatable-scroll", A].filter(Boolean).join(" "), children: /* @__PURE__ */ h("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: t.map((I) => /* @__PURE__ */ a("th", { scope: "col", className: "ui-datatable-th", children: I.header }, I.key)) }) }),
    x
  ] }) }), O = F && N > 0 ? /* @__PURE__ */ h("nav", { className: "ui-datatable-pagination", "aria-label": "Table pagination", children: [
    /* @__PURE__ */ h("p", { className: "ui-datatable-pagination-summary", children: [
      "Showing ",
      /* @__PURE__ */ a("strong", { children: v }),
      "–",
      /* @__PURE__ */ a("strong", { children: k }),
      " of ",
      /* @__PURE__ */ a("strong", { children: N })
    ] }),
    /* @__PURE__ */ h("div", { className: "ui-datatable-pagination-actions", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(1),
          disabled: g <= 1,
          "aria-label": "First page",
          title: "First page",
          children: /* @__PURE__ */ a(Oe, {})
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(g - 1),
          disabled: g <= 1,
          "aria-label": "Previous page",
          title: "Previous page",
          children: /* @__PURE__ */ a(Ge, {})
        }
      ),
      /* @__PURE__ */ h("span", { className: "ui-datatable-pagination-status", "aria-live": "polite", children: [
        "Page ",
        g,
        " of ",
        y
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(g + 1),
          disabled: g >= y,
          "aria-label": "Next page",
          title: "Next page",
          children: /* @__PURE__ */ a(Ue, {})
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(y),
          disabled: g >= y,
          "aria-label": "Last page",
          title: "Last page",
          children: /* @__PURE__ */ a(He, {})
        }
      )
    ] })
  ] }) : null;
  return t.length ? e.length ? /* @__PURE__ */ h("div", { className: E, role: "region", "aria-label": "Data table", children: [
    $(
      /* @__PURE__ */ a("tbody", { children: f.map((x, I) => {
        const q = F ? (g - 1) * s + I : I;
        return /* @__PURE__ */ a("tr", { className: "ui-datatable-tr", children: t.map((ee) => /* @__PURE__ */ a("td", { className: "ui-datatable-td", children: x[ee.key] ?? "" }, ee.key)) }, x.id != null ? String(x.id) : `row-${q}`);
      }) })
    ),
    O
  ] }) : /* @__PURE__ */ a("div", { className: E, role: "region", "aria-label": "Data table", children: $(
    /* @__PURE__ */ a("tbody", { children: /* @__PURE__ */ a("tr", { children: /* @__PURE__ */ a("td", { colSpan: t.length, className: "ui-datatable-empty-cell", children: i }) }) })
  ) }) : /* @__PURE__ */ a("div", { className: E, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ a("p", { className: "ui-datatable-empty", children: i }) });
}
function Ke({
  label: t,
  error: e,
  type: n = "text",
  placeholder: i,
  disabled: r = !1,
  id: l,
  className: d = "",
  ...c
}) {
  const u = l || `ui-input-${D.useId().replace(/:/g, "")}`, s = e ? `${u}-error` : void 0, o = [
    "ui-input",
    e && "ui-input--error",
    r && "ui-input--disabled",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: "ui-input-wrapper", children: [
    t && /* @__PURE__ */ a("label", { htmlFor: u, className: "ui-input-label", children: t }),
    /* @__PURE__ */ a(
      "input",
      {
        id: u,
        type: n,
        className: o,
        placeholder: i,
        disabled: r,
        "aria-invalid": !!e,
        "aria-describedby": s,
        ...c
      }
    ),
    e && /* @__PURE__ */ a("span", { id: s, className: "ui-input-error", role: "alert", children: e })
  ] });
}
function fa({ value: t, onChange: e, placeholder: n = "Select date", className: i = "" }) {
  const [r, l] = D.useState(!1), d = t ? new Date(t).toLocaleDateString() : "", c = ["ui-datepicker", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: c, children: [
    /* @__PURE__ */ a(
      Ke,
      {
        readOnly: !0,
        value: d,
        placeholder: n,
        onFocus: () => l(!0),
        onClick: () => l((u) => !u)
      }
    ),
    r && /* @__PURE__ */ h(Q, { children: [
      /* @__PURE__ */ a("div", { className: "ui-datepicker-overlay", onClick: () => l(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ a("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ a(Le, { value: t, onChange: (u) => {
        e == null || e(u), l(!1);
      } }) })
    ] })
  ] });
}
function ba({ open: t, onClose: e, title: n, children: i, footer: r, className: l = "" }) {
  const d = D.useRef(null);
  X(() => {
    if (!t) return;
    const u = (s) => {
      s.key === "Escape" && (e == null || e());
    };
    return document.addEventListener("keydown", u), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", u), document.body.style.overflow = "";
    };
  }, [t, e]);
  const c = (u) => {
    u.target === u.currentTarget && (e == null || e());
  };
  return t ? /* @__PURE__ */ a(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "ui-dialog-title" : void 0,
      onClick: c,
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: d,
          className: `ui-dialog ${l}`,
          role: "document",
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ h("div", { className: "ui-dialog-content", children: [
              n && /* @__PURE__ */ a("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: n }),
              /* @__PURE__ */ a("div", { className: "ui-dialog-body", children: i }),
              r && /* @__PURE__ */ a("div", { className: "ui-dialog-footer", children: r })
            ] }),
            /* @__PURE__ */ a(
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
function Na({ open: t, onClose: e, title: n, children: i, side: r = "right", className: l = "" }) {
  return X(() => (t && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [t]), t ? /* @__PURE__ */ h(Q, { children: [
    /* @__PURE__ */ a("div", { className: "ui-drawer-overlay", onClick: e, "aria-hidden": "true" }),
    /* @__PURE__ */ h("div", { className: `ui-drawer ui-drawer--${r} ${l}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      n && /* @__PURE__ */ a("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: n }),
      /* @__PURE__ */ a("div", { className: "ui-drawer-body", children: i }),
      /* @__PURE__ */ a("button", { type: "button", className: "ui-drawer-close", onClick: e, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function ga({
  trigger: t,
  items: e = [],
  align: n = "end",
  placement: i,
  size: r = "md",
  variant: l = "default",
  split: d = !1,
  primaryLabel: c = "Action",
  onPrimaryClick: u,
  splitButtonSize: s = "md",
  className: o = ""
}) {
  const [m, p] = G(!1), b = ie(null), w = z().replace(/:/g, ""), B = i || (d ? "bottom-end" : n === "start" ? "bottom-start" : "bottom-end");
  X(() => {
    if (!m) return;
    const N = (y) => {
      b.current && !b.current.contains(y.target) && p(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [m]), X(() => {
    if (!m) return;
    const N = (y) => {
      y.key === "Escape" && p(!1);
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [m]);
  const T = (N) => {
    var y;
    N.disabled || N.type === "header" || N.type === "divider" || ((y = N.onClick) == null || y.call(N), p(!1));
  }, M = (N) => {
    var R, g, L, f, v;
    if (!m) return;
    const y = (R = b.current) == null ? void 0 : R.querySelectorAll(".ui-dropdown-item:not(:disabled)"), j = y ? Array.from(y) : [], W = document.activeElement, S = j.indexOf(W);
    N.key === "ArrowDown" && S < j.length - 1 ? (N.preventDefault(), (g = j[S + 1]) == null || g.focus()) : N.key === "ArrowUp" && S > 0 ? (N.preventDefault(), (L = j[S - 1]) == null || L.focus()) : N.key === "Home" ? (N.preventDefault(), (f = j[0]) == null || f.focus()) : N.key === "End" && (N.preventDefault(), (v = j[j.length - 1]) == null || v.focus());
  }, A = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${B}`,
    `ui-dropdown-menu--size-${r}`,
    l === "dark" && "ui-dropdown-menu--dark"
  ].filter(Boolean).join(" "), E = () => e.map((N, y) => N.type === "divider" ? /* @__PURE__ */ a("li", { className: "ui-dropdown-sep", role: "separator", "aria-orientation": "horizontal" }, y) : N.type === "header" ? /* @__PURE__ */ a("li", { className: "ui-dropdown-header", role: "presentation", children: N.label }, y) : /* @__PURE__ */ a("li", { role: "none", children: /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: ["ui-dropdown-item", N.active && "ui-dropdown-item--active"].filter(Boolean).join(" "),
      role: "menuitem",
      disabled: N.disabled,
      onClick: () => T(N),
      tabIndex: 0,
      children: N.label
    }
  ) }, y)), F = () => /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": !0, children: /* @__PURE__ */ a("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) });
  return d ? /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-dropdown", "ui-dropdown--split", o].filter(Boolean).join(" "),
      ref: b,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ a(xe, { variant: "secondary", size: s, type: "button", onClick: u, children: c }),
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            className: [
              "ui-dropdown-split-toggle",
              `ui-dropdown-split-toggle--${s}`
            ].join(" "),
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": w,
            onClick: () => p((N) => !N),
            children: [
              /* @__PURE__ */ a("span", { className: "ui-sr-only", children: "Open menu" }),
              /* @__PURE__ */ a(F, {})
            ]
          }
        ),
        m && /* @__PURE__ */ a("ul", { id: w, className: A, role: "menu", children: E() })
      ]
    }
  ) : /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-dropdown", o].filter(Boolean).join(" "),
      ref: b,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => p((N) => !N),
            onKeyDown: (N) => {
              (N.key === "Enter" || N.key === " ") && (N.preventDefault(), p((y) => !y));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": w,
            tabIndex: 0,
            children: t
          }
        ),
        m && /* @__PURE__ */ a("ul", { id: w, className: A, role: "menu", children: E() })
      ]
    }
  );
}
function va({ title: t = "No data", description: e, icon: n, children: i, className: r = "" }) {
  const l = ["ui-empty", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: l, role: "status", children: [
    n && /* @__PURE__ */ a("div", { className: "ui-empty-icon", children: n }),
    /* @__PURE__ */ a("h3", { className: "ui-empty-title", children: t }),
    e && /* @__PURE__ */ a("p", { className: "ui-empty-desc", children: e }),
    i && /* @__PURE__ */ a("div", { className: "ui-empty-actions", children: i })
  ] });
}
function ya({ label: t, error: e, hint: n, id: i, children: r, className: l = "" }) {
  const d = ["ui-field", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: d, children: [
    t && /* @__PURE__ */ a("label", { htmlFor: i, className: "ui-field-label", children: t }),
    r,
    n && /* @__PURE__ */ a("span", { className: "ui-field-hint", children: n }),
    e && /* @__PURE__ */ a("span", { className: "ui-field-error", role: "alert", children: e })
  ] });
}
function ka({
  label: t,
  error: e,
  type: n = "text",
  disabled: i = !1,
  id: r,
  className: l = "",
  placeholder: d,
  ...c
}) {
  const u = r || `ui-fl-${D.useId().replace(/:/g, "")}`, s = e ? `${u}-error` : void 0, o = [
    "ui-floating-label",
    e && "ui-floating-label--error",
    i && "ui-floating-label--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: o, children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: u,
        type: n,
        className: "ui-floating-label__input",
        placeholder: " ",
        disabled: i,
        "aria-invalid": !!e,
        "aria-describedby": s,
        ...c
      }
    ),
    /* @__PURE__ */ a("label", { htmlFor: u, className: "ui-floating-label__text", children: t }),
    e ? /* @__PURE__ */ a("span", { id: s, className: "ui-floating-label__error", role: "alert", children: e }) : null
  ] });
}
function wa({ children: t, className: e = "", ...n }) {
  return /* @__PURE__ */ a("form", { className: ["ui-form", e].filter(Boolean).join(" "), noValidate: !0, ...n, children: t });
}
function xa({ children: t, className: e = "", invalid: n = !1, id: i, ...r }) {
  const l = ["ui-form-feedback", n && "ui-form-feedback--invalid", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { id: i, className: l, role: n ? "alert" : void 0, ...r, children: t });
}
function pe({ children: t, className: e = "" }) {
  return /* @__PURE__ */ a("div", { className: ["ui-form-layout", e].filter(Boolean).join(" "), children: t });
}
function Ve({ children: t, className: e = "", columns: n = 2, stack: i = !0 }) {
  return /* @__PURE__ */ a("div", { className: ["ui-form-layout-row", n === 1 ? "ui-form-layout-row--1" : n === 3 ? "ui-form-layout-row--3" : "ui-form-layout-row--2", i ? "ui-form-layout-row--stack" : "", e].filter(Boolean).join(" "), children: t });
}
function Xe({ children: t, className: e = "", span: n }) {
  const i = n ? `ui-form-layout-col--span-${n}` : "";
  return /* @__PURE__ */ a("div", { className: ["ui-form-layout-col", i, e].filter(Boolean).join(" "), children: t });
}
pe.Row = Ve;
pe.Col = Xe;
function $a({ children: t, className: e = "", tone: n = "muted", id: i, as: r = "p", ...l }) {
  const d = ["ui-form-text", n === "muted" && "ui-form-text--muted", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(r, { id: i, className: d, ...l, children: t });
}
function Ba({ trigger: t, content: e, className: n = "" }) {
  const [i, r] = G(!1), l = ["ui-hovercard", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "div",
    {
      className: l,
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
      children: [
        /* @__PURE__ */ a("div", { className: "ui-hovercard-trigger", children: t }),
        i && /* @__PURE__ */ a("div", { className: "ui-hovercard-content", children: e })
      ]
    }
  );
}
function ja({ left: t, right: e, children: n, className: i = "" }) {
  const r = ["ui-inputgroup", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: r, children: [
    t && /* @__PURE__ */ a("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: t }),
    /* @__PURE__ */ a("span", { className: "ui-inputgroup-input", children: n }),
    e && /* @__PURE__ */ a("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: e })
  ] });
}
function Da({ length: t = 6, value: e = "", onChange: n, className: i = "" }) {
  const r = ie([]), l = e.split("").concat(Array(t).fill("")).slice(0, t), d = (s, o) => {
    var p;
    const m = l.slice();
    m[s] = o.replace(/\D/g, "").slice(-1), n == null || n(m.join("")), o && s < t - 1 && ((p = r.current[s + 1]) == null || p.focus());
  }, c = (s, o) => {
    var m;
    o.key === "Backspace" && !l[s] && s > 0 && ((m = r.current[s - 1]) == null || m.focus());
  }, u = ["ui-inputotp", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: u, role: "group", "aria-label": "One-time code", children: l.map((s, o) => /* @__PURE__ */ a(
    "input",
    {
      ref: (m) => r.current[o] = m,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: s,
      onChange: (m) => d(o, m.target.value),
      onKeyDown: (m) => c(o, m),
      "aria-label": `Digit ${o + 1}`
    },
    o
  )) });
}
function qe({
  href: t,
  onClick: e,
  active: n = !1,
  disabled: i = !1,
  icon: r,
  children: l,
  className: d = "",
  ...c
}) {
  const u = [
    "ui-navlink",
    n && "ui-navlink--active",
    i && "ui-navlink--disabled",
    d
  ].filter(Boolean).join(" "), s = /* @__PURE__ */ h(Q, { children: [
    r && /* @__PURE__ */ a("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: r }),
    /* @__PURE__ */ a("span", { className: "ui-navlink-text", children: l })
  ] });
  return t && !i ? /* @__PURE__ */ a(
    "a",
    {
      href: t,
      className: u,
      onClick: e,
      "aria-current": n ? "page" : void 0,
      ...c,
      children: s
    }
  ) : /* @__PURE__ */ a(
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
function Ma({
  brand: t,
  nav: e,
  actions: n,
  variant: i = "default",
  sticky: r = !1,
  dense: l = !1,
  brandMark: d = !1,
  logo: c,
  logoSrc: u,
  logoAlt: s = "",
  logoPlaceholder: o = !1,
  mobileMenuOpen: m,
  onMobileMenuChange: p,
  className: b = ""
}) {
  const w = z().replace(/:/g, ""), [B, T] = G(!1), M = m !== void 0, A = M ? m : B, E = (g) => {
    M || T(g), p == null || p(g);
  }, F = c != null && c !== "" && c !== !1, N = !!u, y = o && !F && !N, j = d && !F && !N && !y, W = [
    "ui-navbar",
    `ui-navbar--${i}`,
    r && "ui-navbar--sticky",
    l && "ui-navbar--dense",
    b
  ].filter(Boolean).join(" "), S = [
    "ui-navbar-brand",
    j && "ui-navbar-brand--with-mark"
  ].filter(Boolean).join(" ");
  let R = null;
  return F ? R = /* @__PURE__ */ a("span", { className: "ui-navbar-logo-wrap", children: c }) : N ? R = /* @__PURE__ */ a("span", { className: "ui-navbar-logo-wrap", children: /* @__PURE__ */ a("img", { className: "ui-navbar-logo", src: u, alt: s }) }) : y && (R = /* @__PURE__ */ a("span", { className: "ui-navbar-logo-wrap", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "ui-navbar-logo-placeholder", title: "Add logo via logoSrc or logo prop" }) })), /* @__PURE__ */ h("header", { className: W, role: "banner", children: [
    /* @__PURE__ */ h("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ h("div", { className: S, children: [
        R,
        t
      ] }),
      /* @__PURE__ */ a("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: e }),
      /* @__PURE__ */ a("div", { className: "ui-navbar-actions", children: n }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": A,
          "aria-controls": `ui-navbar-mobile-${w}`,
          "aria-label": "Toggle menu",
          onClick: () => E(!A),
          children: /* @__PURE__ */ a("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ a(
      "div",
      {
        id: `ui-navbar-mobile-${w}`,
        className: "ui-navbar-mobile",
        hidden: !A,
        role: "navigation",
        "aria-label": "Mobile",
        children: /* @__PURE__ */ h("div", { className: "ui-navbar-mobile-inner", children: [
          e,
          n && /* @__PURE__ */ a("div", { className: "ui-navbar-mobile-actions", children: n })
        ] })
      }
    )
  ] });
}
function La({
  value: t = 0,
  max: e = 100,
  variant: n = "default",
  size: i = "md",
  striped: r = !1,
  showLabel: l = !1,
  className: d = ""
}) {
  const c = e <= 0 ? 0 : Math.min(100, Math.max(0, Number(t) / e * 100)), u = z().replace(/:/g, ""), s = l ? u : void 0;
  return /* @__PURE__ */ h(
    "div",
    {
      className: ["ui-progress", `ui-progress--${i}`, d].filter(Boolean).join(" "),
      role: "progressbar",
      "aria-valuenow": Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": s,
      children: [
        l && /* @__PURE__ */ h("div", { className: "ui-progress-label", id: s, children: [
          Math.round(c),
          "%"
        ] }),
        /* @__PURE__ */ a("div", { className: "ui-progress-track", children: /* @__PURE__ */ a(
          "div",
          {
            className: [
              "ui-progress-bar",
              `ui-progress-bar--${n}`,
              r && "ui-progress-bar--striped"
            ].filter(Boolean).join(" "),
            style: { width: `${c}%` }
          }
        ) })
      ]
    }
  );
}
const fe = ye(null);
function Ca({ name: t, value: e, onChange: n, label: i, children: r, className: l = "" }) {
  const d = z().replace(/:/g, ""), c = `ui-rg-${d}`, u = t || c, s = `ui-rg-legend-${d}`, o = K(() => ({ name: u, value: e, onChange: n }), [u, e, n]);
  return /* @__PURE__ */ a(fe.Provider, { value: o, children: /* @__PURE__ */ h("fieldset", { className: ["ui-radio-group", l].filter(Boolean).join(" "), "aria-labelledby": i ? s : void 0, children: [
    i ? /* @__PURE__ */ a("legend", { id: s, className: "ui-radio-group__legend", children: i }) : null,
    /* @__PURE__ */ a("div", { className: "ui-radio-group__items", children: r })
  ] }) });
}
function Fa({ value: t, label: e, disabled: n = !1, id: i, className: r = "" }) {
  const l = ve(fe);
  if (!l)
    throw new Error("Radio must be used inside RadioGroup");
  const d = z().replace(/:/g, ""), c = i || `${l.name}-opt-${t}-${d}`, u = l.value === t;
  return /* @__PURE__ */ a("div", { className: ["ui-radio", n && "ui-radio--disabled", r].filter(Boolean).join(" "), children: /* @__PURE__ */ h("label", { className: "ui-radio__label", htmlFor: c, children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: c,
        type: "radio",
        className: "ui-radio__input",
        name: l.name,
        value: t,
        checked: u,
        disabled: n,
        onChange: () => {
          var s;
          return (s = l.onChange) == null ? void 0 : s.call(l, t);
        }
      }
    ),
    /* @__PURE__ */ a("span", { className: "ui-radio__control", "aria-hidden": !0 }),
    e ? /* @__PURE__ */ a("span", { className: "ui-radio__text", children: e }) : null
  ] }) });
}
function Ia({
  label: t,
  error: e,
  disabled: n = !1,
  id: i,
  className: r = "",
  min: l = 0,
  max: d = 100,
  step: c = 1,
  value: u,
  defaultValue: s,
  onChange: o,
  showValue: m = !1,
  ...p
}) {
  const b = i || `ui-range-${D.useId().replace(/:/g, "")}`, w = e ? `${b}-error` : void 0, B = ["ui-range", e && "ui-range--error", n && "ui-range--disabled", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: "ui-range-wrapper", children: [
    t ? /* @__PURE__ */ h("div", { className: "ui-range-label-row", children: [
      /* @__PURE__ */ a("label", { htmlFor: b, className: "ui-range-label", children: t }),
      m && u != null ? /* @__PURE__ */ a("span", { className: "ui-range-value", children: u }) : null
    ] }) : null,
    /* @__PURE__ */ a(
      "input",
      {
        id: b,
        type: "range",
        className: B,
        min: l,
        max: d,
        step: c,
        disabled: n,
        value: u,
        defaultValue: s,
        onChange: o,
        "aria-invalid": !!e,
        "aria-describedby": w,
        ...p
      }
    ),
    e ? /* @__PURE__ */ a("span", { id: w, className: "ui-range-error", role: "alert", children: e }) : null
  ] });
}
function Ea({
  label: t,
  error: e,
  disabled: n = !1,
  options: i = [],
  id: r,
  className: l = "",
  children: d,
  value: c,
  defaultValue: u,
  onChange: s,
  ...o
}) {
  const m = r || `ui-select-${D.useId().replace(/:/g, "")}`, p = e ? `${m}-error` : void 0, b = [
    "ui-select",
    e && "ui-select--error",
    n && "ui-select--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: "ui-select-wrapper", children: [
    t ? /* @__PURE__ */ a("label", { htmlFor: m, className: "ui-select-label", children: t }) : null,
    /* @__PURE__ */ h(
      "select",
      {
        id: m,
        className: b,
        disabled: n,
        "aria-invalid": !!e,
        "aria-describedby": p,
        value: c,
        defaultValue: u,
        onChange: s,
        ...o,
        children: [
          i.map((w) => /* @__PURE__ */ a("option", { value: w.value, children: w.label }, String(w.value))),
          d
        ]
      }
    ),
    e ? /* @__PURE__ */ a("span", { id: p, className: "ui-select-error", role: "alert", children: e }) : null
  ] });
}
function Sa({
  items: t = [],
  header: e,
  footer: n,
  collapsed: i = !1,
  onToggleCollapse: r,
  showCollapseButton: l = !0,
  position: d = "left",
  variant: c = "default",
  width: u = "normal",
  className: s = ""
}) {
  const o = [
    "ui-sidebar",
    `ui-sidebar--${c}`,
    `ui-sidebar--${d}`,
    `ui-sidebar--width-${u}`,
    i && "ui-sidebar--collapsed",
    s
  ].filter(Boolean).join(" "), m = !!(l && r);
  return /* @__PURE__ */ h("aside", { className: o, "aria-label": "Sidebar navigation", children: [
    !!(e || m) && /* @__PURE__ */ h(
      "div",
      {
        className: [
          "ui-sidebar-top",
          !e && m && "ui-sidebar-top--collapse-only"
        ].filter(Boolean).join(" "),
        children: [
          e ? /* @__PURE__ */ a("div", { className: "ui-sidebar-header", children: e }) : null,
          m ? /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "ui-sidebar-collapse-btn",
              onClick: () => r(!i),
              "aria-expanded": !i,
              "aria-label": i ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ a("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ a("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ a("ul", { className: "ui-sidebar-list", children: t.map((b, w) => /* @__PURE__ */ a("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ a(
      qe,
      {
        href: b.href,
        onClick: b.onClick,
        active: b.active,
        disabled: b.disabled,
        icon: b.icon,
        children: b.label
      }
    ) }, b.id ?? w)) }) }),
    n && /* @__PURE__ */ a("div", { className: "ui-sidebar-footer", children: n })
  ] });
}
function Ra({ size: t = "md", className: e = "", label: n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: ["ui-spinner", `ui-spinner--${t}`, e].filter(Boolean).join(" "),
      role: n ? "status" : "presentation",
      "aria-label": n || void 0,
      children: /* @__PURE__ */ a("span", { className: "ui-spinner-ring", "aria-hidden": !0 })
    }
  );
}
function _a({ items: t = [], defaultTabId: e, onTabChange: n, className: i = "" }) {
  var s;
  const r = (s = t[0]) == null ? void 0 : s.id, [l, d] = G(e ?? r), c = H(
    (o) => {
      d(o), n == null || n(o);
    },
    [n]
  ), u = (o, m) => {
    if (o.key === "ArrowRight" || o.key === "ArrowDown") {
      o.preventDefault();
      const p = (m + 1) % t.length;
      c(t[p].id);
    } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
      o.preventDefault();
      const p = (m - 1 + t.length) % t.length;
      c(t[p].id);
    } else o.key === "Home" ? (o.preventDefault(), c(t[0].id)) : o.key === "End" && (o.preventDefault(), c(t[t.length - 1].id));
  };
  return t.length ? /* @__PURE__ */ h("div", { className: ["ui-tabs", i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a("div", { className: "ui-tabs-list", role: "tablist", "aria-orientation": "horizontal", children: t.map((o, m) => {
      const p = o.id === l;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          role: "tab",
          id: `ui-tab-${o.id}`,
          "aria-selected": p,
          "aria-controls": `ui-tabpanel-${o.id}`,
          tabIndex: p ? 0 : -1,
          className: ["ui-tabs-tab", p && "ui-tabs-tab--active"].filter(Boolean).join(" "),
          onClick: () => c(o.id),
          onKeyDown: (b) => u(b, m),
          children: o.label
        },
        o.id
      );
    }) }),
    t.map((o) => /* @__PURE__ */ a(
      "div",
      {
        role: "tabpanel",
        id: `ui-tabpanel-${o.id}`,
        "aria-labelledby": `ui-tab-${o.id}`,
        hidden: o.id !== l,
        className: "ui-tabs-panel",
        tabIndex: 0,
        children: o.panel
      },
      o.id
    ))
  ] }) : null;
}
function Ta({
  label: t,
  error: e,
  disabled: n = !1,
  id: i,
  className: r = "",
  rows: l = 4,
  ...d
}) {
  const c = i || `ui-textarea-${D.useId().replace(/:/g, "")}`, u = e ? `${c}-error` : void 0, s = [
    "ui-input",
    "ui-textarea",
    e && "ui-input--error",
    n && "ui-input--disabled",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("div", { className: "ui-input-wrapper", children: [
    t ? /* @__PURE__ */ a("label", { htmlFor: c, className: "ui-input-label", children: t }) : null,
    /* @__PURE__ */ a(
      "textarea",
      {
        id: c,
        className: s,
        disabled: n,
        rows: l,
        "aria-invalid": !!e,
        "aria-describedby": u,
        ...d
      }
    ),
    e ? /* @__PURE__ */ a("span", { id: u, className: "ui-input-error", role: "alert", children: e }) : null
  ] });
}
export {
  Qe as Accordion,
  ze as Alert,
  ea as AlertDialog,
  aa as AspectRatio,
  ta as Avatar,
  na as Badge,
  ia as Breadcrumb,
  xe as Button,
  la as ButtonGroup,
  Le as Calendar,
  Y as Card,
  We as CardGroup,
  ra as Carousel,
  sa as Chart,
  oa as Checkbox,
  ca as Collapsible,
  ua as Combobox,
  da as Command,
  ma as ContextMenu,
  ha as DashboardPage,
  pa as DataTable,
  fa as DatePicker,
  ba as Dialog,
  Na as Drawer,
  ga as DropdownMenu,
  va as Empty,
  ya as Field,
  ka as FloatingLabel,
  wa as Form,
  xa as FormFeedback,
  pe as FormLayout,
  $a as FormText,
  Ba as HoverCard,
  Ke as Input,
  ja as InputGroup,
  Da as InputOTP,
  qe as NavLink,
  Ma as Navbar,
  La as Progress,
  Fa as Radio,
  Ca as RadioGroup,
  Ia as Range,
  Ea as Select,
  Sa as Sidebar,
  Ra as Spinner,
  _a as Tabs,
  Ta as Textarea
};
//# sourceMappingURL=tri-ui-library.js.map
