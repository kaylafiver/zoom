 (() => new EventSource("/esbuild").addEventListener("change", () => location.reload()))();
"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n2, l3) {
    for (var u4 in l3)
      n2[u4] = l3[u4];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u4, t3) {
    var i4, o3, r3, f4 = {};
    for (r3 in u4)
      "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = u4[r3];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f4[r3] && (f4[r3] = l3.defaultProps[r3]);
    return d(l3, f4, i4, o3, null);
  }
  function d(n2, t3, i4, o3, r3) {
    var f4 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f4), f4;
  }
  function g(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function m(n2, l3) {
    if (null == l3)
      return n2.__ ? m(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++)
      if (null != (u4 = n2.__k[l3]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n2.type ? m(n2) : null;
  }
  function w(n2) {
    var l3, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return w(n2);
    }
  }
  function k(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, u4, t3, o3, r3, e3, c3, s3, a3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u4 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, s3 = [], a3 = [], (c3 = t3.__P) && ((o3 = v({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), F(c3, o3, r3, t3.__n, void 0 !== c3.ownerSVGElement, 32 & r3.__u ? [e3] : null, s3, null == e3 ? m(r3) : e3, !!(32 & r3.__u), a3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, L(s3, o3, a3), o3.__e != e3 && w(o3)), i.length > u4 && i.sort(f));
    x.__r = 0;
  }
  function C(n2, l3, u4, t3, i4, o3, r3, f4, e3, a3, h4) {
    var v3, p3, y3, d3, _, g2 = t3 && t3.__k || s, b2 = l3.length;
    for (u4.__d = e3, P(u4, l3, g2), e3 = u4.__d, v3 = 0; v3 < b2; v3++)
      null != (y3 = u4.__k[v3]) && "boolean" != typeof y3 && "function" != typeof y3 && (p3 = -1 === y3.__i ? c : g2[y3.__i] || c, y3.__i = v3, F(n2, y3, p3, i4, o3, r3, f4, e3, a3, h4), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && O(p3.ref, null, y3), h4.push(y3.ref, y3.__c || d3, y3)), null == _ && null != d3 && (_ = d3), 65536 & y3.__u || p3.__k === y3.__k ? (d3 || p3.__e != e3 || (e3 = m(p3)), e3 = S(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u4.__d = e3, u4.__e = _;
  }
  function P(n2, l3, u4) {
    var t3, i4, o3, r3, f4, e3 = l3.length, c3 = u4.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i4 = n2.__k[t3] = null == (i4 = l3[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? d(null, i4, null, null, null) : h(i4) ? d(g, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? d(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f4 = I(i4, u4, r3, s3), i4.__i = f4, o3 = null, -1 !== f4 && (s3--, (o3 = u4[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 === r3 + 1 ? a3++ : f4 > r3 ? s3 > e3 - r3 ? a3 += f4 - r3 : a3-- : f4 < r3 ? f4 == r3 - 1 && (a3 = f4 - r3) : a3 = 0, f4 !== t3 + a3 && (i4.__u |= 65536))) : (o3 = u4[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), j(o3, o3, false), u4[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u4[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), j(o3, o3));
  }
  function S(n2, l3, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++)
        t3[i4] && (t3[i4].__ = n2, l3 = S(t3[i4], l3, u4));
      return l3;
    }
    n2.__e != l3 && (u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function I(n2, l3, u4, t3) {
    var i4 = n2.key, o3 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l3[u4];
    if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u4;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f4 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f4 < l3.length) {
          if ((e3 = l3[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type)
            return f4;
          f4++;
        }
      }
    return -1;
  }
  function H(n2, l3, u4) {
    "-" === l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || a.test(l3) ? u4 : u4 + "px";
  }
  function T(n2, l3, u4, t3, i4) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u4)
          n2.style.cssText = u4;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u4 && l3 in u4 || H(n2.style, l3, "");
          if (u4)
            for (l3 in u4)
              t3 && u4[l3] === t3[l3] || H(n2.style, l3, u4[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = Date.now(), n2.addEventListener(l3, o3 ? D : A, o3)) : n2.removeEventListener(l3, o3 ? D : A, o3);
      else {
        if (i4)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u4 ? "" : u4;
            break n;
          } catch (n3) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u4));
      }
  }
  function A(n2) {
    if (this.l) {
      var u4 = this.l[n2.type + false];
      if (n2.t) {
        if (n2.t <= u4.u)
          return;
      } else
        n2.t = Date.now();
      return u4(l.event ? l.event(n2) : n2);
    }
  }
  function D(n2) {
    if (this.l)
      return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function F(n2, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
    var a3, p3, y3, d3, _, m3, w3, k3, x2, P2, S2, $, I2, H2, T2, A2 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n:
      if ("function" == typeof A2)
        try {
          if (k3 = u4.props, x2 = (a3 = A2.contextType) && i4[a3.__c], P2 = a3 ? x2 ? x2.props.value : a3.__ : i4, t3.__c ? w3 = (p3 = u4.__c = t3.__c).__ = p3.__E : ("prototype" in A2 && A2.prototype.render ? u4.__c = p3 = new A2(k3, P2) : (u4.__c = p3 = new b(k3, P2), p3.constructor = A2, p3.render = z), x2 && x2.sub(p3), p3.props = k3, p3.state || (p3.state = {}), p3.context = P2, p3.__n = i4, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A2.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A2.getDerivedStateFromProps(k3, p3.__s))), d3 = p3.props, _ = p3.state, p3.__v = u4, y3)
            null == A2.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && k3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(k3, P2), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(k3, p3.__s, P2) || u4.__v === t3.__v)) {
              for (u4.__v !== t3.__v && (p3.props = k3, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), S2 = 0; S2 < p3._sb.length; S2++)
                p3.__h.push(p3._sb[S2]);
              p3._sb = [], p3.__h.length && f4.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(k3, p3.__s, P2), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _, m3);
            });
          }
          if (p3.context = P2, p3.props = k3, p3.__P = n2, p3.__e = false, $ = l.__r, I2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, $ && $(u4), a3 = p3.render(p3.props, p3.state, p3.context), H2 = 0; H2 < p3._sb.length; H2++)
              p3.__h.push(p3._sb[H2]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, $ && $(u4), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++I2 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i4 = v(v({}, i4), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _)), C(n2, h(T2 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T2 : [T2], u4, t3, i4, o3, r3, f4, e3, c3, s3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && f4.push(p3), w3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u4.__v = null, c3 || null != r3 ? (u4.__e = e3, u4.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u4.__e = t3.__e, u4.__k = t3.__k), l.__e(n3, u4, t3);
        }
      else
        null == r3 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = M(t3.__e, u4, t3, i4, o3, r3, f4, c3, s3);
    (a3 = l.diffed) && a3(u4);
  }
  function L(n2, u4, t3) {
    u4.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++)
      O(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function M(l3, u4, t3, i4, o3, r3, f4, e3, s3) {
    var a3, v3, y3, d3, _, g2, b2, w3 = t3.props, k3 = u4.props, x2 = u4.type;
    if ("svg" === x2 && (o3 = true), null != r3) {
      for (a3 = 0; a3 < r3.length; a3++)
        if ((_ = r3[a3]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
          l3 = _, r3[a3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === x2)
        return document.createTextNode(k3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === x2)
      w3 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), w3 = t3.props || c, !e3 && null != r3)
        for (w3 = {}, a3 = 0; a3 < l3.attributes.length; a3++)
          w3[(_ = l3.attributes[a3]).name] = _.value;
      for (a3 in w3)
        _ = w3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y3 = _ : "key" === a3 || a3 in k3 || T(l3, a3, null, _, o3));
      for (a3 in k3)
        _ = k3[a3], "children" == a3 ? d3 = _ : "dangerouslySetInnerHTML" == a3 ? v3 = _ : "value" == a3 ? g2 = _ : "checked" == a3 ? b2 = _ : "key" === a3 || e3 && "function" != typeof _ || w3[a3] === _ || T(l3, a3, _, w3[a3], o3);
      if (v3)
        e3 || y3 && (v3.__html === y3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3.__html), u4.__k = [];
      else if (y3 && (l3.innerHTML = ""), C(l3, h(d3) ? d3 : [d3], u4, t3, i4, o3 && "foreignObject" !== x2, r3, f4, r3 ? r3[0] : t3.__k && m(t3, 0), e3, s3), null != r3)
        for (a3 = r3.length; a3--; )
          null != r3[a3] && p(r3[a3]);
      e3 || (a3 = "value", void 0 !== g2 && (g2 !== l3[a3] || "progress" === x2 && !g2 || "option" === x2 && g2 !== w3[a3]) && T(l3, a3, g2, w3[a3], false), a3 = "checked", void 0 !== b2 && b2 !== l3[a3] && T(l3, a3, b2, w3[a3], false));
    }
    return l3;
  }
  function O(n2, u4, t3) {
    try {
      "function" == typeof n2 ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function j(n2, u4, t3) {
    var i4, o3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || O(i4, null, u4)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      i4.base = i4.__P = null, n2.__c = void 0;
    }
    if (i4 = n2.__k)
      for (o3 = 0; o3 < i4.length; o3++)
        i4[o3] && j(i4[o3], u4, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function z(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function N(u4, t3, i4) {
    var o3, r3, f4, e3;
    l.__ && l.__(u4, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f4 = [], e3 = [], F(t3, u4 = (!o3 && i4 || t3).__k = y(g, null, [u4]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), L(f4, u4, e3);
  }
  n = s.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i4, o3, r3; l3 = l3.__; )
      if ((i4 = l3.__c) && !i4.__)
        try {
          if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3)
            return i4.__E = i4;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u4), this.props)), n2 && v(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), k(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, x.__r = 0, e = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l;
  var a2 = e2.__b;
  var v2 = e2.__r;
  var l2 = e2.diffed;
  var m2 = e2.__c;
  var s2 = e2.unmount;
  var d2 = e2.__;
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({ __V: c2 }), u4.__[n2];
  }
  function p2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u4, i4) {
    var o3 = h2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i5 = false;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  e2.__b = function(n2) {
    r2 = null, a2 && a2(n2);
  }, e2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
  }, e2.__r = function(n2) {
    v2 && v2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B), i4.__h = [], t2 = 0)), u2 = r2;
  }, e2.diffed = function(n2) {
    l2 && l2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, e2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], e2.__e(r3, n3.__v);
      }
    }), m2 && m2(n2, t3);
  }, e2.unmount = function(n2) {
    s2 && s2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/@stylexjs/stylex/lib/es/stylex.mjs
  var styleq$1 = {};
  Object.defineProperty(styleq$1, "__esModule", {
    value: true
  });
  var styleq_2 = styleq$1.styleq = void 0;
  var cache = /* @__PURE__ */ new WeakMap();
  var compiledKey = "$$css";
  function createStyleq(options) {
    var disableCache;
    var disableMix;
    var transform;
    if (options != null) {
      disableCache = options.disableCache === true;
      disableMix = options.disableMix === true;
      transform = options.transform;
    }
    return function styleq2() {
      var definedProperties = [];
      var className = "";
      var inlineStyle = null;
      var nextCache = disableCache ? null : cache;
      var styles = new Array(arguments.length);
      for (var i4 = 0; i4 < arguments.length; i4++) {
        styles[i4] = arguments[i4];
      }
      while (styles.length > 0) {
        var possibleStyle = styles.pop();
        if (possibleStyle == null || possibleStyle === false) {
          continue;
        }
        if (Array.isArray(possibleStyle)) {
          for (var _i = 0; _i < possibleStyle.length; _i++) {
            styles.push(possibleStyle[_i]);
          }
          continue;
        }
        var style = transform != null ? transform(possibleStyle) : possibleStyle;
        if (style.$$css) {
          var classNameChunk = "";
          if (nextCache != null && nextCache.has(style)) {
            var cacheEntry = nextCache.get(style);
            if (cacheEntry != null) {
              classNameChunk = cacheEntry[0];
              definedProperties.push.apply(definedProperties, cacheEntry[1]);
              nextCache = cacheEntry[2];
            }
          } else {
            var definedPropertiesChunk = [];
            for (var prop in style) {
              var value = style[prop];
              if (prop === compiledKey)
                continue;
              if (typeof value === "string" || value === null) {
                if (!definedProperties.includes(prop)) {
                  definedProperties.push(prop);
                  if (nextCache != null) {
                    definedPropertiesChunk.push(prop);
                  }
                  if (typeof value === "string") {
                    classNameChunk += classNameChunk ? " " + value : value;
                  }
                }
              } else {
                console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
              }
            }
            if (nextCache != null) {
              var weakMap = /* @__PURE__ */ new WeakMap();
              nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
              nextCache = weakMap;
            }
          }
          if (classNameChunk) {
            className = className ? classNameChunk + " " + className : classNameChunk;
          }
        } else {
          if (disableMix) {
            if (inlineStyle == null) {
              inlineStyle = {};
            }
            inlineStyle = Object.assign({}, style, inlineStyle);
          } else {
            var subStyle = null;
            for (var _prop in style) {
              var _value = style[_prop];
              if (_value !== void 0) {
                if (!definedProperties.includes(_prop)) {
                  if (_value != null) {
                    if (inlineStyle == null) {
                      inlineStyle = {};
                    }
                    if (subStyle == null) {
                      subStyle = {};
                    }
                    subStyle[_prop] = _value;
                  }
                  definedProperties.push(_prop);
                  nextCache = null;
                }
              }
            }
            if (subStyle != null) {
              inlineStyle = Object.assign(subStyle, inlineStyle);
            }
          }
        }
      }
      var styleProps = [className, inlineStyle];
      return styleProps;
    };
  }
  var styleq = createStyleq();
  styleq_2 = styleq$1.styleq = styleq;
  styleq.factory = createStyleq;
  var errorForFn = (name) => new Error(`'stylex.${name}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
  var errorForType = (key) => errorForFn(`types.${key}`);
  function props() {
    const options = this;
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }
    if (__implementations.props) {
      return __implementations.props.call(options, styles);
    }
    const [className, style] = styleq_2(styles);
    const result = {};
    if (className != null && className !== "") {
      result.className = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = style;
    }
    return result;
  }
  function attrs() {
    const {
      className,
      style
    } = props(...arguments);
    const result = {};
    if (className != null && className !== "") {
      result.class = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = Object.keys(style).map((key) => `${key}:${style[key]};`).join("");
    }
    return result;
  }
  function stylexCreate(styles) {
    if (__implementations.create != null) {
      const create2 = __implementations.create;
      return create2(styles);
    }
    throw errorForFn("create");
  }
  function stylexDefineVars(styles) {
    if (__implementations.defineVars) {
      return __implementations.defineVars(styles);
    }
    throw errorForFn("defineVars");
  }
  var stylexCreateTheme = (baseTokens, overrides) => {
    if (__implementations.createTheme) {
      return __implementations.createTheme(baseTokens, overrides);
    }
    throw errorForFn("createTheme");
  };
  var stylexInclude = (styles) => {
    if (__implementations.include) {
      return __implementations.include(styles);
    }
    throw errorForFn("include");
  };
  var create = stylexCreate;
  var defineVars = stylexDefineVars;
  var createTheme = stylexCreateTheme;
  var include = stylexInclude;
  var types = {
    angle: (_v) => {
      throw errorForType("angle");
    },
    color: (_v) => {
      throw errorForType("color");
    },
    url: (_v) => {
      throw errorForType("url");
    },
    image: (_v) => {
      throw errorForType("image");
    },
    integer: (_v) => {
      throw errorForType("integer");
    },
    lengthPercentage: (_v) => {
      throw errorForType("lengthPercentage");
    },
    length: (_v) => {
      throw errorForType("length");
    },
    percentage: (_v) => {
      throw errorForType("percentage");
    },
    number: (_v) => {
      throw errorForType("number");
    },
    resolution: (_v) => {
      throw errorForType("resolution");
    },
    time: (_v) => {
      throw errorForType("time");
    },
    transformFunction: (_v) => {
      throw errorForType("transformFunction");
    },
    transformList: (_v) => {
      throw errorForType("transformList");
    }
  };
  var keyframes = (keyframes2) => {
    if (__implementations.keyframes) {
      return __implementations.keyframes(keyframes2);
    }
    throw errorForFn("keyframes");
  };
  var firstThatWorks = function() {
    if (__implementations.firstThatWorks) {
      return __implementations.firstThatWorks(...arguments);
    }
    throw errorForFn("firstThatWorks");
  };
  function _stylex() {
    for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      styles[_key2] = arguments[_key2];
    }
    const [className] = styleq_2(styles);
    return className;
  }
  _stylex.props = props;
  _stylex.attrs = attrs;
  _stylex.create = create;
  _stylex.defineVars = defineVars;
  _stylex.createTheme = createTheme;
  _stylex.include = include;
  _stylex.keyframes = keyframes;
  _stylex.firstThatWorks = firstThatWorks;
  _stylex.types = types;
  var __implementations = {};

  // node_modules/@stylexjs/open-props/lib/colors.stylex.js
  var colors = {
    gray0: "var(--xfx0uqi)",
    gray1: "var(--x1306935)",
    gray2: "var(--x14gnj24)",
    gray3: "var(--xv3mqbl)",
    gray4: "var(--x1yhopjz)",
    gray5: "var(--xd79dd6)",
    gray6: "var(--x8jcnar)",
    gray7: "var(--x1ixc4qk)",
    gray8: "var(--x1ebrg24)",
    gray9: "var(--x1i6h7nh)",
    gray10: "var(--x11n4soy)",
    gray11: "var(--xudhajd)",
    gray12: "var(--x1jnxugc)",
    stone0: "var(--x1d4936c)",
    stone1: "var(--x1rapotm)",
    stone2: "var(--xsfwyjj)",
    stone3: "var(--x1m5mw3l)",
    stone4: "var(--xry5ryt)",
    stone5: "var(--x8x1sjh)",
    stone6: "var(--x1q0fdym)",
    stone7: "var(--x1o831lm)",
    stone8: "var(--xruei51)",
    stone9: "var(--x9jwq82)",
    stone10: "var(--xdzm76j)",
    stone11: "var(--x1mfnrgy)",
    stone12: "var(--x3tvzln)",
    red0: "var(--x1hwnazl)",
    red1: "var(--x5qdhrd)",
    red2: "var(--x1xuwux8)",
    red3: "var(--x1akbc4t)",
    red4: "var(--x1fuaf0c)",
    red5: "var(--xwhypsr)",
    red6: "var(--x1vsj8lk)",
    red7: "var(--xqtzhmo)",
    red8: "var(--x1etp4rv)",
    red9: "var(--x14t4xw1)",
    red10: "var(--xv3is2w)",
    red11: "var(--xzu7x0h)",
    red12: "var(--x1y60ksp)",
    pink0: "var(--xq66qyu)",
    pink1: "var(--x7jhz5w)",
    pink2: "var(--xvzwc0j)",
    pink3: "var(--x11k06xq)",
    pink4: "var(--xnf8tdp)",
    pink5: "var(--xts3stz)",
    pink6: "var(--x1kq4sly)",
    pink7: "var(--xu97gh8)",
    pink8: "var(--xdmru29)",
    pink9: "var(--x1rjxabf)",
    pink10: "var(--x1c0h8b6)",
    pink11: "var(--x7q13jg)",
    pink12: "var(--x138cunv)",
    purple0: "var(--xjhwwtb)",
    purple1: "var(--xgbav3b)",
    purple2: "var(--xz9o0nm)",
    purple3: "var(--x1cktbvc)",
    purple4: "var(--x1ulienb)",
    purple5: "var(--xnd5mik)",
    purple6: "var(--x12vyvun)",
    purple7: "var(--x1vr47gx)",
    purple8: "var(--x3e7yq5)",
    purple9: "var(--xjvtt9f)",
    purple10: "var(--x9au1kk)",
    purple11: "var(--xf4unm9)",
    purple12: "var(--xop7pxg)",
    violet0: "var(--x1d0kepq)",
    violet1: "var(--x17anfkv)",
    violet2: "var(--x1vi3ou6)",
    violet3: "var(--x1cgxppy)",
    violet4: "var(--x15kdq53)",
    violet5: "var(--x17hgne9)",
    violet6: "var(--x1qzb96)",
    violet7: "var(--xbzc2g7)",
    violet8: "var(--x1i8z8qy)",
    violet9: "var(--x1q7vipt)",
    violet10: "var(--x1ibbjbz)",
    violet11: "var(--x1tor031)",
    violet12: "var(--x2kn31d)",
    indigo0: "var(--x13h8t8j)",
    indigo1: "var(--xc9zojv)",
    indigo2: "var(--x1n9gurh)",
    indigo3: "var(--xgr6zvr)",
    indigo4: "var(--x1m8hs49)",
    indigo5: "var(--x1qtm7i0)",
    indigo6: "var(--x155kync)",
    indigo7: "var(--xjslha7)",
    indigo8: "var(--x16p8n3i)",
    indigo9: "var(--xyugnru)",
    indigo10: "var(--x2xs29)",
    indigo11: "var(--x4klp16)",
    indigo12: "var(--x160b5zs)",
    blue0: "var(--x158c4zm)",
    blue1: "var(--x1kuw221)",
    blue2: "var(--x1pus5bc)",
    blue3: "var(--xwbfqyk)",
    blue4: "var(--x1yps9fs)",
    blue5: "var(--x1llakmc)",
    blue6: "var(--x1q9o5vb)",
    blue7: "var(--x1apz8sh)",
    blue8: "var(--x14cfj3s)",
    blue9: "var(--x1i8pr58)",
    blue10: "var(--x1pegnbx)",
    blue11: "var(--x1njlstm)",
    blue12: "var(--xz2e613)",
    cyan0: "var(--x1ni3ghr)",
    cyan1: "var(--x1j20p84)",
    cyan2: "var(--xf83jhu)",
    cyan3: "var(--xhktjx)",
    cyan4: "var(--x1cbrsn2)",
    cyan5: "var(--x2dpv2m)",
    cyan6: "var(--x1d0sinq)",
    cyan7: "var(--x1mo5vvo)",
    cyan8: "var(--x5ccqxh)",
    cyan9: "var(--x7umzgz)",
    cyan10: "var(--xjzs990)",
    cyan11: "var(--x1k7p6qu)",
    cyan12: "var(--xbbrhfa)",
    teal0: "var(--x1nloauu)",
    teal1: "var(--x1gjsl6)",
    teal2: "var(--xonix8c)",
    teal3: "var(--xcslcx5)",
    teal4: "var(--xp05ri1)",
    teal5: "var(--xrbx6yk)",
    teal6: "var(--x55ek5z)",
    teal7: "var(--x1e6p33n)",
    teal8: "var(--xfe070a)",
    teal9: "var(--xczbh0v)",
    teal10: "var(--x1p506wq)",
    teal11: "var(--xn25rxq)",
    teal12: "var(--x1h14xb2)",
    green0: "var(--x18jjon7)",
    green1: "var(--x1yp3doj)",
    green2: "var(--xyrws4n)",
    green3: "var(--x1qd7hud)",
    green4: "var(--xrytbj2)",
    green5: "var(--x9xgpyb)",
    green6: "var(--x16c73x8)",
    green7: "var(--xskkwj2)",
    green8: "var(--xb9ne5d)",
    green9: "var(--xz1n8ep)",
    green10: "var(--xqmeuxc)",
    green11: "var(--x1nfxkot)",
    green12: "var(--x12lqreo)",
    lime0: "var(--xja3eu9)",
    lime1: "var(--xhswavf)",
    lime2: "var(--xbezi5f)",
    lime3: "var(--xnar2ky)",
    lime4: "var(--x1fpus86)",
    lime5: "var(--xsopklf)",
    lime6: "var(--x1u3dgg0)",
    lime7: "var(--x1ca26i8)",
    lime8: "var(--x1f2q67p)",
    lime9: "var(--x1sks0db)",
    lime10: "var(--x1sg0yhf)",
    lime11: "var(--xpoosl6)",
    lime12: "var(--x1avl8zo)",
    yellow0: "var(--x1mc6n9l)",
    yellow1: "var(--x1oxd864)",
    yellow2: "var(--x1tq3e3q)",
    yellow3: "var(--xb868av)",
    yellow4: "var(--x1lu64vm)",
    yellow5: "var(--x1we87pg)",
    yellow6: "var(--x1g4t1q7)",
    yellow7: "var(--xp2inhg)",
    yellow8: "var(--x6aqd9n)",
    yellow9: "var(--x1hrcygu)",
    yellow10: "var(--x58wqcz)",
    yellow11: "var(--x1mvmam4)",
    yellow12: "var(--x1u0un2z)",
    orange0: "var(--xh1f1v4)",
    orange1: "var(--xge9rke)",
    orange2: "var(--x1c5yfnn)",
    orange3: "var(--xzndxjt)",
    orange4: "var(--x1ny7u3u)",
    orange5: "var(--x11th23l)",
    orange6: "var(--x1vqstv6)",
    orange7: "var(--xmzkc4o)",
    orange8: "var(--x7t34h8)",
    orange9: "var(--x1p7u29z)",
    orange10: "var(--x2n8hnd)",
    orange11: "var(--x18bvthn)",
    orange12: "var(--xtaf5xi)",
    choco0: "var(--x17vvmyb)",
    choco1: "var(--x1yui2zw)",
    choco2: "var(--xfs9doc)",
    choco3: "var(--x19mwc9)",
    choco4: "var(--x1twgu8n)",
    choco5: "var(--x1xzz0vg)",
    choco6: "var(--xsoqwtb)",
    choco7: "var(--xtr0tl0)",
    choco8: "var(--x5c9gtc)",
    choco9: "var(--x4w4hrb)",
    choco10: "var(--x1tg7pn)",
    choco11: "var(--x18pnjkp)",
    choco12: "var(--xcqdhmb)",
    brown0: "var(--x1ibjk9s)",
    brown1: "var(--x1kie61q)",
    brown2: "var(--xaqkvnk)",
    brown3: "var(--xvaeg4q)",
    brown4: "var(--x1n8oo0l)",
    brown5: "var(--x1s99blb)",
    brown6: "var(--x1aqn7pr)",
    brown7: "var(--xpzcgoy)",
    brown8: "var(--xao10bx)",
    brown9: "var(--x1vswj4l)",
    brown10: "var(--x1dhc7ct)",
    brown11: "var(--x15if4pe)",
    brown12: "var(--x14bddyn)",
    sand0: "var(--xtdkx0j)",
    sand1: "var(--xo44yi0)",
    sand2: "var(--xzwojyf)",
    sand3: "var(--x9j1dha)",
    sand4: "var(--x1x97ex7)",
    sand5: "var(--x4phdf5)",
    sand6: "var(--x1tgjyl9)",
    sand7: "var(--x8mkrh7)",
    sand8: "var(--x15flal0)",
    sand9: "var(--xxlj7l1)",
    sand10: "var(--x8b46j7)",
    sand11: "var(--x1873bcq)",
    sand12: "var(--x1v2scmh)",
    camo0: "var(--x15jo0sg)",
    camo1: "var(--x1kzknmy)",
    camo2: "var(--x1vl751l)",
    camo3: "var(--x1auj8oa)",
    camo4: "var(--x1nrmxkd)",
    camo5: "var(--x12gqx2b)",
    camo6: "var(--x1hvpc0z)",
    camo7: "var(--x17rv5wg)",
    camo8: "var(--xpq3vi2)",
    camo9: "var(--x1bynxhk)",
    camo10: "var(--x1vsrkxq)",
    camo11: "var(--x13qrgem)",
    camo12: "var(--x1affpa0)",
    jungle0: "var(--x1y97y18)",
    jungle1: "var(--x1774u7q)",
    jungle2: "var(--x1l3bq36)",
    jungle3: "var(--x1dx8poy)",
    jungle4: "var(--xa7izfg)",
    jungle5: "var(--xrs1l9v)",
    jungle6: "var(--x10h0xu4)",
    jungle7: "var(--x12bcshz)",
    jungle8: "var(--x1kjnccn)",
    jungle9: "var(--xvzrr62)",
    jungle10: "var(--x1sxue7u)",
    jungle11: "var(--xk59be7)",
    jungle12: "var(--x1ratus5)",
    __themeName__: "xs47a6"
  };

  // src/stylex/theme.stylex.ts
  var light = {
    backgroundColor: colors.gray1,
    colorCircleButton: colors.cyan11,
    bgColorCircleButton: colors.cyan2,
    primaryText: "red"
  };
  var lightTheme = {
    $$css: true,
    "var(--x1eutwqo)": "x1mny7g9"
  };
  var dark = {
    backgroundColor: colors.gray11,
    colorCircleButton: colors.cyan2,
    bgColorCircleButton: colors.cyan11,
    primaryText: "grey"
  };
  var darkTheme = {
    $$css: true,
    "var(--x1eutwqo)": "x62isa3"
  };

  // src/stylex/button.stylex.ts
  var button = {
    circleSvgIcon: {
      fontSize: "x579bpy",
      color: "x1lhyn6f xq53nvs",
      backgroundColor: "x18kje27 xp9uvxr",
      cursor: "xt0e3qv x1277o0a",
      padding: "x2z31nm",
      paddingInline: null,
      paddingStart: null,
      paddingLeft: null,
      paddingEnd: null,
      paddingRight: null,
      paddingBlock: null,
      paddingTop: null,
      paddingBottom: null,
      borderRadius: "x16rqkct",
      borderStartStartRadius: null,
      borderStartEndRadius: null,
      borderEndStartRadius: null,
      borderEndEndRadius: null,
      borderTopLeftRadius: null,
      borderTopRightRadius: null,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
      $$css: true
    }
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o3, i4, u4) {
    var a3, c3, p3 = {};
    for (c3 in t3)
      "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps))
      for (c3 in a3)
        void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // src/App.tsx
  var layout = {
    main: {
      height: "x1dr59a3",
      width: "xh8yej3",
      padding: "x1n2slt4",
      paddingInline: null,
      paddingStart: null,
      paddingLeft: null,
      paddingEnd: null,
      paddingRight: null,
      paddingBlock: null,
      paddingTop: null,
      paddingBottom: null,
      display: "x78zum5",
      flexDirection: "xdt5ytf",
      alignItems: "x6s0dn4",
      backgroundColor: "xgnp6n0",
      $$css: true
    }
  };
  function App() {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = "light";
      localStorage.setItem("theme", theme);
    }
    const [isLightTheme, setIsLightTheme] = p2(theme !== "light" ? false : true);
    return /* @__PURE__ */ u3("div", { ...props(isLightTheme ? lightTheme : darkTheme, layout.main), children: [
      /* @__PURE__ */ u3("div", { ...{
        className: "x1iyjqo2 x78zum5 x1q0g3np x13a6bvl x1qjc9v5 xrkmrrc"
      }, children: /* @__PURE__ */ u3("div", { onClick: () => setIsLightTheme((prev) => !prev), children: isLightTheme ? /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", ...props(button.circleSvgIcon), width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u3("path", { fill: "currentColor", d: "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2" }) }) : /* @__PURE__ */ u3(g, {}) }) }),
      /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", ...props(button.circleSvgIcon), width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u3("path", { fill: "currentColor", d: "M8 3H6v18h12V3zm8 2v14H8V5zm-3 10h-2v2h2zm7-8h2v2h-2zm2 4V9h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm0 0v2h-2v-2zM2 17h2v-2H2v-2h2v-2H2V9h2V7H2v2H0v2h2v2H0v2h2z" }) })
    ] });
  }
  N(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
//# sourceMappingURL=bundle.js.map
