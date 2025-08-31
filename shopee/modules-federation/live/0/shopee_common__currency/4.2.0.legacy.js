(self.mfeModules = self.mfeModules || []).push(["shopee_common__currency", ["Platform"], e => () => Promise.resolve((() => {
    "use strict";
    var e = {
        d: (t, n) => {
            for (var o in n)
                e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: n[o]
                })
        }
        ,
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
    }
        , t = {};
    e.r(t),
        e.d(t, {
            COUNTRY_CODE: () => r,
            CURRENCY_CONFIG: () => p,
            CURRENCY_ID: () => i,
            DEFAULT_NOTCHES: () => F,
            DEFAULT_SEPARATOR_PATTERN: () => s,
            LANGUAGE: () => c,
            MAX_PRECISION: () => o,
            SYMBOL_POSITION: () => m,
            _addCurrencySymbols: () => W,
            _compactNumber: () => X,
            compactCurrency: () => k,
            compactNumber: () => J,
            default: () => V,
            deflateServerNumber: () => U,
            formatCurrency: () => G,
            formatCurrencyNumber: () => j,
            formatNumber: () => x,
            getConfigByCountry: () => L,
            getCountryConfig: () => w,
            getCurrencyConfig: () => I,
            getCurrencySpaceBetweenSymbol: () => v,
            getCurrencySymbol: () => K,
            getCurrencySymbolPosition: () => H,
            getNotches: () => _,
            getNumberParts: () => S,
            getServerNumberConvertRatio: () => E,
            getUtilsByCountry: () => V,
            localizeCompactNumber: () => z,
            parseServerNumber: () => Y
        });
    const n = Object.assign.bind()
        , o = 20
        , r = {
            SG: "SG",
            ID: "ID",
            MY: "MY",
            PH: "PH",
            TW: "TW",
            TH: "TH",
            VN: "VN",
            IR: "IR",
            MM: "MM",
            HK: "HK",
            BR: "BR",
            CN: "CN",
            MX: "MX",
            CO: "CO",
            CL: "CL",
            AR: "AR",
            PL: "PL",
            ES: "ES",
            FR: "FR",
            IN: "IN",
            US: "US",
            KR: "KR",
            JP: "JP"
        }
        , i = {
            SGD: "SGD",
            IDR: "IDR",
            MYR: "MYR",
            PHP: "PHP",
            TWD: "TWD",
            THB: "THB",
            VND: "VND",
            IRR: "IRR",
            MMK: "MMK",
            HKD: "HKD",
            BRL: "BRL",
            CNY: "CNY",
            MXN: "MXN",
            COP: "COP",
            CLP: "CLP",
            ARS: "ARS",
            PLN: "PLN",
            EUR: "EUR",
            INR: "INR",
            USD: "USD",
            KRW: "KRW",
            JPY: "JPY"
        }
        , c = {
            en: "en",
            id: "id",
            ms: "ms",
            my: "my",
            "zh-Hans": "zh-Hans",
            "zh-Hant": "zh-Hant",
            th: "th",
            vi: "vi",
            "pt-BR": "pt-BR",
            "es-MX": "es-MX",
            "es-CO": "es-CO",
            "es-CL": "es-CL",
            "es-AR": "es-AR",
            pl: "pl",
            "es-ES": "es-ES",
            fr: "fr",
            hi: "hi",
            fil: "fil",
            kr: "kr",
            jp: "jp"
        }
        , s = [3]
        , a = [4]
        , u = ","
        , l = "."
        , m = {
            FRONT: "FRONT",
            BACK: "BACK",
            FRONT_AND_BACK: "FRONT_AND_BACK"
        }
        , y = {
            symbol: "$",
            precision: 2,
            separator: u,
            separatorPattern: s,
            decimalPoint: l,
            spaceBetweenSymbol: !1,
            symbolPosition: m.FRONT
        }
        , p = {
            default: y,
            [i.SGD]: y,
            [i.IDR]: {
                symbol: "Rp",
                precision: 0,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.MYR]: {
                symbol: "RM",
                precision: 2,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.PHP]: {
                symbol: "₱",
                precision: 0,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.TWD]: {
                symbol: "$",
                precision: 0,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.THB]: {
                symbol: "฿",
                maxPrecision: 2,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.VND]: {
                symbol: "₫",
                precision: 0,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.IRR]: {
                symbol: "تومان",
                precision: 0,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.MMK]: {
                symbol: "Ks",
                precision: 0,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.HKD]: y,
            [i.BRL]: {
                symbol: "R$",
                precision: 2,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.CNY]: {
                symbol: "￥",
                precision: 2,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.MXN]: {
                symbol: ["$", "MXN"],
                spaceBetweenSymbol: [!1, !0],
                symbolPosition: m.FRONT_AND_BACK,
                precision: 2,
                separator: u,
                decimalPoint: l
            },
            [i.COP]: {
                symbol: "COP",
                precision: 0,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.CLP]: {
                symbol: "$",
                precision: 0,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.ARS]: {
                symbol: "$",
                precision: 2,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.PLN]: {
                symbol: "zł",
                symbolPosition: m.BACK,
                precision: 2,
                separator: " ",
                decimalPoint: u,
                spaceBetweenSymbol: !1
            },
            [i.EUR]: {
                symbol: "€",
                symbolPosition: m.BACK,
                precision: 2,
                separator: l,
                decimalPoint: u,
                spaceBetweenSymbol: !1
            },
            [i.INR]: {
                symbol: "₹",
                precision: 0,
                separator: u,
                decimalPoint: l,
                separatorPattern: [3, 2, 2],
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.USD]: {
                symbol: "USD",
                precision: 2,
                separator: u,
                decimalPoint: l,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.KRW]: {
                symbol: "₩",
                precision: 0,
                separator: u,
                decimalPoint: l,
                separatorPatternCompact: a,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            },
            [i.JPY]: {
                symbol: "¥",
                precision: 0,
                separator: u,
                decimalPoint: l,
                separatorPatternCompact: a,
                spaceBetweenSymbol: !1,
                symbolPosition: m.FRONT
            }
        };
    function b(e, t, n) {
        const o = parseFloat(String(e));
        return isFinite(o) ? "function" == typeof t ? t(o) : o : typeof n < "u" ? n : e
    }
    function f(e, t) {
        const { separator: n = ",", separatorPattern: o = s } = t || {};
        if ("string" != typeof e)
            return "";
        if ("string" != typeof n)
            return e;
        const r = [];
        let i = e.length
            , c = 0;
        for (; i > 0;) {
            const t = o[c % o.length]
                , n = e.slice(Math.max(i - t, 0), i);
            r.unshift(n),
                i -= t,
                c++
        }
        return r.join(n)
    }
    function P(e) {
        const [t, n] = Number(e).toExponential().split("e").map((e => +e));
        return {
            mant: t,
            exp: n
        }
    }
    function C(e) {
        let t = "";
        for (let n = 0; n < e; n++)
            t += "0";
        return t
    }
    function d(e, t) {
        return b(e, (e => "number" == typeof t && t >= 0 && t < 100 ? function (e, t) {
            const n = P(e)
                , o = P(Math.round(+(String(n.mant) + "e" + String(n.exp + t))))
                , r = String(+(String(o.mant) + "e" + String(o.exp - t)));
            if (0 === t || r.includes("e"))
                return r;
            const i = r.indexOf(".");
            return -1 === i ? r + "." + C(t) : r + C(t - (r.length - i) + 1)
        }(e, t) : e.toString()), "")
    }
    function S(e, t = ".") {
        if ("string" == typeof e) {
            const n = e.search(/^-|\+/) + 1
                , o = e.lastIndexOf(t);
            return {
                symbol: e.slice(0, n),
                integer: e.slice(n, o < 0 ? void 0 : o),
                decimal: o < 0 ? void 0 : e.slice(o + 1),
                decimalPoint: t
            }
        }
        return {
            symbol: "",
            integer: "",
            decimal: "",
            decimalPoint: t
        }
    }
    const R = 1e3
        , N = 1e6
        , h = 1e9
        , g = 1e4
        , B = 1e5
        , M = 1e7
        , T = 1e8
        , O = 1e12
        , F = [{
            notch: h,
            unit: "b"
        }, {
            notch: N,
            unit: "m"
        }, {
            notch: R,
            unit: "k"
        }]
        , D = {
            [r.SG]: {
                default: F
            },
            [r.ID]: {
                default: [{
                    notch: h,
                    unit: "M"
                }, {
                    notch: N,
                    unit: "JT"
                }, {
                    notch: R,
                    unit: "RB"
                }]
            },
            [r.MY]: {
                default: F,
                [c.ms]: F,
                [c["zh-Hans"]]: [{
                    notch: T,
                    unit: "亿"
                }, {
                    notch: g,
                    unit: "万"
                }, {
                    notch: R,
                    unit: "千"
                }]
            },
            [r.PH]: {
                default: [{
                    notch: h,
                    unit: "B"
                }, {
                    notch: N,
                    unit: "M"
                }, {
                    notch: R,
                    unit: "K"
                }]
            },
            [r.TW]: {
                default: [{
                    notch: T,
                    unit: "億"
                }, {
                    notch: g,
                    unit: "萬"
                }]
            },
            [r.TH]: {
                default: F
            },
            [r.VN]: {
                default: [{
                    notch: N,
                    unit: "tr"
                }, {
                    notch: R,
                    unit: "k"
                }]
            },
            [r.IR]: {
                default: F
            },
            [r.MM]: {
                default: F
            },
            [r.HK]: {
                default: F
            },
            [r.CN]: {
                default: [{
                    notch: g,
                    unit: "万"
                }]
            },
            [r.BR]: {
                default: [{
                    notch: h,
                    unit: "bi"
                }, {
                    notch: N,
                    unit: "mi"
                }, {
                    notch: R,
                    unit: "mil"
                }]
            },
            [r.MX]: {
                default: [{
                    notch: h,
                    unit: "mil millones"
                }, {
                    notch: N,
                    unit: "millón"
                }, {
                    notch: R,
                    unit: "mil"
                }]
            },
            [r.CO]: {
                default: [{
                    notch: h,
                    unit: "mil millones"
                }, {
                    notch: N,
                    unit: "millón"
                }, {
                    notch: R,
                    unit: "mil"
                }]
            },
            [r.CL]: {
                default: [{
                    notch: h,
                    unit: "mil millones"
                }, {
                    notch: N,
                    unit: "millón"
                }, {
                    notch: R,
                    unit: "mil"
                }]
            },
            [r.AR]: {
                default: [{
                    notch: h,
                    unit: "mm"
                }, {
                    notch: N,
                    unit: "m"
                }, {
                    notch: R,
                    unit: "k"
                }]
            },
            [r.PL]: {
                default: [{
                    notch: h,
                    unit: " mld"
                }, {
                    notch: N,
                    unit: " mln"
                }, {
                    notch: R,
                    unit: " tys."
                }]
            },
            [r.ES]: {
                default: [{
                    notch: h,
                    unit: "MM"
                }, {
                    notch: N,
                    unit: "M"
                }, {
                    notch: R,
                    unit: "k"
                }]
            },
            [r.FR]: {
                default: [{
                    notch: h,
                    unit: " Md"
                }, {
                    notch: N,
                    unit: " M"
                }, {
                    notch: R,
                    unit: " k"
                }]
            },
            [r.IN]: {
                default: [{
                    notch: M,
                    unit: " करोड़"
                }, {
                    notch: B,
                    unit: " लाख"
                }, {
                    notch: R,
                    unit: " हजार"
                }],
                [c.en]: [{
                    notch: M,
                    unit: " cr"
                }, {
                    notch: B,
                    unit: " lakh"
                }, {
                    notch: R,
                    unit: "k"
                }]
            },
            [r.US]: {
                default: [{
                    notch: h,
                    unit: "B"
                }, {
                    notch: N,
                    unit: "M"
                }, {
                    notch: R,
                    unit: "k"
                }]
            },
            [r.KR]: {
                default: [{
                    notch: O,
                    unit: "조"
                }, {
                    notch: T,
                    unit: "억"
                }, {
                    notch: g,
                    unit: "만"
                }]
            },
            [r.JP]: {
                default: [{
                    notch: O,
                    unit: "兆"
                }, {
                    notch: T,
                    unit: "億"
                }, {
                    notch: g,
                    unit: "万"
                }]
            }
        }
        , A = {
            [r.SG]: {
                currencies: {
                    [i.SGD]: {}
                },
                defaultCurrency: i.SGD
            },
            [r.ID]: {
                currencies: {
                    [i.IDR]: {}
                },
                defaultCurrency: i.IDR
            },
            [r.MY]: {
                currencies: {
                    [i.MYR]: {}
                },
                defaultCurrency: i.MYR
            },
            [r.PH]: {
                currencies: {
                    [i.PHP]: {}
                },
                defaultCurrency: i.PHP
            },
            [r.TW]: {
                currencies: {
                    [i.TWD]: {}
                },
                defaultCurrency: i.TWD
            },
            [r.TH]: {
                currencies: {
                    [i.THB]: {}
                },
                defaultCurrency: i.THB
            },
            [r.VN]: {
                currencies: {
                    [i.VND]: {}
                },
                defaultCurrency: i.VND
            },
            [r.IR]: {
                currencies: {
                    [i.IRR]: {
                        convertRate: 1e6
                    },
                    [i.MMK]: {}
                },
                defaultCurrency: i.IRR,
                serverCurrency: i.MMK
            },
            [r.MM]: {
                currencies: {
                    [i.MMK]: {}
                },
                defaultCurrency: i.MMK
            },
            [r.HK]: {
                currencies: {
                    [i.HKD]: {}
                },
                defaultCurrency: i.HKD
            },
            [r.BR]: {
                currencies: {
                    [i.BRL]: {}
                },
                defaultCurrency: i.BRL
            },
            [r.CN]: {
                currencies: {
                    [i.CNY]: {}
                },
                defaultCurrency: i.CNY
            },
            [r.MX]: {
                currencies: {
                    [i.MXN]: {}
                },
                defaultCurrency: i.MXN
            },
            [r.CO]: {
                currencies: {
                    [i.COP]: {}
                },
                defaultCurrency: i.COP
            },
            [r.CL]: {
                currencies: {
                    [i.CLP]: {}
                },
                defaultCurrency: i.CLP
            },
            [r.AR]: {
                currencies: {
                    [i.ARS]: {}
                },
                defaultCurrency: i.ARS
            },
            [r.PL]: {
                currencies: {
                    [i.PLN]: {}
                },
                defaultCurrency: i.PLN
            },
            [r.ES]: {
                currencies: {
                    [i.EUR]: {}
                },
                defaultCurrency: i.EUR
            },
            [r.FR]: {
                currencies: {
                    [i.EUR]: {
                        separator: " "
                    }
                },
                defaultCurrency: i.EUR
            },
            [r.IN]: {
                currencies: {
                    [i.INR]: {}
                },
                defaultCurrency: i.INR
            },
            [r.US]: {
                currencies: {
                    [i.USD]: {}
                },
                defaultCurrency: i.USD
            },
            [r.KR]: {
                currencies: {
                    [i.KRW]: {}
                },
                defaultCurrency: i.KRW
            },
            [r.JP]: {
                currencies: {
                    [i.JPY]: {}
                },
                defaultCurrency: i.JPY
            }
        };
    function w(e, t) {
        const o = "string" == typeof e ? e.toUpperCase() : e
            , r = function (e, t) {
                if (!e)
                    return F;
                const n = D[e]
                    , o = n.default;
                return t && n[t] || o
            }(o, t);
        return n({}, A[o], {
            notches: r
        })
    }
    function I(e, t) {
        if (function (e) {
            return "string" == typeof e && e.toUpperCase() in i
        }(e))
            return p[String(e).toUpperCase()];
        {
            const o = w(e, t)
                , r = o && o.defaultCurrency && p[o.defaultCurrency];
            return r ? n({}, r, o.currencies[o.defaultCurrency]) : p.default
        }
    }
    function K(e) {
        const t = I(e);
        return t && t.symbol || ""
    }
    function H(e) {
        const t = I(e);
        return t && typeof t.symbolPosition < "u" ? t.symbolPosition : m.FRONT
    }
    function v(e) {
        const t = I(e);
        return t && t.spaceBetweenSymbol || !1
    }
    function _(e, t) {
        return function (e) {
            return "string" == typeof e && e.toUpperCase() in r
        }(e) ? t ? w(e, t).notches : w(e).notches : F
    }
    function E(e, t) {
        if (e) {
            const n = w(e)
                , o = n && n.currencies[t || n.defaultCurrency];
            if (o && o.convertRate)
                return o.convertRate
        }
        return 1e5
    }
    function L(e, t) {
        return {
            getCountryConfig: (n, o) => w(n || e, o || t),
            getServerNumberConvertRatio: E,
            getNotches: (n, o) => _(n || e, o || t),
            getCurrencySymbol: t => K(t || e),
            DEFAULT_NOTCHES: F,
            getCurrencyConfig: n => I(n || e, t)
        }
    }
    function U(e, t, n) {
        const o = E(t, n)
            , r = Math.log10(o)
            , { symbol: i, integer: c, decimal: s, decimalPoint: a } = S(String(e));
        if (c.length > r) {
            const e = c.length - r;
            return i + c.slice(0, e) + a + c.slice(e) + (s || "")
        }
        return i + "0" + a + C(r - c.length) + c + (s || "")
    }
    function Y(e, t, n) {
        return b(e, (e => Math.round(e * E(t, n))))
    }
    function x(e, t) {
        const { precision: n, maxPrecision: o, decimalPoint: r = ".", separator: i, separatorPattern: c } = "object" == typeof t && t || {};
        let s = n;
        "object" != typeof t && (s = t);
        const a = String(e)
            , u = parseFloat(a);
        if (!isFinite(u))
            return "";
        const l = b(o, (e => b(s, (t => Math.min(t, e)), void 0)), s);
        if (u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER) {
            const { symbol: e, integer: t, decimal: n } = S(a)
                , s = "function" == typeof i ? i(t) : i ? f(t, {
                    separator: i,
                    separatorPattern: c
                }) : t;
            let u = "";
            return n && (o && (u = n.slice(0, o)),
                l && (u = n.slice(0, l))),
                e + s + (u ? r + u : "")
        }
        const m = d(d(u, o), l)
            , { symbol: y, integer: p, decimal: P } = S(m);
        return y + ("function" == typeof i ? i(p) : i ? f(p, {
            separator: i,
            separatorPattern: c
        }) : p) + (P ? r + P : "")
    }
    function j(e, t, n) {
        const { precision: o, maxPrecision: r, noSeparator: i, separatorPattern: c } = "object" == typeof n ? n : {
            precision: n,
            maxPrecision: void 0,
            noSeparator: void 0,
            separatorPattern: void 0
        }
            , a = I(e);
        let u = a ? x(t, {
            decimalPoint: a.decimalPoint,
            separator: i ? void 0 : a.separator,
            separatorPattern: i ? void 0 : typeof c < "u" ? c : typeof a.separatorPattern > "u" ? s : a.separatorPattern,
            maxPrecision: b(r, (e => e), !1 === r ? r : a.maxPrecision),
            precision: b(o, (e => e), !1 === o ? o : a.precision)
        }) : x(t);
        return ("THB" === e || "TH" === e) && void 0 === o && "string" == typeof u && /\.\d$/.exec(u) && (u += "0"),
            u
    }
    function G(e, t, n) {
        const o = "number" == typeof t ? t : parseFloat(t)
            , r = o < 0;
        return W(String(j(e, Math.abs(o), n)), r, e, n)
    }
    function W(e, t, o, r) {
        const i = function (e, t) {
            return "object" == typeof t && (e = n({}, e),
                "string" == typeof t.symbolPosition && (e.symbolPosition = t.symbolPosition),
                "FRONT_AND_BACK" === e.symbolPosition ? (Array.isArray(t.symbol) && "string" == typeof t.symbol[0] && "string" == typeof t.symbol[1] ? e.symbol = t.symbol : "string" == typeof t.symbol && (e.symbol = [t.symbol, t.symbol]),
                    Array.isArray(t.spaceBetweenSymbol) && "boolean" == typeof t.spaceBetweenSymbol[0] && "boolean" == typeof t.spaceBetweenSymbol[1] ? e.spaceBetweenSymbol = t.spaceBetweenSymbol : "boolean" == typeof t.spaceBetweenSymbol && (e.spaceBetweenSymbol = [t.spaceBetweenSymbol, t.spaceBetweenSymbol])) : ("string" == typeof t.symbol && (e.symbol = t.symbol),
                        "boolean" == typeof t.spaceBetweenSymbol && (e.spaceBetweenSymbol = t.spaceBetweenSymbol))),
                e
        }(I(o), r)
            , c = t ? "-" : ""
            , s = e => e ? " " : "";
        return i.symbolPosition === m.FRONT_AND_BACK ? c + i.symbol[0] + s(i.spaceBetweenSymbol[0] && !!i.symbol[0] && !!e) + e + s(i.spaceBetweenSymbol[1] && !!i.symbol[1] && !!e) + i.symbol[1] : i.symbolPosition === m.BACK ? c + e + s(i.spaceBetweenSymbol && !!i.symbol && !!e) + (i.symbol || "") : c + (i.symbol || "") + s(i.spaceBetweenSymbol && !!i.symbol && !!e) + e
    }
    function X(e, t = 1, n = F) {
        const o = parseFloat(String(e));
        if (isFinite(o) && n && n.length && o >= n[n.length - 1].notch)
            for (let r = n.length; r--;) {
                const { notch: e, unit: i } = n[r]
                    , c = n[r - 1]
                    , s = parseFloat(d(o / e, t));
                if (!c || Math.abs(s) < c.notch / e)
                    return {
                        number: s,
                        unit: i
                    }
            }
        return {
            number: parseFloat(d(o, t)),
            unit: ""
        }
    }
    function k(e, t, o, r, i) {
        const c = o && "object" == typeof o ? o.maxPrecision : o
            , s = !(!o || "object" != typeof o || null == o.precision) && o.precision
            , a = parseFloat(String(t))
            , u = a < 0
            , { number: l, unit: m } = X(Math.abs(a), "number" == typeof s ? "number" == typeof c ? Math.min(s, c) : s : c, r || _(e, i))
            , y = o && "object" == typeof o ? n({}, o, {
                precision: s
            }) : {
                precision: !1,
                maxPrecision: c
            }
            , { separatorPatternCompact: p } = I(e, i)
            , b = G(e, l, n({}, y, {
                symbol: "",
                separatorPattern: p
            }));
        return "" === y.symbol ? (u ? "-" : "") + b + m : W(b + m, u, e, y)
    }
    function J(e, t = 1, n = F) {
        const { number: o, unit: r } = X(e, t, n);
        return `${o}${r}`
    }
    function z(e, t, o, r) {
        const i = _(e, r);
        return k(e, t, o && "object" == typeof o ? n({}, o, {
            symbol: ""
        }) : {
            maxPrecision: o,
            symbol: ""
        }, i)
    }
    function V(e, t) {
        const n = L(e, t);
        return {
            getCurrencyConfig: () => n.getCurrencyConfig(e),
            getCountryConfig: () => n.getCountryConfig(e, t),
            deflateServerNumber: t => U(t, e),
            parseServerNumber: t => Y(t, e),
            getCurrencySymbol: () => n.getCurrencySymbol(e),
            getCurrencySymbolPosition: () => H(e),
            getCurrencySpaceBetweenSymbol: () => v(e),
            getNotches: () => n.getNotches(e, t),
            formatServerNumber: (t, n) => x(U(t, e), n),
            formatCurrencyNumber: (t, n) => j(e, t, n),
            formatServerCurrencyNumber: (t, n) => j(e, U(t, e), n),
            formatCurrency: (t, n) => G(e, t, n),
            formatServerCurrency: (t, n) => G(e, U(t, e), n),
            compactServerNumber: (t, n, o) => J(U(t, e), n, o),
            localizeCompactNumber: (n, o) => z(e, n, o, t),
            localizeCompactServerNumber: (n, o) => z(e, U(n, e), o, t),
            compactCurrency: (n, o, r) => k(e, n, o, r, t),
            compactServerCurrency: (n, o, r) => k(e, U(n, e), o, r, t)
        }
    }
    return t
}
)()).then((t => {
    e.setModule("shopee_common__currency", t, {
        type: "module",
        version: "4.2.0",
        isSingleton: !1,
        originalPackageName: "@shopee_common/currency"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe.shopee.io/modules-federation/bundle/0/shopee_common__currency/4.2.0.js.map
