!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || ne).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length, n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function a(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function r(e, t, n) {
        return fe.isFunction(t) ? fe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? fe.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? fe.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n;
        }) : Se.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function s(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function o(e) {
        var t = {};
        return fe.each(e.match(Me) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function l(e) {
        return e;
    }
    function u(e) {
        throw e;
    }
    function p(e, t, n, i) {
        var a;
        try {
            e && fe.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && fe.isFunction(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    function c() {
        ne.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), 
        fe.ready();
    }
    function d() {
        this.expando = fe.expando + d.uid++;
    }
    function h(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e);
    }
    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(He, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = h(n);
            } catch (e) {}
            Ne.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function m(e, t, n, i) {
        var a, r = 1, s = 20, o = i ? function() {
            return i.cur();
        } : function() {
            return fe.css(e, t, "");
        }, l = o(), u = n && n[3] || (fe.cssNumber[t] ? "" : "px"), p = (fe.cssNumber[t] || "px" !== u && +l) && je.exec(fe.css(e, t));
        if (p && p[3] !== u) {
            u = u || p[3], n = n || [], p = +l || 1;
            do {
                p /= r = r || ".5", fe.style(e, t, p + u);
            } while (r !== (r = o() / l) && 1 !== r && --s);
        }
        return n && (p = +p || +l || 0, a = n[1] ? p + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = p, i.end = a)), a;
    }
    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, a = Fe[i];
        return a || (t = n.body.appendChild(n.createElement(i)), a = fe.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === a && (a = "block"), Fe[i] = a, a);
    }
    function v(e, t) {
        for (var n, i, a = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, 
        t ? ("none" === n && (a[r] = Ae.get(i, "display") || null, a[r] || (i.style.display = "")), 
        "" === i.style.display && qe(i) && (a[r] = g(i))) : "none" !== n && (a[r] = "none", 
        Ae.set(i, "display", n)));
        for (r = 0; r < s; r++) null != a[r] && (e[r].style.display = a[r]);
        return e;
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && a(e, t) ? fe.merge([ e ], n) : n;
    }
    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"));
    }
    function b(e, t, n, i, a) {
        for (var r, s, o, l, u, p, c = t.createDocumentFragment(), d = [], h = 0, f = e.length; h < f; h++) if ((r = e[h]) || 0 === r) if ("object" === fe.type(r)) fe.merge(d, r.nodeType ? [ r ] : r); else if ($e.test(r)) {
            for (s = s || c.appendChild(t.createElement("div")), o = (Ge.exec(r) || [ "", "" ])[1].toLowerCase(), 
            l = Ve[o] || Ve._default, s.innerHTML = l[1] + fe.htmlPrefilter(r) + l[2], p = l[0]; p--; ) s = s.lastChild;
            fe.merge(d, s.childNodes), (s = c.firstChild).textContent = "";
        } else d.push(t.createTextNode(r));
        for (c.textContent = "", h = 0; r = d[h++]; ) if (i && fe.inArray(r, i) > -1) a && a.push(r); else if (u = fe.contains(r.ownerDocument, r), 
        s = y(c.appendChild(r), "script"), u && w(s), n) for (p = 0; r = s[p++]; ) Ye.test(r.type || "") && n.push(r);
        return c;
    }
    function x() {
        return !0;
    }
    function C() {
        return !1;
    }
    function T() {
        try {
            return ne.activeElement;
        } catch (e) {}
    }
    function S(e, t, n, i, a, r) {
        var s, o;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (o in t) S(e, o, n, i, t[o], r);
            return e;
        }
        if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, 
        i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = C; else if (!a) return e;
        return 1 === r && (s = a, (a = function(e) {
            return fe().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, a, i, n);
        });
    }
    function k(e, t) {
        return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? fe(">tbody", e)[0] || e : e;
    }
    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function _(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function z(e, t) {
        var n, i, a, r, s, o, l, u;
        if (1 === t.nodeType) {
            if (Ae.hasData(e) && (r = Ae.access(e), s = Ae.set(t, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (a in u) for (n = 0, i = u[a].length; n < i; n++) fe.event.add(t, a, u[a][n]);
            }
            Ne.hasData(e) && (o = Ne.access(e), l = fe.extend({}, o), Ne.set(t, l));
        }
    }
    function M(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function P(e, t, i, a) {
        t = re.apply([], t);
        var r, s, o, l, u, p, c = 0, d = e.length, h = d - 1, f = t[0], m = fe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !he.checkClone && tt.test(f)) return e.each(function(n) {
            var r = e.eq(n);
            m && (t[0] = f.call(this, n, r.html())), P(r, t, i, a);
        });
        if (d && (r = b(t, e[0].ownerDocument, !1, e, a), s = r.firstChild, 1 === r.childNodes.length && (r = s), 
        s || a)) {
            for (l = (o = fe.map(y(r, "script"), E)).length; c < d; c++) u = r, c !== h && (u = fe.clone(u, !0, !0), 
            l && fe.merge(o, y(u, "script"))), i.call(e[c], u, c);
            if (l) for (p = o[o.length - 1].ownerDocument, fe.map(o, _), c = 0; c < l; c++) u = o[c], 
            Ye.test(u.type || "") && !Ae.access(u, "globalEval") && fe.contains(p, u) && (u.src ? fe._evalUrl && fe._evalUrl(u.src) : n(u.textContent.replace(it, ""), p));
        }
        return e;
    }
    function D(e, t, n) {
        for (var i, a = t ? fe.filter(t, e) : e, r = 0; null != (i = a[r]); r++) n || 1 !== i.nodeType || fe.cleanData(y(i)), 
        i.parentNode && (n && fe.contains(i.ownerDocument, i) && w(y(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function L(e, t, n) {
        var i, a, r, s, o = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), 
        !he.pixelMarginRight() && rt.test(s) && at.test(t) && (i = o.width, a = o.minWidth, 
        r = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, 
        o.minWidth = a, o.maxWidth = r)), void 0 !== s ? s + "" : s;
    }
    function I(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function A(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--; ) if ((e = ct[n] + t) in dt) return e;
    }
    function N(e) {
        var t = fe.cssProps[e];
        return t || (t = fe.cssProps[e] = A(e) || e), t;
    }
    function O(e, t, n) {
        var i = je.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function H(e, t, n, i, a) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += fe.css(e, n + Re[r], !0, a)), 
        i ? ("content" === n && (s -= fe.css(e, "padding" + Re[r], !0, a)), "margin" !== n && (s -= fe.css(e, "border" + Re[r] + "Width", !0, a))) : (s += fe.css(e, "padding" + Re[r], !0, a), 
        "padding" !== n && (s += fe.css(e, "border" + Re[r] + "Width", !0, a)));
        return s;
    }
    function B(e, t, n) {
        var i, a = st(e), r = L(e, t, a), s = "border-box" === fe.css(e, "boxSizing", !1, a);
        return rt.test(r) ? r : (i = s && (he.boxSizingReliable() || r === e.style[t]), 
        (r = parseFloat(r) || 0) + H(e, t, n || (s ? "border" : "content"), i, a) + "px");
    }
    function j(e, t, n, i, a) {
        return new j.prototype.init(e, t, n, i, a);
    }
    function R() {
        ft && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, fe.fx.interval), 
        fe.fx.tick());
    }
    function q() {
        return e.setTimeout(function() {
            ht = void 0;
        }), ht = fe.now();
    }
    function W(e, t) {
        var n, i = 0, a = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) a["margin" + (n = Re[i])] = a["padding" + n] = e;
        return t && (a.opacity = a.width = e), a;
    }
    function F(e, t, n) {
        for (var i, a = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), r = 0, s = a.length; r < s; r++) if (i = a[r].call(n, t, e)) return i;
    }
    function X(e, t, n) {
        var i, a, r, s, o, l, u, p, c = "width" in t || "height" in t, d = this, h = {}, f = e.style, m = e.nodeType && qe(e), g = Ae.get(e, "fxshow");
        n.queue || (null == (s = fe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || o();
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, fe.queue(e, "fx").length || s.empty.fire();
            });
        }));
        for (i in t) if (a = t[i], mt.test(a)) {
            if (delete t[i], r = r || "toggle" === a, a === (m ? "hide" : "show")) {
                if ("show" !== a || !g || void 0 === g[i]) continue;
                m = !0;
            }
            h[i] = g && g[i] || fe.style(e, i);
        }
        if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(h)) {
            c && 1 === e.nodeType && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
            null == (u = g && g.display) && (u = Ae.get(e, "display")), "none" === (p = fe.css(e, "display")) && (u ? p = u : (v([ e ], !0), 
            u = e.style.display || u, p = fe.css(e, "display"), v([ e ]))), ("inline" === p || "inline-block" === p && null != u) && "none" === fe.css(e, "float") && (l || (d.done(function() {
                f.display = u;
            }), null == u && (p = f.display, u = "none" === p ? "" : p)), f.display = "inline-block")), 
            n.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
            })), l = !1;
            for (i in h) l || (g ? "hidden" in g && (m = g.hidden) : g = Ae.access(e, "fxshow", {
                display: u
            }), r && (g.hidden = !m), m && v([ e ], !0), d.done(function() {
                m || v([ e ]), Ae.remove(e, "fxshow");
                for (i in h) fe.style(e, i, h[i]);
            })), l = F(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, 
            l.start = 0));
        }
    }
    function G(e, t) {
        var n, i, a, r, s;
        for (n in e) if (i = fe.camelCase(n), a = t[i], r = e[n], Array.isArray(r) && (a = r[1], 
        r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = fe.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = a);
        } else t[i] = a;
    }
    function Y(e, t, n) {
        var i, a, r = 0, s = Y.prefilters.length, o = fe.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (a) return !1;
            for (var t = ht || q(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(i);
            return o.notifyWith(e, [ u, i, n ]), i < 1 && s ? n : (s || o.notifyWith(e, [ u, 1, 0 ]), 
            o.resolveWith(e, [ u ]), !1);
        }, u = o.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {
                specialEasing: {},
                easing: fe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (a) return this;
                for (a = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (o.notifyWith(e, [ u, 1, 0 ]), o.resolveWith(e, [ u, t ])) : o.rejectWith(e, [ u, t ]), 
                this;
            }
        }), p = u.props;
        for (G(p, u.opts.specialEasing); r < s; r++) if (i = Y.prefilters[r].call(u, e, p, u.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(i.stop, i)), 
        i;
        return fe.map(p, F, u), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), 
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
        fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u;
    }
    function V(e) {
        return (e.match(Me) || []).join(" ");
    }
    function $(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function U(e, t, n, i) {
        var a;
        if (Array.isArray(t)) fe.each(t, function(t, a) {
            n || Et.test(e) ? i(e, a) : U(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i);
        }); else if (n || "object" !== fe.type(t)) i(e, t); else for (a in t) U(e + "[" + a + "]", t[a], n, i);
    }
    function K(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, a = 0, r = t.toLowerCase().match(Me) || [];
            if (fe.isFunction(n)) for (;i = r[a++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function Q(e, t, n, i) {
        function a(o) {
            var l;
            return r[o] = !0, fe.each(e[o] || [], function(e, o) {
                var u = o(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), 
                a(u), !1);
            }), l;
        }
        var r = {}, s = e === Bt;
        return a(t.dataTypes[0]) || !r["*"] && a("*");
    }
    function Z(e, t) {
        var n, i, a = fe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
        return i && fe.extend(!0, e, i), e;
    }
    function J(e, t, n) {
        for (var i, a, r, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in o) if (o[a] && o[a].test(i)) {
            l.unshift(a);
            break;
        }
        if (l[0] in n) r = l[0]; else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break;
                }
                s || (s = a);
            }
            r = r || s;
        }
        if (r) return r !== l[0] && l.unshift(r), n[r];
    }
    function ee(e, t, n, i) {
        var a, r, s, o, l, u = {}, p = e.dataTypes.slice();
        if (p[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = p.shift(); r; ) if (e.responseFields[r] && (n[e.responseFields[r]] = t), 
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = p.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(s = u[l + " " + r] || u["* " + r])) for (a in u) if ((o = a.split(" "))[1] === r && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                !0 === s ? s = u[a] : !0 !== u[a] && (r = o[0], p.unshift(o[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + r
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var te = [], ne = e.document, ie = Object.getPrototypeOf, ae = te.slice, re = te.concat, se = te.push, oe = te.indexOf, le = {}, ue = le.toString, pe = le.hasOwnProperty, ce = pe.toString, de = ce.call(Object), he = {}, fe = function(e, t) {
        return new fe.fn.init(e, t);
    }, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, ve = /-([a-z])/g, ye = function(e, t) {
        return t.toUpperCase();
    };
    fe.fn = fe.prototype = {
        jquery: "3.2.0",
        constructor: fe,
        length: 0,
        toArray: function() {
            return ae.call(this);
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return fe.each(this, e);
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, i, a, r, s = arguments[0] || {}, o = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || fe.isFunction(s) || (s = {}), 
        o === l && (s = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) n = s[t], 
        s !== (i = e[t]) && (u && i && (fe.isPlainObject(i) || (a = Array.isArray(i))) ? (a ? (a = !1, 
        r = n && Array.isArray(n) ? n : []) : r = n && fe.isPlainObject(n) ? n : {}, s[t] = fe.extend(u, r, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, fe.extend({
        expando: "jQuery" + ("3.2.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e);
        },
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = fe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ie(e)) || "function" == typeof (n = pe.call(t, "constructor") && t.constructor) && ce.call(n) === de);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(ve, ye);
        },
        each: function(e, t) {
            var n, a = 0;
            if (i(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++) ; else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? fe.merge(n, "string" == typeof e ? [ e ] : e) : se.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : oe.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, a = e.length; i < n; i++) e[a++] = t[i];
            return e.length = a, e;
        },
        grep: function(e, t, n) {
            for (var i = [], a = 0, r = e.length, s = !n; a < r; a++) !t(e[a], a) !== s && i.push(e[a]);
            return i;
        },
        map: function(e, t, n) {
            var a, r, s = 0, o = [];
            if (i(e)) for (a = e.length; s < a; s++) null != (r = t(e[s], s, n)) && o.push(r); else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
            return re.apply([], o);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, a;
            if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return i = ae.call(arguments, 2), 
            a = function() {
                return e.apply(t || this, i.concat(ae.call(arguments)));
            }, a.guid = e.guid = e.guid || fe.guid++, a;
        },
        now: Date.now,
        support: he
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = te[Symbol.iterator]), 
    fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
    });
    var we = function(e) {
        function t(e, t, n, i) {
            var a, r, s, o, l, p, d, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : j) !== D && P(t), t = t || D, I)) {
                if (11 !== f && (l = me.exec(e))) if (a = l[1]) {
                    if (9 === f) {
                        if (!(s = t.getElementById(a))) return n;
                        if (s.id === a) return n.push(s), n;
                    } else if (h && (s = h.getElementById(a)) && H(t, s) && s.id === a) return n.push(s), 
                    n;
                } else {
                    if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (b.qsa && !X[e + " "] && (!A || !A.test(e))) {
                    if (1 !== f) h = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(we, be) : t.setAttribute("id", o = B), 
                        r = (p = S(e)).length; r--; ) p[r] = "#" + o + " " + c(p[r]);
                        d = p.join(","), h = ge.test(e) && u(t.parentNode) || t;
                    }
                    if (d) try {
                        return K.apply(n, h.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        o === B && t.removeAttribute("id");
                    }
                }
            }
            return E(e.replace(re, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[B] = !0, e;
        }
        function a(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function o(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var a, r = e([], n.length, t), s = r.length; s--; ) n[a = r[s]] && (n[a] = !(i[a] = n[a]));
                });
            });
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function p() {}
        function c(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function d(e, t, n) {
            var i = t.dir, a = t.next, r = a || i, s = n && "parentNode" === r, o = q++;
            return t.first ? function(t, n, a) {
                for (;t = t[i]; ) if (1 === t.nodeType || s) return e(t, n, a);
                return !1;
            } : function(t, n, l) {
                var u, p, c, d = [ R, o ];
                if (l) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || s) if (c = t[B] || (t[B] = {}), 
                p = c[t.uniqueID] || (c[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = p[r]) && u[0] === R && u[1] === o) return d[2] = u[2];
                    if (p[r] = d, d[2] = e(t, n, l)) return !0;
                }
                return !1;
            };
        }
        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var a = e.length; a--; ) if (!e[a](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function f(e, n, i) {
            for (var a = 0, r = n.length; a < r; a++) t(e, n[a], i);
            return i;
        }
        function m(e, t, n, i, a) {
            for (var r, s = [], o = 0, l = e.length, u = null != t; o < l; o++) (r = e[o]) && (n && !n(r, i, a) || (s.push(r), 
            u && t.push(o)));
            return s;
        }
        function g(e, t, n, a, r, s) {
            return a && !a[B] && (a = g(a)), r && !r[B] && (r = g(r, s)), i(function(i, s, o, l) {
                var u, p, c, d = [], h = [], g = s.length, v = i || f(t || "*", o.nodeType ? [ o ] : o, []), y = !e || !i && t ? v : m(v, d, e, o, l), w = n ? r || (i ? e : g || a) ? [] : s : y;
                if (n && n(y, w, o, l), a) for (u = m(w, h), a(u, [], o, l), p = u.length; p--; ) (c = u[p]) && (w[h[p]] = !(y[h[p]] = c));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], p = w.length; p--; ) (c = w[p]) && u.push(y[p] = c);
                            r(null, w = [], u, l);
                        }
                        for (p = w.length; p--; ) (c = w[p]) && (u = r ? Z(i, c) : d[p]) > -1 && (i[u] = !(s[u] = c));
                    }
                } else w = m(w === s ? w.splice(g, w.length) : w), r ? r(null, s, w, l) : K.apply(s, w);
            });
        }
        function v(e) {
            for (var t, n, i, a = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], o = r ? 1 : 0, l = d(function(e) {
                return e === t;
            }, s, !0), u = d(function(e) {
                return Z(t, e) > -1;
            }, s, !0), p = [ function(e, n, i) {
                var a = !r && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, a;
            } ]; o < a; o++) if (n = x.relative[e[o].type]) p = [ d(h(p), n) ]; else {
                if ((n = x.filter[e[o].type].apply(null, e[o].matches))[B]) {
                    for (i = ++o; i < a && !x.relative[e[i].type]; i++) ;
                    return g(o > 1 && h(p), o > 1 && c(e.slice(0, o - 1).concat({
                        value: " " === e[o - 2].type ? "*" : ""
                    })).replace(re, "$1"), n, o < i && v(e.slice(o, i)), i < a && v(e = e.slice(i)), i < a && c(e));
                }
                p.push(n);
            }
            return h(p);
        }
        function y(e, n) {
            var a = n.length > 0, r = e.length > 0, s = function(i, s, o, l, u) {
                var p, c, d, h = 0, f = "0", g = i && [], v = [], y = _, w = i || r && x.find.TAG("*", u), b = R += null == y ? 1 : Math.random() || .1, C = w.length;
                for (u && (_ = s === D || s || u); f !== C && null != (p = w[f]); f++) {
                    if (r && p) {
                        for (c = 0, s || p.ownerDocument === D || (P(p), o = !I); d = e[c++]; ) if (d(p, s || D, o)) {
                            l.push(p);
                            break;
                        }
                        u && (R = b);
                    }
                    a && ((p = !d && p) && h--, i && g.push(p));
                }
                if (h += f, a && f !== h) {
                    for (c = 0; d = n[c++]; ) d(g, v, s, o);
                    if (i) {
                        if (h > 0) for (;f--; ) g[f] || v[f] || (v[f] = $.call(l));
                        v = m(v);
                    }
                    K.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l);
                }
                return u && (R = b, _ = y), g;
            };
            return a ? i(s) : s;
        }
        var w, b, x, C, T, S, k, E, _, z, M, P, D, L, I, A, N, O, H, B = "sizzle" + 1 * new Date(), j = e.document, R = 0, q = 0, W = n(), F = n(), X = n(), G = function(e, t) {
            return e === t && (M = !0), 0;
        }, Y = {}.hasOwnProperty, V = [], $ = V.pop, U = V.push, K = V.push, Q = V.slice, Z = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ae = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), pe = new RegExp("^" + te + "$"), ce = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, xe = function() {
            P();
        }, Ce = d(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            K.apply(V = Q.call(j.childNodes), j.childNodes), V[j.childNodes.length].nodeType;
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    U.apply(e, Q.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        b = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, P = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : j;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, L = D.documentElement, 
            I = !T(D), j !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), 
            b.attributes = a(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), b.getElementsByTagName = a(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length;
            }), b.getElementsByClassName = fe.test(D.getElementsByClassName), b.getById = a(function(e) {
                return L.appendChild(e).id = B, !D.getElementsByName || !D.getElementsByName(B).length;
            }), b.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n, i, a, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                        for (a = t.getElementsByName(e), i = 0; r = a[i++]; ) if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                    }
                    return [];
                }
            }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], a = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = r[a++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return r;
            }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e);
            }, N = [], A = [], (b.qsa = fe.test(D.querySelectorAll)) && (a(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || A.push("\\[" + ee + "*(?:value|" + J + ")"), 
                e.querySelectorAll("[id~=" + B + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), 
                e.querySelectorAll("a#" + B + "+*").length || A.push(".#.+[+~]");
            }), a(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && A.push(":enabled", ":disabled"), 
                L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && A.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), A.push(",.*:");
            })), (b.matchesSelector = fe.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && a(function(e) {
                b.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), N.push("!=", ie);
            }), A = A.length && new RegExp(A.join("|")), N = N.length && new RegExp(N.join("|")), 
            t = fe.test(L.compareDocumentPosition), H = t || fe.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, G = t ? function(e, t) {
                if (e === t) return M = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === j && H(j, e) ? -1 : t === D || t.ownerDocument === j && H(j, t) ? 1 : z ? Z(z, e) - Z(z, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return M = !0, 0;
                var n, i = 0, a = e.parentNode, r = t.parentNode, o = [ e ], l = [ t ];
                if (!a || !r) return e === D ? -1 : t === D ? 1 : a ? -1 : r ? 1 : z ? Z(z, e) - Z(z, t) : 0;
                if (a === r) return s(e, t);
                for (n = e; n = n.parentNode; ) o.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;o[i] === l[i]; ) i++;
                return i ? s(o[i], l[i]) : o[i] === j ? -1 : l[i] === j ? 1 : 0;
            }, D) : D;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && P(e), n = n.replace(le, "='$1']"), b.matchesSelector && I && !X[n + " "] && (!N || !N.test(n)) && (!A || !A.test(n))) try {
                var i = O.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, D, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && P(e), H(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && P(e);
            var n = x.attrHandle[t.toLowerCase()], i = n && Y.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : b.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(we, be);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, a = 0;
            if (M = !b.detectDuplicates, z = !b.sortStable && e.slice(0), e.sort(G), M) {
                for (;t = e[a++]; ) t === e[a] && (i = n.push(a));
                for (;i--; ) e.splice(n[i], 1);
            }
            return z = null, e;
        }, C = t.getText = function(e) {
            var t, n = "", i = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === a || 4 === a) return e.nodeValue;
            } else for (;t = e[i++]; ) n += C(t);
            return n;
        }, (x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ce,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(a) {
                        var r = t.attr(a, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, a) {
                    var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), o = "of-type" === t;
                    return 1 === i && 0 === a ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, p, c, d, h, f, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = o && t.nodeName.toLowerCase(), y = !l && !o, w = !1;
                        if (g) {
                            if (r) {
                                for (;m; ) {
                                    for (d = t; d = d[m]; ) if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling";
                                }
                                return !0;
                            }
                            if (f = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (w = (h = (u = (p = (c = (d = g)[B] || (d[B] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[e] || [])[0] === R && u[1]) && u[2], 
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (w = h = 0) || f.pop(); ) if (1 === d.nodeType && ++w && d === t) {
                                    p[e] = [ R, h, w ];
                                    break;
                                }
                            } else if (y && (w = h = (u = (p = (c = (d = t)[B] || (d[B] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[e] || [])[0] === R && u[1]), 
                            !1 === w) for (;(d = ++h && d && d[m] || (w = h = 0) || f.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && ((p = (c = d[B] || (d[B] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[e] = [ R, w ]), 
                            d !== t)); ) ;
                            return (w -= a) === i || w % i == 0 && w / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var a, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[B] ? r(n) : r.length > 1 ? (a = [ e, e, "", n ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, a = r(e, n), s = a.length; s--; ) e[i = Z(e, a[s])] = !(t[i] = a[s]);
                    }) : function(e) {
                        return r(e, 0, a);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], a = k(e.replace(re, "$1"));
                    return a[B] ? i(function(e, t, n, i) {
                        for (var r, s = a(e, null, i, []), o = e.length; o--; ) (r = s[o]) && (e[o] = !(t[o] = r));
                    }) : function(e, i, r) {
                        return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: o(!1),
                disabled: o(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !x.pseudos.empty(e);
                },
                header: function(e) {
                    return he.test(e.nodeName);
                },
                input: function(e) {
                    return de.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: l(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[w] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(w);
        for (w in {
            submit: !0,
            reset: !0
        }) x.pseudos[w] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(w);
        return p.prototype = x.filters = x.pseudos, x.setFilters = new p(), S = t.tokenize = function(e, n) {
            var i, a, r, s, o, l, u, p = F[e + " "];
            if (p) return n ? 0 : p.slice(0);
            for (o = e, l = [], u = x.preFilter; o; ) {
                i && !(a = se.exec(o)) || (a && (o = o.slice(a[0].length) || o), l.push(r = [])), 
                i = !1, (a = oe.exec(o)) && (i = a.shift(), r.push({
                    value: i,
                    type: a[0].replace(re, " ")
                }), o = o.slice(i.length));
                for (s in x.filter) !(a = ce[s].exec(o)) || u[s] && !(a = u[s](a)) || (i = a.shift(), 
                r.push({
                    value: i,
                    type: s,
                    matches: a
                }), o = o.slice(i.length));
                if (!i) break;
            }
            return n ? o.length : o ? t.error(e) : F(e, l).slice(0);
        }, k = t.compile = function(e, t) {
            var n, i = [], a = [], r = X[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--; ) (r = v(t[n]))[B] ? i.push(r) : a.push(r);
                (r = X(e, y(a, i))).selector = e;
            }
            return r;
        }, E = t.select = function(e, t, n, i) {
            var a, r, s, o, l, p = "function" == typeof e && e, d = !i && S(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && I && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(r.shift().value.length);
                }
                for (a = ce.needsContext.test(e) ? 0 : r.length; a-- && (s = r[a], !x.relative[o = s.type]); ) if ((l = x.find[o]) && (i = l(s.matches[0].replace(ve, ye), ge.test(r[0].type) && u(t.parentNode) || t))) {
                    if (r.splice(a, 1), !(e = i.length && c(r))) return K.apply(n, i), n;
                    break;
                }
            }
            return (p || k(e, d))(i, t, !I, n, !t || ge.test(e) && u(t.parentNode) || t), n;
        }, b.sortStable = B.split("").sort(G).join("") === B, b.detectDuplicates = !!M, 
        P(), b.sortDetached = a(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"));
        }), a(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), b.attributes && a(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), a(function(e) {
            return null == e.getAttribute("disabled");
        }) || r(J, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    fe.find = we, fe.expr = we.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = we.uniqueSort, 
    fe.text = we.getText, fe.isXMLDoc = we.isXML, fe.contains = we.contains, fe.escapeSelector = we.escape;
    var be = function(e, t, n) {
        for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (a && fe(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, Ce = fe.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Se = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [ i ] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, fe.fn.extend({
        find: function(e) {
            var t, n, i = this.length, a = this;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < i; t++) if (fe.contains(a[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, a[t], n);
            return i > 1 ? fe.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0));
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Ce.test(e) ? fe(e) : e || [], !1).length;
        }
    });
    var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (fe.fn.init = function(e, t, n) {
        var i, a;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : Ee.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), 
                Te.test(i[1]) && fe.isPlainObject(t)) for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (a = ne.getElementById(i[2])) && (this[0] = a, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this);
    }).prototype = fe.fn, ke = fe(ne);
    var _e = /^(?:parents|prev(?:Until|All))/, ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fe.fn.extend({
        has: function(e) {
            var t = fe(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (fe.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, a = this.length, r = [], s = "string" != typeof e && fe(e);
            if (!Ce.test(e)) for (;i < a; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                r.push(n);
                break;
            }
            return this.pushStack(r.length > 1 ? fe.uniqueSort(r) : r);
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(fe(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return be(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n);
        },
        next: function(e) {
            return s(e, "nextSibling");
        },
        prev: function(e) {
            return s(e, "previousSibling");
        },
        nextAll: function(e) {
            return be(e, "nextSibling");
        },
        prevAll: function(e) {
            return be(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n);
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return xe(e.firstChild);
        },
        contents: function(e) {
            return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e), 
            fe.merge([], e.childNodes));
        }
    }, function(e, t) {
        fe.fn[e] = function(n, i) {
            var a = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = fe.filter(i, a)), 
            this.length > 1 && (ze[e] || fe.uniqueSort(a), _e.test(e) && a.reverse()), this.pushStack(a);
        };
    });
    var Me = /[^\x20\t\r\n\f]+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, i, a, r = [], s = [], l = -1, u = function() {
            for (a = a || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length; ) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, 
            n = !1);
            e.memory || (n = !1), t = !1, a && (r = n ? [] : "");
        }, p = {
            add: function() {
                return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                    fe.each(n, function(n, i) {
                        fe.isFunction(i) ? e.unique && p.has(i) || r.push(i) : i && i.length && "string" !== fe.type(i) && t(i);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return fe.each(arguments, function(e, t) {
                    for (var n; (n = fe.inArray(t, r, n)) > -1; ) r.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? fe.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function() {
                return r && (r = []), this;
            },
            disable: function() {
                return a = s = [], r = n = "", this;
            },
            disabled: function() {
                return !r;
            },
            lock: function() {
                return a = s = [], n || t || (r = n = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, n) {
                return a || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || u()), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return p;
    }, fe.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2 ], [ "resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return fe.Deferred(function(t) {
                        fe.each(n, function(n, i) {
                            var a = fe.isFunction(e[i[4]]) && e[i[4]];
                            r[i[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, i, a) {
                    function r(t, n, i, a) {
                        return function() {
                            var o = this, p = arguments, c = function() {
                                var e, c;
                                if (!(t < s)) {
                                    if ((e = i.apply(o, p)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(c) ? a ? c.call(e, r(s, n, l, a), r(s, n, u, a)) : (s++, 
                                    c.call(e, r(s, n, l, a), r(s, n, u, a), r(s, n, l, n.notifyWith))) : (i !== l && (o = void 0, 
                                    p = [ e ]), (a || n.resolveWith)(o, p));
                                }
                            }, d = a ? c : function() {
                                try {
                                    c();
                                } catch (e) {
                                    fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== u && (o = void 0, 
                                    p = [ e ]), n.rejectWith(o, p));
                                }
                            };
                            t ? d() : (fe.Deferred.getStackHook && (d.stackTrace = fe.Deferred.getStackHook()), 
                            e.setTimeout(d));
                        };
                    }
                    var s = 0;
                    return fe.Deferred(function(e) {
                        n[0][3].add(r(0, e, fe.isFunction(a) ? a : l, e.notifyWith)), n[1][3].add(r(0, e, fe.isFunction(t) ? t : l)), 
                        n[2][3].add(r(0, e, fe.isFunction(i) ? i : u));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? fe.extend(e, a) : a;
                }
            }, r = {};
            return fe.each(n, function(e, t) {
                var s = t[2], o = t[5];
                a[t[1]] = s.add, o && s.add(function() {
                    i = o;
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                }, r[t[0] + "With"] = s.fireWith;
            }), a.promise(r), t && t.call(r, r), r;
        },
        when: function(e) {
            var t = arguments.length, n = t, i = Array(n), a = ae.call(arguments), r = fe.Deferred(), s = function(e) {
                return function(n) {
                    i[e] = this, a[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || r.resolveWith(i, a);
                };
            };
            if (t <= 1 && (p(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || fe.isFunction(a[n] && a[n].then))) return r.then();
            for (;n--; ) p(a[n], s(n), r.reject);
            return r.promise();
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, fe.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var De = fe.Deferred();
    fe.fn.ready = function(e) {
        return De.then(e).catch(function(e) {
            fe.readyException(e);
        }), this;
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || De.resolveWith(ne, [ fe ]));
        }
    }), fe.ready.then = De.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(fe.ready) : (ne.addEventListener("DOMContentLoaded", c), 
    e.addEventListener("load", c));
    var Le = function(e, t, n, i, a, r, s) {
        var o = 0, l = e.length, u = null == n;
        if ("object" === fe.type(n)) {
            a = !0;
            for (o in n) Le(e, t, o, n[o], !0, r, s);
        } else if (void 0 !== i && (a = !0, fe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), 
        t = null) : (u = t, t = function(e, t, n) {
            return u.call(fe(e), n);
        })), t)) for (;o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
        return a ? e : u ? t.call(e) : l ? t(e[0], n) : r;
    }, Ie = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, a = this.cache(e);
            if ("string" == typeof t) a[fe.camelCase(t)] = n; else for (i in t) a[fe.camelCase(i)] = t[i];
            return a;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(fe.camelCase) : (t = fe.camelCase(t)) in i ? [ t ] : t.match(Me) || []).length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !fe.isEmptyObject(t);
        }
    };
    var Ae = new d(), Ne = new d(), Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, He = /[A-Z]/g;
    fe.extend({
        hasData: function(e) {
            return Ne.hasData(e) || Ae.hasData(e);
        },
        data: function(e, t, n) {
            return Ne.access(e, t, n);
        },
        removeData: function(e, t) {
            Ne.remove(e, t);
        },
        _data: function(e, t, n) {
            return Ae.access(e, t, n);
        },
        _removeData: function(e, t) {
            Ae.remove(e, t);
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var n, i, a, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (a = Ne.get(r), 1 === r.nodeType && !Ae.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = fe.camelCase(i.slice(5)), 
                    f(r, i, a[i]));
                    Ae.set(r, "hasDataAttrs", !0);
                }
                return a;
            }
            return "object" == typeof e ? this.each(function() {
                Ne.set(this, e);
            }) : Le(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Ne.get(r, e))) return n;
                    if (void 0 !== (n = f(r, e))) return n;
                } else this.each(function() {
                    Ne.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Ne.remove(this, e);
            });
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ae.get(e, t), n && (!i || Array.isArray(n) ? i = Ae.access(e, t, fe.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t), i = n.length, a = n.shift(), r = fe._queueHooks(e, t), s = function() {
                fe.dequeue(e, t);
            };
            "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), 
            delete r.stop, a.call(e, s, r)), !i && r && r.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ae.get(e, n) || Ae.access(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    Ae.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, a = fe.Deferred(), r = this, s = this.length, o = function() {
                --i || a.resolveWith(r, [ r ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = Ae.get(r[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(o));
            return o(), a.promise(t);
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, je = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"), Re = [ "Top", "Right", "Bottom", "Left" ], qe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display");
    }, We = function(e, t, n, i) {
        var a, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        a = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return a;
    }, Fe = {};
    fe.fn.extend({
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                qe(this) ? fe(this).show() : fe(this).hide();
            });
        }
    });
    var Xe = /^(?:checkbox|radio)$/i, Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ye = /^$|\/(?:java|ecma)script/i, Ve = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, 
    Ve.th = Ve.td;
    var $e = /<|&#?\w+;/;
    !function() {
        var e = ne.createDocumentFragment().appendChild(ne.createElement("div")), t = ne.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ue = ne.documentElement, Ke = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, i, a) {
            var r, s, o, l, u, p, c, d, h, f, m, g = Ae.get(e);
            if (g) for (n.handler && (n = (r = n).handler, a = r.selector), a && fe.find.matchesSelector(Ue, a), 
            n.guid || (n.guid = fe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(Me) || [ "" ]).length; u--; ) h = m = (o = Ze.exec(t[u]) || [])[1], 
            f = (o[2] || "").split(".").sort(), h && (c = fe.event.special[h] || {}, h = (a ? c.delegateType : c.bindType) || h, 
            c = fe.event.special[h] || {}, p = fe.extend({
                type: h,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: a,
                needsContext: a && fe.expr.match.needsContext.test(a),
                namespace: f.join(".")
            }, r), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), 
            c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), a ? d.splice(d.delegateCount++, 0, p) : d.push(p), 
            fe.event.global[h] = !0);
        },
        remove: function(e, t, n, i, a) {
            var r, s, o, l, u, p, c, d, h, f, m, g = Ae.hasData(e) && Ae.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(Me) || [ "" ]).length; u--; ) if (o = Ze.exec(t[u]) || [], 
                h = m = o[1], f = (o[2] || "").split(".").sort(), h) {
                    for (c = fe.event.special[h] || {}, d = l[h = (i ? c.delegateType : c.bindType) || h] || [], 
                    o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--; ) p = d[r], 
                    !a && m !== p.origType || n && n.guid !== p.guid || o && !o.test(p.namespace) || i && i !== p.selector && ("**" !== i || !p.selector) || (d.splice(r, 1), 
                    p.selector && d.delegateCount--, c.remove && c.remove.call(e, p));
                    s && !d.length && (c.teardown && !1 !== c.teardown.call(e, f, g.handle) || fe.removeEvent(e, h, g.handle), 
                    delete l[h]);
                } else for (h in l) fe.event.remove(e, h + t[u], n, i, !0);
                fe.isEmptyObject(l) && Ae.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, a, r, s, o = fe.event.fix(e), l = new Array(arguments.length), u = (Ae.get(this, "events") || {})[o.type] || [], p = fe.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, o)) {
                for (s = fe.event.handlers.call(this, o, u), t = 0; (a = s[t++]) && !o.isPropagationStopped(); ) for (o.currentTarget = a.elem, 
                n = 0; (r = a.handlers[n++]) && !o.isImmediatePropagationStopped(); ) o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, 
                o.data = r.data, void 0 !== (i = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), 
                o.stopPropagation()));
                return p.postDispatch && p.postDispatch.call(this, o), o.result;
            }
        },
        handlers: function(e, t) {
            var n, i, a, r, s, o = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[a = (i = t[n]).selector + " "] && (s[a] = i.needsContext ? fe(a, this).index(u) > -1 : fe.find(a, this, null, [ u ]).length), 
                s[a] && r.push(i);
                r.length && o.push({
                    elem: u,
                    handlers: r
                });
            }
            return u = this, l < t.length && o.push({
                elem: u,
                handlers: t.slice(l)
            }), o;
        },
        addProp: function(e, t) {
            Object.defineProperty(fe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: fe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[fe.expando] ? e : new fe.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (Xe.test(this.type) && this.click && a(this, "input")) return this.click(), !1;
                },
                _default: function(e) {
                    return a(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, fe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, fe.Event = function(e, t) {
        if (!(this instanceof fe.Event)) return new fe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : C, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0;
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, fe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, fe.event.addProp), fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, a = e.relatedTarget, r = e.handleObj;
                return a && (a === i || fe.contains(i, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), fe.fn.extend({
        on: function(e, t, n, i) {
            return S(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return S(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, a;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), 
            this.each(function() {
                fe.event.remove(this, e, n, t);
            });
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, a, r, s, o = e.cloneNode(!0), l = fe.contains(e.ownerDocument, e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e))) for (s = y(o), 
            i = 0, a = (r = y(e)).length; i < a; i++) M(r[i], s[i]);
            if (t) if (n) for (r = r || y(e), s = s || y(o), i = 0, a = r.length; i < a; i++) z(r[i], s[i]); else z(e, o);
            return (s = y(o, "script")).length > 0 && w(s, !l && y(e, "script")), o;
        },
        cleanData: function(e) {
            for (var t, n, i, a = fe.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Ie(n)) {
                if (t = n[Ae.expando]) {
                    if (t.events) for (i in t.events) a[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
                    n[Ae.expando] = void 0;
                }
                n[Ne.expando] && (n[Ne.expando] = void 0);
            }
        }
    }), fe.fn.extend({
        detach: function(e) {
            return D(this, e, !0);
        },
        remove: function(e) {
            return D(this, e);
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return P(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t);
            });
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Ge.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(y(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(y(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, i = [], a = fe(e), r = a.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), 
            fe(a[s])[t](n), se.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var at = /^margin/, rt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"), st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                o.innerHTML = "", Ue.appendChild(s);
                var t = e.getComputedStyle(o);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", 
                a = "4px" === t.marginRight, Ue.removeChild(s), o = null;
            }
        }
        var n, i, a, r, s = ne.createElement("div"), o = ne.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", 
        he.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(o), fe.extend(he, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), i;
            },
            pixelMarginRight: function() {
                return t(), a;
            },
            reliableMarginLeft: function() {
                return t(), r;
            }
        }));
    }();
    var ot = /^(none|table(?!-c[ea]).+)/, lt = /^--/, ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ct = [ "Webkit", "Moz", "ms" ], dt = ne.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, r, s, o = fe.camelCase(t), l = lt.test(t), u = e.style;
                if (l || (t = N(o)), s = fe.cssHooks[t] || fe.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(e, !1, i)) ? a : u[t];
                "string" === (r = typeof n) && (a = je.exec(n)) && a[1] && (n = m(e, t, a), r = "number"), 
                null != n && n === n && ("number" === r && (n += a && a[3] || (fe.cssNumber[o] ? "" : "px")), 
                he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
            }
        },
        css: function(e, t, n, i) {
            var a, r, s, o = fe.camelCase(t);
            return lt.test(t) || (t = N(o)), (s = fe.cssHooks[t] || fe.cssHooks[o]) && "get" in s && (a = s.get(e, !0, n)), 
            void 0 === a && (a = L(e, t, i)), "normal" === a && t in pt && (a = pt[t]), "" === n || n ? (r = parseFloat(a), 
            !0 === n || isFinite(r) ? r || 0 : a) : a;
        }
    }), fe.each([ "height", "width" ], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ot.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, i) : We(e, ut, function() {
                    return B(e, t, i);
                });
            },
            set: function(e, n, i) {
                var a, r = i && st(e), s = i && H(e, t, i, "border-box" === fe.css(e, "boxSizing", !1, r), r);
                return s && (a = je.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), 
                O(e, n, s);
            }
        };
    }), fe.cssHooks.marginLeft = I(he.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) a[e + Re[i] + t] = r[i] || r[i - 2] || r[0];
                return a;
            }
        }, at.test(e) || (fe.cssHooks[e + t].set = O);
    }), fe.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var i, a, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = st(e), a = t.length; s < a; s++) r[t[s]] = fe.css(e, t[s], !1, i);
                    return r;
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), fe.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, i, a, r) {
            this.elem = e, this.prop = n, this.easing = a || fe.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = r || (fe.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : j.propHooks._default.set(this), this;
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0);
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, fe.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, fe.fx = j.prototype.init, fe.fx.step = {};
    var ht, ft, mt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    fe.Animation = fe.extend(Y, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, je.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Me);
            for (var n, i = 0, a = e.length; i < a; i++) n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], 
            Y.tweeners[n].unshift(t);
        },
        prefilters: [ X ],
        prefilter: function(e, t) {
            t ? Y.prefilters.unshift(e) : Y.prefilters.push(e);
        }
    }), fe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return fe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue);
        }, i;
    }, fe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var a = fe.isEmptyObject(e), r = fe.speed(t, n, i), s = function() {
                var t = Y(this, fe.extend({}, e), r);
                (a || Ae.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, a = null != e && e + "queueHooks", r = fe.timers, s = Ae.get(this);
                if (a) s[a] && s[a].stop && i(s[a]); else for (a in s) s[a] && s[a].stop && gt.test(a) && i(s[a]);
                for (a = r.length; a--; ) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), 
                t = !1, r.splice(a, 1));
                !t && n || fe.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Ae.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], r = fe.timers, s = i ? i.length : 0;
                for (n.finish = !0, fe.queue(this, e, []), a && a.stop && a.stop.call(this, !0), 
                t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), 
                r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), fe.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function(e, i, a) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, a);
        };
    }), fe.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        fe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), fe.timers = [], fe.fx.tick = function() {
        var e, t = 0, n = fe.timers;
        for (ht = fe.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || fe.fx.stop(), ht = void 0;
    }, fe.fx.timer = function(e) {
        fe.timers.push(e), fe.fx.start();
    }, fe.fx.interval = 13, fe.fx.start = function() {
        ft || (ft = !0, R());
    }, fe.fx.stop = function() {
        ft = null;
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fn.delay = function(t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var a = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(a);
            };
        });
    }, function() {
        var e = ne.createElement("input"), t = ne.createElement("select").appendChild(ne.createElement("option"));
        e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = t.selected, (e = ne.createElement("input")).value = "t", 
        e.type = "radio", he.radioValue = "t" === e.value;
    }();
    var vt, yt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function(e, t) {
            return Le(this, fe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e);
            });
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var i, a, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (a = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? vt : void 0)), 
            void 0 !== n ? null === n ? void fe.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = fe.find.attr(e, t), 
            null == i ? void 0 : i));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && a(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, a = t && t.match(Me);
            if (a && 1 === e.nodeType) for (;n = a[i++]; ) e.removeAttribute(n);
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || fe.find.attr;
        yt[t] = function(e, t, i) {
            var a, r, s = t.toLowerCase();
            return i || (r = yt[s], yt[s] = a, a = null != n(e, t, i) ? s : null, yt[s] = r), 
            a;
        };
    });
    var wt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Le(this, fe.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[fe.propFix[e] || e];
            });
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var i, a, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, 
            a = fe.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), he.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), fe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fe.propFix[this.toLowerCase()] = this;
    }), fe.fn.extend({
        addClass: function(e) {
            var t, n, i, a, r, s, o, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, $(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(Me) || []; n = this[l++]; ) if (a = $(n), 
            i = 1 === n.nodeType && " " + V(a) + " ") {
                for (s = 0; r = t[s++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                a !== (o = V(i)) && n.setAttribute("class", o);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, a, r, s, o, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, $(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Me) || []; n = this[l++]; ) if (a = $(n), 
            i = 1 === n.nodeType && " " + V(a) + " ") {
                for (s = 0; r = t[s++]; ) for (;i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                a !== (o = V(i)) && n.setAttribute("class", o);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, $(this), t), t);
            }) : this.each(function() {
                var t, i, a, r;
                if ("string" === n) for (i = 0, a = fe(this), r = e.match(Me) || []; t = r[i++]; ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || ((t = $(this)) && Ae.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ae.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + V($(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var xt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, i, a = this[0];
            {
                if (arguments.length) return i = fe.isFunction(e), this.each(function(n) {
                    var a;
                    1 === this.nodeType && (null == (a = i ? e.call(this, n, fe(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = fe.map(a, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a));
                });
                if (a) return (t = fe.valHooks[a.type] || fe.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, 
                "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n);
            }
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : V(fe.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, o = "select-one" === e.type, l = o ? null : [], u = o ? s + 1 : r.length;
                    for (i = s < 0 ? u : o ? s : 0; i < u; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup"))) {
                        if (t = fe(n).val(), o) return t;
                        l.push(t);
                    }
                    return l;
                },
                set: function(e, t) {
                    for (var n, i, a = e.options, r = fe.makeArray(t), s = a.length; s--; ) ((i = a[s]).selected = fe.inArray(fe.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r;
                }
            }
        }
    }), fe.each([ "radio", "checkbox" ], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1;
            }
        }, he.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    fe.extend(fe.event, {
        trigger: function(t, n, i, a) {
            var r, s, o, l, u, p, c, d = [ i || ne ], h = pe.call(t, "type") ? t.type : t, f = pe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(h + fe.event.triggered) && (h.indexOf(".") > -1 && (h = (f = h.split(".")).shift(), 
            f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[fe.expando] ? t : new fe.Event(h, "object" == typeof t && t), 
            t.isTrigger = a ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : fe.makeArray(n, [ t ]), 
            c = fe.event.special[h] || {}, a || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                if (!a && !c.noBubble && !fe.isWindow(i)) {
                    for (l = c.delegateType || h, Ct.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    o = s;
                    o === (i.ownerDocument || ne) && d.push(o.defaultView || o.parentWindow || e);
                }
                for (r = 0; (s = d[r++]) && !t.isPropagationStopped(); ) t.type = r > 1 ? l : c.bindType || h, 
                (p = (Ae.get(s, "events") || {})[t.type] && Ae.get(s, "handle")) && p.apply(s, n), 
                (p = u && s[u]) && p.apply && Ie(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = h, a || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), n) || !Ie(i) || u && fe.isFunction(i[h]) && !fe.isWindow(i) && ((o = i[u]) && (i[u] = null), 
                fe.event.triggered = h, i[h](), fe.event.triggered = void 0, o && (i[u] = o)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = fe.extend(new fe.Event(), n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t);
        }
    }), fe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0);
        }
    }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), he.focusin = "onfocusin" in e, he.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e));
        };
        fe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, a = Ae.access(i, t);
                a || i.addEventListener(e, n, !0), Ae.access(i, t, (a || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, a = Ae.access(i, t) - 1;
                a ? Ae.access(i, t, a) : (i.removeEventListener(e, n, !0), Ae.remove(i, t));
            }
        };
    });
    var Tt = e.location, St = fe.now(), kt = /\?/;
    fe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), 
        n;
    };
    var Et = /\[\]$/, _t = /\r?\n/g, zt = /^(?:submit|button|image|reset|file)$/i, Mt = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, i = [], a = function(e, t) {
            var n = fe.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            a(this.name, this.value);
        }); else for (n in e) U(n, e[n], t, a);
        return i.join("&");
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && Mt.test(this.nodeName) && !zt.test(e) && (this.checked || !Xe.test(e));
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : Array.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                };
            }).get();
        }
    });
    var Pt = /%20/g, Dt = /#.*$/, Lt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm, At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nt = /^(?:GET|HEAD)$/, Ot = /^\/\//, Ht = {}, Bt = {}, jt = "*/".concat("*"), Rt = ne.createElement("a");
    Rt.href = Tt.href, fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: At.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Z(Z(e, fe.ajaxSettings), t) : Z(fe.ajaxSettings, e);
        },
        ajaxPrefilter: K(Ht),
        ajaxTransport: K(Bt),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var u, d, h, b, x, C = n;
                p || (p = !0, l && e.clearTimeout(l), a = void 0, s = o || "", T.readyState = t > 0 ? 4 : 0, 
                u = t >= 200 && t < 300 || 304 === t, i && (b = J(f, T, i)), b = ee(f, b, T, u), 
                u ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (fe.lastModified[r] = x), 
                (x = T.getResponseHeader("etag")) && (fe.etag[r] = x)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                d = b.data, u = !(h = b.error))) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                T.status = t, T.statusText = (n || C) + "", u ? v.resolveWith(m, [ d, C, T ]) : v.rejectWith(m, [ T, C, h ]), 
                T.statusCode(w), w = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [ T, f, u ? d : h ]), 
                y.fireWith(m, [ T, C ]), c && (g.trigger("ajaxComplete", [ T, f ]), --fe.active || fe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var a, r, s, o, l, u, p, c, d, h, f = fe.ajaxSetup({}, n), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? fe(m) : fe.event, v = fe.Deferred(), y = fe.Callbacks("once memory"), w = f.statusCode || {}, b = {}, x = {}, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!o) for (o = {}; t = It.exec(s); ) o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return p ? s : null;
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == p && (f.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (p) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || C;
                    return a && a.abort(t), i(0, t), this;
                }
            };
            if (v.promise(T), f.url = ((t || f.url || Tt.href) + "").replace(Ot, Tt.protocol + "//"), 
            f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Me) || [ "" ], 
            null == f.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host;
                } catch (e) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = fe.param(f.data, f.traditional)), 
            Q(Ht, f, n, T), p) return T;
            (c = fe.event && f.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), 
            f.type = f.type.toUpperCase(), f.hasContent = !Nt.test(f.type), r = f.url.replace(Dt, ""), 
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pt, "+")) : (h = f.url.slice(r.length), 
            f.data && (r += (kt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Lt, "$1"), 
            h = (kt.test(r) ? "&" : "?") + "_=" + St++ + h), f.url = r + h), f.ifModified && (fe.lastModified[r] && T.setRequestHeader("If-Modified-Since", fe.lastModified[r]), 
            fe.etag[r] && T.setRequestHeader("If-None-Match", fe.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), 
            T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || p)) return T.abort();
            if (C = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), a = Q(Bt, f, n, T)) {
                if (T.readyState = 1, c && g.trigger("ajaxSend", [ T, f ]), p) return T;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout");
                }, f.timeout));
                try {
                    p = !1, a.send(b, i);
                } catch (e) {
                    if (p) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script");
        }
    }), fe.each([ "get", "post" ], function(e, t) {
        fe[t] = function(e, n, i, a) {
            return fe.isFunction(n) && (a = a || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: i
            }, fe.isPlainObject(e) && e));
        };
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, fe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = fe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                fe(this).replaceWith(this.childNodes);
            }), this;
        }
    }), fe.expr.pseudos.hidden = function(e) {
        return !fe.expr.pseudos.visible(e);
    }, fe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, fe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var qt = {
        0: 200,
        1223: 204
    }, Wt = fe.ajaxSettings.xhr();
    he.cors = !!Wt && "withCredentials" in Wt, he.ajax = Wt = !!Wt, fe.ajaxTransport(function(t) {
        var n, i;
        if (he.cors || Wt && !t.crossDomain) return {
            send: function(a, r) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                for (s in a) o.setRequestHeader(s, a[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(qt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()));
                    };
                }, o.onload = n(), i = o.onerror = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    o.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e;
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, a) {
                    t = fe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type);
                    }), ne.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Ft = [], Xt = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || fe.expando + "_" + St++;
            return this[e] = !0, e;
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var a, r, s, o = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        o ? t[o] = t[o].replace(Xt, "$1" + a) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), 
        t.converters["script json"] = function() {
            return s || fe.error(a + " was not called"), s[0];
        }, t.dataTypes[0] = "json", r = e[a], e[a] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === r ? fe(e).removeProp(a) : e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, 
            Ft.push(a)), s && fe.isFunction(r) && r(s[0]), s = r = void 0;
        }), "script";
    }), he.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), fe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, a, r;
        return t || (he.createHTMLDocument ? ((i = (t = ne.implementation.createHTMLDocument("")).createElement("base")).href = ne.location.href, 
        t.head.appendChild(i)) : t = ne), a = Te.exec(e), r = !n && [], a ? [ t.createElement(a[1]) ] : (a = b([ e ], t, r), 
        r && r.length && fe(r).remove(), fe.merge([], a.childNodes));
    }, fe.fn.load = function(e, t, n) {
        var i, a, r, s = this, o = e.indexOf(" ");
        return o > -1 && (i = V(e.slice(o)), e = e.slice(0, o)), fe.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (a = "POST"), s.length > 0 && fe.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [ e.responseText, t, e ]);
            });
        }), this;
    }, fe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), fe.expr.pseudos.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem;
        }).length;
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var i, a, r, s, o, l, u = fe.css(e, "position"), p = fe(e), c = {};
            "static" === u && (e.style.position = "relative"), o = p.offset(), r = fe.css(e, "top"), 
            l = fe.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (s = (i = p.position()).top, 
            a = i.left) : (s = parseFloat(r) || 0, a = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, o))), 
            null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + a), 
            "using" in t ? t.using.call(e, c) : p.css(c);
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t);
            });
            var t, n, i, a, r = this[0];
            if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, 
            n = t.documentElement, a = t.defaultView, {
                top: i.top + a.pageYOffset - n.clientTop,
                left: i.left + a.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), a(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + fe.css(e[0], "borderTopWidth", !0),
                    left: i.left + fe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - fe.css(n, "marginTop", !0),
                    left: t.left - i.left - fe.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === fe.css(e, "position"); ) e = e.offsetParent;
                return e || Ue;
            });
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        fe.fn[e] = function(i) {
            return Le(this, function(e, i, a) {
                var r;
                if (fe.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === a) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[i] = a;
            }, e, i, arguments.length);
        };
    }), fe.each([ "top", "left" ], function(e, t) {
        fe.cssHooks[t] = I(he.pixelPosition, function(e, n) {
            if (n) return n = L(e, t), rt.test(n) ? fe(e).position()[t] + "px" : n;
        });
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            fe.fn[i] = function(a, r) {
                var s = arguments.length && (n || "boolean" != typeof a), o = n || (!0 === a || !0 === r ? "margin" : "border");
                return Le(this, function(t, n, a) {
                    var r;
                    return fe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, 
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? fe.css(t, n, o) : fe.style(t, n, a, o);
                }, t, s ? a : void 0, s);
            };
        });
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0);
        }
    }), fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = a, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe;
    });
    var Gt = e.jQuery, Yt = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = Yt), t && e.jQuery === fe && (e.jQuery = Gt), fe;
    }, t || (e.jQuery = e.$ = fe), fe;
}), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : e(jQuery);
}(function(e) {
    function t(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
        };
    }
    e.ui = e.ui || {};
    e.ui.version = "1.12.1";
    var n = 0, i = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(n) {
            var i, a, r;
            for (r = 0; null != (a = n[r]); r++) try {
                (i = e._data(a, "events")) && i.remove && e(a).triggerHandler("remove");
            } catch (e) {}
            t(n);
        };
    }(e.cleanData), e.widget = function(t, n, i) {
        var a, r, s, o = {}, l = t.split(".")[0], u = l + "-" + (t = t.split(".")[1]);
        return i || (i = n, n = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [ {} ].concat(i))), 
        e.expr[":"][u.toLowerCase()] = function(t) {
            return !!e.data(t, u);
        }, e[l] = e[l] || {}, a = e[l][t], r = e[l][t] = function(e, t) {
            if (!this._createWidget) return new r(e, t);
            arguments.length && this._createWidget(e, t);
        }, e.extend(r, a, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n(), s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
            e.isFunction(i) ? o[t] = function() {
                function e() {
                    return n.prototype[t].apply(this, arguments);
                }
                function a(e) {
                    return n.prototype[t].apply(this, e);
                }
                return function() {
                    var t, n = this._super, r = this._superApply;
                    return this._super = e, this._superApply = a, t = i.apply(this, arguments), this._super = n, 
                    this._superApply = r, t;
                };
            }() : o[t] = i;
        }), r.prototype = e.widget.extend(s, {
            widgetEventPrefix: a ? s.widgetEventPrefix || t : t
        }, o, {
            constructor: r,
            namespace: l,
            widgetName: t,
            widgetFullName: u
        }), a ? (e.each(a._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, r, n._proto);
        }), delete a._childConstructors) : n._childConstructors.push(r), e.widget.bridge(t, r), 
        r;
    }, e.widget.extend = function(t) {
        for (var n, a, r = i.call(arguments, 1), s = 0, o = r.length; s < o; s++) for (n in r[s]) a = r[s][n], 
        r[s].hasOwnProperty(n) && void 0 !== a && (e.isPlainObject(a) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], a) : e.widget.extend({}, a) : t[n] = a);
        return t;
    }, e.widget.bridge = function(t, n) {
        var a = n.prototype.widgetFullName || t;
        e.fn[t] = function(r) {
            var s = "string" == typeof r, o = i.call(arguments, 1), l = this;
            return s ? this.length || "instance" !== r ? this.each(function() {
                var n, i = e.data(this, a);
                return "instance" === r ? (l = i, !1) : i ? e.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, o), 
                n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'");
            }) : l = void 0 : (o.length && (r = e.widget.extend.apply(null, [ r ].concat(o))), 
            this.each(function() {
                var t = e.data(this, a);
                t ? (t.option(r || {}), t._init && t._init()) : e.data(this, a, new n(r, this));
            })), l;
        };
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), 
            this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy();
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            var t = this;
            this._destroy(), e.each(this.classesElementLookup, function(e, n) {
                t._removeClass(n, e);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: e.noop,
        widget: function() {
            return this.element;
        },
        option: function(t, n) {
            var i, a, r, s = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                for (a = s[t] = e.widget.extend({}, this.options[t]), r = 0; r < i.length - 1; r++) a[i[r]] = a[i[r]] || {}, 
                a = a[i[r]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === a[t] ? null : a[t];
                a[t] = n;
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                s[t] = n;
            }
            return this._setOptions(s), this;
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this;
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), 
            this;
        },
        _setOptionClasses: function(t) {
            var n, i, a;
            for (n in t) a = this.classesElementLookup[n], t[n] !== this.options.classes[n] && a && a.length && (i = e(a.get()), 
            this._removeClass(a, n), i.addClass(this._classes({
                element: i,
                keys: n,
                classes: t,
                add: !0
            })));
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), 
            e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(t) {
            function n(n, r) {
                var s, o;
                for (o = 0; o < n.length; o++) s = a.classesElementLookup[n[o]] || e(), s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get()), 
                a.classesElementLookup[n[o]] = s, i.push(n[o]), r && t.classes[n[o]] && i.push(t.classes[n[o]]);
            }
            var i = [], a = this;
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t), this._on(t.element, {
                remove: "_untrackClassesElement"
            }), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), 
            i.join(" ");
        },
        _untrackClassesElement: function(t) {
            var n = this;
            e.each(n.classesElementLookup, function(i, a) {
                -1 !== e.inArray(t.target, a) && (n.classesElementLookup[i] = e(a.not(t.target).get()));
            });
        },
        _removeClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !1);
        },
        _addClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !0);
        },
        _toggleClass: function(e, t, n, i) {
            i = "boolean" == typeof i ? i : n;
            var a = "string" == typeof e || null === e, r = {
                extra: a ? t : n,
                keys: a ? e : t,
                element: a ? this.element : e,
                add: i
            };
            return r.element.toggleClass(this._classes(r), i), this;
        },
        _on: function(t, n, i) {
            var a, r = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = a = e(n), this.bindings = this.bindings.add(n)) : (i = n, 
            n = this.element, a = this.widget()), e.each(i, function(i, s) {
                function o() {
                    if (t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? r[s] : s).apply(r, arguments);
                }
                "string" != typeof s && (o.guid = s.guid = s.guid || o.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + r.eventNamespace, p = l[2];
                p ? a.on(u, p, o) : n.on(u, o);
            });
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), 
            this.hoverable = e(this.hoverable.not(t).get());
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments);
            }
            var i = this;
            return setTimeout(n, t || 0);
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus");
                },
                focusout: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(t, n, i) {
            var a, r, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
            n.target = this.element[0], r = n.originalEvent) for (a in r) a in n || (n[a] = r[a]);
            return this.element.trigger(n, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [ n ].concat(i)) || n.isDefaultPrevented());
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, a, r) {
            "string" == typeof a && (a = {
                effect: a
            });
            var s, o = a ? !0 === a || "number" == typeof a ? n : a.effect || n : t;
            "number" == typeof (a = a || {}) && (a = {
                duration: a
            }), s = !e.isEmptyObject(a), a.complete = r, a.delay && i.delay(a.delay), s && e.effects && e.effects.effect[o] ? i[t](a) : o !== t && i[o] ? i[o](a.duration, a.easing, r) : i.queue(function(n) {
                e(this)[t](), r && r.call(i[0]), n();
            });
        };
    });
    e.widget, e.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form);
    }, e.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = e(this);
            setTimeout(function() {
                var n = t.data("ui-form-reset-instances");
                e.each(n, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var e = this.form.data("ui-form-reset-instances") || [];
                e.length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), 
                this.form.data("ui-form-reset-instances", e);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(e.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, e.ui.escapeSelector = function() {
        var e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(t) {
            return t.replace(e, "\\$1");
        };
    }(), e.fn.labels = function() {
        var t, n, i, a, r;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (a = this.eq(0).parents("label"), 
        (i = this.attr("id")) && (r = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), 
        n = "label[for='" + e.ui.escapeSelector(i) + "']", a = a.add(r.find(n).addBack(n))), 
        this.pushStack(a));
    };
    var a = /ui-corner-([a-z]){2,6}/g;
    e.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
            this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function() {
            var t = this, n = [];
            e.each(this.options.items, function(i, a) {
                var r, s = {};
                if (a) return "controlgroupLabel" === i ? ((r = t.element.find(a)).each(function() {
                    var t = e(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), t._addClass(r, null, "ui-widget ui-widget-content ui-state-default"), void (n = n.concat(r.get()))) : void (e.fn[i] && (s = t["_" + i + "Options"] ? t["_" + i + "Options"]("middle") : {
                    classes: {}
                }, t.element.find(a).each(function() {
                    var a = e(this), r = a[i]("instance"), o = e.widget.extend({}, s);
                    if ("button" !== i || !a.parent(".ui-spinner").length) {
                        r || (r = a[i]()[i]("instance")), r && (o.classes = t._resolveClassesValues(o.classes, r)), 
                        a[i](o);
                        var l = a[i]("widget");
                        e.data(l[0], "ui-controlgroup-data", r || a[i]("instance")), n.push(l[0]);
                    }
                })));
            }), this.childWidgets = e(e.unique(n)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(t) {
            this.childWidgets.each(function() {
                var n = e(this).data("ui-controlgroup-data");
                n && n[t] && n[t]();
            });
        },
        _updateCornerClass: function(e, t) {
            var n = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(e, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
            this._addClass(e, null, n);
        },
        _buildSimpleOptions: function(e, t) {
            var n = "vertical" === this.options.direction, i = {
                classes: {}
            };
            return i.classes[t] = {
                middle: "",
                first: "ui-corner-" + (n ? "top" : "left"),
                last: "ui-corner-" + (n ? "bottom" : "right"),
                only: "ui-corner-all"
            }[e], i;
        },
        _spinnerOptions: function(e) {
            var t = this._buildSimpleOptions(e, "ui-spinner");
            return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t;
        },
        _buttonOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-button");
        },
        _checkboxradioOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(e) {
            var t = "vertical" === this.options.direction;
            return {
                width: !!t && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[e]
            };
        },
        _resolveClassesValues: function(t, n) {
            var i = {};
            return e.each(t, function(r) {
                var s = n.options.classes[r] || "";
                s = e.trim(s.replace(a, "")), i[r] = (s + " " + t[r]).replace(/\s+/g, " ");
            }), i;
        },
        _setOption: function(e, t) {
            "direction" === e && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(e, t), "disabled" !== e ? this.refresh() : this._callChildMethod(t ? "disable" : "enable");
        },
        refresh: function() {
            var t, n = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), t = this.childWidgets, this.options.onlyVisible && (t = t.filter(":visible")), 
            t.length && (e.each([ "first", "last" ], function(e, i) {
                var a = t[i]().data("ui-controlgroup-data");
                if (a && n["_" + a.widgetName + "Options"]) {
                    var r = n["_" + a.widgetName + "Options"](1 === t.length ? "only" : i);
                    r.classes = n._resolveClassesValues(r.classes, a), a.element[a.widgetName](r);
                } else n._updateCornerClass(t[i](), i);
            }), this._callChildMethod("refresh"));
        }
    });
    e.widget("ui.checkboxradio", [ e.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, n, i = this, a = this._super() || {};
            return this._readType(), n = this.element.labels(), this.label = e(n[n.length - 1]), 
            this.label.length || e.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                i.originalLabel += 3 === this.nodeType ? e(this).text() : this.outerHTML;
            }), this.originalLabel && (a.label = this.originalLabel), null != (t = this.element[0].disabled) && (a.disabled = t), 
            a;
        },
        _create: function() {
            var e = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), e && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
            this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || e.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var t = this.element[0].name, n = "input[name='" + e.ui.escapeSelector(t) + "']";
            return t ? (this.form.length ? e(this.form[0].elements).filter(n) : e(n).filter(function() {
                return 0 === e(this).form().length;
            })).not(this.element) : e([]);
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var t = e(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(e, t) {
            if ("label" !== e || t) {
                if (this._super(e, t), "disabled" === e) return this._toggleClass(this.label, null, "ui-state-disabled", t), 
                void (this.element[0].disabled = t);
                this.refresh();
            }
        },
        _updateIcon: function(t) {
            var n = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = e("<span>"), this.iconSpace = e("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (n += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : n += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", n), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var e = this.label.contents().not(this.element[0]);
            this.icon && (e = e.not(this.icon[0])), this.iconSpace && (e = e.not(this.iconSpace[0])), 
            e.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var e = this.element[0].checked, t = this.element[0].disabled;
            this._updateIcon(e), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), 
            null !== this.options.label && this._updateLabel(), t !== this.options.disabled && this._setOptions({
                disabled: t
            });
        }
    } ]);
    e.ui.checkboxradio;
    e.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var e, t = this._super() || {};
            return this.isInput = this.element.is("input"), null != (e = this.element[0].disabled) && (t.disabled = e), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), 
            t;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
            this._updateTooltip());
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function(t, n) {
            var i = "iconPosition" !== t, a = i ? this.options.iconPosition : n, r = "top" === a || "bottom" === a;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            i && this._addClass(this.icon, null, n), this._attachIcon(a), r ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(a));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(e) {
            this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(e) {
            this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(e) {
            var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel, n = void 0 === e.icon ? this.options.icon : e.icon;
            t || n || (e.showLabel = !0), this._super(e);
        },
        _setOption: function(e, t) {
            "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === e && this._updateIcon(e, t), 
            "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()), 
            "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), 
            this._attachIconSpace(this.options.iconPosition)))), this._super(e, t), "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t), 
            this.element[0].disabled = t, t && this.element.blur());
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOptions({
                disabled: e
            }), this._updateTooltip();
        }
    }), !1 !== e.uiBackCompat && (e.widget("ui.button", e.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
            this.options.iconPosition = "end"), this._super();
        },
        _setOption: function(e, t) {
            "text" !== e ? ("showLabel" === e && (this.options.text = t), "icon" === e && (this.options.icons.primary = t), 
            "icons" === e && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), 
            this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", t);
        }
    }), e.fn.button = function(t) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }(e.fn.button), e.fn.buttonset = function() {
        return e.ui.controlgroup || e.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    });
    e.ui.button, e.ui.safeActiveElement = function(e) {
        var t;
        try {
            t = e.activeElement;
        } catch (n) {
            t = e.body;
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t;
    };
    e.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var t = this._super(), n = this.element;
            return e.each([ "min", "max", "step" ], function(e, i) {
                var a = n.attr(i);
                null != a && a.length && (t[i] = a);
            }), t;
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(e) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e));
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(e);
                    }, 100), e.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function n() {
                    this.element[0] === e.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                    this.previous = i, this._delay(function() {
                        this.previous = i;
                    }));
                }
                var i;
                i = this.element[0] === e.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                t.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, n.call(this);
                }), !1 !== this._start(t) && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (e(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
            this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function(t) {
            var n = this.options, i = e.ui.keyCode;
            switch (t.keyCode) {
              case i.UP:
                return this._repeat(null, 1, t), !0;

              case i.DOWN:
                return this._repeat(null, -1, t), !0;

              case i.PAGE_UP:
                return this._repeat(null, n.page, t), !0;

              case i.PAGE_DOWN:
                return this._repeat(null, -n.page, t), !0;
            }
            return !1;
        },
        _start: function(e) {
            return !(!this.spinning && !1 === this._trigger("start", e)) && (this.counter || (this.counter = 1), 
            this.spinning = !0, !0);
        },
        _repeat: function(e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, n);
            }, e), this._spin(t * this.options.step, n);
        },
        _spin: function(e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", t, {
                value: n
            }) || (this._value(n), this.counter++);
        },
        _increment: function(t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), 
            e;
        },
        _precisionOf: function(e) {
            var t = e.toString(), n = t.indexOf(".");
            return -1 === n ? 0 : t.length - n - 1;
        },
        _adjustValue: function(e) {
            var t, n, i = this.options;
            return t = null !== i.min ? i.min : 0, n = e - t, n = Math.round(n / i.step) * i.step, 
            e = t + n, e = parseFloat(e.toFixed(this._precision())), null !== i.max && e > i.max ? i.max : null !== i.min && e < i.min ? i.min : e;
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", e));
        },
        _setOption: function(e, t) {
            var n, i, a;
            if ("culture" === e || "numberFormat" === e) return n = this._parse(this.element.val()), 
            this.options[e] = t, void this.element.val(this._format(n));
            "max" !== e && "min" !== e && "step" !== e || "string" == typeof t && (t = this._parse(t)), 
            "icons" === e && (i = this.buttons.first().find(".ui-icon"), this._removeClass(i, null, this.options.icons.up), 
            this._addClass(i, null, t.up), a = this.buttons.last().find(".ui-icon"), this._removeClass(a, null, this.options.icons.down), 
            this._addClass(a, null, t.down)), this._super(e, t);
        },
        _setOptionDisabled: function(e) {
            this._super(e), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!e), 
            this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable");
        },
        _setOptions: t(function(e) {
            this._super(e);
        }),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), 
            "" === e || isNaN(e) ? null : e;
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var e = this.value();
            return null !== e && e === this._adjustValue(e);
        },
        _value: function(e, t) {
            var n;
            "" !== e && null !== (n = this._parse(e)) && (t || (n = this._adjustValue(n)), e = this._format(n)), 
            this.element.val(e), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: t(function(e) {
            this._stepUp(e);
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop());
        },
        stepDown: t(function(e) {
            this._stepDown(e);
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop());
        },
        pageUp: t(function(e) {
            this._stepUp((e || 1) * this.options.page);
        }),
        pageDown: t(function(e) {
            this._stepDown((e || 1) * this.options.page);
        }),
        value: function(e) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, e);
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), !1 !== e.uiBackCompat && e.widget("ui.spinner", e.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    });
    e.ui.spinner;
}), function() {
    "use strict";
    var e, t = function(n, i) {
        function a(e) {
            return Math.floor(e);
        }
        function r() {
            var e = b.params.autoplay, t = b.slides.eq(b.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || b.params.autoplay), 
            b.autoplayTimeoutId = setTimeout(function() {
                b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? i.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), 
                b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b));
            }, e);
        }
        function s(t, n) {
            var i = e(t.target);
            if (!i.is(n)) if ("string" == typeof n) i = i.parents(n); else if (n.nodeType) {
                var a;
                return i.parents().each(function(e, t) {
                    t === n && (a = n);
                }), a ? n : void 0;
            }
            if (0 !== i.length) return i[0];
        }
        function o(e, t) {
            t = t || {};
            var n = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    b.onResize(!0), b.emit("onObserverUpdate", b, e);
                });
            });
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), b.observers.push(n);
        }
        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
            if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var n = !1;
                    if (b.container.parents("." + b.params.slideClass).length > 0 && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                    var i = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, a = window.innerWidth, r = window.innerHeight, s = b.container.offset();
                    b.rtl && (s.left = s.left - b.container[0].scrollLeft);
                    for (var o = [ [ s.left, s.top ], [ s.left + b.width, s.top ], [ s.left, s.top + b.height ], [ s.left + b.width, s.top + b.height ] ], l = 0; l < o.length; l++) {
                        var u = o[l];
                        u[0] >= i.left && u[0] <= i.left + a && u[1] >= i.top && u[1] <= i.top + r && (n = !0);
                    }
                    if (!n) return;
                }
                b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                40 === t && b.slideNext(), 38 === t && b.slidePrev()), b.emit("onKeyPress", b, t);
            }
        }
        function u(e) {
            var t = 0, n = 0, i = 0, a = 0;
            return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), 
            "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), 
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, a = 10 * n, 
            "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, 
            a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), 
            {
                spinX: t,
                spinY: n,
                pixelX: i,
                pixelY: a
            };
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0, n = b.rtl ? -1 : 1, i = u(e);
            if (b.params.mousewheelForceToAxis) if (b.isHorizontal()) {
                if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;
                t = i.pixelX * n;
            } else {
                if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;
                t = i.pixelY;
            } else t = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * n : -i.pixelY;
            if (0 !== t) {
                if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
                    var a = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity, r = b.isBeginning, s = b.isEnd;
                    if (a >= b.minTranslate() && (a = b.minTranslate()), a <= b.maxTranslate() && (a = b.maxTranslate()), 
                    b.setWrapperTransition(0), b.setWrapperTranslate(a), b.updateProgress(), b.updateActiveIndex(), 
                    (!r && b.isBeginning || !s && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), 
                    b.mousewheel.timeout = setTimeout(function() {
                        b.slideReset();
                    }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), 
                    b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 
                    0 === a || a === b.maxTranslate()) return;
                } else {
                    if (new window.Date().getTime() - b.mousewheel.lastScrollTime > 60) if (t < 0) if (b.isEnd && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0;
                    } else b.slideNext(), b.emit("onScroll", b, e); else if (b.isBeginning && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0;
                    } else b.slidePrev(), b.emit("onScroll", b, e);
                    b.mousewheel.lastScrollTime = new window.Date().getTime();
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
            }
        }
        function c(t, n) {
            t = e(t);
            var i, a, r, s = b.rtl ? -1 : 1;
            i = t.attr("data-swiper-parallax") || "0", a = t.attr("data-swiper-parallax-x"), 
            r = t.attr("data-swiper-parallax-y"), a || r ? (a = a || "0", r = r || "0") : b.isHorizontal() ? (a = i, 
            r = "0") : (r = i, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n * s + "%" : a * n * s + "px", 
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n + "%" : r * n + "px", t.transform("translate3d(" + a + ", " + r + ",0px)");
        }
        function d(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), 
            e;
        }
        if (!(this instanceof t)) return new t(n, i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, f = i && i.virtualTranslate;
        i = i || {};
        var m = {};
        for (var g in i) if ("object" != typeof i[g] || null === i[g] || (i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof Dom7 && i[g] instanceof Dom7 || "undefined" != typeof jQuery && i[g] instanceof jQuery)) m[g] = i[g]; else {
            m[g] = {};
            for (var v in i[g]) m[g][v] = i[g][v];
        }
        for (var y in h) if (void 0 === i[y]) i[y] = h[y]; else if ("object" == typeof i[y]) for (var w in h[y]) void 0 === i[y][w] && (i[y][w] = h[y][w]);
        var b = this;
        if (b.params = i, b.originalParams = m, b.classNames = [], void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7), 
        (void 0 !== e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (b.$ = e, 
        b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
            if (!b.params.breakpoints) return !1;
            var e, t = !1, n = [];
            for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && n.push(e);
            n.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
            });
            for (var i = 0; i < n.length; i++) (e = n[i]) >= window.innerWidth && !t && (t = e);
            return t || "max";
        }, b.setBreakpoint = function() {
            var e = b.getActiveBreakpoint();
            if (e && b.currentBreakpoint !== e) {
                var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams, n = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                for (var i in t) b.params[i] = t[i];
                b.currentBreakpoint = e, n && b.destroyLoop && b.reLoop(!0);
            }
        }, b.params.breakpoints && b.setBreakpoint(), b.container = e(n), 0 !== b.container.length)) {
            if (b.container.length > 1) {
                var x = [];
                return b.container.each(function() {
                    x.push(new t(this, i));
                }), x;
            }
            b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), 
            b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), 
            b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), 
            b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), 
            (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), 
            b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), [ "cube", "coverflow", "flip" ].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, 
            b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), 
            "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), 
            "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, 
            b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, 
            b.params.spaceBetween = 0, b.params.virtualTranslate = !0), "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, 
            b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, 
            b.params.spaceBetween = 0, void 0 === f && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), 
            b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = e(b.params.pagination), 
            b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), 
            "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, 
            b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), 
            (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = e(b.params.nextButton), 
            b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), 
            b.params.prevButton && (b.prevButton = e(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), 
            b.isHorizontal = function() {
                return "horizontal" === b.params.direction;
            }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), 
            b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), 
            b.params.slidesPerColumn > 1 && b.classNames.push(b.params.containerModifierClass + "multirow"), 
            b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), 
            b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, 
            b.lockSwipeToNext = function() {
                b.params.allowSwipeToNext = !1, !1 === b.params.allowSwipeToPrev && b.params.grabCursor && b.unsetGrabCursor();
            }, b.lockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !1, !1 === b.params.allowSwipeToNext && b.params.grabCursor && b.unsetGrabCursor();
            }, b.lockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor();
            }, b.unlockSwipeToNext = function() {
                b.params.allowSwipeToNext = !0, !0 === b.params.allowSwipeToPrev && b.params.grabCursor && b.setGrabCursor();
            }, b.unlockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !0, !0 === b.params.allowSwipeToNext && b.params.grabCursor && b.setGrabCursor();
            }, b.unlockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor();
            }, b.setGrabCursor = function(e) {
                b.container[0].style.cursor = "move", b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
                b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab";
            }, b.unsetGrabCursor = function() {
                b.container[0].style.cursor = "";
            }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, 
            b.loadImage = function(e, t, n, i, a, r) {
                function s() {
                    r && r();
                }
                var o;
                e.complete && a ? s() : t ? ((o = new window.Image()).onload = s, o.onerror = s, 
                i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : s();
            }, b.preloadImages = function() {
                function e() {
                    void 0 !== b && null !== b && b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, 
                    b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), 
                    b.emit("onImagesReady", b)));
                }
                b.imagesToLoad = b.container.find("img");
                for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), b.imagesToLoad[t].sizes || b.imagesToLoad[t].getAttribute("sizes"), !0, e);
            }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                return void 0 === b.autoplayTimeoutId && (!!b.params.autoplay && (!b.autoplaying && (b.autoplaying = !0, 
                b.emit("onAutoplayStart", b), void r())));
            }, b.stopAutoplay = function(e) {
                b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), 
                b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b));
            }, b.pauseAutoplay = function(e) {
                b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 
                0 === e ? (b.autoplayPaused = !1, r()) : b.wrapper.transitionEnd(function() {
                    b && (b.autoplayPaused = !1, b.autoplaying ? r() : b.stopAutoplay());
                }));
            }, b.minTranslate = function() {
                return -b.snapGrid[0];
            }, b.maxTranslate = function() {
                return -b.snapGrid[b.snapGrid.length - 1];
            }, b.updateAutoHeight = function() {
                var e, t = [], n = 0;
                if ("auto" !== b.params.slidesPerView && b.params.slidesPerView > 1) for (e = 0; e < Math.ceil(b.params.slidesPerView); e++) {
                    var i = b.activeIndex + e;
                    if (i > b.slides.length) break;
                    t.push(b.slides.eq(i)[0]);
                } else t.push(b.slides.eq(b.activeIndex)[0]);
                for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                    var a = t[e].offsetHeight;
                    n = a > n ? a : n;
                }
                n && b.wrapper.css("height", n + "px");
            }, b.updateContainerSize = function() {
                var e, t;
                e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth, t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight, 
                0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), 
                t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), 
                b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height);
            }, b.updateSlidesSize = function() {
                b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], 
                b.slidesSizesGrid = [];
                var e, t = b.params.spaceBetween, n = -b.params.slidesOffsetBefore, i = 0, r = 0;
                if (void 0 !== b.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * b.size), 
                    b.virtualSize = -t, b.rtl ? b.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : b.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    b.params.slidesPerColumn > 1 && (s = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, 
                    "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (s = Math.max(s, b.params.slidesPerView * b.params.slidesPerColumn)));
                    var o, l = b.params.slidesPerColumn, u = s / l, p = u - (b.params.slidesPerColumn * u - b.slides.length);
                    for (e = 0; e < b.slides.length; e++) {
                        o = 0;
                        var c = b.slides.eq(e);
                        if (b.params.slidesPerColumn > 1) {
                            var d, h, f;
                            "column" === b.params.slidesPerColumnFill ? (f = e - (h = Math.floor(e / l)) * l, 
                            (h > p || h === p && f === l - 1) && ++f >= l && (f = 0, h++), d = h + f * s / l, 
                            c.css({
                                "-webkit-box-ordinal-group": d,
                                "-moz-box-ordinal-group": d,
                                "-ms-flex-order": d,
                                "-webkit-order": d,
                                order: d
                            })) : h = e - (f = Math.floor(e / u)) * u, c.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== f && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", f);
                        }
                        "none" !== c.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0), 
                        b.params.roundLengths && (o = a(o))) : (o = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, 
                        b.params.roundLengths && (o = a(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), 
                        b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (n = n + o / 2 + i / 2 + t, 
                        0 === i && 0 !== e && (n = n - b.size / 2 - t), 0 === e && (n = n - b.size / 2 - t), 
                        Math.abs(n) < .001 && (n = 0), r % b.params.slidesPerGroup == 0 && b.snapGrid.push(n), 
                        b.slidesGrid.push(n)) : (r % b.params.slidesPerGroup == 0 && b.snapGrid.push(n), 
                        b.slidesGrid.push(n), n = n + o + t), b.virtualSize += o + t, i = o, r++);
                    }
                    b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                    var m;
                    if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }) : b.wrapper.css({
                        height: b.virtualSize + b.params.spaceBetween + "px"
                    })), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * s, 
                    b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, 
                    b.isHorizontal() ? b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }) : b.wrapper.css({
                        height: b.virtualSize + b.params.spaceBetween + "px"
                    }), b.params.centeredSlides)) {
                        for (m = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && m.push(b.snapGrid[e]);
                        b.snapGrid = m;
                    }
                    if (!b.params.centeredSlides) {
                        for (m = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && m.push(b.snapGrid[e]);
                        b.snapGrid = m, Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size);
                    }
                    0 === b.snapGrid.length && (b.snapGrid = [ 0 ]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                        marginLeft: t + "px"
                    }) : b.slides.css({
                        marginRight: t + "px"
                    }) : b.slides.css({
                        marginBottom: t + "px"
                    })), b.params.watchSlidesProgress && b.updateSlidesOffset();
                }
            }, b.updateSlidesOffset = function() {
                for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop;
            }, b.currentSlidesPerView = function() {
                var e, t, n = 1;
                if (b.params.centeredSlides) {
                    var i, a = b.slides[b.activeIndex].swiperSlideSize;
                    for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slides[e] && !i && (n++, 
                    (a += b.slides[e].swiperSlideSize) > b.size && (i = !0));
                    for (t = b.activeIndex - 1; t >= 0; t--) b.slides[t] && !i && (n++, (a += b.slides[t].swiperSlideSize) > b.size && (i = !0));
                } else for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slidesGrid[e] - b.slidesGrid[b.activeIndex] < b.size && n++;
                return n;
            }, b.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = b.translate || 0), 0 !== b.slides.length) {
                    void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                    var t = -e;
                    b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                    for (var n = 0; n < b.slides.length; n++) {
                        var i = b.slides[n], a = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);
                        if (b.params.watchSlidesVisibility) {
                            var r = -(t - i.swiperSlideOffset), s = r + b.slidesSizesGrid[n];
                            (r >= 0 && r < b.size || s > 0 && s <= b.size || r <= 0 && s >= b.size) && b.slides.eq(n).addClass(b.params.slideVisibleClass);
                        }
                        i.progress = b.rtl ? -a : a;
                    }
                }
            }, b.updateProgress = function(e) {
                void 0 === e && (e = b.translate || 0);
                var t = b.maxTranslate() - b.minTranslate(), n = b.isBeginning, i = b.isEnd;
                0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, 
                b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !n && b.emit("onReachBeginning", b), 
                b.isEnd && !i && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), 
                b.emit("onProgress", b, b.progress);
            }, b.updateActiveIndex = function() {
                var e, t, n, i = b.rtl ? b.translate : -b.translate;
                for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] && (e = t + 1) : i >= b.slidesGrid[t] && (e = t);
                b.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (n = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (n = b.snapGrid.length - 1), 
                e !== b.activeIndex && (b.snapIndex = n, b.previousIndex = b.activeIndex, b.activeIndex = e, 
                b.updateClasses(), b.updateRealIndex());
            }, b.updateRealIndex = function() {
                b.realIndex = parseInt(b.slides.eq(b.activeIndex).attr("data-swiper-slide-index") || b.activeIndex, 10);
            }, b.updateClasses = function() {
                b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                var t = b.slides.eq(b.activeIndex);
                t.addClass(b.params.slideActiveClass), i.loop && (t.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                var n = t.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                b.params.loop && 0 === n.length && (n = b.slides.eq(0)).addClass(b.params.slideNextClass);
                var a = t.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                if (b.params.loop && 0 === a.length && (a = b.slides.eq(-1)).addClass(b.params.slidePrevClass), 
                i.loop && (n.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass), 
                a.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), 
                b.paginationContainer && b.paginationContainer.length > 0) {
                    var r, s = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                    if (b.params.loop ? ((r = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (r -= b.slides.length - 2 * b.loopedSlides), 
                    r > s - 1 && (r -= s), r < 0 && "bullets" !== b.params.paginationType && (r = s + r)) : r = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, 
                    "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), 
                    b.paginationContainer.length > 1 ? b.bullets.each(function() {
                        e(this).index() === r && e(this).addClass(b.params.bulletActiveClass);
                    }) : b.bullets.eq(r).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(r + 1), 
                    b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
                        var o = (r + 1) / s, l = o, u = 1;
                        b.isHorizontal() || (u = o, l = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(b.params.speed);
                    }
                    "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, r + 1, s)), 
                    b.emit("onPaginationRendered", b, b.paginationContainer[0]));
                }
                b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))));
            }, b.updatePagination = function() {
                if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === b.params.paginationType) {
                        for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, n = 0; n < t; n++) b.params.paginationBulletRender ? e += b.params.paginationBulletRender(b, n, b.params.bulletClass) : e += "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                        b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), 
                        b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination();
                    }
                    "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', 
                    b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', 
                    b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0]);
                }
            }, b.update = function(e) {
                function t() {
                    b.rtl, b.translate;
                    n = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(n), 
                    b.updateActiveIndex(), b.updateClasses();
                }
                if (b) {
                    b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), 
                    b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set();
                    var n;
                    if (e) {
                        b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), 
                        b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || t();
                    } else b.params.autoHeight && b.updateAutoHeight();
                }
            }, b.onResize = function(e) {
                b.params.onBeforeResize && b.params.onBeforeResize(b), b.params.breakpoints && b.setBreakpoint();
                var t = b.params.allowSwipeToPrev, n = b.params.allowSwipeToNext;
                b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), 
                b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), 
                b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                var i = !1;
                if (b.params.freeMode) {
                    var a = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                    b.setWrapperTranslate(a), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight();
                } else b.updateClasses(), i = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                b.params.lazyLoading && !i && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, 
                b.params.allowSwipeToNext = n, b.params.onAfterResize && b.params.onAfterResize(b);
            }, b.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), b.touchEvents = {
                start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), 
            b.initEvents = function(e) {
                var t = e ? "off" : "on", n = e ? "removeEventListener" : "addEventListener", a = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0], r = b.support.touch ? a : document, s = !!b.params.nested;
                if (b.browser.ie) a[n](b.touchEvents.start, b.onTouchStart, !1), r[n](b.touchEvents.move, b.onTouchMove, s), 
                r[n](b.touchEvents.end, b.onTouchEnd, !1); else {
                    if (b.support.touch) {
                        var o = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        a[n](b.touchEvents.start, b.onTouchStart, o), a[n](b.touchEvents.move, b.onTouchMove, s), 
                        a[n](b.touchEvents.end, b.onTouchEnd, o);
                    }
                    (i.simulateTouch && !b.device.ios && !b.device.android || i.simulateTouch && !b.support.touch && b.device.ios) && (a[n]("mousedown", b.onTouchStart, !1), 
                    document[n]("mousemove", b.onTouchMove, s), document[n]("mouseup", b.onTouchEnd, !1));
                }
                window[n]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[t]("click", b.onClickNext), 
                b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[t]("click", b.onClickPrev), 
                b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), 
                b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), 
                (b.params.preventClicks || b.params.preventClicksPropagation) && a[n]("click", b.preventClicks, !0);
            }, b.attachEvents = function() {
                b.initEvents();
            }, b.detachEvents = function() {
                b.initEvents(!0);
            }, b.allowClick = !0, b.preventClicks = function(e) {
                b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), 
                e.stopImmediatePropagation()));
            }, b.onClickNext = function(e) {
                e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext();
            }, b.onClickPrev = function(e) {
                e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev();
            }, b.onClickIndex = function(t) {
                t.preventDefault();
                var n = e(this).index() * b.params.slidesPerGroup;
                b.params.loop && (n += b.loopedSlides), b.slideTo(n);
            }, b.updateClickedSlide = function(t) {
                var n = s(t, "." + b.params.slideClass), i = !1;
                if (n) for (var a = 0; a < b.slides.length; a++) b.slides[a] === n && (i = !0);
                if (!n || !i) return b.clickedSlide = void 0, void (b.clickedIndex = void 0);
                if (b.clickedSlide = n, b.clickedIndex = e(n).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                    var r, o = b.clickedIndex, l = "auto" === b.params.slidesPerView ? b.currentSlidesPerView() : b.params.slidesPerView;
                    if (b.params.loop) {
                        if (b.animating) return;
                        r = parseInt(e(b.clickedSlide).attr("data-swiper-slide-index"), 10), b.params.centeredSlides ? o < b.loopedSlides - l / 2 || o > b.slides.length - b.loopedSlides + l / 2 ? (b.fixLoop(), 
                        o = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            b.slideTo(o);
                        }, 0)) : b.slideTo(o) : o > b.slides.length - l ? (b.fixLoop(), o = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            b.slideTo(o);
                        }, 0)) : b.slideTo(o);
                    } else b.slideTo(o);
                }
            };
            var C, T, S, k, E, _, z, M, P, D, L = "input, select, textarea, button, video", I = Date.now(), A = [];
            b.animating = !1, b.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var N, O;
            b.onTouchStart = function(t) {
                if (t.originalEvent && (t = t.originalEvent), (N = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) if (b.params.noSwiping && s(t, "." + b.params.noSwipingClass)) b.allowClick = !0; else if (!b.params.swipeHandler || s(t, b.params.swipeHandler)) {
                    var n = b.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i = b.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                    if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && n <= b.params.iOSEdgeSwipeThreshold)) {
                        if (C = !0, T = !1, S = !0, E = void 0, O = void 0, b.touches.startX = n, b.touches.startY = i, 
                        k = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, 
                        b.params.threshold > 0 && (M = !1), "touchstart" !== t.type) {
                            var a = !0;
                            e(t.target).is(L) && (a = !1), document.activeElement && e(document.activeElement).is(L) && document.activeElement.blur(), 
                            a && t.preventDefault();
                        }
                        b.emit("onTouchStart", b, t);
                    }
                }
            }, b.onTouchMove = function(t) {
                if (t.originalEvent && (t = t.originalEvent), !N || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper) return b.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    void (b.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (b.params.onlyExternal) return b.allowClick = !1, void (C && (b.touches.startX = b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    b.touches.startY = b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, 
                    k = Date.now()));
                    if (N && b.params.touchReleaseOnEdges && !b.params.loop) if (b.isHorizontal()) {
                        if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return;
                    } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                    if (N && document.activeElement && t.target === document.activeElement && e(t.target).is(L)) return T = !0, 
                    void (b.allowClick = !1);
                    if (S && b.emit("onTouchMove", b, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                        if (b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                        b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, 
                        void 0 === E) {
                            var n;
                            b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX === b.touches.startX ? E = !1 : (n = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, 
                            E = b.isHorizontal() ? n > b.params.touchAngle : 90 - n > b.params.touchAngle);
                        }
                        if (E && b.emit("onTouchMoveOpposite", b, t), void 0 === O && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (O = !0)), 
                        C) if (E) C = !1; else if (O) {
                            b.allowClick = !1, b.emit("onSliderMove", b, t), t.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && t.stopPropagation(), 
                            T || (i.loop && b.fixLoop(), z = b.getWrapperTranslate(), b.setWrapperTransition(0), 
                            b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), 
                            b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), 
                            D = !1, !b.params.grabCursor || !0 !== b.params.allowSwipeToNext && !0 !== b.params.allowSwipeToPrev || b.setGrabCursor(!0)), 
                            T = !0;
                            var a = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                            a *= b.params.touchRatio, b.rtl && (a = -a), b.swipeDirection = a > 0 ? "prev" : "next", 
                            _ = a + z;
                            var r = !0;
                            if (a > 0 && _ > b.minTranslate() ? (r = !1, b.params.resistance && (_ = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + z + a, b.params.resistanceRatio))) : a < 0 && _ < b.maxTranslate() && (r = !1, 
                            b.params.resistance && (_ = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - z - a, b.params.resistanceRatio))), 
                            r && (t.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && _ < z && (_ = z), 
                            !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && _ > z && (_ = z), b.params.threshold > 0) {
                                if (!(Math.abs(a) > b.params.threshold || M)) return void (_ = z);
                                if (!M) return M = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, 
                                _ = z, void (b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY);
                            }
                            b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), 
                            b.params.freeMode && (0 === A.length && A.push({
                                position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                time: k
                            }), A.push({
                                position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                time: new window.Date().getTime()
                            })), b.updateProgress(_), b.setWrapperTranslate(_));
                        }
                    }
                }
            }, b.onTouchEnd = function(t) {
                if (t.originalEvent && (t = t.originalEvent), S && b.emit("onTouchEnd", b, t), S = !1, 
                C) {
                    b.params.grabCursor && T && C && (!0 === b.params.allowSwipeToNext || !0 === b.params.allowSwipeToPrev) && b.setGrabCursor(!1);
                    var n = Date.now(), i = n - k;
                    if (b.allowClick && (b.updateClickedSlide(t), b.emit("onTap", b, t), i < 300 && n - I > 300 && (P && clearTimeout(P), 
                    P = setTimeout(function() {
                        b && (b.params.paginationHide && b.paginationContainer.length > 0 && !e(t.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), 
                        b.emit("onClick", b, t));
                    }, 300)), i < 300 && n - I < 300 && (P && clearTimeout(P), b.emit("onDoubleTap", b, t))), 
                    I = Date.now(), setTimeout(function() {
                        b && (b.allowClick = !0);
                    }, 0), C && T && b.swipeDirection && 0 !== b.touches.diff && _ !== z) {
                        C = T = !1;
                        var a;
                        if (a = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -_, b.params.freeMode) {
                            if (a < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                            if (a > -b.maxTranslate()) return void (b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                            if (b.params.freeModeMomentum) {
                                if (A.length > 1) {
                                    var r = A.pop(), s = A.pop(), o = r.position - s.position, l = r.time - s.time;
                                    b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), 
                                    (l > 150 || new window.Date().getTime() - r.time > 300) && (b.velocity = 0);
                                } else b.velocity = 0;
                                b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, A.length = 0;
                                var u = 1e3 * b.params.freeModeMomentumRatio, p = b.velocity * u, c = b.translate + p;
                                b.rtl && (c = -c);
                                var d, h = !1, f = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                if (c < b.maxTranslate()) b.params.freeModeMomentumBounce ? (c + b.maxTranslate() < -f && (c = b.maxTranslate() - f), 
                                d = b.maxTranslate(), h = !0, D = !0) : c = b.maxTranslate(); else if (c > b.minTranslate()) b.params.freeModeMomentumBounce ? (c - b.minTranslate() > f && (c = b.minTranslate() + f), 
                                d = b.minTranslate(), h = !0, D = !0) : c = b.minTranslate(); else if (b.params.freeModeSticky) {
                                    var m, g = 0;
                                    for (g = 0; g < b.snapGrid.length; g += 1) if (b.snapGrid[g] > -c) {
                                        m = g;
                                        break;
                                    }
                                    c = Math.abs(b.snapGrid[m] - c) < Math.abs(b.snapGrid[m - 1] - c) || "next" === b.swipeDirection ? b.snapGrid[m] : b.snapGrid[m - 1], 
                                    b.rtl || (c = -c);
                                }
                                if (0 !== b.velocity) u = b.rtl ? Math.abs((-c - b.translate) / b.velocity) : Math.abs((c - b.translate) / b.velocity); else if (b.params.freeModeSticky) return void b.slideReset();
                                b.params.freeModeMomentumBounce && h ? (b.updateProgress(d), b.setWrapperTransition(u), 
                                b.setWrapperTranslate(c), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && D && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), 
                                    b.setWrapperTranslate(d), b.wrapper.transitionEnd(function() {
                                        b && b.onTransitionEnd();
                                    }));
                                })) : b.velocity ? (b.updateProgress(c), b.setWrapperTransition(u), b.setWrapperTranslate(c), 
                                b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && b.onTransitionEnd();
                                }))) : b.updateProgress(c), b.updateActiveIndex();
                            }
                            (!b.params.freeModeMomentum || i >= b.params.longSwipesMs) && (b.updateProgress(), 
                            b.updateActiveIndex());
                        } else {
                            var v, y = 0, w = b.slidesSizesGrid[0];
                            for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) void 0 !== b.slidesGrid[v + b.params.slidesPerGroup] ? a >= b.slidesGrid[v] && a < b.slidesGrid[v + b.params.slidesPerGroup] && (y = v, 
                            w = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : a >= b.slidesGrid[v] && (y = v, 
                            w = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                            var x = (a - b.slidesGrid[y]) / w;
                            if (i > b.params.longSwipesMs) {
                                if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                                "next" === b.swipeDirection && (x >= b.params.longSwipesRatio ? b.slideTo(y + b.params.slidesPerGroup) : b.slideTo(y)), 
                                "prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio ? b.slideTo(y + b.params.slidesPerGroup) : b.slideTo(y));
                            } else {
                                if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                                "next" === b.swipeDirection && b.slideTo(y + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(y);
                            }
                        }
                    } else C = T = !1;
                }
            }, b._slideTo = function(e, t) {
                return b.slideTo(e, t, !0, !0);
            }, b.slideTo = function(e, t, n, i) {
                void 0 === n && (n = !0), void 0 === e && (e = 0), e < 0 && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), 
                b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                var a = -b.snapGrid[b.snapIndex];
                if (b.params.autoplay && b.autoplaying && (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), 
                b.updateProgress(a), b.params.normalizeSlideIndex) for (var r = 0; r < b.slidesGrid.length; r++) -Math.floor(100 * a) >= Math.floor(100 * b.slidesGrid[r]) && (e = r);
                return !(!b.params.allowSwipeToNext && a < b.translate && a < b.minTranslate()) && (!(!b.params.allowSwipeToPrev && a > b.translate && a > b.maxTranslate() && (b.activeIndex || 0) !== e) && (void 0 === t && (t = b.params.speed), 
                b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -a === b.translate || !b.rtl && a === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), 
                b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(a), !1) : (b.updateClasses(), 
                b.onTransitionStart(n), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(a), 
                b.setWrapperTransition(0), b.onTransitionEnd(n)) : (b.setWrapperTranslate(a), b.setWrapperTransition(t), 
                b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                    b && b.onTransitionEnd(n);
                }))), !0)));
            }, b.onTransitionStart = function(e) {
                void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), 
                e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), 
                b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)));
            }, b.onTransitionEnd = function(e) {
                b.animating = !1, b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), 
                e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), 
                b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), 
                b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), 
                b.params.hashnav && b.hashnav && b.hashnav.setHash();
            }, b.slideNext = function(e, t, n) {
                if (b.params.loop) {
                    if (b.animating) return !1;
                    b.fixLoop();
                    b.container[0].clientLeft;
                    return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, n);
                }
                return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, n);
            }, b._slideNext = function(e) {
                return b.slideNext(!0, e, !0);
            }, b.slidePrev = function(e, t, n) {
                if (b.params.loop) {
                    if (b.animating) return !1;
                    b.fixLoop();
                    b.container[0].clientLeft;
                    return b.slideTo(b.activeIndex - 1, t, e, n);
                }
                return b.slideTo(b.activeIndex - 1, t, e, n);
            }, b._slidePrev = function(e) {
                return b.slidePrev(!0, e, !0);
            }, b.slideReset = function(e, t, n) {
                return b.slideTo(b.activeIndex, t, e);
            }, b.disableTouchControl = function() {
                return b.params.onlyExternal = !0, !0;
            }, b.enableTouchControl = function() {
                return b.params.onlyExternal = !1, !0;
            }, b.setWrapperTransition = function(e, t) {
                b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), 
                b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), 
                b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e);
            }, b.setWrapperTranslate = function(e, t, n) {
                var i = 0, r = 0;
                b.isHorizontal() ? i = b.rtl ? -e : e : r = e, b.params.roundLengths && (i = a(i), 
                r = a(r)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + i + "px, " + r + "px, 0px)") : b.wrapper.transform("translate(" + i + "px, " + r + "px)")), 
                b.translate = b.isHorizontal() ? i : r;
                var s = b.maxTranslate() - b.minTranslate();
                (0 === s ? 0 : (e - b.minTranslate()) / s) !== b.progress && b.updateProgress(e), 
                t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), 
                b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), 
                b.params.control && b.controller && b.controller.setTranslate(b.translate, n), b.emit("onSetTranslate", b, b.translate);
            }, b.getTranslate = function(e, t) {
                var n, i, a, r;
                return void 0 === t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (a = window.getComputedStyle(e, null), 
                window.WebKitCSSMatrix ? ((i = a.transform || a.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".");
                }).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), 
                "x" === t && (i = window.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), 
                "y" === t && (i = window.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), 
                b.rtl && i && (i = -i), i || 0);
            }, b.getWrapperTranslate = function(e) {
                return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e);
            }, b.observers = [], b.initObservers = function() {
                if (b.params.observeParents) for (var e = b.container.parents(), t = 0; t < e.length; t++) o(e[t]);
                o(b.container[0], {
                    childList: !1
                }), o(b.wrapper[0], {
                    attributes: !1
                });
            }, b.disconnectObservers = function() {
                for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                b.observers = [];
            }, b.createLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                var t = b.wrapper.children("." + b.params.slideClass);
                "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = t.length), 
                b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), 
                b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > t.length && (b.loopedSlides = t.length);
                var n, i = [], a = [];
                for (t.each(function(n, r) {
                    var s = e(this);
                    n < b.loopedSlides && a.push(r), n < t.length && n >= t.length - b.loopedSlides && i.push(r), 
                    s.attr("data-swiper-slide-index", n);
                }), n = 0; n < a.length; n++) b.wrapper.append(e(a[n].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                for (n = i.length - 1; n >= 0; n--) b.wrapper.prepend(e(i[n].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
            }, b.destroyLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), 
                b.slides.removeAttr("data-swiper-slide-index");
            }, b.reLoop = function(e) {
                var t = b.activeIndex - b.loopedSlides;
                b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1);
            }, b.fixLoop = function() {
                var e;
                b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, 
                e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, 
                e += b.loopedSlides, b.slideTo(e, 0, !1, !0));
            }, b.appendSlide = function(e) {
                if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]); else b.wrapper.append(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0);
            }, b.prependSlide = function(e) {
                b.params.loop && b.destroyLoop();
                var t = b.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) e[n] && b.wrapper.prepend(e[n]);
                    t = b.activeIndex + e.length;
                } else b.wrapper.prepend(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), 
                b.slideTo(t, 0, !1);
            }, b.removeSlide = function(e) {
                b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                var t, n = b.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) t = e[i], b.slides[t] && b.slides.eq(t).remove(), 
                    t < n && n--;
                    n = Math.max(n, 0);
                } else t = e, b.slides[t] && b.slides.eq(t).remove(), t < n && n--, n = Math.max(n, 0);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), 
                b.params.loop ? b.slideTo(n + b.loopedSlides, 0, !1) : b.slideTo(n, 0, !1);
            }, b.removeAllSlides = function() {
                for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                b.removeSlide(e);
            }, b.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < b.slides.length; e++) {
                            var t = b.slides.eq(e), n = -t[0].swiperSlideOffset;
                            b.params.virtualTranslate || (n -= b.translate);
                            var i = 0;
                            b.isHorizontal() || (i = n, n = 0);
                            var a = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: a
                            }).transform("translate3d(" + n + "px, " + i + "px, 0px)");
                        }
                    },
                    setTransition: function(e) {
                        if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            b.slides.transitionEnd(function() {
                                if (!t && b) {
                                    t = !0, b.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], n = 0; n < e.length; n++) b.wrapper.trigger(e[n]);
                                }
                            });
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t = 0; t < b.slides.length; t++) {
                            var n = b.slides.eq(t), i = n[0].progress;
                            b.params.flip.limitRotation && (i = Math.max(Math.min(n[0].progress, 1), -1));
                            var a = -180 * i, r = 0, s = -n[0].swiperSlideOffset, o = 0;
                            if (b.isHorizontal() ? b.rtl && (a = -a) : (o = s, s = 0, r = -a, a = 0), n[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, 
                            b.params.flip.slideShadows) {
                                var l = b.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), u = b.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                n.append(l)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                n.append(u)), l.length && (l[0].style.opacity = Math.max(-i, 0)), u.length && (u[0].style.opacity = Math.max(i, 0));
                            }
                            n.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + a + "deg)");
                        }
                    },
                    setTransition: function(t) {
                        if (b.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), 
                        b.params.virtualTranslate && 0 !== t) {
                            var n = !1;
                            b.slides.eq(b.activeIndex).transitionEnd(function() {
                                if (!n && b && e(this).hasClass(b.params.slideActiveClass)) {
                                    n = !0, b.animating = !1;
                                    for (var t = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], i = 0; i < t.length; i++) b.wrapper.trigger(t[i]);
                                }
                            });
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, n = 0;
                        b.params.cube.shadow && (b.isHorizontal() ? (0 === (t = b.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), 
                        b.wrapper.append(t)), t.css({
                            height: b.width + "px"
                        })) : 0 === (t = b.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), 
                        b.container.append(t)));
                        for (var i = 0; i < b.slides.length; i++) {
                            var a = b.slides.eq(i), r = 90 * i, s = Math.floor(r / 360);
                            b.rtl && (r = -r, s = Math.floor(-r / 360));
                            var o = Math.max(Math.min(a[0].progress, 1), -1), l = 0, u = 0, p = 0;
                            i % 4 == 0 ? (l = 4 * -s * b.size, p = 0) : (i - 1) % 4 == 0 ? (l = 0, p = 4 * -s * b.size) : (i - 2) % 4 == 0 ? (l = b.size + 4 * s * b.size, 
                            p = b.size) : (i - 3) % 4 == 0 && (l = -b.size, p = 3 * b.size + 4 * b.size * s), 
                            b.rtl && (l = -l), b.isHorizontal() || (u = l, l = 0);
                            var c = "rotateX(" + (b.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (b.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + p + "px)";
                            if (o <= 1 && o > -1 && (n = 90 * i + 90 * o, b.rtl && (n = 90 * -i - 90 * o)), 
                            a.transform(c), b.params.cube.slideShadows) {
                                var d = b.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), h = b.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                a.append(d)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                a.append(h)), d.length && (d[0].style.opacity = Math.max(-o, 0)), h.length && (h[0].style.opacity = Math.max(o, 0));
                            }
                        }
                        if (b.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "transform-origin": "50% 50% -" + b.size / 2 + "px"
                        }), b.params.cube.shadow) if (b.isHorizontal()) t.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")"); else {
                            var f = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90), m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2), g = b.params.cube.shadowScale, v = b.params.cube.shadowScale / m, y = b.params.cube.shadowOffset;
                            t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + y) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)");
                        }
                        var w = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                        b.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (b.isHorizontal() ? 0 : n) + "deg) rotateY(" + (b.isHorizontal() ? -n : 0) + "deg)");
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e);
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var t = b.translate, n = b.isHorizontal() ? -t + b.width / 2 : -t + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, a = b.params.coverflow.depth, r = 0, s = b.slides.length; r < s; r++) {
                            var o = b.slides.eq(r), l = b.slidesSizesGrid[r], u = (n - o[0].swiperSlideOffset - l / 2) / l * b.params.coverflow.modifier, p = b.isHorizontal() ? i * u : 0, c = b.isHorizontal() ? 0 : i * u, d = -a * Math.abs(u), h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * u, f = b.isHorizontal() ? b.params.coverflow.stretch * u : 0;
                            Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(d) < .001 && (d = 0), 
                            Math.abs(p) < .001 && (p = 0), Math.abs(c) < .001 && (c = 0);
                            var m = "translate3d(" + f + "px," + h + "px," + d + "px)  rotateX(" + c + "deg) rotateY(" + p + "deg)";
                            if (o.transform(m), o[0].style.zIndex = 1 - Math.abs(Math.round(u)), b.params.coverflow.slideShadows) {
                                var g = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"), v = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                o.append(g)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                o.append(v)), g.length && (g[0].style.opacity = u > 0 ? u : 0), v.length && (v[0].style.opacity = -u > 0 ? -u : 0);
                            }
                        }
                        b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = n + "px 50%");
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    }
                }
            }, b.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, n) {
                    if (void 0 !== t && (void 0 === n && (n = !0), 0 !== b.slides.length)) {
                        var i = b.slides.eq(t), a = i.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                        !i.hasClass(b.params.lazyLoadingClass) || i.hasClass(b.params.lazyStatusLoadedClass) || i.hasClass(b.params.lazyStatusLoadingClass) || (a = a.add(i[0])), 
                        0 !== a.length && a.each(function() {
                            var t = e(this);
                            t.addClass(b.params.lazyStatusLoadingClass);
                            var a = t.attr("data-background"), r = t.attr("data-src"), s = t.attr("data-srcset"), o = t.attr("data-sizes");
                            b.loadImage(t[0], r || a, s, o, !1, function() {
                                if (void 0 !== b && null !== b && b) {
                                    if (a ? (t.css("background-image", 'url("' + a + '")'), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), 
                                    t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), 
                                    r && (t.attr("src", r), t.removeAttr("data-src"))), t.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), 
                                    i.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), 
                                    b.params.loop && n) {
                                        var e = i.attr("data-swiper-slide-index");
                                        if (i.hasClass(b.params.slideDuplicateClass)) {
                                            var l = b.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                            b.lazy.loadImageInSlide(l.index(), !1);
                                        } else {
                                            var u = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            b.lazy.loadImageInSlide(u.index(), !1);
                                        }
                                    }
                                    b.emit("onLazyImageReady", b, i[0], t[0]);
                                }
                            }), b.emit("onLazyImageLoad", b, i[0], t[0]);
                        });
                    }
                },
                load: function() {
                    var t, n = b.params.slidesPerView;
                    if ("auto" === n && (n = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), 
                    b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                        b.lazy.loadImageInSlide(e(this).index());
                    }); else if (n > 1) for (t = b.activeIndex; t < b.activeIndex + n; t++) b.slides[t] && b.lazy.loadImageInSlide(t); else b.lazy.loadImageInSlide(b.activeIndex);
                    if (b.params.lazyLoadingInPrevNext) if (n > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
                        var i = b.params.lazyLoadingInPrevNextAmount, a = n, r = Math.min(b.activeIndex + a + Math.max(i, a), b.slides.length), s = Math.max(b.activeIndex - Math.max(a, i), 0);
                        for (t = b.activeIndex + n; t < r; t++) b.slides[t] && b.lazy.loadImageInSlide(t);
                        for (t = s; t < b.activeIndex; t++) b.slides[t] && b.lazy.loadImageInSlide(t);
                    } else {
                        var o = b.wrapper.children("." + b.params.slideNextClass);
                        o.length > 0 && b.lazy.loadImageInSlide(o.index());
                        var l = b.wrapper.children("." + b.params.slidePrevClass);
                        l.length > 0 && b.lazy.loadImageInSlide(l.index());
                    }
                },
                onTransitionStart: function() {
                    b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load();
                },
                onTransitionEnd: function() {
                    b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load();
                }
            }, b.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = b.scrollbar, n = (b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2, i = -b.minTranslate() * t.moveDivider, a = -b.maxTranslate() * t.moveDivider;
                    n < i ? n = i : n > a && (n = a), n = -n / t.moveDivider, b.updateProgress(n), b.setWrapperTranslate(n, !0);
                },
                dragStart: function(e) {
                    var t = b.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), 
                    clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), 
                    b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b);
                },
                dragMove: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), 
                    b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b));
                },
                dragEnd: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (t.isTouched = !1, b.params.scrollbarHide && (clearTimeout(t.dragTimeout), 
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset());
                },
                draggableEvents: function() {
                    return !1 !== b.params.simulateTouch || b.support.touch ? b.touchEvents : b.touchEventsDesktop;
                }(),
                enableDraggable: function() {
                    var t = b.scrollbar, n = b.support.touch ? t.track : document;
                    e(t.track).on(t.draggableEvents.start, t.dragStart), e(n).on(t.draggableEvents.move, t.dragMove), 
                    e(n).on(t.draggableEvents.end, t.dragEnd);
                },
                disableDraggable: function() {
                    var t = b.scrollbar, n = b.support.touch ? t.track : document;
                    e(t.track).off(t.draggableEvents.start, t.dragStart), e(n).off(t.draggableEvents.move, t.dragMove), 
                    e(n).off(t.draggableEvents.end, t.dragEnd);
                },
                set: function() {
                    if (b.params.scrollbar) {
                        var t = b.scrollbar;
                        t.track = e(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && t.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (t.track = b.container.find(b.params.scrollbar)), 
                        t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), 
                        t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", 
                        t.trackSize = b.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, 
                        t.divider = b.size / b.virtualSize, t.moveDivider = t.divider * (t.trackSize / b.size), 
                        t.dragSize = t.trackSize * t.divider, b.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", 
                        t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", 
                        b.params.scrollbarHide && (t.track[0].style.opacity = 0);
                    }
                },
                setTranslate: function() {
                    if (b.params.scrollbar) {
                        var e, t = b.scrollbar, n = (b.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e) > 0 ? (n = t.dragSize - e, 
                        e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e) : e < 0 ? (n = t.dragSize + e, 
                        e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), 
                        t.drag[0].style.width = n + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), 
                        t.drag[0].style.height = n + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), 
                        t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400);
                        }, 1e3));
                    }
                },
                setTransition: function(e) {
                    b.params.scrollbar && b.scrollbar.drag.transition(e);
                }
            }, b.controller = {
                LinearSpline: function(e, t) {
                    var n = function() {
                        var e, t, n;
                        return function(i, a) {
                            for (t = -1, e = i.length; e - t > 1; ) i[n = e + t >> 1] <= a ? t = n : e = n;
                            return e;
                        };
                    }();
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var i, a;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (a = n(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0;
                    };
                },
                getInterpolateFunction: function(e) {
                    b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
                },
                setTranslate: function(e, n) {
                    function i(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(t), 
                        r = -b.controller.spline.interpolate(-e)), r && "container" !== b.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate()), 
                        r = (e - b.minTranslate()) * a + t.minTranslate()), b.params.controlInverse && (r = t.maxTranslate() - r), 
                        t.updateProgress(r), t.setWrapperTranslate(r, !1, b), t.updateActiveIndex();
                    }
                    var a, r, s = b.params.control;
                    if (Array.isArray(s)) for (var o = 0; o < s.length; o++) s[o] !== n && s[o] instanceof t && i(s[o]); else s instanceof t && n !== s && i(s);
                },
                setTransition: function(e, n) {
                    function i(t) {
                        t.setWrapperTransition(e, b), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                        }));
                    }
                    var a, r = b.params.control;
                    if (Array.isArray(r)) for (a = 0; a < r.length; a++) r[a] !== n && r[a] instanceof t && i(r[a]); else r instanceof t && n !== r && i(r);
                }
            }, b.hashnav = {
                onHashCange: function(e, t) {
                    var n = document.location.hash.replace("#", "");
                    n !== b.slides.eq(b.activeIndex).attr("data-hash") && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + n + '"]').index());
                },
                attachEvents: function(t) {
                    var n = t ? "off" : "on";
                    e(window)[n]("hashchange", b.hashnav.onHashCange);
                },
                setHash: function() {
                    if (b.hashnav.initialized && b.params.hashnav) if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || ""); else {
                        var e = b.slides.eq(b.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                        document.location.hash = t || "";
                    }
                },
                init: function() {
                    if (b.params.hashnav && !b.params.history) {
                        b.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) for (var t = 0, n = b.slides.length; t < n; t++) {
                            var i = b.slides.eq(t);
                            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(b.params.slideDuplicateClass)) {
                                var a = i.index();
                                b.slideTo(a, 0, b.params.runCallbacksOnInit, !0);
                            }
                        }
                        b.params.hashnavWatchState && b.hashnav.attachEvents();
                    }
                },
                destroy: function() {
                    b.params.hashnavWatchState && b.hashnav.attachEvents(!0);
                }
            }, b.history = {
                init: function() {
                    if (b.params.history) {
                        if (!window.history || !window.history.pushState) return b.params.history = !1, 
                        void (b.params.hashnav = !0);
                        b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), 
                        b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                    }
                },
                setHistoryPopState: function() {
                    b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1);
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"), t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    };
                },
                setHistory: function(e, t) {
                    if (b.history.initialized && b.params.history) {
                        var n = b.slides.eq(t), i = this.slugify(n.attr("data-history"));
                        window.location.pathname.includes(e) || (i = e + "/" + i), b.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i);
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
                },
                scrollToSlide: function(e, t, n) {
                    if (t) for (var i = 0, a = b.slides.length; i < a; i++) {
                        var r = b.slides.eq(i);
                        if (this.slugify(r.attr("data-history")) === t && !r.hasClass(b.params.slideDuplicateClass)) {
                            var s = r.index();
                            b.slideTo(s, e, n);
                        }
                    } else b.slideTo(0, e, n);
                }
            }, b.disableKeyboardControl = function() {
                b.params.keyboardControl = !1, e(document).off("keydown", l);
            }, b.enableKeyboardControl = function() {
                b.params.keyboardControl = !0, e(document).on("keydown", l);
            }, b.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime()
            }, b.params.mousewheelControl && (b.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in document;
                if (!e) {
                    var t = document.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
                }
                return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), 
                e;
            }() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var t = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (t = e(b.params.mousewheelEventsTarged)), 
                t.off(b.mousewheel.event, p), b.params.mousewheelControl = !1, !0;
            }, b.enableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var t = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (t = e(b.params.mousewheelEventsTarged)), 
                t.on(b.mousewheel.event, p), b.params.mousewheelControl = !0, !0;
            }, b.parallax = {
                setTranslate: function() {
                    b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        c(this, b.progress);
                    }), b.slides.each(function() {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, Math.min(Math.max(t[0].progress, -1), 1));
                        });
                    });
                },
                setTransition: function(t) {
                    void 0 === t && (t = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var n = e(this), i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (i = 0), n.transition(i);
                    });
                }
            }, b.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: b.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2));
                },
                onGestureStart: function(t) {
                    var n = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        n.gesture.scaleStart = n.getDistanceBetweenTouches(t);
                    }
                    n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = e(this), 0 === n.gesture.slide.length && (n.gesture.slide = b.slides.eq(b.activeIndex)), 
                    n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + b.params.zoomContainerClass), 
                    n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, 
                    0 !== n.gesture.imageWrap.length) ? (n.gesture.image.transition(0), n.isScaling = !0) : n.gesture.image = void 0;
                },
                onGestureChange: function(e) {
                    var t = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, 
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), 
                    t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), 
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
                },
                onGestureEnd: function(e) {
                    var t = b.zoom;
                    !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), b.params.zoomMin), 
                    t.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), 
                    t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0));
                },
                onTouchStart: function(e, t) {
                    var n = e.zoom;
                    n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(), 
                    n.image.isTouched = !0, n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                },
                onTouchMove: function(e) {
                    var t = b.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (b.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, 
                        t.image.startX = b.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = b.getTranslate(t.gesture.imageWrap[0], "y") || 0, 
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, 
                        t.gesture.imageWrap.transition(0), b.rtl && (t.image.startX = -t.image.startX), 
                        b.rtl && (t.image.startY = -t.image.startY));
                        var n = t.image.width * t.scale, i = t.image.height * t.scale;
                        if (!(n < t.gesture.slideWidth && i < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0), t.image.maxX = -t.image.minX, 
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - i / 2, 0), t.image.maxY = -t.image.minY, 
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                            !t.image.isMoved && !t.isScaling) {
                                if (b.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void (t.image.isTouched = !1);
                                if (!b.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void (t.image.isTouched = !1);
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, 
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, 
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), 
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), 
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), 
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), 
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), 
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), 
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, 
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, 
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), 
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), 
                            t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, 
                            t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var n = e.zoom;
                    if (n.gesture.image && 0 !== n.gesture.image.length) {
                        if (!n.image.isTouched || !n.image.isMoved) return n.image.isTouched = !1, void (n.image.isMoved = !1);
                        n.image.isTouched = !1, n.image.isMoved = !1;
                        var i = 300, a = 300, r = n.velocity.x * i, s = n.image.currentX + r, o = n.velocity.y * a, l = n.image.currentY + o;
                        0 !== n.velocity.x && (i = Math.abs((s - n.image.currentX) / n.velocity.x)), 0 !== n.velocity.y && (a = Math.abs((l - n.image.currentY) / n.velocity.y));
                        var u = Math.max(i, a);
                        n.image.currentX = s, n.image.currentY = l;
                        var p = n.image.width * n.scale, c = n.image.height * n.scale;
                        n.image.minX = Math.min(n.gesture.slideWidth / 2 - p / 2, 0), n.image.maxX = -n.image.minX, 
                        n.image.minY = Math.min(n.gesture.slideHeight / 2 - c / 2, 0), n.image.maxY = -n.image.minY, 
                        n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX), 
                        n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY), 
                        n.gesture.imageWrap.transition(u).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), 
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, 
                    t.scale = t.currentScale = 1);
                },
                toggleZoom: function(t, n) {
                    var i = t.zoom;
                    if (i.gesture.slide || (i.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), 
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + t.params.zoomContainerClass)), 
                    i.gesture.image && 0 !== i.gesture.image.length) {
                        var a, r, s, o, l, u, p, c, d, h, f, m, g, v, y, w;
                        void 0 === i.image.touchesStart.x && n ? (a = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX, 
                        r = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (a = i.image.touchesStart.x, 
                        r = i.image.touchesStart.y), i.scale && 1 !== i.scale ? (i.scale = i.currentScale = 1, 
                        i.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), 
                        i.gesture.slide = void 0) : (i.scale = i.currentScale = i.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, 
                        n ? (y = i.gesture.slide[0].offsetWidth, w = i.gesture.slide[0].offsetHeight, s = i.gesture.slide.offset().left + y / 2 - a, 
                        o = i.gesture.slide.offset().top + w / 2 - r, p = i.gesture.image[0].offsetWidth, 
                        c = i.gesture.image[0].offsetHeight, d = p * i.scale, h = c * i.scale, g = -(f = Math.min(y / 2 - d / 2, 0)), 
                        v = -(m = Math.min(w / 2 - h / 2, 0)), l = s * i.scale, u = o * i.scale, l < f && (l = f), 
                        l > g && (l = g), u < m && (u = m), u > v && (u = v)) : (l = 0, u = 0), i.gesture.imageWrap.transition(300).transform("translate3d(" + l + "px, " + u + "px,0)"), 
                        i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")"));
                    }
                },
                attachEvents: function(t) {
                    var n = t ? "off" : "on";
                    if (b.params.zoom) {
                        b.slides;
                        var i = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        b.support.gestures ? (b.slides[n]("gesturestart", b.zoom.onGestureStart, i), b.slides[n]("gesturechange", b.zoom.onGestureChange, i), 
                        b.slides[n]("gestureend", b.zoom.onGestureEnd, i)) : "touchstart" === b.touchEvents.start && (b.slides[n](b.touchEvents.start, b.zoom.onGestureStart, i), 
                        b.slides[n](b.touchEvents.move, b.zoom.onGestureChange, i), b.slides[n](b.touchEvents.end, b.zoom.onGestureEnd, i)), 
                        b[n]("touchStart", b.zoom.onTouchStart), b.slides.each(function(t, i) {
                            e(i).find("." + b.params.zoomContainerClass).length > 0 && e(i)[n](b.touchEvents.move, b.zoom.onTouchMove);
                        }), b[n]("touchEnd", b.zoom.onTouchEnd), b[n]("transitionEnd", b.zoom.onTransitionEnd), 
                        b.params.zoomToggle && b.on("doubleTap", b.zoom.toggleZoom);
                    }
                },
                init: function() {
                    b.zoom.attachEvents();
                },
                destroy: function() {
                    b.zoom.attachEvents(!0);
                }
            }, b._plugins = [];
            for (var H in b.plugins) {
                var B = b.plugins[H](b, b.params[H]);
                B && b._plugins.push(B);
            }
            return b.callPlugins = function(e) {
                for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, b.emitterEventListeners = {}, b.emit = function(e) {
                b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (b.emitterEventListeners[e]) for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, b.on = function(e, t) {
                return e = d(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), 
                b.emitterEventListeners[e].push(t), b;
            }, b.off = function(e, t) {
                var n;
                if (e = d(e), void 0 === t) return b.emitterEventListeners[e] = [], b;
                if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                    for (n = 0; n < b.emitterEventListeners[e].length; n++) b.emitterEventListeners[e][n] === t && b.emitterEventListeners[e].splice(n, 1);
                    return b;
                }
            }, b.once = function(e, t) {
                e = d(e);
                var n = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, n);
                };
                return b.on(e, n), b;
            }, b.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e;
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e;
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e;
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (e(t.target).is(b.params.nextButton) ? (b.onClickNext(t), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : e(t.target).is(b.params.prevButton) && (b.onClickPrev(t), 
                    b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), 
                    e(t.target).is("." + b.params.bulletClass) && e(t.target)[0].click());
                },
                liveRegion: e('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = b.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                init: function() {
                    b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), 
                    b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), 
                    b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), 
                    b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), 
                    e(b.container).append(b.a11y.liveRegion);
                },
                initPagination: function() {
                    b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                        var t = e(this);
                        b.a11y.makeFocusable(t), b.a11y.addRole(t, "button"), b.a11y.addLabel(t, b.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1));
                    });
                },
                destroy: function() {
                    b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove();
                }
            }, b.init = function() {
                b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), 
                b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), 
                "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), 
                b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 
                0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), 
                b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), 
                b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), 
                b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), 
                b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), 
                b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), 
                b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), 
                b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), 
                b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b);
            }, b.cleanupStyles = function() {
                b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), 
                b.slides && b.slides.length && b.slides.removeClass([ b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), 
                b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), 
                b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), 
                b.params.prevButton && e(b.params.prevButton).removeClass(b.params.buttonDisabledClass), 
                b.params.nextButton && e(b.params.nextButton).removeClass(b.params.buttonDisabledClass), 
                b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), 
                b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"));
            }, b.destroy = function(e, t) {
                b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), 
                b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), 
                b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), 
                b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), 
                b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), 
                b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), !1 !== e && (b = null);
            }, b.init(), b;
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
            }()
        },
        device: function() {
            var e = window.navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/), n = e.match(/(iPad).*OS\s([\d_]+)/), i = e.match(/(iPod)(.*OS\s([\d_]+))?/), a = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: n || a || i,
                android: t
            };
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in e) return !0;
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window;
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0;
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            }(),
            gestures: function() {
                return "ongesturestart" in window;
            }()
        },
        plugins: {}
    };
    for (var n = [ "jQuery", "Zepto", "Dom7" ], i = 0; i < n.length; i++) window[n[i]] && function(e) {
        e.fn.swiper = function(n) {
            var i;
            return e(this).each(function() {
                var e = new t(this, n);
                i || (i = e);
            }), i;
        };
    }(window[n[i]]);
    var a;
    (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd" in a.fn || (a.fn.transitionEnd = function(e) {
        function t(r) {
            if (r.target === this) for (e.call(this, r), n = 0; n < i.length; n++) a.off(i[n], t);
        }
        var n, i = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], a = this;
        if (e) for (n = 0; n < i.length; n++) a.on(i[n], t);
        return this;
    }), "transform" in a.fn || (a.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e;
        }
        return this;
    }), "transition" in a.fn || (a.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e;
        }
        return this;
    }), "outerWidth" in a.fn || (a.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = t;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper;
}), function(e, t) {
    function n() {
        t(e).scroll(function() {
            var n = t(e).scrollTop();
            t(".back-top").toggleClass("visible", n > 600);
        }), t(".back-top").click(function(e) {
            e.preventDefault(), t("html,body").animate({
                scrollTop: 0
            }, 700);
        });
    }
    function i() {
        var n = t(e).scrollTop();
        t(".title-container figure").css({
            transform: "translate(0px, " + n / 2 + "px)"
        });
    }
    function a() {
        t(".hamburger").click(function() {
            t(this).toggleClass("active"), t(".off-canvas-nav").toggleClass("show-nav"), t(".page-wrap").toggleClass("show-nav"), 
            t("html").toggleClass("no-scroll");
        });
    }
    function r() {
        t(".woocommerce-product-gallery__image a").click(function(e) {
            e.preventDefault();
        }), t(".woocommerce-product-gallery__image a img").click(function() {
            var e = t(".woocommerce-product-gallery__image:first-of-type a img").attr("src"), n = t(this).attr("src");
            t(".woocommerce-product-gallery__image:first-of-type a img").attr("src", n), t(this).attr("src", e);
        });
    }
    function s() {
        new Swiper(".title-container.swiper-container", {
            loop: !1,
            autoplay: 7e3,
            speed: 750,
            pagination: ".swiper-pagination",
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            autoplayDisableOnInteraction: !1,
            paginationClickable: !0
        });
    }
    t(function() {
        a(), r(), n(), s(), t(".single-product .quantity input[type=number]").spinner(), 
        t(e).scroll(function() {
            i();
        });
    });
}(window, jQuery);