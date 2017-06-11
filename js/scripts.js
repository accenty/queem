!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function a(e, t) {
        var a = (t = t || ae).createElement("script");
        a.text = e, t.head.appendChild(a).parentNode.removeChild(a);
    }
    function n(e) {
        var t = !!e && "length" in e && e.length, a = he.type(e);
        return "function" !== a && !he.isWindow(e) && ("array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function i(e, t, a) {
        return he.isFunction(t) ? he.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== a;
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== a;
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return oe.call(t, e) > -1 !== a;
        }) : Se.test(t) ? he.filter(t, e, a) : (t = he.filter(t, e), he.grep(e, function(e) {
            return oe.call(t, e) > -1 !== a && 1 === e.nodeType;
        }));
    }
    function s(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function o(e) {
        var t = {};
        return he.each(e.match(De) || [], function(e, a) {
            t[a] = !0;
        }), t;
    }
    function l(e) {
        return e;
    }
    function p(e) {
        throw e;
    }
    function u(e, t, a, n) {
        var r;
        try {
            e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(a) : e && he.isFunction(r = e.then) ? r.call(e, t, a) : t.apply(void 0, [ e ].slice(n));
        } catch (e) {
            a.apply(void 0, [ e ]);
        }
    }
    function d() {
        ae.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), 
        he.ready();
    }
    function c() {
        this.expando = he.expando + c.uid++;
    }
    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e);
    }
    function h(e, t, a) {
        var n;
        if (void 0 === a && 1 === e.nodeType) if (n = "data-" + t.replace(Oe, "-$&").toLowerCase(), 
        "string" == typeof (a = e.getAttribute(n))) {
            try {
                a = f(a);
            } catch (e) {}
            He.set(e, t, a);
        } else a = void 0;
        return a;
    }
    function m(e, t, a, n) {
        var r, i = 1, s = 20, o = n ? function() {
            return n.cur();
        } : function() {
            return he.css(e, t, "");
        }, l = o(), p = a && a[3] || (he.cssNumber[t] ? "" : "px"), u = (he.cssNumber[t] || "px" !== p && +l) && qe.exec(he.css(e, t));
        if (u && u[3] !== p) {
            p = p || u[3], a = a || [], u = +l || 1;
            do {
                u /= i = i || ".5", he.style(e, t, u + p);
            } while (i !== (i = o() / l) && 1 !== i && --s);
        }
        return a && (u = +u || +l || 0, r = a[1] ? u + (a[1] + 1) * a[2] : +a[2], n && (n.unit = p, 
        n.start = u, n.end = r)), r;
    }
    function g(e) {
        var t, a = e.ownerDocument, n = e.nodeName, r = Ge[n];
        return r || (t = a.body.appendChild(a.createElement(n)), r = he.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === r && (r = "block"), Ge[n] = r, r);
    }
    function v(e, t) {
        for (var a, n, r = [], i = 0, s = e.length; i < s; i++) (n = e[i]).style && (a = n.style.display, 
        t ? ("none" === a && (r[i] = Ne.get(n, "display") || null, r[i] || (n.style.display = "")), 
        "" === n.style.display && Xe(n) && (r[i] = g(n))) : "none" !== a && (r[i] = "none", 
        Ne.set(n, "display", a)));
        for (i = 0; i < s; i++) null != r[i] && (e[i].style.display = r[i]);
        return e;
    }
    function y(e, t) {
        var a;
        return a = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && r(e, t) ? he.merge([ e ], a) : a;
    }
    function w(e, t) {
        for (var a = 0, n = e.length; a < n; a++) Ne.set(e[a], "globalEval", !t || Ne.get(t[a], "globalEval"));
    }
    function x(e, t, a, n, r) {
        for (var i, s, o, l, p, u, d = t.createDocumentFragment(), c = [], f = 0, h = e.length; f < h; f++) if ((i = e[f]) || 0 === i) if ("object" === he.type(i)) he.merge(c, i.nodeType ? [ i ] : i); else if ($e.test(i)) {
            for (s = s || d.appendChild(t.createElement("div")), o = (Fe.exec(i) || [ "", "" ])[1].toLowerCase(), 
            l = _e[o] || _e._default, s.innerHTML = l[1] + he.htmlPrefilter(i) + l[2], u = l[0]; u--; ) s = s.lastChild;
            he.merge(c, s.childNodes), (s = d.firstChild).textContent = "";
        } else c.push(t.createTextNode(i));
        for (d.textContent = "", f = 0; i = c[f++]; ) if (n && he.inArray(i, n) > -1) r && r.push(i); else if (p = he.contains(i.ownerDocument, i), 
        s = y(d.appendChild(i), "script"), p && w(s), a) for (u = 0; i = s[u++]; ) Ve.test(i.type || "") && a.push(i);
        return d;
    }
    function b() {
        return !0;
    }
    function T() {
        return !1;
    }
    function C() {
        try {
            return ae.activeElement;
        } catch (e) {}
    }
    function S(e, t, a, n, r, i) {
        var s, o;
        if ("object" == typeof t) {
            "string" != typeof a && (n = n || a, a = void 0);
            for (o in t) S(e, o, a, n, t[o], i);
            return e;
        }
        if (null == n && null == r ? (r = a, n = a = void 0) : null == r && ("string" == typeof a ? (r = n, 
        n = void 0) : (r = n, n = a, a = void 0)), !1 === r) r = T; else if (!r) return e;
        return 1 === i && (s = r, (r = function(e) {
            return he().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, r, n, a);
        });
    }
    function E(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e;
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function z(e) {
        var t = at.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function M(e, t) {
        var a, n, r, i, s, o, l, p;
        if (1 === t.nodeType) {
            if (Ne.hasData(e) && (i = Ne.access(e), s = Ne.set(t, i), p = i.events)) {
                delete s.handle, s.events = {};
                for (r in p) for (a = 0, n = p[r].length; a < n; a++) he.event.add(t, r, p[r][a]);
            }
            He.hasData(e) && (o = He.access(e), l = he.extend({}, o), He.set(t, l));
        }
    }
    function D(e, t) {
        var a = t.nodeName.toLowerCase();
        "input" === a && Ye.test(e.type) ? t.checked = e.checked : "input" !== a && "textarea" !== a || (t.defaultValue = e.defaultValue);
    }
    function P(e, t, n, r) {
        t = ie.apply([], t);
        var i, s, o, l, p, u, d = 0, c = e.length, f = c - 1, h = t[0], m = he.isFunction(h);
        if (m || c > 1 && "string" == typeof h && !fe.checkClone && tt.test(h)) return e.each(function(a) {
            var i = e.eq(a);
            m && (t[0] = h.call(this, a, i.html())), P(i, t, n, r);
        });
        if (c && (i = x(t, e[0].ownerDocument, !1, e, r), s = i.firstChild, 1 === i.childNodes.length && (i = s), 
        s || r)) {
            for (l = (o = he.map(y(i, "script"), k)).length; d < c; d++) p = i, d !== f && (p = he.clone(p, !0, !0), 
            l && he.merge(o, y(p, "script"))), n.call(e[d], p, d);
            if (l) for (u = o[o.length - 1].ownerDocument, he.map(o, z), d = 0; d < l; d++) p = o[d], 
            Ve.test(p.type || "") && !Ne.access(p, "globalEval") && he.contains(u, p) && (p.src ? he._evalUrl && he._evalUrl(p.src) : a(p.textContent.replace(nt, ""), u));
        }
        return e;
    }
    function I(e, t, a) {
        for (var n, r = t ? he.filter(t, e) : e, i = 0; null != (n = r[i]); i++) a || 1 !== n.nodeType || he.cleanData(y(n)), 
        n.parentNode && (a && he.contains(n.ownerDocument, n) && w(y(n, "script")), n.parentNode.removeChild(n));
        return e;
    }
    function L(e, t, a) {
        var n, r, i, s, o = e.style;
        return (a = a || st(e)) && ("" !== (s = a.getPropertyValue(t) || a[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), 
        !fe.pixelMarginRight() && it.test(s) && rt.test(t) && (n = o.width, r = o.minWidth, 
        i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = a.width, o.width = n, 
        o.minWidth = r, o.maxWidth = i)), void 0 !== s ? s + "" : s;
    }
    function A(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function N(e) {
        if (e in ct) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), a = dt.length; a--; ) if ((e = dt[a] + t) in ct) return e;
    }
    function H(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = N(e) || e), t;
    }
    function B(e, t, a) {
        var n = qe.exec(t);
        return n ? Math.max(0, n[2] - (a || 0)) + (n[3] || "px") : t;
    }
    function O(e, t, a, n, r) {
        var i, s = 0;
        for (i = a === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2) "margin" === a && (s += he.css(e, a + Re[i], !0, r)), 
        n ? ("content" === a && (s -= he.css(e, "padding" + Re[i], !0, r)), "margin" !== a && (s -= he.css(e, "border" + Re[i] + "Width", !0, r))) : (s += he.css(e, "padding" + Re[i], !0, r), 
        "padding" !== a && (s += he.css(e, "border" + Re[i] + "Width", !0, r)));
        return s;
    }
    function j(e, t, a) {
        var n, r = st(e), i = L(e, t, r), s = "border-box" === he.css(e, "boxSizing", !1, r);
        return it.test(i) ? i : (n = s && (fe.boxSizingReliable() || i === e.style[t]), 
        (i = parseFloat(i) || 0) + O(e, t, a || (s ? "border" : "content"), n, r) + "px");
    }
    function q(e, t, a, n, r) {
        return new q.prototype.init(e, t, a, n, r);
    }
    function R() {
        ht && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, he.fx.interval), 
        he.fx.tick());
    }
    function X() {
        return e.setTimeout(function() {
            ft = void 0;
        }), ft = he.now();
    }
    function W(e, t) {
        var a, n = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (a = Re[n])] = r["padding" + a] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function G(e, t, a) {
        for (var n, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), i = 0, s = r.length; i < s; i++) if (n = r[i].call(a, t, e)) return n;
    }
    function Y(e, t, a) {
        var n, r, i, s, o, l, p, u, d = "width" in t || "height" in t, c = this, f = {}, h = e.style, m = e.nodeType && Xe(e), g = Ne.get(e, "fxshow");
        a.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || o();
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, he.queue(e, "fx").length || s.empty.fire();
            });
        }));
        for (n in t) if (r = t[n], mt.test(r)) {
            if (delete t[n], i = i || "toggle" === r, r === (m ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[n]) continue;
                m = !0;
            }
            f[n] = g && g[n] || he.style(e, n);
        }
        if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
            d && 1 === e.nodeType && (a.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (p = g && g.display) && (p = Ne.get(e, "display")), "none" === (u = he.css(e, "display")) && (p ? u = p : (v([ e ], !0), 
            p = e.style.display || p, u = he.css(e, "display"), v([ e ]))), ("inline" === u || "inline-block" === u && null != p) && "none" === he.css(e, "float") && (l || (c.done(function() {
                h.display = p;
            }), null == p && (u = h.display, p = "none" === u ? "" : u)), h.display = "inline-block")), 
            a.overflow && (h.overflow = "hidden", c.always(function() {
                h.overflow = a.overflow[0], h.overflowX = a.overflow[1], h.overflowY = a.overflow[2];
            })), l = !1;
            for (n in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Ne.access(e, "fxshow", {
                display: p
            }), i && (g.hidden = !m), m && v([ e ], !0), c.done(function() {
                m || v([ e ]), Ne.remove(e, "fxshow");
                for (n in f) he.style(e, n, f[n]);
            })), l = G(m ? g[n] : 0, n, c), n in g || (g[n] = l.start, m && (l.end = l.start, 
            l.start = 0));
        }
    }
    function F(e, t) {
        var a, n, r, i, s;
        for (a in e) if (n = he.camelCase(a), r = t[n], i = e[a], Array.isArray(i) && (r = i[1], 
        i = e[a] = i[0]), a !== n && (e[n] = i, delete e[a]), (s = he.cssHooks[n]) && "expand" in s) {
            i = s.expand(i), delete e[n];
            for (a in i) a in e || (e[a] = i[a], t[a] = r);
        } else t[n] = r;
    }
    function V(e, t, a) {
        var n, r, i = 0, s = V.prefilters.length, o = he.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (r) return !1;
            for (var t = ft || X(), a = Math.max(0, p.startTime + p.duration - t), n = 1 - (a / p.duration || 0), i = 0, s = p.tweens.length; i < s; i++) p.tweens[i].run(n);
            return o.notifyWith(e, [ p, n, a ]), n < 1 && s ? a : (s || o.notifyWith(e, [ p, 1, 0 ]), 
            o.resolveWith(e, [ p ]), !1);
        }, p = o.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, a),
            originalProperties: t,
            originalOptions: a,
            startTime: ft || X(),
            duration: a.duration,
            tweens: [],
            createTween: function(t, a) {
                var n = he.Tween(e, p.opts, t, a, p.opts.specialEasing[t] || p.opts.easing);
                return p.tweens.push(n), n;
            },
            stop: function(t) {
                var a = 0, n = t ? p.tweens.length : 0;
                if (r) return this;
                for (r = !0; a < n; a++) p.tweens[a].run(1);
                return t ? (o.notifyWith(e, [ p, 1, 0 ]), o.resolveWith(e, [ p, t ])) : o.rejectWith(e, [ p, t ]), 
                this;
            }
        }), u = p.props;
        for (F(u, p.opts.specialEasing); i < s; i++) if (n = V.prefilters[i].call(p, e, u, p.opts)) return he.isFunction(n.stop) && (he._queueHooks(p.elem, p.opts.queue).stop = he.proxy(n.stop, n)), 
        n;
        return he.map(u, G, p), he.isFunction(p.opts.start) && p.opts.start.call(e, p), 
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), 
        he.fx.timer(he.extend(l, {
            elem: e,
            anim: p,
            queue: p.opts.queue
        })), p;
    }
    function _(e) {
        return (e.match(De) || []).join(" ");
    }
    function $(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function U(e, t, a, n) {
        var r;
        if (Array.isArray(t)) he.each(t, function(t, r) {
            a || kt.test(e) ? n(e, r) : U(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, a, n);
        }); else if (a || "object" !== he.type(t)) n(e, t); else for (r in t) U(e + "[" + r + "]", t[r], a, n);
    }
    function K(e) {
        return function(t, a) {
            "string" != typeof t && (a = t, t = "*");
            var n, r = 0, i = t.toLowerCase().match(De) || [];
            if (he.isFunction(a)) for (;n = i[r++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
            (e[n] = e[n] || []).unshift(a)) : (e[n] = e[n] || []).push(a);
        };
    }
    function Q(e, t, a, n) {
        function r(o) {
            var l;
            return i[o] = !0, he.each(e[o] || [], function(e, o) {
                var p = o(t, a, n);
                return "string" != typeof p || s || i[p] ? s ? !(l = p) : void 0 : (t.dataTypes.unshift(p), 
                r(p), !1);
            }), l;
        }
        var i = {}, s = e === jt;
        return r(t.dataTypes[0]) || !i["*"] && r("*");
    }
    function Z(e, t) {
        var a, n, r = he.ajaxSettings.flatOptions || {};
        for (a in t) void 0 !== t[a] && ((r[a] ? e : n || (n = {}))[a] = t[a]);
        return n && he.extend(!0, e, n), e;
    }
    function J(e, t, a) {
        for (var n, r, i, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n) for (r in o) if (o[r] && o[r].test(n)) {
            l.unshift(r);
            break;
        }
        if (l[0] in a) i = l[0]; else {
            for (r in a) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    i = r;
                    break;
                }
                s || (s = r);
            }
            i = i || s;
        }
        if (i) return i !== l[0] && l.unshift(i), a[i];
    }
    function ee(e, t, a, n) {
        var r, i, s, o, l, p = {}, u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) p[s.toLowerCase()] = e.converters[s];
        for (i = u.shift(); i; ) if (e.responseFields[i] && (a[e.responseFields[i]] = t), 
        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
            if (!(s = p[l + " " + i] || p["* " + i])) for (r in p) if ((o = r.split(" "))[1] === i && (s = p[l + " " + o[0]] || p["* " + o[0]])) {
                !0 === s ? s = p[r] : !0 !== p[r] && (i = o[0], u.unshift(o[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + i
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var te = [], ae = e.document, ne = Object.getPrototypeOf, re = te.slice, ie = te.concat, se = te.push, oe = te.indexOf, le = {}, pe = le.toString, ue = le.hasOwnProperty, de = ue.toString, ce = de.call(Object), fe = {}, he = function(e, t) {
        return new he.fn.init(e, t);
    }, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, ve = /-([a-z])/g, ye = function(e, t) {
        return t.toUpperCase();
    };
    he.fn = he.prototype = {
        jquery: "3.2.0",
        constructor: he,
        length: 0,
        toArray: function() {
            return re.call(this);
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return he.each(this, e);
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, a) {
                return e.call(t, a, t);
            }));
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, a = +e + (e < 0 ? t : 0);
            return this.pushStack(a >= 0 && a < t ? [ this[a] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, a, n, r, i, s = arguments[0] || {}, o = 1, l = arguments.length, p = !1;
        for ("boolean" == typeof s && (p = s, s = arguments[o] || {}, o++), "object" == typeof s || he.isFunction(s) || (s = {}), 
        o === l && (s = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) a = s[t], 
        s !== (n = e[t]) && (p && n && (he.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, 
        i = a && Array.isArray(a) ? a : []) : i = a && he.isPlainObject(a) ? a : {}, s[t] = he.extend(p, i, n)) : void 0 !== n && (s[t] = n));
        return s;
    }, he.extend({
        expando: "jQuery" + ("3.2.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e);
        },
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, a;
            return !(!e || "[object Object]" !== pe.call(e)) && (!(t = ne(e)) || "function" == typeof (a = ue.call(t, "constructor") && t.constructor) && de.call(a) === ce);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[pe.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            a(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(ve, ye);
        },
        each: function(e, t) {
            var a, r = 0;
            if (n(e)) for (a = e.length; r < a && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "");
        },
        makeArray: function(e, t) {
            var a = t || [];
            return null != e && (n(Object(e)) ? he.merge(a, "string" == typeof e ? [ e ] : e) : se.call(a, e)), 
            a;
        },
        inArray: function(e, t, a) {
            return null == t ? -1 : oe.call(t, e, a);
        },
        merge: function(e, t) {
            for (var a = +t.length, n = 0, r = e.length; n < a; n++) e[r++] = t[n];
            return e.length = r, e;
        },
        grep: function(e, t, a) {
            for (var n = [], r = 0, i = e.length, s = !a; r < i; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n;
        },
        map: function(e, t, a) {
            var r, i, s = 0, o = [];
            if (n(e)) for (r = e.length; s < r; s++) null != (i = t(e[s], s, a)) && o.push(i); else for (s in e) null != (i = t(e[s], s, a)) && o.push(i);
            return ie.apply([], o);
        },
        guid: 1,
        proxy: function(e, t) {
            var a, n, r;
            if ("string" == typeof t && (a = e[t], t = e, e = a), he.isFunction(e)) return n = re.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, n.concat(re.call(arguments)));
            }, r.guid = e.guid = e.guid || he.guid++, r;
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = te[Symbol.iterator]), 
    he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
    });
    var we = function(e) {
        function t(e, t, a, n) {
            var r, i, s, o, l, u, c, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (a = a || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return a;
            if (!n && ((t ? t.ownerDocument || t : q) !== I && P(t), t = t || I, A)) {
                if (11 !== h && (l = me.exec(e))) if (r = l[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(r))) return a;
                        if (s.id === r) return a.push(s), a;
                    } else if (f && (s = f.getElementById(r)) && O(t, s) && s.id === r) return a.push(s), 
                    a;
                } else {
                    if (l[2]) return K.apply(a, t.getElementsByTagName(e)), a;
                    if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(a, t.getElementsByClassName(r)), 
                    a;
                }
                if (x.qsa && !Y[e + " "] && (!N || !N.test(e))) {
                    if (1 !== h) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(we, xe) : t.setAttribute("id", o = j), 
                        i = (u = S(e)).length; i--; ) u[i] = "#" + o + " " + d(u[i]);
                        c = u.join(","), f = ge.test(e) && p(t.parentNode) || t;
                    }
                    if (c) try {
                        return K.apply(a, f.querySelectorAll(c)), a;
                    } catch (e) {} finally {
                        o === j && t.removeAttribute("id");
                    }
                }
            }
            return k(e.replace(ie, "$1"), t, a, n);
        }
        function a() {
            function e(a, n) {
                return t.push(a + " ") > b.cacheLength && delete e[t.shift()], e[a + " "] = n;
            }
            var t = [];
            return e;
        }
        function n(e) {
            return e[j] = !0, e;
        }
        function r(e) {
            var t = I.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function i(e, t) {
            for (var a = e.split("|"), n = a.length; n--; ) b.attrHandle[a[n]] = t;
        }
        function s(e, t) {
            var a = t && e, n = a && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (a) for (;a = a.nextSibling; ) if (a === t) return -1;
            return e ? 1 : -1;
        }
        function o(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return n(function(t) {
                return t = +t, n(function(a, n) {
                    for (var r, i = e([], a.length, t), s = i.length; s--; ) a[r = i[s]] && (a[r] = !(n[r] = a[r]));
                });
            });
        }
        function p(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function u() {}
        function d(e) {
            for (var t = 0, a = e.length, n = ""; t < a; t++) n += e[t].value;
            return n;
        }
        function c(e, t, a) {
            var n = t.dir, r = t.next, i = r || n, s = a && "parentNode" === i, o = X++;
            return t.first ? function(t, a, r) {
                for (;t = t[n]; ) if (1 === t.nodeType || s) return e(t, a, r);
                return !1;
            } : function(t, a, l) {
                var p, u, d, c = [ R, o ];
                if (l) {
                    for (;t = t[n]; ) if ((1 === t.nodeType || s) && e(t, a, l)) return !0;
                } else for (;t = t[n]; ) if (1 === t.nodeType || s) if (d = t[j] || (t[j] = {}), 
                u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t; else {
                    if ((p = u[i]) && p[0] === R && p[1] === o) return c[2] = p[2];
                    if (u[i] = c, c[2] = e(t, a, l)) return !0;
                }
                return !1;
            };
        }
        function f(e) {
            return e.length > 1 ? function(t, a, n) {
                for (var r = e.length; r--; ) if (!e[r](t, a, n)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, a, n) {
            for (var r = 0, i = a.length; r < i; r++) t(e, a[r], n);
            return n;
        }
        function m(e, t, a, n, r) {
            for (var i, s = [], o = 0, l = e.length, p = null != t; o < l; o++) (i = e[o]) && (a && !a(i, n, r) || (s.push(i), 
            p && t.push(o)));
            return s;
        }
        function g(e, t, a, r, i, s) {
            return r && !r[j] && (r = g(r)), i && !i[j] && (i = g(i, s)), n(function(n, s, o, l) {
                var p, u, d, c = [], f = [], g = s.length, v = n || h(t || "*", o.nodeType ? [ o ] : o, []), y = !e || !n && t ? v : m(v, c, e, o, l), w = a ? i || (n ? e : g || r) ? [] : s : y;
                if (a && a(y, w, o, l), r) for (p = m(w, f), r(p, [], o, l), u = p.length; u--; ) (d = p[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (n) {
                    if (i || e) {
                        if (i) {
                            for (p = [], u = w.length; u--; ) (d = w[u]) && p.push(y[u] = d);
                            i(null, w = [], p, l);
                        }
                        for (u = w.length; u--; ) (d = w[u]) && (p = i ? Z(n, d) : c[u]) > -1 && (n[p] = !(s[p] = d));
                    }
                } else w = m(w === s ? w.splice(g, w.length) : w), i ? i(null, s, w, l) : K.apply(s, w);
            });
        }
        function v(e) {
            for (var t, a, n, r = e.length, i = b.relative[e[0].type], s = i || b.relative[" "], o = i ? 1 : 0, l = c(function(e) {
                return e === t;
            }, s, !0), p = c(function(e) {
                return Z(t, e) > -1;
            }, s, !0), u = [ function(e, a, n) {
                var r = !i && (n || a !== z) || ((t = a).nodeType ? l(e, a, n) : p(e, a, n));
                return t = null, r;
            } ]; o < r; o++) if (a = b.relative[e[o].type]) u = [ c(f(u), a) ]; else {
                if ((a = b.filter[e[o].type].apply(null, e[o].matches))[j]) {
                    for (n = ++o; n < r && !b.relative[e[n].type]; n++) ;
                    return g(o > 1 && f(u), o > 1 && d(e.slice(0, o - 1).concat({
                        value: " " === e[o - 2].type ? "*" : ""
                    })).replace(ie, "$1"), a, o < n && v(e.slice(o, n)), n < r && v(e = e.slice(n)), n < r && d(e));
                }
                u.push(a);
            }
            return f(u);
        }
        function y(e, a) {
            var r = a.length > 0, i = e.length > 0, s = function(n, s, o, l, p) {
                var u, d, c, f = 0, h = "0", g = n && [], v = [], y = z, w = n || i && b.find.TAG("*", p), x = R += null == y ? 1 : Math.random() || .1, T = w.length;
                for (p && (z = s === I || s || p); h !== T && null != (u = w[h]); h++) {
                    if (i && u) {
                        for (d = 0, s || u.ownerDocument === I || (P(u), o = !A); c = e[d++]; ) if (c(u, s || I, o)) {
                            l.push(u);
                            break;
                        }
                        p && (R = x);
                    }
                    r && ((u = !c && u) && f--, n && g.push(u));
                }
                if (f += h, r && h !== f) {
                    for (d = 0; c = a[d++]; ) c(g, v, s, o);
                    if (n) {
                        if (f > 0) for (;h--; ) g[h] || v[h] || (v[h] = $.call(l));
                        v = m(v);
                    }
                    K.apply(l, v), p && !n && v.length > 0 && f + a.length > 1 && t.uniqueSort(l);
                }
                return p && (R = x, z = y), g;
            };
            return r ? n(s) : s;
        }
        var w, x, b, T, C, S, E, k, z, M, D, P, I, L, A, N, H, B, O, j = "sizzle" + 1 * new Date(), q = e.document, R = 0, X = 0, W = a(), G = a(), Y = a(), F = function(e, t) {
            return e === t && (D = !0), 0;
        }, V = {}.hasOwnProperty, _ = [], $ = _.pop, U = _.push, K = _.push, Q = _.slice, Z = function(e, t) {
            for (var a = 0, n = e.length; a < n; a++) if (e[a] === t) return a;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ae = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), pe = new RegExp(ne), ue = new RegExp("^" + te + "$"), de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + ne),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, ce = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, a) {
            var n = "0x" + t - 65536;
            return n !== n || a ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, be = function() {
            P();
        }, Te = c(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            K.apply(_ = Q.call(q.childNodes), q.childNodes), _[q.childNodes.length].nodeType;
        } catch (e) {
            K = {
                apply: _.length ? function(e, t) {
                    U.apply(e, Q.call(t));
                } : function(e, t) {
                    for (var a = e.length, n = 0; e[a++] = t[n++]; ) ;
                    e.length = a - 1;
                }
            };
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, P = t.setDocument = function(e) {
            var t, a, n = e ? e.ownerDocument || e : q;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, L = I.documentElement, 
            A = !C(I), q !== I && (a = I.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", be, !1) : a.attachEvent && a.attachEvent("onunload", be)), 
            x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length;
            }), x.getElementsByClassName = he.test(I.getElementsByClassName), x.getById = r(function(e) {
                return L.appendChild(e).id = j, !I.getElementsByName || !I.getElementsByName(j).length;
            }), x.getById ? (b.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var a = t.getElementById(e);
                    return a ? [ a ] : [];
                }
            }) : (b.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var a = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return a && a.value === t;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var a, n, r, i = t.getElementById(e);
                    if (i) {
                        if ((a = i.getAttributeNode("id")) && a.value === e) return [ i ];
                        for (r = t.getElementsByName(e), n = 0; i = r[n++]; ) if ((a = i.getAttributeNode("id")) && a.value === e) return [ i ];
                    }
                    return [];
                }
            }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var a, n = [], r = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;a = i[r++]; ) 1 === a.nodeType && n.push(a);
                    return n;
                }
                return i;
            }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e);
            }, H = [], N = [], (x.qsa = he.test(I.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + J + ")"), 
                e.querySelectorAll("[id~=" + j + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), 
                e.querySelectorAll("a#" + j + "+*").length || N.push(".#.+[+~]");
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), 
                L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), N.push(",.*:");
            })), (x.matchesSelector = he.test(B = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = B.call(e, "*"), B.call(e, "[s!='']:x"), H.push("!=", ne);
            }), N = N.length && new RegExp(N.join("|")), H = H.length && new RegExp(H.join("|")), 
            t = he.test(L.compareDocumentPosition), O = t || he.test(L.contains) ? function(e, t) {
                var a = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(a.contains ? a.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, F = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return a || (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & a || !x.sortDetached && t.compareDocumentPosition(e) === a ? e === I || e.ownerDocument === q && O(q, e) ? -1 : t === I || t.ownerDocument === q && O(q, t) ? 1 : M ? Z(M, e) - Z(M, t) : 0 : 4 & a ? -1 : 1);
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var a, n = 0, r = e.parentNode, i = t.parentNode, o = [ e ], l = [ t ];
                if (!r || !i) return e === I ? -1 : t === I ? 1 : r ? -1 : i ? 1 : M ? Z(M, e) - Z(M, t) : 0;
                if (r === i) return s(e, t);
                for (a = e; a = a.parentNode; ) o.unshift(a);
                for (a = t; a = a.parentNode; ) l.unshift(a);
                for (;o[n] === l[n]; ) n++;
                return n ? s(o[n], l[n]) : o[n] === q ? -1 : l[n] === q ? 1 : 0;
            }, I) : I;
        }, t.matches = function(e, a) {
            return t(e, null, null, a);
        }, t.matchesSelector = function(e, a) {
            if ((e.ownerDocument || e) !== I && P(e), a = a.replace(le, "='$1']"), x.matchesSelector && A && !Y[a + " "] && (!H || !H.test(a)) && (!N || !N.test(a))) try {
                var n = B.call(e, a);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return t(a, I, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && P(e), O(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && P(e);
            var a = b.attrHandle[t.toLowerCase()], n = a && V.call(b.attrHandle, t.toLowerCase()) ? a(e, t, !A) : void 0;
            return void 0 !== n ? n : x.attributes || !A ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(we, xe);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, a = [], n = 0, r = 0;
            if (D = !x.detectDuplicates, M = !x.sortStable && e.slice(0), e.sort(F), D) {
                for (;t = e[r++]; ) t === e[r] && (n = a.push(r));
                for (;n--; ) e.splice(a[n], 1);
            }
            return M = null, e;
        }, T = t.getText = function(e) {
            var t, a = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) a += T(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[n++]; ) a += T(t);
            return a;
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: de,
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
                    var t, a = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : a && pe.test(a) && (t = S(a, !0)) && (t = a.indexOf(")", a.length - t) - a.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = a.slice(0, t)), e.slice(0, 3));
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
                ATTR: function(e, a, n) {
                    return function(r) {
                        var i = t.attr(r, e);
                        return null == i ? "!=" === a : !a || (i += "", "=" === a ? i === n : "!=" === a ? i !== n : "^=" === a ? n && 0 === i.indexOf(n) : "*=" === a ? n && i.indexOf(n) > -1 : "$=" === a ? n && i.slice(-n.length) === n : "~=" === a ? (" " + i.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === a && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(e, t, a, n, r) {
                    var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), o = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode;
                    } : function(t, a, l) {
                        var p, u, d, c, f, h, m = i !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = o && t.nodeName.toLowerCase(), y = !l && !o, w = !1;
                        if (g) {
                            if (i) {
                                for (;m; ) {
                                    for (c = t; c = c[m]; ) if (o ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (w = (f = (p = (u = (d = (c = g)[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] || [])[0] === R && p[1]) && p[2], 
                                c = f && g.childNodes[f]; c = ++f && c && c[m] || (w = f = 0) || h.pop(); ) if (1 === c.nodeType && ++w && c === t) {
                                    u[e] = [ R, f, w ];
                                    break;
                                }
                            } else if (y && (w = f = (p = (u = (d = (c = t)[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] || [])[0] === R && p[1]), 
                            !1 === w) for (;(c = ++f && c && c[m] || (w = f = 0) || h.pop()) && ((o ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++w || (y && ((u = (d = c[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] = [ R, w ]), 
                            c !== t)); ) ;
                            return (w -= r) === n || w % n == 0 && w / n >= 0;
                        }
                    };
                },
                PSEUDO: function(e, a) {
                    var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[j] ? i(a) : i.length > 1 ? (r = [ e, e, "", a ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, r = i(e, a), s = r.length; s--; ) e[n = Z(e, r[s])] = !(t[n] = r[s]);
                    }) : function(e) {
                        return i(e, 0, r);
                    }) : i;
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [], a = [], r = E(e.replace(ie, "$1"));
                    return r[j] ? n(function(e, t, a, n) {
                        for (var i, s = r(e, null, n, []), o = e.length; o--; ) (i = s[o]) && (e[o] = !(t[o] = i));
                    }) : function(e, n, i) {
                        return t[0] = e, r(t, null, i, a), t[0] = null, !a.pop();
                    };
                }),
                has: n(function(e) {
                    return function(a) {
                        return t(e, a).length > 0;
                    };
                }),
                contains: n(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                    };
                }),
                lang: n(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var a;
                        do {
                            if (a = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var a = e.location && e.location.hash;
                    return a && a.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return fe.test(e.nodeName);
                },
                input: function(e) {
                    return ce.test(e.nodeName);
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
                eq: l(function(e, t, a) {
                    return [ a < 0 ? a + t : a ];
                }),
                even: l(function(e, t) {
                    for (var a = 0; a < t; a += 2) e.push(a);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var a = 1; a < t; a += 2) e.push(a);
                    return e;
                }),
                lt: l(function(e, t, a) {
                    for (var n = a < 0 ? a + t : a; --n >= 0; ) e.push(n);
                    return e;
                }),
                gt: l(function(e, t, a) {
                    for (var n = a < 0 ? a + t : a; ++n < t; ) e.push(n);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[w] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(w);
        for (w in {
            submit: !0,
            reset: !0
        }) b.pseudos[w] = function(e) {
            return function(t) {
                var a = t.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && t.type === e;
            };
        }(w);
        return u.prototype = b.filters = b.pseudos, b.setFilters = new u(), S = t.tokenize = function(e, a) {
            var n, r, i, s, o, l, p, u = G[e + " "];
            if (u) return a ? 0 : u.slice(0);
            for (o = e, l = [], p = b.preFilter; o; ) {
                n && !(r = se.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(i = [])), 
                n = !1, (r = oe.exec(o)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(ie, " ")
                }), o = o.slice(n.length));
                for (s in b.filter) !(r = de[s].exec(o)) || p[s] && !(r = p[s](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: s,
                    matches: r
                }), o = o.slice(n.length));
                if (!n) break;
            }
            return a ? o.length : o ? t.error(e) : G(e, l).slice(0);
        }, E = t.compile = function(e, t) {
            var a, n = [], r = [], i = Y[e + " "];
            if (!i) {
                for (t || (t = S(e)), a = t.length; a--; ) (i = v(t[a]))[j] ? n.push(i) : r.push(i);
                (i = Y(e, y(r, n))).selector = e;
            }
            return i;
        }, k = t.select = function(e, t, a, n) {
            var r, i, s, o, l, u = "function" == typeof e && e, c = !n && S(e = u.selector || e);
            if (a = a || [], 1 === c.length) {
                if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = i[0]).type && 9 === t.nodeType && A && b.relative[i[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return a;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length);
                }
                for (r = de.needsContext.test(e) ? 0 : i.length; r-- && (s = i[r], !b.relative[o = s.type]); ) if ((l = b.find[o]) && (n = l(s.matches[0].replace(ve, ye), ge.test(i[0].type) && p(t.parentNode) || t))) {
                    if (i.splice(r, 1), !(e = n.length && d(i))) return K.apply(a, n), a;
                    break;
                }
            }
            return (u || E(e, c))(n, t, !A, a, !t || ge.test(e) && p(t.parentNode) || t), a;
        }, x.sortStable = j.split("").sort(F).join("") === j, x.detectDuplicates = !!D, 
        P(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("fieldset"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || i("type|href|height|width", function(e, t, a) {
            if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || i("value", function(e, t, a) {
            if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || i(J, function(e, t, a) {
            var n;
            if (!a) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }), t;
    }(e);
    he.find = we, he.expr = we.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = we.uniqueSort, 
    he.text = we.getText, he.isXMLDoc = we.isXML, he.contains = we.contains, he.escapeSelector = we.escape;
    var xe = function(e, t, a) {
        for (var n = [], r = void 0 !== a; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && he(e).is(a)) break;
            n.push(e);
        }
        return n;
    }, be = function(e, t) {
        for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
        return a;
    }, Te = he.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Se = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, a) {
        var n = t[0];
        return a && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? he.find.matchesSelector(n, e) ? [ n ] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, he.fn.extend({
        find: function(e) {
            var t, a, n = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < n; t++) if (he.contains(r[t], this)) return !0;
            }));
            for (a = this.pushStack([]), t = 0; t < n; t++) he.find(e, r[t], a);
            return n > 1 ? he.uniqueSort(a) : a;
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0));
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length;
        }
    });
    var Ee, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, a) {
        var n, r;
        if (!e) return this;
        if (a = a || Ee, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : ke.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), 
                Ce.test(n[1]) && he.isPlainObject(t)) for (n in t) he.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            return (r = ae.getElementById(n[2])) && (this[0] = r, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== a.ready ? a.ready(e) : e(he) : he.makeArray(e, this);
    }).prototype = he.fn, Ee = he(ae);
    var ze = /^(?:parents|prev(?:Until|All))/, Me = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this), a = t.length;
            return this.filter(function() {
                for (var e = 0; e < a; e++) if (he.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var a, n = 0, r = this.length, i = [], s = "string" != typeof e && he(e);
            if (!Te.test(e)) for (;n < r; n++) for (a = this[n]; a && a !== t; a = a.parentNode) if (a.nodeType < 11 && (s ? s.index(a) > -1 : 1 === a.nodeType && he.find.matchesSelector(a, e))) {
                i.push(a);
                break;
            }
            return this.pushStack(i.length > 1 ? he.uniqueSort(i) : i);
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(he(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return xe(e, "parentNode");
        },
        parentsUntil: function(e, t, a) {
            return xe(e, "parentNode", a);
        },
        next: function(e) {
            return s(e, "nextSibling");
        },
        prev: function(e) {
            return s(e, "previousSibling");
        },
        nextAll: function(e) {
            return xe(e, "nextSibling");
        },
        prevAll: function(e) {
            return xe(e, "previousSibling");
        },
        nextUntil: function(e, t, a) {
            return xe(e, "nextSibling", a);
        },
        prevUntil: function(e, t, a) {
            return xe(e, "previousSibling", a);
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return be(e.firstChild);
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), 
            he.merge([], e.childNodes));
        }
    }, function(e, t) {
        he.fn[e] = function(a, n) {
            var r = he.map(this, t, a);
            return "Until" !== e.slice(-5) && (n = a), n && "string" == typeof n && (r = he.filter(n, r)), 
            this.length > 1 && (Me[e] || he.uniqueSort(r), ze.test(e) && r.reverse()), this.pushStack(r);
        };
    });
    var De = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : he.extend({}, e);
        var t, a, n, r, i = [], s = [], l = -1, p = function() {
            for (r = r || e.once, n = t = !0; s.length; l = -1) for (a = s.shift(); ++l < i.length; ) !1 === i[l].apply(a[0], a[1]) && e.stopOnFalse && (l = i.length, 
            a = !1);
            e.memory || (a = !1), t = !1, r && (i = a ? [] : "");
        }, u = {
            add: function() {
                return i && (a && !t && (l = i.length - 1, s.push(a)), function t(a) {
                    he.each(a, function(a, n) {
                        he.isFunction(n) ? e.unique && u.has(n) || i.push(n) : n && n.length && "string" !== he.type(n) && t(n);
                    });
                }(arguments), a && !t && p()), this;
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var a; (a = he.inArray(t, i, a)) > -1; ) i.splice(a, 1), a <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? he.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function() {
                return i && (i = []), this;
            },
            disable: function() {
                return r = s = [], i = a = "", this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return r = s = [], a || t || (i = a = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(e, a) {
                return r || (a = [ e, (a = a || []).slice ? a.slice() : a ], s.push(a), t || p()), 
                this;
            },
            fire: function() {
                return u.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return u;
    }, he.extend({
        Deferred: function(t) {
            var a = [ [ "notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2 ], [ "resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return r.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return he.Deferred(function(t) {
                        he.each(a, function(a, n) {
                            var r = he.isFunction(e[n[4]]) && e[n[4]];
                            i[n[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    function i(t, a, n, r) {
                        return function() {
                            var o = this, u = arguments, d = function() {
                                var e, d;
                                if (!(t < s)) {
                                    if ((e = n.apply(o, u)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                    d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? r ? d.call(e, i(s, a, l, r), i(s, a, p, r)) : (s++, 
                                    d.call(e, i(s, a, l, r), i(s, a, p, r), i(s, a, l, a.notifyWith))) : (n !== l && (o = void 0, 
                                    u = [ e ]), (r || a.resolveWith)(o, u));
                                }
                            }, c = r ? d : function() {
                                try {
                                    d();
                                } catch (e) {
                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= s && (n !== p && (o = void 0, 
                                    u = [ e ]), a.rejectWith(o, u));
                                }
                            };
                            t ? c() : (he.Deferred.getStackHook && (c.stackTrace = he.Deferred.getStackHook()), 
                            e.setTimeout(c));
                        };
                    }
                    var s = 0;
                    return he.Deferred(function(e) {
                        a[0][3].add(i(0, e, he.isFunction(r) ? r : l, e.notifyWith)), a[1][3].add(i(0, e, he.isFunction(t) ? t : l)), 
                        a[2][3].add(i(0, e, he.isFunction(n) ? n : p));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? he.extend(e, r) : r;
                }
            }, i = {};
            return he.each(a, function(e, t) {
                var s = t[2], o = t[5];
                r[t[1]] = s.add, o && s.add(function() {
                    n = o;
                }, a[3 - e][2].disable, a[0][2].lock), s.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
                }, i[t[0] + "With"] = s.fireWith;
            }), r.promise(i), t && t.call(i, i), i;
        },
        when: function(e) {
            var t = arguments.length, a = t, n = Array(a), r = re.call(arguments), i = he.Deferred(), s = function(e) {
                return function(a) {
                    n[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : a, --t || i.resolveWith(n, r);
                };
            };
            if (t <= 1 && (u(e, i.done(s(a)).resolve, i.reject, !t), "pending" === i.state() || he.isFunction(r[a] && r[a].then))) return i.then();
            for (;a--; ) u(r[a], s(a), i.reject);
            return i.promise();
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, a) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, a);
    }, he.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var Ie = he.Deferred();
    he.fn.ready = function(e) {
        return Ie.then(e).catch(function(e) {
            he.readyException(e);
        }), this;
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Ie.resolveWith(ae, [ he ]));
        }
    }), he.ready.then = Ie.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(he.ready) : (ae.addEventListener("DOMContentLoaded", d), 
    e.addEventListener("load", d));
    var Le = function(e, t, a, n, r, i, s) {
        var o = 0, l = e.length, p = null == a;
        if ("object" === he.type(a)) {
            r = !0;
            for (o in a) Le(e, t, o, a[o], !0, i, s);
        } else if (void 0 !== n && (r = !0, he.isFunction(n) || (s = !0), p && (s ? (t.call(e, n), 
        t = null) : (p = t, t = function(e, t, a) {
            return p.call(he(e), a);
        })), t)) for (;o < l; o++) t(e[o], a, s ? n : n.call(e[o], o, t(e[o], a)));
        return r ? e : p ? t.call(e) : l ? t(e[0], a) : i;
    }, Ae = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    c.uid = 1, c.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, a) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = a; else for (n in t) r[he.camelCase(n)] = t[n];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)];
        },
        access: function(e, t, a) {
            return void 0 === t || t && "string" == typeof t && void 0 === a ? this.get(e, t) : (this.set(e, t, a), 
            void 0 !== a ? a : t);
        },
        remove: function(e, t) {
            var a, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    a = (t = Array.isArray(t) ? t.map(he.camelCase) : (t = he.camelCase(t)) in n ? [ t ] : t.match(De) || []).length;
                    for (;a--; ) delete n[t[a]];
                }
                (void 0 === t || he.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t);
        }
    };
    var Ne = new c(), He = new c(), Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Oe = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return He.hasData(e) || Ne.hasData(e);
        },
        data: function(e, t, a) {
            return He.access(e, t, a);
        },
        removeData: function(e, t) {
            He.remove(e, t);
        },
        _data: function(e, t, a) {
            return Ne.access(e, t, a);
        },
        _removeData: function(e, t) {
            Ne.remove(e, t);
        }
    }), he.fn.extend({
        data: function(e, t) {
            var a, n, r, i = this[0], s = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (r = He.get(i), 1 === i.nodeType && !Ne.get(i, "hasDataAttrs"))) {
                    for (a = s.length; a--; ) s[a] && 0 === (n = s[a].name).indexOf("data-") && (n = he.camelCase(n.slice(5)), 
                    h(i, n, r[n]));
                    Ne.set(i, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                He.set(this, e);
            }) : Le(this, function(t) {
                var a;
                if (i && void 0 === t) {
                    if (void 0 !== (a = He.get(i, e))) return a;
                    if (void 0 !== (a = h(i, e))) return a;
                } else this.each(function() {
                    He.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e);
            });
        }
    }), he.extend({
        queue: function(e, t, a) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Ne.get(e, t), a && (!n || Array.isArray(a) ? n = Ne.access(e, t, he.makeArray(a)) : n.push(a)), 
            n || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var a = he.queue(e, t), n = a.length, r = a.shift(), i = he._queueHooks(e, t), s = function() {
                he.dequeue(e, t);
            };
            "inprogress" === r && (r = a.shift(), n--), r && ("fx" === t && a.unshift("inprogress"), 
            delete i.stop, r.call(e, s, i)), !n && i && i.empty.fire();
        },
        _queueHooks: function(e, t) {
            var a = t + "queueHooks";
            return Ne.get(e, a) || Ne.access(e, a, {
                empty: he.Callbacks("once memory").add(function() {
                    Ne.remove(e, [ t + "queue", a ]);
                })
            });
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var a = 2;
            return "string" != typeof e && (t = e, e = "fx", a--), arguments.length < a ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var a = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && he.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var a, n = 1, r = he.Deferred(), i = this, s = this.length, o = function() {
                --n || r.resolveWith(i, [ i ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (a = Ne.get(i[s], e + "queueHooks")) && a.empty && (n++, 
            a.empty.add(o));
            return o(), r.promise(t);
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"), Re = [ "Top", "Right", "Bottom", "Left" ], Xe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display");
    }, We = function(e, t, a, n) {
        var r, i, s = {};
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        r = a.apply(e, n || []);
        for (i in t) e.style[i] = s[i];
        return r;
    }, Ge = {};
    he.fn.extend({
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Xe(this) ? he(this).show() : he(this).hide();
            });
        }
    });
    var Ye = /^(?:checkbox|radio)$/i, Fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ve = /^$|\/(?:java|ecma)script/i, _e = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, 
    _e.th = _e.td;
    var $e = /<|&#?\w+;/;
    !function() {
        var e = ae.createDocumentFragment().appendChild(ae.createElement("div")), t = ae.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ue = ae.documentElement, Ke = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, a, n, r) {
            var i, s, o, l, p, u, d, c, f, h, m, g = Ne.get(e);
            if (g) for (a.handler && (a = (i = a).handler, r = i.selector), r && he.find.matchesSelector(Ue, r), 
            a.guid || (a.guid = he.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0;
            }), p = (t = (t || "").match(De) || [ "" ]).length; p--; ) f = m = (o = Ze.exec(t[p]) || [])[1], 
            h = (o[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, 
            d = he.event.special[f] || {}, u = he.extend({
                type: f,
                origType: m,
                data: n,
                handler: a,
                guid: a.guid,
                selector: r,
                needsContext: r && he.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, i), (c = l[f]) || ((c = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s)), 
            d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = a.guid)), r ? c.splice(c.delegateCount++, 0, u) : c.push(u), 
            he.event.global[f] = !0);
        },
        remove: function(e, t, a, n, r) {
            var i, s, o, l, p, u, d, c, f, h, m, g = Ne.hasData(e) && Ne.get(e);
            if (g && (l = g.events)) {
                for (p = (t = (t || "").match(De) || [ "" ]).length; p--; ) if (o = Ze.exec(t[p]) || [], 
                f = m = o[1], h = (o[2] || "").split(".").sort(), f) {
                    for (d = he.event.special[f] || {}, c = l[f = (n ? d.delegateType : d.bindType) || f] || [], 
                    o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = c.length; i--; ) u = c[i], 
                    !r && m !== u.origType || a && a.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (c.splice(i, 1), 
                    u.selector && c.delegateCount--, d.remove && d.remove.call(e, u));
                    s && !c.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || he.removeEvent(e, f, g.handle), 
                    delete l[f]);
                } else for (f in l) he.event.remove(e, f + t[p], a, n, !0);
                he.isEmptyObject(l) && Ne.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, a, n, r, i, s, o = he.event.fix(e), l = new Array(arguments.length), p = (Ne.get(this, "events") || {})[o.type] || [], u = he.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = he.event.handlers.call(this, o, p), t = 0; (r = s[t++]) && !o.isPropagationStopped(); ) for (o.currentTarget = r.elem, 
                a = 0; (i = r.handlers[a++]) && !o.isImmediatePropagationStopped(); ) o.rnamespace && !o.rnamespace.test(i.namespace) || (o.handleObj = i, 
                o.data = i.data, void 0 !== (n = ((he.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), 
                o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result;
            }
        },
        handlers: function(e, t) {
            var a, n, r, i, s, o = [], l = t.delegateCount, p = e.target;
            if (l && p.nodeType && !("click" === e.type && e.button >= 1)) for (;p !== this; p = p.parentNode || this) if (1 === p.nodeType && ("click" !== e.type || !0 !== p.disabled)) {
                for (i = [], s = {}, a = 0; a < l; a++) void 0 === s[r = (n = t[a]).selector + " "] && (s[r] = n.needsContext ? he(r, this).index(p) > -1 : he.find(r, this, null, [ p ]).length), 
                s[r] && i.push(n);
                i.length && o.push({
                    elem: p,
                    handlers: i
                });
            }
            return p = this, l < t.length && o.push({
                elem: p,
                handlers: t.slice(l)
            }), o;
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
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
            return e[he.expando] ? e : new he.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (Ye.test(this.type) && this.click && r(this, "input")) return this.click(), !1;
                },
                _default: function(e) {
                    return r(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, he.removeEvent = function(e, t, a) {
        e.removeEventListener && e.removeEventListener(t, a);
    }, he.Event = function(e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : T, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0;
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, he.each({
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
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var a, n = this, r = e.relatedTarget, i = e.handleObj;
                return r && (r === n || he.contains(n, r)) || (e.type = i.origType, a = i.handler.apply(this, arguments), 
                e.type = t), a;
            }
        };
    }), he.fn.extend({
        on: function(e, t, a, n) {
            return S(this, e, t, a, n);
        },
        one: function(e, t, a, n) {
            return S(this, e, t, a, n, 1);
        },
        off: function(e, t, a) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, he(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (a = t, t = void 0), !1 === a && (a = T), 
            this.each(function() {
                he.event.remove(this, e, a, t);
            });
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^true\/(.*)/, nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>");
        },
        clone: function(e, t, a) {
            var n, r, i, s, o = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (s = y(o), 
            n = 0, r = (i = y(e)).length; n < r; n++) D(i[n], s[n]);
            if (t) if (a) for (i = i || y(e), s = s || y(o), n = 0, r = i.length; n < r; n++) M(i[n], s[n]); else M(e, o);
            return (s = y(o, "script")).length > 0 && w(s, !l && y(e, "script")), o;
        },
        cleanData: function(e) {
            for (var t, a, n, r = he.event.special, i = 0; void 0 !== (a = e[i]); i++) if (Ae(a)) {
                if (t = a[Ne.expando]) {
                    if (t.events) for (n in t.events) r[n] ? he.event.remove(a, n) : he.removeEvent(a, n, t.handle);
                    a[Ne.expando] = void 0;
                }
                a[He.expando] && (a[He.expando] = void 0);
            }
        }
    }), he.fn.extend({
        detach: function(e) {
            return I(this, e, !0);
        },
        remove: function(e) {
            return I(this, e);
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return P(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
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
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t);
            });
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}, a = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !_e[(Fe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (;a < n; a++) 1 === (t = this[a] || {}).nodeType && (he.cleanData(y(t, !1)), 
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
                var a = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), a && a.replaceChild(t, this));
            }, e);
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var a, n = [], r = he(e), i = r.length - 1, s = 0; s <= i; s++) a = s === i ? this : this.clone(!0), 
            he(r[s])[t](a), se.apply(n, a.get());
            return this.pushStack(n);
        };
    });
    var rt = /^margin/, it = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), st = function(t) {
        var a = t.ownerDocument.defaultView;
        return a && a.opener || (a = e), a.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                o.innerHTML = "", Ue.appendChild(s);
                var t = e.getComputedStyle(o);
                a = "1%" !== t.top, i = "2px" === t.marginLeft, n = "4px" === t.width, o.style.marginRight = "50%", 
                r = "4px" === t.marginRight, Ue.removeChild(s), o = null;
            }
        }
        var a, n, r, i, s = ae.createElement("div"), o = ae.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", 
        fe.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(o), he.extend(fe, {
            pixelPosition: function() {
                return t(), a;
            },
            boxSizingReliable: function() {
                return t(), n;
            },
            pixelMarginRight: function() {
                return t(), r;
            },
            reliableMarginLeft: function() {
                return t(), i;
            }
        }));
    }();
    var ot = /^(none|table(?!-c[ea]).+)/, lt = /^--/, pt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }, dt = [ "Webkit", "Moz", "ms" ], ct = ae.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var a = L(e, "opacity");
                        return "" === a ? "1" : a;
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
        style: function(e, t, a, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, i, s, o = he.camelCase(t), l = lt.test(t), p = e.style;
                if (l || (t = H(o)), s = he.cssHooks[t] || he.cssHooks[o], void 0 === a) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : p[t];
                "string" === (i = typeof a) && (r = qe.exec(a)) && r[1] && (a = m(e, t, r), i = "number"), 
                null != a && a === a && ("number" === i && (a += r && r[3] || (he.cssNumber[o] ? "" : "px")), 
                fe.clearCloneStyle || "" !== a || 0 !== t.indexOf("background") || (p[t] = "inherit"), 
                s && "set" in s && void 0 === (a = s.set(e, a, n)) || (l ? p.setProperty(t, a) : p[t] = a));
            }
        },
        css: function(e, t, a, n) {
            var r, i, s, o = he.camelCase(t);
            return lt.test(t) || (t = H(o)), (s = he.cssHooks[t] || he.cssHooks[o]) && "get" in s && (r = s.get(e, !0, a)), 
            void 0 === r && (r = L(e, t, n)), "normal" === r && t in ut && (r = ut[t]), "" === a || a ? (i = parseFloat(r), 
            !0 === a || isFinite(i) ? i || 0 : r) : r;
        }
    }), he.each([ "height", "width" ], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, a, n) {
                if (a) return !ot.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, n) : We(e, pt, function() {
                    return j(e, t, n);
                });
            },
            set: function(e, a, n) {
                var r, i = n && st(e), s = n && O(e, t, n, "border-box" === he.css(e, "boxSizing", !1, i), i);
                return s && (r = qe.exec(a)) && "px" !== (r[3] || "px") && (e.style[t] = a, a = he.css(e, t)), 
                B(e, a, s);
            }
        };
    }), he.cssHooks.marginLeft = A(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(a) {
                for (var n = 0, r = {}, i = "string" == typeof a ? a.split(" ") : [ a ]; n < 4; n++) r[e + Re[n] + t] = i[n] || i[n - 2] || i[0];
                return r;
            }
        }, rt.test(e) || (he.cssHooks[e + t].set = B);
    }), he.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, a) {
                var n, r, i = {}, s = 0;
                if (Array.isArray(t)) {
                    for (n = st(e), r = t.length; s < r; s++) i[t[s]] = he.css(e, t[s], !1, n);
                    return i;
                }
                return void 0 !== a ? he.style(e, t, a) : he.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), he.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, a, n, r, i) {
            this.elem = e, this.prop = a, this.easing = r || he.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = n, this.unit = i || (he.cssNumber[a] ? "" : "px");
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this);
        },
        run: function(e) {
            var t, a = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            a && a.set ? a.set(this) : q.propHooks._default.set(this), this;
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0);
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, he.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, he.fx = q.prototype.init, he.fx.step = {};
    var ft, ht, mt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    he.Animation = he.extend(V, {
        tweeners: {
            "*": [ function(e, t) {
                var a = this.createTween(e, t);
                return m(a.elem, e, qe.exec(t), a), a;
            } ]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(De);
            for (var a, n = 0, r = e.length; n < r; n++) a = e[n], V.tweeners[a] = V.tweeners[a] || [], 
            V.tweeners[a].unshift(t);
        },
        prefilters: [ Y ],
        prefilter: function(e, t) {
            t ? V.prefilters.unshift(e) : V.prefilters.push(e);
        }
    }), he.speed = function(e, t, a) {
        var n = e && "object" == typeof e ? he.extend({}, e) : {
            complete: a || !a && t || he.isFunction(e) && e,
            duration: e,
            easing: a && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in he.fx.speeds ? n.duration = he.fx.speeds[n.duration] : n.duration = he.fx.speeds._default), 
        null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            he.isFunction(n.old) && n.old.call(this), n.queue && he.dequeue(this, n.queue);
        }, n;
    }, he.fn.extend({
        fadeTo: function(e, t, a, n) {
            return this.filter(Xe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, a, n);
        },
        animate: function(e, t, a, n) {
            var r = he.isEmptyObject(e), i = he.speed(t, a, n), s = function() {
                var t = V(this, he.extend({}, e), i);
                (r || Ne.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, r || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
        },
        stop: function(e, t, a) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(a);
            };
            return "string" != typeof e && (a = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, r = null != e && e + "queueHooks", i = he.timers, s = Ne.get(this);
                if (r) s[r] && s[r].stop && n(s[r]); else for (r in s) s[r] && s[r].stop && gt.test(r) && n(s[r]);
                for (r = i.length; r--; ) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(a), 
                t = !1, i.splice(r, 1));
                !t && a || he.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, a = Ne.get(this), n = a[e + "queue"], r = a[e + "queueHooks"], i = he.timers, s = n ? n.length : 0;
                for (a.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), 
                t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                i.splice(t, 1));
                for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete a.finish;
            });
        }
    }), he.each([ "toggle", "show", "hide" ], function(e, t) {
        var a = he.fn[t];
        he.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(W(t, !0), e, n, r);
        };
    }), he.each({
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
        he.fn[e] = function(e, a, n) {
            return this.animate(t, e, a, n);
        };
    }), he.timers = [], he.fx.tick = function() {
        var e, t = 0, a = he.timers;
        for (ft = he.now(); t < a.length; t++) (e = a[t])() || a[t] !== e || a.splice(t--, 1);
        a.length || he.fx.stop(), ft = void 0;
    }, he.fx.timer = function(e) {
        he.timers.push(e), he.fx.start();
    }, he.fx.interval = 13, he.fx.start = function() {
        ht || (ht = !0, R());
    }, he.fx.stop = function() {
        ht = null;
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function(t, a) {
        return t = he.fx ? he.fx.speeds[t] || t : t, a = a || "fx", this.queue(a, function(a, n) {
            var r = e.setTimeout(a, t);
            n.stop = function() {
                e.clearTimeout(r);
            };
        });
    }, function() {
        var e = ae.createElement("input"), t = ae.createElement("select").appendChild(ae.createElement("option"));
        e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = t.selected, (e = ae.createElement("input")).value = "t", 
        e.type = "radio", fe.radioValue = "t" === e.value;
    }();
    var vt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e);
            });
        }
    }), he.extend({
        attr: function(e, t, a) {
            var n, r, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? he.prop(e, t, a) : (1 === i && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), 
            void 0 !== a ? null === a ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, a, t)) ? n : (e.setAttribute(t, a + ""), 
            a) : r && "get" in r && null !== (n = r.get(e, t)) ? n : (n = he.find.attr(e, t), 
            null == n ? void 0 : n));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && r(e, "input")) {
                        var a = e.value;
                        return e.setAttribute("type", t), a && (e.value = a), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var a, n = 0, r = t && t.match(De);
            if (r && 1 === e.nodeType) for (;a = r[n++]; ) e.removeAttribute(a);
        }
    }), vt = {
        set: function(e, t, a) {
            return !1 === t ? he.removeAttr(e, a) : e.setAttribute(a, a), a;
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = yt[t] || he.find.attr;
        yt[t] = function(e, t, n) {
            var r, i, s = t.toLowerCase();
            return n || (i = yt[s], yt[s] = r, r = null != a(e, t, n) ? s : null, yt[s] = i), 
            r;
        };
    });
    var wt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e];
            });
        }
    }), he.extend({
        prop: function(e, t, a) {
            var n, r, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && he.isXMLDoc(e) || (t = he.propFix[t] || t, 
            r = he.propHooks[t]), void 0 !== a ? r && "set" in r && void 0 !== (n = r.set(e, a, t)) ? n : e[t] = a : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), he.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        he.propFix[this.toLowerCase()] = this;
    }), he.fn.extend({
        addClass: function(e) {
            var t, a, n, r, i, s, o, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, $(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(De) || []; a = this[l++]; ) if (r = $(a), 
            n = 1 === a.nodeType && " " + _(r) + " ") {
                for (s = 0; i = t[s++]; ) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                r !== (o = _(n)) && a.setAttribute("class", o);
            }
            return this;
        },
        removeClass: function(e) {
            var t, a, n, r, i, s, o, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, $(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(De) || []; a = this[l++]; ) if (r = $(a), 
            n = 1 === a.nodeType && " " + _(r) + " ") {
                for (s = 0; i = t[s++]; ) for (;n.indexOf(" " + i + " ") > -1; ) n = n.replace(" " + i + " ", " ");
                r !== (o = _(n)) && a.setAttribute("class", o);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var a = typeof e;
            return "boolean" == typeof t && "string" === a ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(a) {
                he(this).toggleClass(e.call(this, a, $(this), t), t);
            }) : this.each(function() {
                var t, n, r, i;
                if ("string" === a) for (n = 0, r = he(this), i = e.match(De) || []; t = i[n++]; ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== a || ((t = $(this)) && Ne.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ne.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, a, n = 0;
            for (t = " " + e + " "; a = this[n++]; ) if (1 === a.nodeType && (" " + _($(a)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, a, n, r = this[0];
            {
                if (arguments.length) return n = he.isFunction(e), this.each(function(a) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? e.call(this, a, he(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = he.map(r, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
                });
                if (r) return (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (a = t.get(r, "value")) ? a : (a = r.value, 
                "string" == typeof a ? a.replace(bt, "") : null == a ? "" : a);
            }
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : _(he.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, a, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type, l = o ? null : [], p = o ? s + 1 : i.length;
                    for (n = s < 0 ? p : o ? s : 0; n < p; n++) if (((a = i[n]).selected || n === s) && !a.disabled && (!a.parentNode.disabled || !r(a.parentNode, "optgroup"))) {
                        if (t = he(a).val(), o) return t;
                        l.push(t);
                    }
                    return l;
                },
                set: function(e, t) {
                    for (var a, n, r = e.options, i = he.makeArray(t), s = r.length; s--; ) ((n = r[s]).selected = he.inArray(he.valHooks.option.get(n), i) > -1) && (a = !0);
                    return a || (e.selectedIndex = -1), i;
                }
            }
        }
    }), he.each([ "radio", "checkbox" ], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1;
            }
        }, fe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, a, n, r) {
            var i, s, o, l, p, u, d, c = [ n || ae ], f = ue.call(t, "type") ? t.type : t, h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = n = n || ae, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (f = (h = f.split(".")).shift(), 
            h.sort()), p = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), 
            t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = n), a = null == a ? [ t ] : he.makeArray(a, [ t ]), 
            d = he.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, a))) {
                if (!r && !d.noBubble && !he.isWindow(n)) {
                    for (l = d.delegateType || f, Tt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) c.push(s), 
                    o = s;
                    o === (n.ownerDocument || ae) && c.push(o.defaultView || o.parentWindow || e);
                }
                for (i = 0; (s = c[i++]) && !t.isPropagationStopped(); ) t.type = i > 1 ? l : d.bindType || f, 
                (u = (Ne.get(s, "events") || {})[t.type] && Ne.get(s, "handle")) && u.apply(s, a), 
                (u = p && s[p]) && u.apply && Ae(s) && (t.result = u.apply(s, a), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(c.pop(), a) || !Ae(n) || p && he.isFunction(n[f]) && !he.isWindow(n) && ((o = n[p]) && (n[p] = null), 
                he.event.triggered = f, n[f](), he.event.triggered = void 0, o && (n[p] = o)), t.result;
            }
        },
        simulate: function(e, t, a) {
            var n = he.extend(new he.Event(), a, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(n, null, t);
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var a = this[0];
            if (a) return he.event.trigger(e, t, a, !0);
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, a) {
            return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t);
        };
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var a = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e));
        };
        he.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this, r = Ne.access(n, t);
                r || n.addEventListener(e, a, !0), Ne.access(n, t, (r || 0) + 1);
            },
            teardown: function() {
                var n = this.ownerDocument || this, r = Ne.access(n, t) - 1;
                r ? Ne.access(n, t, r) : (n.removeEventListener(e, a, !0), Ne.remove(n, t));
            }
        };
    });
    var Ct = e.location, St = he.now(), Et = /\?/;
    he.parseXML = function(t) {
        var a;
        if (!t || "string" != typeof t) return null;
        try {
            a = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            a = void 0;
        }
        return a && !a.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), 
        a;
    };
    var kt = /\[\]$/, zt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var a, n = [], r = function(e, t) {
            var a = he.isFunction(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == a ? "" : a);
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            r(this.name, this.value);
        }); else for (a in e) U(a, e[a], t, r);
        return n.join("&");
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Dt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ye.test(e));
            }).map(function(e, t) {
                var a = he(this).val();
                return null == a ? null : Array.isArray(a) ? he.map(a, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(zt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: a.replace(zt, "\r\n")
                };
            }).get();
        }
    });
    var Pt = /%20/g, It = /#.*$/, Lt = /([?&])_=[^&]*/, At = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ht = /^(?:GET|HEAD)$/, Bt = /^\/\//, Ot = {}, jt = {}, qt = "*/".concat("*"), Rt = ae.createElement("a");
    Rt.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Nt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
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
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Z(Z(e, he.ajaxSettings), t) : Z(he.ajaxSettings, e);
        },
        ajaxPrefilter: K(Ot),
        ajaxTransport: K(jt),
        ajax: function(t, a) {
            function n(t, a, n, o) {
                var p, c, f, x, b, T = a;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = o || "", C.readyState = t > 0 ? 4 : 0, 
                p = t >= 200 && t < 300 || 304 === t, n && (x = J(h, C, n)), x = ee(h, x, C, p), 
                p ? (h.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (he.lastModified[i] = b), 
                (b = C.getResponseHeader("etag")) && (he.etag[i] = b)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, 
                c = x.data, p = !(f = x.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), 
                C.status = t, C.statusText = (a || T) + "", p ? v.resolveWith(m, [ c, T, C ]) : v.rejectWith(m, [ C, T, f ]), 
                C.statusCode(w), w = void 0, d && g.trigger(p ? "ajaxSuccess" : "ajaxError", [ C, h, p ? c : f ]), 
                y.fireWith(m, [ C, T ]), d && (g.trigger("ajaxComplete", [ C, h ]), --he.active || he.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (a = t, t = void 0), a = a || {};
            var r, i, s, o, l, p, u, d, c, f, h = he.ajaxSetup({}, a), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? he(m) : he.event, v = he.Deferred(), y = he.Callbacks("once memory"), w = h.statusCode || {}, x = {}, b = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!o) for (o = {}; t = At.exec(s); ) o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return u ? s : null;
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, x[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (u) C.always(e[C.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t), n(0, t), this;
                }
            };
            if (v.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Bt, Ct.protocol + "//"), 
            h.type = a.method || a.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [ "" ], 
            null == h.crossDomain) {
                p = ae.createElement("a");
                try {
                    p.href = h.url, p.href = p.href, h.crossDomain = Rt.protocol + "//" + Rt.host != p.protocol + "//" + p.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), 
            Q(Ot, h, a, C), u) return C;
            (d = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), i = h.url.replace(It, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (f = h.url.slice(i.length), 
            h.data && (i += (Et.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Lt, "$1"), 
            f = (Et.test(i) ? "&" : "?") + "_=" + St++ + f), h.url = i + f), h.ifModified && (he.lastModified[i] && C.setRequestHeader("If-Modified-Since", he.lastModified[i]), 
            he.etag[i] && C.setRequestHeader("If-None-Match", he.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || a.contentType) && C.setRequestHeader("Content-Type", h.contentType), 
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
            for (c in h.headers) C.setRequestHeader(c, h.headers[c]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || u)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = Q(jt, h, a, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [ C, h ]), u) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout");
                }, h.timeout));
                try {
                    u = !1, r.send(x, n);
                } catch (e) {
                    if (u) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return C;
        },
        getJSON: function(e, t, a) {
            return he.get(e, t, a, "json");
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script");
        }
    }), he.each([ "get", "post" ], function(e, t) {
        he[t] = function(e, a, n, r) {
            return he.isFunction(a) && (r = r || n, n = a, a = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: r,
                data: a,
                success: n
            }, he.isPlainObject(e) && e));
        };
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = he(this), a = t.contents();
                a.length ? a.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(a) {
                he(this).wrapAll(t ? e.call(this, a) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes);
            }), this;
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e);
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var Xt = {
        0: 200,
        1223: 204
    }, Wt = he.ajaxSettings.xhr();
    fe.cors = !!Wt && "withCredentials" in Wt, fe.ajax = Wt = !!Wt, he.ajaxTransport(function(t) {
        var a, n;
        if (fe.cors || Wt && !t.crossDomain) return {
            send: function(r, i) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) o.setRequestHeader(s, r[s]);
                a = function(e) {
                    return function() {
                        a && (a = n = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(Xt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()));
                    };
                }, o.onload = a(), n = o.onerror = a("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        a && n();
                    });
                }, a = a("abort");
                try {
                    o.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (a) throw e;
                }
            },
            abort: function() {
                a && a();
            }
        };
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e;
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, a;
            return {
                send: function(n, r) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", a = function(e) {
                        t.remove(), a = null, e && r("error" === e.type ? 404 : 200, e.type);
                    }), ae.head.appendChild(t[0]);
                },
                abort: function() {
                    a && a();
                }
            };
        }
    });
    var Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || he.expando + "_" + St++;
            return this[e] = !0, e;
        }
    }), he.ajaxPrefilter("json jsonp", function(t, a, n) {
        var r, i, s, o = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        o ? t[o] = t[o].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), 
        t.converters["script json"] = function() {
            return s || he.error(r + " was not called"), s[0];
        }, t.dataTypes[0] = "json", i = e[r], e[r] = function() {
            s = arguments;
        }, n.always(function() {
            void 0 === i ? he(e).removeProp(r) : e[r] = i, t[r] && (t.jsonpCallback = a.jsonpCallback, 
            Gt.push(r)), s && he.isFunction(i) && i(s[0]), s = i = void 0;
        }), "script";
    }), fe.createHTMLDocument = function() {
        var e = ae.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), he.parseHTML = function(e, t, a) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (a = t, t = !1);
        var n, r, i;
        return t || (fe.createHTMLDocument ? ((n = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href, 
        t.head.appendChild(n)) : t = ae), r = Ce.exec(e), i = !a && [], r ? [ t.createElement(r[1]) ] : (r = x([ e ], t, i), 
        i && i.length && he(i).remove(), he.merge([], r.childNodes));
    }, he.fn.load = function(e, t, a) {
        var n, r, i, s = this, o = e.indexOf(" ");
        return o > -1 && (n = _(e.slice(o)), e = e.slice(0, o)), he.isFunction(t) ? (a = t, 
        t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, s.html(n ? he("<div>").append(he.parseHTML(e)).find(n) : e);
        }).always(a && function(e, t) {
            s.each(function() {
                a.apply(this, i || [ e.responseText, t, e ]);
            });
        }), this;
    }, he.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem;
        }).length;
    }, he.offset = {
        setOffset: function(e, t, a) {
            var n, r, i, s, o, l, p = he.css(e, "position"), u = he(e), d = {};
            "static" === p && (e.style.position = "relative"), o = u.offset(), i = he.css(e, "top"), 
            l = he.css(e, "left"), ("absolute" === p || "fixed" === p) && (i + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, 
            r = n.left) : (s = parseFloat(i) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, a, he.extend({}, o))), 
            null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), 
            "using" in t ? t.using.call(e, d) : u.css(d);
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t);
            });
            var t, a, n, r, i = this[0];
            if (i) return i.getClientRects().length ? (n = i.getBoundingClientRect(), t = i.ownerDocument, 
            a = t.documentElement, r = t.defaultView, {
                top: n.top + r.pageYOffset - a.clientTop,
                left: n.left + r.pageXOffset - a.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, a = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === he.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), r(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + he.css(e[0], "borderTopWidth", !0),
                    left: n.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - he.css(a, "marginTop", !0),
                    left: t.left - n.left - he.css(a, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position"); ) e = e.offsetParent;
                return e || Ue;
            });
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var a = "pageYOffset" === t;
        he.fn[e] = function(n) {
            return Le(this, function(e, n, r) {
                var i;
                if (he.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[t] : e[n];
                i ? i.scrollTo(a ? i.pageXOffset : r, a ? r : i.pageYOffset) : e[n] = r;
            }, e, n, arguments.length);
        };
    }), he.each([ "top", "left" ], function(e, t) {
        he.cssHooks[t] = A(fe.pixelPosition, function(e, a) {
            if (a) return a = L(e, t), it.test(a) ? he(e).position()[t] + "px" : a;
        });
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(a, n) {
            he.fn[n] = function(r, i) {
                var s = arguments.length && (a || "boolean" != typeof r), o = a || (!0 === r || !0 === i ? "margin" : "border");
                return Le(this, function(t, a, r) {
                    var i;
                    return he.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? he.css(t, a, o) : he.style(t, a, r, o);
                }, t, s ? r : void 0, s);
            };
        });
    }), he.fn.extend({
        bind: function(e, t, a) {
            return this.on(e, null, t, a);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, a, n) {
            return this.on(t, e, a, n);
        },
        undelegate: function(e, t, a) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a);
        },
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0);
        }
    }), he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he;
    });
    var Ft = e.jQuery, Vt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Vt), t && e.jQuery === he && (e.jQuery = Ft), he;
    }, t || (e.jQuery = e.$ = he), he;
}), function() {
    "use strict";
    var e, t = function(a, n) {
        function r(e) {
            return Math.floor(e);
        }
        function i() {
            var e = x.params.autoplay, t = x.slides.eq(x.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay), 
            x.autoplayTimeoutId = setTimeout(function() {
                x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? n.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), 
                x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x));
            }, e);
        }
        function s(t, a) {
            var n = e(t.target);
            if (!n.is(a)) if ("string" == typeof a) n = n.parents(a); else if (a.nodeType) {
                var r;
                return n.parents().each(function(e, t) {
                    t === a && (r = a);
                }), r ? a : void 0;
            }
            if (0 !== n.length) return n[0];
        }
        function o(e, t) {
            t = t || {};
            var a = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    x.onResize(!0), x.emit("onObserverUpdate", x, e);
                });
            });
            a.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), x.observers.push(a);
        }
        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var a = !1;
                    if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                    var n = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, r = window.innerWidth, i = window.innerHeight, s = x.container.offset();
                    x.rtl && (s.left = s.left - x.container[0].scrollLeft);
                    for (var o = [ [ s.left, s.top ], [ s.left + x.width, s.top ], [ s.left, s.top + x.height ], [ s.left + x.width, s.top + x.height ] ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= n.left && p[0] <= n.left + r && p[1] >= n.top && p[1] <= n.top + i && (a = !0);
                    }
                    if (!a) return;
                }
                x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                40 === t && x.slideNext(), 38 === t && x.slidePrev()), x.emit("onKeyPress", x, t);
            }
        }
        function p(e) {
            var t = 0, a = 0, n = 0, r = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), 
            "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), 
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), n = 10 * t, r = 10 * a, 
            "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, 
            r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), 
            {
                spinX: t,
                spinY: a,
                pixelX: n,
                pixelY: r
            };
        }
        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0, a = x.rtl ? -1 : 1, n = p(e);
            if (x.params.mousewheelForceToAxis) if (x.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                t = n.pixelX * a;
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                t = n.pixelY;
            } else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * a : -n.pixelY;
            if (0 !== t) {
                if (x.params.mousewheelInvert && (t = -t), x.params.freeMode) {
                    var r = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity, i = x.isBeginning, s = x.isEnd;
                    if (r >= x.minTranslate() && (r = x.minTranslate()), r <= x.maxTranslate() && (r = x.maxTranslate()), 
                    x.setWrapperTransition(0), x.setWrapperTranslate(r), x.updateProgress(), x.updateActiveIndex(), 
                    (!i && x.isBeginning || !s && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), 
                    x.mousewheel.timeout = setTimeout(function() {
                        x.slideReset();
                    }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), 
                    x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 
                    0 === r || r === x.maxTranslate()) return;
                } else {
                    if (new window.Date().getTime() - x.mousewheel.lastScrollTime > 60) if (t < 0) if (x.isEnd && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return !0;
                    } else x.slideNext(), x.emit("onScroll", x, e); else if (x.isBeginning && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return !0;
                    } else x.slidePrev(), x.emit("onScroll", x, e);
                    x.mousewheel.lastScrollTime = new window.Date().getTime();
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
            }
        }
        function d(t, a) {
            t = e(t);
            var n, r, i, s = x.rtl ? -1 : 1;
            n = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), 
            i = t.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : x.isHorizontal() ? (r = n, 
            i = "0") : (i = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a * s + "%" : r * a * s + "px", 
            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a + "%" : i * a + "px", t.transform("translate3d(" + r + ", " + i + ",0px)");
        }
        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), 
            e;
        }
        if (!(this instanceof t)) return new t(a, n);
        var f = {
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
        }, h = n && n.virtualTranslate;
        n = n || {};
        var m = {};
        for (var g in n) if ("object" != typeof n[g] || null === n[g] || (n[g].nodeType || n[g] === window || n[g] === document || "undefined" != typeof Dom7 && n[g] instanceof Dom7 || "undefined" != typeof jQuery && n[g] instanceof jQuery)) m[g] = n[g]; else {
            m[g] = {};
            for (var v in n[g]) m[g][v] = n[g][v];
        }
        for (var y in f) if (void 0 === n[y]) n[y] = f[y]; else if ("object" == typeof n[y]) for (var w in f[y]) void 0 === n[y][w] && (n[y][w] = f[y][w]);
        var x = this;
        if (x.params = n, x.originalParams = m, x.classNames = [], void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7), 
        (void 0 !== e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = e, 
        x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
            if (!x.params.breakpoints) return !1;
            var e, t = !1, a = [];
            for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && a.push(e);
            a.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
            });
            for (var n = 0; n < a.length; n++) (e = a[n]) >= window.innerWidth && !t && (t = e);
            return t || "max";
        }, x.setBreakpoint = function() {
            var e = x.getActiveBreakpoint();
            if (e && x.currentBreakpoint !== e) {
                var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams, a = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                for (var n in t) x.params[n] = t[n];
                x.currentBreakpoint = e, a && x.destroyLoop && x.reLoop(!0);
            }
        }, x.params.breakpoints && x.setBreakpoint(), x.container = e(a), 0 !== x.container.length)) {
            if (x.container.length > 1) {
                var b = [];
                return x.container.each(function() {
                    b.push(new t(this, n));
                }), b;
            }
            x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), 
            x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), 
            x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), 
            x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), 
            (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), 
            x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), [ "cube", "coverflow", "flip" ].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, 
            x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), 
            "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), 
            "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, 
            x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, 
            x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, 
            x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, 
            x.params.spaceBetween = 0, void 0 === h && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), 
            x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), 
            x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), 
            "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, 
            x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), 
            (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), 
            x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), 
            x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), 
            x.isHorizontal = function() {
                return "horizontal" === x.params.direction;
            }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), 
            x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), 
            x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), 
            x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), 
            x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, 
            x.lockSwipeToNext = function() {
                x.params.allowSwipeToNext = !1, !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor();
            }, x.lockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !1, !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor();
            }, x.lockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor();
            }, x.unlockSwipeToNext = function() {
                x.params.allowSwipeToNext = !0, !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor();
            }, x.unlockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !0, !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor();
            }, x.unlockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor();
            }, x.setGrabCursor = function(e) {
                x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
                x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab";
            }, x.unsetGrabCursor = function() {
                x.container[0].style.cursor = "";
            }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, 
            x.loadImage = function(e, t, a, n, r, i) {
                function s() {
                    i && i();
                }
                var o;
                e.complete && r ? s() : t ? ((o = new window.Image()).onload = s, o.onerror = s, 
                n && (o.sizes = n), a && (o.srcset = a), t && (o.src = t)) : s();
            }, x.preloadImages = function() {
                function e() {
                    void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, 
                    x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), 
                    x.emit("onImagesReady", x)));
                }
                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++) x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e);
            }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function() {
                return void 0 === x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, 
                x.emit("onAutoplayStart", x), void i())));
            }, x.stopAutoplay = function(e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), 
                x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x));
            }, x.pauseAutoplay = function(e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 
                0 === e ? (x.autoplayPaused = !1, i()) : x.wrapper.transitionEnd(function() {
                    x && (x.autoplayPaused = !1, x.autoplaying ? i() : x.stopAutoplay());
                }));
            }, x.minTranslate = function() {
                return -x.snapGrid[0];
            }, x.maxTranslate = function() {
                return -x.snapGrid[x.snapGrid.length - 1];
            }, x.updateAutoHeight = function() {
                var e, t = [], a = 0;
                if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1) for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                    var n = x.activeIndex + e;
                    if (n > x.slides.length) break;
                    t.push(x.slides.eq(n)[0]);
                } else t.push(x.slides.eq(x.activeIndex)[0]);
                for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                    var r = t[e].offsetHeight;
                    a = r > a ? r : a;
                }
                a && x.wrapper.css("height", a + "px");
            }, x.updateContainerSize = function() {
                var e, t;
                e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 
                0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), 
                t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), 
                x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height);
            }, x.updateSlidesSize = function() {
                x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], 
                x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween, a = -x.params.slidesOffsetBefore, n = 0, i = 0;
                if (void 0 !== x.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), 
                    x.virtualSize = -t, x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    x.params.slidesPerColumn > 1 && (s = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, 
                    "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (s = Math.max(s, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var o, l = x.params.slidesPerColumn, p = s / l, u = p - (x.params.slidesPerColumn * p - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        o = 0;
                        var d = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var c, f, h;
                            "column" === x.params.slidesPerColumnFill ? (h = e - (f = Math.floor(e / l)) * l, 
                            (f > u || f === u && h === l - 1) && ++h >= l && (h = 0, f++), c = f + h * s / l, 
                            d.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : f = e - (h = Math.floor(e / p)) * p, d.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", h);
                        }
                        "none" !== d.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), 
                        x.params.roundLengths && (o = r(o))) : (o = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, 
                        x.params.roundLengths && (o = r(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), 
                        x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (a = a + o / 2 + n / 2 + t, 
                        0 === n && 0 !== e && (a = a - x.size / 2 - t), 0 === e && (a = a - x.size / 2 - t), 
                        Math.abs(a) < .001 && (a = 0), i % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), 
                        x.slidesGrid.push(a)) : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), 
                        x.slidesGrid.push(a), a = a + o + t), x.virtualSize += o + t, n = o, i++);
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var m;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * s, 
                    x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, 
                    x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    }), x.params.centeredSlides)) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                        x.snapGrid = m;
                    }
                    if (!x.params.centeredSlides) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                        x.snapGrid = m, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size);
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [ 0 ]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                        marginLeft: t + "px"
                    }) : x.slides.css({
                        marginRight: t + "px"
                    }) : x.slides.css({
                        marginBottom: t + "px"
                    })), x.params.watchSlidesProgress && x.updateSlidesOffset();
                }
            }, x.updateSlidesOffset = function() {
                for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop;
            }, x.currentSlidesPerView = function() {
                var e, t, a = 1;
                if (x.params.centeredSlides) {
                    var n, r = x.slides[x.activeIndex].swiperSlideSize;
                    for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !n && (a++, 
                    (r += x.slides[e].swiperSlideSize) > x.size && (n = !0));
                    for (t = x.activeIndex - 1; t >= 0; t--) x.slides[t] && !n && (a++, (r += x.slides[t].swiperSlideSize) > x.size && (n = !0));
                } else for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && a++;
                return a;
            }, x.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);
                    for (var a = 0; a < x.slides.length; a++) {
                        var n = x.slides[a], r = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var i = -(t - n.swiperSlideOffset), s = i + x.slidesSizesGrid[a];
                            (i >= 0 && i < x.size || s > 0 && s <= x.size || i <= 0 && s >= x.size) && x.slides.eq(a).addClass(x.params.slideVisibleClass);
                        }
                        n.progress = x.rtl ? -r : r;
                    }
                }
            }, x.updateProgress = function(e) {
                void 0 === e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate(), a = x.isBeginning, n = x.isEnd;
                0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, 
                x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !a && x.emit("onReachBeginning", x), 
                x.isEnd && !n && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), 
                x.emit("onProgress", x, x.progress);
            }, x.updateActiveIndex = function() {
                var e, t, a, n = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++) void 0 !== x.slidesGrid[t + 1] ? n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] && (e = t + 1) : n >= x.slidesGrid[t] && (e = t);
                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (a = Math.floor(e / x.params.slidesPerGroup)) >= x.snapGrid.length && (a = x.snapGrid.length - 1), 
                e !== x.activeIndex && (x.snapIndex = a, x.previousIndex = x.activeIndex, x.activeIndex = e, 
                x.updateClasses(), x.updateRealIndex());
            }, x.updateRealIndex = function() {
                x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10);
            }, x.updateClasses = function() {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                var t = x.slides.eq(x.activeIndex);
                t.addClass(x.params.slideActiveClass), n.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                var a = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === a.length && (a = x.slides.eq(0)).addClass(x.params.slideNextClass);
                var r = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === r.length && (r = x.slides.eq(-1)).addClass(x.params.slidePrevClass), 
                n.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), 
                r.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), 
                x.paginationContainer && x.paginationContainer.length > 0) {
                    var i, s = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? ((i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup)) > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), 
                    i > s - 1 && (i -= s), i < 0 && "bullets" !== x.params.paginationType && (i = s + i)) : i = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, 
                    "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), 
                    x.paginationContainer.length > 1 ? x.bullets.each(function() {
                        e(this).index() === i && e(this).addClass(x.params.bulletActiveClass);
                    }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), 
                    x.paginationContainer.find("." + x.params.paginationTotalClass).text(s)), "progress" === x.params.paginationType) {
                        var o = (i + 1) / s, l = o, p = 1;
                        x.isHorizontal() || (p = o, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(x.params.speed);
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, s)), 
                    x.emit("onPaginationRendered", x, x.paginationContainer[0]));
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), 
                x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), 
                x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), 
                x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), 
                x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))));
            }, x.updatePagination = function() {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, a = 0; a < t; a++) x.params.paginationBulletRender ? e += x.params.paginationBulletRender(x, a, x.params.bulletClass) : e += "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), 
                        x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination();
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', 
                    x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', 
                    x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0]);
                }
            }, x.update = function(e) {
                function t() {
                    x.rtl, x.translate;
                    a = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(a), 
                    x.updateActiveIndex(), x.updateClasses();
                }
                if (x) {
                    x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), 
                    x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                    var a;
                    if (e) {
                        x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), 
                        x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t();
                    } else x.params.autoHeight && x.updateAutoHeight();
                }
            }, x.onResize = function(e) {
                x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev, a = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), 
                x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), 
                x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                var n = !1;
                if (x.params.freeMode) {
                    var r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight();
                } else x.updateClasses(), n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !n && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, 
                x.params.allowSwipeToNext = a, x.params.onAfterResize && x.params.onAfterResize(x);
            }, x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), 
            x.initEvents = function(e) {
                var t = e ? "off" : "on", a = e ? "removeEventListener" : "addEventListener", r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0], i = x.support.touch ? r : document, s = !!x.params.nested;
                if (x.browser.ie) r[a](x.touchEvents.start, x.onTouchStart, !1), i[a](x.touchEvents.move, x.onTouchMove, s), 
                i[a](x.touchEvents.end, x.onTouchEnd, !1); else {
                    if (x.support.touch) {
                        var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r[a](x.touchEvents.start, x.onTouchStart, o), r[a](x.touchEvents.move, x.onTouchMove, s), 
                        r[a](x.touchEvents.end, x.onTouchEnd, o);
                    }
                    (n.simulateTouch && !x.device.ios && !x.device.android || n.simulateTouch && !x.support.touch && x.device.ios) && (r[a]("mousedown", x.onTouchStart, !1), 
                    document[a]("mousemove", x.onTouchMove, s), document[a]("mouseup", x.onTouchEnd, !1));
                }
                window[a]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), 
                x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), 
                x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), 
                x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), 
                (x.params.preventClicks || x.params.preventClicksPropagation) && r[a]("click", x.preventClicks, !0);
            }, x.attachEvents = function() {
                x.initEvents();
            }, x.detachEvents = function() {
                x.initEvents(!0);
            }, x.allowClick = !0, x.preventClicks = function(e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), 
                e.stopImmediatePropagation()));
            }, x.onClickNext = function(e) {
                e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext();
            }, x.onClickPrev = function(e) {
                e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev();
            }, x.onClickIndex = function(t) {
                t.preventDefault();
                var a = e(this).index() * x.params.slidesPerGroup;
                x.params.loop && (a += x.loopedSlides), x.slideTo(a);
            }, x.updateClickedSlide = function(t) {
                var a = s(t, "." + x.params.slideClass), n = !1;
                if (a) for (var r = 0; r < x.slides.length; r++) x.slides[r] === a && (n = !0);
                if (!a || !n) return x.clickedSlide = void 0, void (x.clickedIndex = void 0);
                if (x.clickedSlide = a, x.clickedIndex = e(a).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var i, o = x.clickedIndex, l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                    if (x.params.loop) {
                        if (x.animating) return;
                        i = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), 
                        o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            x.slideTo(o);
                        }, 0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            x.slideTo(o);
                        }, 0)) : x.slideTo(o);
                    } else x.slideTo(o);
                }
            };
            var T, C, S, E, k, z, M, D, P, I, L = "input, select, textarea, button, video", A = Date.now(), N = [];
            x.animating = !1, x.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var H, B;
            x.onTouchStart = function(t) {
                if (t.originalEvent && (t = t.originalEvent), (H = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) if (x.params.noSwiping && s(t, "." + x.params.noSwipingClass)) x.allowClick = !0; else if (!x.params.swipeHandler || s(t, x.params.swipeHandler)) {
                    var a = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                    if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && a <= x.params.iOSEdgeSwipeThreshold)) {
                        if (T = !0, C = !1, S = !0, k = void 0, B = void 0, x.touches.startX = a, x.touches.startY = n, 
                        E = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, 
                        x.params.threshold > 0 && (D = !1), "touchstart" !== t.type) {
                            var r = !0;
                            e(t.target).is(L) && (r = !1), document.activeElement && e(document.activeElement).is(L) && document.activeElement.blur(), 
                            r && t.preventDefault();
                        }
                        x.emit("onTouchStart", x, t);
                    }
                }
            }, x.onTouchMove = function(t) {
                if (t.originalEvent && (t = t.originalEvent), !H || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper) return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    void (x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (x.params.onlyExternal) return x.allowClick = !1, void (T && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, 
                    E = Date.now()));
                    if (H && x.params.touchReleaseOnEdges && !x.params.loop) if (x.isHorizontal()) {
                        if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return;
                    } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                    if (H && document.activeElement && t.target === document.activeElement && e(t.target).is(L)) return C = !0, 
                    void (x.allowClick = !1);
                    if (S && x.emit("onTouchMove", x, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                        if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                        x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, 
                        void 0 === k) {
                            var a;
                            x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? k = !1 : (a = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, 
                            k = x.isHorizontal() ? a > x.params.touchAngle : 90 - a > x.params.touchAngle);
                        }
                        if (k && x.emit("onTouchMoveOpposite", x, t), void 0 === B && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (B = !0)), 
                        T) if (k) T = !1; else if (B) {
                            x.allowClick = !1, x.emit("onSliderMove", x, t), t.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(), 
                            C || (n.loop && x.fixLoop(), M = x.getWrapperTranslate(), x.setWrapperTransition(0), 
                            x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), 
                            x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), 
                            I = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), 
                            C = !0;
                            var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                            r *= x.params.touchRatio, x.rtl && (r = -r), x.swipeDirection = r > 0 ? "prev" : "next", 
                            z = r + M;
                            var i = !0;
                            if (r > 0 && z > x.minTranslate() ? (i = !1, x.params.resistance && (z = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + M + r, x.params.resistanceRatio))) : r < 0 && z < x.maxTranslate() && (i = !1, 
                            x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - M - r, x.params.resistanceRatio))), 
                            i && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && z < M && (z = M), 
                            !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && z > M && (z = M), x.params.threshold > 0) {
                                if (!(Math.abs(r) > x.params.threshold || D)) return void (z = M);
                                if (!D) return D = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, 
                                z = M, void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY);
                            }
                            x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), 
                            x.params.freeMode && (0 === N.length && N.push({
                                position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                time: E
                            }), N.push({
                                position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                time: new window.Date().getTime()
                            })), x.updateProgress(z), x.setWrapperTranslate(z));
                        }
                    }
                }
            }, x.onTouchEnd = function(t) {
                if (t.originalEvent && (t = t.originalEvent), S && x.emit("onTouchEnd", x, t), S = !1, 
                T) {
                    x.params.grabCursor && C && T && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                    var a = Date.now(), n = a - E;
                    if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), n < 300 && a - A > 300 && (P && clearTimeout(P), 
                    P = setTimeout(function() {
                        x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), 
                        x.emit("onClick", x, t));
                    }, 300)), n < 300 && a - A < 300 && (P && clearTimeout(P), x.emit("onDoubleTap", x, t))), 
                    A = Date.now(), setTimeout(function() {
                        x && (x.allowClick = !0);
                    }, 0), T && C && x.swipeDirection && 0 !== x.touches.diff && z !== M) {
                        T = C = !1;
                        var r;
                        if (r = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -z, x.params.freeMode) {
                            if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                            if (r > -x.maxTranslate()) return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                            if (x.params.freeModeMomentum) {
                                if (N.length > 1) {
                                    var i = N.pop(), s = N.pop(), o = i.position - s.position, l = i.time - s.time;
                                    x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), 
                                    (l > 150 || new window.Date().getTime() - i.time > 300) && (x.velocity = 0);
                                } else x.velocity = 0;
                                x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, N.length = 0;
                                var p = 1e3 * x.params.freeModeMomentumRatio, u = x.velocity * p, d = x.translate + u;
                                x.rtl && (d = -d);
                                var c, f = !1, h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                if (d < x.maxTranslate()) x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -h && (d = x.maxTranslate() - h), 
                                c = x.maxTranslate(), f = !0, I = !0) : d = x.maxTranslate(); else if (d > x.minTranslate()) x.params.freeModeMomentumBounce ? (d - x.minTranslate() > h && (d = x.minTranslate() + h), 
                                c = x.minTranslate(), f = !0, I = !0) : d = x.minTranslate(); else if (x.params.freeModeSticky) {
                                    var m, g = 0;
                                    for (g = 0; g < x.snapGrid.length; g += 1) if (x.snapGrid[g] > -d) {
                                        m = g;
                                        break;
                                    }
                                    d = Math.abs(x.snapGrid[m] - d) < Math.abs(x.snapGrid[m - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1], 
                                    x.rtl || (d = -d);
                                }
                                if (0 !== x.velocity) p = x.rtl ? Math.abs((-d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity); else if (x.params.freeModeSticky) return void x.slideReset();
                                x.params.freeModeMomentumBounce && f ? (x.updateProgress(c), x.setWrapperTransition(p), 
                                x.setWrapperTranslate(d), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() {
                                    x && I && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), 
                                    x.setWrapperTranslate(c), x.wrapper.transitionEnd(function() {
                                        x && x.onTransitionEnd();
                                    }));
                                })) : x.velocity ? (x.updateProgress(d), x.setWrapperTransition(p), x.setWrapperTranslate(d), 
                                x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd();
                                }))) : x.updateProgress(d), x.updateActiveIndex();
                            }
                            (!x.params.freeModeMomentum || n >= x.params.longSwipesMs) && (x.updateProgress(), 
                            x.updateActiveIndex());
                        } else {
                            var v, y = 0, w = x.slidesSizesGrid[0];
                            for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? r >= x.slidesGrid[v] && r < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, 
                            w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : r >= x.slidesGrid[v] && (y = v, 
                            w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                            var b = (r - x.slidesGrid[y]) / w;
                            if (n > x.params.longSwipesMs) {
                                if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)), 
                                "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y));
                            } else {
                                if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(y);
                            }
                        }
                    } else T = C = !1;
                }
            }, x._slideTo = function(e, t) {
                return x.slideTo(e, t, !0, !0);
            }, x.slideTo = function(e, t, a, n) {
                void 0 === a && (a = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), 
                x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var r = -x.snapGrid[x.snapIndex];
                if (x.params.autoplay && x.autoplaying && (n || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), 
                x.updateProgress(r), x.params.normalizeSlideIndex) for (var i = 0; i < x.slidesGrid.length; i++) -Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[i]) && (e = i);
                return !(!x.params.allowSwipeToNext && r < x.translate && r < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && r > x.translate && r > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === t && (t = x.params.speed), 
                x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -r === x.translate || !x.rtl && r === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), 
                x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(r), !1) : (x.updateClasses(), 
                x.onTransitionStart(a), 0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(r), 
                x.setWrapperTransition(0), x.onTransitionEnd(a)) : (x.setWrapperTranslate(r), x.setWrapperTransition(t), 
                x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(a);
                }))), !0)));
            }, x.onTransitionStart = function(e) {
                void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), 
                e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), 
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)));
            }, x.onTransitionEnd = function(e) {
                x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), 
                e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), 
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), 
                x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), 
                x.params.hashnav && x.hashnav && x.hashnav.setHash();
            }, x.slideNext = function(e, t, a) {
                if (x.params.loop) {
                    if (x.animating) return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a);
                }
                return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a);
            }, x._slideNext = function(e) {
                return x.slideNext(!0, e, !0);
            }, x.slidePrev = function(e, t, a) {
                if (x.params.loop) {
                    if (x.animating) return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex - 1, t, e, a);
                }
                return x.slideTo(x.activeIndex - 1, t, e, a);
            }, x._slidePrev = function(e) {
                return x.slidePrev(!0, e, !0);
            }, x.slideReset = function(e, t, a) {
                return x.slideTo(x.activeIndex, t, e);
            }, x.disableTouchControl = function() {
                return x.params.onlyExternal = !0, !0;
            }, x.enableTouchControl = function() {
                return x.params.onlyExternal = !1, !0;
            }, x.setWrapperTransition = function(e, t) {
                x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), 
                x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), 
                x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e);
            }, x.setWrapperTranslate = function(e, t, a) {
                var n = 0, i = 0;
                x.isHorizontal() ? n = x.rtl ? -e : e : i = e, x.params.roundLengths && (n = r(n), 
                i = r(i)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + n + "px, " + i + "px, 0px)") : x.wrapper.transform("translate(" + n + "px, " + i + "px)")), 
                x.translate = x.isHorizontal() ? n : i;
                var s = x.maxTranslate() - x.minTranslate();
                (0 === s ? 0 : (e - x.minTranslate()) / s) !== x.progress && x.updateProgress(e), 
                t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), 
                x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), 
                x.params.control && x.controller && x.controller.setTranslate(x.translate, a), x.emit("onSetTranslate", x, x.translate);
            }, x.getTranslate = function(e, t) {
                var a, n, r, i;
                return void 0 === t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (r = window.getComputedStyle(e, null), 
                window.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".");
                }).join(", ")), i = new window.WebKitCSSMatrix("none" === n ? "" : n)) : a = (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), 
                "x" === t && (n = window.WebKitCSSMatrix ? i.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), 
                "y" === t && (n = window.WebKitCSSMatrix ? i.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), 
                x.rtl && n && (n = -n), n || 0);
            }, x.getWrapperTranslate = function(e) {
                return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e);
            }, x.observers = [], x.initObservers = function() {
                if (x.params.observeParents) for (var e = x.container.parents(), t = 0; t < e.length; t++) o(e[t]);
                o(x.container[0], {
                    childList: !1
                }), o(x.wrapper[0], {
                    attributes: !1
                });
            }, x.disconnectObservers = function() {
                for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                x.observers = [];
            }, x.createLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var t = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length), 
                x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), 
                x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > t.length && (x.loopedSlides = t.length);
                var a, n = [], r = [];
                for (t.each(function(a, i) {
                    var s = e(this);
                    a < x.loopedSlides && r.push(i), a < t.length && a >= t.length - x.loopedSlides && n.push(i), 
                    s.attr("data-swiper-slide-index", a);
                }), a = 0; a < r.length; a++) x.wrapper.append(e(r[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (a = n.length - 1; a >= 0; a--) x.wrapper.prepend(e(n[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
            }, x.destroyLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), 
                x.slides.removeAttr("data-swiper-slide-index");
            }, x.reLoop = function(e) {
                var t = x.activeIndex - x.loopedSlides;
                x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1);
            }, x.fixLoop = function() {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, 
                e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, 
                e += x.loopedSlides, x.slideTo(e, 0, !1, !0));
            }, x.appendSlide = function(e) {
                if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]); else x.wrapper.append(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0);
            }, x.prependSlide = function(e) {
                x.params.loop && x.destroyLoop();
                var t = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var a = 0; a < e.length; a++) e[a] && x.wrapper.prepend(e[a]);
                    t = x.activeIndex + e.length;
                } else x.wrapper.prepend(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), 
                x.slideTo(t, 0, !1);
            }, x.removeSlide = function(e) {
                x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                var t, a = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) t = e[n], x.slides[t] && x.slides.eq(t).remove(), 
                    t < a && a--;
                    a = Math.max(a, 0);
                } else t = e, x.slides[t] && x.slides.eq(t).remove(), t < a && a--, a = Math.max(a, 0);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), 
                x.params.loop ? x.slideTo(a + x.loopedSlides, 0, !1) : x.slideTo(a, 0, !1);
            }, x.removeAllSlides = function() {
                for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                x.removeSlide(e);
            }, x.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e), a = -t[0].swiperSlideOffset;
                            x.params.virtualTranslate || (a -= x.translate);
                            var n = 0;
                            x.isHorizontal() || (n = a, a = 0);
                            var r = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: r
                            }).transform("translate3d(" + a + "px, " + n + "px, 0px)");
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            x.slides.transitionEnd(function() {
                                if (!t && x) {
                                    t = !0, x.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], a = 0; a < e.length; a++) x.wrapper.trigger(e[a]);
                                }
                            });
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t = 0; t < x.slides.length; t++) {
                            var a = x.slides.eq(t), n = a[0].progress;
                            x.params.flip.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                            var r = -180 * n, i = 0, s = -a[0].swiperSlideOffset, o = 0;
                            if (x.isHorizontal() ? x.rtl && (r = -r) : (o = s, s = 0, i = -r, r = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + x.slides.length, 
                            x.params.flip.slideShadows) {
                                var l = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), p = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), 
                                a.append(l)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                a.append(p)), l.length && (l[0].style.opacity = Math.max(-n, 0)), p.length && (p[0].style.opacity = Math.max(n, 0));
                            }
                            a.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + i + "deg) rotateY(" + r + "deg)");
                        }
                    },
                    setTransition: function(t) {
                        if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), 
                        x.params.virtualTranslate && 0 !== t) {
                            var a = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                if (!a && x && e(this).hasClass(x.params.slideActiveClass)) {
                                    a = !0, x.animating = !1;
                                    for (var t = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], n = 0; n < t.length; n++) x.wrapper.trigger(t[n]);
                                }
                            });
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, a = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (0 === (t = x.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), 
                        x.wrapper.append(t)), t.css({
                            height: x.width + "px"
                        })) : 0 === (t = x.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), 
                        x.container.append(t)));
                        for (var n = 0; n < x.slides.length; n++) {
                            var r = x.slides.eq(n), i = 90 * n, s = Math.floor(i / 360);
                            x.rtl && (i = -i, s = Math.floor(-i / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1), l = 0, p = 0, u = 0;
                            n % 4 == 0 ? (l = 4 * -s * x.size, u = 0) : (n - 1) % 4 == 0 ? (l = 0, u = 4 * -s * x.size) : (n - 2) % 4 == 0 ? (l = x.size + 4 * s * x.size, 
                            u = x.size) : (n - 3) % 4 == 0 && (l = -x.size, u = 3 * x.size + 4 * x.size * s), 
                            x.rtl && (l = -l), x.isHorizontal() || (p = l, l = 0);
                            var d = "rotateX(" + (x.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (x.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + u + "px)";
                            if (o <= 1 && o > -1 && (a = 90 * n + 90 * o, x.rtl && (a = 90 * -n - 90 * o)), 
                            r.transform(d), x.params.cube.slideShadows) {
                                var c = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), f = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), 
                                r.append(c)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                r.append(f)), c.length && (c[0].style.opacity = Math.max(-o, 0)), f.length && (f[0].style.opacity = Math.max(o, 0));
                            }
                        }
                        if (x.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "transform-origin": "50% 50% -" + x.size / 2 + "px"
                        }), x.params.cube.shadow) if (x.isHorizontal()) t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")"); else {
                            var h = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90), m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2), g = x.params.cube.shadowScale, v = x.params.cube.shadowScale / m, y = x.params.cube.shadowOffset;
                            t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)");
                        }
                        var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : a) + "deg) rotateY(" + (x.isHorizontal() ? -a : 0) + "deg)");
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e);
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var t = x.translate, a = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, n = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, i = 0, s = x.slides.length; i < s; i++) {
                            var o = x.slides.eq(i), l = x.slidesSizesGrid[i], p = (a - o[0].swiperSlideOffset - l / 2) / l * x.params.coverflow.modifier, u = x.isHorizontal() ? n * p : 0, d = x.isHorizontal() ? 0 : n * p, c = -r * Math.abs(p), f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * p, h = x.isHorizontal() ? x.params.coverflow.stretch * p : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), 
                            Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0);
                            var m = "translate3d(" + h + "px," + f + "px," + c + "px)  rotateX(" + d + "deg) rotateY(" + u + "deg)";
                            if (o.transform(m), o[0].style.zIndex = 1 - Math.abs(Math.round(p)), x.params.coverflow.slideShadows) {
                                var g = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"), v = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), 
                                o.append(g)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                o.append(v)), g.length && (g[0].style.opacity = p > 0 ? p : 0), v.length && (v[0].style.opacity = -p > 0 ? -p : 0);
                            }
                        }
                        x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = a + "px 50%");
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    }
                }
            }, x.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, a) {
                    if (void 0 !== t && (void 0 === a && (a = !0), 0 !== x.slides.length)) {
                        var n = x.slides.eq(t), r = n.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                        !n.hasClass(x.params.lazyLoadingClass) || n.hasClass(x.params.lazyStatusLoadedClass) || n.hasClass(x.params.lazyStatusLoadingClass) || (r = r.add(n[0])), 
                        0 !== r.length && r.each(function() {
                            var t = e(this);
                            t.addClass(x.params.lazyStatusLoadingClass);
                            var r = t.attr("data-background"), i = t.attr("data-src"), s = t.attr("data-srcset"), o = t.attr("data-sizes");
                            x.loadImage(t[0], i || r, s, o, !1, function() {
                                if (void 0 !== x && null !== x && x) {
                                    if (r ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), 
                                    t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), 
                                    i && (t.attr("src", i), t.removeAttr("data-src"))), t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), 
                                    n.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), 
                                    x.params.loop && a) {
                                        var e = n.attr("data-swiper-slide-index");
                                        if (n.hasClass(x.params.slideDuplicateClass)) {
                                            var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                            x.lazy.loadImageInSlide(l.index(), !1);
                                        } else {
                                            var p = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            x.lazy.loadImageInSlide(p.index(), !1);
                                        }
                                    }
                                    x.emit("onLazyImageReady", x, n[0], t[0]);
                                }
                            }), x.emit("onLazyImageLoad", x, n[0], t[0]);
                        });
                    }
                },
                load: function() {
                    var t, a = x.params.slidesPerView;
                    if ("auto" === a && (a = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), 
                    x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                        x.lazy.loadImageInSlide(e(this).index());
                    }); else if (a > 1) for (t = x.activeIndex; t < x.activeIndex + a; t++) x.slides[t] && x.lazy.loadImageInSlide(t); else x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext) if (a > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                        var n = x.params.lazyLoadingInPrevNextAmount, r = a, i = Math.min(x.activeIndex + r + Math.max(n, r), x.slides.length), s = Math.max(x.activeIndex - Math.max(r, n), 0);
                        for (t = x.activeIndex + a; t < i; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                        for (t = s; t < x.activeIndex; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                    } else {
                        var o = x.wrapper.children("." + x.params.slideNextClass);
                        o.length > 0 && x.lazy.loadImageInSlide(o.index());
                        var l = x.wrapper.children("." + x.params.slidePrevClass);
                        l.length > 0 && x.lazy.loadImageInSlide(l.index());
                    }
                },
                onTransitionStart: function() {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load();
                },
                onTransitionEnd: function() {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load();
                }
            }, x.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = x.scrollbar, a = (x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2, n = -x.minTranslate() * t.moveDivider, r = -x.maxTranslate() * t.moveDivider;
                    a < n ? a = n : a > r && (a = r), a = -a / t.moveDivider, x.updateProgress(a), x.setWrapperTranslate(a, !0);
                },
                dragStart: function(e) {
                    var t = x.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), 
                    clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), 
                    x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x);
                },
                dragMove: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), 
                    x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x));
                },
                dragEnd: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), 
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset());
                },
                draggableEvents: function() {
                    return !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop;
                }(),
                enableDraggable: function() {
                    var t = x.scrollbar, a = x.support.touch ? t.track : document;
                    e(t.track).on(t.draggableEvents.start, t.dragStart), e(a).on(t.draggableEvents.move, t.dragMove), 
                    e(a).on(t.draggableEvents.end, t.dragEnd);
                },
                disableDraggable: function() {
                    var t = x.scrollbar, a = x.support.touch ? t.track : document;
                    e(t.track).off(t.draggableEvents.start, t.dragStart), e(a).off(t.draggableEvents.move, t.dragMove), 
                    e(a).off(t.draggableEvents.end, t.dragEnd);
                },
                set: function() {
                    if (x.params.scrollbar) {
                        var t = x.scrollbar;
                        t.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)), 
                        t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), 
                        t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", 
                        t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, 
                        t.divider = x.size / x.virtualSize, t.moveDivider = t.divider * (t.trackSize / x.size), 
                        t.dragSize = t.trackSize * t.divider, x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", 
                        t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", 
                        x.params.scrollbarHide && (t.track[0].style.opacity = 0);
                    }
                },
                setTranslate: function() {
                    if (x.params.scrollbar) {
                        var e, t = x.scrollbar, a = (x.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e) > 0 ? (a = t.dragSize - e, 
                        e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e) : e < 0 ? (a = t.dragSize + e, 
                        e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), 
                        t.drag[0].style.width = a + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), 
                        t.drag[0].style.height = a + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), 
                        t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400);
                        }, 1e3));
                    }
                },
                setTransition: function(e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e);
                }
            }, x.controller = {
                LinearSpline: function(e, t) {
                    var a = function() {
                        var e, t, a;
                        return function(n, r) {
                            for (t = -1, e = n.length; e - t > 1; ) n[a = e + t >> 1] <= r ? t = a : e = a;
                            return e;
                        };
                    }();
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var n, r;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (r = a(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0;
                    };
                },
                getInterpolateFunction: function(e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid));
                },
                setTranslate: function(e, a) {
                    function n(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), 
                        i = -x.controller.spline.interpolate(-e)), i && "container" !== x.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), 
                        i = (e - x.minTranslate()) * r + t.minTranslate()), x.params.controlInverse && (i = t.maxTranslate() - i), 
                        t.updateProgress(i), t.setWrapperTranslate(i, !1, x), t.updateActiveIndex();
                    }
                    var r, i, s = x.params.control;
                    if (Array.isArray(s)) for (var o = 0; o < s.length; o++) s[o] !== a && s[o] instanceof t && n(s[o]); else s instanceof t && a !== s && n(s);
                },
                setTransition: function(e, a) {
                    function n(t) {
                        t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            i && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                        }));
                    }
                    var r, i = x.params.control;
                    if (Array.isArray(i)) for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && n(i[r]); else i instanceof t && a !== i && n(i);
                }
            }, x.hashnav = {
                onHashCange: function(e, t) {
                    var a = document.location.hash.replace("#", "");
                    a !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + a + '"]').index());
                },
                attachEvents: function(t) {
                    var a = t ? "off" : "on";
                    e(window)[a]("hashchange", x.hashnav.onHashCange);
                },
                setHash: function() {
                    if (x.hashnav.initialized && x.params.hashnav) if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || ""); else {
                        var e = x.slides.eq(x.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                        document.location.hash = t || "";
                    }
                },
                init: function() {
                    if (x.params.hashnav && !x.params.history) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) for (var t = 0, a = x.slides.length; t < a; t++) {
                            var n = x.slides.eq(t);
                            if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(x.params.slideDuplicateClass)) {
                                var r = n.index();
                                x.slideTo(r, 0, x.params.runCallbacksOnInit, !0);
                            }
                        }
                        x.params.hashnavWatchState && x.hashnav.attachEvents();
                    }
                },
                destroy: function() {
                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0);
                }
            }, x.history = {
                init: function() {
                    if (x.params.history) {
                        if (!window.history || !window.history.pushState) return x.params.history = !1, 
                        void (x.params.hashnav = !0);
                        x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), 
                        x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                    }
                },
                setHistoryPopState: function() {
                    x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1);
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"), t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    };
                },
                setHistory: function(e, t) {
                    if (x.history.initialized && x.params.history) {
                        var a = x.slides.eq(t), n = this.slugify(a.attr("data-history"));
                        window.location.pathname.includes(e) || (n = e + "/" + n), x.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n);
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
                },
                scrollToSlide: function(e, t, a) {
                    if (t) for (var n = 0, r = x.slides.length; n < r; n++) {
                        var i = x.slides.eq(n);
                        if (this.slugify(i.attr("data-history")) === t && !i.hasClass(x.params.slideDuplicateClass)) {
                            var s = i.index();
                            x.slideTo(s, e, a);
                        }
                    } else x.slideTo(0, e, a);
                }
            }, x.disableKeyboardControl = function() {
                x.params.keyboardControl = !1, e(document).off("keydown", l);
            }, x.enableKeyboardControl = function() {
                x.params.keyboardControl = !0, e(document).on("keydown", l);
            }, x.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime()
            }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in document;
                if (!e) {
                    var t = document.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
                }
                return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), 
                e;
            }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function() {
                if (!x.mousewheel.event) return !1;
                var t = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), 
                t.off(x.mousewheel.event, u), x.params.mousewheelControl = !1, !0;
            }, x.enableMousewheelControl = function() {
                if (!x.mousewheel.event) return !1;
                var t = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), 
                t.on(x.mousewheel.event, u), x.params.mousewheelControl = !0, !0;
            }, x.parallax = {
                setTranslate: function() {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        d(this, x.progress);
                    }), x.slides.each(function() {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            d(this, Math.min(Math.max(t[0].progress, -1), 1));
                        });
                    });
                },
                setTransition: function(t) {
                    void 0 === t && (t = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var a = e(this), n = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (n = 0), a.transition(n);
                    });
                }
            }, x.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: x.params.zoomMax
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
                    var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX, r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - a, 2));
                },
                onGestureStart: function(t) {
                    var a = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        a.gesture.scaleStart = a.getDistanceBetweenTouches(t);
                    }
                    a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = e(this), 0 === a.gesture.slide.length && (a.gesture.slide = x.slides.eq(x.activeIndex)), 
                    a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + x.params.zoomContainerClass), 
                    a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 
                    0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), a.isScaling = !0) : a.gesture.image = void 0;
                },
                onGestureChange: function(e) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, 
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), 
                    t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)), 
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
                },
                onGestureEnd: function(e) {
                    var t = x.zoom;
                    !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin), 
                    t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), 
                    t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0));
                },
                onTouchStart: function(e, t) {
                    var a = e.zoom;
                    a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), 
                    a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                },
                onTouchMove: function(e) {
                    var t = x.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, 
                        t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0, 
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, 
                        t.gesture.imageWrap.transition(0), x.rtl && (t.image.startX = -t.image.startX), 
                        x.rtl && (t.image.startY = -t.image.startY));
                        var a = t.image.width * t.scale, n = t.image.height * t.scale;
                        if (!(a < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, 
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, 
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                            !t.image.isMoved && !t.isScaling) {
                                if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void (t.image.isTouched = !1);
                                if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void (t.image.isTouched = !1);
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
                    var a = e.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length) {
                        if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void (a.image.isMoved = !1);
                        a.image.isTouched = !1, a.image.isMoved = !1;
                        var n = 300, r = 300, i = a.velocity.x * n, s = a.image.currentX + i, o = a.velocity.y * r, l = a.image.currentY + o;
                        0 !== a.velocity.x && (n = Math.abs((s - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (r = Math.abs((l - a.image.currentY) / a.velocity.y));
                        var p = Math.max(n, r);
                        a.image.currentX = s, a.image.currentY = l;
                        var u = a.image.width * a.scale, d = a.image.height * a.scale;
                        a.image.minX = Math.min(a.gesture.slideWidth / 2 - u / 2, 0), a.image.maxX = -a.image.minX, 
                        a.image.minY = Math.min(a.gesture.slideHeight / 2 - d / 2, 0), a.image.maxY = -a.image.minY, 
                        a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), 
                        a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), 
                        a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), 
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, 
                    t.scale = t.currentScale = 1);
                },
                toggleZoom: function(t, a) {
                    var n = t.zoom;
                    if (n.gesture.slide || (n.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), 
                    n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + t.params.zoomContainerClass)), 
                    n.gesture.image && 0 !== n.gesture.image.length) {
                        var r, i, s, o, l, p, u, d, c, f, h, m, g, v, y, w;
                        void 0 === n.image.touchesStart.x && a ? (r = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, 
                        i = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (r = n.image.touchesStart.x, 
                        i = n.image.touchesStart.y), n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1, 
                        n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), 
                        n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, 
                        a ? (y = n.gesture.slide[0].offsetWidth, w = n.gesture.slide[0].offsetHeight, s = n.gesture.slide.offset().left + y / 2 - r, 
                        o = n.gesture.slide.offset().top + w / 2 - i, u = n.gesture.image[0].offsetWidth, 
                        d = n.gesture.image[0].offsetHeight, c = u * n.scale, f = d * n.scale, g = -(h = Math.min(y / 2 - c / 2, 0)), 
                        v = -(m = Math.min(w / 2 - f / 2, 0)), l = s * n.scale, p = o * n.scale, l < h && (l = h), 
                        l > g && (l = g), p < m && (p = m), p > v && (p = v)) : (l = 0, p = 0), n.gesture.imageWrap.transition(300).transform("translate3d(" + l + "px, " + p + "px,0)"), 
                        n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"));
                    }
                },
                attachEvents: function(t) {
                    var a = t ? "off" : "on";
                    if (x.params.zoom) {
                        x.slides;
                        var n = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        x.support.gestures ? (x.slides[a]("gesturestart", x.zoom.onGestureStart, n), x.slides[a]("gesturechange", x.zoom.onGestureChange, n), 
                        x.slides[a]("gestureend", x.zoom.onGestureEnd, n)) : "touchstart" === x.touchEvents.start && (x.slides[a](x.touchEvents.start, x.zoom.onGestureStart, n), 
                        x.slides[a](x.touchEvents.move, x.zoom.onGestureChange, n), x.slides[a](x.touchEvents.end, x.zoom.onGestureEnd, n)), 
                        x[a]("touchStart", x.zoom.onTouchStart), x.slides.each(function(t, n) {
                            e(n).find("." + x.params.zoomContainerClass).length > 0 && e(n)[a](x.touchEvents.move, x.zoom.onTouchMove);
                        }), x[a]("touchEnd", x.zoom.onTouchEnd), x[a]("transitionEnd", x.zoom.onTransitionEnd), 
                        x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom);
                    }
                },
                init: function() {
                    x.zoom.attachEvents();
                },
                destroy: function() {
                    x.zoom.attachEvents(!0);
                }
            }, x._plugins = [];
            for (var O in x.plugins) {
                var j = x.plugins[O](x, x.params[O]);
                j && x._plugins.push(j);
            }
            return x.callPlugins = function(e) {
                for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, x.emitterEventListeners = {}, x.emit = function(e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (x.emitterEventListeners[e]) for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, x.on = function(e, t) {
                return e = c(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), 
                x.emitterEventListeners[e].push(t), x;
            }, x.off = function(e, t) {
                var a;
                if (e = c(e), void 0 === t) return x.emitterEventListeners[e] = [], x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (a = 0; a < x.emitterEventListeners[e].length; a++) x.emitterEventListeners[e][a] === t && x.emitterEventListeners[e].splice(a, 1);
                    return x;
                }
            }, x.once = function(e, t) {
                e = c(e);
                var a = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, a);
                };
                return x.on(e, a), x;
            }, x.a11y = {
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
                    13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), 
                    x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), 
                    e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click());
                },
                liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                init: function() {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), 
                    x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), 
                    x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), 
                    x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), 
                    e(x.container).append(x.a11y.liveRegion);
                },
                initPagination: function() {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                        var t = e(this);
                        x.a11y.makeFocusable(t), x.a11y.addRole(t, "button"), x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1));
                    });
                },
                destroy: function() {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove();
                }
            }, x.init = function() {
                x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), 
                x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), 
                "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), 
                x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 
                0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), 
                x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), 
                x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), 
                x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), 
                x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), 
                x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), 
                x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), 
                x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), 
                x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x);
            }, x.cleanupStyles = function() {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), 
                x.slides && x.slides.length && x.slides.removeClass([ x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), 
                x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), 
                x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), 
                x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), 
                x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), 
                x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), 
                x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"));
            }, x.destroy = function(e, t) {
                x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), 
                x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), 
                x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), 
                x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), 
                x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), 
                x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null);
            }, x.init(), x;
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
            var e = window.navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/), a = e.match(/(iPad).*OS\s([\d_]+)/), n = e.match(/(iPod)(.*OS\s([\d_]+))?/), r = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: a || r || n,
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
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++) if (t[a] in e) return !0;
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
    for (var a = [ "jQuery", "Zepto", "Dom7" ], n = 0; n < a.length; n++) window[a[n]] && function(e) {
        e.fn.swiper = function(a) {
            var n;
            return e(this).each(function() {
                var e = new t(this, a);
                n || (n = e);
            }), n;
        };
    }(window[a[n]]);
    var r;
    (r = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
        function t(i) {
            if (i.target === this) for (e.call(this, i), a = 0; a < n.length; a++) r.off(n[a], t);
        }
        var a, n = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], r = this;
        if (e) for (a = 0; a < n.length; a++) r.on(n[a], t);
        return this;
    }), "transform" in r.fn || (r.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e;
        }
        return this;
    }), "transition" in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e;
        }
        return this;
    }), "outerWidth" in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = t;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper;
}), function(e, t) {
    function a() {
        t(e).scroll(function() {
            var a = t(e).scrollTop();
            t(".back-top").toggleClass("visible", a > 600);
        }), t(".back-top").click(function(e) {
            e.preventDefault(), t("html,body").animate({
                scrollTop: 0
            }, 700);
        });
    }
    function n() {
        var a = t(e).scrollTop();
        t(".title-container figure").css({
            transform: "translate(0px, " + a / 2 + "px)"
        });
    }
    function r() {
        t(".hamburger").click(function() {
            t(this).toggleClass("active"), t(".off-canvas-nav").toggleClass("show-nav"), t(".page-wrap").toggleClass("show-nav"), 
            t("html").toggleClass("no-scroll");
        });
    }
    function i() {
        t(".woocommerce-product-gallery__image a").click(function(e) {
            e.preventDefault();
        }), t(".woocommerce-product-gallery__image a img").click(function() {
            var e = t(".woocommerce-product-gallery__image:first-of-type a img").attr("src"), a = t(this).attr("src");
            t(".woocommerce-product-gallery__image:first-of-type a img").attr("src", a), t(this).attr("src", e);
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
        r(), i(), a(), s(), t(e).scroll(function() {
            n();
        });
    });
}(window, jQuery);