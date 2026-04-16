import { jsx as t, jsxs as p, Fragment as Q } from "react/jsx-runtime";
import D, { useState as G, useEffect as X, useMemo as K, useCallback as H, useRef as ie, useId as z, useContext as ge, createContext as ye } from "react";
function Ze({ items: a = [], multiple: e = !1, disabled: n = !1, variant: i = "default", className: s = "" }) {
  const [l, m] = D.useState(e ? [] : null), o = (r) => e ? Array.isArray(l) && l.includes(r) : l === r, u = (r) => {
    if (n) return;
    const d = a[r];
    d != null && d.disabled || m(
      e ? (h) => h.includes(r) ? h.filter((f) => f !== r) : [...h, r] : (h) => h === r ? null : r
    );
  }, c = [
    "ui-accordion",
    `ui-accordion--${i}`,
    n && "ui-accordion--disabled",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: c, role: "region", "aria-label": "Accordion", children: a.map((r, d) => {
    const h = n || r.disabled;
    return /* @__PURE__ */ p("div", { className: "ui-accordion-item", children: [
      /* @__PURE__ */ p(
        "button",
        {
          type: "button",
          className: "ui-accordion-trigger",
          onClick: () => u(d),
          "aria-expanded": o(d),
          "aria-controls": `ui-accordion-panel-${d}`,
          "aria-disabled": h,
          id: `ui-accordion-trigger-${d}`,
          disabled: h,
          children: [
            /* @__PURE__ */ t("span", { className: "ui-accordion-trigger-text", children: r.title }),
            /* @__PURE__ */ t("span", { className: "ui-accordion-trigger-icon", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          id: `ui-accordion-panel-${d}`,
          role: "region",
          "aria-labelledby": `ui-accordion-trigger-${d}`,
          className: "ui-accordion-panel",
          hidden: !o(d),
          children: r.content
        }
      )
    ] }, d);
  }) });
}
function Je({
  type: a = "info",
  children: e,
  title: n,
  className: i = "",
  dismissible: s = !1,
  onDismiss: l,
  ...m
}) {
  const [o, u] = D.useState(!1), c = () => {
    u(!0), l == null || l();
  }, r = [
    "ui-alert",
    `ui-alert--${a}`,
    i
  ].filter(Boolean).join(" ");
  return o ? null : /* @__PURE__ */ p(
    "div",
    {
      className: r,
      role: "alert",
      "aria-live": "polite",
      ...m,
      children: [
        /* @__PURE__ */ p("div", { className: "ui-alert-content", children: [
          n && /* @__PURE__ */ t("div", { className: "ui-alert-title", children: n }),
          /* @__PURE__ */ t("div", { className: "ui-alert-message", children: e })
        ] }),
        s && /* @__PURE__ */ t(
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
function Qe({
  open: a,
  onClose: e,
  title: n,
  description: i,
  confirmLabel: s = "OK",
  cancelLabel: l = "Cancel",
  onConfirm: m,
  showCancel: o = !0
}) {
  return a ? /* @__PURE__ */ t("div", { className: "ui-alertdialog-overlay", role: "alertdialog", "aria-modal": "true", "aria-labelledby": "ui-alertdialog-title", children: /* @__PURE__ */ p("div", { className: "ui-alertdialog", children: [
    /* @__PURE__ */ t("h2", { id: "ui-alertdialog-title", className: "ui-alertdialog-title", children: n }),
    i && /* @__PURE__ */ t("p", { className: "ui-alertdialog-desc", children: i }),
    /* @__PURE__ */ p("div", { className: "ui-alertdialog-actions", children: [
      o && /* @__PURE__ */ t("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--secondary", onClick: e, children: l }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-alertdialog-btn ui-alertdialog-btn--primary", onClick: () => {
        m == null || m(), e == null || e();
      }, children: s })
    ] })
  ] }) }) : null;
}
function ze({ ratio: a = 16 / 9, children: e, className: n = "" }) {
  const i = ["ui-aspectratio", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: i, style: { aspectRatio: a }, children: e });
}
function we(a) {
  const e = String(a).trim();
  if (!e) return "?";
  const n = e.split(/\s+/).filter(Boolean);
  if (n.length >= 2)
    return (n[0][0] + n[1][0]).toUpperCase();
  const i = n[0];
  return i.length <= 1 ? i.toUpperCase() : i.slice(0, 2).toUpperCase();
}
function ke({ fallback: a, alt: e }) {
  return a != null && String(a).trim() ? String(a).trim() : e && String(e).trim() ? we(e) : "?";
}
function ea({
  src: a,
  alt: e = "",
  fallback: n,
  placeholder: i,
  size: s = "md",
  shape: l = "circle",
  ring: m = !1,
  presence: o,
  className: u = ""
}) {
  const [c, r] = G(!1), [d, h] = G(!1);
  X(() => {
    if (!a) {
      r(!1), h(!1);
      return;
    }
    r(!1), h(!1);
  }, [a]);
  const f = K(() => ke({ fallback: n, alt: e }), [n, e]), w = e || f, B = !!(a && String(a).trim()), T = B && !d, M = B && !d && !c, A = !B || d, E = ["ui-avatar-root", o ? "ui-avatar-root--has-presence" : "", u].filter(Boolean).join(" "), C = [
    "ui-avatar",
    `ui-avatar--${s}`,
    `ui-avatar--${l}`,
    m ? "ui-avatar--ring" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("span", { className: E, children: [
    /* @__PURE__ */ p("span", { className: C, role: "img", "aria-label": w || void 0, children: [
      T ? /* @__PURE__ */ t(
        "img",
        {
          src: a,
          alt: e,
          className: `ui-avatar-img${c ? " ui-avatar-img--visible" : ""}`,
          onLoad: () => r(!0),
          onError: () => {
            h(!0), r(!1);
          },
          draggable: !1
        },
        a
      ) : null,
      M ? /* @__PURE__ */ t("span", { className: "ui-avatar-placeholder", "aria-hidden": !0, children: i != null ? /* @__PURE__ */ t("span", { className: "ui-avatar-placeholder-custom", children: i }) : /* @__PURE__ */ t("span", { className: "ui-avatar-skeleton" }) }) : null,
      A ? /* @__PURE__ */ t("span", { className: "ui-avatar-fallback", children: f }) : null
    ] }),
    o ? /* @__PURE__ */ t("span", { className: `ui-avatar-presence ui-avatar-presence--${o}`, "aria-hidden": !0, title: o }) : null
  ] });
}
function aa({ children: a, variant: e = "default", className: n = "" }) {
  const i = ["ui-badge", `ui-badge--${e}`, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("span", { className: i, children: a });
}
function ta({ items: a = [], separator: e = "/", className: n = "" }) {
  const i = ["ui-breadcrumb", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("nav", { className: i, "aria-label": "Breadcrumb", children: /* @__PURE__ */ t("ol", { className: "ui-breadcrumb-list", children: a.map((s, l) => /* @__PURE__ */ p("li", { className: "ui-breadcrumb-item", children: [
    l > 0 && /* @__PURE__ */ t("span", { className: "ui-breadcrumb-sep", "aria-hidden": "true", children: e }),
    s.href ? /* @__PURE__ */ t("a", { href: s.href, className: "ui-breadcrumb-link", children: s.label }) : /* @__PURE__ */ t("span", { className: "ui-breadcrumb-current", "aria-current": "page", children: s.label })
  ] }, l)) }) });
}
function xe({
  variant: a = "primary",
  size: e = "md",
  disabled: n = !1,
  onClick: i,
  children: s,
  leftIcon: l,
  rightIcon: m,
  type: o = "button",
  className: u = "",
  ariaLabel: c,
  ...r
}) {
  const d = s != null && s !== "", h = [
    "ui-btn",
    `ui-btn--${a}`,
    `ui-btn--${e}`,
    n && "ui-btn--disabled",
    l && "ui-btn--has-left-icon",
    m && "ui-btn--has-right-icon",
    (l || m) && !d && "ui-btn--icon-only",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "button",
    {
      type: o,
      className: h,
      disabled: n,
      onClick: i,
      "aria-label": c,
      "aria-disabled": n,
      ...r,
      children: [
        l && /* @__PURE__ */ t("span", { className: "ui-btn-icon ui-btn-icon--left", "aria-hidden": "true", children: l }),
        d && /* @__PURE__ */ t("span", { className: "ui-btn-label", children: s }),
        m && /* @__PURE__ */ t("span", { className: "ui-btn-icon ui-btn-icon--right", "aria-hidden": "true", children: m })
      ]
    }
  );
}
function na({ children: a, className: e = "" }) {
  const n = ["ui-buttongroup", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: n, role: "group", children: a });
}
function U(a) {
  const e = new Date(a);
  return e.setHours(0, 0, 0, 0), e;
}
function ce(a, e) {
  return !a || !e ? !1 : a.getFullYear() === e.getFullYear() && a.getMonth() === e.getMonth() && a.getDate() === e.getDate();
}
function $e(a, e) {
  const n = new Date(a, e, 1);
  return { year: n.getFullYear(), month: n.getMonth() };
}
function ue(a, e, n) {
  return $e(a, e + n);
}
function Be(a) {
  const e = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())), n = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - n);
  const i = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e - i) / 864e5 + 1) / 7);
}
function je(a, e, n) {
  const i = U(a).getTime();
  return !(e && i < U(e).getTime() || n && i > U(n).getTime());
}
function De(a, e, n) {
  const s = (new Date(a, e, 1).getDay() - n + 7) % 7;
  new Date(a, e + 1, 0).getDate();
  const l = [], m = new Date(a, e, 1 - s);
  for (let o = 0; o < 42; o++) {
    const u = new Date(m);
    u.setDate(m.getDate() + o), l.push({
      date: u,
      outside: u.getMonth() !== e
    });
  }
  for (; l.length > 35 && l.slice(-7).every((o) => o.outside); )
    l.splice(-7, 7);
  return l;
}
function Me(a) {
  const e = [];
  for (let n = 0; n < a.length; n += 7)
    e.push(a.slice(n, n + 7));
  return e;
}
function Le({
  value: a,
  onChange: e,
  className: n = "",
  minDate: i,
  maxDate: s,
  isDateDisabled: l,
  weekStartsOn: m = 0,
  showOutsideDays: o = !0,
  showWeekNumbers: u = !1,
  locale: c,
  showTodayButton: r = !1
}) {
  const d = ["ui-calendar", n].filter(Boolean).join(" "), h = U(a || /* @__PURE__ */ new Date()), [f, w] = G(() => ({ year: h.getFullYear(), month: h.getMonth() }));
  X(() => {
    if (!a) return;
    const v = U(a);
    w((L) => L.year === v.getFullYear() && L.month === v.getMonth() ? L : { year: v.getFullYear(), month: v.getMonth() });
  }, [a]);
  const B = m === 1 ? 1 : 0, T = K(
    () => De(f.year, f.month, B),
    [f.year, f.month, B]
  ), M = K(() => Me(T), [T]), A = K(
    () => new Date(f.year, f.month).toLocaleString(c || void 0, { month: "long", year: "numeric" }),
    [f.year, f.month, c]
  ), E = K(() => {
    const v = [], L = new Date(2024, 0, 1);
    for (let b = 0; b < 7; b++) {
      const g = (B + b) % 7, k = new Date(L), $ = (g - k.getDay() + 7) % 7;
      k.setDate(1 + $), v.push(k.toLocaleString(c || void 0, { weekday: "short" }));
    }
    return v;
  }, [c, B]), C = H(() => {
    w((v) => ue(v.year, v.month, -1));
  }, []), N = H(() => {
    w((v) => ue(v.year, v.month, 1));
  }, []), y = H(() => {
    const v = /* @__PURE__ */ new Date();
    w({ year: v.getFullYear(), month: v.getMonth() }), e == null || e(U(v));
  }, [e]), j = H(
    (v) => !!(!je(v, i, s) || typeof l == "function" && l(v)),
    [i, s, l]
  ), Y = H(
    (v) => {
      j(v) || (e == null || e(U(v)), (v.getMonth() !== f.month || v.getFullYear() !== f.year) && w({ year: v.getFullYear(), month: v.getMonth() }));
    },
    [e, j, f.month, f.year]
  ), S = U(/* @__PURE__ */ new Date()), R = a ? U(a) : null;
  return /* @__PURE__ */ p("div", { className: d, role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ p("div", { className: "ui-calendar-header", children: [
      /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-nav-btn", onClick: C, "aria-label": "Previous month", children: "←" }),
      /* @__PURE__ */ t("span", { className: "ui-calendar-title", children: A }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-nav-btn", onClick: N, "aria-label": "Next month", children: "→" })
    ] }),
    r ? /* @__PURE__ */ t("div", { className: "ui-calendar-toolbar", children: /* @__PURE__ */ t("button", { type: "button", className: "ui-calendar-today-btn", onClick: y, children: "Today" }) }) : null,
    /* @__PURE__ */ p(
      "div",
      {
        className: ["ui-calendar-grid", u ? "ui-calendar-grid--weeks" : ""].filter(Boolean).join(" "),
        role: "grid",
        "aria-readonly": "true",
        children: [
          u ? /* @__PURE__ */ t("div", { className: "ui-calendar-weeknum-h", "aria-hidden": "true", children: "Wk" }) : null,
          E.map((v) => /* @__PURE__ */ t("div", { className: "ui-calendar-weekday", role: "columnheader", children: v }, v)),
          M.map((v, L) => /* @__PURE__ */ p(D.Fragment, { children: [
            u ? /* @__PURE__ */ t("div", { className: "ui-calendar-weeknum", "aria-hidden": "true", children: Be(v[0].date) }) : null,
            v.map((b, g) => {
              const { date: k, outside: $ } = b, W = ce(k, S), x = R && ce(k, R), I = j(k);
              return $ && !o ? /* @__PURE__ */ t(
                "div",
                {
                  className: "ui-calendar-day ui-calendar-day--empty",
                  role: "gridcell"
                },
                `${L}-${g}`
              ) : /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  role: "gridcell",
                  disabled: I,
                  className: [
                    "ui-calendar-day",
                    $ ? "ui-calendar-day--outside" : "",
                    W ? "ui-calendar-day--today" : "",
                    x ? "ui-calendar-day--selected" : "",
                    I ? "ui-calendar-day--disabled" : ""
                  ].filter(Boolean).join(" "),
                  onClick: () => Y(k),
                  "aria-label": k.toLocaleDateString(c || void 0, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  }),
                  "aria-selected": x ? "true" : "false",
                  children: k.getDate()
                },
                `${L}-${g}`
              );
            })
          ] }, L))
        ]
      }
    )
  ] });
}
function P(...a) {
  return a.filter(Boolean).join(" ");
}
function Fe({
  children: a,
  title: e,
  footer: n,
  className: i = "",
  variant: s = "outlined",
  color: l,
  borderColor: m,
  ...o
}) {
  const u = P(
    "ui-card",
    `ui-card--${s}`,
    l && `ui-card--bg-${l}`,
    m && `ui-card--border-${m}`,
    i
  ), c = e != null || n != null ? /* @__PURE__ */ p(Q, { children: [
    e != null && /* @__PURE__ */ t(de, { children: typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ t("h3", { className: "ui-card-title", children: e }) : e }),
    /* @__PURE__ */ t(me, { children: a }),
    n != null && /* @__PURE__ */ t(he, { children: n })
  ] }) : a;
  return /* @__PURE__ */ t("div", { className: u, ...o, children: c });
}
function de({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-header", e), children: a });
}
function me({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-body", e), children: a });
}
function he({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-footer", e), children: a });
}
function Ce({ children: a, className: e = "", as: n = "h3", ...i }) {
  return /* @__PURE__ */ t(n, { className: P("ui-card-title", e), ...i, children: a });
}
function Ie({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("p", { className: P("ui-card-subtitle", e), children: a });
}
function Ee({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-text", e), children: a });
}
function Se({ children: a, className: e = "", href: n = "#", ...i }) {
  return /* @__PURE__ */ t("a", { className: P("ui-card-link", e), href: n, ...i, children: a });
}
function Re({ src: a, alt: e = "", position: n = "top", className: i = "" }) {
  return /* @__PURE__ */ t(
    "img",
    {
      src: a,
      alt: e,
      className: P("ui-card-img", n && `ui-card-img--${n}`, i)
    }
  );
}
function _e({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-img-wrap", e), children: a });
}
function Te({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-img-overlay", e), children: a });
}
function Ae({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("ul", { className: P("ui-card-list-group", e), children: a });
}
function Pe({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("li", { className: P("ui-card-list-group-item", e), children: a });
}
function Ye({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: P("ui-card-group", e), children: a });
}
const O = Fe;
O.Header = de;
O.Body = me;
O.Footer = he;
O.Title = Ce;
O.Subtitle = Ie;
O.Text = Ee;
O.Link = Se;
O.Img = Re;
O.ImgOverlayWrap = _e;
O.ImgOverlay = Te;
O.ListGroup = Ae;
O.ListGroupItem = Pe;
O.Group = Ye;
function ia({ children: a, className: e = "" }) {
  const [n, i] = D.useState(0), s = D.Children.toArray(a), l = s.length;
  return /* @__PURE__ */ p("div", { className: `ui-carousel ${e}`, role: "region", "aria-label": "Carousel", children: [
    /* @__PURE__ */ t("div", { className: "ui-carousel-track", style: { transform: `translateX(-${n * 100}%)` }, children: s.map((m, o) => /* @__PURE__ */ t("div", { className: "ui-carousel-slide", children: m }, o)) }),
    l > 1 && /* @__PURE__ */ t("div", { className: "ui-carousel-dots", children: s.map((m, o) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${o + 1}`,
        className: `ui-carousel-dot ${o === n ? "ui-carousel-dot--active" : ""}`,
        onClick: () => i(o)
      },
      o
    )) })
  ] });
}
const J = 280, te = 120, F = { top: 8, right: 8, bottom: 26, left: 40 };
function Oe(a) {
  return typeof a == "number" && Number.isFinite(a) ? String(a) : String(a ?? "");
}
function la({
  data: a = [],
  type: e = "bar",
  className: n = "",
  formatValue: i = Oe,
  minValue: s,
  showGrid: l = !0,
  showYAxis: m = !0,
  yTickCount: o = 4
}) {
  var v, L;
  const u = ie(null), [c, r] = G(null), d = ["ui-chart", `ui-chart--${e}`, n].filter(Boolean).join(" "), h = J - F.left - F.right, f = te - F.top - F.bottom, { maxV: w, minV: B, ticks: T, points: M, bars: A } = K(() => {
    const b = a.map((_) => Number(_.value)).filter((_) => Number.isFinite(_)), g = b.length ? Math.max(...b) : 1, k = b.length ? Math.min(...b) : 0, $ = typeof s == "number" && Number.isFinite(s) ? s : e === "line" ? Math.min(k, 0) : 0, W = Math.max(g, $ + 1e-6) * 1.02, x = W - $ || 1, I = Math.max(2, Math.min(8, o)), q = [];
    for (let _ = 0; _ < I; _++) {
      const V = $ + x * _ / (I - 1);
      q.push(V);
    }
    const ee = a.length || 1, Z = h / ee, le = (_) => F.top + f - (Number(_) - $) / x * f, be = a.map((_, V) => {
      const ne = F.left + Z * V + Z / 2, ae = le(_.value);
      return { x: ne, y: ae, i: V, d: _ };
    }), Ne = a.map((_, V) => {
      const ne = F.left + Z * V + Z / 2, ae = Math.max(6, Z * 0.52), re = F.top + f, se = le(_.value), oe = Math.min(re, se), ve = Math.max(re, se);
      return { x: ne - ae / 2, w: ae, yTop: oe, h: Math.max(ve - oe, 2), i: V, d: _ };
    });
    return { maxV: W, minV: $, ticks: q, points: be, bars: Ne };
  }, [a, h, f, s, e, o]), E = K(() => e !== "line" || !M.length ? "" : M.map((b, g) => `${g === 0 ? "M" : "L"} ${b.x} ${b.y}`).join(" "), [e, M]), C = K(() => {
    if (!a.length) return "Empty chart";
    const b = a.map((g) => `${g.label} ${i(g.value)}`);
    return `${e} chart: ${b.join(", ")}`;
  }, [a, i, e]), N = H((b, g) => {
    const k = u.current;
    if (!k) return;
    const $ = k.getBoundingClientRect(), W = b.clientX - $.left, x = b.clientY - $.top;
    r({ x: W, y: x, i: g });
  }, []), y = H((b) => {
    r((g) => {
      if (!g) return g;
      const k = u.current;
      if (!k) return g;
      const $ = k.getBoundingClientRect();
      return { ...g, x: b.clientX - $.left, y: b.clientY - $.top };
    });
  }, []), j = H(() => r(null), []), Y = c && a[c.i] ? a[c.i] : null, S = 56, R = c ? (() => {
    var W, x;
    const b = ((W = u.current) == null ? void 0 : W.offsetWidth) ?? J, g = ((x = u.current) == null ? void 0 : x.offsetHeight) ?? te, k = Math.min(Math.max(c.x, S), Math.max(S, b - S)), $ = Math.min(Math.max(c.y, 24), g - 8);
    return { left: k, top: $ };
  })() : void 0;
  return a.length ? /* @__PURE__ */ t("div", { className: d, role: "img", "aria-label": C, children: /* @__PURE__ */ p(
    "div",
    {
      className: "ui-chart-frame",
      ref: u,
      onMouseLeave: j,
      onBlur: j,
      children: [
        /* @__PURE__ */ p(
          "svg",
          {
            className: "ui-chart-svg",
            viewBox: `0 0 ${J} ${te}`,
            preserveAspectRatio: "xMidYMid meet",
            "aria-hidden": "true",
            children: [
              l ? T.map((b, g) => {
                const k = F.top + f - (b - B) / (w - B || 1) * f;
                return /* @__PURE__ */ t(
                  "line",
                  {
                    className: "ui-chart-gridline",
                    x1: F.left,
                    x2: J - F.right,
                    y1: k,
                    y2: k
                  },
                  `g-${g}`
                );
              }) : null,
              m ? T.map((b, g) => {
                const k = F.top + f - (b - B) / (w - B || 1) * f;
                return /* @__PURE__ */ t(
                  "text",
                  {
                    className: "ui-chart-axis-y",
                    x: F.left - 8,
                    y: k + 4,
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
                  x1: F.left,
                  x2: J - F.right,
                  y1: F.top + f,
                  y2: F.top + f
                }
              ),
              a.map((b, g) => {
                const k = h / a.length, $ = F.left + k * g + k / 2;
                return /* @__PURE__ */ t("text", { className: "ui-chart-axis-x-label", x: $, y: te - 6, textAnchor: "middle", children: b.label }, `xl-${g}`);
              }),
              e === "bar" ? A.map((b) => /* @__PURE__ */ p("g", { children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    className: "ui-chart-hit",
                    x: b.x,
                    y: b.yTop,
                    width: b.w,
                    height: b.h,
                    onMouseEnter: (g) => N(g, b.i),
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
                /* @__PURE__ */ t("path", { className: "ui-chart-line-area", d: `${E} L ${(v = M[M.length - 1]) == null ? void 0 : v.x} ${F.top + f} L ${(L = M[0]) == null ? void 0 : L.x} ${F.top + f} Z` }),
                /* @__PURE__ */ t("path", { className: "ui-chart-line-stroke", d: E, fill: "none", pointerEvents: "none" }),
                M.map((b) => /* @__PURE__ */ t(
                  "circle",
                  {
                    className: "ui-chart-point-hit",
                    cx: b.x,
                    cy: b.y,
                    r: 10,
                    onMouseEnter: (g) => N(g, b.i),
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
                    r: (c == null ? void 0 : c.i) === b.i ? 4 : 3,
                    pointerEvents: "none"
                  },
                  `dot-${b.i}`
                ))
              ] }) : null
            ]
          }
        ),
        Y && R ? /* @__PURE__ */ p(
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
              /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-label", children: Y.label }),
              /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-value", children: i(Y.value) }),
              Y.hint ? /* @__PURE__ */ t("span", { className: "ui-chart-tooltip-hint", children: Y.hint }) : null
            ]
          }
        ) : null
      ]
    }
  ) }) : /* @__PURE__ */ t("div", { className: d, role: "img", "aria-label": "Empty chart", children: /* @__PURE__ */ t("p", { className: "ui-chart-empty", children: "No data" }) });
}
function ra({
  checked: a = !1,
  onChange: e,
  disabled: n = !1,
  label: i,
  id: s,
  className: l = "",
  indeterminate: m,
  invalid: o = !1,
  feedback: u,
  ...c
}) {
  const r = s || `ui-checkbox-${D.useId().replace(/:/g, "")}`, d = D.useRef(null);
  D.useEffect(() => {
    d.current && (d.current.indeterminate = !!m);
  }, [m]);
  const h = u ? `${r}-feedback` : void 0, f = [
    "ui-checkbox-wrapper",
    n && "ui-checkbox-wrapper--disabled",
    o && "ui-checkbox-wrapper--invalid",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: f, children: [
    /* @__PURE__ */ p("label", { className: "ui-checkbox-label", htmlFor: r, children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: d,
          id: r,
          type: "checkbox",
          className: "ui-checkbox",
          checked: a,
          onChange: e,
          disabled: n,
          "aria-checked": m ? "mixed" : a,
          "aria-invalid": o,
          "aria-describedby": h,
          ...c
        }
      ),
      /* @__PURE__ */ t("span", { className: "ui-checkbox-box", "aria-hidden": "true" }),
      i ? /* @__PURE__ */ t("span", { className: "ui-checkbox-text", children: i }) : null
    ] }),
    u ? /* @__PURE__ */ t("span", { id: h, className: "ui-checkbox-feedback", role: "alert", children: u }) : null
  ] });
}
function sa({ open: a, defaultOpen: e = !1, onOpenChange: n, trigger: i, children: s, className: l = "" }) {
  const [m, o] = D.useState(e), u = a !== void 0, c = u ? a : m, r = (h) => {
    u || o(h), n == null || n(h);
  }, d = ["ui-collapsible", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: d, children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "ui-collapsible-trigger",
        onClick: () => r(!c),
        "aria-expanded": c,
        children: i
      }
    ),
    /* @__PURE__ */ t("div", { className: "ui-collapsible-content", hidden: !c, children: s })
  ] });
}
function oa({ options: a = [], value: e, onChange: n, placeholder: i = "Select...", className: s = "" }) {
  const [l, m] = G(!1), [o, u] = G(""), c = a.filter((h) => h.label.toLowerCase().includes(o.toLowerCase())), r = a.find((h) => h.value === e), d = ["ui-combobox", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: d, children: [
    /* @__PURE__ */ t("div", { className: "ui-combobox-input-wrap", children: /* @__PURE__ */ t(
      "input",
      {
        type: "text",
        className: "ui-combobox-input",
        value: l ? o : (r == null ? void 0 : r.label) ?? "",
        onChange: (h) => {
          u(h.target.value), m(!0);
        },
        onFocus: () => m(!0),
        onBlur: () => setTimeout(() => m(!1), 150),
        placeholder: i,
        role: "combobox",
        "aria-expanded": l,
        "aria-autocomplete": "list"
      }
    ) }),
    l && /* @__PURE__ */ t("ul", { className: "ui-combobox-list", role: "listbox", children: c.map((h) => /* @__PURE__ */ t(
      "li",
      {
        role: "option",
        "aria-selected": e === h.value,
        className: "ui-combobox-option",
        onMouseDown: () => {
          n == null || n(h.value), m(!1), u("");
        },
        children: h.label
      },
      h.value
    )) })
  ] });
}
function ca({ children: a, placeholder: e = "Search...", className: n = "" }) {
  const i = ["ui-command", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: i, role: "command", children: [
    /* @__PURE__ */ t("input", { type: "text", className: "ui-command-input", placeholder: e }),
    /* @__PURE__ */ t("div", { className: "ui-command-list", children: a })
  ] });
}
function ua({ children: a, items: e = [], onOpenChange: n }) {
  const [i, s] = D.useState(!1), [l, m] = D.useState({ x: 0, y: 0 }), o = D.useRef(null);
  return D.useEffect(() => {
    const u = (r) => {
      r.button === 2 && (r.preventDefault(), m({ x: r.clientX, y: r.clientY }), s(!0), n == null || n(!0));
    }, c = o.current;
    return c == null || c.addEventListener("contextmenu", u), () => c == null ? void 0 : c.removeEventListener("contextmenu", u);
  }, [n]), D.useEffect(() => {
    if (!i) return;
    const u = () => {
      s(!1), n == null || n(!1);
    };
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  }, [i, n]), /* @__PURE__ */ p("div", { ref: o, className: "ui-contextmenu-wrapper", children: [
    a,
    i && /* @__PURE__ */ t(
      "ul",
      {
        className: "ui-contextmenu",
        style: { left: l.x, top: l.y },
        role: "menu",
        children: e.map((u, c) => /* @__PURE__ */ t("li", { role: "none", children: /* @__PURE__ */ t("button", { type: "button", className: "ui-contextmenu-item", role: "menuitem", onClick: u.onClick, children: u.label }) }, c))
      }
    )
  ] });
}
function da({
  navbar: a,
  sidebar: e,
  children: n,
  sidebarCollapsed: i = !1,
  mainWidth: s = "fluid",
  fullHeight: l = !0,
  className: m = ""
}) {
  const o = [
    "ui-dashboard",
    l && "ui-dashboard--full-height",
    i && "ui-dashboard--sidebar-collapsed",
    m
  ].filter(Boolean).join(" "), u = [
    "ui-dashboard-main",
    s === "contained" && "ui-dashboard-main--contained"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, children: [
    a && /* @__PURE__ */ t("div", { className: "ui-dashboard-navbar", children: a }),
    /* @__PURE__ */ p("div", { className: "ui-dashboard-body", children: [
      e && /* @__PURE__ */ t("div", { className: "ui-dashboard-sidebar-wrap", children: e }),
      /* @__PURE__ */ t("main", { className: u, role: "main", children: /* @__PURE__ */ t("div", { className: "ui-dashboard-main-inner", children: n }) })
    ] })
  ] });
}
function ma({
  columns: a = [],
  data: e = [],
  className: n = "",
  emptyMessage: i = "No data",
  size: s = "md",
  variant: l = "default",
  striped: m = !1,
  responsive: o = "always",
  responsiveBreakpoint: u = "md",
  pageSize: c = 0,
  page: r,
  defaultPage: d = 1,
  onPageChange: h
}) {
  const w = (/* @__PURE__ */ new Set(["sm", "md", "lg", "xl", "xxl"])).has(u) ? u : "md", B = o === !1 || o === "never", T = o === "breakpoint", M = !B && !T && (o === !0 || o === "always" || o == null), A = B ? "ui-datatable--scroll-never" : T ? `ui-datatable--scroll-below-${w}` : "ui-datatable--scroll-always", E = [
    "ui-datatable",
    s === "sm" && "ui-datatable--sm",
    l === "dark" && "ui-datatable--dark",
    m === "rows" && "ui-datatable--striped-rows",
    m === "columns" && "ui-datatable--striped-cols",
    m === "both" && "ui-datatable--striped-rows ui-datatable--striped-cols",
    n
  ].filter(Boolean).join(" "), C = typeof c == "number" && c > 0, N = e.length, y = C ? Math.max(1, Math.ceil(N / c)) : 1, j = typeof r == "number" && typeof h == "function", [Y, S] = G(() => Math.max(1, d)), v = Math.min(Math.max(1, Number(j ? r : Y) || 1), y);
  X(() => {
    !C || j || S((x) => Math.min(Math.max(1, x), y));
  }, [C, j, y]);
  const L = H(
    (x) => {
      const I = Math.min(Math.max(1, x), y);
      j ? h(I) : S(I);
    },
    [j, h, y]
  ), { visibleRows: b, rangeStart: g, rangeEnd: k } = K(() => {
    if (!C)
      return {
        visibleRows: e,
        rangeStart: N > 0 ? 1 : 0,
        rangeEnd: N
      };
    const x = (v - 1) * c, I = Math.min(x + c, N);
    return {
      visibleRows: e.slice(x, I),
      rangeStart: N === 0 ? 0 : x + 1,
      rangeEnd: I
    };
  }, [e, C, c, v, N]), $ = (x) => /* @__PURE__ */ t("div", { className: ["ui-datatable-scroll", A].filter(Boolean).join(" "), children: /* @__PURE__ */ p("table", { className: "ui-datatable-table", children: [
    /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: a.map((I) => /* @__PURE__ */ t("th", { scope: "col", className: "ui-datatable-th", children: I.header }, I.key)) }) }),
    x
  ] }) }), W = C && N > 0 ? /* @__PURE__ */ p("nav", { className: "ui-datatable-pagination", "aria-label": "Table pagination", children: [
    /* @__PURE__ */ p("p", { className: "ui-datatable-pagination-summary", children: [
      "Showing ",
      /* @__PURE__ */ t("strong", { children: g }),
      "–",
      /* @__PURE__ */ t("strong", { children: k }),
      " of ",
      /* @__PURE__ */ t("strong", { children: N })
    ] }),
    /* @__PURE__ */ p("div", { className: "ui-datatable-pagination-actions", children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(1),
          disabled: v <= 1,
          "aria-label": "First page",
          children: "First"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(v - 1),
          disabled: v <= 1,
          "aria-label": "Previous page",
          children: "Previous"
        }
      ),
      /* @__PURE__ */ p("span", { className: "ui-datatable-pagination-status", "aria-live": "polite", children: [
        "Page ",
        v,
        " of ",
        y
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(v + 1),
          disabled: v >= y,
          "aria-label": "Next page",
          children: "Next"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-datatable-page-btn",
          onClick: () => L(y),
          disabled: v >= y,
          "aria-label": "Last page",
          children: "Last"
        }
      )
    ] })
  ] }) : null;
  return a.length ? e.length ? /* @__PURE__ */ p("div", { className: E, role: "region", "aria-label": "Data table", children: [
    $(
      /* @__PURE__ */ t("tbody", { children: b.map((x, I) => {
        const q = C ? (v - 1) * c + I : I;
        return /* @__PURE__ */ t("tr", { className: "ui-datatable-tr", children: a.map((ee) => /* @__PURE__ */ t("td", { className: "ui-datatable-td", children: x[ee.key] ?? "" }, ee.key)) }, x.id != null ? String(x.id) : `row-${q}`);
      }) })
    ),
    W
  ] }) : /* @__PURE__ */ t("div", { className: E, role: "region", "aria-label": "Data table", children: $(
    /* @__PURE__ */ t("tbody", { children: /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: a.length, className: "ui-datatable-empty-cell", children: i }) }) })
  ) }) : /* @__PURE__ */ t("div", { className: E, role: "region", "aria-label": "Data table", children: /* @__PURE__ */ t("p", { className: "ui-datatable-empty", children: i }) });
}
function We({ className: a }) {
  return /* @__PURE__ */ t("svg", { className: a, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": !0, children: /* @__PURE__ */ t(
    "path",
    {
      d: "M13.5 4.5L6.5 11.5L3 8",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Ge({ className: a }) {
  return /* @__PURE__ */ p("svg", { className: a, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": !0, children: [
    /* @__PURE__ */ t("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ t("path", { d: "M8 4.75V8.25M8 10.5v.01", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" })
  ] });
}
function Ue({
  label: a,
  error: e,
  validation: n,
  validationMessage: i,
  type: s = "text",
  placeholder: l,
  disabled: m = !1,
  id: o,
  className: u = "",
  ...c
}) {
  const r = o || `ui-input-${D.useId().replace(/:/g, "")}`, d = e || n === "error" ? "error" : n === "success" ? "success" : null, h = e || (d === "success" ? i ?? "Looks good!" : null) || (d === "error" ? i : null), f = h ? `${r}-feedback` : void 0, w = [
    "ui-input",
    d === "error" && "ui-input--error",
    d === "success" && "ui-input--success",
    d && "ui-input--has-validation-icon",
    m && "ui-input--disabled",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-input-wrapper", children: [
    a ? /* @__PURE__ */ t("label", { htmlFor: r, className: "ui-input-label", children: a }) : null,
    /* @__PURE__ */ p("div", { className: ["ui-input-control", d && `ui-input-control--${d}`].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          id: r,
          type: s,
          className: w,
          placeholder: l,
          disabled: m,
          "aria-invalid": d === "error",
          "aria-describedby": f,
          ...c
        }
      ),
      d === "success" ? /* @__PURE__ */ t(We, { className: "ui-input__icon ui-input__icon--valid" }) : null,
      d === "error" ? /* @__PURE__ */ t(Ge, { className: "ui-input__icon ui-input__icon--invalid" }) : null
    ] }),
    h ? /* @__PURE__ */ t(
      "span",
      {
        id: f,
        className: ["ui-input-feedback", d === "error" && "ui-input-feedback--error", d === "success" && "ui-input-feedback--success"].filter(Boolean).join(" "),
        role: d === "error" ? "alert" : "status",
        children: h
      }
    ) : null
  ] });
}
function ha({ value: a, onChange: e, placeholder: n = "Select date", className: i = "" }) {
  const [s, l] = D.useState(!1), m = a ? new Date(a).toLocaleDateString() : "", o = ["ui-datepicker", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: o, children: [
    /* @__PURE__ */ t(
      Ue,
      {
        readOnly: !0,
        value: m,
        placeholder: n,
        onFocus: () => l(!0),
        onClick: () => l((u) => !u)
      }
    ),
    s && /* @__PURE__ */ p(Q, { children: [
      /* @__PURE__ */ t("div", { className: "ui-datepicker-overlay", onClick: () => l(!1), "aria-hidden": "true" }),
      /* @__PURE__ */ t("div", { className: "ui-datepicker-dropdown", children: /* @__PURE__ */ t(Le, { value: a, onChange: (u) => {
        e == null || e(u), l(!1);
      } }) })
    ] })
  ] });
}
function pa({ open: a, onClose: e, title: n, children: i, footer: s, className: l = "" }) {
  const m = D.useRef(null);
  X(() => {
    if (!a) return;
    const u = (c) => {
      c.key === "Escape" && (e == null || e());
    };
    return document.addEventListener("keydown", u), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", u), document.body.style.overflow = "";
    };
  }, [a, e]);
  const o = (u) => {
    u.target === u.currentTarget && (e == null || e());
  };
  return a ? /* @__PURE__ */ t(
    "div",
    {
      className: "ui-dialog-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "ui-dialog-title" : void 0,
      onClick: o,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: m,
          className: `ui-dialog ${l}`,
          role: "document",
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ p("div", { className: "ui-dialog-content", children: [
              n && /* @__PURE__ */ t("h2", { id: "ui-dialog-title", className: "ui-dialog-title", children: n }),
              /* @__PURE__ */ t("div", { className: "ui-dialog-body", children: i }),
              s && /* @__PURE__ */ t("div", { className: "ui-dialog-footer", children: s })
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
function fa({ open: a, onClose: e, title: n, children: i, side: s = "right", className: l = "" }) {
  return X(() => (a && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [a]), a ? /* @__PURE__ */ p(Q, { children: [
    /* @__PURE__ */ t("div", { className: "ui-drawer-overlay", onClick: e, "aria-hidden": "true" }),
    /* @__PURE__ */ p("div", { className: `ui-drawer ui-drawer--${s} ${l}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "ui-drawer-title", children: [
      n && /* @__PURE__ */ t("h2", { id: "ui-drawer-title", className: "ui-drawer-title", children: n }),
      /* @__PURE__ */ t("div", { className: "ui-drawer-body", children: i }),
      /* @__PURE__ */ t("button", { type: "button", className: "ui-drawer-close", onClick: e, "aria-label": "Close", children: "×" })
    ] })
  ] }) : null;
}
function ba({
  trigger: a,
  items: e = [],
  align: n = "end",
  placement: i,
  size: s = "md",
  variant: l = "default",
  split: m = !1,
  primaryLabel: o = "Action",
  onPrimaryClick: u,
  splitButtonSize: c = "md",
  className: r = ""
}) {
  const [d, h] = G(!1), f = ie(null), w = z().replace(/:/g, ""), B = i || (m ? "bottom-end" : n === "start" ? "bottom-start" : "bottom-end");
  X(() => {
    if (!d) return;
    const N = (y) => {
      f.current && !f.current.contains(y.target) && h(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [d]), X(() => {
    if (!d) return;
    const N = (y) => {
      y.key === "Escape" && h(!1);
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [d]);
  const T = (N) => {
    var y;
    N.disabled || N.type === "header" || N.type === "divider" || ((y = N.onClick) == null || y.call(N), h(!1));
  }, M = (N) => {
    var R, v, L, b, g;
    if (!d) return;
    const y = (R = f.current) == null ? void 0 : R.querySelectorAll(".ui-dropdown-item:not(:disabled)"), j = y ? Array.from(y) : [], Y = document.activeElement, S = j.indexOf(Y);
    N.key === "ArrowDown" && S < j.length - 1 ? (N.preventDefault(), (v = j[S + 1]) == null || v.focus()) : N.key === "ArrowUp" && S > 0 ? (N.preventDefault(), (L = j[S - 1]) == null || L.focus()) : N.key === "Home" ? (N.preventDefault(), (b = j[0]) == null || b.focus()) : N.key === "End" && (N.preventDefault(), (g = j[j.length - 1]) == null || g.focus());
  }, A = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${B}`,
    `ui-dropdown-menu--size-${s}`,
    l === "dark" && "ui-dropdown-menu--dark"
  ].filter(Boolean).join(" "), E = () => e.map((N, y) => N.type === "divider" ? /* @__PURE__ */ t("li", { className: "ui-dropdown-sep", role: "separator", "aria-orientation": "horizontal" }, y) : N.type === "header" ? /* @__PURE__ */ t("li", { className: "ui-dropdown-header", role: "presentation", children: N.label }, y) : /* @__PURE__ */ t("li", { role: "none", children: /* @__PURE__ */ t(
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
  ) }, y)), C = () => /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": !0, children: /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) });
  return m ? /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", "ui-dropdown--split", r].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ t(xe, { variant: "secondary", size: c, type: "button", onClick: u, children: o }),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: [
              "ui-dropdown-split-toggle",
              `ui-dropdown-split-toggle--${c}`
            ].join(" "),
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": w,
            onClick: () => h((N) => !N),
            children: [
              /* @__PURE__ */ t("span", { className: "ui-sr-only", children: "Open menu" }),
              /* @__PURE__ */ t(C, {})
            ]
          }
        ),
        d && /* @__PURE__ */ t("ul", { id: w, className: A, role: "menu", children: E() })
      ]
    }
  ) : /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-dropdown", r].filter(Boolean).join(" "),
      ref: f,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "ui-dropdown-trigger",
            onClick: () => h((N) => !N),
            onKeyDown: (N) => {
              (N.key === "Enter" || N.key === " ") && (N.preventDefault(), h((y) => !y));
            },
            role: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": w,
            tabIndex: 0,
            children: a
          }
        ),
        d && /* @__PURE__ */ t("ul", { id: w, className: A, role: "menu", children: E() })
      ]
    }
  );
}
function Na({ title: a = "No data", description: e, icon: n, children: i, className: s = "" }) {
  const l = ["ui-empty", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: l, role: "status", children: [
    n && /* @__PURE__ */ t("div", { className: "ui-empty-icon", children: n }),
    /* @__PURE__ */ t("h3", { className: "ui-empty-title", children: a }),
    e && /* @__PURE__ */ t("p", { className: "ui-empty-desc", children: e }),
    i && /* @__PURE__ */ t("div", { className: "ui-empty-actions", children: i })
  ] });
}
function va({ label: a, error: e, hint: n, id: i, children: s, className: l = "" }) {
  const m = ["ui-field", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: m, children: [
    a && /* @__PURE__ */ t("label", { htmlFor: i, className: "ui-field-label", children: a }),
    s,
    n && /* @__PURE__ */ t("span", { className: "ui-field-hint", children: n }),
    e && /* @__PURE__ */ t("span", { className: "ui-field-error", role: "alert", children: e })
  ] });
}
function ga({
  label: a,
  error: e,
  type: n = "text",
  disabled: i = !1,
  id: s,
  className: l = "",
  placeholder: m,
  ...o
}) {
  const u = s || `ui-fl-${D.useId().replace(/:/g, "")}`, c = e ? `${u}-error` : void 0, r = [
    "ui-floating-label",
    e && "ui-floating-label--error",
    i && "ui-floating-label--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: r, children: [
    /* @__PURE__ */ t(
      "input",
      {
        id: u,
        type: n,
        className: "ui-floating-label__input",
        placeholder: " ",
        disabled: i,
        "aria-invalid": !!e,
        "aria-describedby": c,
        ...o
      }
    ),
    /* @__PURE__ */ t("label", { htmlFor: u, className: "ui-floating-label__text", children: a }),
    e ? /* @__PURE__ */ t("span", { id: c, className: "ui-floating-label__error", role: "alert", children: e }) : null
  ] });
}
function ya({ children: a, className: e = "", ...n }) {
  return /* @__PURE__ */ t("form", { className: ["ui-form", e].filter(Boolean).join(" "), noValidate: !0, ...n, children: a });
}
function wa({ children: a, className: e = "", invalid: n = !1, valid: i = !1, id: s, ...l }) {
  const m = [
    "ui-form-feedback",
    n && "ui-form-feedback--invalid",
    i && "ui-form-feedback--valid",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { id: s, className: m, role: n ? "alert" : i ? "status" : void 0, ...l, children: a });
}
function pe({ children: a, className: e = "" }) {
  return /* @__PURE__ */ t("div", { className: ["ui-form-layout", e].filter(Boolean).join(" "), children: a });
}
function He({ children: a, className: e = "", columns: n = 2, stack: i = !0 }) {
  return /* @__PURE__ */ t("div", { className: ["ui-form-layout-row", n === 1 ? "ui-form-layout-row--1" : n === 3 ? "ui-form-layout-row--3" : "ui-form-layout-row--2", i ? "ui-form-layout-row--stack" : "", e].filter(Boolean).join(" "), children: a });
}
function Ke({ children: a, className: e = "", span: n }) {
  const i = n ? `ui-form-layout-col--span-${n}` : "";
  return /* @__PURE__ */ t("div", { className: ["ui-form-layout-col", i, e].filter(Boolean).join(" "), children: a });
}
pe.Row = He;
pe.Col = Ke;
function ka({ children: a, className: e = "", tone: n = "muted", id: i, as: s = "p", ...l }) {
  const m = ["ui-form-text", n === "muted" && "ui-form-text--muted", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(s, { id: i, className: m, ...l, children: a });
}
function xa({ trigger: a, content: e, className: n = "" }) {
  const [i, s] = G(!1), l = ["ui-hovercard", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "div",
    {
      className: l,
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ t("div", { className: "ui-hovercard-trigger", children: a }),
        i && /* @__PURE__ */ t("div", { className: "ui-hovercard-content", children: e })
      ]
    }
  );
}
function $a({ left: a, right: e, children: n, className: i = "", validation: s }) {
  const l = [
    "ui-inputgroup",
    s === "success" && "ui-inputgroup--validation-success",
    s === "error" && "ui-inputgroup--validation-error",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: l, children: [
    a ? /* @__PURE__ */ t("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--left", children: a }) : null,
    /* @__PURE__ */ t("span", { className: "ui-inputgroup-input", children: n }),
    e ? /* @__PURE__ */ t("span", { className: "ui-inputgroup-addon ui-inputgroup-addon--right", children: e }) : null
  ] });
}
function Ba({ length: a = 6, value: e = "", onChange: n, className: i = "" }) {
  const s = ie([]), l = e.split("").concat(Array(a).fill("")).slice(0, a), m = (c, r) => {
    var h;
    const d = l.slice();
    d[c] = r.replace(/\D/g, "").slice(-1), n == null || n(d.join("")), r && c < a - 1 && ((h = s.current[c + 1]) == null || h.focus());
  }, o = (c, r) => {
    var d;
    r.key === "Backspace" && !l[c] && c > 0 && ((d = s.current[c - 1]) == null || d.focus());
  }, u = ["ui-inputotp", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: u, role: "group", "aria-label": "One-time code", children: l.map((c, r) => /* @__PURE__ */ t(
    "input",
    {
      ref: (d) => s.current[r] = d,
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      className: "ui-inputotp-digit",
      value: c,
      onChange: (d) => m(r, d.target.value),
      onKeyDown: (d) => o(r, d),
      "aria-label": `Digit ${r + 1}`
    },
    r
  )) });
}
function Ve({
  href: a,
  onClick: e,
  active: n = !1,
  disabled: i = !1,
  icon: s,
  children: l,
  className: m = "",
  ...o
}) {
  const u = [
    "ui-navlink",
    n && "ui-navlink--active",
    i && "ui-navlink--disabled",
    m
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ p(Q, { children: [
    s && /* @__PURE__ */ t("span", { className: "ui-navlink-icon", "aria-hidden": "true", children: s }),
    /* @__PURE__ */ t("span", { className: "ui-navlink-text", children: l })
  ] });
  return a && !i ? /* @__PURE__ */ t(
    "a",
    {
      href: a,
      className: u,
      onClick: e,
      "aria-current": n ? "page" : void 0,
      ...o,
      children: c
    }
  ) : /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: u,
      onClick: i ? void 0 : e,
      disabled: i,
      "aria-current": n ? "page" : void 0,
      ...o,
      children: c
    }
  );
}
function ja({
  brand: a,
  nav: e,
  actions: n,
  variant: i = "default",
  sticky: s = !1,
  dense: l = !1,
  brandMark: m = !1,
  logo: o,
  logoSrc: u,
  logoAlt: c = "",
  logoPlaceholder: r = !1,
  mobileMenuOpen: d,
  onMobileMenuChange: h,
  className: f = ""
}) {
  const w = z().replace(/:/g, ""), [B, T] = G(!1), M = d !== void 0, A = M ? d : B, E = (v) => {
    M || T(v), h == null || h(v);
  }, C = o != null && o !== "" && o !== !1, N = !!u, y = r && !C && !N, j = m && !C && !N && !y, Y = [
    "ui-navbar",
    `ui-navbar--${i}`,
    s && "ui-navbar--sticky",
    l && "ui-navbar--dense",
    f
  ].filter(Boolean).join(" "), S = [
    "ui-navbar-brand",
    j && "ui-navbar-brand--with-mark"
  ].filter(Boolean).join(" ");
  let R = null;
  return C ? R = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", children: o }) : N ? R = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", children: /* @__PURE__ */ t("img", { className: "ui-navbar-logo", src: u, alt: c }) }) : y && (R = /* @__PURE__ */ t("span", { className: "ui-navbar-logo-wrap", "aria-hidden": "true", children: /* @__PURE__ */ t("span", { className: "ui-navbar-logo-placeholder", title: "Add logo via logoSrc or logo prop" }) })), /* @__PURE__ */ p("header", { className: Y, role: "banner", children: [
    /* @__PURE__ */ p("div", { className: "ui-navbar-inner", children: [
      /* @__PURE__ */ p("div", { className: S, children: [
        R,
        a
      ] }),
      /* @__PURE__ */ t("nav", { className: "ui-navbar-nav", "aria-label": "Main", children: e }),
      /* @__PURE__ */ t("div", { className: "ui-navbar-actions", children: n }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: "ui-navbar-menu-toggle",
          "aria-expanded": A,
          "aria-controls": `ui-navbar-mobile-${w}`,
          "aria-label": "Toggle menu",
          onClick: () => E(!A),
          children: /* @__PURE__ */ t("span", { className: "ui-navbar-menu-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "div",
      {
        id: `ui-navbar-mobile-${w}`,
        className: "ui-navbar-mobile",
        hidden: !A,
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
function Da({
  value: a = 0,
  max: e = 100,
  variant: n = "default",
  size: i = "md",
  striped: s = !1,
  showLabel: l = !1,
  className: m = ""
}) {
  const o = e <= 0 ? 0 : Math.min(100, Math.max(0, Number(a) / e * 100)), u = z().replace(/:/g, ""), c = l ? u : void 0;
  return /* @__PURE__ */ p(
    "div",
    {
      className: ["ui-progress", `ui-progress--${i}`, m].filter(Boolean).join(" "),
      role: "progressbar",
      "aria-valuenow": Math.round(o),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": c,
      children: [
        l && /* @__PURE__ */ p("div", { className: "ui-progress-label", id: c, children: [
          Math.round(o),
          "%"
        ] }),
        /* @__PURE__ */ t("div", { className: "ui-progress-track", children: /* @__PURE__ */ t(
          "div",
          {
            className: [
              "ui-progress-bar",
              `ui-progress-bar--${n}`,
              s && "ui-progress-bar--striped"
            ].filter(Boolean).join(" "),
            style: { width: `${o}%` }
          }
        ) })
      ]
    }
  );
}
const fe = ye(null);
function Ma({ name: a, value: e, onChange: n, label: i, children: s, className: l = "" }) {
  const m = z().replace(/:/g, ""), o = `ui-rg-${m}`, u = a || o, c = `ui-rg-legend-${m}`, r = K(() => ({ name: u, value: e, onChange: n }), [u, e, n]);
  return /* @__PURE__ */ t(fe.Provider, { value: r, children: /* @__PURE__ */ p("fieldset", { className: ["ui-radio-group", l].filter(Boolean).join(" "), "aria-labelledby": i ? c : void 0, children: [
    i ? /* @__PURE__ */ t("legend", { id: c, className: "ui-radio-group__legend", children: i }) : null,
    /* @__PURE__ */ t("div", { className: "ui-radio-group__items", children: s })
  ] }) });
}
function La({ value: a, label: e, disabled: n = !1, id: i, className: s = "" }) {
  const l = ge(fe);
  if (!l)
    throw new Error("Radio must be used inside RadioGroup");
  const m = z().replace(/:/g, ""), o = i || `${l.name}-opt-${a}-${m}`, u = l.value === a;
  return /* @__PURE__ */ t("div", { className: ["ui-radio", n && "ui-radio--disabled", s].filter(Boolean).join(" "), children: /* @__PURE__ */ p("label", { className: "ui-radio__label", htmlFor: o, children: [
    /* @__PURE__ */ t(
      "input",
      {
        id: o,
        type: "radio",
        className: "ui-radio__input",
        name: l.name,
        value: a,
        checked: u,
        disabled: n,
        onChange: () => {
          var c;
          return (c = l.onChange) == null ? void 0 : c.call(l, a);
        }
      }
    ),
    /* @__PURE__ */ t("span", { className: "ui-radio__control", "aria-hidden": !0 }),
    e ? /* @__PURE__ */ t("span", { className: "ui-radio__text", children: e }) : null
  ] }) });
}
function Fa({
  label: a,
  error: e,
  disabled: n = !1,
  id: i,
  className: s = "",
  min: l = 0,
  max: m = 100,
  step: o = 1,
  value: u,
  defaultValue: c,
  onChange: r,
  showValue: d = !1,
  ...h
}) {
  const f = i || `ui-range-${D.useId().replace(/:/g, "")}`, w = e ? `${f}-error` : void 0, B = ["ui-range", e && "ui-range--error", n && "ui-range--disabled", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-range-wrapper", children: [
    a ? /* @__PURE__ */ p("div", { className: "ui-range-label-row", children: [
      /* @__PURE__ */ t("label", { htmlFor: f, className: "ui-range-label", children: a }),
      d && u != null ? /* @__PURE__ */ t("span", { className: "ui-range-value", children: u }) : null
    ] }) : null,
    /* @__PURE__ */ t(
      "input",
      {
        id: f,
        type: "range",
        className: B,
        min: l,
        max: m,
        step: o,
        disabled: n,
        value: u,
        defaultValue: c,
        onChange: r,
        "aria-invalid": !!e,
        "aria-describedby": w,
        ...h
      }
    ),
    e ? /* @__PURE__ */ t("span", { id: w, className: "ui-range-error", role: "alert", children: e }) : null
  ] });
}
function Ca({
  label: a,
  error: e,
  disabled: n = !1,
  options: i = [],
  id: s,
  className: l = "",
  children: m,
  value: o,
  defaultValue: u,
  onChange: c,
  ...r
}) {
  const d = s || `ui-select-${D.useId().replace(/:/g, "")}`, h = e ? `${d}-error` : void 0, f = [
    "ui-select",
    e && "ui-select--error",
    n && "ui-select--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-select-wrapper", children: [
    a ? /* @__PURE__ */ t("label", { htmlFor: d, className: "ui-select-label", children: a }) : null,
    /* @__PURE__ */ p(
      "select",
      {
        id: d,
        className: f,
        disabled: n,
        "aria-invalid": !!e,
        "aria-describedby": h,
        value: o,
        defaultValue: u,
        onChange: c,
        ...r,
        children: [
          i.map((w) => /* @__PURE__ */ t("option", { value: w.value, children: w.label }, String(w.value))),
          m
        ]
      }
    ),
    e ? /* @__PURE__ */ t("span", { id: h, className: "ui-select-error", role: "alert", children: e }) : null
  ] });
}
function Ia({
  items: a = [],
  header: e,
  footer: n,
  collapsed: i = !1,
  onToggleCollapse: s,
  showCollapseButton: l = !0,
  position: m = "left",
  variant: o = "default",
  width: u = "normal",
  className: c = ""
}) {
  const r = [
    "ui-sidebar",
    `ui-sidebar--${o}`,
    `ui-sidebar--${m}`,
    `ui-sidebar--width-${u}`,
    i && "ui-sidebar--collapsed",
    c
  ].filter(Boolean).join(" "), d = !!(l && s);
  return /* @__PURE__ */ p("aside", { className: r, "aria-label": "Sidebar navigation", children: [
    !!(e || d) && /* @__PURE__ */ p(
      "div",
      {
        className: [
          "ui-sidebar-top",
          !e && d && "ui-sidebar-top--collapse-only"
        ].filter(Boolean).join(" "),
        children: [
          e ? /* @__PURE__ */ t("div", { className: "ui-sidebar-header", children: e }) : null,
          d ? /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: "ui-sidebar-collapse-btn",
              onClick: () => s(!i),
              "aria-expanded": !i,
              "aria-label": i ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ t("span", { className: "ui-sidebar-collapse-icon", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ t("nav", { className: "ui-sidebar-nav", "aria-label": "Sidebar", children: /* @__PURE__ */ t("ul", { className: "ui-sidebar-list", children: a.map((f, w) => /* @__PURE__ */ t("li", { className: "ui-sidebar-item", children: /* @__PURE__ */ t(
      Ve,
      {
        href: f.href,
        onClick: f.onClick,
        active: f.active,
        disabled: f.disabled,
        icon: f.icon,
        children: f.label
      }
    ) }, f.id ?? w)) }) }),
    n && /* @__PURE__ */ t("div", { className: "ui-sidebar-footer", children: n })
  ] });
}
function Ea({ size: a = "md", className: e = "", label: n }) {
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
function Sa({ items: a = [], defaultTabId: e, onTabChange: n, className: i = "" }) {
  var c;
  const s = (c = a[0]) == null ? void 0 : c.id, [l, m] = G(e ?? s), o = H(
    (r) => {
      m(r), n == null || n(r);
    },
    [n]
  ), u = (r, d) => {
    if (r.key === "ArrowRight" || r.key === "ArrowDown") {
      r.preventDefault();
      const h = (d + 1) % a.length;
      o(a[h].id);
    } else if (r.key === "ArrowLeft" || r.key === "ArrowUp") {
      r.preventDefault();
      const h = (d - 1 + a.length) % a.length;
      o(a[h].id);
    } else r.key === "Home" ? (r.preventDefault(), o(a[0].id)) : r.key === "End" && (r.preventDefault(), o(a[a.length - 1].id));
  };
  return a.length ? /* @__PURE__ */ p("div", { className: ["ui-tabs", i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: "ui-tabs-list", role: "tablist", "aria-orientation": "horizontal", children: a.map((r, d) => {
      const h = r.id === l;
      return /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          role: "tab",
          id: `ui-tab-${r.id}`,
          "aria-selected": h,
          "aria-controls": `ui-tabpanel-${r.id}`,
          tabIndex: h ? 0 : -1,
          className: ["ui-tabs-tab", h && "ui-tabs-tab--active"].filter(Boolean).join(" "),
          onClick: () => o(r.id),
          onKeyDown: (f) => u(f, d),
          children: r.label
        },
        r.id
      );
    }) }),
    a.map((r) => /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `ui-tabpanel-${r.id}`,
        "aria-labelledby": `ui-tab-${r.id}`,
        hidden: r.id !== l,
        className: "ui-tabs-panel",
        tabIndex: 0,
        children: r.panel
      },
      r.id
    ))
  ] }) : null;
}
function Ra({
  label: a,
  error: e,
  disabled: n = !1,
  id: i,
  className: s = "",
  rows: l = 4,
  ...m
}) {
  const o = i || `ui-textarea-${D.useId().replace(/:/g, "")}`, u = e ? `${o}-error` : void 0, c = [
    "ui-input",
    "ui-textarea",
    e && "ui-input--error",
    n && "ui-input--disabled",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: "ui-input-wrapper", children: [
    a ? /* @__PURE__ */ t("label", { htmlFor: o, className: "ui-input-label", children: a }) : null,
    /* @__PURE__ */ t(
      "textarea",
      {
        id: o,
        className: c,
        disabled: n,
        rows: l,
        "aria-invalid": !!e,
        "aria-describedby": u,
        ...m
      }
    ),
    e ? /* @__PURE__ */ t("span", { id: u, className: "ui-input-error", role: "alert", children: e }) : null
  ] });
}
export {
  Ze as Accordion,
  Je as Alert,
  Qe as AlertDialog,
  ze as AspectRatio,
  ea as Avatar,
  aa as Badge,
  ta as Breadcrumb,
  xe as Button,
  na as ButtonGroup,
  Le as Calendar,
  O as Card,
  Ye as CardGroup,
  ia as Carousel,
  la as Chart,
  ra as Checkbox,
  sa as Collapsible,
  oa as Combobox,
  ca as Command,
  ua as ContextMenu,
  da as DashboardPage,
  ma as DataTable,
  ha as DatePicker,
  pa as Dialog,
  fa as Drawer,
  ba as DropdownMenu,
  Na as Empty,
  va as Field,
  ga as FloatingLabel,
  ya as Form,
  wa as FormFeedback,
  pe as FormLayout,
  ka as FormText,
  xa as HoverCard,
  Ue as Input,
  $a as InputGroup,
  Ba as InputOTP,
  Ve as NavLink,
  ja as Navbar,
  Da as Progress,
  La as Radio,
  Ma as RadioGroup,
  Fa as Range,
  Ca as Select,
  Ia as Sidebar,
  Ea as Spinner,
  Sa as Tabs,
  Ra as Textarea
};
//# sourceMappingURL=tri-ui-library.js.map
