import ie, { useState as K, useEffect as se } from "react";
import { useLocation as le } from "react-router-dom";
import { AnimatePresence as fe, motion as de } from "framer-motion";
function me(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var I = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function ve() {
  if (ee) return P;
  ee = 1;
  var c = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function p(f, i, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      s = {};
      for (var g in i)
        g !== "key" && (s[g] = i[g]);
    } else s = i;
    return i = s.ref, {
      $$typeof: c,
      type: f,
      key: d,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return P.Fragment = b, P.jsx = p, P.jsxs = p, P;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function pe() {
  return re || (re = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === W ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case o:
          return "Fragment";
        case $:
          return "Profiler";
        case M:
          return "StrictMode";
        case T:
          return "Suspense";
        case D:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case a:
            return "Portal";
          case U:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return t = e.displayName || null, t !== null ? t : c(e.type) || "Memo";
          case O:
            t = e._payload, e = e._init;
            try {
              return c(e(t));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function p(e) {
      try {
        b(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), b(e);
      }
    }
    function f(e) {
      if (e === o) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var t = c(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function g(e, t) {
      function l() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function x() {
      var e = c(this.type);
      return Z[e] || (Z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, t, l, m, E, y, X, z) {
      return l = y.ref, e = {
        $$typeof: u,
        type: e,
        key: t,
        props: y,
        _owner: E
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, t, l, m, E, y, X, z) {
      var v = t.children;
      if (v !== void 0)
        if (m)
          if (ue(v)) {
            for (m = 0; m < v.length; m++)
              n(v[m]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else n(v);
      if (q.call(t, "key")) {
        v = c(e);
        var j = Object.keys(t).filter(function(ce) {
          return ce !== "key";
        });
        m = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", H[v + m] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          v,
          j,
          v
        ), H[v + m] = !0);
      }
      if (v = null, l !== void 0 && (p(l), v = "" + l), d(t) && (p(t.key), v = "" + t.key), "key" in t) {
        l = {};
        for (var J in t)
          J !== "key" && (l[J] = t[J]);
      } else l = t;
      return v && g(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        v,
        y,
        E,
        i(),
        l,
        X,
        z
      );
    }
    function n(e) {
      typeof e == "object" && e !== null && e.$$typeof === u && e._store && (e._store.validated = 1);
    }
    var r = ie, u = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), U = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, ue = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    r = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var G, Z = {}, B = r.react_stack_bottom_frame.bind(
      r,
      s
    )(), Q = V(f(s)), H = {};
    S.Fragment = o, S.jsx = function(e, t, l, m, E) {
      var y = 1e4 > w.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        l,
        !1,
        m,
        E,
        y ? Error("react-stack-top-frame") : B,
        y ? V(f(e)) : Q
      );
    }, S.jsxs = function(e, t, l, m, E) {
      var y = 1e4 > w.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        l,
        !0,
        m,
        E,
        y ? Error("react-stack-top-frame") : B,
        y ? V(f(e)) : Q
      );
    };
  }()), S;
}
var te;
function ge() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? I.exports = ve() : I.exports = pe()), I.exports;
}
var k = ge(), _ = {}, N = {}, ne;
function _e() {
  if (ne) return N;
  ne = 1, Object.defineProperty(N, "__esModule", { value: !0 }), N.parseLengthAndUnit = b, N.cssValue = p;
  var c = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
  };
  function b(f) {
    if (typeof f == "number")
      return {
        value: f,
        unit: "px"
      };
    var i, s = (f.match(/^[0-9.]*/) || "").toString();
    s.includes(".") ? i = parseFloat(s) : i = parseInt(s, 10);
    var d = (f.match(/[^0-9]*$/) || "").toString();
    return c[d] ? {
      value: i,
      unit: d
    } : (console.warn("React Spinners: ".concat(f, " is not a valid css value. Defaulting to ").concat(i, "px.")), {
      value: i,
      unit: "px"
    });
  }
  function p(f) {
    var i = b(f);
    return "".concat(i.value).concat(i.unit);
  }
  return N;
}
var C = {}, ae;
function be() {
  if (ae) return C;
  ae = 1, Object.defineProperty(C, "__esModule", { value: !0 }), C.createAnimation = void 0;
  var c = function(b, p, f) {
    var i = "react-spinners-".concat(b, "-").concat(f);
    if (typeof window > "u" || !window.document)
      return i;
    var s = document.createElement("style");
    document.head.appendChild(s);
    var d = s.sheet, g = `
    @keyframes `.concat(i, ` {
      `).concat(p, `
    }
  `);
    return d && d.insertRule(g, 0), i;
  };
  return C.createAnimation = c, C;
}
var oe;
function he() {
  if (oe) return _;
  oe = 1;
  var c = _ && _.__assign || function() {
    return c = Object.assign || function(n) {
      for (var r, u = 1, a = arguments.length; u < a; u++) {
        r = arguments[u];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }
      return n;
    }, c.apply(this, arguments);
  }, b = _ && _.__createBinding || (Object.create ? function(n, r, u, a) {
    a === void 0 && (a = u);
    var o = Object.getOwnPropertyDescriptor(r, u);
    (!o || ("get" in o ? !r.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return r[u];
    } }), Object.defineProperty(n, a, o);
  } : function(n, r, u, a) {
    a === void 0 && (a = u), n[a] = r[u];
  }), p = _ && _.__setModuleDefault || (Object.create ? function(n, r) {
    Object.defineProperty(n, "default", { enumerable: !0, value: r });
  } : function(n, r) {
    n.default = r;
  }), f = _ && _.__importStar || /* @__PURE__ */ function() {
    var n = function(r) {
      return n = Object.getOwnPropertyNames || function(u) {
        var a = [];
        for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (a[a.length] = o);
        return a;
      }, n(r);
    };
    return function(r) {
      if (r && r.__esModule) return r;
      var u = {};
      if (r != null) for (var a = n(r), o = 0; o < a.length; o++) a[o] !== "default" && b(u, r, a[o]);
      return p(u, r), u;
    };
  }(), i = _ && _.__rest || function(n, r) {
    var u = {};
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && r.indexOf(a) < 0 && (u[a] = n[a]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, a = Object.getOwnPropertySymbols(n); o < a.length; o++)
        r.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[o]) && (u[a[o]] = n[a[o]]);
    return u;
  };
  Object.defineProperty(_, "__esModule", { value: !0 });
  var s = f(ie), d = /* @__PURE__ */ _e(), g = /* @__PURE__ */ be(), x = (0, g.createAnimation)("RingLoader", "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}", "right"), h = (0, g.createAnimation)("RingLoader", "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}", "left");
  function R(n) {
    var r = n.loading, u = r === void 0 ? !0 : r, a = n.color, o = a === void 0 ? "#000000" : a, M = n.speedMultiplier, $ = M === void 0 ? 1 : M, L = n.cssOverride, U = L === void 0 ? {} : L, Y = n.size, T = Y === void 0 ? 60 : Y, D = i(n, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), F = (0, d.parseLengthAndUnit)(T), O = F.value, A = F.unit, W = c({ display: "inherit", width: (0, d.cssValue)(T), height: (0, d.cssValue)(T), position: "relative" }, U), w = function(q) {
      return {
        position: "absolute",
        top: "0",
        left: "0",
        width: "".concat(O).concat(A),
        height: "".concat(O).concat(A),
        border: "".concat(O / 10).concat(A, " solid ").concat(o),
        opacity: "0.4",
        borderRadius: "100%",
        animationFillMode: "forwards",
        perspective: "800px",
        animation: "".concat(q === 1 ? x : h, " ").concat(2 / $, "s 0s infinite linear")
      };
    };
    return u ? s.createElement(
      "span",
      c({ style: W }, D),
      s.createElement("span", { style: w(1) }),
      s.createElement("span", { style: w(2) })
    ) : null;
  }
  return _.default = R, _;
}
var ye = /* @__PURE__ */ he();
const Ee = /* @__PURE__ */ me(ye);
function je({
  theme: c = "dark",
  duration: b = 2500,
  onDone: p
}) {
  const f = le(), [i, s] = K(!1), [d, g] = K(null), x = async () => {
    try {
      const h = await fetch("https://dummyjson.com/quotes");
      if (!h.ok) throw new Error("Fetch failed");
      const n = (await h.json()).quotes, r = n[Math.floor(Math.random() * n.length)];
      g({ text: r.quote, author: r.author });
    } catch (h) {
      console.warn("❌ Fetch error:", h.message), g({
        text: "Inspiration survives when networks fail.",
        author: "Fallback"
      });
    }
  };
  return se(() => {
    let h = !0;
    s(!0), g(null), x(), document.body.style.overflow = "hidden";
    const R = setTimeout(() => {
      h && (s(!1), document.body.style.overflow = "", p == null || p());
    }, b);
    return () => {
      h = !1, clearTimeout(R), document.body.style.overflow = "";
    };
  }, [f.pathname]), /* @__PURE__ */ k.jsx(fe, { children: i && d && /* @__PURE__ */ k.jsxs(
    de.div,
    {
      className: `fixed inset-0 z-50 flex flex-col items-center justify-center ${c === "dark" ? "bg-black text-white" : "bg-white text-black"}`,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ k.jsx(Ee, { color: c === "dark" ? "#fff" : "#000" }),
        /* @__PURE__ */ k.jsxs(
          "p",
          {
            style: {
              marginTop: "1rem",
              maxWidth: "32rem",
              textAlign: "center",
              fontStyle: "italic",
              padding: "0 1rem",
              fontSize: "1.125rem"
            },
            children: [
              '"',
              d.text,
              '" —',
              " ",
              /* @__PURE__ */ k.jsx("span", { style: { fontStyle: "normal", fontWeight: "600" }, children: d.author })
            ]
          }
        )
      ]
    },
    "quote-loader"
  ) });
}
export {
  je as default
};
