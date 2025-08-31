(self.mfeModules = self.mfeModules || []).push(["shopee__language", ["Platform"], e => () => Promise.resolve((() => {
    "use strict";
    var e, s, t = {}, n = {};
    function i(e) {
        var s = n[e];
        if (void 0 !== s)
            return s.exports;
        var a = n[e] = {
            exports: {}
        };
        return t[e](a, a.exports, i),
            a.exports
    }
    s = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
        i.t = function (t, n) {
            if (1 & n && (t = this(t)),
                8 & n)
                return t;
            if ("object" == typeof t && t) {
                if (4 & n && t.__esModule)
                    return t;
                if (16 & n && "function" == typeof t.then)
                    return t
            }
            var a = Object.create(null);
            i.r(a);
            var r = {};
            e = e || [null, s({}), s([]), s(s)];
            for (var o = 2 & n && t; "object" == typeof o && !~e.indexOf(o); o = s(o))
                Object.getOwnPropertyNames(o).forEach((e => r[e] = () => t[e]));
            return r.default = () => t,
                i.d(a, r),
                a
        }
        ,
        i.d = (e, s) => {
            for (var t in s)
                i.o(s, t) && !i.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: s[t]
                })
        }
        ,
        i.o = (e, s) => Object.prototype.hasOwnProperty.call(e, s),
        i.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ;
    var a = {};
    i.r(a),
        i.d(a, {
            COUNTRY_LANGUAGES: () => l,
            DEFAULT_LANGUAGE: () => o,
            LANGUAGES: () => r,
            STANDARD_TO_NON_STANDARD_MAPPING: () => d,
            __exports: () => g,
            convertToNonStandardLanguage: () => c,
            convertToStandardLanguage: () => u,
            isStandardLanguage: () => f
        });
    var r = {
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
        fil: "fil"
    }
        , o = r.en
        , l = {
            SG: {
                default: r.en,
                English: r.en,
                ChineseSimp: r["zh-Hans"],
                Malay: r.ms
            },
            ID: {
                default: r.id,
                Indonesian: r.id,
                English: r.en
            },
            MY: {
                default: r.ms,
                Malay: r.ms,
                ChineseSimp: r["zh-Hans"],
                English: r.en
            },
            PH: {
                default: r.en,
                English: r.en,
                ChineseSimp: r["zh-Hans"],
                Filipino: r.fil
            },
            TW: {
                default: r["zh-Hant"],
                ChineseTrad: r["zh-Hant"],
                ChineseSimp: r["zh-Hans"],
                English: r.en
            },
            TH: {
                default: r.th,
                Thai: r.th,
                English: r.en,
                Burmese: r.my
            },
            VN: {
                default: r.vi,
                Vietnamese: r.vi,
                English: r.en
            },
            BR: {
                default: r["pt-BR"],
                Portuguese: r["pt-BR"],
                English: r.en
            },
            MX: {
                default: r["es-MX"],
                English: r.en
            },
            CO: {
                default: r["es-CO"],
                English: r.en
            },
            CL: {
                default: r["es-CL"],
                English: r.en
            },
            AR: {
                default: r["es-AR"],
                English: r.en
            },
            FR: {
                default: r.fr,
                English: r.en
            },
            PL: {
                default: r.pl,
                English: r.en
            },
            ES: {
                default: r["es-ES"],
                English: r.en
            },
            IN: {
                default: r.en,
                Hindi: r.hi,
                English: r.en
            }
        }
        , d = {
            [r.en]: ["en", "sg", "en-SG", "en-my", "en-ph"],
            [r.id]: ["id", "id-ID"],
            [r.ms]: ["ms-my", "ms_my", "ms"],
            [r.my]: ["my"],
            [r["zh-Hans"]]: ["zhHans", "zh-CN", "zh-hans"],
            [r["zh-Hant"]]: ["zhHant", "zh-TW", "zh-hant"],
            [r.th]: ["th", "th-TH"],
            [r.vi]: ["vi", "vi-VN"],
            [r["pt-BR"]]: ["pt-BR", "pt_BR"],
            [r["es-MX"]]: ["es-MX"],
            [r["es-CO"]]: ["es-CO"],
            [r["es-CL"]]: ["es-CL"],
            [r["es-AR"]]: ["es-AR"],
            [r.fr]: ["fr"],
            [r.pl]: ["pl"],
            [r["es-ES"]]: ["es-ES"],
            [r.hi]: ["hi"],
            [r.fil]: ["fil"]
        }
        , p = (() => {
            const e = {};
            return Object.keys(d).forEach((s => {
                d[s].forEach((t => e[String(t).toLowerCase()] = s))
            }
            )),
                e
        }
        )()
        , h = new Set(Object.keys(r));
    function u(e) {
        const s = String(e).toLowerCase();
        return f(e) ? e : p[s] || o
    }
    function c(e) {
        const s = d[e];
        return Array.isArray(s) && s[0] || e
    }
    function f(e) {
        return h.has(e)
    }
    const m = JSON.parse('{"name":"@shopee/language","version":"3.4.0","license":"UNLICENSED","author":"Platform","contributors":["Kenrick <kenrick@sea.com>","Tan Li Hau <tanlh@sea.com>","Yee Chin Ang <yeechin.ang@shopee.com>"],"repository":{"type":"git","url":"https://git.garena.com/shopee/shopee_react_native.git","directory":"platform/public/common-utils/language"},"exports":{".":{"types":"./dist/index.d.ts","webpack":"./dist/index.mjs","module":"./dist/index.mjs","import":"./dist/index.mjs","require":"./dist/index.js","default":"./dist/index.mjs"},"./package.json":"./package.json"},"main":"dist/index.js","module":"dist/index.mjs","files":["dist/","src/","CHANGELOG.md"],"types":"dist/index.d.ts","devDependencies":{"@types/jest":"^29.5.12","@types/node":"~20","tsup":"^6.7.0","@shopee/bb8-babel":"^2.4.15","@shopee/bb8-lint":"^4.8.1","@shopee/bb8-test":"^6.0.9","@types/shopee-global":"^5.4.16","@shopee/bb8-typescript":"^4.5.0"},"keywords":["config"],"publishConfig":{"access":"public","registry":"https://npm.shopee.io/"},"scripts":{"_phase:build":"tsup src/index.ts --dts --external @shopee/platform --format esm,cjs --clean --onSuccess \\"mkdir -p lib/ && cp dist/index.js lib/\\" 1>&2","_phase:lint":"bb8-lint src --ext .js,.json,.jsx,.ts,.tsx","_phase:test":"bb8-test","_phase:typecheck":"bb8-tsc 1>&2","build":"tsup src/index.ts --dts --external @shopee/platform --format esm,cjs --clean --onSuccess \\"mkdir -p lib/ && cp dist/index.js lib/ && cp dist/index.d.ts lib/\\"","lint":"bb8-lint src --ext .js,.json,.jsx,.ts,.tsx","lint:diff":"bb8-lint --ext .js,.json,.jsx,.ts,.tsx --shopee-since-git-hash","test":"bb8-test","typecheck":"bb8-tsc"}}')
        , g = {
            "./package.json": i.t(m, 2)
        };
    return a
}
)()).then((s => {
    e.setModule("shopee__language", s, {
        type: "module",
        version: "3.4.0",
        isSingleton: !1,
        originalPackageName: "@shopee/language"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe.shopee.io/modules-federation/bundle/0/shopee__language/3.4.0.js.map
