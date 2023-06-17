import {bo as P, br as _$, x as nt, f as lt, O as ft, S as X$, y as M$, D as g$, M as rt, R as at, a9 as S$, g as ot, Y as ut} from "https://live.yworks.com/demos/assets-b607-2a7a63f/view-component-b62f6264.js";
/* empty css              */
import "https://live.yworks.com/demos/assets-b607-2a7a63f/demo-page-init-2321fe5f.js";
import {a as st} from "https://live.yworks.com/demos/assets-b607-2a7a63f/demo-styles-60bf55b4.js";
import {f as ht} from "https://live.yworks.com/demos/assets-b607-2a7a63f/fetch-license-54b0c0ba.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/demo-ui-init-dd300bc0.js";
import {f as Ft} from "https://live.yworks.com/demos/assets-b607-2a7a63f/finish-loading-5aff351e.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/layout-core-0480c73a.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/layout-hierarchic-4c03530b.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/router-other-d4611074.js";
import {ag as ct} from "https://live.yworks.com/demos/assets-b607-2a7a63f/view-layout-bridge-1b77bc19.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/demo-colors-b24a8e9a.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/styles-group-d89ec082.js";
import "https://live.yworks.com/demos/assets-b607-2a7a63f/yfiles-2665661b.js";
P.lang = _$,
P.lang = _$,
P.lang = _$,
P.lang = _$,
function(t, T, s$, h$) {
    function F$(r) {
        var $ = new t.C.HGD
          , i = $.$bQE;
        i.$cnE = new t.C.EHD.$x(0,!1),
        i.$sZE = 60,
        i.$gYE = 20;
        var n = $.$hQE;
        switch (r.$f7) {
        case -1:
            n.$exE = 0;
            break;
        case 0:
            n.$exE = .5;
            break;
        case 1:
            n.$exE = 1
        }
        return $
    }
    function x$(r, $, i) {
        for (var n = 0, f = 0, a = $.$ieE(); a.$oo; a.$Xt()) {
            var l = a.$Ap;
            i.$iu(l) === 1 ? l.$f7 > 0 && f++ : n += l.$f6
        }
        return f <= 1 && n === 2
    }
    function T$(r, $, i) {
        var n = $.$juF(t.O.$p56);
        r.$f16 = $.$thF(),
        r.$f17 = $.$thF(),
        r.$f3 = $.$thF(),
        r.$f4 = $.$thF(),
        r.$f12 instanceof t.C.HGD && r.$f20 !== 0 && (r.$f = r.$f12.$QHF($)),
        function(e, E, p) {
            e.$f5 = t.HF.$m14(E.$ia),
            e.$f1 = new t.LE;
            var K = new t.LE;
            e.$f11 = new t.C.SKB.$w,
            e.$f2 = E.$uhF(),
            e.$f15 = E.$uhF(),
            e.$f6 = E.$uhF(),
            e.$f9 = E.$uhF(),
            e.$f8 = E.$uhF(),
            e.$f19 = new t.SE;
            for (var b = E.$wiF(); b.$oo; b.$Xt()) {
                var u = new t.C.SKB.$w
                  , D = b.$Ap;
                e.$f2.$LA(D, "n" + D.$iL),
                E.$juF(t.O.$p56).$iu(D) === 1 ? c$(e, D, u) : i$(e, D, u);
                var L = new t.LE;
                L.$m(u),
                p$(e, u, L);
                for (var j = 0; j < L.$ph; j++)
                    if ((u = L.$sh(j)).$f1 > 1) {
                        for (var g = new t.LH.$c1("GN"), z = 0; z < u.$f1; z++)
                            g.$m2(t.PF.$m8(u.$sh(z).$iL)),
                            g.$m2("/");
                        K.$m(g.toString()),
                        e.$f1.$m(u)
                    }
            }
            for (var k = 0; k < e.$f1.$ph; k++) {
                var R = new t.C.KJB(0,0,0,0)
                  , G = E.$kgF()
                  , u = e.$f1.$sh(k);
                e.$f11.$m6(G);
                for (var N = 0; N < u.$f1; N++) {
                    var J = u.$sh(N);
                    e.$f15.$LA(J, K.$sh(k)),
                    e.$f9.$LA(J, p),
                    e.$f8.$LA(J, R)
                }
                e.$f8.$LA(G, R),
                e.$f6.$Oj(G, !0),
                e.$f2.$LA(G, K.$sh(k))
            }
            E.$sKF(t.O.$p4, e.$f2),
            E.$sKF(t.O.$p36, e.$f15),
            E.$sKF(t.O.$p3, e.$f6),
            E.$sKF(t.O.$p70, e.$f8),
            E.$sKF(t.O.$p26, e.$f9)
        }(r, $, i);
        for (var f = $.$juF(t.O.$p1), a = $.$wiF(); a.$oo; a.$Xt()) {
            var l = a.$Ap;
            if ($.$juF(t.O.$p56).$iu(l) === 1) {
                for (var c = null, h = l.$jwF(null); h.$oo; h.$Xt()) {
                    var o = h.$zp.$f3;
                    if (c === null && (c = o),
                    $.$wMF(h.$zp, new t.C.TJB.$x(0,$.$m38(h.$zp.$f2).$Xq / 2)),
                    $.$yMF(h.$zp, new t.C.TJB.$x(0,-$.$m38(h.$zp.$f3).$Xq / 2)),
                    r.$f3.$LA(h.$zp, t.T.BDD.$x(2, !0)),
                    r.$f4.$LA(h.$zp, t.T.BDD.$x(1, !0)),
                    r.$f !== null && c !== o) {
                        var m = f === null ? c : f.$iu(c)
                          , y = f === null ? o : f.$iu(o);
                        (r.$f20 === 4 || r.$f20 === 3) != (n.$iu(o) === 2) ? r.$f.$ED(m, y) : r.$f.$HD(m, y)
                    }
                }
                for (var v = new t.LE, A = "CG" + l.$iL, F = l.$jwF(null); F.$oo; F.$Xt()) {
                    var _ = F.$zp;
                    r.$f16.$LA(_, A);
                    var O = r.$f15.$iu(_.$f3);
                    O !== null && v.indexOf(O) !== -1 || (r.$f17.$LA(_, A),
                    O !== null && v.$m(O))
                }
            }
        }
        $.$sKF(t.O.$p121, r.$f16),
        $.$sKF(t.O.$p122, r.$f17),
        $.$sKF(t.O.$p181, r.$f3),
        $.$sKF(t.O.$p182, r.$f4)
    }
    function c$(r, $, i) {
        if ($.$f2.$juF(t.O.$p56).$iu($) !== 1)
            throw t.NG.$m30(W[5]);
        if (!r.$f5[$.$iL]) {
            i.$m6($),
            r.$f5[$.$iL] = !0;
            for (var n = 0, f = $.$XjF(); f.$oo; f.$Xt())
                if (i$(r, f.$Ap, i),
                ++n > 2)
                    throw t.NG.$m30(W[6])
        }
    }
    function i$(r, $, i) {
        if ($.$f2.$juF(t.O.$p56).$iu($) === 1)
            throw t.NG.$m30(W[7]);
        if (!r.$f5[$.$iL]) {
            i.$m6($),
            r.$f5[$.$iL] = !0;
            for (var n = $.$NjF(); n.$oo; n.$Xt())
                c$(r, n.$Ap, i)
        }
    }
    function p$(r, $, i) {
        var n = -1
          , f = -1;
        for (n = 0; n < $.$f1; n++) {
            var a = $.$sh(n);
            if (a.$f2.$juF(t.O.$p56).$iu(a) === 1) {
                for (var l = a.$NjF(); l.$oo && !((f = $.indexOf(l.$Ap)) > -1); l.$Xt())
                    ;
                if (f > -1)
                    break
            }
        }
        if (f !== -1) {
            var c = new t.C.SKB.$w
              , h = $.$sh(n)
              , o = $.$sh(f)
              , m = new t.C.SKB.$w;
            for ($.$jn(o),
            c.$m6(o),
            l = o.$NjF(); l.$oo; l.$Xt()) {
                var y = l.$Ap;
                $.$jn(y),
                c.$m6(y);
                for (var v = y.$XjF(); v.$oo; v.$Xt()) {
                    var A = v.$Ap;
                    A !== o && (m$(r, y, A, h, o) ? n$(r, y, $, c) : m.$m6(y))
                }
            }
            if ($.$jfE())
                for ($.$rlF(c),
                m.$fn(),
                $.$jn(o),
                c.$m6(o),
                l = o.$NjF(); l.$oo; l.$Xt())
                    y = l.$Ap,
                    $.$jn(y),
                    c.$m6(y),
                    m.$m6(y);
            for (l = m.$ieE(); l.$oo; l.$Xt())
                for (var F = l.$Ap.$muF(null); F.$oo; F.$Xt())
                    if (F.$zp.$f2 !== o) {
                        var _ = o.$f2;
                        _.$wMF(F.$zp, new t.C.TJB.$x(0,0)),
                        _.$yMF(F.$zp, new t.C.TJB.$x(0,0)),
                        r.$f3.$LA(F.$zp, t.T.BDD.$x(0, !0)),
                        r.$f4.$LA(F.$zp, t.T.BDD.$x(0, !0)),
                        r.$f19.$m(F.$zp)
                    }
            p$(r, $, i),
            p$(r, c, i),
            i.$m(c)
        }
    }
    function m$(r, $, i, n, f) {
        return function a(l, c, h, o, m, y) {
            if (!t.QE.$m9(y, new t.T.AFD.T(c,h)))
                return !0;
            for (var v = !0, A = h.$NjF(); A.$oo; A.$Xt()) {
                var F = A.$Ap;
                if (F !== c) {
                    if (F === o)
                        return !1;
                    for (var _ = F.$XjF(); _.$oo; _.$Xt()) {
                        var O = _.$Ap;
                        if (O !== h && !a(l, F, O, o, m, y)) {
                            v = !1;
                            break
                        }
                    }
                }
            }
            return v
        }(r, $, i, n, f, new t.SE)
    }
    function n$(r, $, i, n) {
        for (var f = $.$XjF(); f.$oo; f.$Xt()) {
            var a = f.$Ap;
            if (!(i.indexOf(a) < 0)) {
                i.$jn(a),
                n.$m6(a);
                for (var l = a.$NjF(); l.$oo; l.$Xt()) {
                    var c = l.$Ap;
                    i.indexOf(c) > -1 && (i.$jn(c),
                    n.$m6(c),
                    n$(r, c, i, n))
                }
            }
        }
    }
    function B(r, $, i, n) {
        for (var f = 1, a = $.$XjF(); a.$oo; a.$Xt()) {
            var l = a.$Ap;
            if (l !== i && n.indexOf(l) === -1) {
                n.$m6(l);
                for (var c = l.$NjF(); c.$oo; c.$Xt()) {
                    var h = c.$Ap;
                    h !== $ && (f += B(r, h, l, n))
                }
            }
        }
        return f
    }
    var X = T.lang.ClassDefinition
      , d$ = (T.lang.InterfaceDefinition,
    T.lang.AttributeDefinition,
    T.lang.EnumDefinition)
      , v$ = (T.lang.StructDefinition,
    T.lang.Abstract,
    T.lang.module)
      , V$ = (T.lang.delegate,
    T.lang.Boolean,
    T.lang.Number,
    T.lang.Void,
    T.lang.Object)
      , Q$ = (T.lang.String,
    T.lang.decorators.Type)
      , d = T.lang.decorators.SetterArg
      , Z$ = T.lang.decorators.OptionArgs;
    T.lang.addMappings("yFiles-for-HTML-Complete-2.6-EAP10-Evaluation (Build aab103f39a12-06/15/2023)", {
        get _$_xyd() {
            return ["alignment", "$fd", Q$("yfiles._R.C.CFD", 5)]
        },
        _$_yyd: "$gd",
        _$_avf: "$cEE",
        _$_lrg: "$RQE",
        _$_wah: "$LVE",
        _$_qlh: "$naE",
        _$_tmh: "$TbE",
        get _$_mpo() {
            return ["__f", "AFD", Z$(d("$gd"), d("$TbE"), d("$RQE"), d("$cEE"), d("$LVE"), d("alignment", "yfiles._R.C.CFD"), d("$BaE"), d("$HTE"), d("__Jh", "yfiles._R.C.DFD"), d("labeling"), d("$zyE"), d("$yLE"), d("$lBE"), d("$AyE"), d("$mBE"), d("$mHE"), d("$kYE"), d("__Kh", "yfiles._R.C.GZC"), d("__Lh"), d("$eVE"), d("$dVE"), d("$ITE"))]
        },
        _$_npo: "BFD",
        _$_opo: "CFD",
        _$_ppo: "DFD",
        _$$_dcb: ["yfiles.genealogy", "yfiles._R.T", "yfiles._R.C"]
    });
    var W = ["Unknown alignment.", "DataProvider ", " is not registered to the graph.", "FamilyTreeLayout", "FamilyTypeDpKey", "Direct link between two individuals", "Family node has more than two parent nodes", "Direct link between two family nodes"];
    v$("_$$_dcb", function(r) {
        r._$_ppo = new d$(function() {
            return {
                NO_SORTING: 0,
                FEMALE_FIRST: 1,
                FEMALE_ALWAYS_FIRST: 2,
                MALE_FIRST: 3,
                MALE_ALWAYS_FIRST: 4
            }
        }
        )
    }),
    v$("_$$_dcb", function(r) {
        r._$_mpo = new X(function() {
            return {
                $extends: t.C.UBD,
                constructor: function() {
                    t.C.UBD.call(this),
                    this.$f = null,
                    this.$eVE = !1,
                    this.$mHE.$thE = 12,
                    this.$f12 = F$(this)
                },
                $f16: null,
                $f17: null,
                $f3: null,
                $f4: null,
                $f19: null,
                $f9: null,
                $f2: null,
                $f15: null,
                $f6: null,
                $f8: null,
                $f21: null,
                $f22: null,
                $f12: null,
                $f24: !0,
                $f13: 30,
                $f14: 10,
                $f10: !0,
                $f18: !1,
                $f7: 0,
                _$_yyd: {
                    get: function() {
                        return this.$f12
                    },
                    set: function($) {
                        this.$f12 = $ === null ? F$(this) : $
                    }
                },
                "$m1!": function() {
                    if (!this.$f24 || this.$f20 !== 0)
                        return !1;
                    var $ = this.$gd;
                    return t.C.YAD.isInstance($) && ($ = $.$Rr),
                    $ instanceof t.C.HGD
                },
                _$_tmh: {
                    get: function() {
                        return this.$f13
                    },
                    set: function($) {
                        if ($ < 0)
                            throw t.NG.$m2();
                        this.$f13 = $
                    }
                },
                _$_lrg: {
                    get: function() {
                        return this.$f14
                    },
                    set: function($) {
                        if ($ < 0)
                            throw t.NG.$m2();
                        this.$f14 = $
                    }
                },
                _$_avf: {
                    get: function() {
                        return this.$f10
                    },
                    set: function($) {
                        this.$f10 = $
                    }
                },
                _$_wah: {
                    get: function() {
                        return this.$f18
                    },
                    set: function($) {
                        this.$f18 = $
                    }
                },
                _$_xyd: {
                    get: function() {
                        return this.$f7
                    },
                    set: function($) {
                        var i = 0;
                        switch ($) {
                        case 1:
                            i = 1;
                            break;
                        case 0:
                            i = .5;
                            break;
                        case -1:
                            i = 0;
                            break;
                        default:
                            throw t.NG.$m18(W[0])
                        }
                        this.$f12 !== null && this.$f12 instanceof t.C.HGD && (this.$f12.$hQE.$exE = i),
                        this.$f7 = $
                    }
                },
                $BaE: {
                    set: function($) {
                        this.$f49 = $
                    }
                },
                $HTE: {
                    set: function($) {
                        this.$f32 = $
                    }
                },
                $f20: 0,
                $f: null,
                _$_qlh: {
                    get: function() {
                        return this.$f20
                    },
                    set: function($) {
                        switch ($) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            this.$f20 = $;
                            break;
                        default:
                            throw t.NG.$m2()
                        }
                    }
                },
                $dwF: function($) {
                    if ($.$juF(t.O.$p56) === null)
                        throw t.NG.$m28(W[1] + t.O.$p56 + W[2]);
                    var i = new t.C.KLB($)
                      , n = $.$juF(t.O.$p3)
                      , f = $.$juF(t.O.$p36)
                      , a = $.$juF(t.O.$p4)
                      , l = $.$juF(t.O.$p70)
                      , c = new t.C.KLB($)
                      , h = null
                      , o = t.T.LLB.$I()
                      , m = t.T.LLB.$I()
                      , y = t.T.LLB.$I()
                      , v = t.T.LLB.$I()
                      , A = t.T.LLB.$G()
                      , F = null;
                    if (function(s, x) {
                        s.$f21 = t.T.LLB.$I();
                        var V = x.$juF(t.O.$p56);
                        if (V !== null)
                            for (var M = x.$wiF(); M.$oo; M.$Xt()) {
                                var Q = M.$Ap;
                                V.$iu(Q) === 1 && s.$f21.$RA(Q, Q.$f7)
                            }
                    }(this, $),
                    function(s, x) {
                        s.$f22 = t.T.LLB.$I();
                        var V = x.$juF(t.O.$p56);
                        if (V !== null)
                            for (var M = x.$wiF(); M.$oo; M.$Xt()) {
                                var Q = M.$Ap;
                                V.$iu(Q) === 1 && s.$f22.$RA(Q, Q.$f6)
                            }
                    }(this, $),
                    n !== null) {
                        h = $.$thF();
                        for (var _ = !1, O = $.$vhF(); O.$oo; O.$Xt()) {
                            var e = O.$zp;
                            n.$Hj(e.$f2) !== n.$Hj(e.$f3) ? (h.$Oj(e, !0),
                            c.$QlF(e),
                            _ = !0) : h.$Oj(e, !1)
                        }
                        _ || ($.$btF(h),
                        h = null);
                        for (var E = $.$wiF(); E.$oo; E.$Xt()) {
                            var p = E.$Ap;
                            n.$Hj(p) && (A.$LA(a.$iu(p), p),
                            i.$SlF(p),
                            o.$Oj(p, !0),
                            m.$LA(p, f.$iu(p)),
                            y.$LA(p, a.$iu(p)),
                            v.$LA(p, l.$iu(p)))
                        }
                        n !== null && $.$LzF(t.O.$p3),
                        f !== null && $.$LzF(t.O.$p36),
                        a !== null && $.$LzF(t.O.$p4),
                        l !== null && $.$LzF(t.O.$p70)
                    }
                    var K = new t.T.AFD.T1(this);
                    if (T$(this, $, K),
                    n !== null) {
                        var b = new t.C.OLB($);
                        for (E = $.$wiF(); E.$oo; E.$Xt())
                            if (p = E.$Ap,
                            b.$MrF(p)) {
                                var u = new t.LE;
                                o.$Oj(p, !1);
                                for (var D = b.$KrF(p).$m4(); D.$p; ) {
                                    var L = D.$m()
                                      , j = f.$iu(L);
                                    if (j !== null) {
                                        for (var g = 0; g < u.$ph; g++)
                                            if (j === f.$iu(u.$sh(g))) {
                                                j = null;
                                                break
                                            }
                                        j !== null && u.$m(L)
                                    }
                                }
                                if (u.$ph === 0)
                                    L = b.$KrF(p).$PgF(),
                                    m.$LA(p, f.$iu(L)),
                                    y.$LA(p, a.$iu(L));
                                else if (m.$LA(p, f.$iu(u.$sh(0))),
                                y.$LA(p, a.$iu(u.$sh(0))),
                                u.$ph > 1) {
                                    for (var z = 0; z < u.$ph; z++)
                                        for (var k = A.$iu(f.$iu(u.$sh(z))), R = 0; R < u.$ph; R++) {
                                            var G = A.$iu(f.$iu(u.$sh(R)));
                                            V$.equals(a.$iu(G), f.$iu(k)) && u.$m3(R)
                                        }
                                    if (m.$LA(p, f.$iu(u.$sh(0))),
                                    y.$LA(p, a.$iu(u.$sh(0))),
                                    u.$ph !== 1) {
                                        F === null && (F = new t.C.SKB.$w);
                                        var N = $.$kgF();
                                        for (F.$m6(N),
                                        o.$Oj(N, !0),
                                        y.$LA(N, N),
                                        g = 1; g < u.$ph; g++)
                                            for (var J = u.$sh(0), f$ = !1; J !== null; ) {
                                                for (var $$ = A.$iu(f.$iu(J)), I = u.$sh(g); I !== null; ) {
                                                    var r$ = A.$iu(f.$iu(I));
                                                    if (r$ === $$) {
                                                        if (u.$sh(0) !== J)
                                                            for (var q = 0; q < g; q++)
                                                                u.$vh(q, J);
                                                        u.$vh(g, I),
                                                        f$ = !0;
                                                        break
                                                    }
                                                    I = r$
                                                }
                                                if (f$)
                                                    break;
                                                for (q = 0; q < g; q++)
                                                    u.$vh(q, J);
                                                J = $$
                                            }
                                        for (g = 0; g < u.$ph; g++)
                                            m.$LA(u.$sh(g), N);
                                        m.$LA(N, f.$iu(u.$sh(0))),
                                        i.$SlF(N)
                                    }
                                }
                            } else
                                o.$Oj(p, !1),
                                m.$LA(p, f.$iu(p)),
                                y.$LA(p, a.$iu(p));
                        b.$vfE()
                    }
                    var l$ = new t.T.AFD.T2(this,this.$gd)
                      , y$ = new t.T.AFD.T4(i,n,o,m,y,v,l$)
                      , L$ = new t.C.RBD;
                    L$.$Rr = y$;
                    var A$ = new t.C.LAD(L$,null);
                    A$.$YxE = this.$m1();
                    try {
                        new t.T.AFD.T3(this,A$,K,l$).$gv($)
                    } finally {
                        (function(s, x) {
                            s.$f16 !== null && (x.$LzF(t.O.$p121),
                            x.$btF(s.$f16),
                            s.$f16 = null),
                            s.$f17 !== null && (x.$LzF(t.O.$p122),
                            x.$btF(s.$f17),
                            s.$f17 = null),
                            s.$f3 !== null && (x.$LzF(t.O.$p181),
                            x.$btF(s.$f3),
                            s.$f3 = null),
                            s.$f4 !== null && (x.$LzF(t.O.$p182),
                            x.$btF(s.$f4),
                            s.$f4 = null),
                            s.$f8 !== null && (x.$LzF(t.O.$p70),
                            x.$ctF(s.$f8),
                            s.$f8 = null),
                            s.$f9 !== null && (x.$LzF(t.O.$p26),
                            x.$ctF(s.$f9),
                            s.$f9 = null),
                            s.$f2 !== null && (x.$LzF(t.O.$p4),
                            x.$ctF(s.$f2),
                            s.$f2 = null),
                            s.$f15 !== null && (x.$LzF(t.O.$p36),
                            x.$ctF(s.$f15),
                            s.$f15 = null),
                            s.$f6 !== null && (x.$LzF(t.O.$p3),
                            x.$ctF(s.$f6),
                            s.$f6 = null),
                            s.$f !== null && (s.$f.$vt(),
                            s.$f = null),
                            s.$f19 = null
                        }
                        )(this, $),
                        n !== null && $.$sKF(t.O.$p3, n),
                        f !== null && $.$sKF(t.O.$p36, f),
                        a !== null && $.$sKF(t.O.$p4, a),
                        l !== null && $.$sKF(t.O.$p70, l)
                    }
                    if (i.$TgF(),
                    F !== null) {
                        for (g = 0; g < F.$f1; g++)
                            $.$zpF(F.$sh(g));
                        F = null
                    }
                    if (c.$TgF(),
                    this.$f1 !== null)
                        for (g = 0; g < this.$f1.$ph; g++)
                            $.$zpF(this.$f11.$sh(g));
                    if (h !== null) {
                        $.$sKF(t.O.$p102, h);
                        var a$ = new t.C.HLD;
                        a$.$bLE = t.O.$p102;
                        try {
                            a$.$gv($)
                        } finally {
                            $.$LzF(t.O.$p102),
                            $.$btF(h)
                        }
                    }
                },
                $f5: null,
                $f1: null,
                $f11: null,
                $static: {
                    FAMILY_TYPE_DP_KEY: null,
                    T2: new X(function() {
                        return {
                            $extends: t.C.SBD,
                            $final: !0,
                            constructor: function($, i) {
                                t.C.SBD.call(this, i),
                                this.$f = $,
                                this.$f1 = t.T.LLB.$H()
                            },
                            $f1: null,
                            "$m!": function($) {
                                return this.$f1.$iu($)
                            },
                            "$gv!": function($) {
                                if (this.$Rr.$gv($),
                                this.$f.$m1())
                                    for (var i = $.$wiF(); i.$oo; i.$Xt())
                                        for (var n = i.$Ap.$muF(null); n.$oo; n.$Xt()) {
                                            var f = n.$zp;
                                            this.$f1.$LA(f, $.$EzF(f))
                                        }
                            },
                            $f: null
                        }
                    }
                    ),
                    T3: new X(function() {
                        return {
                            $extends: t.C.SBD,
                            $final: !0,
                            constructor: function($, i, n, f) {
                                t.C.SBD.call(this, i),
                                this.$f = $,
                                this.$f2 = n,
                                this.$f1 = f
                            },
                            $f2: null,
                            $f1: null,
                            "$gv!": function($) {
                                if (this.$f.$m1()) {
                                    var i = new t.C.OLB($)
                                      , n = t.T.LLB.$I();
                                    (function(a, l, c, h) {
                                        for (var o = c.$juF(t.O.$p56), m = a.$f.$f11.$ieE(); m.$oo; m.$Xt()) {
                                            var y = m.$Ap
                                              , v = l.$KrF(y);
                                            if (x$(0, v, o)) {
                                                h.$Oj(y, !0);
                                                for (var A = v.$ieE(); A.$oo; A.$Xt()) {
                                                    var F = A.$Ap;
                                                    if (o.$iu(F) !== 1)
                                                        for (var _ = F.$muF(null); _.$oo; _.$Xt())
                                                            a.$f.$f4.$LA(_.$zp, null)
                                                }
                                            }
                                        }
                                    }
                                    )(this, i, $, n),
                                    this.$Rr.$gv($),
                                    function(a, l, c, h, o) {
                                        for (var m = l.$juF(t.O.$p56), y = a.$f.$f11.$ieE(); y.$oo; y.$Xt()) {
                                            var v = y.$Ap;
                                            if (h.$Hj(v)) {
                                                for (var A = c.$KrF(v), F = null, _ = null, O = A.$ieE(); O.$oo; O.$Xt()) {
                                                    var e = O.$Ap;
                                                    m.$iu(e) !== 1 && e.$f6 > 0 && (F === null ? F = e : _ = e)
                                                }
                                                if (F !== null && _ !== null) {
                                                    var E = l.$bpF(F)
                                                      , p = l.$bpF(_)
                                                      , K = o.$m(F.$f11).$f
                                                      , b = o.$m(_.$f11).$f;
                                                    if (E > p && K < b || E < p && K > b) {
                                                        var u = l.$cuF(v);
                                                        for (O = A.$ieE(); O.$oo; O.$Xt()) {
                                                            e = O.$Ap;
                                                            var D = u.$f + u.$f3 - (l.$bpF(e) - u.$f);
                                                            l.$GOF(e, D, l.$cpF(e))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }(this, $, i, n, this.$f1),
                                    function(a, l, c, h) {
                                        for (var o = l.$juF(t.O.$p56), m = a.$f.$f11.$ieE(); m.$oo; m.$Xt()) {
                                            var y = m.$Ap;
                                            if (h.$Hj(y))
                                                for (var v = c.$KrF(y).$ieE(); v.$oo; v.$Xt()) {
                                                    var A = v.$Ap;
                                                    if (o.$iu(A) !== 1)
                                                        for (var F = A.$muF(null); F.$oo; F.$Xt()) {
                                                            var _ = F.$zp;
                                                            l.$yMF(_, new t.C.TJB.$x(0,-l.$m38(A).$Xq / 2)),
                                                            a.$f.$f4.$LA(_, t.T.BDD.$x(1, !0))
                                                        }
                                                }
                                        }
                                    }(this, $, i, n),
                                    $.$sKF(t.O.$p70, this.$f.$f8);
                                    var f = this.$f1.$Rr;
                                    f.$ghE = 0,
                                    this.$f2.$f1 = !0,
                                    this.$Rr.$gv($),
                                    f.$ghE = 1,
                                    this.$f2.$f1 = !1,
                                    $.$LzF(t.O.$p164),
                                    i.$vfE()
                                } else
                                    this.$Rr.$gv($)
                            },
                            $f: null
                        }
                    }
                    ),
                    T4: new X(function() {
                        return {
                            $extends: t.C.SBD,
                            $final: !0,
                            constructor: function($, i, n, f, a, l, c) {
                                t.C.SBD.call(this, c),
                                this.$f = $,
                                this.$f1 = i,
                                this.$f2 = n,
                                this.$f5 = f,
                                this.$f4 = a,
                                this.$f3 = l
                            },
                            "$gv!": function($) {
                                var i = new t.C.SKB.$x(this.$f.$SjF());
                                this.$f.$TgF(),
                                this.$f1 !== null && ($.$sKF(t.O.$p3, this.$f2),
                                $.$sKF(t.O.$p36, this.$f5),
                                $.$sKF(t.O.$p4, this.$f4),
                                $.$sKF(t.O.$p70, this.$f3)),
                                this.$gfF($),
                                this.$f.$TlF(i),
                                $.$LzF(t.O.$p3),
                                $.$LzF(t.O.$p36),
                                $.$LzF(t.O.$p4),
                                $.$LzF(t.O.$p70)
                            },
                            $f: null,
                            $f1: null,
                            $f2: null,
                            $f5: null,
                            $f4: null,
                            $f3: null
                        }
                    }
                    ),
                    T: new X(function() {
                        return {
                            $final: !0,
                            constructor: function($, i) {
                                this.$f1 = $,
                                this.$f = i
                            },
                            $f1: null,
                            $f: null,
                            "equals!": function($) {
                                if (this === $)
                                    return !0;
                                if ($ === null || T.lang.getType(this) !== T.lang.getType($))
                                    return !1;
                                var i = $;
                                return this.$f === i.$f && this.$f1 === i.$f1
                            },
                            "hashCode!": function() {
                                var $ = this.$f1.hashCode();
                                return $ = 31 * $ + this.$f.hashCode()
                            }
                        }
                    }
                    ),
                    T1: new X(function() {
                        return {
                            $final: !0,
                            $with: [t.C.WAD],
                            constructor: function($) {
                                this.$f = $,
                                this.$f1 = !1,
                                this.$f3 = t.T.LLB.$I(),
                                this.$f2 = new t.T.AFD.T1.T(this,this.$f3,this.$f.$f21)
                            },
                            $f1: !1,
                            $f2: null,
                            $f3: null,
                            "$gv!": function($) {
                                if ($.$ia !== 1) {
                                    if ($.$ia === 2 && this.$f.$f10 && this.$f.$f22.$ou($.$ha) < 2 && this.$f.$f22.$ou($.$wX) < 2) {
                                        for (var i = null, n = null, f = $.$wiF(); f.$oo; f.$Xt()) {
                                            var a = f.$Ap;
                                            $.$juF(t.O.$p56).$iu(a) !== 1 ? i = a : n = a
                                        }
                                        if (i !== null && n !== null) {
                                            var l = $.$m38(i)
                                              , c = $.$m38(n);
                                            l.$XB(-l.$Bq / 2, 0),
                                            c.$XB(-c.$Bq / 2, l.$Xq + this.$f.$f14);
                                            for (var h = n.$muF(null); h.$oo; h.$Xt()) {
                                                var o = h.$zp;
                                                (U = $.$m37(o)).$Ju(),
                                                U.$kr = new t.C.TJB.$x(0,0),
                                                U.$lr = new t.C.TJB.$x(0,0)
                                            }
                                            var m = this.$f.$f8.$iu(i)
                                              , y = new t.C.KJB(m.top,m.left,-this.$f.$f14 - $.$m38(n).$Xq,m.right);
                                            return void this.$f.$f8.$LA(i, y)
                                        }
                                    }
                                    var v = new t.C.SKB.$w;
                                    if (this.$f1)
                                        v.$qlF($.$wiF()),
                                        v.$UlF(new t.T.AFD.T1.T1(this,$));
                                    else {
                                        var A = new t.C.SKB.$w
                                          , F = new t.C.SKB.$w;
                                        for (f = $.$wiF(); f.$oo; f.$Xt())
                                            a = f.$Ap,
                                            $.$juF(t.O.$p56).$iu(a) !== 1 ? A.$m6(a) : F.$m6(a);
                                        for (var _ = null, O = 0, e = 0; e < A.$f1; e++)
                                            (M = A.$sh(e)).$NjF().$yp > O && (O = M.$NjF().$yp,
                                            _ = M);
                                        A.$jn(_),
                                        v.$m6(_),
                                        function $t(Z, J$, k$, w, H) {
                                            for (var S = new t.C.SKB.$w, b$ = H.$NjF(); b$.$oo; b$.$Xt()) {
                                                var Y = b$.$Ap;
                                                if (k$.$jn(Y)) {
                                                    var tt = B(Z, Y, H, new t.C.SKB.$y(H));
                                                    Z.$f3.$RA(Y, tt),
                                                    S.$m6(Y)
                                                }
                                            }
                                            S.$UlF(Z.$f2);
                                            var I$ = H.$f2.$juF(t.O.$p56)
                                              , q$ = !1;
                                            if (S.$f1 === 1 && w.indexOf(H) === w.$f1 - 1 && (q$ = !0),
                                            Z.$f.$f20 === 2 || Z.$f.$f20 === 4)
                                                for (var C = 0; C < S.$f1; C++)
                                                    Z.$f.$f20 === 4 == (I$.$iu(H) === 2) ? w.$m6(S.$sh(C)) : w.$nn(0, S.$sh(C));
                                            else if (Z.$f.$f20 !== 0 && w.$f1 === 1 && S.$f1 === 1)
                                                Z.$f.$f20 === 3 == (I$.$iu(H) === 2) ? w.$m6(S.$sh(0)) : w.$nn(0, S.$sh(0));
                                            else {
                                                var et = w.indexOf(H)
                                                  , H$ = w.indexOf(H) + 1;
                                                for (C = 0; C < S.$f1; C++)
                                                    C % 2 !== 0 || q$ ? w.$nn(H$, S.$sh(C)) : w.$nn(et, S.$sh(C)),
                                                    H$++
                                            }
                                            var C$ = new t.C.SKB.$w;
                                            for (C = 0; C < S.$f1; C++) {
                                                for (var Y$ = !1, u$ = null, e$ = (Y = S.$sh(C)).$XjF(); e$.$oo; e$.$Xt())
                                                    if ((u$ = e$.$Ap) !== H) {
                                                        Y$ = !0;
                                                        break
                                                    }
                                                if (J$.$jn(u$)) {
                                                    C$.$m6(u$);
                                                    var it = w.indexOf(Y);
                                                    w.indexOf(H) > it ? w.$nn(w.indexOf(Y), u$) : w.$nn(w.indexOf(Y) + 1, u$)
                                                } else if (Y$) {
                                                    var D$ = 0;
                                                    for (w.$jn(Y),
                                                    e$ = Y.$XjF(); e$.$oo; e$.$Xt())
                                                        D$ = Math.max(w.indexOf(e$.$Ap), D$);
                                                    w.$nn(D$, Y)
                                                }
                                            }
                                            for (S = null,
                                            C = 0; C < C$.$f1; C++)
                                                $t(Z, J$, k$, w, C$.$sh(C))
                                        }(this, A, F, v, _)
                                    }
                                    var E = new t.C.SKB.$w
                                      , p = new t.C.SKB.$w
                                      , K = new t.LE
                                      , b = 0
                                      , u = 0
                                      , D = Number.MAX_VALUE;
                                    for (e = 0; e < v.$f1; e++) {
                                        a = v.$sh(e);
                                        var L = $.$m38(a);
                                        $.$juF(t.O.$p56).$iu(a) === 1 ? (E.$m6(a),
                                        K.$m(e),
                                        L.$XB(b + Math.max((this.$f.$f13 - L.$Bq) / 2, L.$Bq / 4), -L.$Xq / 2),
                                        b = b + Math.max(1.5 * L.$Bq, this.$f.$f13) | 0) : (p.$m6(a),
                                        D = Math.min(L.$Xq, D),
                                        u = Math.max(L.$Xq, u),
                                        L.$XB(b, -L.$Xq / 2),
                                        b = b + L.$Bq | 0)
                                    }
                                    if (this.$f.$f7 !== 0)
                                        for (e = 0; e < p.$f1; e++)
                                            L = $.$m38(p.$sh(e)),
                                            this.$f.$f7 === 1 ? L.$XB(L.$mo, -(L.$Xq - D / 2)) : L.$XB(L.$mo, -D / 2);
                                    var j = t.HF.$m11(v.$f1)
                                      , g = -2;
                                    for (e = 0; e < E.$f1; e++) {
                                        var z = E.$sh(e)
                                          , k = !1
                                          , R = t.ZE.$m8(K.$sh(e));
                                        if (this.$f.$f18 || g === R - 1 && j[g] === 0)
                                            k = !0;
                                        else
                                            for (var G = z.$XjF(); G.$oo; G.$Xt()) {
                                                var N = G.$Ap
                                                  , J = v.indexOf(N) - R;
                                                if (Math.abs(J) > 2) {
                                                    k = !0;
                                                    break
                                                }
                                            }
                                        if (k)
                                            j[R] = 1;
                                        else {
                                            var f$ = new t.C.TJB.$x(0,0);
                                            for (h = z.$muF(null); h.$oo; h.$Xt())
                                                o = h.$zp,
                                                (U = $.$m37(o)).$Ju(),
                                                this.$f.$f7 === 0 ? U.$kr = f$ : (L = $.$m38(o.$f2),
                                                $.$vLF(o, new t.C.TJB.$x(L.$mo + L.$Bq / 2,0))),
                                                U.$lr = f$;
                                            E.$m9(e),
                                            K.$m3(e),
                                            e--
                                        }
                                        g = R
                                    }
                                    var $$, I = u / 2;
                                    for (this.$f.$f7 === 1 ? I = D / 2 : this.$f.$f7 === -1 && (I = u - D / 2),
                                    $$ = I,
                                    e = 0; e < E.$f1; e++) {
                                        z = E.$sh(e);
                                        for (var r$ = t.ZE.$m8(K.$sh(e)), q = 0, l$ = z.$XjF(); l$.$oo; l$.$Xt()) {
                                            for (var y$ = v.indexOf(l$.$Ap), L$ = Math.min(r$, y$), A$ = Math.max(r$, y$), a$ = 0, s = L$; s <= A$; s++)
                                                a$ += j[s];
                                            q = Math.max(a$, q)
                                        }
                                        L = $.$m38(z);
                                        var x = I + this.$f.$f14 + (L.$Xq + this.$f.$f14) * (q - 1);
                                        L.$XB(L.$mo, x),
                                        $$ = Math.max($$, x + L.$Xq)
                                    }
                                    for (var V = 0; V < p.$f1; V++) {
                                        var M = p.$sh(V)
                                          , Q = v.indexOf(M)
                                          , O$ = 0
                                          , t$ = new t.C.WIB.$w;
                                        for (h = M.$jwF(null); h.$oo; h.$Xt())
                                            o = h.$zp,
                                            j[v.indexOf(o.$f3)] > 0 && (t$.$m6(o),
                                            O$++);
                                        if (O$ > 0) {
                                            var w$ = $.$m38(M).$Bq / (O$ + 1)
                                              , o$ = t.HF.$m11(t$.$f1)
                                              , E$ = t.HF.$m11(t$.$f1);
                                            for (e = 0; e < t$.$f1; e++)
                                                for (o$[e] = v.indexOf(t$.$sh(e).$f3) - Q,
                                                o$[e] > 0 && (o$[e] -= 2 * v.$f1),
                                                E$[e] = w$,
                                                s = 0; s < e; s++)
                                                    o$[e] > o$[s] ? E$[s] += w$ : E$[e] += w$;
                                            for (e = 0; e < t$.$f1; e++) {
                                                var U;
                                                o = t$.$sh(e),
                                                (U = $.$m37(o)).$Ju(),
                                                U.$lr = new t.C.TJB.$x(0,0);
                                                var B$ = $.$m38(M)
                                                  , j$ = $.$m38(o.$f3)
                                                  , z$ = this.$f.$f19.$Bi(o) ? B$.$Bq / 2 : E$[e]
                                                  , W$ = j$.$no + j$.$Xq / 2;
                                                U.$kr = new t.C.TJB.$x(z$ - B$.$Bq / 2,0),
                                                U.$nA(B$.$mo + z$, W$)
                                            }
                                        }
                                    }
                                    var N$ = (m = this.$f.$f8.$iu(p.$sh(0))).top
                                      , R$ = m.bottom;
                                    m !== null && this.$f.$f7 === 0 ? N$ = $$ - I : m !== null && this.$f.$f7 === 1 && (R$ = I - $$),
                                    this.$f.$f8.$LA(p.$sh(0), new t.C.KJB(N$,m.left,R$,m.right))
                                }
                            },
                            $f: null,
                            $static: {
                                T: new X(function() {
                                    return {
                                        $final: !0,
                                        $with: [t.C.FMB],
                                        constructor: function($, i, n) {
                                            this.$f1 = $,
                                            this.$f = i,
                                            this.$f2 = n
                                        },
                                        $f: null,
                                        $f2: null,
                                        "$on!": function($, i) {
                                            var n = t.T.FLB.$m(this.$f.$ou($), this.$f.$ou(i));
                                            return n !== 0 ? n : t.T.FLB.$m(this.$f2.$ou($), this.$f2.$ou(i))
                                        },
                                        $f1: null
                                    }
                                }
                                ),
                                T1: new X(function() {
                                    return {
                                        $final: !0,
                                        $with: [t.C.FMB],
                                        constructor: function($, i) {
                                            this.$f1 = $,
                                            this.$f = i
                                        },
                                        $f: null,
                                        "$on!": function($, i) {
                                            return t.T.FLB.$E(this.$f.$bpF($), this.$f.$bpF(i))
                                        },
                                        $f1: null
                                    }
                                }
                                )
                            }
                        }
                    }
                    ),
                    $clinit: function() {
                        t.T.AFD.FAMILY_TYPE_DP_KEY = t.O.$m1(t.C.BFD.$class, t.C.AFD.$class, W[3], W[4])
                    }
                }
            }
        }
        )
    }),
    v$("_$$_dcb", function(r) {
        r._$_npo = new d$(function() {
            return {
                FAMILY: 1,
                MALE: 2,
                FEMALE: 3
            }
        }
        )
    }),
    v$("_$$_dcb", function(r) {
        r._$_opo = new d$(function() {
            return {
                TOP: -1,
                CENTER: 0,
                BOTTOM: 1
            }
        }
        )
    })
}(P.lang.module("yfiles._R"), P);
var pt = P.genealogy.__f
  , K$ = P.genealogy.BFD;
P.genealogy.CFD;
P.genealogy.DFD;
/****************************************************************************
 ** @license
 ** This demo file is part of yFiles for HTML 2.6-EAP10.
 ** Copyright (c) 2000-2023 by yWorks GmbH, Vor dem Kreuzberg 28,
 ** 72070 Tuebingen, Germany. All rights reserved.
 **
 ** yFiles demo files exhibit yFiles for HTML functionalities. Any redistribution
 ** of demo files in source code or binary form, with or without
 ** modification, is not permitted.
 **
 ** Owners of a valid software license for a yFiles for HTML version that this
 ** demo is shipped with are allowed to use the demo source code as basis
 ** for their own yFiles for HTML powered applications. Use of such programs is
 ** governed by the rights and conditions as set out in the yFiles for HTML
 ** license agreement.
 **
 ** THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESS OR IMPLIED
 ** WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 ** MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN
 ** NO EVENT SHALL yWorks BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 ** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 ** TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 ** PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 ** LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 ** NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 ** SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 **
 ***************************************************************************/
const G$ = {
    __Ds: [{
        id: 0,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `John Fitzgerald
Kennedy`
        }, {
            text: "* 29 MAY 1917"
        }, {
            text: "✝ 22 NOV 1963"
        }]
    }, {
        id: 1,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Jaqueline Lee
Bouvier`
        }, {
            text: "* 28 JUL 1929"
        }, {
            text: "✝ 19 MAY 1994"
        }]
    }, {
        id: 2,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `John Vernou
Bouvier III`
        }, {
            text: "* 19 MAY 1891"
        }, {
            text: "✝ 3 AUG 1957"
        }]
    }, {
        id: 3,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Janet Norton
Lee`
        }, {
            text: "* 3 DEC 1907"
        }, {
            text: "✝ 22 JUL 1989"
        }]
    }, {
        id: 4,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Caroline Bouvier
Kennedy`
        }, {
            text: "* 27 NOV 1957"
        }]
    }, {
        id: 5,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `John Fitzgerald
Kennedy`
        }, {
            text: "* 25 NOV 1960"
        }, {
            text: "✝ 16 JUL 1999"
        }]
    }, {
        id: 6,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `Patrick Bouvier
Kennedy`
        }, {
            text: "* 07 AUG 1963"
        }, {
            text: "✝ 09 AUG 1963"
        }]
    }, {
        id: 7,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `Joseph Patrick
Kennedy`
        }, {
            text: "* 06 SEP 1888"
        }, {
            text: "✝ 16 NOV 1969"
        }]
    }, {
        id: 8,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Rose Elizabeth
Fitzgerald`
        }, {
            text: "* 22 JUL 1890"
        }, {
            text: "✝ 22 JAN 1995"
        }]
    }, {
        id: 9,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `Joseph Patrick
Kennedy Jr`
        }, {
            text: "* 22 JUL 1915"
        }, {
            text: "✝ 12 AUG 1944"
        }]
    }, {
        id: 10,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Rosemary
Kennedy`
        }, {
            text: "* 13 SEP 1918"
        }, {
            text: "✝ 7 JAN 1918"
        }]
    }, {
        id: 11,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Kathleen
Kennedy`
        }, {
            text: "* 20 FEB 1920"
        }, {
            text: "✝ 13 MAY 1948"
        }]
    }, {
        id: 12,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "FEMALE",
        labels: [{
            text: `Eunice Mary 
Kennedy Shriver`
        }, {
            text: "* 10 JUL 1921"
        }, {
            text: "✝ 11 AUG 2009"
        }]
    }, {
        id: 13,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `Robert Sargent
Shriver Jr`
        }, {
            text: "* 9 NOV 1915"
        }, {
            text: "✝ 18 JAN 2011"
        }]
    }, {
        id: 14,
        layout: {
            width: 200,
            height: 80
        },
        familyType: "MALE",
        labels: [{
            text: `Aristotle
Onassis`
        }, {
            text: "* 20 JAN 1906"
        }, {
            text: "✝ 15 MAR 1975"
        }]
    }, {
        id: 15,
        layout: {
            width: 15,
            height: 15
        },
        familyType: "FAMILY",
        labels: [{
            text: ""
        }]
    }, {
        id: 16,
        layout: {
            width: 15,
            height: 15
        },
        familyType: "FAMILY",
        labels: [{
            text: ""
        }]
    }, {
        id: 17,
        layout: {
            width: 15,
            height: 15
        },
        familyType: "FAMILY",
        labels: [{
            text: ""
        }]
    }, {
        id: 18,
        layout: {
            width: 15,
            height: 15
        },
        familyType: "FAMILY",
        labels: [{
            text: ""
        }]
    }, {
        id: 19,
        layout: {
            width: 15,
            height: 15
        },
        familyType: "FAMILY",
        labels: [{
            text: ""
        }]
    }],
    __Xr: [{
        id: 0,
        source: 0,
        target: 15
    }, {
        id: 1,
        source: 1,
        target: 15
    }, {
        id: 2,
        source: 15,
        target: 4
    }, {
        id: 3,
        source: 15,
        target: 5
    }, {
        id: 4,
        source: 15,
        target: 6
    }, {
        id: 5,
        source: 7,
        target: 16
    }, {
        id: 6,
        source: 8,
        target: 16
    }, {
        id: 7,
        source: 16,
        target: 9
    }, {
        id: 8,
        source: 16,
        target: 0
    }, {
        id: 9,
        source: 16,
        target: 10
    }, {
        id: 10,
        source: 16,
        target: 11
    }, {
        id: 11,
        source: 16,
        target: 12
    }, {
        id: 12,
        source: 14,
        target: 17
    }, {
        id: 13,
        source: 1,
        target: 17
    }, {
        id: 14,
        source: 2,
        target: 18
    }, {
        id: 15,
        source: 3,
        target: 18
    }, {
        id: 16,
        source: 18,
        target: 1
    }, {
        id: 17,
        source: 13,
        target: 19
    }, {
        id: 18,
        source: 12,
        target: 19
    }]
};
async function mt() {
    nt.value = await ht();
    const t = new lt("#graphComponent");
    st(t),
    t.$Hb = new ft,
    Lt(t.graph),
    yt(t.graph),
    vt(t)
}
function vt(t) {
    const T = new pt
      , s$ = new ct({
        __st: h$=>{
            switch (h$.tag.familyType) {
            case "MALE":
                return K$.MALE;
            case "FEMALE":
                return K$.FEMALE;
            case "FAMILY":
                return K$.FAMILY;
            default:
                return null
            }
        }
    });
    t.__nC(T, "1s", s$)
}
function yt(t) {
    const T = new X$({
        fill: "#67b7dc",
        stroke: "#617984",
        shape: M$.ROUND_RECTANGLE
    })
      , s$ = new X$({
        fill: "#dc67ce",
        stroke: "#846180",
        shape: M$.ROUND_RECTANGLE
    })
      , h$ = new X$({
        fill: "rgb(170, 170, 170)",
        stroke: "white",
        shape: M$.ELLIPSE
    })
      , F$ = new g$({
        font: "14px Tahoma",
        backgroundFill: "#c1e1f1",
        textFill: "#2d4a59",
        horizontalTextAlignment: "center",
        insets: 3
    })
      , x$ = new g$({
        font: "14px Tahoma",
        backgroundFill: "#f1c1ea",
        textFill: "#592d53",
        horizontalTextAlignment: "center",
        insets: 3
    })
      , T$ = new g$({
        font: "11px Tahoma",
        backgroundFill: "#c1e1f1",
        textFill: "#2d4a59",
        insets: 3
    })
      , c$ = new g$({
        font: "11px Tahoma",
        backgroundFill: "#f1c1ea",
        textFill: "#592d53",
        insets: 3
    })
      , i$ = new rt(t)
      , m$ = i$.__ZF({
        data: G$.__Ds,
        id: "id",
        layout: B=>new at(0,0,B.layout.width,B.layout.height)
    }).__Hp;
    m$.__GF = B=>{
        switch (B.familyType) {
        case "MALE":
            return T;
        case "FEMALE":
            return s$;
        case "FAMILY":
            return h$;
        default:
            return null
        }
    }
    ;
    const n$ = m$.__bG(B=>B.labels.map(X=>({
        text: X.text,
        familyType: B.familyType
    }))).$pmE;
    n$.__jF = B=>B.text,
    n$.__MF = B=>{
        const X = B.text;
        return U$(X) ? S$.INSTANCE.createParameter({
            layoutRatio: [0, 1],
            layoutOffset: [5, -5],
            labelRatio: [0, 1]
        }) : P$(X) ? S$.INSTANCE.createParameter({
            layoutRatio: [1, 1],
            layoutOffset: [-5, -5],
            labelRatio: [1, 1]
        }) : S$.INSTANCE.createParameter({
            layoutRatio: [.5, 0],
            layoutOffset: [0, 7],
            labelRatio: [.5, 0]
        })
    }
    ,
    n$.__GF = B=>{
        const X = B.text;
        return U$(X) || P$(X) ? B.familyType === "MALE" ? T$ : B.familyType === "FEMALE" ? c$ : null : B.familyType === "MALE" ? F$ : B.familyType === "FEMALE" ? x$ : null
    }
    ,
    i$.__pG(G$.__Xr, "source", "target", "id"),
    i$.__NF()
}
function U$(t) {
    return t.indexOf("*") !== -1
}
function P$(t) {
    return t.indexOf("✝") !== -1
}
function Lt(t) {
    t.edgeDefaults.style = new ot({
        stroke: "2px rgb(170, 170, 170)",
        targetArrow: ut.NONE
    })
}
mt().then(Ft);
