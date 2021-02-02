/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function(e) {
            return null != e && e === e.window
        },
        y = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in y) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
            return new b.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.3.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && b.isPlainObject(n) ? n : {}, a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, b.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || p.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (T(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = me((function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== T) m = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + ye(h[s]);
                        y = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (y) try {
                        return L.apply(r, m.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se((function(t) {
                return t = +t, se((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue((function(e) {
                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, y = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                })), ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                }))), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                    n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", W)
                })), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, d) : d
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return oe(t, d, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
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
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                m = !u && !s,
                                x = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [T, d, x];
                                            break
                                        }
                                } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                    for (;
                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
                        })) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b] ? se((function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: se((function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    })),
                    contains: se((function(e) {
                        return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    })),
                    lang: se((function(e) {
                        return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he((function() {
                        return [0]
                    })),
                    last: he((function(e, t) {
                        return [t - 1]
                    })),
                    eq: he((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: he((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: he((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: he((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    })),
                    gt: he((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ve() {}

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function we(e, t, n, r, i, o) {
            return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se((function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? g : be(g, p, e, s, u),
                    y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, u), r)
                    for (l = be(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else y = be(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : L.apply(a, y)
            }))
        }

        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me((function(e) {
                    return e === t
                }), s, !0), f = me((function(e) {
                    return O(t, e) > -1
                }), s, !0), p = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return we(u > 1 && xe(p), u > 1 && ye(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && ye(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ce(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, v, y = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                if (v(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !v && f) && y--, o && x.push(f))
                    }
                    if (y += m, n && m !== y) {
                        for (h = 0; v = t[h++];) v(x, b, a, s);
                        if (o) {
                            if (y > 0)
                                for (; m--;) x[m] || b[m] || (b[m] = j.call(u));
                            b = be(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }, s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = Te(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ce(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ye(u))) return L.apply(n, i), n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue((function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        })), ue((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || le("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || le("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function(e) {
            return null == e.getAttribute("disabled")
        })) || le(P, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), oe
    }(e);
    b.find = C, b.expr = C.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = C.uniqueSort, b.text = C.getText, b.isXMLDoc = C.isXML, b.contains = C.contains, b.escapeSelector = C.escape;
    var E = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && b(e).is(n)) break;
                    r.push(e)
                } return r
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = b.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, t, n) {
        return g(t) ? b.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? b.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? b.grep(e, (function(e) {
            return u.call(t, e) > -1 !== n
        })) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, b.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (b.contains(i[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), N.test(i[1]) && b.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, j = b(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && b(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(b(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, (function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (H[e] || b.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(P) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        b.each(n, (function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        }))
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return b.each(arguments, (function(e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    })), this
                },
                has: function(e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, b.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return b.Deferred((function(t) {
                            b.each(n, (function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, M, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, M, i), a(o, n, R, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred((function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : M, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : M)), n[2][3].add(a(0, e, g(r) ? r : R))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, i) : i
                    }
                },
                o = {};
            return b.each(n, (function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add((function() {
                    r = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            })), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = b.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            for (; n--;) I(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var $ = b.Deferred();

    function B() {
        r.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), b.ready()
    }
    b.fn.ready = function(e) {
        return $.then(e).catch((function(e) {
            b.readyException(e)
        })), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || $.resolveWith(r, [b]))
        }
    }), b.ready.then = $.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(b.ready) : (r.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var F = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(b(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(_, "ms-").replace(z, X)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = b.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), b.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = U(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : F(this, (function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Q.get(o, e))) return n;
                    if (void 0 !== (n = Z(o, e))) return n
                } else this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), b.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, b.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                b.dequeue(e, t)
            }), o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: b.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }))
            })
        }
    }), b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                b.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = b.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display")
        },
        ie = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function oe(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return b.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = (b.cssNumber[t] || "px" !== l && +u) && te.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, b.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ae[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ae[r] = i, i)
    }

    function ue(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = se(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                re(this) ? b(this).show() : b(this).hide()
            }))
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? b.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var ge = /<|&#?\w+;/;

    function ve(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(o) || ["", ""])[1].toLowerCase(), u = pe[s] || pe._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            b.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && b.inArray(o, r) > -1) i && i.push(o);
            else if (l = b.contains(o.ownerDocument, o), a = de(f.appendChild(o), "script"), l && he(a), n)
            for (c = 0; o = a[c++];) fe.test(o.type || "") && n.push(o);
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ye = r.documentElement,
        me = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return b().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = b.guid++)), e.each((function() {
            b.event.add(this, t, i, r, n)
        }))
    }
    b.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && b.find.matchesSelector(ye, i), n.guid || (n.guid = b.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && b.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), b.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = b.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || b.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = b.event.fix(e),
                u = new Array(arguments.length),
                l = (Y.get(this, "events") || {})[s.type] || [],
                c = b.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = b.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ce() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
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
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || b.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), b.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function() {
                b.event.remove(this, e, n, t)
            }))
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) b.event.add(t, i, l[i][n]);
            Q.hasData(e) && (s = Q.access(e), u = b.extend({}, s), Q.set(t, u))
        }
    }

    function He(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Oe(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            v = t[0],
            y = g(v);
        if (y || p > 1 && "string" == typeof v && !h.checkClone && De.test(v)) return e.each((function(i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r)
        }));
        if (p && (o = (i = ve(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = b.map(de(i, "script"), je)).length; f < p; f++) l = i, f !== d && (l = b.clone(l, !0, !0), u && b.merge(s, de(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, qe), f = 0; f < u; f++) l = s[f], fe.test(l.type || "") && !Y.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(l.src) : m(l.textContent.replace(Ne, ""), c, l))
        }
        return e
    }

    function Pe(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(de(r)), r.parentNode && (n && b.contains(r.ownerDocument, r) && he(de(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = b.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = de(s), r = 0, i = (o = de(e)).length; r < i; r++) He(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || de(e), a = a || de(s), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, s);
            return (a = de(s, "script")).length > 0 && he(a, !u && de(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return F(this, (function(e) {
                return void 0 === e ? b.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Oe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(de(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return b.clone(this, e, t)
            }))
        },
        html: function(e) {
            return F(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, (function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(de(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        b.fn[e] = function(e) {
            for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), b(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (a = b.style(e, t)), !h.pixelBoxStyles() && Me.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", ye.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        _e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "Moz", "ms"],
        Ue = r.createElement("div").style;

    function Ve(e) {
        var t = b.cssProps[e];
        return t || (t = b.cssProps[e] = function(e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ue) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += b.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= b.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= b.css(e, "border" + ne[a] + "Width", !0, i))) : (u += b.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += b.css(e, "border" + ne[a] + "Width", !0, i) : s += b.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function Qe(e, t, n) {
        var r = Re(e),
            i = We(e, t, r),
            o = "border-box" === b.css(e, "boxSizing", !1, r),
            a = o;
        if (Me.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === b.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ye(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
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
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t),
                    u = Fe.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = b.cssHooks[t] || b.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (b.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = U(t);
            return Fe.test(t) || (t = Ve(s)), (a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), b.each(["height", "width"], (function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Be.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, r) : ie(e, _e, (function() {
                    return Qe(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var i, o = Re(e),
                    a = "border-box" === b.css(e, "boxSizing", !1, o),
                    s = r && Ye(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, "border", !1, o) - .5)), s && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ge(0, n, s)
            }
        }
    })), b.cssHooks.marginLeft = $e(h.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ge)
    })), b.fn.extend({
        css: function(e, t) {
            return F(this, (function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = b.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), b.Tween = Je, Je.prototype = {
        constructor: Je,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Je.prototype.init, b.fx.step = {};
    var Ke, Ze, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function nt() {
        Ze && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, b.fx.interval), b.fx.tick())
    }

    function rt() {
        return e.setTimeout((function() {
            Ke = void 0
        })), Ke = Date.now()
    }

    function it(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var r, i = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function at(e, t, n) {
        var r, i, o = 0,
            a = at.prefilters.length,
            s = b.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = Ke || rt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ke || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = b.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = at.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return b.map(c, ot, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    b.Animation = b.extend(at, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && re(e),
                    v = Y.get(e, "fxshow");
                for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always((function() {
                        p.always((function() {
                            a.unqueued--, b.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), t)
                    if (i = t[r], et.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || b.style(e, r)
                    } if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = b.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = b.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (p.done((function() {
                            h.display = l
                        })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && ue([e], !0), p.done((function() {
                        for (r in g || ue([e]), Y.remove(e, "fxshow"), d) b.style(e, r, d[r])
                    }))), u = ot(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), b.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
            }, r
        }, b.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = b.isEmptyObject(e),
                    o = b.speed(t, n, r),
                    a = function() {
                        var t = at(this, b.extend({}, e), o);
                        (i || Y.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = b.timers,
                        a = Y.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && tt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || b.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = Y.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = b.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, b.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), b.each(["toggle", "show", "hide"], (function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(it(t, !0), e, r, i)
            }
        })), b.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            b.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), b.timers = [], b.fx.tick = function() {
            var e, t = 0,
                n = b.timers;
            for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), Ke = void 0
        }, b.fx.timer = function(e) {
            b.timers.push(e), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            Ze || (Ze = !0, nt())
        }, b.fx.stop = function() {
            Ze = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(t, n) {
            return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            }))
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var st, ut = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return F(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                b.removeAttr(this, e)
            }))
        }
    }), b.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), st = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ut[t] || b.find.attr;
        ut[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ut[a], ut[a] = i, i = null != n(e, t, r) ? a : null, ut[a] = o), i
        }
    }));
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(P) || []).join(" ")
    }

    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function dt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return F(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[b.propFix[e] || e]
            }))
        }
    }), b.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, i = b.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        b.propFix[this.toLowerCase()] = this
    })), b.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each((function(t) {
                b(this).addClass(e.call(this, t, pt(this)))
            }));
            if ((t = dt(e)).length)
                for (; n = this[u++];)
                    if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each((function(t) {
                b(this).removeClass(e.call(this, t, pt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = dt(e)).length)
                for (; n = this[u++];)
                    if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                b(this).toggleClass(e.call(this, n, pt(this), t), t)
            })) : this.each((function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = b(this), a = dt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = pt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + ft(pt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : ft(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--;)((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], (function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, h.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, y = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[b.expando] ? t : new b.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : b.makeArray(n, [t]), d = b.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !v(i)) {
                    for (l = d.delegateType || m, gt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) y.push(s), u = s;
                    u === (i.ownerDocument || r) && y.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = y[a++]) && !t.isPropagationStopped();) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (Y.get(s, "events") || {})[t.type] && Y.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && V(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), n) || !V(i) || c && g(i[m]) && !v(i) && ((u = i[c]) && (i[c] = null), b.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, vt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, vt), b.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(r, null, t)
        }
    }), b.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                b.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    }), h.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    }));
    var yt = e.location,
        mt = Date.now(),
        xt = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n
    };
    var bt = /\[\]$/,
        wt = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) b.each(t, (function(t, i) {
            n || bt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
            })).map((function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            })).get()
        }
    });
    var kt = /%20/g,
        St = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        At = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        qt = {},
        Lt = {},
        Ht = "*/".concat("*"),
        Ot = r.createElement("a");

    function Pt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(P) || [];
            if (g(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mt(e, t, n, r) {
        var i = {},
            o = e === Lt;

        function a(s) {
            var u;
            return i[s] = !0, b.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            })), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Rt(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(!0, e, r), e
    }
    Ot.href = yt.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
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
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, b.ajaxSettings), t) : Rt(b.ajaxSettings, e)
        },
        ajaxPrefilter: Pt(qt),
        ajaxTransport: Pt(Lt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = b.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                y = b.Deferred(),
                m = b.Callbacks("once memory"),
                x = h.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Nt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (y.promise(E), h.url = ((t || h.url || yt.href) + "").replace(jt, yt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ot.protocol + "//" + Ot.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = b.param(h.data, h.traditional)), Mt(qt, h, n, E), c) return E;
            for (p in (f = b.event && h.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !At.test(h.type), o = h.url.replace(St, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (xt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Dt, "$1"), d = (xt.test(o) ? "&" : "?") + "_=" + mt++ + d), h.url = o + d), h.ifModified && (b.lastModified[o] && E.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && E.setRequestHeader("If-None-Match", b.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = Mt(Lt, h, n, E)) {
                if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                    E.abort("timeout")
                }), h.timeout));
                try {
                    c = !1, i.send(w, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, w, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, E, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (b.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, l = !(d = w.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --b.active || b.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], (function(e, t) {
        b[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    })), b._evalUrl = function(e) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each((function(t) {
                b(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = g(e);
            return this.each((function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                b(this).replaceWith(this.childNodes)
            })), this
        }
    }), b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Wt = b.ajaxSettings.xhr();
    h.cors = !!Wt && "withCredentials" in Wt, h.ajax = Wt = !!Wt, b.ajaxTransport((function(t) {
        var n, r;
        if (h.cors || Wt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(It[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), b.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), b.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, o) {
                t = b("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var $t = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || b.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + i) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || b.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === o ? b(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && g(o) && o(a[0]), a = o = void 0
        })), "script"
    })), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, a), a && a.length && b(a).remove(), b.merge([], o.childNodes)));
        var i, o, a
    }, b.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = ft(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, (function(t) {
            return e === t.elem
        })).length
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"),
                c = b(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = b.css(e, "top"), u = b.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, b.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                b.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0), i.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", !0),
                    left: t.left - i.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ye
            }))
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(r) {
            return F(this, (function(e, r, i) {
                var o;
                if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }), e, r, arguments.length)
        }
    })), b.each(["top", "left"], (function(e, t) {
        b.cssHooks[t] = $e(h.pixelPosition, (function(e, n) {
            if (n) return n = We(e, t), Me.test(n) ? b(e).position()[t] + "px" : n
        }))
    })), b.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            b.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return F(this, (function(t, n, i) {
                    var o;
                    return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }), t, a ? i : void 0, a)
            }
        }))
    })), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), b.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), b.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, i
    }, b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = D, b.isFunction = g, b.isWindow = v, b.camelCase = U, b.type = x, b.now = Date.now, b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return b
    }));
    var Ft = e.jQuery,
        _t = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = _t), t && e.jQuery === b && (e.jQuery = Ft), b
    }, t || (e.jQuery = e.$ = b), b
}));
/*!
 * Bootstrap v4.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "popper.js", "jquery"], e) : e(t.bootstrap = {}, t.Popper, t.jQuery)
}(this, (function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            })))), i.forEach((function(e) {
                var i, o, r;
                i = t, r = n[o = e], o in i ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[o] = r
            }))
        }
        return t
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            return e && document.querySelector(e) ? e : null
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = n(t).css("transition-duration"),
                i = n(t).css("transition-delay"),
                o = parseFloat(e),
                r = parseFloat(i);
            return o || r ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(i))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            n(t).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && a.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    n.fn.emulateTransitionEnd = function(t) {
        var e = this,
            i = !1;
        return n(this).one(a.TRANSITION_END, (function() {
            i = !0
        })), setTimeout((function() {
            i || a.triggerTransitionEnd(e)
        }), t), this
    }, n.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(t) {
            if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert",
        c = "bs.alert",
        h = "." + c,
        u = n.fn[l],
        f = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + ".data-api"
        },
        d = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() {
                n.removeData(this._element, c), this._element = null
            }, e._getRootElement = function(t) {
                var e = a.getSelectorFromElement(t),
                    i = !1;
                return e && (i = document.querySelector(e)), i || (i = n(t).closest(".alert")[0]), i
            }, e._triggerCloseEvent = function(t) {
                var e = n.Event(f.CLOSE);
                return n(t).trigger(e), e
            }, e._removeElement = function(t) {
                var e = this;
                if (n(t).removeClass("show"), n(t).hasClass("fade")) {
                    var i = a.getTransitionDurationFromElement(t);
                    n(t).one(a.TRANSITION_END, (function(n) {
                        return e._destroyElement(t, n)
                    })).emulateTransitionEnd(i)
                } else this._destroyElement(t)
            }, e._destroyElement = function(t) {
                n(t).detach().trigger(f.CLOSED).remove()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this),
                        o = i.data(c);
                    o || (o = new t(this), i.data(c, o)), "close" === e && o[e](this)
                }))
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), t
        }();
    n(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), n.fn[l] = d._jQueryInterface, n.fn[l].Constructor = d, n.fn[l].noConflict = function() {
        return n.fn[l] = u, d._jQueryInterface
    };
    var g = "button",
        _ = "bs.button",
        m = "." + _,
        p = ".data-api",
        v = n.fn[g],
        E = "active",
        y = '[data-toggle^="button"]',
        C = ".btn",
        T = {
            CLICK_DATA_API: "click" + m + p,
            FOCUS_BLUR_DATA_API: "focus" + m + p + " blur" + m + p
        },
        S = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    i = n(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(E)) t = !1;
                            else {
                                var r = i.querySelector(".active");
                                r && n(r).removeClass(E)
                            } if (t) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(E), n(o).trigger("change")
                        }
                        o.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(E)), t && n(this._element).toggleClass(E)
            }, e.dispose = function() {
                n.removeData(this._element, _), this._element = null
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this).data(_);
                    i || (i = new t(this), n(this).data(_, i)), "toggle" === e && i[e]()
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), t
        }();
    n(document).on(T.CLICK_DATA_API, y, (function(t) {
        t.preventDefault();
        var e = t.target;
        n(e).hasClass("btn") || (e = n(e).closest(C)), S._jQueryInterface.call(n(e), "toggle")
    })).on(T.FOCUS_BLUR_DATA_API, y, (function(t) {
        var e = n(t.target).closest(C)[0];
        n(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    })), n.fn[g] = S._jQueryInterface, n.fn[g].Constructor = S, n.fn[g].noConflict = function() {
        return n.fn[g] = v, S._jQueryInterface
    };
    var b = "carousel",
        I = "bs.carousel",
        D = "." + I,
        w = ".data-api",
        A = n.fn[b],
        N = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        O = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        k = "next",
        P = "prev",
        L = {
            SLIDE: "slide" + D,
            SLID: "slid" + D,
            KEYDOWN: "keydown" + D,
            MOUSEENTER: "mouseenter" + D,
            MOUSELEAVE: "mouseleave" + D,
            TOUCHSTART: "touchstart" + D,
            TOUCHMOVE: "touchmove" + D,
            TOUCHEND: "touchend" + D,
            POINTERDOWN: "pointerdown" + D,
            POINTERUP: "pointerup" + D,
            DRAG_START: "dragstart" + D,
            LOAD_DATA_API: "load" + D + w,
            CLICK_DATA_API: "click" + D + w
        },
        j = "active",
        H = ".active.carousel-item",
        R = {
            TOUCH: "touch",
            PEN: "pen"
        },
        U = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = t.prototype;
            return e.next = function() {
                this._isSliding || this._slide(k)
            }, e.nextWhenVisible = function() {
                !document.hidden && n(this._element).is(":visible") && "hidden" !== n(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(P)
            }, e.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(H);
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) n(this._element).one(L.SLID, (function() {
                        return e.to(t)
                    }));
                    else {
                        if (i === t) return this.pause(), void this.cycle();
                        var o = i < t ? k : P;
                        this._slide(o, this._items[t])
                    }
            }, e.dispose = function() {
                n(this._element).off(D), n.removeData(this._element, I), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(t) {
                return t = r({}, N, t), a.typeCheckConfig(b, t, O), t
            }, e._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && n(this._element).on(L.KEYDOWN, (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && n(this._element).on(L.MOUSEENTER, (function(e) {
                    return t.pause(e)
                })).on(L.MOUSELEAVE, (function(e) {
                    return t.cycle(e)
                })), this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var e = function(e) {
                            t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                                return t.cycle(e)
                            }), 500 + t._config.interval))
                        };
                    n(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, (function(t) {
                        return t.preventDefault()
                    })), this._pointerEvent ? (n(this._element).on(L.POINTERDOWN, (function(t) {
                        return e(t)
                    })), n(this._element).on(L.POINTERUP, (function(t) {
                        return i(t)
                    })), this._element.classList.add("pointer-event")) : (n(this._element).on(L.TOUCHSTART, (function(t) {
                        return e(t)
                    })), n(this._element).on(L.TOUCHMOVE, (function(e) {
                        var n;
                        (n = e).originalEvent.touches && 1 < n.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = n.originalEvent.touches[0].clientX - t.touchStartX
                    })), n(this._element).on(L.TOUCHEND, (function(t) {
                        return i(t)
                    })))
                }
            }, e._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
            }, e._getItemByDirection = function(t, e) {
                var n = t === k,
                    i = t === P,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === P ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(t, e) {
                var i = this._getItemIndex(t),
                    o = this._getItemIndex(this._element.querySelector(H)),
                    r = n.Event(L.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: o,
                        to: i
                    });
                return n(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    n(e).removeClass(j);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && n(i).addClass(j)
                }
            }, e._slide = function(t, e) {
                var i, o, r, s = this,
                    l = this._element.querySelector(H),
                    c = this._getItemIndex(l),
                    h = e || l && this._getItemByDirection(t, l),
                    u = this._getItemIndex(h),
                    f = Boolean(this._interval);
                if (r = t === k ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), h && n(h).hasClass(j)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(h);
                    var d = n.Event(L.SLID, {
                        relatedTarget: h,
                        direction: r,
                        from: c,
                        to: u
                    });
                    if (n(this._element).hasClass("slide")) {
                        n(h).addClass(o), a.reflow(h), n(l).addClass(i), n(h).addClass(i);
                        var g = parseInt(h.getAttribute("data-interval"), 10);
                        this._config.interval = g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, g) : this._config.defaultInterval || this._config.interval;
                        var _ = a.getTransitionDurationFromElement(l);
                        n(l).one(a.TRANSITION_END, (function() {
                            n(h).removeClass(i + " " + o).addClass(j), n(l).removeClass(j + " " + o + " " + i), s._isSliding = !1, setTimeout((function() {
                                return n(s._element).trigger(d)
                            }), 0)
                        })).emulateTransitionEnd(_)
                    } else n(l).removeClass(j), n(h).addClass(j), this._isSliding = !1, n(this._element).trigger(d);
                    f && this.cycle()
                }
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this).data(I),
                        o = r({}, N, n(this).data());
                    "object" == typeof e && (o = r({}, o, e));
                    var s = "string" == typeof e ? e : o.slide;
                    if (i || (i = new t(this, o), n(this).data(I, i)), "number" == typeof e) i.to(e);
                    else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else o.interval && (i.pause(), i.cycle())
                }))
            }, t._dataApiClickHandler = function(e) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var o = n(i)[0];
                    if (o && n(o).hasClass("carousel")) {
                        var s = r({}, n(o).data(), n(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), t._jQueryInterface.call(n(o), s), l && n(o).data(I).to(l), e.preventDefault()
                    }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return N
                }
            }]), t
        }();
    n(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", U._dataApiClickHandler), n(window).on(L.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
            var o = n(t[e]);
            U._jQueryInterface.call(o, o.data())
        }
    })), n.fn[b] = U._jQueryInterface, n.fn[b].Constructor = U, n.fn[b].noConflict = function() {
        return n.fn[b] = A, U._jQueryInterface
    };
    var W = "collapse",
        x = "bs.collapse",
        F = "." + x,
        q = n.fn[W],
        M = {
            toggle: !0,
            parent: ""
        },
        K = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Q = {
            SHOW: "show" + F,
            SHOWN: "shown" + F,
            HIDE: "hide" + F,
            HIDDEN: "hidden" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        },
        B = "show",
        V = "collapse",
        Y = "collapsing",
        X = "collapsed",
        z = '[data-toggle="collapse"]',
        G = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(z)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = a.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                            return e === t
                        }));
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = t.prototype;
            return e.toggle = function() {
                n(this._element).hasClass(B) ? this.hide() : this.show()
            }, e.show = function() {
                var e, i, o = this;
                if (!(this._isTransitioning || n(this._element).hasClass(B) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(V)
                    }))).length && (e = null), e && (i = n(e).not(this._selector).data(x)) && i._isTransitioning))) {
                    var r = n.Event(Q.SHOW);
                    if (n(this._element).trigger(r), !r.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(n(e).not(this._selector), "hide"), i || n(e).data(x, null));
                        var s = this._getDimension();
                        n(this._element).removeClass(V).addClass(Y), this._element.style[s] = 0, this._triggerArray.length && n(this._triggerArray).removeClass(X).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = a.getTransitionDurationFromElement(this._element);
                        n(this._element).one(a.TRANSITION_END, (function() {
                            n(o._element).removeClass(Y).addClass(V).addClass(B), o._element.style[s] = "", o.setTransitioning(!1), n(o._element).trigger(Q.SHOWN)
                        })).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, e.hide = function() {
                var t = this;
                if (!this._isTransitioning && n(this._element).hasClass(B)) {
                    var e = n.Event(Q.HIDE);
                    if (n(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), n(this._element).addClass(Y).removeClass(V).removeClass(B);
                        var o = this._triggerArray.length;
                        if (0 < o)
                            for (var r = 0; r < o; r++) {
                                var s = this._triggerArray[r],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (n([].slice.call(document.querySelectorAll(l))).hasClass(B) || n(s).addClass(X).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = a.getTransitionDurationFromElement(this._element);
                        n(this._element).one(a.TRANSITION_END, (function() {
                            t.setTransitioning(!1), n(t._element).removeClass(Y).addClass(V).trigger(Q.HIDDEN)
                        })).emulateTransitionEnd(c)
                    }
                }
            }, e.setTransitioning = function(t) {
                this._isTransitioning = t
            }, e.dispose = function() {
                n.removeData(this._element, x), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(t) {
                return (t = r({}, M, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(W, t, K), t
            }, e._getDimension = function() {
                return n(this._element).hasClass("width") ? "width" : "height"
            }, e._getParent = function() {
                var e, i = this;
                a.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(e.querySelectorAll(o));
                return n(r).each((function(e, n) {
                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                })), e
            }, e._addAriaAndCollapsedClass = function(t, e) {
                var i = n(t).hasClass(B);
                e.length && n(e).toggleClass(X, !i).attr("aria-expanded", i)
            }, t._getTargetFromElement = function(t) {
                var e = a.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this),
                        o = i.data(x),
                        s = r({}, M, i.data(), "object" == typeof e && e ? e : {});
                    if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || (o = new t(this, s), i.data(x, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return M
                }
            }]), t
        }();
    n(document).on(Q.CLICK_DATA_API, z, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = n(this),
            i = a.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        n(o).each((function() {
            var t = n(this),
                i = t.data(x) ? "toggle" : e.data();
            G._jQueryInterface.call(t, i)
        }))
    })), n.fn[W] = G._jQueryInterface, n.fn[W].Constructor = G, n.fn[W].noConflict = function() {
        return n.fn[W] = q, G._jQueryInterface
    };
    var J = "dropdown",
        Z = "bs.dropdown",
        $ = "." + Z,
        tt = ".data-api",
        et = n.fn[J],
        nt = new RegExp("38|40|27"),
        it = {
            HIDE: "hide" + $,
            HIDDEN: "hidden" + $,
            SHOW: "show" + $,
            SHOWN: "shown" + $,
            CLICK: "click" + $,
            CLICK_DATA_API: "click" + $ + tt,
            KEYDOWN_DATA_API: "keydown" + $ + tt,
            KEYUP_DATA_API: "keyup" + $ + tt
        },
        ot = "disabled",
        rt = "show",
        st = "dropdown-menu-right",
        at = '[data-toggle="dropdown"]',
        lt = ".dropdown-menu",
        ct = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        ht = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        ut = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = t.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !n(this._element).hasClass(ot)) {
                    var i = t._getParentFromElement(this._element),
                        o = n(this._menu).hasClass(rt);
                    if (t._clearMenus(), !o) {
                        var r = {
                                relatedTarget: this._element
                            },
                            s = n.Event(it.SHOW, r);
                        if (n(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = i : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && n(i).addClass("position-static"), this._popper = new e(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === n(i).closest(".navbar-nav").length && n(document.body).children().on("mouseover", null, n.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), n(this._menu).toggleClass(rt), n(i).toggleClass(rt).trigger(n.Event(it.SHOWN, r))
                        }
                    }
                }
            }, i.show = function() {
                if (!(this._element.disabled || n(this._element).hasClass(ot) || n(this._menu).hasClass(rt))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        i = n.Event(it.SHOW, e),
                        o = t._getParentFromElement(this._element);
                    n(o).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(rt), n(o).toggleClass(rt).trigger(n.Event(it.SHOWN, e)))
                }
            }, i.hide = function() {
                if (!this._element.disabled && !n(this._element).hasClass(ot) && n(this._menu).hasClass(rt)) {
                    var e = {
                            relatedTarget: this._element
                        },
                        i = n.Event(it.HIDE, e),
                        o = t._getParentFromElement(this._element);
                    n(o).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(rt), n(o).toggleClass(rt).trigger(n.Event(it.HIDDEN, e)))
                }
            }, i.dispose = function() {
                n.removeData(this._element, Z), n(this._element).off($), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var t = this;
                n(this._element).on(it.CLICK, (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, i._getConfig = function(t) {
                return t = r({}, this.constructor.Default, n(this._element).data(), t), a.typeCheckConfig(J, t, this.constructor.DefaultType), t
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(lt))
                }
                return this._menu
            }, i._getPlacement = function() {
                var t = n(this._element.parentNode),
                    e = "bottom-start";
                return t.hasClass("dropup") ? (e = "top-start", n(this._menu).hasClass(st) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : n(this._menu).hasClass(st) && (e = "bottom-end"), e
            }, i._detectNavbar = function() {
                return 0 < n(this._element).closest(".navbar").length
            }, i._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this).data(Z);
                    if (i || (i = new t(this, "object" == typeof e ? e : null), n(this).data(Z, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                }))
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var i = [].slice.call(document.querySelectorAll(at)), o = 0, r = i.length; o < r; o++) {
                        var s = t._getParentFromElement(i[o]),
                            a = n(i[o]).data(Z),
                            l = {
                                relatedTarget: i[o]
                            };
                        if (e && "click" === e.type && (l.clickEvent = e), a) {
                            var c = a._menu;
                            if (n(s).hasClass(rt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && n.contains(s, e.target))) {
                                var h = n.Event(it.HIDE, l);
                                n(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), i[o].setAttribute("aria-expanded", "false"), n(c).removeClass(rt), n(s).removeClass(rt).trigger(n.Event(it.HIDDEN, l)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = a.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || n(e.target).closest(lt).length)) : nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !n(this).hasClass(ot))) {
                    var i = t._getParentFromElement(this),
                        o = n(i).hasClass(rt);
                    if (o && (!o || 27 !== e.which && 32 !== e.which)) {
                        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== r.length) {
                            var s = r.indexOf(e.target);
                            38 === e.which && 0 < s && s--, 40 === e.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var a = i.querySelector(at);
                            n(a).trigger("focus")
                        }
                        n(this).trigger("click")
                    }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ct
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ht
                }
            }]), t
        }();
    n(document).on(it.KEYDOWN_DATA_API, at, ut._dataApiKeydownHandler).on(it.KEYDOWN_DATA_API, lt, ut._dataApiKeydownHandler).on(it.CLICK_DATA_API + " " + it.KEYUP_DATA_API, ut._clearMenus).on(it.CLICK_DATA_API, at, (function(t) {
        t.preventDefault(), t.stopPropagation(), ut._jQueryInterface.call(n(this), "toggle")
    })).on(it.CLICK_DATA_API, ".dropdown form", (function(t) {
        t.stopPropagation()
    })), n.fn[J] = ut._jQueryInterface, n.fn[J].Constructor = ut, n.fn[J].noConflict = function() {
        return n.fn[J] = et, ut._jQueryInterface
    };
    var ft = "modal",
        dt = "bs.modal",
        gt = "." + dt,
        _t = n.fn[ft],
        mt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        pt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        vt = {
            HIDE: "hide" + gt,
            HIDDEN: "hidden" + gt,
            SHOW: "show" + gt,
            SHOWN: "shown" + gt,
            FOCUSIN: "focusin" + gt,
            RESIZE: "resize" + gt,
            CLICK_DISMISS: "click.dismiss" + gt,
            KEYDOWN_DISMISS: "keydown.dismiss" + gt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + gt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + gt,
            CLICK_DATA_API: "click" + gt + ".data-api"
        },
        Et = "modal-open",
        yt = "fade",
        Ct = "show",
        Tt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        St = ".sticky-top",
        bt = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = t.prototype;
            return e.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    n(this._element).hasClass(yt) && (this._isTransitioning = !0);
                    var i = n.Event(vt.SHOW, {
                        relatedTarget: t
                    });
                    n(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), n(this._element).on(vt.CLICK_DISMISS, '[data-dismiss="modal"]', (function(t) {
                        return e.hide(t)
                    })), n(this._dialog).on(vt.MOUSEDOWN_DISMISS, (function() {
                        n(e._element).one(vt.MOUSEUP_DISMISS, (function(t) {
                            n(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, e.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = n.Event(vt.HIDE);
                    if (n(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = n(this._element).hasClass(yt);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), n(document).off(vt.FOCUSIN), n(this._element).removeClass(Ct), n(this._element).off(vt.CLICK_DISMISS), n(this._dialog).off(vt.MOUSEDOWN_DISMISS), o) {
                            var r = a.getTransitionDurationFromElement(this._element);
                            n(this._element).one(a.TRANSITION_END, (function(t) {
                                return e._hideModal(t)
                            })).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return n(t).off(gt)
                })), n(document).off(vt.FOCUSIN), n.removeData(this._element, dt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(t) {
                return t = r({}, mt, t), a.typeCheckConfig(ft, t, pt), t
            }, e._showElement = function(t) {
                var e = this,
                    i = n(this._element).hasClass(yt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, i && a.reflow(this._element), n(this._element).addClass(Ct), this._config.focus && this._enforceFocus();
                var o = n.Event(vt.SHOWN, {
                        relatedTarget: t
                    }),
                    r = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, n(e._element).trigger(o)
                    };
                if (i) {
                    var s = a.getTransitionDurationFromElement(this._dialog);
                    n(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, e._enforceFocus = function() {
                var t = this;
                n(document).off(vt.FOCUSIN).on(vt.FOCUSIN, (function(e) {
                    document !== e.target && t._element !== e.target && 0 === n(t._element).has(e.target).length && t._element.focus()
                }))
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? n(this._element).on(vt.KEYDOWN_DISMISS, (function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                })) : this._isShown || n(this._element).off(vt.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? n(window).on(vt.RESIZE, (function(e) {
                    return t.handleUpdate(e)
                })) : n(window).off(vt.RESIZE)
            }, e._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                    n(document.body).removeClass(Et), t._resetAdjustments(), t._resetScrollbar(), n(t._element).trigger(vt.HIDDEN)
                }))
            }, e._removeBackdrop = function() {
                this._backdrop && (n(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(t) {
                var e = this,
                    i = n(this._element).hasClass(yt) ? yt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), n(this._backdrop).appendTo(document.body), n(this._element).on(vt.CLICK_DISMISS, (function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        })), i && a.reflow(this._backdrop), n(this._backdrop).addClass(Ct), !t) return;
                    if (!i) return void t();
                    var o = a.getTransitionDurationFromElement(this._backdrop);
                    n(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    n(this._backdrop).removeClass(Ct);
                    var r = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (n(this._element).hasClass(yt)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        n(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, e._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(Tt)),
                        i = [].slice.call(document.querySelectorAll(St));
                    n(e).each((function(e, i) {
                        var o = i.style.paddingRight,
                            r = n(i).css("padding-right");
                        n(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    })), n(i).each((function(e, i) {
                        var o = i.style.marginRight,
                            r = n(i).css("margin-right");
                        n(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    }));
                    var o = document.body.style.paddingRight,
                        r = n(document.body).css("padding-right");
                    n(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                n(document.body).addClass(Et)
            }, e._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(Tt));
                n(t).each((function(t, e) {
                    var i = n(e).data("padding-right");
                    n(e).removeData("padding-right"), e.style.paddingRight = i || ""
                }));
                var e = [].slice.call(document.querySelectorAll("" + St));
                n(e).each((function(t, e) {
                    var i = n(e).data("margin-right");
                    void 0 !== i && n(e).css("margin-right", i).removeData("margin-right")
                }));
                var i = n(document.body).data("padding-right");
                n(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, e._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, i) {
                return this.each((function() {
                    var o = n(this).data(dt),
                        s = r({}, mt, n(this).data(), "object" == typeof e && e ? e : {});
                    if (o || (o = new t(this, s), n(this).data(dt, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](i)
                    } else s.show && o.show(i)
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return mt
                }
            }]), t
        }();
    n(document).on(vt.CLICK_DATA_API, '[data-toggle="modal"]', (function(t) {
        var e, i = this,
            o = a.getSelectorFromElement(this);
        o && (e = document.querySelector(o));
        var s = n(e).data(dt) ? "toggle" : r({}, n(e).data(), n(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = n(e).one(vt.SHOW, (function(t) {
            t.isDefaultPrevented() || l.one(vt.HIDDEN, (function() {
                n(i).is(":visible") && i.focus()
            }))
        }));
        bt._jQueryInterface.call(n(e), s, this)
    })), n.fn[ft] = bt._jQueryInterface, n.fn[ft].Constructor = bt, n.fn[ft].noConflict = function() {
        return n.fn[ft] = _t, bt._jQueryInterface
    };
    var It = "tooltip",
        Dt = "bs.tooltip",
        wt = "." + Dt,
        At = n.fn[It],
        Nt = "bs-tooltip",
        Ot = new RegExp("(^|\\s)" + Nt + "\\S+", "g"),
        kt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        },
        Pt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Lt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        },
        jt = "show",
        Ht = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            INSERTED: "inserted" + wt,
            CLICK: "click" + wt,
            FOCUSIN: "focusin" + wt,
            FOCUSOUT: "focusout" + wt,
            MOUSEENTER: "mouseenter" + wt,
            MOUSELEAVE: "mouseleave" + wt
        },
        Rt = "fade",
        Ut = "show",
        Wt = "hover",
        xt = "focus",
        Ft = function() {
            function t(t, n) {
                if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(n), this.tip = null, this._setListeners()
            }
            var i = t.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            i = n(t.currentTarget).data(e);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (n(this.getTipElement()).hasClass(Ut)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), n.removeData(this.element, this.constructor.DATA_KEY), n(this.element).off(this.constructor.EVENT_KEY), n(this.element).closest(".modal").off("hide.bs.modal"), this.tip && n(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var t = this;
                if ("none" === n(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = n.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    n(this.element).trigger(i);
                    var o = a.findShadowRoot(this.element),
                        r = n.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(),
                        l = a.getUID(this.constructor.NAME);
                    s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && n(s).addClass(Rt);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        h = this._getAttachment(c);
                    this.addAttachmentClass(h);
                    var u = this._getContainer();
                    n(s).data(this.constructor.DATA_KEY, this), n.contains(this.element.ownerDocument.documentElement, this.tip) || n(s).appendTo(u), n(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new e(this.element, s, {
                        placement: h,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), n(s).addClass(Ut), "ontouchstart" in document.documentElement && n(document.body).children().on("mouseover", null, n.noop);
                    var f = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, n(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (n(this.tip).hasClass(Rt)) {
                        var d = a.getTransitionDurationFromElement(this.tip);
                        n(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(d)
                    } else f()
                }
            }, i.hide = function(t) {
                var e = this,
                    i = this.getTipElement(),
                    o = n.Event(this.constructor.Event.HIDE),
                    r = function() {
                        e._hoverState !== jt && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), n(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (n(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (n(i).removeClass(Ut), "ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), this._activeTrigger.click = !1, this._activeTrigger[xt] = !1, this._activeTrigger[Wt] = !1, n(this.tip).hasClass(Rt)) {
                        var s = a.getTransitionDurationFromElement(i);
                        n(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(t) {
                n(this.getTipElement()).addClass(Nt + "-" + t)
            }, i.getTipElement = function() {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(n(t.querySelectorAll(".tooltip-inner")), this.getTitle()), n(t).removeClass(Rt + " " + Ut)
            }, i.setElementContent = function(t, e) {
                var i = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? i ? n(e).parent().is(t) || t.empty().append(e) : t.text(n(e).text()) : t[i ? "html" : "text"](e)
            }, i.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? n(this.config.container) : n(document).find(this.config.container)
            }, i._getAttachment = function(t) {
                return Pt[t.toUpperCase()]
            }, i._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) n(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var i = e === Wt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = e === Wt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        n(t.element).on(i, t.config.selector, (function(e) {
                            return t._enter(e)
                        })).on(o, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), n(this.element).closest(".modal").on("hide.bs.modal", (function() {
                    t.element && t.hide()
                })), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || n(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? xt : Wt] = !0), n(e.getTipElement()).hasClass(Ut) || e._hoverState === jt ? e._hoverState = jt : (clearTimeout(e._timeout), e._hoverState = jt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    e._hoverState === jt && e.show()
                }), e.config.delay.show) : e.show())
            }, i._leave = function(t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || n(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? xt : Wt] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, i._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, i._getConfig = function(t) {
                return "number" == typeof(t = r({}, this.constructor.Default, n(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a.typeCheckConfig(It, t, this.constructor.DefaultType), t
            }, i._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, i._cleanTipClass = function() {
                var t = n(this.getTipElement()),
                    e = t.attr("class").match(Ot);
                null !== e && e.length && t.removeClass(e.join(""))
            }, i._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, i._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (n(t).removeClass(Rt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this).data(Dt),
                        o = "object" == typeof e && e;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, o), n(this).data(Dt, i)), "string" == typeof e)) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Lt
                }
            }, {
                key: "NAME",
                get: function() {
                    return It
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Dt
                }
            }, {
                key: "Event",
                get: function() {
                    return Ht
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return wt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return kt
                }
            }]), t
        }();
    n.fn[It] = Ft._jQueryInterface, n.fn[It].Constructor = Ft, n.fn[It].noConflict = function() {
        return n.fn[It] = At, Ft._jQueryInterface
    };
    var qt = "popover",
        Mt = "bs.popover",
        Kt = "." + Mt,
        Qt = n.fn[qt],
        Bt = "bs-popover",
        Vt = new RegExp("(^|\\s)" + Bt + "\\S+", "g"),
        Yt = r({}, Ft.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Xt = r({}, Ft.DefaultType, {
            content: "(string|element|function)"
        }),
        zt = {
            HIDE: "hide" + Kt,
            HIDDEN: "hidden" + Kt,
            SHOW: "show" + Kt,
            SHOWN: "shown" + Kt,
            INSERTED: "inserted" + Kt,
            CLICK: "click" + Kt,
            FOCUSIN: "focusin" + Kt,
            FOCUSOUT: "focusout" + Kt,
            MOUSEENTER: "mouseenter" + Kt,
            MOUSELEAVE: "mouseleave" + Kt
        },
        Gt = function(t) {
            var e, i;

            function r() {
                return t.apply(this, arguments) || this
            }
            i = t, (e = r).prototype = Object.create(i.prototype), (e.prototype.constructor = e).__proto__ = i;
            var s = r.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(t) {
                n(this.getTipElement()).addClass(Bt + "-" + t)
            }, s.getTipElement = function() {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var t = n(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var t = n(this.getTipElement()),
                    e = t.attr("class").match(Vt);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, r._jQueryInterface = function(t) {
                return this.each((function() {
                    var e = n(this).data(Mt),
                        i = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new r(this, i), n(this).data(Mt, e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, o(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Yt
                }
            }, {
                key: "NAME",
                get: function() {
                    return qt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Mt
                }
            }, {
                key: "Event",
                get: function() {
                    return zt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Kt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Xt
                }
            }]), r
        }(Ft);
    n.fn[qt] = Gt._jQueryInterface, n.fn[qt].Constructor = Gt, n.fn[qt].noConflict = function() {
        return n.fn[qt] = Qt, Gt._jQueryInterface
    };
    var Jt = "scrollspy",
        Zt = "bs.scrollspy",
        $t = "." + Zt,
        te = n.fn[Jt],
        ee = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ne = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ie = {
            ACTIVATE: "activate" + $t,
            SCROLL: "scroll" + $t,
            LOAD_DATA_API: "load" + $t + ".data-api"
        },
        oe = "active",
        re = ".nav, .list-group",
        se = ".nav-link",
        ae = ".list-group-item",
        le = "position",
        ce = function() {
            function t(t, e) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + se + "," + this._config.target + " " + ae + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, n(this._scrollElement).on(ie.SCROLL, (function(t) {
                    return i._process(t)
                })), this.refresh(), this._process()
            }
            var e = t.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : le,
                    i = "auto" === this._config.method ? e : this._config.method,
                    o = i === le ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                    var e, r = a.getSelectorFromElement(t);
                    if (r && (e = document.querySelector(r)), e) {
                        var s = e.getBoundingClientRect();
                        if (s.width || s.height) return [n(e)[i]().top + o, r]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, e.dispose = function() {
                n.removeData(this._element, Zt), n(this._scrollElement).off($t), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(t) {
                if ("string" != typeof(t = r({}, ee, "object" == typeof t && t ? t : {})).target) {
                    var e = n(t.target).attr("id");
                    e || (e = a.getUID(Jt), n(t.target).attr("id", e)), t.target = "#" + e
                }
                return a.typeCheckConfig(Jt, t, ne), t
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    i = n([].slice.call(document.querySelectorAll(e.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(oe), i.addClass(oe)) : (i.addClass(oe), i.parents(re).prev(se + ", " + ae).addClass(oe), i.parents(re).prev(".nav-item").children(se).addClass(oe)), n(this._scrollElement).trigger(ie.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                    return t.classList.contains(oe)
                })).forEach((function(t) {
                    return t.classList.remove(oe)
                }))
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this).data(Zt);
                    if (i || (i = new t(this, "object" == typeof e && e), n(this).data(Zt, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ee
                }
            }]), t
        }();
    n(window).on(ie.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
            var i = n(t[e]);
            ce._jQueryInterface.call(i, i.data())
        }
    })), n.fn[Jt] = ce._jQueryInterface, n.fn[Jt].Constructor = ce, n.fn[Jt].noConflict = function() {
        return n.fn[Jt] = te, ce._jQueryInterface
    };
    var he = "bs.tab",
        ue = "." + he,
        fe = n.fn.tab,
        de = {
            HIDE: "hide" + ue,
            HIDDEN: "hidden" + ue,
            SHOW: "show" + ue,
            SHOWN: "shown" + ue,
            CLICK_DATA_API: "click" + ue + ".data-api"
        },
        ge = "active",
        _e = ".active",
        me = "> li > .active",
        pe = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n(this._element).hasClass(ge) || n(this._element).hasClass("disabled"))) {
                    var e, i, o = n(this._element).closest(".nav, .list-group")[0],
                        r = a.getSelectorFromElement(this._element);
                    if (o) {
                        var s = "UL" === o.nodeName || "OL" === o.nodeName ? me : _e;
                        i = (i = n.makeArray(n(o).find(s)))[i.length - 1]
                    }
                    var l = n.Event(de.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = n.Event(de.SHOW, {
                            relatedTarget: i
                        });
                    if (i && n(i).trigger(l), n(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, o);
                        var h = function() {
                            var e = n.Event(de.HIDDEN, {
                                    relatedTarget: t._element
                                }),
                                o = n.Event(de.SHOWN, {
                                    relatedTarget: i
                                });
                            n(i).trigger(e), n(t._element).trigger(o)
                        };
                        e ? this._activate(e, e.parentNode, h) : h()
                    }
                }
            }, e.dispose = function() {
                n.removeData(this._element, he), this._element = null
            }, e._activate = function(t, e, i) {
                var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? n(e).children(_e) : n(e).find(me))[0],
                    s = i && r && n(r).hasClass("fade"),
                    l = function() {
                        return o._transitionComplete(t, r, i)
                    };
                if (r && s) {
                    var c = a.getTransitionDurationFromElement(r);
                    n(r).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, e._transitionComplete = function(t, e, i) {
                if (e) {
                    n(e).removeClass(ge);
                    var o = n(e.parentNode).find("> .dropdown-menu .active")[0];
                    o && n(o).removeClass(ge), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (n(t).addClass(ge), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), n(t).addClass("show"), t.parentNode && n(t.parentNode).hasClass("dropdown-menu")) {
                    var r = n(t).closest(".dropdown")[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        n(s).addClass(ge)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this),
                        o = i.data(he);
                    if (o || (o = new t(this), i.data(he, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), t
        }();
    n(document).on(de.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(), pe._jQueryInterface.call(n(this), "show")
    })), n.fn.tab = pe._jQueryInterface, n.fn.tab.Constructor = pe, n.fn.tab.noConflict = function() {
        return n.fn.tab = fe, pe._jQueryInterface
    };
    var ve = "toast",
        Ee = "bs.toast",
        ye = "." + Ee,
        Ce = n.fn[ve],
        Te = {
            CLICK_DISMISS: "click.dismiss" + ye,
            HIDE: "hide" + ye,
            HIDDEN: "hidden" + ye,
            SHOW: "show" + ye,
            SHOWN: "shown" + ye
        },
        Se = "show",
        be = "showing",
        Ie = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        De = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        we = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                n(this._element).trigger(Te.SHOW), this._config.animation && this._element.classList.add("fade");
                var e = function() {
                    t._element.classList.remove(be), t._element.classList.add(Se), n(t._element).trigger(Te.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(be), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    n(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, e.hide = function(t) {
                var e = this;
                this._element.classList.contains(Se) && (n(this._element).trigger(Te.HIDE), t ? this._close() : this._timeout = setTimeout((function() {
                    e._close()
                }), this._config.delay))
            }, e.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Se) && this._element.classList.remove(Se), n(this._element).off(Te.CLICK_DISMISS), n.removeData(this._element, Ee), this._element = null, this._config = null
            }, e._getConfig = function(t) {
                return t = r({}, De, n(this._element).data(), "object" == typeof t && t ? t : {}), a.typeCheckConfig(ve, t, this.constructor.DefaultType), t
            }, e._setListeners = function() {
                var t = this;
                n(this._element).on(Te.CLICK_DISMISS, '[data-dismiss="toast"]', (function() {
                    return t.hide(!0)
                }))
            }, e._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add("hide"), n(t._element).trigger(Te.HIDDEN)
                    };
                if (this._element.classList.remove(Se), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    n(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = n(this),
                        o = i.data(Ee);
                    if (o || (o = new t(this, "object" == typeof e && e), i.data(Ee, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](this)
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ie
                }
            }]), t
        }();
    n.fn[ve] = we._jQueryInterface, n.fn[ve].Constructor = we, n.fn[ve].noConflict = function() {
            return n.fn[ve] = Ce, we._jQueryInterface
        },
        function() {
            if (void 0 === n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = n.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), t.Util = a, t.Alert = d, t.Button = S, t.Carousel = U, t.Collapse = G, t.Dropdown = ut, t.Modal = bt, t.Popover = Gt, t.Scrollspy = ce, t.Tab = pe, t.Toast = we, t.Tooltip = Ft, Object.defineProperty(t, "__esModule", {
            value: !0
        })
}));
! function(e, t) {
    "use strict";
    "undefined" != typeof window && "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.exports ? e.exports = t() : e.Fingerprint2 = t()
}(this, (function() {
    "use strict";

    function e(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function t(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function n(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }

    function a(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }

    function r(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }

    function i(e) {
        return e = r(e, [0, e[0] >>> 1]), e = r(e = t(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), r(e = t(e, [3301882366, 444984403]), [0, e[0] >>> 1])
    }

    function o(o, l) {
        l = l || 0;
        for (var s = (o = o || "").length % 16, c = o.length - s, d = [0, l], u = [0, l], f = [0, 0], g = [0, 0], h = [2277735313, 289559509], m = [1291169091, 658871167], p = 0; p < c; p += 16) f = [255 & o.charCodeAt(p + 4) | (255 & o.charCodeAt(p + 5)) << 8 | (255 & o.charCodeAt(p + 6)) << 16 | (255 & o.charCodeAt(p + 7)) << 24, 255 & o.charCodeAt(p) | (255 & o.charCodeAt(p + 1)) << 8 | (255 & o.charCodeAt(p + 2)) << 16 | (255 & o.charCodeAt(p + 3)) << 24], g = [255 & o.charCodeAt(p + 12) | (255 & o.charCodeAt(p + 13)) << 8 | (255 & o.charCodeAt(p + 14)) << 16 | (255 & o.charCodeAt(p + 15)) << 24, 255 & o.charCodeAt(p + 8) | (255 & o.charCodeAt(p + 9)) << 8 | (255 & o.charCodeAt(p + 10)) << 16 | (255 & o.charCodeAt(p + 11)) << 24], f = n(f = t(f, h), 31), d = e(d = n(d = r(d, f = t(f, m)), 27), u), d = e(t(d, [0, 5]), [0, 1390208809]), g = n(g = t(g, m), 33), u = e(u = n(u = r(u, g = t(g, h)), 31), d), u = e(t(u, [0, 5]), [0, 944331445]);
        switch (f = [0, 0], g = [0, 0], s) {
            case 15:
                g = r(g, a([0, o.charCodeAt(p + 14)], 48));
            case 14:
                g = r(g, a([0, o.charCodeAt(p + 13)], 40));
            case 13:
                g = r(g, a([0, o.charCodeAt(p + 12)], 32));
            case 12:
                g = r(g, a([0, o.charCodeAt(p + 11)], 24));
            case 11:
                g = r(g, a([0, o.charCodeAt(p + 10)], 16));
            case 10:
                g = r(g, a([0, o.charCodeAt(p + 9)], 8));
            case 9:
                g = t(g = r(g, [0, o.charCodeAt(p + 8)]), m), u = r(u, g = t(g = n(g, 33), h));
            case 8:
                f = r(f, a([0, o.charCodeAt(p + 7)], 56));
            case 7:
                f = r(f, a([0, o.charCodeAt(p + 6)], 48));
            case 6:
                f = r(f, a([0, o.charCodeAt(p + 5)], 40));
            case 5:
                f = r(f, a([0, o.charCodeAt(p + 4)], 32));
            case 4:
                f = r(f, a([0, o.charCodeAt(p + 3)], 24));
            case 3:
                f = r(f, a([0, o.charCodeAt(p + 2)], 16));
            case 2:
                f = r(f, a([0, o.charCodeAt(p + 1)], 8));
            case 1:
                f = t(f = r(f, [0, o.charCodeAt(p)]), h), d = r(d, f = t(f = n(f, 31), m))
        }
        return d = e(d = r(d, [0, o.length]), u = r(u, [0, o.length])), u = e(u, d), d = e(d = i(d), u = i(u)), u = e(u, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
    }

    function l(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
        else if (e.length === +e.length)
            for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e);
        else
            for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
    }

    function s(e, t) {
        var n = [];
        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (l(e, (function(e, a, r) {
            n.push(t(e, a, r))
        })), n)
    }

    function c(e) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
    }
    void 0 === Array.isArray && (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    });
    var d = {
            preprocessor: null,
            audio: {
                timeout: 1e3,
                excludeIOS11: !0
            },
            fonts: {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                userDefinedFonts: [],
                extendedJsFonts: !1
            },
            screen: {
                detectScreenOrientation: !0
            },
            plugins: {
                sortPluginsFor: [/palemoon/i],
                excludeIE: !1
            },
            extraComponents: [],
            excludes: {
                enumerateDevices: !0,
                pixelRatio: !0,
                doNotTrack: !0,
                fontsFlash: !0,
                adBlock: !0
            },
            NOT_AVAILABLE: "not available",
            ERROR: "error",
            EXCLUDED: "excluded"
        },
        u = function(e) {
            if (null == navigator.plugins) return e.NOT_AVAILABLE;
            for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
            return f(e) && (t = t.sort((function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            }))), s(t, (function(e) {
                var t = s(e, (function(e) {
                    return [e.type, e.suffixes]
                }));
                return [e.name, e.description, t]
            }))
        },
        f = function(e) {
            for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
                var r = e.plugins.sortPluginsFor[n];
                if (navigator.userAgent.match(r)) {
                    t = !0;
                    break
                }
            }
            return t
        },
        g = function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        h = function() {
            if (!g()) return !1;
            var e = p(),
                t = !!window.WebGLRenderingContext && !!e;
            return T(e), t
        },
        m = function() {
            return 2 <= ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator)
        },
        p = function() {
            var e = document.createElement("canvas"),
                t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (e) {}
            return t || null
        },
        T = function(e) {
            var t = e.getExtension("WEBGL_lose_context");
            null != t && t.loseContext()
        },
        A = [{
            key: "userAgent",
            getData: function(e) {
                e(navigator.userAgent)
            }
        }, {
            key: "webdriver",
            getData: function(e, t) {
                e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
            }
        }, {
            key: "language",
            getData: function(e, t) {
                e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
            }
        }, {
            key: "colorDepth",
            getData: function(e, t) {
                e(window.screen.colorDepth || t.NOT_AVAILABLE)
            }
        }, {
            key: "deviceMemory",
            getData: function(e, t) {
                e(navigator.deviceMemory || t.NOT_AVAILABLE)
            }
        }, {
            key: "pixelRatio",
            getData: function(e, t) {
                e(window.devicePixelRatio || t.NOT_AVAILABLE)
            }
        }, {
            key: "hardwareConcurrency",
            getData: function(e, t) {
                e(function(e) {
                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                }(t))
            }
        }, {
            key: "screenResolution",
            getData: function(e, t) {
                e(function(e) {
                    var t = [window.screen.width, window.screen.height];
                    return e.screen.detectScreenOrientation && t.sort().reverse(), t
                }(t))
            }
        }, {
            key: "availableScreenResolution",
            getData: function(e, t) {
                e(function(e) {
                    if (window.screen.availWidth && window.screen.availHeight) {
                        var t = [window.screen.availHeight, window.screen.availWidth];
                        return e.screen.detectScreenOrientation && t.sort().reverse(), t
                    }
                    return e.NOT_AVAILABLE
                }(t))
            }
        }, {
            key: "timezoneOffset",
            getData: function(e) {
                e((new Date).getTimezoneOffset())
            }
        }, {
            key: "timezone",
            getData: function(e, t) {
                window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || t.NOT_AVAILABLE) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "sessionStorage",
            getData: function(e, t) {
                e(function(e) {
                    try {
                        return !!window.sessionStorage
                    } catch (t) {
                        return e.ERROR
                    }
                }(t))
            }
        }, {
            key: "localStorage",
            getData: function(e, t) {
                e(function(e) {
                    try {
                        return !!window.localStorage
                    } catch (t) {
                        return e.ERROR
                    }
                }(t))
            }
        }, {
            key: "indexedDb",
            getData: function(e, t) {
                e(function(e) {
                    if (m()) return e.EXCLUDED;
                    try {
                        return !!window.indexedDB
                    } catch (t) {
                        return e.ERROR
                    }
                }(t))
            }
        }, {
            key: "addBehavior",
            getData: function(e) {
                e(!!window.HTMLElement.prototype.addBehavior)
            }
        }, {
            key: "openDatabase",
            getData: function(e) {
                e(!!window.openDatabase)
            }
        }, {
            key: "cpuClass",
            getData: function(e, t) {
                e(function(e) {
                    return navigator.cpuClass || e.NOT_AVAILABLE
                }(t))
            }
        }, {
            key: "platform",
            getData: function(e, t) {
                e(function(e) {
                    return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                }(t))
            }
        }, {
            key: "doNotTrack",
            getData: function(e, t) {
                e(function(e) {
                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                }(t))
            }
        }, {
            key: "plugins",
            getData: function(e, t) {
                "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(function(e) {
                    var t = [];
                    return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? t = s(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                        try {
                            return new window.ActiveXObject(t), t
                        } catch (t) {
                            return e.ERROR
                        }
                    })) : t.push(e.NOT_AVAILABLE), navigator.plugins && (t = t.concat(u(e))), t
                }(t)) : e(u(t))
            }
        }, {
            key: "canvas",
            getData: function(e, t) {
                g() ? e(function(e) {
                    var t = [],
                        n = document.createElement("canvas");
                    n.width = 2e3, n.height = 200, n.style.display = "inline";
                    var a = n.getContext("2d");
                    return a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(125, 1, 62, 20), a.fillStyle = "#069", e.dontUseFakeFontInCanvas ? a.font = "11pt Arial" : a.font = "11pt no-real-font-123", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, 2 * Math.PI, !0), a.arc(75, 75, 25, 0, 2 * Math.PI, !0), a.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
                }(t)) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webgl",
            getData: function(e, t) {
                h() ? e(function() {
                    function e(e) {
                        return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]"
                    }
                    var t;
                    if (!(t = p())) return null;
                    var n = [],
                        a = t.createBuffer();
                    t.bindBuffer(t.ARRAY_BUFFER, a);
                    var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), a.itemSize = 3, a.numItems = 3;
                    var i = t.createProgram(),
                        o = t.createShader(t.VERTEX_SHADER);
                    t.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), t.compileShader(o);
                    var s = t.createShader(t.FRAGMENT_SHADER);
                    t.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), t.compileShader(s), t.attachShader(i, o), t.attachShader(i, s), t.linkProgram(i), t.useProgram(i), i.vertexPosAttrib = t.getAttribLocation(i, "attrVertex"), i.offsetUniform = t.getUniformLocation(i, "uniformOffset"), t.enableVertexAttribArray(i.vertexPosArray), t.vertexAttribPointer(i.vertexPosAttrib, a.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(i.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, a.numItems);
                    try {
                        n.push(t.canvas.toDataURL())
                    } catch (e) {}
                    n.push("extensions:" + (t.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + e(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + e(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + t.getParameter(t.ALPHA_BITS)), n.push("webgl antialiasing:" + (t.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + t.getParameter(t.BLUE_BITS)), n.push("webgl depth bits:" + t.getParameter(t.DEPTH_BITS)), n.push("webgl green bits:" + t.getParameter(t.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                        var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                        if (t) {
                            var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                            return 0 === n && (n = 2), n
                        }
                        return null
                    }(t)), n.push("webgl max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + e(t.getParameter(t.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + t.getParameter(t.RED_BITS)), n.push("webgl renderer:" + t.getParameter(t.RENDERER)), n.push("webgl shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + t.getParameter(t.STENCIL_BITS)), n.push("webgl vendor:" + t.getParameter(t.VENDOR)), n.push("webgl version:" + t.getParameter(t.VERSION));
                    try {
                        var c = t.getExtension("WEBGL_debug_renderer_info");
                        c && (n.push("webgl unmasked vendor:" + t.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + t.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                    } catch (e) {}
                    return t.getShaderPrecisionFormat && l(["FLOAT", "INT"], (function(e) {
                        l(["VERTEX", "FRAGMENT"], (function(a) {
                            l(["HIGH", "MEDIUM", "LOW"], (function(r) {
                                l(["precision", "rangeMin", "rangeMax"], (function(i) {
                                    var o = t.getShaderPrecisionFormat(t[a + "_SHADER"], t[r + "_" + e])[i];
                                    "precision" !== i && (i = "precision " + i);
                                    var l = ["webgl ", a.toLowerCase(), " shader ", r.toLowerCase(), " ", e.toLowerCase(), " ", i, ":", o].join("");
                                    n.push(l)
                                }))
                            }))
                        }))
                    })), T(t), n
                }()) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webglVendorAndRenderer",
            getData: function(e) {
                h() ? e(function() {
                    try {
                        var e = p(),
                            t = e.getExtension("WEBGL_debug_renderer_info"),
                            n = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                        return T(e), n
                    } catch (e) {
                        return null
                    }
                }()) : e()
            }
        }, {
            key: "adBlock",
            getData: function(e) {
                e(function() {
                    var e = document.createElement("div");
                    e.innerHTML = "&nbsp;";
                    var t = !(e.className = "adsbox");
                    try {
                        document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                }())
            }
        }, {
            key: "hasLiedLanguages",
            getData: function(e) {
                e(function() {
                    if (void 0 !== navigator.languages) try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                    } catch (e) {
                        return !0
                    }
                    return !1
                }())
            }
        }, {
            key: "hasLiedResolution",
            getData: function(e) {
                e(window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight)
            }
        }, {
            key: "hasLiedOs",
            getData: function(e) {
                e(function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.oscpu,
                        a = navigator.platform.toLowerCase();
                    if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("windows") || 0 <= t.indexOf("win16") || 0 <= t.indexOf("win32") || 0 <= t.indexOf("win64") || 0 <= t.indexOf("win95") || 0 <= t.indexOf("win98") || 0 <= t.indexOf("winnt") || 0 <= t.indexOf("wow64") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") || 0 <= t.indexOf("x11") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") || 0 <= t.indexOf("ipod") || 0 <= t.indexOf("crios") || 0 <= t.indexOf("fxios") ? "iOS" : 0 <= t.indexOf("macintosh") || 0 <= t.indexOf("mac_powerpc)") ? "Mac" : "Other", ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows" !== e && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e && -1 === t.indexOf("cros")) return !0;
                    if (void 0 !== n) {
                        if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
                        if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
                        if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
                        if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                    }
                    return 0 <= a.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= a.indexOf("linux") || 0 <= a.indexOf("android") || 0 <= a.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= a.indexOf("mac") || 0 <= a.indexOf("ipad") || 0 <= a.indexOf("ipod") || 0 <= a.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || !(0 <= a.indexOf("arm") && "Windows Phone" === e) && !(0 <= a.indexOf("pike") && 0 <= t.indexOf("opera mini")) && ((a.indexOf("win") < 0 && a.indexOf("linux") < 0 && a.indexOf("mac") < 0 && a.indexOf("iphone") < 0 && a.indexOf("ipad") < 0 && a.indexOf("ipod") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)
                }())
            }
        }, {
            key: "hasLiedBrowser",
            getData: function(e) {
                e(function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.productSub;
                    if (0 <= t.indexOf("edge/") || 0 <= t.indexOf("iemobile/")) return !1;
                    if (0 <= t.indexOf("opera mini")) return !1;
                    if (("Chrome" == (e = 0 <= t.indexOf("firefox/") ? "Firefox" : 0 <= t.indexOf("opera/") || 0 <= t.indexOf(" opr/") ? "Opera" : 0 <= t.indexOf("chrome/") ? "Chrome" : 0 <= t.indexOf("safari/") ? 0 <= t.indexOf("android 1.") || 0 <= t.indexOf("android 2.") || 0 <= t.indexOf("android 3.") || 0 <= t.indexOf("android 4.") ? "AOSP" : "Safari" : 0 <= t.indexOf("trident/") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                    var a, r = eval.toString().length;
                    if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                    if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
                    if (33 === r && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
                    try {
                        throw "a"
                    } catch (e) {
                        try {
                            e.toSource(), a = !0
                        } catch (e) {
                            a = !1
                        }
                    }
                    return a && "Firefox" !== e && "Other" !== e
                }())
            }
        }, {
            key: "touchSupport",
            getData: function(e) {
                e(function() {
                    var e, t = 0;
                    void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    return [t, e, "ontouchstart" in window]
                }())
            }
        }, {
            key: "fonts",
            getData: function(e, t) {
                var n = ["monospace", "sans-serif", "serif"],
                    a = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];

                function r() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                }

                function i(e) {
                    for (var t = !1, a = 0; a < n.length; a++)
                        if (t = e[a].offsetWidth !== c[n[a]] || e[a].offsetHeight !== d[n[a]]) return t;
                    return t
                }
                t.fonts.extendedJsFonts && (a = a.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), a = (a = a.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                    return a.indexOf(e) === t
                }));
                var o = document.getElementsByTagName("body")[0],
                    l = document.createElement("div"),
                    s = document.createElement("div"),
                    c = {},
                    d = {},
                    u = function() {
                        for (var e = [], t = 0, a = n.length; t < a; t++) {
                            var i = r();
                            i.style.fontFamily = n[t], l.appendChild(i), e.push(i)
                        }
                        return e
                    }();
                o.appendChild(l);
                for (var f = 0, g = n.length; f < g; f++) c[n[f]] = u[f].offsetWidth, d[n[f]] = u[f].offsetHeight;
                var h = function() {
                    for (var e, t, i, o = {}, l = 0, c = a.length; l < c; l++) {
                        for (var d = [], u = 0, f = n.length; u < f; u++) {
                            var g = (e = a[l], t = n[u], i = void 0, (i = r()).style.fontFamily = "'" + e + "'," + t, i);
                            s.appendChild(g), d.push(g)
                        }
                        o[a[l]] = d
                    }
                    return o
                }();
                o.appendChild(s);
                for (var m = [], p = 0, T = a.length; p < T; p++) i(h[a[p]]) && m.push(a[p]);
                o.removeChild(s), o.removeChild(l), e(m)
            },
            pauseBefore: !0
        }, {
            key: "fontsFlash",
            getData: function(e, t) {
                return void 0 !== window.swfobject ? window.swfobject.hasFlashPlayerVersion("9.0.0") ? t.fonts.swfPath ? void
                function(e, t) {
                    var n = "___fp_swf_loaded";
                    window[n] = function(t) {
                        e(t)
                    };
                    var a, r = t.fonts.swfContainerId;
                    (a = document.createElement("div")).setAttribute("id", (void 0).fonts.swfContainerId), document.body.appendChild(a);
                    var i = {
                        onReady: n
                    };
                    window.swfobject.embedSWF(t.fonts.swfPath, r, "1", "1", "9.0.0", !1, i, {
                        allowScriptAccess: "always",
                        menu: "false"
                    }, {})
                }((function(t) {
                    e(t)
                }), t): e("missing options.fonts.swfPath"): e("flash not installed"): e("swf object not loaded")
            },
            pauseBefore: !0
        }, {
            key: "audio",
            getData: function(e, t) {
                var n = t.audio;
                if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (null == a) return e(t.NOT_AVAILABLE);
                var r = new a(1, 44100, 44100),
                    i = r.createOscillator();
                i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
                var o = r.createDynamicsCompressor();
                l([
                    ["threshold", -50],
                    ["knee", 40],
                    ["ratio", 12],
                    ["reduction", -20],
                    ["attack", 0],
                    ["release", .25]
                ], (function(e) {
                    void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
                })), i.connect(o), o.connect(r.destination), i.start(0), r.startRendering();
                var s = setTimeout((function() {
                    return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".'), r.oncomplete = function() {}, r = null, e("audioTimeout")
                }), n.timeout);
                r.oncomplete = function(t) {
                    var n;
                    try {
                        clearTimeout(s), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                            return e + Math.abs(t)
                        }), 0).toString(), i.disconnect(), o.disconnect()
                    } catch (t) {
                        return void e(t)
                    }
                    e(n)
                }
            }
        }, {
            key: "enumerateDevices",
            getData: function(e, t) {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return e(t.NOT_AVAILABLE);
                navigator.mediaDevices.enumerateDevices().then((function(t) {
                    e(t.map((function(e) {
                        return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                    })))
                })).catch((function(t) {
                    e(t)
                }))
            }
        }];
    return c.get = function(e, t) {
        (function(e, t) {
            var n, a;
            if (null != t)
                for (a in t) null == (n = t[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = n)
        })(e = t ? e || {} : (t = e, {}), d), e.components = e.extraComponents.concat(A);
        var n = {
                data: [],
                addPreprocessedComponent: function(t, a) {
                    "function" == typeof e.preprocessor && (a = e.preprocessor(t, a)), n.data.push({
                        key: t,
                        value: a
                    })
                }
            },
            a = -1,
            r = function(i) {
                if ((a += 1) >= e.components.length) t(n.data);
                else {
                    var o = e.components[a];
                    if (e.excludes[o.key]) r(!1);
                    else {
                        if (!i && o.pauseBefore) return --a, void setTimeout((function() {
                            r(!0)
                        }), 1);
                        try {
                            o.getData((function(e) {
                                n.addPreprocessedComponent(o.key, e), r(!1)
                            }), e)
                        } catch (i) {
                            n.addPreprocessedComponent(o.key, String(i)), r(!1)
                        }
                    }
                }
            };
        r(!1)
    }, c.getPromise = function(e) {
        return new Promise((function(t, n) {
            c.get(e, t)
        }))
    }, c.getV18 = function(e, t) {
        return null == t && (t = e, e = {}), c.get(e, (function(n) {
            for (var a = [], r = 0; r < n.length; r++) {
                var i = n[r];
                if (i.value === (e.NOT_AVAILABLE || "not available")) a.push({
                    key: i.key,
                    value: "unknown"
                });
                else if ("plugins" === i.key) a.push({
                    key: "plugins",
                    value: s(i.value, (function(e) {
                        var t = s(e[2], (function(e) {
                            return e.join ? e.join("~") : e
                        })).join(",");
                        return [e[0], e[1], t].join("::")
                    }))
                });
                else if (-1 !== ["canvas", "webgl"].indexOf(i.key) && Array.isArray(i.value)) a.push({
                    key: i.key,
                    value: i.value.join("~")
                });
                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                    if (!i.value) continue;
                    a.push({
                        key: i.key,
                        value: 1
                    })
                } else i.value ? a.push(i.value.join ? {
                    key: i.key,
                    value: i.value.join(";")
                } : i) : a.push({
                    key: i.key,
                    value: i.value
                })
            }
            var l = o(s(a, (function(e) {
                return e.value
            })).join("~~~"), 31);
            t(l, a)
        }))
    }, c.x64hash128 = o, c.VERSION = "2.1.4", c
}));
! function(t, e) {
    "object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.CryptoJS = e()
}(this, (function() {
    var t, e, r, i, n, o, s, a = a || function(t, e) {
        var r = Object.create || function() {
                function t() {}
                return function(e) {
                    var r;
                    return t.prototype = e, r = new t, t.prototype = null, r
                }
            }(),
            i = {},
            n = i.lib = {},
            o = n.Base = {
                extend: function(t) {
                    var e = r(this);
                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }), e.init.prototype = e, e.$super = this, e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            s = n.WordArray = o.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                },
                toString: function(t) {
                    return (t || c).stringify(this)
                },
                concat: function(t) {
                    var e = this.words,
                        r = t.words,
                        i = this.sigBytes,
                        n = t.sigBytes;
                    if (this.clamp(), i % 4)
                        for (var o = 0; o < n; o++) {
                            var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            e[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                        } else
                            for (o = 0; o < n; o += 4) e[i + o >>> 2] = r[o >>> 2];
                    return this.sigBytes += n, this
                },
                clamp: function() {
                    var e = this.words,
                        r = this.sigBytes;
                    e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0), t
                },
                random: function(e) {
                    for (var r, i = [], n = function(e) {
                            e = e;
                            var r = 987654321,
                                i = 4294967295;
                            return function() {
                                var n = ((r = 36969 * (65535 & r) + (r >> 16) & i) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & i) & i;
                                return n /= 4294967296, (n += .5) * (t.random() > .5 ? 1 : -1)
                            }
                        }, o = 0; o < e; o += 4) {
                        var a = n(4294967296 * (r || t.random()));
                        r = 987654071 * a(), i.push(4294967296 * a() | 0)
                    }
                    return new s.init(i, e)
                }
            }),
            a = i.enc = {},
            c = a.Hex = {
                stringify: function(t) {
                    for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
                        var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                    }
                    return i.join("")
                },
                parse: function(t) {
                    for (var e = t.length, r = [], i = 0; i < e; i += 2) r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new s.init(r, e / 2)
                }
            },
            h = a.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
                        var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push(String.fromCharCode(o))
                    }
                    return i.join("")
                },
                parse: function(t) {
                    for (var e = t.length, r = [], i = 0; i < e; i++) r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new s.init(r, e)
                }
            },
            l = a.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(h.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return h.parse(unescape(encodeURIComponent(t)))
                }
            },
            f = n.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new s.init, this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = l.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                },
                _process: function(e) {
                    var r = this._data,
                        i = r.words,
                        n = r.sigBytes,
                        o = this.blockSize,
                        a = n / (4 * o),
                        c = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o,
                        h = t.min(4 * c, n);
                    if (c) {
                        for (var l = 0; l < c; l += o) this._doProcessBlock(i, l);
                        var f = i.splice(0, c);
                        r.sigBytes -= h
                    }
                    return new s.init(f, h)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(), t
                },
                _minBufferSize: 0
            }),
            u = (n.Hasher = f.extend({
                cfg: o.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                },
                reset: function() {
                    f.reset.call(this), this._doReset()
                },
                update: function(t) {
                    return this._append(t), this._process(), this
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(t) {
                    return function(e, r) {
                        return new t.init(r).finalize(e)
                    }
                },
                _createHmacHelper: function(t) {
                    return function(e, r) {
                        return new u.HMAC.init(t, r).finalize(e)
                    }
                }
            }), i.algo = {});
        return i
    }(Math);
    return function() {
            function t(t, e, i) {
                for (var n = [], o = 0, s = 0; s < e; s++)
                    if (s % 4) {
                        var a = i[t.charCodeAt(s - 1)] << s % 4 * 2,
                            c = i[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                        n[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++
                    } return r.create(n, o)
            }
            var e = a,
                r = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function(t) {
                    var e = t.words,
                        r = t.sigBytes,
                        i = this._map;
                    t.clamp();
                    for (var n = [], o = 0; o < r; o += 3)
                        for (var s = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < r; a++) n.push(i.charAt(s >>> 6 * (3 - a) & 63));
                    var c = i.charAt(64);
                    if (c)
                        for (; n.length % 4;) n.push(c);
                    return n.join("")
                },
                parse: function(e) {
                    var r = e.length,
                        i = this._map,
                        n = this._reverseMap;
                    if (!n) {
                        n = this._reverseMap = [];
                        for (var o = 0; o < i.length; o++) n[i.charCodeAt(o)] = o
                    }
                    var s = i.charAt(64);
                    if (s) {
                        var a = e.indexOf(s); - 1 !== a && (r = a)
                    }
                    return t(e, r, n)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(),
        function(t) {
            function e(t, e, r, i, n, o, s) {
                var a = t + (e & r | ~e & i) + n + s;
                return (a << o | a >>> 32 - o) + e
            }

            function r(t, e, r, i, n, o, s) {
                var a = t + (e & i | r & ~i) + n + s;
                return (a << o | a >>> 32 - o) + e
            }

            function i(t, e, r, i, n, o, s) {
                var a = t + (e ^ r ^ i) + n + s;
                return (a << o | a >>> 32 - o) + e
            }

            function n(t, e, r, i, n, o, s) {
                var a = t + (r ^ (e | ~i)) + n + s;
                return (a << o | a >>> 32 - o) + e
            }
            var o = a,
                s = o.lib,
                c = s.WordArray,
                h = s.Hasher,
                l = o.algo,
                f = [];
            ! function() {
                for (var e = 0; e < 64; e++) f[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
            }();
            var u = l.MD5 = h.extend({
                _doReset: function() {
                    this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(t, o) {
                    for (var s = 0; s < 16; s++) {
                        var a = o + s,
                            c = t[a];
                        t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                    }
                    var h = this._hash.words,
                        l = t[o + 0],
                        u = t[o + 1],
                        d = t[o + 2],
                        p = t[o + 3],
                        _ = t[o + 4],
                        v = t[o + 5],
                        y = t[o + 6],
                        g = t[o + 7],
                        B = t[o + 8],
                        w = t[o + 9],
                        k = t[o + 10],
                        S = t[o + 11],
                        m = t[o + 12],
                        x = t[o + 13],
                        b = t[o + 14],
                        H = t[o + 15],
                        z = h[0],
                        A = h[1],
                        C = h[2],
                        D = h[3];
                    z = e(z, A, C, D, l, 7, f[0]), D = e(D, z, A, C, u, 12, f[1]), C = e(C, D, z, A, d, 17, f[2]), A = e(A, C, D, z, p, 22, f[3]), z = e(z, A, C, D, _, 7, f[4]), D = e(D, z, A, C, v, 12, f[5]), C = e(C, D, z, A, y, 17, f[6]), A = e(A, C, D, z, g, 22, f[7]), z = e(z, A, C, D, B, 7, f[8]), D = e(D, z, A, C, w, 12, f[9]), C = e(C, D, z, A, k, 17, f[10]), A = e(A, C, D, z, S, 22, f[11]), z = e(z, A, C, D, m, 7, f[12]), D = e(D, z, A, C, x, 12, f[13]), C = e(C, D, z, A, b, 17, f[14]), z = r(z, A = e(A, C, D, z, H, 22, f[15]), C, D, u, 5, f[16]), D = r(D, z, A, C, y, 9, f[17]), C = r(C, D, z, A, S, 14, f[18]), A = r(A, C, D, z, l, 20, f[19]), z = r(z, A, C, D, v, 5, f[20]), D = r(D, z, A, C, k, 9, f[21]), C = r(C, D, z, A, H, 14, f[22]), A = r(A, C, D, z, _, 20, f[23]), z = r(z, A, C, D, w, 5, f[24]), D = r(D, z, A, C, b, 9, f[25]), C = r(C, D, z, A, p, 14, f[26]), A = r(A, C, D, z, B, 20, f[27]), z = r(z, A, C, D, x, 5, f[28]), D = r(D, z, A, C, d, 9, f[29]), C = r(C, D, z, A, g, 14, f[30]), z = i(z, A = r(A, C, D, z, m, 20, f[31]), C, D, v, 4, f[32]), D = i(D, z, A, C, B, 11, f[33]), C = i(C, D, z, A, S, 16, f[34]), A = i(A, C, D, z, b, 23, f[35]), z = i(z, A, C, D, u, 4, f[36]), D = i(D, z, A, C, _, 11, f[37]), C = i(C, D, z, A, g, 16, f[38]), A = i(A, C, D, z, k, 23, f[39]), z = i(z, A, C, D, x, 4, f[40]), D = i(D, z, A, C, l, 11, f[41]), C = i(C, D, z, A, p, 16, f[42]), A = i(A, C, D, z, y, 23, f[43]), z = i(z, A, C, D, w, 4, f[44]), D = i(D, z, A, C, m, 11, f[45]), C = i(C, D, z, A, H, 16, f[46]), z = n(z, A = i(A, C, D, z, d, 23, f[47]), C, D, l, 6, f[48]), D = n(D, z, A, C, g, 10, f[49]), C = n(C, D, z, A, b, 15, f[50]), A = n(A, C, D, z, v, 21, f[51]), z = n(z, A, C, D, m, 6, f[52]), D = n(D, z, A, C, p, 10, f[53]), C = n(C, D, z, A, k, 15, f[54]), A = n(A, C, D, z, u, 21, f[55]), z = n(z, A, C, D, B, 6, f[56]), D = n(D, z, A, C, H, 10, f[57]), C = n(C, D, z, A, y, 15, f[58]), A = n(A, C, D, z, x, 21, f[59]), z = n(z, A, C, D, _, 6, f[60]), D = n(D, z, A, C, S, 10, f[61]), C = n(C, D, z, A, d, 15, f[62]), A = n(A, C, D, z, w, 21, f[63]), h[0] = h[0] + z | 0, h[1] = h[1] + A | 0, h[2] = h[2] + C | 0, h[3] = h[3] + D | 0
                },
                _doFinalize: function() {
                    var e = this._data,
                        r = e.words,
                        i = 8 * this._nDataBytes,
                        n = 8 * e.sigBytes;
                    r[n >>> 5] |= 128 << 24 - n % 32;
                    var o = t.floor(i / 4294967296),
                        s = i;
                    r[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
                    for (var a = this._hash, c = a.words, h = 0; h < 4; h++) {
                        var l = c[h];
                        c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    return a
                },
                clone: function() {
                    var t = h.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            });
            o.MD5 = h._createHelper(u), o.HmacMD5 = h._createHmacHelper(u)
        }(Math), e = (t = a).lib, r = e.WordArray, i = e.Hasher, n = t.algo, o = [], s = n.SHA1 = i.extend({
            _doReset: function() {
                this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, e) {
                for (var r = this._hash.words, i = r[0], n = r[1], s = r[2], a = r[3], c = r[4], h = 0; h < 80; h++) {
                    if (h < 16) o[h] = 0 | t[e + h];
                    else {
                        var l = o[h - 3] ^ o[h - 8] ^ o[h - 14] ^ o[h - 16];
                        o[h] = l << 1 | l >>> 31
                    }
                    var f = (i << 5 | i >>> 27) + c + o[h];
                    f += h < 20 ? 1518500249 + (n & s | ~n & a) : h < 40 ? 1859775393 + (n ^ s ^ a) : h < 60 ? (n & s | n & a | s & a) - 1894007588 : (n ^ s ^ a) - 899497514, c = a, a = s, s = n << 30 | n >>> 2, n = i, i = f
                }
                r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + s | 0, r[3] = r[3] + a | 0, r[4] = r[4] + c | 0
            },
            _doFinalize: function() {
                var t = this._data,
                    e = t.words,
                    r = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), e[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash
            },
            clone: function() {
                var t = i.clone.call(this);
                return t._hash = this._hash.clone(), t
            }
        }), t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s),
        function(t) {
            var e = a,
                r = e.lib,
                i = r.WordArray,
                n = r.Hasher,
                o = e.algo,
                s = [],
                c = [];
            ! function() {
                function e(e) {
                    for (var r = t.sqrt(e), i = 2; i <= r; i++)
                        if (!(e % i)) return !1;
                    return !0
                }

                function r(t) {
                    return 4294967296 * (t - (0 | t)) | 0
                }
                for (var i = 2, n = 0; n < 64;) e(i) && (n < 8 && (s[n] = r(t.pow(i, .5))), c[n] = r(t.pow(i, 1 / 3)), n++), i++
            }();
            var h = [],
                l = o.SHA256 = n.extend({
                    _doReset: function() {
                        this._hash = new i.init(s.slice(0))
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], a = r[4], l = r[5], f = r[6], u = r[7], d = 0; d < 64; d++) {
                            if (d < 16) h[d] = 0 | t[e + d];
                            else {
                                var p = h[d - 15],
                                    _ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                                    v = h[d - 2],
                                    y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                                h[d] = _ + h[d - 7] + y + h[d - 16]
                            }
                            var g = i & n ^ i & o ^ n & o,
                                B = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                                w = u + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & f) + c[d] + h[d];
                            u = f, f = l, l = a, a = s + w | 0, s = o, o = n, n = i, i = w + (B + g) | 0
                        }
                        r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0, r[5] = r[5] + l | 0, r[6] = r[6] + f | 0, r[7] = r[7] + u | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            r = e.words,
                            i = 8 * this._nDataBytes,
                            n = 8 * e.sigBytes;
                        return r[n >>> 5] |= 128 << 24 - n % 32, r[14 + (n + 64 >>> 9 << 4)] = t.floor(i / 4294967296), r[15 + (n + 64 >>> 9 << 4)] = i, e.sigBytes = 4 * r.length, this._process(), this._hash
                    },
                    clone: function() {
                        var t = n.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });
            e.SHA256 = n._createHelper(l), e.HmacSHA256 = n._createHmacHelper(l)
        }(Math),
        function() {
            function t(t) {
                return t << 8 & 4278255360 | t >>> 8 & 16711935
            }
            var e = a,
                r = e.lib.WordArray,
                i = e.enc;
            i.Utf16 = i.Utf16BE = {
                stringify: function(t) {
                    for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) {
                        var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                        i.push(String.fromCharCode(o))
                    }
                    return i.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
                    return r.create(i, 2 * e)
                }
            }, i.Utf16LE = {
                stringify: function(e) {
                    for (var r = e.words, i = e.sigBytes, n = [], o = 0; o < i; o += 2) {
                        var s = t(r[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                        n.push(String.fromCharCode(s))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var i = e.length, n = [], o = 0; o < i; o++) n[o >>> 1] |= t(e.charCodeAt(o) << 16 - o % 2 * 16);
                    return r.create(n, 2 * i)
                }
            }
        }(),
        function() {
            if ("function" == typeof ArrayBuffer) {
                var t = a.lib.WordArray,
                    e = t.init;
                (t.init = function(t) {
                    if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                        for (var r = t.byteLength, i = [], n = 0; n < r; n++) i[n >>> 2] |= t[n] << 24 - n % 4 * 8;
                        e.call(this, i, r)
                    } else e.apply(this, arguments)
                }).prototype = t
            }
        }(),
        function(t) {
            function e(t, e, r) {
                return t ^ e ^ r
            }

            function r(t, e, r) {
                return t & e | ~t & r
            }

            function i(t, e, r) {
                return (t | ~e) ^ r
            }

            function n(t, e, r) {
                return t & r | e & ~r
            }

            function o(t, e, r) {
                return t ^ (e | ~r)
            }

            function s(t, e) {
                return t << e | t >>> 32 - e
            }
            var c = a,
                h = c.lib,
                l = h.WordArray,
                f = h.Hasher,
                u = c.algo,
                d = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                p = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                _ = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                v = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                y = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                g = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                B = u.RIPEMD160 = f.extend({
                    _doReset: function() {
                        this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, a) {
                        for (var c = 0; c < 16; c++) {
                            var h = a + c,
                                l = t[h];
                            t[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                        }
                        var f, u, B, w, k, S, m, x, b, H, z = this._hash.words,
                            A = y.words,
                            C = g.words,
                            D = d.words,
                            R = p.words,
                            E = _.words,
                            M = v.words;
                        S = f = z[0], m = u = z[1], x = B = z[2], b = w = z[3], H = k = z[4];
                        var F;
                        for (c = 0; c < 80; c += 1) F = f + t[a + D[c]] | 0, F += c < 16 ? e(u, B, w) + A[0] : c < 32 ? r(u, B, w) + A[1] : c < 48 ? i(u, B, w) + A[2] : c < 64 ? n(u, B, w) + A[3] : o(u, B, w) + A[4], F = (F = s(F |= 0, E[c])) + k | 0, f = k, k = w, w = s(B, 10), B = u, u = F, F = S + t[a + R[c]] | 0, F += c < 16 ? o(m, x, b) + C[0] : c < 32 ? n(m, x, b) + C[1] : c < 48 ? i(m, x, b) + C[2] : c < 64 ? r(m, x, b) + C[3] : e(m, x, b) + C[4], F = (F = s(F |= 0, M[c])) + H | 0, S = H, H = b, b = s(x, 10), x = m, m = F;
                        F = z[1] + B + b | 0, z[1] = z[2] + w + H | 0, z[2] = z[3] + k + S | 0, z[3] = z[4] + f + m | 0, z[4] = z[0] + u + x | 0, z[0] = F
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            e = t.words,
                            r = 8 * this._nDataBytes,
                            i = 8 * t.sigBytes;
                        e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var n = this._hash, o = n.words, s = 0; s < 5; s++) {
                            var a = o[s];
                            o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                        }
                        return n
                    },
                    clone: function() {
                        var t = f.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });
            c.RIPEMD160 = f._createHelper(B), c.HmacRIPEMD160 = f._createHmacHelper(B)
        }(Math),
        function() {
            var t = a,
                e = t.lib.Base,
                r = t.enc.Utf8;
            t.algo.HMAC = e.extend({
                init: function(t, e) {
                    t = this._hasher = new t.init, "string" == typeof e && (e = r.parse(e));
                    var i = t.blockSize,
                        n = 4 * i;
                    e.sigBytes > n && (e = t.finalize(e)), e.clamp();
                    for (var o = this._oKey = e.clone(), s = this._iKey = e.clone(), a = o.words, c = s.words, h = 0; h < i; h++) a[h] ^= 1549556828, c[h] ^= 909522486;
                    o.sigBytes = s.sigBytes = n, this.reset()
                },
                reset: function() {
                    var t = this._hasher;
                    t.reset(), t.update(this._iKey)
                },
                update: function(t) {
                    return this._hasher.update(t), this
                },
                finalize: function(t) {
                    var e = this._hasher,
                        r = e.finalize(t);
                    return e.reset(), e.finalize(this._oKey.clone().concat(r))
                }
            })
        }(),
        function() {
            var t = a,
                e = t.lib,
                r = e.Base,
                i = e.WordArray,
                n = t.algo,
                o = n.SHA1,
                s = n.HMAC,
                c = n.PBKDF2 = r.extend({
                    cfg: r.extend({
                        keySize: 4,
                        hasher: o,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var r = this.cfg, n = s.create(r.hasher, t), o = i.create(), a = i.create([1]), c = o.words, h = a.words, l = r.keySize, f = r.iterations; c.length < l;) {
                            var u = n.update(e).finalize(a);
                            n.reset();
                            for (var d = u.words, p = d.length, _ = u, v = 1; v < f; v++) {
                                _ = n.finalize(_), n.reset();
                                for (var y = _.words, g = 0; g < p; g++) d[g] ^= y[g]
                            }
                            o.concat(u), h[0]++
                        }
                        return o.sigBytes = 4 * l, o
                    }
                });
            t.PBKDF2 = function(t, e, r) {
                return c.create(r).compute(t, e)
            }
        }(),
        function() {
            var t = a,
                e = t.lib,
                r = e.Base,
                i = e.WordArray,
                n = t.algo,
                o = n.MD5,
                s = n.EvpKDF = r.extend({
                    cfg: r.extend({
                        keySize: 4,
                        hasher: o,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var r = this.cfg, n = r.hasher.create(), o = i.create(), s = o.words, a = r.keySize, c = r.iterations; s.length < a;) {
                            h && n.update(h);
                            var h = n.update(t).finalize(e);
                            n.reset();
                            for (var l = 1; l < c; l++) h = n.finalize(h), n.reset();
                            o.concat(h)
                        }
                        return o.sigBytes = 4 * a, o
                    }
                });
            t.EvpKDF = function(t, e, r) {
                return s.create(r).compute(t, e)
            }
        }(),
        function() {
            var t = a,
                e = t.lib.WordArray,
                r = t.algo,
                i = r.SHA256,
                n = r.SHA224 = i.extend({
                    _doReset: function() {
                        this._hash = new e.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                    },
                    _doFinalize: function() {
                        var t = i._doFinalize.call(this);
                        return t.sigBytes -= 4, t
                    }
                });
            t.SHA224 = i._createHelper(n), t.HmacSHA224 = i._createHmacHelper(n)
        }(),
        function(t) {
            var e = a,
                r = e.lib,
                i = r.Base,
                n = r.WordArray,
                o = e.x64 = {};
            o.Word = i.extend({
                init: function(t, e) {
                    this.high = t, this.low = e
                }
            }), o.WordArray = i.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length
                },
                toX32: function() {
                    for (var t = this.words, e = t.length, r = [], i = 0; i < e; i++) {
                        var o = t[i];
                        r.push(o.high), r.push(o.low)
                    }
                    return n.create(r, this.sigBytes)
                },
                clone: function() {
                    for (var t = i.clone.call(this), e = t.words = this.words.slice(0), r = e.length, n = 0; n < r; n++) e[n] = e[n].clone();
                    return t
                }
            })
        }(),
        function(t) {
            var e = a,
                r = e.lib,
                i = r.WordArray,
                n = r.Hasher,
                o = e.x64.Word,
                s = e.algo,
                c = [],
                h = [],
                l = [];
            ! function() {
                for (var t = 1, e = 0, r = 0; r < 24; r++) {
                    c[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64;
                    var i = (2 * t + 3 * e) % 5;
                    t = e % 5, e = i
                }
                for (t = 0; t < 5; t++)
                    for (e = 0; e < 5; e++) h[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
                for (var n = 1, s = 0; s < 24; s++) {
                    for (var a = 0, f = 0, u = 0; u < 7; u++) {
                        if (1 & n) {
                            var d = (1 << u) - 1;
                            d < 32 ? f ^= 1 << d : a ^= 1 << d - 32
                        }
                        128 & n ? n = n << 1 ^ 113 : n <<= 1
                    }
                    l[s] = o.create(a, f)
                }
            }();
            var f = [];
            ! function() {
                for (var t = 0; t < 25; t++) f[t] = o.create()
            }();
            var u = s.SHA3 = n.extend({
                cfg: n.cfg.extend({
                    outputLength: 512
                }),
                _doReset: function() {
                    for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new o.init;
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                },
                _doProcessBlock: function(t, e) {
                    for (var r = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
                        var o = t[e + 2 * n],
                            s = t[e + 2 * n + 1];
                        o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), (A = r[n]).high ^= s, A.low ^= o
                    }
                    for (var a = 0; a < 24; a++) {
                        for (var u = 0; u < 5; u++) {
                            for (var d = 0, p = 0, _ = 0; _ < 5; _++) {
                                d ^= (A = r[u + 5 * _]).high, p ^= A.low
                            }
                            var v = f[u];
                            v.high = d, v.low = p
                        }
                        for (u = 0; u < 5; u++) {
                            var y = f[(u + 4) % 5],
                                g = f[(u + 1) % 5],
                                B = g.high,
                                w = g.low;
                            for (d = y.high ^ (B << 1 | w >>> 31), p = y.low ^ (w << 1 | B >>> 31), _ = 0; _ < 5; _++) {
                                (A = r[u + 5 * _]).high ^= d, A.low ^= p
                            }
                        }
                        for (var k = 1; k < 25; k++) {
                            var S = (A = r[k]).high,
                                m = A.low,
                                x = c[k];
                            if (x < 32) d = S << x | m >>> 32 - x, p = m << x | S >>> 32 - x;
                            else d = m << x - 32 | S >>> 64 - x, p = S << x - 32 | m >>> 64 - x;
                            var b = f[h[k]];
                            b.high = d, b.low = p
                        }
                        var H = f[0],
                            z = r[0];
                        H.high = z.high, H.low = z.low;
                        for (u = 0; u < 5; u++)
                            for (_ = 0; _ < 5; _++) {
                                var A = r[k = u + 5 * _],
                                    C = f[k],
                                    D = f[(u + 1) % 5 + 5 * _],
                                    R = f[(u + 2) % 5 + 5 * _];
                                A.high = C.high ^ ~D.high & R.high, A.low = C.low ^ ~D.low & R.low
                            }
                        A = r[0];
                        var E = l[a];
                        A.high ^= E.high, A.low ^= E.low
                    }
                },
                _doFinalize: function() {
                    var e = this._data,
                        r = e.words,
                        n = (this._nDataBytes, 8 * e.sigBytes),
                        o = 32 * this.blockSize;
                    r[n >>> 5] |= 1 << 24 - n % 32, r[(t.ceil((n + 1) / o) * o >>> 5) - 1] |= 128, e.sigBytes = 4 * r.length, this._process();
                    for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) {
                        var f = s[l],
                            u = f.high,
                            d = f.low;
                        u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u)
                    }
                    return new i.init(h, a)
                },
                clone: function() {
                    for (var t = n.clone.call(this), e = t._state = this._state.slice(0), r = 0; r < 25; r++) e[r] = e[r].clone();
                    return t
                }
            });
            e.SHA3 = n._createHelper(u), e.HmacSHA3 = n._createHmacHelper(u)
        }(Math),
        function() {
            function t() {
                return n.create.apply(n, arguments)
            }
            var e = a,
                r = e.lib.Hasher,
                i = e.x64,
                n = i.Word,
                o = i.WordArray,
                s = e.algo,
                c = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)],
                h = [];
            ! function() {
                for (var e = 0; e < 80; e++) h[e] = t()
            }();
            var l = s.SHA512 = r.extend({
                _doReset: function() {
                    this._hash = new o.init([new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209)])
                },
                _doProcessBlock: function(t, e) {
                    for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], a = r[4], l = r[5], f = r[6], u = r[7], d = i.high, p = i.low, _ = n.high, v = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = l.high, x = l.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = p, R = _, E = v, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) {
                        var Z = h[T];
                        if (T < 16) var q = Z.high = 0 | t[e + 2 * T],
                            G = Z.low = 0 | t[e + 2 * T + 1];
                        else {
                            var J = h[T - 15],
                                $ = J.high,
                                Q = J.low,
                                V = ($ >>> 1 | Q << 31) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7,
                                Y = (Q >>> 1 | $ << 31) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25),
                                tt = h[T - 2],
                                et = tt.high,
                                rt = tt.low,
                                it = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ et >>> 6,
                                nt = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ (rt >>> 6 | et << 26),
                                ot = h[T - 7],
                                st = ot.high,
                                at = ot.low,
                                ct = h[T - 16],
                                ht = ct.high,
                                lt = ct.low;
                            q = (q = (q = V + st + ((G = Y + at) >>> 0 < Y >>> 0 ? 1 : 0)) + it + ((G = G + nt) >>> 0 < nt >>> 0 ? 1 : 0)) + ht + ((G = G + lt) >>> 0 < lt >>> 0 ? 1 : 0);
                            Z.high = q, Z.low = G
                        }
                        var ft, ut = O & I ^ ~O & X,
                            dt = U & K ^ ~U & L,
                            pt = C & R ^ C & M ^ R & M,
                            _t = D & E ^ D & F ^ E & F,
                            vt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7),
                            yt = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7),
                            gt = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9),
                            Bt = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9),
                            wt = c[T],
                            kt = wt.high,
                            St = wt.low,
                            mt = j + gt + ((ft = N + Bt) >>> 0 < N >>> 0 ? 1 : 0),
                            xt = yt + _t;
                        j = X, N = L, X = I, L = K, I = O, K = U, O = P + (mt = (mt = (mt = mt + ut + ((ft = ft + dt) >>> 0 < dt >>> 0 ? 1 : 0)) + kt + ((ft = ft + St) >>> 0 < St >>> 0 ? 1 : 0)) + q + ((ft = ft + G) >>> 0 < G >>> 0 ? 1 : 0)) + ((U = W + ft | 0) >>> 0 < W >>> 0 ? 1 : 0) | 0, P = M, W = F, M = R, F = E, R = C, E = D, C = mt + (vt + pt + (xt >>> 0 < yt >>> 0 ? 1 : 0)) + ((D = ft + xt | 0) >>> 0 < ft >>> 0 ? 1 : 0) | 0
                    }
                    p = i.low = p + D, i.high = d + C + (p >>> 0 < D >>> 0 ? 1 : 0), v = n.low = v + E, n.high = _ + R + (v >>> 0 < E >>> 0 ? 1 : 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = a.low = S + U, a.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0), x = l.low = x + K, l.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0), H = f.low = H + L, f.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0), A = u.low = A + N, u.high = z + j + (A >>> 0 < N >>> 0 ? 1 : 0)
                },
                _doFinalize: function() {
                    var t = this._data,
                        e = t.words,
                        r = 8 * this._nDataBytes,
                        i = 8 * t.sigBytes;
                    return e[i >>> 5] |= 128 << 24 - i % 32, e[30 + (i + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), e[31 + (i + 128 >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32()
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t._hash = this._hash.clone(), t
                },
                blockSize: 32
            });
            e.SHA512 = r._createHelper(l), e.HmacSHA512 = r._createHmacHelper(l)
        }(),
        function() {
            var t = a,
                e = t.x64,
                r = e.Word,
                i = e.WordArray,
                n = t.algo,
                o = n.SHA512,
                s = n.SHA384 = o.extend({
                    _doReset: function() {
                        this._hash = new i.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)])
                    },
                    _doFinalize: function() {
                        var t = o._doFinalize.call(this);
                        return t.sigBytes -= 16, t
                    }
                });
            t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s)
        }(), a.lib.Cipher || function(t) {
            var e = a,
                r = e.lib,
                i = r.Base,
                n = r.WordArray,
                o = r.BufferedBlockAlgorithm,
                s = e.enc,
                c = (s.Utf8, s.Base64),
                h = e.algo.EvpKDF,
                l = r.Cipher = o.extend({
                    cfg: i.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, r) {
                        this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset()
                    },
                    reset: function() {
                        o.reset.call(this), this._doReset()
                    },
                    process: function(t) {
                        return this._append(t), this._process()
                    },
                    finalize: function(t) {
                        return t && this._append(t), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function t(t) {
                            return "string" == typeof t ? B : y
                        }
                        return function(e) {
                            return {
                                encrypt: function(r, i, n) {
                                    return t(i).encrypt(e, r, i, n)
                                },
                                decrypt: function(r, i, n) {
                                    return t(i).decrypt(e, r, i, n)
                                }
                            }
                        }
                    }()
                }),
                f = (r.StreamCipher = l.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                }), e.mode = {}),
                u = r.BlockCipherMode = i.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t, this._iv = e
                    }
                }),
                d = f.CBC = function() {
                    function t(t, e, r) {
                        var i = this._iv;
                        if (i) {
                            var n = i;
                            this._iv = void 0
                        } else n = this._prevBlock;
                        for (var o = 0; o < r; o++) t[e + o] ^= n[o]
                    }
                    var e = u.extend();
                    return e.Encryptor = e.extend({
                        processBlock: function(e, r) {
                            var i = this._cipher,
                                n = i.blockSize;
                            t.call(this, e, r, n), i.encryptBlock(e, r), this._prevBlock = e.slice(r, r + n)
                        }
                    }), e.Decryptor = e.extend({
                        processBlock: function(e, r) {
                            var i = this._cipher,
                                n = i.blockSize,
                                o = e.slice(r, r + n);
                            i.decryptBlock(e, r), t.call(this, e, r, n), this._prevBlock = o
                        }
                    }), e
                }(),
                p = (e.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var r = 4 * e, i = r - t.sigBytes % r, o = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4) s.push(o);
                        var c = n.create(s, i);
                        t.concat(c)
                    },
                    unpad: function(t) {
                        var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                        t.sigBytes -= e
                    }
                },
                _ = (r.BlockCipher = l.extend({
                    cfg: l.cfg.extend({
                        mode: d,
                        padding: p
                    }),
                    reset: function() {
                        l.reset.call(this);
                        var t = this.cfg,
                            e = t.iv,
                            r = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var i = r.createEncryptor;
                        else {
                            i = r.createDecryptor;
                            this._minBufferSize = 1
                        }
                        this._mode && this._mode.__creator == i ? this._mode.init(this, e && e.words) : (this._mode = i.call(r, this, e && e.words), this._mode.__creator = i)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else {
                            e = this._process(!0);
                            t.unpad(e)
                        }
                        return e
                    },
                    blockSize: 4
                }), r.CipherParams = i.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                })),
                v = (e.format = {}).OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext,
                            r = t.salt;
                        if (r) var i = n.create([1398893684, 1701076831]).concat(r).concat(e);
                        else i = e;
                        return i.toString(c)
                    },
                    parse: function(t) {
                        var e = c.parse(t),
                            r = e.words;
                        if (1398893684 == r[0] && 1701076831 == r[1]) {
                            var i = n.create(r.slice(2, 4));
                            r.splice(0, 4), e.sigBytes -= 16
                        }
                        return _.create({
                            ciphertext: e,
                            salt: i
                        })
                    }
                },
                y = r.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: v
                    }),
                    encrypt: function(t, e, r, i) {
                        i = this.cfg.extend(i);
                        var n = t.createEncryptor(r, i),
                            o = n.finalize(e),
                            s = n.cfg;
                        return _.create({
                            ciphertext: o,
                            key: r,
                            iv: s.iv,
                            algorithm: t,
                            mode: s.mode,
                            padding: s.padding,
                            blockSize: t.blockSize,
                            formatter: i.format
                        })
                    },
                    decrypt: function(t, e, r, i) {
                        return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(r, i).finalize(e.ciphertext)
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                }),
                g = (e.kdf = {}).OpenSSL = {
                    execute: function(t, e, r, i) {
                        i || (i = n.random(8));
                        var o = h.create({
                                keySize: e + r
                            }).compute(t, i),
                            s = n.create(o.words.slice(e), 4 * r);
                        return o.sigBytes = 4 * e, _.create({
                            key: o,
                            iv: s,
                            salt: i
                        })
                    }
                },
                B = r.PasswordBasedCipher = y.extend({
                    cfg: y.cfg.extend({
                        kdf: g
                    }),
                    encrypt: function(t, e, r, i) {
                        var n = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize);
                        i.iv = n.iv;
                        var o = y.encrypt.call(this, t, e, n.key, i);
                        return o.mixIn(n), o
                    },
                    decrypt: function(t, e, r, i) {
                        i = this.cfg.extend(i), e = this._parse(e, i.format);
                        var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);
                        return i.iv = n.iv, y.decrypt.call(this, t, e, n.key, i)
                    }
                })
        }(), a.mode.CFB = function() {
            function t(t, e, r, i) {
                var n = this._iv;
                if (n) {
                    var o = n.slice(0);
                    this._iv = void 0
                } else o = this._prevBlock;
                i.encryptBlock(o, 0);
                for (var s = 0; s < r; s++) t[e + s] ^= o[s]
            }
            var e = a.lib.BlockCipherMode.extend();
            return e.Encryptor = e.extend({
                processBlock: function(e, r) {
                    var i = this._cipher,
                        n = i.blockSize;
                    t.call(this, e, r, n, i), this._prevBlock = e.slice(r, r + n)
                }
            }), e.Decryptor = e.extend({
                processBlock: function(e, r) {
                    var i = this._cipher,
                        n = i.blockSize,
                        o = e.slice(r, r + n);
                    t.call(this, e, r, n, i), this._prevBlock = o
                }
            }), e
        }(), a.mode.ECB = function() {
            var t = a.lib.BlockCipherMode.extend();
            return t.Encryptor = t.extend({
                processBlock: function(t, e) {
                    this._cipher.encryptBlock(t, e)
                }
            }), t.Decryptor = t.extend({
                processBlock: function(t, e) {
                    this._cipher.decryptBlock(t, e)
                }
            }), t
        }(), a.pad.AnsiX923 = {
            pad: function(t, e) {
                var r = t.sigBytes,
                    i = 4 * e,
                    n = i - r % i,
                    o = r + n - 1;
                t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        }, a.pad.Iso10126 = {
            pad: function(t, e) {
                var r = 4 * e,
                    i = r - t.sigBytes % r;
                t.concat(a.lib.WordArray.random(i - 1)).concat(a.lib.WordArray.create([i << 24], 1))
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        }, a.pad.Iso97971 = {
            pad: function(t, e) {
                t.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(t, e)
            },
            unpad: function(t) {
                a.pad.ZeroPadding.unpad(t), t.sigBytes--
            }
        }, a.mode.OFB = function() {
            var t = a.lib.BlockCipherMode.extend(),
                e = t.Encryptor = t.extend({
                    processBlock: function(t, e) {
                        var r = this._cipher,
                            i = r.blockSize,
                            n = this._iv,
                            o = this._keystream;
                        n && (o = this._keystream = n.slice(0), this._iv = void 0), r.encryptBlock(o, 0);
                        for (var s = 0; s < i; s++) t[e + s] ^= o[s]
                    }
                });
            return t.Decryptor = e, t
        }(), a.pad.NoPadding = {
            pad: function() {},
            unpad: function() {}
        },
        function(t) {
            var e = a,
                r = e.lib.CipherParams,
                i = e.enc.Hex;
            e.format.Hex = {
                stringify: function(t) {
                    return t.ciphertext.toString(i)
                },
                parse: function(t) {
                    var e = i.parse(t);
                    return r.create({
                        ciphertext: e
                    })
                }
            }
        }(),
        function() {
            var t = a,
                e = t.lib.BlockCipher,
                r = t.algo,
                i = [],
                n = [],
                o = [],
                s = [],
                c = [],
                h = [],
                l = [],
                f = [],
                u = [],
                d = [];
            ! function() {
                for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var r = 0,
                    a = 0;
                for (e = 0; e < 256; e++) {
                    var p = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4;
                    p = p >>> 8 ^ 255 & p ^ 99, i[r] = p, n[p] = r;
                    var _ = t[r],
                        v = t[_],
                        y = t[v],
                        g = 257 * t[p] ^ 16843008 * p;
                    o[r] = g << 24 | g >>> 8, s[r] = g << 16 | g >>> 16, c[r] = g << 8 | g >>> 24, h[r] = g;
                    g = 16843009 * y ^ 65537 * v ^ 257 * _ ^ 16843008 * r;
                    l[p] = g << 24 | g >>> 8, f[p] = g << 16 | g >>> 16, u[p] = g << 8 | g >>> 24, d[p] = g, r ? (r = _ ^ t[t[t[y ^ _]]], a ^= t[t[a]]) : r = a = 1
                }
            }();
            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                _ = r.AES = e.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), o = this._keySchedule = [], s = 0; s < n; s++)
                                if (s < r) o[s] = e[s];
                                else {
                                    var a = o[s - 1];
                                    s % r ? r > 6 && s % r == 4 && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = i[(a = a << 8 | a >>> 24) >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a], a ^= p[s / r | 0] << 24), o[s] = o[s - r] ^ a
                                } for (var c = this._invKeySchedule = [], h = 0; h < n; h++) {
                                s = n - h;
                                if (h % 4) a = o[s];
                                else a = o[s - 4];
                                c[h] = h < 4 || s <= 4 ? a : l[i[a >>> 24]] ^ f[i[a >>> 16 & 255]] ^ u[i[a >>> 8 & 255]] ^ d[i[255 & a]]
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, o, s, c, h, i)
                    },
                    decryptBlock: function(t, e) {
                        var r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, l, f, u, d, n);
                        r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r
                    },
                    _doCryptBlock: function(t, e, r, i, n, o, s, a) {
                        for (var c = this._nRounds, h = t[e] ^ r[0], l = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], u = t[e + 3] ^ r[3], d = 4, p = 1; p < c; p++) {
                            var _ = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ r[d++],
                                v = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ r[d++],
                                y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ r[d++],
                                g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ r[d++];
                            h = _, l = v, f = y, u = g
                        }
                        _ = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ r[d++], v = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ r[d++], y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ r[d++], g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[d++];
                        t[e] = _, t[e + 1] = v, t[e + 2] = y, t[e + 3] = g
                    },
                    keySize: 8
                });
            t.AES = e._createHelper(_)
        }(),
        function() {
            function t(t, e) {
                var r = (this._lBlock >>> t ^ this._rBlock) & e;
                this._rBlock ^= r, this._lBlock ^= r << t
            }

            function e(t, e) {
                var r = (this._rBlock >>> t ^ this._lBlock) & e;
                this._lBlock ^= r, this._rBlock ^= r << t
            }
            var r = a,
                i = r.lib,
                n = i.WordArray,
                o = i.BlockCipher,
                s = r.algo,
                c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                f = [{
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378
                }, {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672
                }, {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792
                }, {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464
                }, {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040
                }, {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656
                }, {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577
                }, {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848
                }],
                u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                d = s.DES = o.extend({
                    _doReset: function() {
                        for (var t = this._key.words, e = [], r = 0; r < 56; r++) {
                            var i = c[r] - 1;
                            e[r] = t[i >>> 5] >>> 31 - i % 32 & 1
                        }
                        for (var n = this._subKeys = [], o = 0; o < 16; o++) {
                            var s = n[o] = [],
                                a = l[o];
                            for (r = 0; r < 24; r++) s[r / 6 | 0] |= e[(h[r] - 1 + a) % 28] << 31 - r % 6, s[4 + (r / 6 | 0)] |= e[28 + (h[r + 24] - 1 + a) % 28] << 31 - r % 6;
                            s[0] = s[0] << 1 | s[0] >>> 31;
                            for (r = 1; r < 7; r++) s[r] = s[r] >>> 4 * (r - 1) + 3;
                            s[7] = s[7] << 5 | s[7] >>> 27
                        }
                        var f = this._invSubKeys = [];
                        for (r = 0; r < 16; r++) f[r] = n[15 - r]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._subKeys)
                    },
                    decryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._invSubKeys)
                    },
                    _doCryptBlock: function(r, i, n) {
                        this._lBlock = r[i], this._rBlock = r[i + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), e.call(this, 2, 858993459), e.call(this, 8, 16711935), t.call(this, 1, 1431655765);
                        for (var o = 0; o < 16; o++) {
                            for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++) h |= f[l][((c ^ s[l]) & u[l]) >>> 0];
                            this._lBlock = c, this._rBlock = a ^ h
                        }
                        var d = this._lBlock;
                        this._lBlock = this._rBlock, this._rBlock = d, t.call(this, 1, 1431655765), e.call(this, 8, 16711935), e.call(this, 2, 858993459), t.call(this, 16, 65535), t.call(this, 4, 252645135), r[i] = this._lBlock, r[i + 1] = this._rBlock
                    },
                    keySize: 2,
                    ivSize: 2,
                    blockSize: 2
                });
            r.DES = o._createHelper(d);
            var p = s.TripleDES = o.extend({
                _doReset: function() {
                    var t = this._key.words;
                    this._des1 = d.createEncryptor(n.create(t.slice(0, 2))), this._des2 = d.createEncryptor(n.create(t.slice(2, 4))), this._des3 = d.createEncryptor(n.create(t.slice(4, 6)))
                },
                encryptBlock: function(t, e) {
                    this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e)
                },
                decryptBlock: function(t, e) {
                    this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e)
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2
            });
            r.TripleDES = o._createHelper(p)
        }(),
        function() {
            function t() {
                for (var t = this._S, e = this._i, r = this._j, i = 0, n = 0; n < 4; n++) {
                    r = (r + t[e = (e + 1) % 256]) % 256;
                    var o = t[e];
                    t[e] = t[r], t[r] = o, i |= t[(t[e] + t[r]) % 256] << 24 - 8 * n
                }
                return this._i = e, this._j = r, i
            }
            var e = a,
                r = e.lib.StreamCipher,
                i = e.algo,
                n = i.RC4 = r.extend({
                    _doReset: function() {
                        for (var t = this._key, e = t.words, r = t.sigBytes, i = this._S = [], n = 0; n < 256; n++) i[n] = n;
                        n = 0;
                        for (var o = 0; n < 256; n++) {
                            var s = n % r,
                                a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            o = (o + i[n] + a) % 256;
                            var c = i[n];
                            i[n] = i[o], i[o] = c
                        }
                        this._i = this._j = 0
                    },
                    _doProcessBlock: function(e, r) {
                        e[r] ^= t.call(this)
                    },
                    keySize: 8,
                    ivSize: 0
                });
            e.RC4 = r._createHelper(n);
            var o = i.RC4Drop = n.extend({
                cfg: n.cfg.extend({
                    drop: 192
                }),
                _doReset: function() {
                    n._doReset.call(this);
                    for (var e = this.cfg.drop; e > 0; e--) t.call(this)
                }
            });
            e.RC4Drop = r._createHelper(o)
        }(), a.mode.CTRGladman = function() {
            function t(t) {
                if (255 == (t >> 24 & 255)) {
                    var e = t >> 16 & 255,
                        r = t >> 8 & 255,
                        i = 255 & t;
                    255 === e ? (e = 0, 255 === r ? (r = 0, 255 === i ? i = 0 : ++i) : ++r) : ++e, t = 0, t += e << 16, t += r << 8, t += i
                } else t += 1 << 24;
                return t
            }

            function e(e) {
                return 0 === (e[0] = t(e[0])) && (e[1] = t(e[1])), e
            }
            var r = a.lib.BlockCipherMode.extend(),
                i = r.Encryptor = r.extend({
                    processBlock: function(t, r) {
                        var i = this._cipher,
                            n = i.blockSize,
                            o = this._iv,
                            s = this._counter;
                        o && (s = this._counter = o.slice(0), this._iv = void 0), e(s);
                        var a = s.slice(0);
                        i.encryptBlock(a, 0);
                        for (var c = 0; c < n; c++) t[r + c] ^= a[c]
                    }
                });
            return r.Decryptor = i, r
        }(),
        function() {
            function t() {
                for (var t = this._X, e = this._C, r = 0; r < 8; r++) o[r] = e[r];
                e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
                for (r = 0; r < 8; r++) {
                    var i = t[r] + e[r],
                        n = 65535 & i,
                        a = i >>> 16,
                        c = ((n * n >>> 17) + n * a >>> 15) + a * a,
                        h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                    s[r] = c ^ h
                }
                t[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, t[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, t[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, t[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, t[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, t[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, t[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, t[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
            }
            var e = a,
                r = e.lib.StreamCipher,
                i = e.algo,
                n = [],
                o = [],
                s = [],
                c = i.Rabbit = r.extend({
                    _doReset: function() {
                        for (var e = this._key.words, r = this.cfg.iv, i = 0; i < 4; i++) e[i] = 16711935 & (e[i] << 8 | e[i] >>> 24) | 4278255360 & (e[i] << 24 | e[i] >>> 8);
                        var n = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                            o = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                        this._b = 0;
                        for (i = 0; i < 4; i++) t.call(this);
                        for (i = 0; i < 8; i++) o[i] ^= n[i + 4 & 7];
                        if (r) {
                            var s = r.words,
                                a = s[0],
                                c = s[1],
                                h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                                l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
                                f = h >>> 16 | 4294901760 & l,
                                u = l << 16 | 65535 & h;
                            o[0] ^= h, o[1] ^= f, o[2] ^= l, o[3] ^= u, o[4] ^= h, o[5] ^= f, o[6] ^= l, o[7] ^= u;
                            for (i = 0; i < 4; i++) t.call(this)
                        }
                    },
                    _doProcessBlock: function(e, r) {
                        var i = this._X;
                        t.call(this), n[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, n[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, n[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, n[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                        for (var o = 0; o < 4; o++) n[o] = 16711935 & (n[o] << 8 | n[o] >>> 24) | 4278255360 & (n[o] << 24 | n[o] >>> 8), e[r + o] ^= n[o]
                    },
                    blockSize: 4,
                    ivSize: 2
                });
            e.Rabbit = r._createHelper(c)
        }(), a.mode.CTR = function() {
            var t = a.lib.BlockCipherMode.extend(),
                e = t.Encryptor = t.extend({
                    processBlock: function(t, e) {
                        var r = this._cipher,
                            i = r.blockSize,
                            n = this._iv,
                            o = this._counter;
                        n && (o = this._counter = n.slice(0), this._iv = void 0);
                        var s = o.slice(0);
                        r.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0;
                        for (var a = 0; a < i; a++) t[e + a] ^= s[a]
                    }
                });
            return t.Decryptor = e, t
        }(),
        function() {
            function t() {
                for (var t = this._X, e = this._C, r = 0; r < 8; r++) o[r] = e[r];
                e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
                for (r = 0; r < 8; r++) {
                    var i = t[r] + e[r],
                        n = 65535 & i,
                        a = i >>> 16,
                        c = ((n * n >>> 17) + n * a >>> 15) + a * a,
                        h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                    s[r] = c ^ h
                }
                t[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, t[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, t[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, t[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, t[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, t[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, t[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, t[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
            }
            var e = a,
                r = e.lib.StreamCipher,
                i = e.algo,
                n = [],
                o = [],
                s = [],
                c = i.RabbitLegacy = r.extend({
                    _doReset: function() {
                        var e = this._key.words,
                            r = this.cfg.iv,
                            i = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                            n = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                        this._b = 0;
                        for (var o = 0; o < 4; o++) t.call(this);
                        for (o = 0; o < 8; o++) n[o] ^= i[o + 4 & 7];
                        if (r) {
                            var s = r.words,
                                a = s[0],
                                c = s[1],
                                h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                                l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
                                f = h >>> 16 | 4294901760 & l,
                                u = l << 16 | 65535 & h;
                            n[0] ^= h, n[1] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u;
                            for (o = 0; o < 4; o++) t.call(this)
                        }
                    },
                    _doProcessBlock: function(e, r) {
                        var i = this._X;
                        t.call(this), n[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, n[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, n[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, n[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                        for (var o = 0; o < 4; o++) n[o] = 16711935 & (n[o] << 8 | n[o] >>> 24) | 4278255360 & (n[o] << 24 | n[o] >>> 8), e[r + o] ^= n[o]
                    },
                    blockSize: 4,
                    ivSize: 2
                });
            e.RabbitLegacy = r._createHelper(c)
        }(), a.pad.ZeroPadding = {
            pad: function(t, e) {
                var r = 4 * e;
                t.clamp(), t.sigBytes += r - (t.sigBytes % r || r)
            },
            unpad: function(t) {
                for (var e = t.words, r = t.sigBytes - 1; !(e[r >>> 2] >>> 24 - r % 4 * 8 & 255);) r--;
                t.sigBytes = r + 1
            }
        }, a
}));
"use strict";
var iv = CryptoJS.enc.Utf8.parse("1234567890123412"),
    key = CryptoJS.enc.Utf8.parse("URnHkG8qnGetwct9"),
    conf = $('meta[name="conf-site-verification"]').attr("content");
conf = JSON.parse(CryptoJS.AES.decrypt(conf, key, {
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding
}).toString(CryptoJS.enc.Utf8));
/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
! function(i, s) {
    "use strict";
    var e = "model",
        o = "name",
        r = "type",
        a = "vendor",
        n = "version",
        d = "mobile",
        t = "tablet",
        l = {
            extend: function(i, s) {
                var e = {};
                for (var o in i) s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
                return e
            },
            has: function(i, s) {
                return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase())
            },
            lowerize: function(i) {
                return i.toLowerCase()
            },
            major: function(i) {
                return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(i) {
                return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        w = {
            rgx: function(i, s) {
                for (var e, o, r, a, n, d, t = 0; t < s.length && !n;) {
                    var l = s[t],
                        w = s[t + 1];
                    for (e = o = 0; e < l.length && !n;)
                        if (n = l[e++].exec(i))
                            for (r = 0; r < w.length; r++) d = n[++o], "object" == typeof(a = w[r]) && a.length > 0 ? 2 == a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 == a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : void 0 : this[a[0]] = d ? a[1].call(this, d, a[2]) : void 0 : 4 == a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : void 0) : this[a] = d || void 0;
                    t += 2
                }
            },
            str: function(i, s) {
                for (var e in s)
                    if ("object" == typeof s[e] && s[e].length > 0) {
                        for (var o = 0; o < s[e].length; o++)
                            if (l.has(s[e][o], i)) return "?" === e ? void 0 : e
                    } else if (l.has(s[e], i)) return "?" === e ? void 0 : e;
                return i
            }
        },
        u = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        c = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [o, n],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    [o, "Opera Mini"], n
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    [o, "Opera"], n
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                [o, n],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    [o, "Konqueror"], n
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    [o, "IE"], n
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    [o, "Edge"], n
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    [o, "Yandex"], n
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    [o, "Puffin"], n
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    [o, "Firefox Focus"], n
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    [o, "Opera Touch"], n
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    [o, "UCBrowser"], n
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [o, /_/g, " "], n
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    [o, "WeChat(Win) Desktop"], n
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    [o, "WeChat"], n
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    [o, "Brave"], n
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [o, n],
                [/(QQ)\/([\d\.]+)/i],
                [o, n],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [o, n],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                [o, n],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [o, n],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [o],
                [/(LBBROWSER)/i],
                [o],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [n, [o, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [n, [o, "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                [o, n],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [n, [o, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    [o, /(.+)/, "$1 WebView"], n
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    [o, /(.+(?:g|us))(.+)/, "$1 $2"], n
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [n, [o, "Android Browser"]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    [o, "Sailfish Browser"], n
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [o, n],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    [o, "Dolphin"], n
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    [o, "Chrome"], n
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    [o, "Opera Coast"], n
                ],
                [/fxios\/([\w\.-]+)/i],
                [n, [o, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [n, [o, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [n, o],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    [o, "GSA"], n
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [o, [n, w.str, u.browser.oldsafari.version]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [o, n],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    [o, "Netscape"], n
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [o, n]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", l.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", l.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", l.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                [e, a, [r, t]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [e, [a, "Apple"],
                    [r, t]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    [e, "Apple TV"],
                    [a, "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [a, e, [r, t]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [e, [a, "Amazon"],
                    [r, t]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    [e, w.str, u.device.amazon.model],
                    [a, "Amazon"],
                    [r, d]
                ],
                [/android.+aft([bms])\sbuild/i],
                [e, [a, "Amazon"],
                    [r, "smarttv"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [e, a, [r, d]],
                [/\((ip[honed|\s\w*]+);/i],
                [e, [a, "Apple"],
                    [r, d]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [a, e, [r, d]],
                [/\(bb10;\s(\w+)/i],
                [e, [a, "BlackBerry"],
                    [r, d]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                [e, [a, "Asus"],
                    [r, t]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [a, "Sony"],
                    [e, "Xperia Tablet"],
                    [r, t]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [e, [a, "Sony"],
                    [r, d]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [a, e, [r, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [e, [a, "Nvidia"],
                    [r, "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [e, [a, "Sony"],
                    [r, "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    [a, w.str, u.device.sprint.vendor],
                    [e, w.str, u.device.sprint.model],
                    [r, d]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [a, [e, /_/g, " "],
                    [r, d]
                ],
                [/(nexus\s9)/i],
                [e, [a, "HTC"],
                    [r, t]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [e, [a, "Huawei"],
                    [r, d]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [a, e, [r, d]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [e, [a, "Microsoft"],
                    [r, "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    [e, /\./g, " "],
                    [a, "Microsoft"],
                    [r, d]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [e, [a, "Motorola"],
                    [r, d]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [e, [a, "Motorola"],
                    [r, t]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    [a, l.trim],
                    [e, l.trim],
                    [r, "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [e, /^/, "SmartTV"],
                    [a, "Samsung"],
                    [r, "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [e, [a, "Sharp"],
                    [r, "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    [a, "Samsung"], e, [r, t]
                ],
                [/smart-tv.+(samsung)/i],
                [a, [r, "smarttv"], e],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    [a, "Samsung"], e, [r, d]
                ],
                [/sie-(\w*)/i],
                [e, [a, "Siemens"],
                    [r, d]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    [a, "Nokia"], e, [r, d]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                [e, [a, "Acer"],
                    [r, t]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [e, [a, "LG"],
                    [r, t]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    [a, "LG"], e, [r, t]
                ],
                [/(lg) netcast\.tv/i],
                [a, e, [r, "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [e, [a, "LG"],
                    [r, d]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                [a, e, [r, t]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [e, [a, "Lenovo"],
                    [r, t]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                [a, e, [r, d]],
                [/linux;.+((jolla));/i],
                [a, e, [r, d]],
                [/((pebble))app\/[\d\.]+\s/i],
                [a, e, [r, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [a, e, [r, d]],
                [/crkey/i],
                [
                    [e, "Chromecast"],
                    [a, "Google"]
                ],
                [/android.+;\s(glass)\s\d/i],
                [e, [a, "Google"],
                    [r, "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                [e, [a, "Google"],
                    [r, t]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                [e, [a, "Google"],
                    [r, d]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [e, /_/g, " "],
                    [a, "Xiaomi"],
                    [r, d]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [e, /_/g, " "],
                    [a, "Xiaomi"],
                    [r, t]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [e, [a, "Meizu"],
                    [r, d]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    [a, "Meizu"], e, [r, d]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                [e, [a, "OnePlus"],
                    [r, d]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [e, [a, "RCA"],
                    [r, t]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [e, [a, "Dell"],
                    [r, t]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [e, [a, "Verizon"],
                    [r, t]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    [a, "Barnes & Noble"], e, [r, t]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [e, [a, "NuVision"],
                    [r, t]
                ],
                [/android.+;\s(k88)\sbuild/i],
                [e, [a, "ZTE"],
                    [r, t]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [e, [a, "Swiss"],
                    [r, d]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [e, [a, "Swiss"],
                    [r, t]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [e, [a, "Zeki"],
                    [r, t]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    [a, "Dragon Touch"], e, [r, t]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [e, [a, "Insignia"],
                    [r, t]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [e, [a, "NextBook"],
                    [r, t]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    [a, "Voice"], e, [r, d]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    [a, "LvTel"], e, [r, d]
                ],
                [/android.+;\s(PH-1)\s/i],
                [e, [a, "Essential"],
                    [r, d]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [e, [a, "Envizen"],
                    [r, t]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [a, e, [r, t]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [e, [a, "MachSpeed"],
                    [r, t]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [a, e, [r, t]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [e, [a, "Rotor"],
                    [r, t]
                ],
                [/android.+(KS(.+))\s+build/i],
                [e, [a, "Amazon"],
                    [r, t]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [a, e, [r, t]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    [r, l.lowerize], a, e
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    [r, "smarttv"]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [e, [a, "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [n, [o, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)/i],
                [
                    [o, "Blink"]
                ],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [o, n],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [n, o]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [o, n],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [o, [n, w.str, u.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [o, "Windows"],
                    [n, w.str, u.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                    [o, "BlackBerry"], n
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                [o, n],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    [o, "Symbian"], n
                ],
                [/\((series40);/i],
                [o],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    [o, "Firefox OS"], n
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                [o, n],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    [o, "Chromium OS"], n
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    [o, "Solaris"], n
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [o, n],
                [/(haiku)\s(\w+)/i],
                [o, n],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    [n, /_/g, "."],
                    [o, "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [o, "Mac OS"],
                    [n, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                [o, n]
            ]
        },
        m = function(s, e) {
            if ("object" == typeof s && (e = s, s = void 0), !(this instanceof m)) return new m(s, e).getResult();
            var o = s || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                r = e ? l.extend(c, e) : c;
            return this.getBrowser = function() {
                var i = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(i, o, r.browser), i.major = l.major(i.version), i
            }, this.getCPU = function() {
                var i = {
                    architecture: void 0
                };
                return w.rgx.call(i, o, r.cpu), i
            }, this.getDevice = function() {
                var i = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return w.rgx.call(i, o, r.device), i
            }, this.getEngine = function() {
                var i = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(i, o, r.engine), i
            }, this.getOS = function() {
                var i = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(i, o, r.os), i
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return o
            }, this.setUA = function(i) {
                return o = i, this
            }, this
        };
    m.VERSION = "0.7.20", m.BROWSER = {
        NAME: o,
        MAJOR: "major",
        VERSION: n
    }, m.CPU = {
        ARCHITECTURE: "architecture"
    }, m.DEVICE = {
        MODEL: e,
        VENDOR: a,
        TYPE: r,
        CONSOLE: "console",
        MOBILE: d,
        SMARTTV: "smarttv",
        TABLET: t,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, m.ENGINE = {
        NAME: o,
        VERSION: n
    }, m.OS = {
        NAME: o,
        VERSION: n
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports.UAParser = m) : "function" == typeof define && define.amd ? define((function() {
        return m
    })) : i && (i.UAParser = m);
    var b = i && (i.jQuery || i.Zepto);
    if (void 0 !== b && !b.ua) {
        var p = new m;
        b.ua = p.getResult(), b.ua.get = function() {
            return p.getUA()
        }, b.ua.set = function(i) {
            p.setUA(i);
            var s = p.getResult();
            for (var e in s) b.ua[e] = s[e]
        }
    }
}("object" == typeof window ? window : this);
/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", (function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                })), this.on("submit.validate", (function(e) {
                    function s() {
                        var s, r;
                        return !i.settings.submitHandler || (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), void 0 !== r && r)
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                }))), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, i, s;
            return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each((function() {
                (e = i.element(this) && e) || (s = s.concat(i.errorList))
            })), i.errorList = s), e
        },
        rules: function(e, i) {
            var s, r, n, a, o, l, h = this[0];
            if (null != h && null != h.form) {
                if (e) switch (s = t.data(h.form, "validator").settings, r = s.rules, n = t.validator.staticRules(h), e) {
                    case "add":
                        t.extend(n, t.validator.normalizeRule(i)), delete n.messages, r[h.name] = n, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), (function(e, i) {
                            l[i] = n[i], delete n[i], "required" === i && t(h).removeAttr("aria-required")
                        })), l) : (delete r[h.name], n)
                }
                return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (o = a.required, delete a.required, a = t.extend({
                    required: o
                }, a), t(h).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                    remote: o
                })), a
            }
        }
    }), t.extend(t.expr.pseudos || t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            var i = t(e).val();
            return null !== i && !!t.trim("" + i)
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (void 0 === i || (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, (function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), (function() {
                return i
            }))
        }))), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, i) {
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}."),
            step: t.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]);
                    var i = t.data(this.form, "validator"),
                        s = "on" + e.type.replace(/^validate/, ""),
                        r = i.settings;
                    r[s] && !t(this).is(r.ignore) && r[s].call(i, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.groups = {};
                t.each(this.settings.groups, (function(e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, (function(t, i) {
                        s[i] = e
                    }))
                })), i = this.settings.rules, t.each(i, (function(e, s) {
                    i[e] = t.validator.normalizeRule(s)
                })), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var i, s, r = this.clean(e),
                    n = this.validationTargetFor(r),
                    a = this,
                    o = !0;
                return void 0 === n ? delete this.invalid[r.name] : (this.prepareElement(n), this.currentElements = t(n), (s = this.groups[n.name]) && t.each(this.groups, (function(t, e) {
                    e === s && t !== n.name && ((r = a.validationTargetFor(a.clean(a.findByName(t)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o))
                })), i = !1 !== this.check(n), o = o && i, this.invalid[n.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o
            },
            showErrors: function(e) {
                if (e) {
                    var i = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, (function(t, e) {
                        return {
                            message: t,
                            element: i.findByName(e)[0]
                        }
                    })), this.successList = t.grep(this.successList, (function(t) {
                        return !(t.name in e)
                    }))
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t) t[e] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, (function(t) {
                    return t.element.name === e.name
                })).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                    var s = this.name || t(this).attr("name");
                    return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]), !(s in i || !e.objectLength(t(this).rules()) || (i[s] = !0, 0))
                }))
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i, s, r = t(e),
                    n = e.type;
                return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? e.validity.badInput ? "NaN" : r.val() : (i = e.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === n ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/")) >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\")) >= 0 ? i.substr(s + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s, r, n = t(e).rules(),
                    a = t.map(n, (function(t, e) {
                        return e
                    })).length,
                    o = !1,
                    l = this.elementValue(e);
                if ("function" == typeof n.normalizer) {
                    if ("string" != typeof(l = n.normalizer.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                    delete n.normalizer
                }
                for (s in n) {
                    r = {
                        method: s,
                        parameters: n[s]
                    };
                    try {
                        if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, l, e, r.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, r), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), t
                    }
                }
                if (!o) return this.objectLength(n) && this.successList.push(e), !0
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), s
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map((function() {
                    return this.element
                }))
            },
            showLabel: function(e, i) {
                var s, r, n, a, o = this.errorsFor(e),
                    l = this.idOrName(e),
                    h = t(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (s = o = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (n = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(n) + "\\b")) || (h += " " + n) : h = n, t(e).attr("aria-describedby", h), (r = this.groups[e.name]) && (a = this, t.each(a.groups, (function(e, i) {
                    i === r && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                }))))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var i = this.escapeCssMeta(this.idOrName(e)),
                    s = t(e).attr("aria-describedby"),
                    r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (r = r + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e, i) {
                return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), (function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            })), i
        },
        normalizeAttributeRule: function(t, e, i, s) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(e) {
            var i, s, r = {},
                n = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? ("" === (s = e.getAttribute(i)) && (s = !0), s = !!s) : s = n.attr(i), this.normalizeAttributeRule(r, a, i, s);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(e) {
            var i, s, r = {},
                n = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) s = n.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, i, s);
            return r
        },
        staticRules: function(e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, (function(s, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var n = !0;
                        switch (typeof r.depends) {
                            case "string":
                                n = !!t(r.depends, i.form).length;
                                break;
                            case "function":
                                n = r.depends.call(i, i)
                        }
                        n ? e[s] = void 0 === r.param || r.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
                    }
                } else delete e[s]
            })), t.each(e, (function(s, r) {
                e[s] = t.isFunction(r) && "normalizer" !== s ? r(i) : r
            })), t.each(["minlength", "maxlength"], (function() {
                e[this] && (e[this] = Number(e[this]))
            })), t.each(["rangelength", "range"], (function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            })), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), (function() {
                    i[this] = !0
                })), e = i
            }
            return e
        },
        addMethod: function(e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= s
            },
            maxlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r <= s
            },
            rangelength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= s[0] && r <= s[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function(e, i, s) {
                var r, n = t(i).attr("type"),
                    a = "Step attribute on input type " + n + " is not supported.",
                    o = new RegExp("\\b" + n + "\\b"),
                    l = function(t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    h = function(t) {
                        return Math.round(t * Math.pow(10, r))
                    },
                    u = !0;
                if (n && !o.test(["text", "number", "range"].join())) throw new Error(a);
                return r = l(s), (l(e) > r || h(e) % h(s) != 0) && (u = !1), this.optional(i) || u
            },
            equalTo: function(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                    t(i).valid()
                })), e === r.val()
            },
            remote: function(e, i, s, r) {
                if (this.optional(i)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var n, a, o, l = this.previousValue(i, r);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, s = "string" == typeof s && {
                    url: s
                } || s, o = t.param(t.extend({
                    data: e
                }, s.data)), l.old === o ? l.valid : (l.old = o, n = this, this.startRequest(i), (a = {})[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: n.currentForm,
                    success: function(t) {
                        var s, a, o, h = !0 === t || "true" === t;
                        n.settings.messages[i.name][r] = l.originalMessage, h ? (o = n.formSubmitted, n.resetInternals(), n.toHide = n.errorsFor(i), n.formSubmitted = o, n.successList.push(i), n.invalid[i.name] = !1, n.showErrors()) : (s = {}, a = t || n.defaultMessage(i, {
                            method: r,
                            parameters: e
                        }), s[i.name] = l.message = a, n.invalid[i.name] = !0, n.showErrors(s)), l.valid = h, n.stopRequest(i, h)
                    }
                }, s)), "pending")
            }
        }
    });
    var e, i = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter((function(t, e, s) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(), i[r] = s)
    })) : (e = t.ajax, t.ajax = function(s) {
        var r = ("mode" in s ? s : t.ajaxSettings).mode,
            n = ("port" in s ? s : t.ajaxSettings).port;
        return "abort" === r ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    }), t
}));
"use strict";
$(document).ready((function() {
    // onReloadCapcha();
    onReload();
    $.validator.addMethod("regex", (function(n, e, r) {
        var t = new RegExp(r);
        return this.optional(e) || t.test(n)
    }), ""), onRegFrmSubmit(), onLoginFrmSubmit(), onReloadCapcha()
}));
var onRegFrmSubmit = function() {
        $("#registerForm").validate({
            rules: {
                username: {
                    required: !0,
                    normalizer: function(n) {
                        return $.trim(n)
                    },
                    minlength: 6,
                    maxlength: 15,
                    regex: /^[A-Za-z0-9_-]{6,15}$/gim
                },
                password: {
                    required: !0,
                    minlength: 6
                },
                repeat_pwd: {
                    required: !0,
                    equalTo: "#pwd"
                }
            },
            messages: {
                username: {
                    required: "Vui lòng nhập tên đăng nhập",
                    minlength: "Tên đang nhập từ 6 ký tự trở lên",
                    maxlength: "Tên đăng nhập tối đa 15 ký tự",
                    regex: "Tên đăng nhập không hợp lệ"
                },
                password: {
                    required: "Vui lòng nhập mật khẩu",
                    minlength: "Mật khẩu tối thiểu 6 ký tự"
                },
                repeat_pwd: {
                    required: "Vui lòng nhập mật khẩu",
                    equalTo: "Nhập lại mật khẩu không đúng"
                }
            },
            errorElement: "div",
            errorPlacement: function(n, e) {
                n.addClass("errors"), "checkbox" === e.prop("type") ? n.insertAfter(e.parent("label")) : n.insertAfter(e)
            },
            highlight: function(n, e, r) {},
            unhighlight: function(n, e, r) {},
            showErrors: function(n, e) {
                this.defaultShowErrors()
            },
            submitHandler: function(n) {
                return onRegister(), !1
            }
        })
    },
    onLoginFrmSubmit = function() {
        $("#loginForm").validate({
            rules: {
                username: {
                    required: !0,
                    normalizer: function(n) {
                        return $.trim(n)
                    },
                    minlength: 6,
                    maxlength: 15,
                    regex: /^[A-Za-z0-9_-]{6,15}$/gim
                },
                password: {
                    required: !0,
                    minlength: 6
                }
            },
            messages: {
                username: {
                    required: "Vui lòng nhập tên đăng nhập",
                    minlength: "Tên đang nhập từ 6 ký tự trở lên",
                    maxlength: "Tên đăng nhập tối đa 15 ký tự",
                    regex: "Tên đăng nhập không hợp lệ"
                },
                password: {
                    required: "Vui lòng nhập mật khẩu",
                    minlength: "Mật khẩu tối thiểu 6 ký tự"
                }
            },
            errorElement: "div",
            errorPlacement: function(n, e) {
                n.addClass("errors"), "checkbox" === e.prop("type") ? n.insertAfter(e.parent("label")) : n.insertAfter(e)
            },
            highlight: function(n, e, r) {},
            unhighlight: function(n, e, r) {},
            showErrors: function(n, e) {
                this.defaultShowErrors()
            },
            submitHandler: function(n) {
                return onLogin(), !1
            }
        })
    },
    onReloadCapcha = function() {
		$('#captchareload').on('click', function() {
			return onReload(), !1
		})
	};
"use strict";
var aff_id = $('meta[name="aff_id"]').attr("content"),
    app_id = "HK86.club",
    userAgent = navigator.userAgent || navigator.vendor || window.opera,
    sessionId = null,
    isMobile = !0,
    browser = null,
    notifications = [],
    isIPadPro = /Macintosh/.test(userAgent) && "ontouchend" in document;

function receiveMessage(e) {
    void 0 !== e.data.session_id && onLoginFbSucceed(e.data.session_id)
}
window.addEventListener("message", receiveMessage, !1), $(document).ready((function() {
    setCookiesLogIpv4(), setCookiesLogIpv6(), lazyLoading(), onNotifications(), setTimeout((function() {
        Fingerprint2.get((function(e) {
            var o = e.map((function(e) {
                    return e.value
                })),
                a = Fingerprint2.x64hash128(o.join(""), 31);
            $("input[name='fg']").val(a)
        }))
    }), 500);
    var e = new UAParser;
    e.setUA(userAgent);
    var o = e.getResult();
    return browser = o.browser.name, $("input[name='browser']").val(o.browser.name), $("input[name='os']").val(o.os.name), $("input[name='device']").val(null == o.device.vendor ? "Desktop" : o.device.vendor + " " + o.device.model), $("input[name='aff_id']").val(aff_id), $("input[name='app_id']").val(app_id), $(".regFrm input").on("focus", (function() {
        $(".regFrm small").addClass("d-none")
    })), $(".nav-tabs a").on("click", (function(e) {
        $(".nav-tabs").removeClass("tabs-active"), setTimeout((function() {
            $(".nav-tabs > li").removeClass("active"), $(".nav-tabs > li:has(> a.active)").addClass("active")
        }), 100)
    })), $(".form-group > .fa-eye").on("click", (function() {
        $(this).hasClass("fa-eye-slash") ? ($(this).removeClass("fa-eye-slash"), $(this).parent().children("input").attr("type", "password")) : ($(this).addClass("fa-eye-slash"), $(this).parent().children("input").attr("type", "text"))
    })), navigator.userAgent.toLowerCase().indexOf("chrome") >= 0 && $("input, select").on("change focus", (function(e) {
        setTimeout((function() {
            $.each(document.querySelectorAll("*:-webkit-autofill"), (function() {
                var e = $(this).clone(!0, !0);
                $(this).after(e).remove(), updateActions()
            }))
        }), 50)
    })).change(), updateActions(), /windows phone/i.test(userAgent) ? ($("a.icon-livechat, a.icon-phone").addClass("mb"), $(".tab-content #register").addClass("in active show"), void(isMobile = !0)) : /android/i.test(userAgent) ? ($("#main, #android, #playonweb").show(), $("a.icon-livechat, a.icon-phone").addClass("mb"), $(".tab-content #register").addClass("in active show"), isMobile = !0, isCHPlay && ($(".hoac").show(), $("#form").addClass("formstyle")), void(isApk && ($("#huongdan, .hoac").show(), $("body").addClass("bgfull")))) : /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream || isIPadPro ? ($("#main, #ios, #playonweb").show(), $("a.icon-livechat, a.icon-phone").addClass("mb"), $(".tab-content #register").addClass("in active show"), isMobile = !0, isAppStore && ($(".hoac").show(), $("#form").addClass("formstyle")), void(isIpa && ($("#huongdan, .hoac").show(), $("body").addClass("bgfull")))) : ($(".sticky-qrcode").show(), void $(".tab-content #register").addClass("in active show"))
}));
var updateActions = function() {},
    lazyLoading = function() {
        $("body").find("[data-src]").each((function(e, o) {
            var a = $(o).attr("data-src") + "?v=" + v,
                t = new Image;
            $(t).bind("load error", (function() {
                $(o).attr("src", a)
            })), t.src = a
        }))
    },
    onPlayWeb = function(e) {
        if ("undefined" != typeof fbq && fbq("track", "ClickPlayWeb"), null == sessionId) return $(e).parent().hide(), $("#form").addClass("choinhanh"), $(".nav-tabs").addClass("tabs-active"), $("#form, #games").show(), $(".adv, #playonweb, .dacotaikhoan, .hoac").hide(), $(".nav-tabs #register-tab").removeClass("show active"), $(".nav-tabs #login-tab").addClass("show active"), $(".tab-content #register").removeClass("in active show"), $(".tab-content #login").addClass("in active show"), $(".nav-tabs > li").removeClass("active"), $(".nav-tabs > li:has(> a.active)").addClass("active"), $("#main").addClass("mt-0"), void $("#username").focus();
        window.location.href = "https://" + conf.wg + "?sessionid=" + sessionId + "&a=" + aff_id
    },
    onReload = function() {
        var captcha = $(".captcha");
		$.ajax({
            url: "https://portal.hk86.xyz/api?c=124&pf=web&at=",
            type: "GET",
			cache:false,
			beforeSend: function(e) {
                $(".loading").show()
            },
            success: function(e, t) {
                var data = JSON.parse(e);
				$("#captchaId").val(data.id);
				var img = data.img;
				captcha.attr("src","data:image/png;base64," + img);
				$(".loading").hide()
            },     
            error: function(xhr, ajaxOptions, thrownError) {
                $(".loading").hide(), $("#alertModal .modal-body").html("Lỗi xảy ra trong quá trình xử lý hệ thống. Xin vui lòng thử lại!"), $("#alertModal").modal()
            },
			timeout: 30000 
        })
    },
    onLogin = function() {
        var username = $("#username").val();
        var password = $("#login_password").val();
        loginGame(username,password);
    },
    loginGame = function(username, password) {
		var finalPass = md5(password);
		var uri = `https://portal.hk86.xyz/api?c=3&un=${username}&pw=${finalPass}&pf=web&cl=R&at=`
        console.log(uri);
		$.ajax({
			url: uri,
			type: "GET",
			beforeSend: function (a) { $(".loading").show() },
			success: function(res) {
				$(".loading").hide();
				var data = JSON.parse(res);
				var success = data.success;
				var code = data.errorCode;         
				var token = data.accessToken;
				if(success === true) {    
					SPUtils.set("username", username);
					SPUtils.set("userpass", password);
					window.location.href = "https://hk86.club/web/";
				} else {
                    if (data.errorCode == 2001) {
						SPUtils.set("username", username);
						SPUtils.set("userpass", password);
                        window.location.href = "https://hk86.club/web/";
                    }
                    if (code == 1005) {
                        $(".loading").hide(), $("#alertModal .modal-body").html("Sai tài khoản hoặc mật khẩu!"), $("#alertModal").modal()
                    }
				}
			},
			error: function(e) {
				$(".loading").hide(), $("#alertModal .modal-body").html("Lỗi xảy ra trong quá trình xử lý hệ thống. Xin vui lòng thử lại!"), $("#alertModal").modal()
			}
		})
	},
    onLoginFB = function() {
        e = ($(window).height() - 730) / 2,
        o = ($(window).width() - 800) / 2;
        window.open("https://" + conf.fb + "?a=" + aff_id, "_blank", "width=800,height=730,left=" + o + ",top=" + e)
    },
    onLoginFbSucceed = function(e) {
        "undefined" != typeof dataLayer && dataLayer.push({
            event: "formSubmitted",
            formName: "Register_Facebook"
        }), "undefined" != typeof fbq && fbq("track", "CompleteRegisterFacebook"), window.location.href = "https://" + conf.wg + "?sessionid=" + e + "&a=" + aff_id
    },
    onRegister = function() {
        var username = $("#usrname").val();
			var password = $("#pwd").val();
			var confirmPass = $("#repeat-pwd").val();
			var captcha = $("#captcha").val();
			var captchaIdreg = $("#captchaId").val();
			var finalPass = CryptoJS.MD5(password);
			
			if ("" == username.replace(/\s/g, "") ||
				"" == password.replace(/\s/g, ""))
				$(".loading").hide(), $("#alertModal .modal-body").html("Bạn phải nhập username/password. Password không được để trống và ít nhất 6 ký tự."), $("#alertModal").modal()
			
			if(password !== confirmPass) {
				$(".loading").hide(), $("#alertModal .modal-body").html("Mật khẩu không khớp"), $("#alertModal").modal()
			}
			
			if("" == captcha) {
				$(".loading").hide(), $("#alertModal .modal-body").html("Bạn phải nhập mã xác nhận"), $("#alertModal").modal()			
			}
			
			var vars = {};
			var urlreg = `https://portal.hk86.xyz/api?c=1&un=${username}&pw=${finalPass}&cp=${captcha}&cid=${captchaIdreg}&pf=web&cl=R&at=`;
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
			function(m,key,value) {
				vars[key] = value;
			});
			if (vars["utm_source"] != null) {
				var utm_source = vars["utm_source"]
				urlreg = `https://portal.hk86.xyz/api?c=1&un=${username}&pw=${finalPass}&cp=${captcha}&cid=${captchaIdreg}&utm_campaign=${utm_source}&utm_medium=${utm_source}&utm_source=${utm_source}&pf=web&cl=R&at=`
			}	
			$.ajax({
				url: urlreg,
				type: "GET",
				beforeSend: function(e) {
					$(".loading").show()
				},
				success: function(e, t) {
					$(".loading").hide()
                    var data = JSON.parse(e);
					if (data.errorCode == 0) {
                        onPlayWeb(this);
                        $(".dacotaikhoan").hide(),$(".thankform").show(), $(".thankinfo_user").text("Tên đăng nhập: " + username), void $(".thankinfo_pass").text("Mật khẩu: " + password)
						//loginGame(username,finalPass);
					} else {
						if (data.errorCode == 115) {
                            $(".loading").hide(), $("#alertModal .modal-body").html("Mã xác nhận không chính xác!"), $("#alertModal").modal();
                            onReload();
						}
                        if (data.errorCode == 1006) {
                            $(".loading").hide(), $("#alertModal .modal-body").html("Tài khoản đã tồn tại!"), $("#alertModal").modal()
                        }
					}
				},
				error: function(e, t, a) {
					$(".loading").hide(), $("#alertModal .modal-body").html("Lỗi xảy ra trong quá trình xử lý hệ thống. Xin vui lòng thử lại!"), $("#alertModal").modal()
				}
			})
    },
    onNotifications = function() {
        if (notifications.length > 0) {
            var e = notifications.shift();
            $("#notification-item .notification-icon div").css("background-image", "url('/images/avatars/Avatar" + Math.floor(59 * Math.random() + 1) + ".png')"), $("#notification-item .notification-body-header").html(e.fullname), $("#notification-item .notification-body-content").html("Vừa thắng " + e.amount.toLocaleString() + " tại " + e.game_name), $(".notification_box").prepend($("#notification-item").html()), setTimeout((function() {
                $($(".notification_box .notification")[0]).addClass("loaded")
            }), 200)
        }
    },
    onDownloadAndroid = function() {
        "undefined" != typeof fbq && fbq("track", "ClickDownloadAndroid"), window.location.href = "https://" + conf.dl + "/android.html?t=" + Date.parse(new Date), isApk && setTimeout((function() {
            jQuery("html, body").animate({
                scrollTop: jQuery("#huongdan").offset().top
            }, 500)
        }), 1e3)
    },
    onDownloadIos = function() {
        "undefined" != typeof fbq && fbq("track", "ClickDownloadIos"), window.location.href = "https://" + conf.dl + "/caidat.php?t=" + Date.parse(new Date), isIpa && setTimeout((function() {
            jQuery("html, body").animate({
                scrollTop: jQuery("#huongdan").offset().top
            }, 500)
        }), 1e3)
    },
    showInfo = function(e) {
        $(e).hide(), $("#info").removeClass("d-none")
    },
    setCookiesTracking = function() {
        $.ajax({
            url: "https://" + conf.api + "/sw/collect?aff_id=" + aff_id,
            dataType: "json",
            success: function(e, o) {},
            error: function(e, o, a) {}
        })
    },
    setCookiesLogIpv4 = function() {
        $.ajax({
            url: "https://api4." + conf.logip + "/sw/collect?aff_id=" + aff_id,
            dataType: "json",
            success: function(e, o) {},
            error: function(e, o, a) {}
        })
    },
    setCookiesLogIpv6 = function() {
        $.ajax({
            url: "https://api6." + conf.logip + "/sw/collect?aff_id=" + aff_id,
            dataType: "json",
            success: function(e, o) {},
            error: function(e, o, a) {}
        })
    };
"use strict";
var ipv4 = !1,
    ipv6 = !1,
    LC_API = LC_API || {};
LC_API.on_after_load = function() {
        isMobile && (LC_API.hide_chat_window(), $("a.icon-livechat").show()), setInterval((function() {
            isMobile && (LC_API.chat_window_maximized() ? $("a.icon-livechat").hide() : (LC_API.chat_window_hidden() || LC_API.hide_chat_window(), $("a.icon-livechat").show()))
        }), 450)
    }, window.__lc = window.__lc || {}, window.__lc.license = 12587742, window.__lc.visitor = {
        name: "Khách"
    }, window.__lc.params = [{
        name: "Login",
        value: "Khách"
    }, {
        name: "Domain",
        value: window.location.hostname
    }],
    function() {
        var i = document.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = ("https:" == document.location.protocol ? "https://" : "http://") + "cdn.livechatinc.com/tracking.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(i, n)
    }(), $(document).ready((function() {
        $("a.icon-livechat").on("click", (function() {
            LC_API.open_chat_window()
        }))
    }));
	
	var SPUtils = {
		KEY: (() => {
            let key = "hk86";
            let ret = "";
            for (let i = 0; i < key.length; i++) {
                ret += key.charCodeAt(i);
            }
            return Number(ret);
        })(),
		
		encode: function(s, k) {
			var enc = "";
			var str = "";
			// make sure that input is string
			str = s.toString();
			for (var i = 0; i < s.length; i++) {
				// create block
				var a = s.charCodeAt(i);
				// bitwise XOR
				var b = a ^ k;
				enc = enc + String.fromCharCode(b);
			}
			return enc;
		},

		get: function(key, defaultValue) {
			defaultValue = defaultValue | "";
			var keyEncrypted = this.encode(key, this.KEY).toString();
			if (typeof defaultValue === "undefined") defaultValue || null;
			var r = localStorage.getItem(keyEncrypted);
			if (r) {
				r = this.encode(r, this.KEY).toString();
				return r;
			}
			return defaultValue;
		},

		set: function(key, value) {
			value = value.toString();
			var keyEncrypted = "" + this.encode(key, this.KEY);
			var valueEncrypted = "" + this.encode(value, this.KEY);
			localStorage.setItem(keyEncrypted, valueEncrypted);
		}
	};
	
(function(a) {
    function b(a, b) {
        var c = (a & 65535) + (b & 65535);
        return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
    }

    function c(a, c, d, e, f, g) {
        a = b(b(c, a), b(e, g));
        return b(a << f | a >>> 32 - f, d)
    }

    function d(a, b, d, e, f, g, h) {
        return c(b & d | ~b & e, a, b, f, g, h)
    }

    function e(a, b, d, e, f, g, h) {
        return c(b & e | d & ~e, a, b, f, g, h)
    }

    function f(a, b, d, e, f, g, h) {
        return c(d ^ (b | ~e), a, b, f, g, h)
    }

    function g(a, g) {
        a[g >> 5] |= 128 << g % 32;
        a[(g + 64 >>> 9 << 4) + 14] = g;
        var h, k, m, n, p, r = 1732584193,
            w = -271733879,
            C = -1732584194,
            B = 271733878;
        for (h = 0; h < a.length; h += 16) k = r, m = w, n = C, p = B, r = d(r,
            w, C, B, a[h], 7, -680876936), B = d(B, r, w, C, a[h + 1], 12, -389564586), C = d(C, B, r, w, a[h + 2], 17, 606105819), w = d(w, C, B, r, a[h + 3], 22, -1044525330), r = d(r, w, C, B, a[h + 4], 7, -176418897), B = d(B, r, w, C, a[h + 5], 12, 1200080426), C = d(C, B, r, w, a[h + 6], 17, -1473231341), w = d(w, C, B, r, a[h + 7], 22, -45705983), r = d(r, w, C, B, a[h + 8], 7, 1770035416), B = d(B, r, w, C, a[h + 9], 12, -1958414417), C = d(C, B, r, w, a[h + 10], 17, -42063), w = d(w, C, B, r, a[h + 11], 22, -1990404162), r = d(r, w, C, B, a[h + 12], 7, 1804603682), B = d(B, r, w, C, a[h + 13], 12, -40341101), C = d(C, B, r, w, a[h + 14], 17, -1502002290),
            w = d(w, C, B, r, a[h + 15], 22, 1236535329), r = e(r, w, C, B, a[h + 1], 5, -165796510), B = e(B, r, w, C, a[h + 6], 9, -1069501632), C = e(C, B, r, w, a[h + 11], 14, 643717713), w = e(w, C, B, r, a[h], 20, -373897302), r = e(r, w, C, B, a[h + 5], 5, -701558691), B = e(B, r, w, C, a[h + 10], 9, 38016083), C = e(C, B, r, w, a[h + 15], 14, -660478335), w = e(w, C, B, r, a[h + 4], 20, -405537848), r = e(r, w, C, B, a[h + 9], 5, 568446438), B = e(B, r, w, C, a[h + 14], 9, -1019803690), C = e(C, B, r, w, a[h + 3], 14, -187363961), w = e(w, C, B, r, a[h + 8], 20, 1163531501), r = e(r, w, C, B, a[h + 13], 5, -1444681467), B = e(B, r, w, C, a[h + 2], 9, -51403784),
            C = e(C, B, r, w, a[h + 7], 14, 1735328473), w = e(w, C, B, r, a[h + 12], 20, -1926607734), r = c(w ^ C ^ B, r, w, a[h + 5], 4, -378558), B = c(r ^ w ^ C, B, r, a[h + 8], 11, -2022574463), C = c(B ^ r ^ w, C, B, a[h + 11], 16, 1839030562), w = c(C ^ B ^ r, w, C, a[h + 14], 23, -35309556), r = c(w ^ C ^ B, r, w, a[h + 1], 4, -1530992060), B = c(r ^ w ^ C, B, r, a[h + 4], 11, 1272893353), C = c(B ^ r ^ w, C, B, a[h + 7], 16, -155497632), w = c(C ^ B ^ r, w, C, a[h + 10], 23, -1094730640), r = c(w ^ C ^ B, r, w, a[h + 13], 4, 681279174), B = c(r ^ w ^ C, B, r, a[h], 11, -358537222), C = c(B ^ r ^ w, C, B, a[h + 3], 16, -722521979), w = c(C ^ B ^ r, w, C, a[h + 6], 23, 76029189), r = c(w ^
            C ^ B, r, w, a[h + 9], 4, -640364487), B = c(r ^ w ^ C, B, r, a[h + 12], 11, -421815835), C = c(B ^ r ^ w, C, B, a[h + 15], 16, 530742520), w = c(C ^ B ^ r, w, C, a[h + 2], 23, -995338651), r = f(r, w, C, B, a[h], 6, -198630844), B = f(B, r, w, C, a[h + 7], 10, 1126891415), C = f(C, B, r, w, a[h + 14], 15, -1416354905), w = f(w, C, B, r, a[h + 5], 21, -57434055), r = f(r, w, C, B, a[h + 12], 6, 1700485571), B = f(B, r, w, C, a[h + 3], 10, -1894986606), C = f(C, B, r, w, a[h + 10], 15, -1051523), w = f(w, C, B, r, a[h + 1], 21, -2054922799), r = f(r, w, C, B, a[h + 8], 6, 1873313359), B = f(B, r, w, C, a[h + 15], 10, -30611744), C = f(C, B, r, w, a[h + 6], 15, -1560198380),
            w = f(w, C, B, r, a[h + 13], 21, 1309151649), r = f(r, w, C, B, a[h + 4], 6, -145523070), B = f(B, r, w, C, a[h + 11], 10, -1120210379), C = f(C, B, r, w, a[h + 2], 15, 718787259), w = f(w, C, B, r, a[h + 9], 21, -343485551), r = b(r, k), w = b(w, m), C = b(C, n), B = b(B, p);
        return [r, w, C, B]
    }

    function h(a) {
        var b, c = "",
            d = 32 * a.length;
        for (b = 0; b < d; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c
    }

    function k(a) {
        var b, c = [];
        c[(a.length >> 2) - 1] = void 0;
        for (b = 0; b < c.length; b += 1) c[b] = 0;
        var d = 8 * a.length;
        for (b = 0; b < d; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
        return c
    }

    function m(a) {
        return h(g(k(a),
            8 * a.length))
    }

    function n(a, b) {
        var c, d = k(a),
            e = [],
            f = [];
        e[15] = f[15] = void 0;
        16 < d.length && (d = g(d, 8 * a.length));
        for (c = 0; 16 > c; c += 1) e[c] = d[c] ^ 909522486, f[c] = d[c] ^ 1549556828;
        c = g(e.concat(k(b)), 512 + 8 * b.length);
        return h(g(f.concat(c), 640))
    }

    function p(a) {
        var b = "",
            c, d;
        for (d = 0; d < a.length; d += 1) c = a.charCodeAt(d), b += "0123456789abcdef".charAt(c >>> 4 & 15) + "0123456789abcdef".charAt(c & 15);
        return b
    }

    function r(a, b, c) {
        b ? c ? a = n(unescape(encodeURIComponent(b)), unescape(encodeURIComponent(a))) : (a = n(unescape(encodeURIComponent(b)),
            unescape(encodeURIComponent(a))), a = p(a)) : a = c ? m(unescape(encodeURIComponent(a))) : p(m(unescape(encodeURIComponent(a))));
        return a
    }
    "function" === typeof define && define.amd ? define(function() {
        return r
    }) : "object" === typeof module && module.exports ? module.exports = r : a.md5 = r
})(this);