/*!
 * jQuery JavaScript Library v1.12.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T19:56Z
 */
function is_touch_device() {
    return !!("ontouchstart" in window)
}

function verifyDate() {
        val = $(this).val(), val && 0 != val.length && (dob = new moment(val, "DD/MM/YYYY"), dob.format("DD/MM/YYYY") != val ? (alert("Datoformat m\xe5 v\xe6re slik: DD/MM/YYYY (Eksempel: 23/06/1980)"), $(this).val("").focus().parent().addClass("field_with_errors")) : $(this).parent().removeClass("field_with_errors"))
    }! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = he.type(e);
            return "function" === n || he.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (he.isFunction(t)) return he.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return he.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (we.test(t)) return he.filter(t, e, n);
                t = he.filter(t, e)
            }
            return he.grep(e, function(e) {
                return he.inArray(e, t) > -1 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function a(e) {
            var t = {};
            return he.each(e.match(Ne) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function o() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (o(), he.ready())
        }

        function u(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ae, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Le.test(n) ? he.parseJSON(n) : n
                    } catch (r) {}
                    he.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function l(e) {
            var t;
            for (t in e)
                if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (Ee(e)) {
                var r, a, o = he.expando,
                    s = e.nodeType,
                    u = s ? he.cache : e,
                    l = s ? e[o] : e[o] && o;
                if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[o] = ne.pop() || he.guid++ : o), u[l] || (u[l] = s ? {} : {
                    toJSON: he.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? u[l] = he.extend(u[l], t) : u[l].data = he.extend(u[l].data, t)), a = u[l], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[he.camelCase(t)] = n), "string" == typeof t ? (r = a[t], null == r && (r = a[he.camelCase(t)])) : r = a, r
            }
        }

        function d(e, t, n) {
            if (Ee(e)) {
                var i, r, a = e.nodeType,
                    o = a ? he.cache : e,
                    s = a ? e[he.expando] : he.expando;
                if (o[s]) {
                    if (t && (i = n ? o[s] : o[s].data)) {
                        he.isArray(t) ? t = t.concat(he.map(t, he.camelCase)) : t in i ? t = [t] : (t = he.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !l(i) : !he.isEmptyObject(i)) return
                    }(n || (delete o[s].data, l(o[s]))) && (a ? he.cleanData([e], !0) : de.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
                }
            }
        }

        function f(e, t, n, i) {
            var r, a = 1,
                o = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return he.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do a = a || ".5", c /= a, he.style(e, t, c + l); while (a !== (a = s() / u) && 1 !== a && --o)
            }
            return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
        }

        function h(e) {
            var t = ze.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function p(e, t) {
            var n, i, r = 0,
                a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || he.nodeName(i, t) ? a.push(i) : he.merge(a, p(i, t));
            return void 0 === t || t && he.nodeName(e, t) ? he.merge([e], a) : a
        }

        function m(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) he._data(n, "globalEval", !t || he._data(t[i], "globalEval"))
        }

        function g(e) {
            We.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t, n, i, r) {
            for (var a, o, s, u, l, c, d, f = e.length, y = h(t), v = [], _ = 0; f > _; _++)
                if (o = e[_], o || 0 === o)
                    if ("object" === he.type(o)) he.merge(v, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                for (u = u || y.appendChild(t.createElement("div")), l = (qe.exec(o) || ["", ""])[1].toLowerCase(), d = Ue[l] || Ue._default, u.innerHTML = d[1] + he.htmlPrefilter(o) + d[2], a = d[0]; a--;) u = u.lastChild;
                if (!de.leadingWhitespace && Re.test(o) && v.push(t.createTextNode(Re.exec(o)[0])), !de.tbody)
                    for (o = "table" !== l || Ge.test(o) ? "<table>" !== d[1] || Ge.test(o) ? 0 : u : u.firstChild, a = o && o.childNodes.length; a--;) he.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (he.merge(v, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                u = y.lastChild
            } else v.push(t.createTextNode(o));
            for (u && y.removeChild(u), de.appendChecked || he.grep(p(v, "input"), g), _ = 0; o = v[_++];)
                if (i && he.inArray(o, i) > -1) r && r.push(o);
                else if (s = he.contains(o.ownerDocument, o), u = p(y.appendChild(o), "script"), s && m(u), n)
                for (a = 0; o = u[a++];) $e.test(o.type || "") && n.push(o);
            return u = null, y
        }

        function v() {
            return !0
        }

        function _() {
            return !1
        }

        function b() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function k(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) k(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = _;
            else if (!r) return e;
            return 1 === a && (o = r, r = function(e) {
                return he().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = he.guid++)), e.each(function() {
                he.event.add(this, t, r, i, n)
            })
        }

        function D(e, t) {
            return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function w(e) {
            return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = rt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function M(e, t) {
            if (1 === t.nodeType && he.hasData(e)) {
                var n, i, r, a = he._data(e),
                    o = he._data(t, a),
                    s = a.events;
                if (s) {
                    delete o.handle, o.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) he.event.add(t, n, s[n][i])
                }
                o.data && (o.data = he.extend({}, o.data))
            }
        }

        function T(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[he.expando]) {
                    r = he._data(t);
                    for (i in r.events) he.removeEvent(t, i, r.handle);
                    t.removeAttribute(he.expando)
                }
                "script" === n && t.text !== e.text ? (w(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !he.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && We.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function S(e, t, n, i) {
            t = ae.apply([], t);
            var r, a, o, s, u, l, c = 0,
                d = e.length,
                f = d - 1,
                h = t[0],
                m = he.isFunction(h);
            if (m || d > 1 && "string" == typeof h && !de.checkClone && it.test(h)) return e.each(function(r) {
                var a = e.eq(r);
                m && (t[0] = h.call(this, r, a.html())), S(a, t, n, i)
            });
            if (d && (l = y(t, e[0].ownerDocument, !1, e, i), r = l.firstChild, 1 === l.childNodes.length && (l = r), r || i)) {
                for (s = he.map(p(l, "script"), w), o = s.length; d > c; c++) a = l, c !== f && (a = he.clone(a, !0, !0), o && he.merge(s, p(a, "script"))), n.call(e[c], a, c);
                if (o)
                    for (u = s[s.length - 1].ownerDocument, he.map(s, x), c = 0; o > c; c++) a = s[c], $e.test(a.type || "") && !he._data(a, "globalEval") && he.contains(u, a) && (a.src ? he._evalUrl && he._evalUrl(a.src) : he.globalEval((a.text || a.textContent || a.innerHTML || "").replace(at, "")));
                l = r = null
            }
            return e
        }

        function C(e, t, n) {
            for (var i, r = t ? he.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || he.cleanData(p(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function N(e, t) {
            var n = he(t.createElement(e)).appendTo(t.body),
                i = he.css(n[0], "display");
            return n.detach(), i
        }

        function Y(e) {
            var t = ie,
                n = lt[e];
            return n || (n = N(e, t), "none" !== n && n || (ut = (ut || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = N(e, t), ut.detach()), lt[e] = n), n
        }

        function j(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function E(e) {
            if (e in xt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--;)
                if (e = wt[n] + t, e in xt) return e
        }

        function L(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++) i = e[o], i.style && (a[o] = he._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && He(i) && (a[o] = he._data(i, "olddisplay", Y(i.nodeName)))) : (r = He(i), (n && "none" !== n || !r) && he._data(i, "olddisplay", r ? n : he.css(i, "display"))));
            for (o = 0; s > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function A(e, t, n) {
            var i = bt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function F(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += he.css(e, n + Oe[a], !0, r)), i ? ("content" === n && (o -= he.css(e, "padding" + Oe[a], !0, r)), "margin" !== n && (o -= he.css(e, "border" + Oe[a] + "Width", !0, r))) : (o += he.css(e, "padding" + Oe[a], !0, r), "padding" !== n && (o += he.css(e, "border" + Oe[a] + "Width", !0, r)));
            return o
        }

        function I(t, n, i) {
            var r = !0,
                a = "width" === n ? t.offsetWidth : t.offsetHeight,
                o = pt(t),
                s = de.boxSizing && "border-box" === he.css(t, "boxSizing", !1, o);
            if (ie.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
                if (a = mt(t, n, o), (0 > a || null == a) && (a = t.style[n]), dt.test(a)) return a;
                r = s && (de.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
            }
            return a + F(t, n, i || (s ? "border" : "content"), r, o) + "px"
        }

        function O(e, t, n, i, r) {
            return new O.prototype.init(e, t, n, i, r)
        }

        function H() {
            return e.setTimeout(function() {
                Mt = void 0
            }), Mt = he.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Oe[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function W(e, t, n) {
            for (var i, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), a = 0, o = r.length; o > a; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function q(e, t, n) {
            var i, r, a, o, s, u, l, c, d = this,
                f = {},
                h = e.style,
                p = e.nodeType && He(e),
                m = he._data(e, "fxshow");
            n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = he.css(e, "display"), c = "none" === l ? he._data(e, "olddisplay") || Y(e.nodeName) : l, "inline" === c && "none" === he.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== Y(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], St.exec(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    f[i] = m && m[i] || he.style(e, i)
                } else l = void 0;
            if (he.isEmptyObject(f)) "inline" === ("none" === l ? Y(e.nodeName) : l) && (h.display = l);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = he._data(e, "fxshow", {}), a && (m.hidden = !p), p ? he(e).show() : d.done(function() {
                    he(e).hide()
                }), d.done(function() {
                    var t;
                    he._removeData(e, "fxshow");
                    for (t in f) he.style(e, t, f[t])
                });
                for (i in f) o = W(p ? m[i] : 0, i, d), i in m || (m[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (i = he.camelCase(n), r = t[i], a = e[n], he.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = he.cssHooks[i], o && "expand" in o) {
                    a = o.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = r)
                } else t[i] = r
        }

        function R(e, t, n) {
            var i, r, a = 0,
                o = R.prefilters.length,
                s = he.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (r) return !1;
                    for (var t = Mt || H(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, a = 1 - i, o = 0, u = l.tweens.length; u > o; o++) l.tweens[o].run(a);
                    return s.notifyWith(e, [l, a, n]), 1 > a && u ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: he.extend({}, t),
                    opts: he.extend(!0, {
                        specialEasing: {},
                        easing: he.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Mt || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for ($(c, l.opts.specialEasing); o > a; a++)
                if (i = R.prefilters[a].call(l, e, c, l.opts)) return he.isFunction(i.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(i.stop, i)), i;
            return he.map(c, W, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), he.fx.timer(he.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function z(e) {
            return he.attr(e, "class") || ""
        }

        function U(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(Ne) || [];
                if (he.isFunction(n))
                    for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function B(e, t, n, i) {
            function r(s) {
                var u;
                return a[s] = !0, he.each(e[s] || [], function(e, s) {
                    var l = s(t, n, i);
                    return "string" != typeof l || o || a[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
                }), u
            }
            var a = {},
                o = e === Vt;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function G(e, t) {
            var n, i, r = he.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && he.extend(!0, e, n), e
        }

        function K(e, t, n) {
            for (var i, r, a, o, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        u.unshift(o);
                        break
                    }
            if (u[0] in n) a = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        a = o;
                        break
                    }
                    i || (i = o)
                }
                a = a || i
            }
            return a ? (a !== u[0] && u.unshift(a), n[a]) : void 0
        }

        function X(e, t, n, i) {
            var r, a, o, s, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = c.shift())
                    if ("*" === a) a = u;
                    else if ("*" !== u && u !== a) {
                if (o = l[u + " " + a] || l["* " + a], !o)
                    for (r in l)
                        if (s = r.split(" "), s[1] === a && (o = l[u + " " + s[0]] || l["* " + s[0]])) {
                            o === !0 ? o = l[r] : l[r] !== !0 && (a = s[0], c.unshift(s[1]));
                            break
                        }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: o ? d : "No conversion from " + u + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function J(e) {
            return e.style && e.style.display || he.css(e, "display")
        }

        function V(e) {
            for (; e && 1 === e.nodeType;) {
                if ("none" === J(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function Z(e, t, n, i) {
            var r;
            if (he.isArray(t)) he.each(t, function(t, r) {
                n || nn.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== he.type(t)) i(e, t);
            else
                for (r in t) Z(e + "[" + r + "]", t[r], n, i)
        }

        function Q() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function te(e) {
            return he.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var ne = [],
            ie = e.document,
            re = ne.slice,
            ae = ne.concat,
            oe = ne.push,
            se = ne.indexOf,
            ue = {},
            le = ue.toString,
            ce = ue.hasOwnProperty,
            de = {},
            fe = "1.12.0",
            he = function(e, t) {
                return new he.fn.init(e, t)
            },
            pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ye = function(e, t) {
                return t.toUpperCase()
            };
        he.fn = he.prototype = {
            jquery: fe,
            constructor: he,
            selector: "",
            length: 0,
            toArray: function() {
                return re.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
            },
            pushStack: function(e) {
                var t = he.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return he.each(this, e)
            },
            map: function(e) {
                return this.pushStack(he.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: oe,
            sort: ne.sort,
            splice: ne.splice
        }, he.extend = he.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || he.isFunction(o) || (o = {}), s === u && (o = this, s--); u > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = o[i], n = r[i], o !== n && (l && n && (he.isPlainObject(n) || (t = he.isArray(n))) ? (t ? (t = !1, a = e && he.isArray(e) ? e : []) : a = e && he.isPlainObject(e) ? e : {}, o[i] = he.extend(l, a, n)) : void 0 !== n && (o[i] = n));
            return o
        }, he.extend({
            expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === he.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === he.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !he.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ce.call(e, t);
                for (t in e);
                return void 0 === t || ce.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && he.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(ge, ye)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(pe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++) i = !t(e[a], a), i !== s && r.push(e[a]);
                return r
            },
            map: function(e, t, i) {
                var r, a, o = 0,
                    s = [];
                if (n(e))
                    for (r = e.length; r > o; o++) a = t(e[o], o, i), null != a && s.push(a);
                else
                    for (o in e) a = t(e[o], o, i), null != a && s.push(a);
                return ae.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), he.isFunction(e) ? (n = re.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(re.call(arguments)))
                }, i.guid = e.guid = e.guid || he.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ne[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ue["[object " + t + "]"] = t.toLowerCase()
        });
        var ve =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function(e) {
                function t(e, t, n, i) {
                    var r, a, o, s, u, l, d, h, p = t && t.ownerDocument,
                        m = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!i && ((t ? t.ownerDocument || t : W) !== E && j(t), t = t || E, A)) {
                        if (11 !== m && (l = ye.exec(e)))
                            if (r = l[1]) {
                                if (9 === m) {
                                    if (!(o = t.getElementById(r))) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (p && (o = p.getElementById(r)) && H(t, o) && o.id === r) return n.push(o), n
                            } else {
                                if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = l[3]) && k.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n
                            }
                        if (k.qsa && !U[e + " "] && (!F || !F.test(e))) {
                            if (1 !== m) p = t, h = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(_e, "\\$&") : t.setAttribute("id", s = P), d = M(e), a = d.length, u = fe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = u + " " + f(d[a]);
                                h = d.join(","), p = ve.test(e) && c(t.parentNode) || t
                            }
                            if (h) try {
                                return Z.apply(n, p.querySelectorAll(h)), n
                            } catch (g) {} finally {
                                s === P && t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(se, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > D.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[P] = !0, e
                }

                function r(e) {
                    var t = E.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) D.attrHandle[n[i]] = t
                }

                function o(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, i) {
                            for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        a = $++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, a)
                    } : function(t, n, o) {
                        var s, u, l, c = [q, a];
                        if (o) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[i]) && s[0] === q && s[1] === a) return c[2] = s[2];
                                    if (u[i] = c, c[2] = e(t, n, o)) return !0
                                }
                    }
                }

                function p(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, a = n.length; a > r; r++) t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var a, o = [], s = 0, u = e.length, l = null != t; u > s; s++)(a = e[s]) && (!n || n(a, i, r)) && (o.push(a), l && t.push(s));
                    return o
                }

                function y(e, t, n, r, a, o) {
                    return r && !r[P] && (r = y(r)), a && !a[P] && (a = y(a, o)), i(function(i, o, s, u) {
                        var l, c, d, f = [],
                            h = [],
                            p = o.length,
                            y = i || m(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? y : g(y, f, e, s, u),
                            _ = n ? a || (i ? e : p || r) ? [] : o : v;
                        if (n && n(v, _, s, u), r)
                            for (l = g(_, h), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (_[h[c]] = !(v[h[c]] = d));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (l = [], c = _.length; c--;)(d = _[c]) && l.push(v[c] = d);
                                    a(null, _ = [], l, u)
                                }
                                for (c = _.length; c--;)(d = _[c]) && (l = a ? ee(i, d) : f[c]) > -1 && (i[l] = !(o[l] = d))
                            }
                        } else _ = g(_ === o ? _.splice(p, _.length) : _), a ? a(null, o, _, u) : Z.apply(o, _)
                    })
                }

                function v(e) {
                    for (var t, n, i, r = e.length, a = D.relative[e[0].type], o = a || D.relative[" "], s = a ? 1 : 0, u = h(function(e) {
                            return e === t
                        }, o, !0), l = h(function(e) {
                            return ee(t, e) > -1
                        }, o, !0), c = [function(e, n, i) {
                            var r = !a && (i || n !== C) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                            return t = null, r
                        }]; r > s; s++)
                        if (n = D.relative[e[s].type]) c = [h(p(c), n)];
                        else {
                            if (n = D.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                                for (i = ++s; r > i && !D.relative[e[i].type]; i++);
                                return y(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, i > s && v(e.slice(s, i)), r > i && v(e = e.slice(i)), r > i && f(e))
                            }
                            c.push(n)
                        }
                    return p(c)
                }

                function _(e, n) {
                    var r = n.length > 0,
                        a = e.length > 0,
                        o = function(i, o, s, u, l) {
                            var c, d, f, h = 0,
                                p = "0",
                                m = i && [],
                                y = [],
                                v = C,
                                _ = i || a && D.find.TAG("*", l),
                                b = q += null == v ? 1 : Math.random() || .1,
                                k = _.length;
                            for (l && (C = o === E || o || l); p !== k && null != (c = _[p]); p++) {
                                if (a && c) {
                                    for (d = 0, o || c.ownerDocument === E || (j(c), s = !A); f = e[d++];)
                                        if (f(c, o || E, s)) {
                                            u.push(c);
                                            break
                                        }
                                    l && (q = b)
                                }
                                r && ((c = !f && c) && h--, i && m.push(c))
                            }
                            if (h += p, r && p !== h) {
                                for (d = 0; f = n[d++];) f(m, y, o, s);
                                if (i) {
                                    if (h > 0)
                                        for (; p--;) m[p] || y[p] || (y[p] = J.call(u));
                                    y = g(y)
                                }
                                Z.apply(u, y), l && !i && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (q = b, C = v), m
                        };
                    return r ? i(o) : o
                }
                var b, k, D, w, x, M, T, S, C, N, Y, j, E, L, A, F, I, O, H, P = "sizzle" + 1 * new Date,
                    W = e.document,
                    q = 0,
                    $ = 0,
                    R = n(),
                    z = n(),
                    U = n(),
                    B = function(e, t) {
                        return e === t && (Y = !0), 0
                    },
                    G = 1 << 31,
                    K = {}.hasOwnProperty,
                    X = [],
                    J = X.pop,
                    V = X.push,
                    Z = X.push,
                    Q = X.slice,
                    ee = function(e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    oe = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ue = new RegExp("^" + ne + "*," + ne + "*"),
                    le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(ae),
                    fe = new RegExp("^" + ie + "$"),
                    he = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pe = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    _e = /'|\\/g,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    ke = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    De = function() {
                        j()
                    };
                try {
                    Z.apply(X = Q.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
                } catch (we) {
                    Z = {
                        apply: X.length ? function(e, t) {
                            V.apply(e, Q.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                k = t.support = {}, x = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, j = t.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : W;
                    return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, L = E.documentElement, A = !x(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", De, !1) : n.attachEvent && n.attachEvent("onunload", De)), k.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = r(function(e) {
                        return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = ge.test(E.getElementsByClassName), k.getById = r(function(e) {
                        return L.appendChild(e).id = P, !E.getElementsByName || !E.getElementsByName(P).length
                    }), k.getById ? (D.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && A) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, D.filter.ID = function(e) {
                        var t = e.replace(be, ke);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete D.find.ID, D.filter.ID = function(e) {
                        var t = e.replace(be, ke);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), D.find.TAG = k.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }, D.find.CLASS = k.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && A ? t.getElementsByClassName(e) : void 0
                    }, I = [], F = [], (k.qsa = ge.test(E.querySelectorAll)) && (r(function(e) {
                        L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
                    }), r(function(e) {
                        var t = E.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (k.matchesSelector = ge.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                        k.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), I.push("!=", ae)
                    }), F = F.length && new RegExp(F.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(L.compareDocumentPosition), H = t || ge.test(L.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, B = t ? function(e, t) {
                        if (e === t) return Y = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === W && H(W, e) ? -1 : t === E || t.ownerDocument === W && H(W, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return Y = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            a = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!r || !a) return e === E ? -1 : t === E ? 1 : r ? -1 : a ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                        if (r === a) return o(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[i] === u[i];) i++;
                        return i ? o(s[i], u[i]) : s[i] === W ? -1 : u[i] === W ? 1 : 0
                    }, E) : E
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== E && j(e), n = n.replace(ce, "='$1']"), k.matchesSelector && A && !U[n + " "] && (!I || !I.test(n)) && (!F || !F.test(n))) try {
                        var i = O.call(e, n);
                        if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return t(n, E, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== E && j(e), H(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== E && j(e);
                    var n = D.attrHandle[t.toLowerCase()],
                        i = n && K.call(D.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
                    return void 0 !== i ? i : k.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (Y = !k.detectDuplicates, N = !k.sortStable && e.slice(0), e.sort(B), Y) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return N = null, e
                }, w = t.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += w(t);
                    return n
                }, D = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: he,
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
                            return e[1] = e[1].replace(be, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(be, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = M(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, ke).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = R[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var a = t.attr(r, e);
                                return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var a = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, d, f, h, p, m = a !== o ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s,
                                    _ = !1;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (f = t; f = f[m];)
                                                if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? g.firstChild : g.lastChild], o && v) {
                                        for (f = g, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], h = l[0] === q && l[1], _ = h && l[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (_ = h = 0) || p.pop();)
                                            if (1 === f.nodeType && ++_ && f === t) {
                                                c[e] = [q, h, _];
                                                break
                                            }
                                    } else if (v && (f = t, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], h = l[0] === q && l[1], _ = h), _ === !1)
                                        for (;
                                            (f = ++h && f && f[m] || (_ = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++_ || (v && (d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [q, _]), f !== t)););
                                    return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, a = D.pseudos[e] || D.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return a[P] ? a(n) : a.length > 1 ? (r = [e, e, "", n], D.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = a(e, n), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(t[i] = r[o])
                            }) : function(e) {
                                return a(e, 0, r)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = T(e.replace(se, "$1"));
                            return r[P] ? i(function(e, t, n, i) {
                                for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                            }) : function(e, i, a) {
                                return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return e = e.replace(be, ke),
                                function(t) {
                                    return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                                }
                        }),
                        lang: i(function(e) {
                            return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, ke).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === L
                        },
                        focus: function(e) {
                            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !D.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return pe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, D.pseudos.nth = D.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) D.pseudos[b] = s(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) D.pseudos[b] = u(b);
                return d.prototype = D.filters = D.pseudos, D.setFilters = new d, M = t.tokenize = function(e, n) {
                    var i, r, a, o, s, u, l, c = z[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = D.preFilter; s;) {
                        (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(a = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), a.push({
                            value: i,
                            type: r[0].replace(se, " ")
                        }), s = s.slice(i.length));
                        for (o in D.filter) !(r = he[o].exec(s)) || l[o] && !(r = l[o](r)) || (i = r.shift(), a.push({
                            value: i,
                            type: o,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
                }, T = t.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        a = U[e + " "];
                    if (!a) {
                        for (t || (t = M(e)), n = t.length; n--;) a = v(t[n]), a[P] ? i.push(a) : r.push(a);
                        a = U(e, _(r, i)), a.selector = e
                    }
                    return a
                }, S = t.select = function(e, t, n, i) {
                    var r, a, o, s, u, l = "function" == typeof e && e,
                        d = !i && M(e = l.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && k.getById && 9 === t.nodeType && A && D.relative[a[1].type]) {
                            if (t = (D.find.ID(o.matches[0].replace(be, ke), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (r = he.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !D.relative[s = o.type]);)
                            if ((u = D.find[s]) && (i = u(o.matches[0].replace(be, ke), ve.test(a[0].type) && c(t.parentNode) || t))) {
                                if (a.splice(r, 1), e = i.length && f(a), !e) return Z.apply(n, i), n;
                                break
                            }
                    }
                    return (l || T(e, d))(i, t, !A, n, !t || ve.test(e) && c(t.parentNode) || t), n
                }, k.sortStable = P.split("").sort(B).join("") === P, k.detectDuplicates = !!Y, j(), k.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(E.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), k.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || a(te, function(e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        he.find = ve, he.expr = ve.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ve.uniqueSort, he.text = ve.getText, he.isXMLDoc = ve.isXML, he.contains = ve.contains;
        var _e = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && he(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            be = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            ke = he.expr.match.needsContext,
            De = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            we = /^.[^:#\[\.,]*$/;
        he.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, he.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (he.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) he.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? he.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ke.test(e) ? he(e) : e || [], !1).length
            }
        });
        var xe, Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            Te = he.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || xe, "string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), De.test(i[1]) && he.isPlainObject(t))
                            for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if (r = ie.getElementById(i[2]), r && r.parentNode) {
                        if (r.id !== i[2]) return xe.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = ie, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : he.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(he) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), he.makeArray(e, this))
            };
        Te.prototype = he.fn, xe = he(ie);
        var Se = /^(?:parents|prev(?:Until|All))/,
            Ce = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        he.fn.extend({
            has: function(e) {
                var t, n = he(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (he.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, a = [], o = ke.test(e) || "string" != typeof e ? he(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? he.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), he.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return _e(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return _e(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return _e(e, "nextSibling")
            },
            prevAll: function(e) {
                return _e(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return _e(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return _e(e, "previousSibling", n)
            },
            siblings: function(e) {
                return be((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return be(e.firstChild)
            },
            contents: function(e) {
                return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes)
            }
        }, function(e, t) {
            he.fn[e] = function(n, i) {
                var r = he.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (Ce[e] || (r = he.uniqueSort(r)), Se.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Ne = /\S+/g;
        he.Callbacks = function(e) {
            e = "string" == typeof e ? a(e) : he.extend({}, e);
            var t, n, i, r, o = [],
                s = [],
                u = -1,
                l = function() {
                    for (r = e.once, i = t = !0; s.length; u = -1)
                        for (n = s.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (n && !t && (u = o.length - 1, s.push(n)), function i(t) {
                            he.each(t, function(t, n) {
                                he.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== he.type(n) && i(n)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return he.each(arguments, function(e, t) {
                            for (var n;
                                (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), u >= n && u--
                        }), this
                    },
                    has: function(e) {
                        return e ? he.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, he.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", he.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", he.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return he.Deferred(function(n) {
                                he.each(t, function(t, a) {
                                    var o = he.isFunction(e[t]) && e[t];
                                    r[a[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && he.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? he.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, he.each(t, function(e, a) {
                    var o = a[2],
                        s = a[3];
                    i[a[1]] = o.add, s && o.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this
                    }, r[a[0] + "With"] = o.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    a = re.call(arguments),
                    o = a.length,
                    s = 1 !== o || e && he.isFunction(e.promise) ? o : 0,
                    u = 1 === s ? e : he.Deferred(),
                    l = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) a[r] && he.isFunction(a[r].promise) ? a[r].promise().progress(l(r, n, t)).done(l(r, i, a)).fail(u.reject) : --s;
                return s || u.resolveWith(i, a), u.promise()
            }
        });
        var Ye;
        he.fn.ready = function(e) {
            return he.ready.promise().done(e), this
        }, he.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? he.readyWait++ : he.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || (Ye.resolveWith(ie, [he]), he.fn.triggerHandler && (he(ie).triggerHandler("ready"), he(ie).off("ready"))))
            }
        }), he.ready.promise = function(t) {
            if (!Ye)
                if (Ye = he.Deferred(), "complete" === ie.readyState) e.setTimeout(he.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!he.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(r, 50)
                        }
                        o(), he.ready()
                    }
                }()
            }
            return Ye.promise(t)
        }, he.ready.promise();
        var je;
        for (je in he(de)) break;
        de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, he(function() {
                var e, t, n, i;
                n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Ee = function(e) {
                var t = he.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            },
            Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ae = /([A-Z])/g;
        he.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando], !!e && !l(e)
                },
                data: function(e, t, n) {
                    return c(e, t, n)
                },
                removeData: function(e, t) {
                    return d(e, t)
                },
                _data: function(e, t, n) {
                    return c(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return d(e, t, !0)
                }
            }), he.fn.extend({
                data: function(e, t) {
                    var n, i, r, a = this[0],
                        o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = he.data(a), 1 === a.nodeType && !he._data(a, "parsedAttrs"))) {
                            for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), u(a, i, r[i])));
                            he._data(a, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        he.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        he.data(this, e, t)
                    }) : a ? u(a, e, he.data(a, e)) : void 0
                },
                removeData: function(e) {
                    return this.each(function() {
                        he.removeData(this, e)
                    })
                }
            }), he.extend({
                queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = he._data(e, t), n && (!i || he.isArray(n) ? i = he._data(e, t, he.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = he.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        a = he._queueHooks(e, t),
                        o = function() {
                            he.dequeue(e, t)
                        };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return he._data(e, n) || he._data(e, n, {
                        empty: he.Callbacks("once memory").add(function() {
                            he._removeData(e, t + "queue"), he._removeData(e, n)
                        })
                    })
                }
            }), he.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = he.queue(this, e, t);
                        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        he.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        r = he.Deferred(),
                        a = this,
                        o = this.length,
                        s = function() {
                            --i || r.resolveWith(a, [a])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = he._data(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(t)
                }
            }),
            function() {
                var e;
                de.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                }
            }();
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ie = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
            Oe = ["Top", "Right", "Bottom", "Left"],
            He = function(e, t) {
                return e = t || e, "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e)
            },
            Pe = function(e, t, n, i, r, a, o) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === he.type(n)) {
                    r = !0;
                    for (s in n) Pe(e, t, s, n[s], !0, a, o)
                } else if (void 0 !== i && (r = !0, he.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(he(e), n)
                    })), t))
                    for (; u > s; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : l ? t.call(e) : u ? t(e[0], n) : a
            },
            We = /^(?:checkbox|radio)$/i,
            qe = /<([\w:-]+)/,
            $e = /^$|\/(?:java|ecma)script/i,
            Re = /^\s+/,
            ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[he.expando] = 1, de.attributes = !e.getAttribute(he.expando)
        }();
        var Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
        var Be = /<|&#?\w+;/,
            Ge = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = i.attributes[n].expando === !1);
            i = null
        }();
        var Ke = /^(?:input|select|textarea)$/i,
            Xe = /^key/,
            Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ve = /^(?:focusinfocus|focusoutblur)$/,
            Ze = /^([^.]*)(?:\.(.+)|)/;
        he.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, u, l, c, d, f, h, p, m, g = he._data(e);
                if (g) {
                    for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = he.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                            return "undefined" == typeof he || e && he.event.triggered === e.type ? void 0 : he.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(Ne) || [""], s = t.length; s--;) a = Ze.exec(t[s]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h && (l = he.event.special[h] || {}, h = (r ? l.delegateType : l.bindType) || h, l = he.event.special[h] || {}, d = he.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && he.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, u), (f = o[h]) || (f = o[h] = [], f.delegateCount = 0, l.setup && l.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), he.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, u, l, c, d, f, h, p, m, g = he.hasData(e) && he._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(Ne) || [""], l = t.length; l--;)
                        if (s = Ze.exec(t[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = he.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = a = f.length; a--;) o = f[a], !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
                            u && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || he.removeEvent(e, h, g.handle), delete c[h])
                        } else
                            for (h in c) he.event.remove(e, h + t[l], n, i, !0);
                    he.isEmptyObject(c) && (delete g.handle, he._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var a, o, s, u, l, c, d, f = [i || ie],
                    h = ce.call(t, "type") ? t.type : t,
                    p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ve.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), o = h.indexOf(":") < 0 && "on" + h, t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), l = he.event.special[h] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                    if (!r && !l.noBubble && !he.isWindow(i)) {
                        for (u = l.delegateType || h, Ve.test(u + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                        c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || h, a = (he._data(s, "events") || {})[t.type] && he._data(s, "handle"), a && a.apply(s, n), a = o && s[o], a && a.apply && Ee(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = h, !r && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && Ee(i) && o && i[h] && !he.isWindow(i)) {
                        c = i[o], c && (i[o] = null), he.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        he.event.triggered = void 0, c && (i[o] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = he.event.fix(e);
                var t, n, i, r, a, o = [],
                    s = re.call(arguments),
                    u = (he._data(this, "events") || {})[e.type] || [],
                    l = he.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (o = he.event.handlers.call(this, e, u), t = 0;
                        (r = o[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((he.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; s > n; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? he(r, this).index(u) > -1 : he.find(r, this, null, [u]).length), i[r] && i.push(a);
                            i.length && o.push({
                                elem: u,
                                handlers: i
                            })
                        }
                return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }), o
            },
            fix: function(e) {
                if (e[he.expando]) return e;
                var t, n, i, r = e.type,
                    a = e,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Je.test(r) ? this.mouseHooks : Xe.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new he.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, a = t.button,
                        o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== b() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === b() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return he.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return he.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = he.extend(new he.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                he.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, he.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, he.Event = function(e, t) {
            return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : _) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
        }, he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, he.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            he.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return (!r || r !== i && !he.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (he.event.special.submit = {
            setup: function() {
                return he.nodeName(this, "form") ? !1 : void he.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = he.nodeName(t, "input") || he.nodeName(t, "button") ? he.prop(t, "form") : void 0;
                    n && !he._data(n, "submit") && (he.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), he._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                return he.nodeName(this, "form") ? !1 : void he.event.remove(this, "._submit")
            }
        }), de.change || (he.event.special.change = {
            setup: function() {
                return Ke.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (he.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), he.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), he.event.simulate("change", this, e)
                })), !1) : void he.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ke.test(t.nodeName) && !he._data(t, "change") && (he.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e)
                    }), he._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return he.event.remove(this, "._change"), !Ke.test(this.nodeName)
            }
        }), de.focusin || he.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                he.event.simulate(t, e.target, he.event.fix(e))
            };
            he.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = he._data(i, t);
                    r || i.addEventListener(e, n, !0), he._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = he._data(i, t) - 1;
                    r ? he._data(i, t, r) : (i.removeEventListener(e, n, !0), he._removeData(i, t))
                }
            }
        }), he.fn.extend({
            on: function(e, t, n, i) {
                return k(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return k(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = _), this.each(function() {
                    he.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    he.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? he.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Qe = / jQuery\d+="(?:null|\d+)"/g,
            et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
            tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            nt = /<script|<style|<link/i,
            it = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rt = /^true\/(.*)/,
            at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ot = h(ie),
            st = ot.appendChild(ie.createElement("div"));
        he.extend({
            htmlPrefilter: function(e) {
                return e.replace(tt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, s, u = he.contains(e.ownerDocument, e);
                if (de.html5Clone || he.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(a = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                    for (i = p(a), s = p(e), o = 0; null != (r = s[o]); ++o) i[o] && T(r, i[o]);
                if (t)
                    if (n)
                        for (s = s || p(e), i = i || p(a), o = 0; null != (r = s[o]); o++) M(r, i[o]);
                    else M(e, a);
                return i = p(a, "script"), i.length > 0 && m(i, !u && p(e, "script")), i = s = r = null, a
            },
            cleanData: function(e, t) {
                for (var n, i, r, a, o = 0, s = he.expando, u = he.cache, l = de.attributes, c = he.event.special; null != (n = e[o]); o++)
                    if ((t || Ee(n)) && (r = n[s], a = r && u[r])) {
                        if (a.events)
                            for (i in a.events) c[i] ? he.event.remove(n, i) : he.removeEvent(n, i, a.handle);
                        u[r] && (delete u[r], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(r))
                    }
            }
        }), he.fn.extend({
            domManip: S,
            detach: function(e) {
                return C(this, e, !0)
            },
            remove: function(e) {
                return C(this, e)
            },
            text: function(e) {
                return Pe(this, function(e) {
                    return void 0 === e ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && he.cleanData(p(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && he.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return he.clone(this, e, t)
                })
            },
            html: function(e) {
                return Pe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") : void 0;
                    if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !Re.test(e)) && !Ue[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(p(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return S(this, arguments, function(t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(p(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), he.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            he.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = he(e), o = a.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), he(a[i])[t](n), oe.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ut, lt = {
                HTML: "block",
                BODY: "block"
            },
            ct = /^margin/,
            dt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
            ft = function(e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = o[a];
                return r
            },
            ht = ie.documentElement;
        ! function() {
            function t() {
                var t, c, d = ie.documentElement;
                d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = o = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, l.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, t = l.appendChild(ie.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", a = 0 === l.getClientRects().length, a && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === t[0].offsetHeight, a && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)), d.removeChild(u)
            }
            var n, i, r, a, o, s, u = ie.createElement("div"),
                l = ie.createElement("div");
            l.style && (l.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === l.style.opacity, de.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === l.style.backgroundClip, u = ie.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, he.extend(de, {
                reliableHiddenOffsets: function() {
                    return null == n && t(), a
                },
                boxSizingReliable: function() {
                    return null == n && t(), r
                },
                pixelMarginRight: function() {
                    return null == n && t(), i
                },
                pixelPosition: function() {
                    return null == n && t(), n
                },
                reliableMarginRight: function() {
                    return null == n && t(), o
                },
                reliableMarginLeft: function() {
                    return null == n && t(), s
                }
            }))
        }();
        var pt, mt, gt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (pt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n.opener || (n = e), n.getComputedStyle(t)
        }, mt = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || pt(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || he.contains(e.ownerDocument, e) || (o = he.style(e, t)), !de.pixelMarginRight() && dt.test(o) && ct.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 === o ? o : o + ""
        }) : ht.currentStyle && (pt = function(e) {
            return e.currentStyle
        }, mt = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || pt(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), dt.test(o) && !gt.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), void 0 === o ? o : o + "" || "auto"
        });
        var yt = /alpha\([^)]*\)/i,
            vt = /opacity\s*=\s*([^)]*)/i,
            _t = /^(none|table(?!-c[ea]).+)/,
            bt = new RegExp("^(" + Fe + ")(.*)$", "i"),
            kt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            wt = ["Webkit", "O", "Moz", "ms"],
            xt = ie.createElement("div").style;
        he.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = mt(e, "opacity");
                            return "" === n ? "1" : n
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
                "float": de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = he.camelCase(t),
                        u = e.style;
                    if (t = he.cssProps[s] || (he.cssProps[s] = E(s) || s), o = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : u[t];
                    if (a = typeof n, "string" === a && (r = Ie.exec(n)) && r[1] && (n = f(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (he.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                        u[t] = n
                    } catch (l) {}
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, s = he.camelCase(t);
                return t = he.cssProps[s] || (he.cssProps[s] = E(s) || s), o = he.cssHooks[t] || he.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = mt(e, t, i)), "normal" === a && t in Dt && (a = Dt[t]), "" === n || n ? (r = parseFloat(a), n === !0 || isFinite(r) ? r || 0 : a) : a
            }
        }), he.each(["height", "width"], function(e, t) {
            he.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? _t.test(he.css(e, "display")) && 0 === e.offsetWidth ? ft(e, kt, function() {
                        return I(e, t, i)
                    }) : I(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && pt(e);
                    return A(e, n, i ? F(e, t, i, de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), de.opacity || (he.cssHooks.opacity = {
            get: function(e, t) {
                return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === he.trim(a.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = yt.test(a) ? a.replace(yt, r) : a + " " + r)
            }
        }), he.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
            return t ? ft(e, {
                display: "inline-block"
            }, mt, [e, "marginRight"]) : void 0
        }), he.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(mt(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), he.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            he.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Oe[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, ct.test(e) || (he.cssHooks[e + t].set = A)
        }), he.fn.extend({
            css: function(e, t) {
                return Pe(this, function(e, t, n) {
                    var i, r, a = {},
                        o = 0;
                    if (he.isArray(t)) {
                        for (i = pt(e), r = t.length; r > o; o++) a[t[o]] = he.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    He(this) ? he(this).show() : he(this).hide()
                })
            }
        }), he.Tween = O, O.prototype = {
            constructor: O,
            init: function(e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (he.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, he.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, he.fx = O.prototype.init, he.fx.step = {};
        var Mt, Tt, St = /^(?:toggle|show|hide)$/,
            Ct = /queueHooks$/;
        he.Animation = he.extend(R, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, Ie.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
                },
                prefilters: [q],
                prefilter: function(e, t) {
                    t ? R.prefilters.unshift(e) : R.prefilters.push(e)
                }
            }), he.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? he.extend({}, e) : {
                    complete: n || !n && t || he.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !he.isFunction(t) && t
                };
                return i.duration = he.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in he.fx.speeds ? he.fx.speeds[i.duration] : he.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
                }, i
            }, he.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(He).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = he.isEmptyObject(e),
                        a = he.speed(t, n, i),
                        o = function() {
                            var t = R(this, he.extend({}, e), a);
                            (r || he._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = he.timers,
                            o = he._data(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && Ct.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                        (t || !n) && he.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = he._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = he.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), he.each(["toggle", "show", "hide"], function(e, t) {
                var n = he.fn[t];
                he.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r)
                }
            }), he.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
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
                he.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), he.timers = [], he.fx.tick = function() {
                var e, t = he.timers,
                    n = 0;
                for (Mt = he.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || he.fx.stop(), Mt = void 0
            }, he.fx.timer = function(e) {
                he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
            }, he.fx.interval = 13, he.fx.start = function() {
                Tt || (Tt = e.setInterval(he.fx.tick, he.fx.interval))
            }, he.fx.stop = function() {
                e.clearInterval(Tt), Tt = null
            }, he.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, he.fn.delay = function(t, n) {
                return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    r = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var Nt = /\r/g;
        he.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)
                }
            }
        }), he.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : he.trim(he.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : i.length, u = 0 > r ? s : a ? r : 0; s > u; u++)
                            if (n = i[u], (n.selected || u === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                                if (t = he(n).val(), a) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = he.makeArray(t), o = r.length; o--;)
                            if (i = r[o], he.inArray(he.valHooks.option.get(i), a) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), he.each(["radio", "checkbox"], function() {
            he.valHooks[this] = {
                set: function(e, t) {
                    return he.isArray(t) ? e.checked = he.inArray(he(e).val(), t) > -1 : void 0
                }
            }, de.checkOn || (he.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Yt, jt, Et = he.expr.attrHandle,
            Lt = /^(?:checked|selected)$/i,
            At = de.getSetAttribute,
            Ft = de.input;
        he.fn.extend({
            attr: function(e, t) {
                return Pe(this, he.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    he.removeAttr(this, e)
                })
            }
        }), he.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === a && he.isXMLDoc(e) || (t = t.toLowerCase(), r = he.attrHooks[t] || (he.expr.match.bool.test(t) ? jt : Yt)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    a = t && t.match(Ne);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = he.propFix[n] || n, he.expr.match.bool.test(n) ? Ft && At || !Lt.test(n) ? e[i] = !1 : e[he.camelCase("default-" + n)] = e[i] = !1 : he.attr(e, n, ""), e.removeAttribute(At ? n : i)
            }
        }), jt = {
            set: function(e, t, n) {
                return t === !1 ? he.removeAttr(e, n) : Ft && At || !Lt.test(n) ? e.setAttribute(!At && he.propFix[n] || n, n) : e[he.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Et[t] || he.find.attr;
            Ft && At || !Lt.test(t) ? Et[t] = function(e, t, i) {
                var r, a;
                return i || (a = Et[t], Et[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Et[t] = a), r
            } : Et[t] = function(e, t, n) {
                return n ? void 0 : e[he.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Ft && At || (he.attrHooks.value = {
            set: function(e, t, n) {
                return he.nodeName(e, "input") ? void(e.defaultValue = t) : Yt && Yt.set(e, t, n)
            }
        }), At || (Yt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Et.id = Et.name = Et.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, he.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Yt.set
        }, he.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Yt.set(e, "" === t ? !1 : t, n)
            }
        }, he.each(["width", "height"], function(e, t) {
            he.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), de.style || (he.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var It = /^(?:input|select|textarea|button|object)$/i,
            Ot = /^(?:a|area)$/i;
        he.fn.extend({
            prop: function(e, t) {
                return Pe(this, he.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = he.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), he.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || he.each(["href", "src"], function(e, t) {
            he.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (he.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            he.propFix[this.toLowerCase()] = this
        }), de.enctype || (he.propFix.enctype = "encoding");
        var Ht = /[\t\r\n\f]/g;
        he.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s, u = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).addClass(e.call(this, t, z(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[u++];)
                        if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = he.trim(i), r !== s && he.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s, u = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).removeClass(e.call(this, t, z(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[u++];)
                        if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            s = he.trim(i), r !== s && he.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                    he(this).toggleClass(e.call(this, n, z(this), t), t)
                }) : this.each(function() {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = he(this), a = e.match(Ne) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(void 0 === e || "boolean" === n) && (t = z(this), t && he._data(this, "__className__", t), he.attr(this, "class", t || e === !1 ? "" : he._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + z(n) + " ").replace(Ht, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            he.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), he.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Pt = e.location,
            Wt = he.now(),
            qt = /\?/,
            $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        he.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = he.trim(t + "");
            return r && !he.trim(r.replace($t, function(e, t, r, a) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !a - !r, "")
            })) ? Function("return " + r)() : he.error("Invalid JSON: " + t)
        }, he.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
        };
        var Rt = /#.*$/,
            zt = /([?&])_=[^&]*/,
            Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Gt = /^(?:GET|HEAD)$/,
            Kt = /^\/\//,
            Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Jt = {},
            Vt = {},
            Zt = "*/".concat("*"),
            Qt = Pt.href,
            en = Xt.exec(Qt.toLowerCase()) || [];
        he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Qt,
                type: "GET",
                isLocal: Bt.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Zt,
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
                    "text json": he.parseJSON,
                    "text xml": he.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? G(G(e, he.ajaxSettings), t) : G(he.ajaxSettings, e)
            },
            ajaxPrefilter: U(Jt),
            ajaxTransport: U(Vt),
            ajax: function(t, n) {
                function i(t, n, i, r) {
                    var a, d, v, _, k, w = n;
                    2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = r || "", D.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, i && (_ = K(f, D, i)), _ = X(f, _, D, a), a ? (f.ifModified && (k = D.getResponseHeader("Last-Modified"), k && (he.lastModified[o] = k), k = D.getResponseHeader("etag"), k && (he.etag[o] = k)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, d = _.data, v = _.error, a = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), D.status = t, D.statusText = (n || w) + "", a ? m.resolveWith(h, [d, w, D]) : m.rejectWith(h, [D, w, v]), D.statusCode(y), y = void 0, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [D, f, a ? d : v]), g.fireWith(h, [D, w]), l && (p.trigger("ajaxComplete", [D, f]), --he.active || he.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, a, o, s, u, l, c, d, f = he.ajaxSetup({}, n),
                    h = f.context || f,
                    p = f.context && (h.nodeType || h.jquery) ? he(h) : he.event,
                    m = he.Deferred(),
                    g = he.Callbacks("once memory"),
                    y = f.statusCode || {},
                    v = {},
                    _ = {},
                    b = 0,
                    k = "canceled",
                    D = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!d)
                                    for (d = {}; t = Ut.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = _[n] = _[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else D.always(e[D.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || k;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(D).complete = g.add, D.success = D.done, D.error = D.fail, f.url = ((t || f.url || Qt) + "").replace(Rt, "").replace(Kt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = he.trim(f.dataType || "*").toLowerCase().match(Ne) || [""], null == f.crossDomain && (r = Xt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = he.param(f.data, f.traditional)), B(Jt, f, n, D), 2 === b) return D;
                l = he.event && f.global, l && 0 === he.active++ && he.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Gt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (qt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = zt.test(o) ? o.replace(zt, "$1_=" + Wt++) : o + (qt.test(o) ? "&" : "?") + "_=" + Wt++)), f.ifModified && (he.lastModified[o] && D.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && D.setRequestHeader("If-None-Match", he.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && D.setRequestHeader("Content-Type", f.contentType), D.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers) D.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (f.beforeSend.call(h, D, f) === !1 || 2 === b)) return D.abort();
                k = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) D[a](f[a]);
                if (c = B(Vt, f, n, D)) {
                    if (D.readyState = 1, l && p.trigger("ajaxSend", [D, f]), 2 === b) return D;
                    f.async && f.timeout > 0 && (u = e.setTimeout(function() {
                        D.abort("timeout")
                    }, f.timeout));
                    try {
                        b = 1, c.send(v, i)
                    } catch (w) {
                        if (!(2 > b)) throw w;
                        i(-1, w)
                    }
                } else i(-1, "No Transport");
                return D
            },
            getJSON: function(e, t, n) {
                return he.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return he.get(e, void 0, t, "script")
            }
        }), he.each(["get", "post"], function(e, t) {
            he[t] = function(e, n, i, r) {
                return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, he.isPlainObject(e) && e))
            }
        }), he._evalUrl = function(e) {
            return he.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, he.fn.extend({
            wrapAll: function(e) {
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = he(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return he.isFunction(e) ? this.each(function(t) {
                    he(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = he(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = he.isFunction(e);
                return this.each(function(n) {
                    he(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    he.nodeName(this, "body") || he(this).replaceWith(this.childNodes)
                }).end()
            }
        }), he.expr.filters.hidden = function(e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : V(e)
        }, he.expr.filters.visible = function(e) {
            return !he.expr.filters.hidden(e)
        };
        var tn = /%20/g,
            nn = /\[\]$/,
            rn = /\r?\n/g,
            an = /^(?:submit|button|image|reset|file)$/i,
            on = /^(?:input|select|textarea|keygen)/i;
        he.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = he.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, r);
            return i.join("&").replace(tn, "+")
        }, he.fn.extend({
            serialize: function() {
                return he.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !he(this).is(":disabled") && on.test(this.nodeName) && !an.test(e) && (this.checked || !We.test(e))
                }).map(function(e, t) {
                    var n = he(this).val();
                    return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(rn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(rn, "\r\n")
                    }
                }).get()
            }
        }), he.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return this.isLocal ? ee() : ie.documentMode > 8 ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || ee()
        } : Q;
        var sn = 0,
            un = {},
            ln = he.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in un) un[e](void 0, !0)
        }), de.cors = !!ln && "withCredentials" in ln, ln = de.ajax = !!ln, ln && he.ajaxTransport(function(t) {
            if (!t.crossDomain || de.cors) {
                var n;
                return {
                    send: function(i, r) {
                        var a, o = t.xhr(),
                            s = ++sn;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) o[a] = t.xhrFields[a];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                        o.send(t.hasContent && t.data || null), n = function(e, i) {
                            var a, u, l;
                            if (n && (i || 4 === o.readyState))
                                if (delete un[s], n = void 0, o.onreadystatechange = he.noop, i) 4 !== o.readyState && o.abort();
                                else {
                                    l = {}, a = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                    try {
                                        u = o.statusText
                                    } catch (c) {
                                        u = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = l.text ? 200 : 404
                                }
                            l && r(a, u, l, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = un[s] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }), he.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), he.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return he.globalEval(e), e
                }
            }
        }), he.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), he.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || he("head")[0] || ie.documentElement;
                return {
                    send: function(i, r) {
                        t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var cn = [],
            dn = /(=)\?(?=&|$)|\?\?/;
        he.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = cn.pop() || he.expando + "_" + Wt++;
                return this[e] = !0, e
            }
        }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, a, o, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + r) : t.jsonp !== !1 && (t.url += (qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return o || he.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === a ? he(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, cn.push(r)), o && he.isFunction(a) && a(o[0]), o = a = void 0
            }), "script") : void 0
        }), de.createHTMLDocument = function() {
            if (!ie.implementation.createHTMLDocument) return !1;
            var e = ie.implementation.createHTMLDocument("");
            return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
        }(), he.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (de.createHTMLDocument ? ie.implementation.createHTMLDocument("") : ie);
            var i = De.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = y([e], t, r), r && r.length && he(r).remove(), he.merge([], i.childNodes))
        };
        var fn = he.fn.load;
        he.fn.load = function(e, t, n) {
            if ("string" != typeof e && fn) return fn.apply(this, arguments);
            var i, r, a, o = this,
                s = e.indexOf(" ");
            return s > -1 && (i = he.trim(e.slice(s, e.length)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && he.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments, o.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(o, a || [e.responseText, t, e])
                })
            }), this
        }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            he.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), he.expr.filters.animated = function(e) {
            return he.grep(he.timers, function(t) {
                return e === t.elem
            }).length
        }, he.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, u, l, c = he.css(e, "position"),
                    d = he(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), a = he.css(e, "top"), u = he.css(e, "left"), l = ("absolute" === c || "fixed" === c) && he.inArray("auto", [a, u]) > -1, l ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, he.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    he.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    a = r && r.ownerDocument;
                if (a) return t = a.documentElement, he.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(a), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n.top += he.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += he.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                        top: t.top - n.top - he.css(i, "marginTop", !0),
                        left: t.left - n.left - he.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position");) e = e.offsetParent;
                    return e || ht
                })
            }
        }), he.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            he.fn[e] = function(i) {
                return Pe(this, function(e, i, r) {
                    var a = te(e);
                    return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? he(a).scrollLeft() : r, n ? r : he(a).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), he.each(["top", "left"], function(e, t) {
            he.cssHooks[t] = j(de.pixelPosition, function(e, n) {
                return n ? (n = mt(e, t), dt.test(n) ? he(e).position()[t] + "px" : n) : void 0
            })
        }), he.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            he.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                he.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        o = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Pe(this, function(t, n, i) {
                        var r;
                        return he.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? he.css(t, n, o) : he.style(t, n, i, o)
                    }, t, a ? i : void 0, a, null)
                }
            })
        }), he.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), he.fn.size = function() {
            return this.length
        }, he.fn.andSelf = he.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return he
        });
        var hn = e.jQuery,
            pn = e.$;
        return he.noConflict = function(t) {
            return e.$ === he && (e.$ = pn), t && e.jQuery === he && (e.jQuery = hn), he
        }, t || (e.jQuery = e.$ = he), he
    }),
    function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && e.data("remote") !== !1
            },
            handleRemote: function(i) {
                var r, a, o, s, u, l;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, u = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"), a = i.data("ujs:submit-button-formaction") || i.attr("action"), o = e(i[0].elements).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (o.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), a = n.href(i), o = i.data("params") || null);
                    return l = {
                        type: r || "GET",
                        data: o,
                        dataType: u,
                        beforeSend: function(e, r) {
                            return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(a)
                    }, s && (l.xhrFields = {
                        withCredentials: s
                    }), a && (l.url = a), n.ajax(l)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    a = i.data("method"),
                    o = i.attr("target"),
                    s = n.csrfToken(),
                    u = n.csrfParam(),
                    l = e('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + a + '" type="hidden" />';
                u === t || s === t || n.isCrossDomain(r) || (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), o && l.attr("target", o), l.hide().append(c).appendTo("body"), l.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (a) {
                        (console.error || console.log).call(console, a.stack || a)
                    }
                    t = n.fire(e, "confirm:complete", [r])
                }
                return r && t
            },
            blankInputs: function(t, n, i) {
                var r, a, o = e(),
                    s = n || "input,textarea",
                    u = t.find(s);
                return u.each(function() {
                    if (r = e(this), a = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), a === i) {
                        if (r.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        o = o.add(r)
                    }
                }), o.length ? o : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(t) {
            var i = e(this),
                r = i.data("method"),
                a = i.data("params"),
                o = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!o && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (o && (!r || "GET" === r) && !a) return !0;
                var s = n.handleRemote(i);
                return s === !1 ? n.enableElement(i) : s.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return r === !1 ? n.enableFormElement(i) : r.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r, a, o = e(this),
                s = n.isRemote(o);
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (o.attr("novalidate") === t)
                if (o.data("ujs:formnovalidate-button") === t) {
                    if (r = n.blankInputs(o, n.requiredInputSelector, !1), r && n.fire(o, "ajax:aborted:required", [r])) return n.stopEverything(i)
                } else o.data("ujs:formnovalidate-button", t);
            if (s) {
                if (a = n.nonBlankInputs(o, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(o)
                    }, 13);
                    var u = n.fire(o, "ajax:aborted:file", [a]);
                    return u || setTimeout(function() {
                        n.enableFormElements(o)
                    }, 13), u
                }
                return n.handleRemote(o), !1
            }
            setTimeout(function() {
                n.disableFormElements(o)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                a = r ? {
                    name: r,
                    value: i.val()
                } : null,
                o = i.closest("form");
            0 === o.length && (o = e("#" + i.attr("form"))), o.data("ujs:submit-button", a), o.data("ujs:formnovalidate-button", i.attr("formnovalidate")), o.data("ujs:submit-button-formaction", i.attr("formaction")), o.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    /*!
     * jQuery UI Core 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t, i) {
            var r, a, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (r = t.parentNode, a = r.name, t.href && a && "map" === r.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && n(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? !t.disabled : "a" === s ? t.href || i : i) && n(t)
        }

        function n(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.11.4",
            keyCode: {
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
            }
        }), e.fn.extend({
            scrollParent: function(t) {
                var n = this.css("position"),
                    i = "absolute" === n,
                    r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents().filter(function() {
                        var t = e(this);
                        return i && "static" === t.css("position") ? !1 : r.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== n && a.length ? a : e(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, i) {
                return !!e.data(t, i[3])
            },
            focusable: function(n) {
                return t(n, !isNaN(e.attr(n, "tabindex")))
            },
            tabbable: function(n) {
                var i = e.attr(n, "tabindex"),
                    r = isNaN(i);
                return (r || i >= 0) && t(n, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
            function i(t, n, i, a) {
                return e.each(r, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                a = n.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + n] = function(t) {
                return void 0 === t ? o["inner" + n].call(this) : this.each(function() {
                    e(this).css(a, i(this, t) + "px")
                })
            }, e.fn["outer" + n] = function(t, r) {
                return "number" != typeof t ? o["outer" + n].call(this, t) : this.each(function() {
                    e(this).css(a, i(this, t, !0, r) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
            focus: function(t) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), i && i.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function() {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(e + ".ui-disableSelection", function(e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var n, i, r = e(this[0]); r.length && r[0] !== document;) {
                        if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                        r = r.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, n, i) {
                var r, a = e.ui[t].prototype;
                for (r in i) a.plugins[r] = a.plugins[r] || [], a.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n, i) {
                var r, a = e.plugins[t];
                if (a && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (r = 0; r < a.length; r++) e.options[a[r][0]] && a[r][1].apply(e.element, n)
            }
        }
    }),
    /*!
     * jQuery UI Datepicker 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/datepicker/
     */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./core"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            for (var t, n; e.length && e[0] !== document;) {
                if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                e = e.parent()
            }
            return 0
        }

        function n() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(n, "mouseout", function() {
                e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
            }).delegate(n, "mouseover", r)
        }

        function r() {
            e.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        }

        function a(t, n) {
            e.extend(t, n);
            for (var i in n) null == n[i] && (t[i] = n[i]);
            return t
        }
        e.extend(e.ui, {
            datepicker: {
                version: "1.11.4"
            }
        });
        var o;
        return e.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return a(this._defaults, e || {}), this
            },
            _attachDatepicker: function(t, n) {
                var i, r, a;
                i = t.nodeName.toLowerCase(), r = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), r), a.settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, a) : r && this._inlineDatepicker(t, a)
            },
            _newInst: function(t, n) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, n) {
                var i = e(t);
                n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, n) {
                var i, r, a, o = this._get(n, "appendText"),
                    s = this._get(n, "isRTL");
                n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[s ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (r = this._get(n, "buttonText"), a = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: r,
                    title: r
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                    src: a,
                    alt: r,
                    title: r
                }) : r)), t[s ? "before" : "after"](n.trigger), n.trigger.click(function() {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, i, r, a = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function(e) {
                        for (n = 0, i = 0, r = 0; r < e.length; r++) e[r].length > n && (n = e[r].length, i = r);
                        return i
                    }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
                }
            },
            _inlineDatepicker: function(t, n) {
                var i = e(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, n, i, r, o) {
                var s, u, l, c, d, f = this._dialogInst;
                return f || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, e.data(this._dialogInput[0], "datepicker", f)), a(f.settings, r || {}), n = n && n.constructor === Date ? this._formatDate(f, n) : n, this._dialogInput.val(n), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (u = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [u / 2 - 100 + c, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", f), this
            },
            _destroyDatepicker: function(t) {
                var n, i = e(t),
                    r = e.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && i.removeClass(this.markerClassName).empty(), o === r && (o = null))
            },
            _enableDatepicker: function(t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, a.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function(t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, a.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return e.data(t, "datepicker")
                } catch (n) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, n, i) {
                var r, o, s, u, l = this._getInst(t);
                return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? e.extend({}, e.datepicker._defaults) : l ? "all" === n ? e.extend({}, l.settings) : this._get(l, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = i), void(l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(t, !0), s = this._getMinMaxDate(l, "min"), u = this._getMinMaxDate(l, "max"), a(l.settings, r), null !== s && void 0 !== r.dateFormat && void 0 === r.minDate && (l.settings.minDate = this._formatDate(l, s)), null !== u && void 0 !== r.dateFormat && void 0 === r.maxDate && (l.settings.maxDate = this._formatDate(l, u)), "disabled" in r && (r.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l))))
            },
            _changeDatepicker: function(e, t, n) {
                this._optionDatepicker(e, t, n)
            },
            _refreshDatepicker: function(e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
            },
            _doKeyDown: function(t) {
                var n, i, r, a = e.datepicker._getInst(t.target),
                    o = !0,
                    s = a.dpDiv.is(".ui-datepicker-rtl");
                if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), r[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, r[0]), n = e.datepicker._get(a, "onSelect"), n ? (i = e.datepicker._formatDate(a), n.apply(a.input ? a.input[0] : null, [i, a])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var n, i, r = e.datepicker._getInst(t.target);
                return e.datepicker._get(r, "constrainInput") ? (n = e.datepicker._possibleChars(e.datepicker._get(r, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !n || n.indexOf(i) > -1) : void 0
            },
            _doKeyUp: function(t) {
                var n, i = e.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    n = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), n && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
                } catch (r) {}
                return !0
            },
            _showDatepicker: function(n) {
                if (n = n.target || n, "input" !== n.nodeName.toLowerCase() && (n = e("input", n.parentNode)[0]), !e.datepicker._isDisabledDatepicker(n) && e.datepicker._lastInput !== n) {
                    var i, r, o, s, u, l, c;
                    i = e.datepicker._getInst(n), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(i, "beforeShow"), o = r ? r.apply(n, [n, i]) : {}, o !== !1 && (a(i.settings, o), i.lastVal = null, e.datepicker._lastInput = n, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (n.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(n), e.datepicker._pos[1] += n.offsetHeight), s = !1, e(n).parents().each(function() {
                        return s |= "fixed" === e(this).css("position"), !s
                    }), u = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(i), u = e.datepicker._checkOffset(i, u, s), i.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                        display: "none",
                        left: u.left + "px",
                        top: u.top + "px"
                    }), i.inline || (l = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(n)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var n, i = this._getNumberOfMonths(t),
                    a = i[1],
                    s = 17,
                    u = t.dpDiv.find("." + this._dayOverClass + " a");
                u.length > 0 && r.apply(u.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", s * a + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function(t, n, i) {
                var r = t.dpDiv.outerWidth(),
                    a = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    s = t.input ? t.input.outerHeight() : 0,
                    u = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? r - o : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + s ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > u && u > r ? Math.abs(n.left + r - u) : 0), n.top -= Math.min(n.top, n.top + a > l && l > a ? Math.abs(a + s) : 0), n
            },
            _findPos: function(t) {
                for (var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
                return n = e(t).offset(), [n.left, n.top]
            },
            _hideDatepicker: function(t) {
                var n, i, r, a, o = this._curInst;
                !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), i = this._get(o, "duration"), r = function() {
                    e.datepicker._tidyDialog(o)
                }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), i, r) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (e.datepicker._curInst) {
                    var n = e(t.target),
                        i = e.datepicker._getInst(n[0]);
                    (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(a, n + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
            },
            _gotoToday: function(t) {
                var n, i = e(t),
                    r = this._getInst(i[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
            },
            _selectMonthYear: function(t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(r)
            },
            _selectDay: function(t, n, i, r) {
                var a, o = e(t);
                e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", r).html(), a.selectedMonth = a.currentMonth = n, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
            },
            _clearDate: function(t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function(t, n) {
                var i, r = e(t),
                    a = this._getInst(r[0]);
                n = null != n ? n : this._formatDate(a), a.input && a.input.val(n), this._updateAlternate(a), i = this._get(a, "onSelect"), i ? i.apply(a.input ? a.input[0] : null, [n, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var n, i, r, a = this._get(t, "altField");
                a && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(a).each(function() {
                    e(this).val(r)
                }))
            },
            noWeekends: function(e) {
                var t = e.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function(e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function(t, n, i) {
                if (null == t || null == n) throw "Invalid arguments";
                if (n = "object" == typeof n ? n.toString() : n + "", "" === n) return null;
                var r, a, o, s, u = 0,
                    l = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                    d = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (i ? i.dayNames : null) || this._defaults.dayNames,
                    h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (i ? i.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    y = -1,
                    v = -1,
                    _ = !1,
                    b = function(e) {
                        var n = r + 1 < t.length && t.charAt(r + 1) === e;
                        return n && r++, n
                    },
                    k = function(e) {
                        var t = b(e),
                            i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            r = "y" === e ? i : 1,
                            a = new RegExp("^\\d{" + r + "," + i + "}"),
                            o = n.substring(u).match(a);
                        if (!o) throw "Missing number at position " + u;
                        return u += o[0].length, parseInt(o[0], 10)
                    },
                    D = function(t, i, r) {
                        var a = -1,
                            o = e.map(b(t) ? r : i, function(e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function(e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(o, function(e, t) {
                                var i = t[1];
                                return n.substr(u, i.length).toLowerCase() === i.toLowerCase() ? (a = t[0], u += i.length, !1) : void 0
                            }), -1 !== a) return a + 1;
                        throw "Unknown name at position " + u
                    },
                    w = function() {
                        if (n.charAt(u) !== t.charAt(r)) throw "Unexpected literal at position " + u;
                        u++
                    };
                for (r = 0; r < t.length; r++)
                    if (_) "'" !== t.charAt(r) || b("'") ? w() : _ = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                            y = k("d");
                            break;
                        case "D":
                            D("D", d, f);
                            break;
                        case "o":
                            v = k("o");
                            break;
                        case "m":
                            g = k("m");
                            break;
                        case "M":
                            g = D("M", h, p);
                            break;
                        case "y":
                            m = k("y");
                            break;
                        case "@":
                            s = new Date(k("@")), m = s.getFullYear(), g = s.getMonth() + 1, y = s.getDate();
                            break;
                        case "!":
                            s = new Date((k("!") - this._ticksTo1970) / 1e4), m = s.getFullYear(), g = s.getMonth() + 1, y = s.getDate();
                            break;
                        case "'":
                            b("'") ? w() : _ = !0;
                            break;
                        default:
                            w()
                    }
                    if (u < n.length && (o = n.substr(u), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), v > -1)
                    for (g = 1, y = v;;) {
                        if (a = this._getDaysInMonth(m, g - 1), a >= y) break;
                        g++, y -= a
                    }
                if (s = this._daylightSavingAdjust(new Date(m, g - 1, y)), s.getFullYear() !== m || s.getMonth() + 1 !== g || s.getDate() !== y) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, n) {
                if (!t) return "";
                var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    a = (n ? n.dayNames : null) || this._defaults.dayNames,
                    o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    s = (n ? n.monthNames : null) || this._defaults.monthNames,
                    u = function(t) {
                        var n = i + 1 < e.length && e.charAt(i + 1) === t;
                        return n && i++, n
                    },
                    l = function(e, t, n) {
                        var i = "" + t;
                        if (u(e))
                            for (; i.length < n;) i = "0" + i;
                        return i
                    },
                    c = function(e, t, n, i) {
                        return u(e) ? i[t] : n[t]
                    },
                    d = "",
                    f = !1;
                if (t)
                    for (i = 0; i < e.length; i++)
                        if (f) "'" !== e.charAt(i) || u("'") ? d += e.charAt(i) : f = !1;
                        else switch (e.charAt(i)) {
                            case "d":
                                d += l("d", t.getDate(), 2);
                                break;
                            case "D":
                                d += c("D", t.getDay(), r, a);
                                break;
                            case "o":
                                d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += l("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += c("M", t.getMonth(), o, s);
                                break;
                            case "y":
                                d += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                d += t.getTime();
                                break;
                            case "!":
                                d += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                u("'") ? d += "'" : f = !0;
                                break;
                            default:
                                d += e.charAt(i)
                        }
                        return d
            },
            _possibleChars: function(e) {
                var t, n = "",
                    i = !1,
                    r = function(n) {
                        var i = t + 1 < e.length && e.charAt(t + 1) === n;
                        return i && t++, i
                    };
                for (t = 0; t < e.length; t++)
                    if (i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
                    else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            n += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? n += "'" : i = !0;
                            break;
                        default:
                            n += e.charAt(t)
                    }
                    return n
            },
            _get: function(e, t) {
                return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() !== e.lastVal) {
                    var n = this._get(e, "dateFormat"),
                        i = e.lastVal = e.input ? e.input.val() : null,
                        r = this._getDefaultDate(e),
                        a = r,
                        o = this._getFormatConfig(e);
                    try {
                        a = this.parseDate(n, i, o) || r
                    } catch (s) {
                        i = t ? "" : i
                    }
                    e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = i ? a.getDate() : 0, e.currentMonth = i ? a.getMonth() : 0, e.currentYear = i ? a.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(t, n, i) {
                var r = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    a = function(n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var r = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = r.getFullYear(), o = r.getMonth(), s = r.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = u.exec(n); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    s += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    s += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(a, o));
                                    break;
                                case "y":
                                case "Y":
                                    a += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(a, o))
                            }
                            l = u.exec(n)
                        }
                        return new Date(a, o, s)
                    },
                    o = null == n || "" === n ? i : "string" == typeof n ? a(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
                return o = o && "Invalid Date" === o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, n) {
                var i = !t,
                    r = e.selectedMonth,
                    a = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), r === e.selectedMonth && a === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function(t) {
                var n = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            e.datepicker._adjustDate(i, -n, "M")
                        },
                        next: function() {
                            e.datepicker._adjustDate(i, +n, "M")
                        },
                        hide: function() {
                            e.datepicker._hideDatepicker()
                        },
                        today: function() {
                            e.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return e.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return e.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(e) {
                var t, n, i, r, a, o, s, u, l, c, d, f, h, p, m, g, y, v, _, b, k, D, w, x, M, T, S, C, N, Y, j, E, L, A, F, I, O, H, P, W = new Date,
                    q = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())),
                    $ = this._get(e, "isRTL"),
                    R = this._get(e, "showButtonPanel"),
                    z = this._get(e, "hideIfNoPrevNext"),
                    U = this._get(e, "navigationAsDateFormat"),
                    B = this._getNumberOfMonths(e),
                    G = this._get(e, "showCurrentAtPos"),
                    K = this._get(e, "stepMonths"),
                    X = 1 !== B[0] || 1 !== B[1],
                    J = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    V = this._getMinMaxDate(e, "min"),
                    Z = this._getMinMaxDate(e, "max"),
                    Q = e.drawMonth - G,
                    ee = e.drawYear;
                if (0 > Q && (Q += 12, ee--), Z)
                    for (t = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - B[0] * B[1] + 1, Z.getDate())), t = V && V > t ? V : t; this._daylightSavingAdjust(new Date(ee, Q, 1)) > t;) Q--, 0 > Q && (Q = 11, ee--);
                for (e.drawMonth = Q, e.drawYear = ee, n = this._get(e, "prevText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Q - K, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = U ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, Q + K, 1)), this._getFormatConfig(e)) : r, a = this._canAdjustMonth(e, 1, ee, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(e, "currentText"), s = this._get(e, "gotoCurrent") && e.currentDay ? J : q, o = U ? this.formatDate(o, s, this._getFormatConfig(e)) : o, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ($ ? u : "") + (this._isInRange(e, s) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + ($ ? "" : u) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), f = this._get(e, "dayNames"), h = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), y = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), _ = this._getDefaultDate(e), b = "", D = 0; D < B[0]; D++) {
                    for (w = "", this.maxRows = 4, x = 0; x < B[1]; x++) {
                        if (M = this._daylightSavingAdjust(new Date(ee, Q, e.selectedDay)), T = " ui-corner-all", S = "", X) {
                            if (S += "<div class='ui-datepicker-group", B[1] > 1) switch (x) {
                                case 0:
                                    S += " ui-datepicker-group-first", T = " ui-corner-" + ($ ? "right" : "left");
                                    break;
                                case B[1] - 1:
                                    S += " ui-datepicker-group-last", T = " ui-corner-" + ($ ? "left" : "right");
                                    break;
                                default:
                                    S += " ui-datepicker-group-middle", T = ""
                            }
                            S += "'>"
                        }
                        for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === D ? $ ? a : i : "") + (/all|right/.test(T) && 0 === D ? $ ? i : a : "") + this._generateMonthYearHeader(e, Q, ee, V, Z, D > 0 || x > 0, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", k = 0; 7 > k; k++) N = (k + c) % 7, C += "<th scope='col'" + ((k + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + f[N] + "'>" + h[N] + "</span></th>";
                        for (S += C + "</tr></thead><tbody>", Y = this._getDaysInMonth(ee, Q), ee === e.selectedYear && Q === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, Y)), j = (this._getFirstDayOfMonth(ee, Q) - c + 7) % 7, E = Math.ceil((j + Y) / 7), L = X && this.maxRows > E ? this.maxRows : E, this.maxRows = L, A = this._daylightSavingAdjust(new Date(ee, Q, 1 - j)), F = 0; L > F; F++) {
                            for (S += "<tr>", I = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(A) + "</td>" : "", k = 0; 7 > k; k++) O = g ? g.apply(e.input ? e.input[0] : null, [A]) : [!0, ""], H = A.getMonth() !== Q, P = H && !v || !O[0] || V && V > A || Z && A > Z, I += "<td class='" + ((k + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (A.getTime() === M.getTime() && Q === e.selectedMonth && e._keyEvent || _.getTime() === A.getTime() && _.getTime() === M.getTime() ? " " + this._dayOverClass : "") + (P ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !y ? "" : " " + O[1] + (A.getTime() === J.getTime() ? " " + this._currentClass : "") + (A.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !y || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (P ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (H && !y ? "&#xa0;" : P ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === q.getTime() ? " ui-state-highlight" : "") + (A.getTime() === J.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                            S += I + "</tr>"
                        }
                        Q++, Q > 11 && (Q = 0, ee++), S += "</tbody></table>" + (X ? "</div>" + (B[0] > 0 && x === B[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += S
                    }
                    b += w
                }
                return b += l, e._keyEvent = !1, b
            },
            _generateMonthYearHeader: function(e, t, n, i, r, a, o, s) {
                var u, l, c, d, f, h, p, m, g = this._get(e, "changeMonth"),
                    y = this._get(e, "changeYear"),
                    v = this._get(e, "showMonthAfterYear"),
                    _ = "<div class='ui-datepicker-title'>",
                    b = "";
                if (a || !g) b += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    for (u = i && i.getFullYear() === n, l = r && r.getFullYear() === n, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!u || c >= i.getMonth()) && (!l || c <= r.getMonth()) && (b += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + s[c] + "</option>");
                    b += "</select>"
                }
                if (v || (_ += b + (!a && g && y ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", a || !y) _ += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        for (d = this._get(e, "yearRange").split(":"), f = (new Date).getFullYear(), h = function(e) {
                                var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? f + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? f : t
                            }, p = h(d[0]), m = Math.max(p, h(d[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, m = r ? Math.min(m, r.getFullYear()) : m,
                            e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= p; p++) e.yearshtml += "<option value='" + p + "'" + (p === n ? " selected='selected'" : "") + ">" + p + "</option>";
                        e.yearshtml += "</select>", _ += e.yearshtml, e.yearshtml = null
                    }
                return _ += this._get(e, "yearSuffix"), v && (_ += (!a && g && y ? "" : "&#xa0;") + b), _ += "</div>"
            },
            _adjustInstDate: function(e, t, n) {
                var i = e.drawYear + ("Y" === n ? t : 0),
                    r = e.drawMonth + ("M" === n ? t : 0),
                    a = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, a)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    i = this._getMinMaxDate(e, "max"),
                    r = n && n > t ? n : t;
                return i && r > i ? i : r
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function(e, t, n, i) {
                var r = this._getNumberOfMonths(e),
                    a = this._daylightSavingAdjust(new Date(n, i + (0 > t ? t : r[0] * r[1]), 1));
                return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
            },
            _isInRange: function(e, t) {
                var n, i, r = this._getMinMaxDate(e, "min"),
                    a = this._getMinMaxDate(e, "max"),
                    o = null,
                    s = null,
                    u = this._get(e, "yearRange");
                return u && (n = u.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), s = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (s += i)), (!r || t.getTime() >= r.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!s || t.getFullYear() <= s)
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, n, i) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function(t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker
    }), $.datepicker.regional["no-NB"] = {
        closeText: "Lukk",
        prevText: "&laquo;Forrige",
        nextText: "Neste&raquo;",
        currentText: "I dag",
        monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        dayNamesShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
        dayNames: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"],
        dayNamesMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"],
        weekHeader: "Uke",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        constrainInput: !0
    }, $.datepicker.regional.sl = {
        closeText: "Zapri",
        prevText: "&#x3C;Prej\u0161nji",
        nextText: "Naslednji&#x3E;",
        currentText: "Trenutni",
        monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"],
        dayNamesShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"],
        dayNamesMin: ["Ne", "Po", "To", "Sr", "\u010ce", "Pe", "So"],
        weekHeader: "Teden",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, $.datepicker.regional.nl = {
        closeText: "Sluiten",
        prevText: "\u2190",
        nextText: "\u2192",
        currentText: "Vandaag",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
        dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, $.datepicker.regional.en = {
        dateFormat: "mm/dd/yy"
    }, datepicker_settings = $.datepicker.regional[$("html").attr("lang")], is_touch_device() && (datepicker_settings = $.extend({
        onClose: function(e, t) {
            $(this).attr("disabled", !1)
        },
        beforeShow: function(e, t) {
            $(this).blur(), $(this).attr("disabled", !0)
        }
    }, datepicker_settings)), $.datepicker.setDefaults(datepicker_settings),
    //! moment.js
    //! version : 2.10.6
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return An.apply(null, arguments)
        }

        function t(e) {
            An = e
        }

        function n(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function r(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function a(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function o(e, t) {
            for (var n in t) a(t, n) && (e[n] = t[n]);
            return a(t, "toString") && (e.toString = t.toString), a(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function s(e, t, n, i) {
            return Ce(e, t, n, i, !0).utc()
        }

        function u() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function l(e) {
            return null == e._pf && (e._pf = u()), e._pf
        }

        function c(e) {
            if (null == e._isValid) {
                var t = l(e);
                e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function d(e) {
            var t = s(NaN);
            return null != e ? o(l(t), e) : l(t).userInvalidated = !0, t
        }

        function f(e, t) {
            var n, i, r;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = l(t)), "undefined" != typeof t._locale && (e._locale = t._locale), In.length > 0)
                for (n in In) i = In[n], r = t[i], "undefined" != typeof r && (e[i] = r);
            return e
        }

        function h(t) {
            f(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), On === !1 && (On = !0, e.updateOffset(this), On = !1)
        }

        function p(e) {
            return e instanceof h || null != e && null != e._isAMomentObject
        }

        function m(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function g(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = m(t)), n
        }

        function y(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                a = Math.abs(e.length - t.length),
                o = 0;
            for (i = 0; r > i; i++)(n && e[i] !== t[i] || !n && g(e[i]) !== g(t[i])) && o++;
            return o + a
        }

        function v() {}

        function _(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function b(e) {
            for (var t, n, i, r, a = 0; a < e.length;) {
                for (r = _(e[a]).split("-"), t = r.length, n = _(e[a + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = k(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && y(r, n, !0) >= t - 1) break;
                    t--
                }
                a++
            }
            return null
        }

        function k(e) {
            var t = null;
            if (!Hn[e] && "undefined" != typeof module && module && module.exports) try {
                t = Fn._abbr, require("./locale/" + e), D(t)
            } catch (n) {}
            return Hn[e]
        }

        function D(e, t) {
            var n;
            return e && (n = "undefined" == typeof t ? x(e) : w(e, t), n && (Fn = n)), Fn._abbr
        }

        function w(e, t) {
            return null !== t ? (t.abbr = e, Hn[e] = Hn[e] || new v, Hn[e].set(t), D(e), Hn[e]) : (delete Hn[e], null)
        }

        function x(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Fn;
            if (!n(e)) {
                if (t = k(e)) return t;
                e = [e]
            }
            return b(e)
        }

        function M(e, t) {
            var n = e.toLowerCase();
            Pn[n] = Pn[n + "s"] = Pn[t] = e
        }

        function T(e) {
            return "string" == typeof e ? Pn[e] || Pn[e.toLowerCase()] : void 0
        }

        function S(e) {
            var t, n, i = {};
            for (n in e) a(e, n) && (t = T(n), t && (i[t] = e[n]));
            return i
        }

        function C(t, n) {
            return function(i) {
                return null != i ? (Y(this, t, i), e.updateOffset(this, n), this) : N(this, t)
            }
        }

        function N(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function Y(e, t, n) {
            return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function j(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else if (e = T(e), "function" == typeof this[e]) return this[e](t);
            return this
        }

        function E(e, t, n) {
            var i = "" + Math.abs(e),
                r = t - i.length,
                a = e >= 0;
            return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function L(e, t, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), e && (Rn[e] = r), t && (Rn[t[0]] = function() {
                return E(r.apply(this, arguments), t[1], t[2])
            }), n && (Rn[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            })
        }

        function A(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function F(e) {
            var t, n, i = e.match(Wn);
            for (t = 0, n = i.length; n > t; t++) Rn[i[t]] ? i[t] = Rn[i[t]] : i[t] = A(i[t]);
            return function(r) {
                var a = "";
                for (t = 0; n > t; t++) a += i[t] instanceof Function ? i[t].call(r, e) : i[t];
                return a
            }
        }

        function I(e, t) {
            return e.isValid() ? (t = O(t, e.localeData()), $n[t] = $n[t] || F(t), $n[t](e)) : e.localeData().invalidDate()
        }

        function O(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (qn.lastIndex = 0; i >= 0 && qn.test(e);) e = e.replace(qn, n), qn.lastIndex = 0, i -= 1;
            return e
        }

        function H(e) {
            return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
        }

        function P(e, t, n) {
            ri[e] = H(t) ? t : function(e) {
                return e && n ? n : t
            }
        }

        function W(e, t) {
            return a(ri, e) ? ri[e](t._strict, t._locale) : new RegExp(q(e))
        }

        function q(e) {
            return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                return t || n || i || r
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function $(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function(e, n) {
                    n[t] = g(e)
                }), n = 0; n < e.length; n++) ai[e[n]] = i
        }

        function R(e, t) {
            $(e, function(e, n, i, r) {
                i._w = i._w || {}, t(e, i._w, i, r)
            })
        }

        function z(e, t, n) {
            null != t && a(ai, e) && ai[e](t, n._a, n, e)
        }

        function U(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function B(e) {
            return this._months[e.month()]
        }

        function G(e) {
            return this._monthsShort[e.month()]
        }

        function K(e, t, n) {
            var i, r, a;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (r = s([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }

        function X(e, t) {
            var n;
            return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), U(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
        }

        function J(t) {
            return null != t ? (X(this, t), e.updateOffset(this, !0), this) : N(this, "Month")
        }

        function V() {
            return U(this.year(), this.month())
        }

        function Z(e) {
            var t, n = e._a;
            return n && -2 === l(e).overflow && (t = n[si] < 0 || n[si] > 11 ? si : n[ui] < 1 || n[ui] > U(n[oi], n[si]) ? ui : n[li] < 0 || n[li] > 24 || 24 === n[li] && (0 !== n[ci] || 0 !== n[di] || 0 !== n[fi]) ? li : n[ci] < 0 || n[ci] > 59 ? ci : n[di] < 0 || n[di] > 59 ? di : n[fi] < 0 || n[fi] > 999 ? fi : -1, l(e)._overflowDayOfYear && (oi > t || t > ui) && (t = ui), l(e).overflow = t), e
        }

        function Q(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function ee(e, t) {
            var n = !0;
            return o(function() {
                return n && (Q(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
            }, t)
        }

        function te(e, t) {
            mi[e] || (Q(t), mi[e] = !0)
        }

        function ne(e) {
            var t, n, i = e._i,
                r = gi.exec(i);
            if (r) {
                for (l(e).iso = !0, t = 0, n = yi.length; n > t; t++)
                    if (yi[t][1].exec(i)) {
                        e._f = yi[t][0];
                        break
                    }
                for (t = 0, n = vi.length; n > t; t++)
                    if (vi[t][1].exec(i)) {
                        e._f += (r[6] || " ") + vi[t][0];
                        break
                    }
                i.match(ti) && (e._f += "Z"), ke(e)
            } else e._isValid = !1
        }

        function ie(t) {
            var n = _i.exec(t._i);
            return null !== n ? void(t._d = new Date(+n[1])) : (ne(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function re(e, t, n, i, r, a, o) {
            var s = new Date(e, t, n, i, r, a, o);
            return 1970 > e && s.setFullYear(e), s
        }

        function ae(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e), t
        }

        function oe(e) {
            return se(e) ? 366 : 365
        }

        function se(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function ue() {
            return se(this.year())
        }

        function le(e, t, n) {
            var i, r = n - t,
                a = n - e.day();
            return a > r && (a -= 7), r - 7 > a && (a += 7), i = Ne(e).add(a, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function ce(e) {
            return le(e, this._week.dow, this._week.doy).week
        }

        function de() {
            return this._week.dow
        }

        function fe() {
            return this._week.doy
        }

        function he(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function pe(e) {
            var t = le(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function me(e, t, n, i, r) {
            var a, o = 6 + r - i,
                s = ae(e, 0, 1 + o),
                u = s.getUTCDay();
            return r > u && (u += 7), n = null != n ? 1 * n : r, a = 1 + o + 7 * (t - 1) - u + n, {
                year: a > 0 ? e : e - 1,
                dayOfYear: a > 0 ? a : oe(e - 1) + a
            }
        }

        function ge(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function ye(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function ve(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function _e(e) {
            var t, n, i, r, a = [];
            if (!e._d) {
                for (i = ve(e), e._w && null == e._a[ui] && null == e._a[si] && be(e), e._dayOfYear && (r = ye(e._a[oi], i[oi]), e._dayOfYear > oe(r) && (l(e)._overflowDayOfYear = !0), n = ae(r, 0, e._dayOfYear), e._a[si] = n.getUTCMonth(), e._a[ui] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = a[t] = i[t];
                for (; 7 > t; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[li] && 0 === e._a[ci] && 0 === e._a[di] && 0 === e._a[fi] && (e._nextDay = !0, e._a[li] = 0), e._d = (e._useUTC ? ae : re).apply(null, a), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[li] = 24)
            }
        }

        function be(e) {
            var t, n, i, r, a, o, s;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (a = 1, o = 4, n = ye(t.GG, e._a[oi], le(Ne(), 1, 4).year), i = ye(t.W, 1), r = ye(t.E, 1)) : (a = e._locale._week.dow, o = e._locale._week.doy, n = ye(t.gg, e._a[oi], le(Ne(), a, o).year), i = ye(t.w, 1), null != t.d ? (r = t.d, a > r && ++i) : r = null != t.e ? t.e + a : a), s = me(n, i, r, o, a), e._a[oi] = s.year, e._dayOfYear = s.dayOfYear
        }

        function ke(t) {
            if (t._f === e.ISO_8601) return void ne(t);
            t._a = [], l(t).empty = !0;
            var n, i, r, a, o, s = "" + t._i,
                u = s.length,
                c = 0;
            for (r = O(t._f, t._locale).match(Wn) || [], n = 0; n < r.length; n++) a = r[n], i = (s.match(W(a, t)) || [])[0], i && (o = s.substr(0, s.indexOf(i)), o.length > 0 && l(t).unusedInput.push(o), s = s.slice(s.indexOf(i) + i.length), c += i.length), Rn[a] ? (i ? l(t).empty = !1 : l(t).unusedTokens.push(a), z(a, i, t)) : t._strict && !i && l(t).unusedTokens.push(a);
            l(t).charsLeftOver = u - c, s.length > 0 && l(t).unusedInput.push(s), l(t).bigHour === !0 && t._a[li] <= 12 && t._a[li] > 0 && (l(t).bigHour = void 0), t._a[li] = De(t._locale, t._a[li], t._meridiem), _e(t), Z(t)
        }

        function De(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function we(e) {
            var t, n, i, r, a;
            if (0 === e._f.length) return l(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) a = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], ke(t), c(t) && (a += l(t).charsLeftOver, a += 10 * l(t).unusedTokens.length, l(t).score = a, (null == i || i > a) && (i = a, n = t));
            o(e, n || t)
        }

        function xe(e) {
            if (!e._d) {
                var t = S(e._i);
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], _e(e)
            }
        }

        function Me(e) {
            var t = new h(Z(Te(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function Te(e) {
            var t = e._i,
                r = e._f;
            return e._locale = e._locale || x(e._l), null === t || void 0 === r && "" === t ? d({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new h(Z(t)) : (n(r) ? we(e) : r ? ke(e) : i(t) ? e._d = t : Se(e), e))
        }

        function Se(t) {
            var a = t._i;
            void 0 === a ? t._d = new Date : i(a) ? t._d = new Date(+a) : "string" == typeof a ? ie(t) : n(a) ? (t._a = r(a.slice(0), function(e) {
                return parseInt(e, 10)
            }), _e(t)) : "object" == typeof a ? xe(t) : "number" == typeof a ? t._d = new Date(a) : e.createFromInputFallback(t)
        }

        function Ce(e, t, n, i, r) {
            var a = {};
            return "boolean" == typeof n && (i = n, n = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = n, a._i = e, a._f = t, a._strict = i, Me(a)
        }

        function Ne(e, t, n, i) {
            return Ce(e, t, n, i, !1)
        }

        function Ye(e, t) {
            var i, r;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Ne();
            for (i = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](i)) && (i = t[r]);
            return i
        }

        function je() {
            var e = [].slice.call(arguments, 0);
            return Ye("isBefore", e)
        }

        function Ee() {
            var e = [].slice.call(arguments, 0);
            return Ye("isAfter", e)
        }

        function Le(e) {
            var t = S(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                a = t.week || 0,
                o = t.day || 0,
                s = t.hour || 0,
                u = t.minute || 0,
                l = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * s, this._days = +o + 7 * a, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = x(), this._bubble()
        }

        function Ae(e) {
            return e instanceof Le
        }

        function Fe(e, t) {
            L(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return 0 > e && (e = -e, n = "-"), n + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
            })
        }

        function Ie(e) {
            var t = (e || "").match(ti) || [],
                n = t[t.length - 1] || [],
                i = (n + "").match(xi) || ["-", 0, 0],
                r = +(60 * i[1]) + g(i[2]);
            return "+" === i[0] ? r : -r
        }

        function Oe(t, n) {
            var r, a;
            return n._isUTC ? (r = n.clone(), a = (p(t) || i(t) ? +t : +Ne(t)) - +r, r._d.setTime(+r._d + a), e.updateOffset(r, !1), r) : Ne(t).local()
        }

        function He(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Pe(t, n) {
            var i, r = this._offset || 0;
            return null != t ? ("string" == typeof t && (t = Ie(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = He(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? tt(this, Je(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : He(this)
        }

        function We(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function qe(e) {
            return this.utcOffset(0, e)
        }

        function $e(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(He(this), "m")), this
        }

        function Re() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ie(this._i)), this
        }

        function ze(e) {
            return e = e ? Ne(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
        }

        function Ue() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Be() {
            if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
            var e = {};
            if (f(e, this), e = Te(e), e._a) {
                var t = e._isUTC ? s(e._a) : Ne(e._a);
                this._isDSTShifted = this.isValid() && y(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Ge() {
            return !this._isUTC
        }

        function Ke() {
            return this._isUTC
        }

        function Xe() {
            return this._isUTC && 0 === this._offset
        }

        function Je(e, t) {
            var n, i, r, o = e,
                s = null;
            return Ae(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (s = Mi.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: 0,
                d: g(s[ui]) * n,
                h: g(s[li]) * n,
                m: g(s[ci]) * n,
                s: g(s[di]) * n,
                ms: g(s[fi]) * n
            }) : (s = Ti.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: Ve(s[2], n),
                M: Ve(s[3], n),
                d: Ve(s[4], n),
                h: Ve(s[5], n),
                m: Ve(s[6], n),
                s: Ve(s[7], n),
                w: Ve(s[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Qe(Ne(o.from), Ne(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new Le(o), Ae(e) && a(e, "_locale") && (i._locale = e._locale), i
        }

        function Ve(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Ze(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Qe(e, t) {
            var n;
            return t = Oe(t, e), e.isBefore(t) ? n = Ze(e, t) : (n = Ze(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function et(e, t) {
            return function(n, i) {
                var r, a;
                return null === i || isNaN(+i) || (te(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), a = n, n = i, i = a), n = "string" == typeof n ? +n : n, r = Je(n, i), tt(this, r, e), this
            }
        }

        function tt(t, n, i, r) {
            var a = n._milliseconds,
                o = n._days,
                s = n._months;
            r = null == r ? !0 : r, a && t._d.setTime(+t._d + a * i), o && Y(t, "Date", N(t, "Date") + o * i), s && X(t, N(t, "Month") + s * i), r && e.updateOffset(t, o || s)
        }

        function nt(e, t) {
            var n = e || Ne(),
                i = Oe(n, this).startOf("day"),
                r = this.diff(i, "days", !0),
                a = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
            return this.format(t && t[a] || this.localeData().calendar(a, this, Ne(n)))
        }

        function it() {
            return new h(this)
        }

        function rt(e, t) {
            var n;
            return t = T("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = p(e) ? e : Ne(e), +this > +e) : (n = p(e) ? +e : +Ne(e), n < +this.clone().startOf(t))
        }

        function at(e, t) {
            var n;
            return t = T("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = p(e) ? e : Ne(e), +e > +this) : (n = p(e) ? +e : +Ne(e), +this.clone().endOf(t) < n)
        }

        function ot(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        }

        function st(e, t) {
            var n;
            return t = T(t || "millisecond"), "millisecond" === t ? (e = p(e) ? e : Ne(e), +this === +e) : (n = +Ne(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        }

        function ut(e, t, n) {
            var i, r, a = Oe(e, this),
                o = 6e4 * (a.utcOffset() - this.utcOffset());
            return t = T(t), "year" === t || "month" === t || "quarter" === t ? (r = lt(this, a), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - a, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - o) / 864e5 : "week" === t ? (i - o) / 6048e5 : i), n ? r : m(r)
        }

        function lt(e, t) {
            var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                a = e.clone().add(r, "months");
            return 0 > t - a ? (n = e.clone().add(r - 1, "months"), i = (t - a) / (a - n)) : (n = e.clone().add(r + 1, "months"), i = (t - a) / (n - a)), -(r + i)
        }

        function ct() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function dt() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : I(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function ft(t) {
            var n = I(this, t || e.defaultFormat);
            return this.localeData().postformat(n)
        }

        function ht(e, t) {
            return this.isValid() ? Je({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function pt(e) {
            return this.from(Ne(), e)
        }

        function mt(e, t) {
            return this.isValid() ? Je({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function gt(e) {
            return this.to(Ne(), e)
        }

        function yt(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = x(e), null != t && (this._locale = t), this)
        }

        function vt() {
            return this._locale
        }

        function _t(e) {
            switch (e = T(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function bt(e) {
            return e = T(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        }

        function kt() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function Dt() {
            return Math.floor(+this / 1e3)
        }

        function wt() {
            return this._offset ? new Date(+this) : this._d
        }

        function xt() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function Mt() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function Tt() {
            return c(this)
        }

        function St() {
            return o({}, l(this))
        }

        function Ct() {
            return l(this).overflow
        }

        function Nt(e, t) {
            L(0, [e, e.length], 0, t)
        }

        function Yt(e, t, n) {
            return le(Ne([e, 11, 31 + t - n]), t, n).week
        }

        function jt(e) {
            var t = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function Et(e) {
            var t = le(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function Lt() {
            return Yt(this.year(), 1, 4)
        }

        function At() {
            var e = this.localeData()._week;
            return Yt(this.year(), e.dow, e.doy)
        }

        function Ft(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function It(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Ot(e) {
            return this._weekdays[e.day()]
        }

        function Ht(e) {
            return this._weekdaysShort[e.day()]
        }

        function Pt(e) {
            return this._weekdaysMin[e.day()]
        }

        function Wt(e) {
            var t, n, i;
            for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = Ne([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        }

        function qt(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = It(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function $t(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function Rt(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        }

        function zt(e, t) {
            L(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Ut(e, t) {
            return t._meridiemParse
        }

        function Bt(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Gt(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Kt(e, t) {
            t[fi] = g(1e3 * ("0." + e))
        }

        function Xt() {
            return this._isUTC ? "UTC" : ""
        }

        function Jt() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Vt(e) {
            return Ne(1e3 * e)
        }

        function Zt() {
            return Ne.apply(null, arguments).parseZone()
        }

        function Qt(e, t, n) {
            var i = this._calendar[e];
            return "function" == typeof i ? i.call(t, n) : i
        }

        function en(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function tn() {
            return this._invalidDate
        }

        function nn(e) {
            return this._ordinal.replace("%d", e)
        }

        function rn(e) {
            return e
        }

        function an(e, t, n, i) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
        }

        function on(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        }

        function sn(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function un(e, t, n, i) {
            var r = x(),
                a = s().set(i, t);
            return r[n](a, e)
        }

        function ln(e, t, n, i, r) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return un(e, t, n, r);
            var a, o = [];
            for (a = 0; i > a; a++) o[a] = un(e, a, n, r);
            return o
        }

        function cn(e, t) {
            return ln(e, t, "months", 12, "month")
        }

        function dn(e, t) {
            return ln(e, t, "monthsShort", 12, "month")
        }

        function fn(e, t) {
            return ln(e, t, "weekdays", 7, "day")
        }

        function hn(e, t) {
            return ln(e, t, "weekdaysShort", 7, "day")
        }

        function pn(e, t) {
            return ln(e, t, "weekdaysMin", 7, "day")
        }

        function mn() {
            var e = this._data;
            return this._milliseconds = Xi(this._milliseconds), this._days = Xi(this._days), this._months = Xi(this._months), e.milliseconds = Xi(e.milliseconds), e.seconds = Xi(e.seconds), e.minutes = Xi(e.minutes), e.hours = Xi(e.hours), e.months = Xi(e.months), e.years = Xi(e.years), this
        }

        function gn(e, t, n, i) {
            var r = Je(t, n);
            return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
        }

        function yn(e, t) {
            return gn(this, e, t, 1)
        }

        function vn(e, t) {
            return gn(this, e, t, -1)
        }

        function _n(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function bn() {
            var e, t, n, i, r, a = this._milliseconds,
                o = this._days,
                s = this._months,
                u = this._data;
            return a >= 0 && o >= 0 && s >= 0 || 0 >= a && 0 >= o && 0 >= s || (a += 864e5 * _n(Dn(s) + o), o = 0, s = 0), u.milliseconds = a % 1e3, e = m(a / 1e3), u.seconds = e % 60, t = m(e / 60), u.minutes = t % 60, n = m(t / 60), u.hours = n % 24, o += m(n / 24), r = m(kn(o)), s += r, o -= _n(Dn(r)), i = m(s / 12), s %= 12, u.days = o, u.months = s, u.years = i, this
        }

        function kn(e) {
            return 4800 * e / 146097
        }

        function Dn(e) {
            return 146097 * e / 4800
        }

        function wn(e) {
            var t, n, i = this._milliseconds;
            if (e = T(e), "month" === e || "year" === e) return t = this._days + i / 864e5, n = this._months + kn(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(Dn(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function xn() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
        }

        function Mn(e) {
            return function() {
                return this.as(e)
            }
        }

        function Tn(e) {
            return e = T(e), this[e + "s"]()
        }

        function Sn(e) {
            return function() {
                return this._data[e]
            }
        }

        function Cn() {
            return m(this.days() / 7)
        }

        function Nn(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }

        function Yn(e, t, n) {
            var i = Je(e).abs(),
                r = dr(i.as("s")),
                a = dr(i.as("m")),
                o = dr(i.as("h")),
                s = dr(i.as("d")),
                u = dr(i.as("M")),
                l = dr(i.as("y")),
                c = r < fr.s && ["s", r] || 1 === a && ["m"] || a < fr.m && ["mm", a] || 1 === o && ["h"] || o < fr.h && ["hh", o] || 1 === s && ["d"] || s < fr.d && ["dd", s] || 1 === u && ["M"] || u < fr.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
            return c[2] = t, c[3] = +e > 0, c[4] = n, Nn.apply(null, c)
        }

        function jn(e, t) {
            return void 0 === fr[e] ? !1 : void 0 === t ? fr[e] : (fr[e] = t, !0)
        }

        function En(e) {
            var t = this.localeData(),
                n = Yn(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function Ln() {
            var e, t, n, i = hr(this._milliseconds) / 1e3,
                r = hr(this._days),
                a = hr(this._months);
            e = m(i / 60), t = m(e / 60), i %= 60, e %= 60, n = m(a / 12), a %= 12;
            var o = n,
                s = a,
                u = r,
                l = t,
                c = e,
                d = i,
                f = this.asSeconds();
            return f ? (0 > f ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (u ? u + "D" : "") + (l || c || d ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
        }
        var An, Fn, In = e.momentProperties = [],
            On = !1,
            Hn = {},
            Pn = {},
            Wn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            qn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            $n = {},
            Rn = {},
            zn = /\d/,
            Un = /\d\d/,
            Bn = /\d{3}/,
            Gn = /\d{4}/,
            Kn = /[+-]?\d{6}/,
            Xn = /\d\d?/,
            Jn = /\d{1,3}/,
            Vn = /\d{1,4}/,
            Zn = /[+-]?\d{1,6}/,
            Qn = /\d+/,
            ei = /[+-]?\d+/,
            ti = /Z|[+-]\d\d:?\d\d/gi,
            ni = /[+-]?\d+(\.\d{1,3})?/,
            ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ri = {},
            ai = {},
            oi = 0,
            si = 1,
            ui = 2,
            li = 3,
            ci = 4,
            di = 5,
            fi = 6;
        L("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), L("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), L("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), M("month", "M"), P("M", Xn), P("MM", Xn, Un), P("MMM", ii), P("MMMM", ii), $(["M", "MM"], function(e, t) {
            t[si] = g(e) - 1
        }), $(["MMM", "MMMM"], function(e, t, n, i) {
            var r = n._locale.monthsParse(e, i, n._strict);
            null != r ? t[si] = r : l(n).invalidMonth = e
        });
        var hi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            pi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            mi = {};
        e.suppressDeprecationWarnings = !1;
        var gi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            yi = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            vi = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            _i = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), L(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), L(0, ["YYYY", 4], 0, "year"), L(0, ["YYYYY", 5], 0, "year"), L(0, ["YYYYYY", 6, !0], 0, "year"), M("year", "y"), P("Y", ei), P("YY", Xn, Un), P("YYYY", Vn, Gn), P("YYYYY", Zn, Kn), P("YYYYYY", Zn, Kn), $(["YYYYY", "YYYYYY"], oi), $("YYYY", function(t, n) {
            n[oi] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t)
        }), $("YY", function(t, n) {
            n[oi] = e.parseTwoDigitYear(t)
        }), e.parseTwoDigitYear = function(e) {
            return g(e) + (g(e) > 68 ? 1900 : 2e3)
        };
        var bi = C("FullYear", !1);
        L("w", ["ww", 2], "wo", "week"), L("W", ["WW", 2], "Wo", "isoWeek"), M("week", "w"), M("isoWeek", "W"), P("w", Xn), P("ww", Xn, Un), P("W", Xn), P("WW", Xn, Un), R(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = g(e)
        });
        var ki = {
            dow: 0,
            doy: 6
        };
        L("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), M("dayOfYear", "DDD"), P("DDD", Jn), P("DDDD", Bn), $(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = g(e)
        }), e.ISO_8601 = function() {};
        var Di = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ne.apply(null, arguments);
                return this > e ? this : e
            }),
            wi = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ne.apply(null, arguments);
                return e > this ? this : e
            });
        Fe("Z", ":"), Fe("ZZ", ""), P("Z", ti), P("ZZ", ti), $(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Ie(e)
        });
        var xi = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Mi = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            Ti = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Je.fn = Le.prototype;
        var Si = et(1, "add"),
            Ci = et(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Ni = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        L(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), L(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Nt("gggg", "weekYear"), Nt("ggggg", "weekYear"), Nt("GGGG", "isoWeekYear"), Nt("GGGGG", "isoWeekYear"), M("weekYear", "gg"), M("isoWeekYear", "GG"), P("G", ei), P("g", ei), P("GG", Xn, Un), P("gg", Xn, Un), P("GGGG", Vn, Gn), P("gggg", Vn, Gn), P("GGGGG", Zn, Kn), P("ggggg", Zn, Kn), R(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = g(e)
        }), R(["gg", "GG"], function(t, n, i, r) {
            n[r] = e.parseTwoDigitYear(t)
        }), L("Q", 0, 0, "quarter"), M("quarter", "Q"), P("Q", zn), $("Q", function(e, t) {
            t[si] = 3 * (g(e) - 1)
        }), L("D", ["DD", 2], "Do", "date"), M("date", "D"), P("D", Xn), P("DD", Xn, Un), P("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), $(["D", "DD"], ui), $("Do", function(e, t) {
            t[ui] = g(e.match(Xn)[0], 10)
        });
        var Yi = C("Date", !0);
        L("d", 0, "do", "day"), L("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), L("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), L("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), L("e", 0, 0, "weekday"), L("E", 0, 0, "isoWeekday"), M("day", "d"), M("weekday", "e"), M("isoWeekday", "E"), P("d", Xn), P("e", Xn), P("E", Xn), P("dd", ii), P("ddd", ii), P("dddd", ii), R(["dd", "ddd", "dddd"], function(e, t, n) {
            var i = n._locale.weekdaysParse(e);
            null != i ? t.d = i : l(n).invalidWeekday = e
        }), R(["d", "e", "E"], function(e, t, n, i) {
            t[i] = g(e)
        });
        var ji = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Ei = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Li = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        L("H", ["HH", 2], 0, "hour"), L("h", ["hh", 2], 0, function() {
            return this.hours() % 12 || 12
        }), zt("a", !0), zt("A", !1), M("hour", "h"), P("a", Ut), P("A", Ut), P("H", Xn), P("h", Xn), P("HH", Xn, Un), P("hh", Xn, Un), $(["H", "HH"], li), $(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), $(["h", "hh"], function(e, t, n) {
            t[li] = g(e), l(n).bigHour = !0
        });
        var Ai = /[ap]\.?m?\.?/i,
            Fi = C("Hours", !0);
        L("m", ["mm", 2], 0, "minute"), M("minute", "m"), P("m", Xn), P("mm", Xn, Un), $(["m", "mm"], ci);
        var Ii = C("Minutes", !1);
        L("s", ["ss", 2], 0, "second"), M("second", "s"), P("s", Xn), P("ss", Xn, Un), $(["s", "ss"], di);
        var Oi = C("Seconds", !1);
        L("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), L(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), L(0, ["SSS", 3], 0, "millisecond"), L(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), L(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), L(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), L(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), L(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), L(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), M("millisecond", "ms"), P("S", Jn, zn), P("SS", Jn, Un), P("SSS", Jn, Bn);
        var Hi;
        for (Hi = "SSSS"; Hi.length <= 9; Hi += "S") P(Hi, Qn);
        for (Hi = "S"; Hi.length <= 9; Hi += "S") $(Hi, Kt);
        var Pi = C("Milliseconds", !1);
        L("z", 0, 0, "zoneAbbr"), L("zz", 0, 0, "zoneName");
        var Wi = h.prototype;
        Wi.add = Si, Wi.calendar = nt, Wi.clone = it, Wi.diff = ut, Wi.endOf = bt, Wi.format = ft, Wi.from = ht, Wi.fromNow = pt, Wi.to = mt, Wi.toNow = gt, Wi.get = j, Wi.invalidAt = Ct, Wi.isAfter = rt, Wi.isBefore = at, Wi.isBetween = ot, Wi.isSame = st, Wi.isValid = Tt, Wi.lang = Ni, Wi.locale = yt, Wi.localeData = vt, Wi.max = wi, Wi.min = Di, Wi.parsingFlags = St, Wi.set = j, Wi.startOf = _t, Wi.subtract = Ci, Wi.toArray = xt, Wi.toObject = Mt, Wi.toDate = wt, Wi.toISOString = dt, Wi.toJSON = dt, Wi.toString = ct, Wi.unix = Dt, Wi.valueOf = kt, Wi.year = bi, Wi.isLeapYear = ue, Wi.weekYear = jt, Wi.isoWeekYear = Et, Wi.quarter = Wi.quarters = Ft, Wi.month = J, Wi.daysInMonth = V, Wi.week = Wi.weeks = he, Wi.isoWeek = Wi.isoWeeks = pe, Wi.weeksInYear = At, Wi.isoWeeksInYear = Lt, Wi.date = Yi, Wi.day = Wi.days = qt, Wi.weekday = $t, Wi.isoWeekday = Rt, Wi.dayOfYear = ge, Wi.hour = Wi.hours = Fi, Wi.minute = Wi.minutes = Ii, Wi.second = Wi.seconds = Oi, Wi.millisecond = Wi.milliseconds = Pi, Wi.utcOffset = Pe, Wi.utc = qe, Wi.local = $e, Wi.parseZone = Re, Wi.hasAlignedHourOffset = ze, Wi.isDST = Ue, Wi.isDSTShifted = Be, Wi.isLocal = Ge, Wi.isUtcOffset = Ke, Wi.isUtc = Xe, Wi.isUTC = Xe, Wi.zoneAbbr = Xt, Wi.zoneName = Jt, Wi.dates = ee("dates accessor is deprecated. Use date instead.", Yi), Wi.months = ee("months accessor is deprecated. Use month instead", J), Wi.years = ee("years accessor is deprecated. Use year instead", bi), Wi.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", We);
        var qi = Wi,
            $i = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Ri = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            zi = "Invalid date",
            Ui = "%d",
            Bi = /\d{1,2}/,
            Gi = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Ki = v.prototype;
        Ki._calendar = $i, Ki.calendar = Qt, Ki._longDateFormat = Ri, Ki.longDateFormat = en, Ki._invalidDate = zi, Ki.invalidDate = tn, Ki._ordinal = Ui, Ki.ordinal = nn, Ki._ordinalParse = Bi, Ki.preparse = rn, Ki.postformat = rn, Ki._relativeTime = Gi, Ki.relativeTime = an, Ki.pastFuture = on, Ki.set = sn, Ki.months = B, Ki._months = hi, Ki.monthsShort = G, Ki._monthsShort = pi, Ki.monthsParse = K, Ki.week = ce, Ki._week = ki, Ki.firstDayOfYear = fe, Ki.firstDayOfWeek = de, Ki.weekdays = Ot, Ki._weekdays = ji, Ki.weekdaysMin = Pt, Ki._weekdaysMin = Li, Ki.weekdaysShort = Ht, Ki._weekdaysShort = Ei, Ki.weekdaysParse = Wt, Ki.isPM = Bt, Ki._meridiemParse = Ai, Ki.meridiem = Gt, D("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), e.lang = ee("moment.lang is deprecated. Use moment.locale instead.", D), e.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", x);
        var Xi = Math.abs,
            Ji = Mn("ms"),
            Vi = Mn("s"),
            Zi = Mn("m"),
            Qi = Mn("h"),
            er = Mn("d"),
            tr = Mn("w"),
            nr = Mn("M"),
            ir = Mn("y"),
            rr = Sn("milliseconds"),
            ar = Sn("seconds"),
            or = Sn("minutes"),
            sr = Sn("hours"),
            ur = Sn("days"),
            lr = Sn("months"),
            cr = Sn("years"),
            dr = Math.round,
            fr = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            hr = Math.abs,
            pr = Le.prototype;
        pr.abs = mn, pr.add = yn, pr.subtract = vn, pr.as = wn, pr.asMilliseconds = Ji, pr.asSeconds = Vi, pr.asMinutes = Zi, pr.asHours = Qi, pr.asDays = er, pr.asWeeks = tr, pr.asMonths = nr, pr.asYears = ir, pr.valueOf = xn, pr._bubble = bn, pr.get = Tn, pr.milliseconds = rr, pr.seconds = ar, pr.minutes = or, pr.hours = sr, pr.days = ur, pr.weeks = Cn, pr.months = lr, pr.years = cr, pr.humanize = En, pr.toISOString = Ln, pr.toString = Ln, pr.toJSON = Ln, pr.locale = yt, pr.localeData = vt, pr.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ln), pr.lang = Ni, L("X", 0, 0, "unix"), L("x", 0, 0, "valueOf"), P("x", ei), P("X", ni), $("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), $("x", function(e, t, n) {
            n._d = new Date(g(e))
        }), e.version = "2.10.6", t(Ne), e.fn = qi, e.min = je, e.max = Ee, e.utc = s, e.unix = Vt, e.months = cn, e.isDate = i, e.locale = D, e.invalid = d, e.duration = Je, e.isMoment = p, e.weekdays = fn, e.parseZone = Zt, e.localeData = x, e.isDuration = Ae, e.monthsShort = dn, e.weekdaysMin = pn, e.defineLocale = w, e.weekdaysShort = hn, e.normalizeUnits = T, e.relativeTimeThreshold = jn;
        var mr = e;
        return mr
    }),
    //! moment.js locale configuration
    //! locale : norwegian bokmÃ¥l (nb)
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(require("../moment")) : "function" == typeof define && define.amd ? define(["moment"], t) : t(e.moment)
    }(this, function(e) {
        "use strict";
        var t = e.defineLocale("no-NB", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
            weekdaysShort: "s\xf8n_man_tirs_ons_tors_fre_l\xf8r".split("_"),
            weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i g\xe5r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en m\xe5ned",
                MM: "%d m\xe5neder",
                y: "ett \xe5r",
                yy: "%d \xe5r"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["moment"], e) : "object" == typeof exports ? module.exports = e(require("../moment")) : e(("undefined" != typeof global ? global : this).moment)
    }(function(e) {
        function t(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return i += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return i += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                case "dd":
                    return i += 1 === e ? "dan" : "dni";
                case "MM":
                    return i += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                case "yy":
                    return i += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
            }
        }
        return e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[v\u010deraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[prej\u0161nja] dddd [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prej\u0161nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u010dez %s",
                past: "%s nazaj",
                s: "nekaj sekund",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "en dan",
                dd: t,
                M: "en mesec",
                MM: t,
                y: "eno leto",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    //! moment.js locale configuration
    //! locale : dutch (nl)
    //! author : Joris RÃ¶ling : https://github.com/jjupiter
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(require("../moment")) : "function" == typeof define && define.amd ? define(["moment"], t) : t(e.moment)
    }(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            i = e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, i) {
                    return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                },
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "\xe9\xe9n minuut",
                    mm: "%d minuten",
                    h: "\xe9\xe9n uur",
                    hh: "%d uur",
                    d: "\xe9\xe9n dag",
                    dd: "%d dagen",
                    M: "\xe9\xe9n maand",
                    MM: "%d maanden",
                    y: "\xe9\xe9n jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return i
    }),
    function(e) {
        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */
        e.fn.visible = function(t, n) {
            var i = e(this).eq(0),
                r = i.get(0),
                a = e(window),
                o = a.scrollTop(),
                s = o + a.height(),
                u = i.offset().top,
                l = u + i.height(),
                c = t === !0 ? l : u,
                d = t === !0 ? u : l,
                f = n === !0 ? r.offsetWidth * r.offsetHeight : !0;
            return !!f && s >= d && c >= o
        }
    }(jQuery), moment.locale($("html").attr("lang")), $(document).ready(function() {
        $('input[name="booking[booked_from]"]').on("click", function(e) {
            $(".summary").slideUp("fast");
            var t = $(this).parents("li");
            if (("" == $("#timepicker").attr("data-max-slots") || parseInt($("#timepicker").attr("data-max-slots")) > 1) && 1 == $("#timepicker li.selected").length && $("#timepicker li.selected").index() < t.index()) {
                var n = t.index("#timepicker li"),
                    i = $("#timepicker li.selected").index("#timepicker li");
                $("#timepicker li:gt(" + i + "):lt(" + n + ")").each(function(e, t) {
                    $(t).index("#timepicker li") > i && $(t).index("#timepicker li") < n && $(t).addClass("selected")
                }), "" != $("#timepicker").attr("data-max-slots") && $("#timepicker li.selected").length + 1 > parseInt($("#timepicker").attr("data-max-slots")) && ($(".intervals li").removeClass("selected"), $("#max_slots_warning").slideDown("slow"))
            } else $(".intervals li.selected").removeClass("selected");
            $('input[name="booking[booked_to]"]').val(t.attr("data-timestamp-end")), t.addClass("selected"), $(".intervals li.selected").each(function(e, n) {
                return e > 0 && $(n).data("timestamp") != lastEnd ? ($(".intervals li.selected").removeClass("selected"), void t.addClass("selected")) : void(lastEnd = $(n).data("timestamp-end"))
            });
            var r = moment($(".intervals li.selected").first().attr("data-timestamp"), "YYYY-MM-DD HH:mm:ss"),
                a = moment(t.attr("data-timestamp-end"), "YYYY-MM-DD HH:mm:ss");
            return $("#summary #summary_booking_time").html(r.format("LLLL") + " " + $("#summary #summary_booking_time").attr("data-i18n-to") + " " + a.format($("#timepicker").attr("data-time-format"))), $("#summary").slideDown("slow", function() {
                $("#step-up").visible() || $("#step-up")[0].scrollIntoView(!1)
            }), $(".intervals li.selected").length > 1 ? ($(".intervals li.selected").first().find("input").prop("checked", !0), e.preventDefault(), e.stopImmediatePropagation(), !1) : void 0
        }), $(".dropdownPanel").css("width", $(".dropdownLabel").innerWidth()), $(".dropdownLabel").click(function() {
            $(this).parent().find(".dropdownPanel").slideToggle("slow")
        }), $("#weekday_available table th").click(function() {
            $(this).siblings().removeClass("selected"), $(this).addClass("selected"), $(this).parents("table").find("td.selected").removeClass("selected"), $(this).parents("table").find("td:eq(" + $(this).index() + ")").addClass("selected")
        }), $("ul#toggle-service").length > 0 && (active_bottom = $("ul#toggle-service li.active").position().top + $("ul#toggle-service li.active").outerHeight(!0), table_bottom = $("#table").position().top + $("#table").outerHeight(!0), active_bottom > table_bottom && $("#table").css("padding-bottom", active_bottom - table_bottom + "px")), $("#select_booking_time").submit(function() {
            return 0 == $('input[name="booking[booked_from]"]:checked').length ? ($("#no_selection").slideDown("slow"), !1) : void 0
        }), $('input[data-validate="date"]').on("change", verifyDate), $("#new_booking").submit(function(e) {
            $(".errors").slideUp("fast");
            var t = !1;
            return $(".field_with_errors").removeClass("field_with_errors"), $('#new_booking input[data-required="true"]:visible').each(function() {
                $(this).val() || (t || ($(this).val("").focus(), t = !0), $(this).val("").parent().addClass("field_with_errors"))
            }), t ? ($(".errors").slideDown("slow"), e.preventDefault(), !1) : void 0
        })
    });