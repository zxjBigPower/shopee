(self.mfeModules = self.mfeModules || []).push(["shopee__domain", ["Platform"], e => () => Promise.resolve((() => {
    "use strict";
    var e = {
        d: (o, s) => {
            for (var m in s)
                e.o(s, m) && !e.o(o, m) && Object.defineProperty(o, m, {
                    enumerable: !0,
                    get: s[m]
                })
        }
        ,
        o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
        r: e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
    }
        , o = {};
    e.r(o),
        e.d(o, {
            admin: () => i,
            assets: () => n,
            cid: () => d,
            default: () => a,
            deprecatedCids: () => t,
            env: () => h,
            image: () => m,
            mall: () => c,
            video: () => p,
            walletCid: () => l
        });
    var s = globalThis && "__ASSETS__" in globalThis && globalThis.__ASSETS__.MMS_IMAGE_DOMAIN
        , m = {
            SG: (null == s ? void 0 : s.SG) || "down-sg.img.susercontent.com",
            TW: (null == s ? void 0 : s.TW) || "down-tw.img.susercontent.com",
            MY: (null == s ? void 0 : s.MY) || "down-my.img.susercontent.com",
            PH: (null == s ? void 0 : s.PH) || "down-ph.img.susercontent.com",
            TH: (null == s ? void 0 : s.TH) || "down-th.img.susercontent.com",
            ID: (null == s ? void 0 : s.ID) || "down-id.img.susercontent.com",
            VN: (null == s ? void 0 : s.VN) || "down-vn.img.susercontent.com",
            BR: (null == s ? void 0 : s.BR) || "down-br.img.susercontent.com",
            MX: (null == s ? void 0 : s.MX) || "down-mx.img.susercontent.com",
            CO: (null == s ? void 0 : s.CO) || "down-co.img.susercontent.com",
            CL: (null == s ? void 0 : s.CL) || "down-cl.img.susercontent.com",
            AR: (null == s ? void 0 : s.AR) || "down-ar.img.susercontent.com",
            FR: (null == s ? void 0 : s.FR) || "down-fr.img.susercontent.com",
            PL: (null == s ? void 0 : s.PL) || "down-pl.img.susercontent.com",
            ES: (null == s ? void 0 : s.ES) || "down-es.img.susercontent.com",
            IN: (null == s ? void 0 : s.IN) || "down-in.img.susercontent.com"
        }
        , n = {
            SG: "deo.shopeemobile.com/shopee",
            TW: "deo.shopeemobile.com/shopee",
            MY: "deo.shopeemobile.com/shopee",
            PH: "deo.shopeemobile.com/shopee",
            TH: "deo.shopeemobile.com/shopee",
            ID: "deo.shopeemobile.com/shopee",
            VN: "deo.shopeemobile.com/shopee",
            BR: "deo.shopeemobile.com/shopee",
            MX: "deo.shopeemobile.com/shopee",
            CO: "deo.shopeemobile.com/shopee",
            CL: "deo.shopeemobile.com/shopee",
            AR: "deo.shopeemobile.com/shopee",
            FR: "deo.shopeemobile.com/shopee",
            PL: "deo.shopeemobile.com/shopee",
            ES: "deo.shopeemobile.com/shopee",
            IN: "deo.shopeemobile.com/shopee"
        }
        , c = {
            SG: "shopee.sg",
            TW: "shopee.tw",
            MY: "shopee.com.my",
            PH: "shopee.ph",
            TH: "shopee.co.th",
            ID: "shopee.co.id",
            VN: "shopee.vn",
            BR: "shopee.com.br",
            MX: "shopee.com.mx",
            CO: "shopee.com.co",
            CL: "shopee.cl",
            AR: "shopee.com.ar",
            FR: "shopee.fr",
            PL: "shopee.pl",
            ES: "shopee.es",
            IN: "shopee.in"
        }
        , i = {
            SG: "admin.shopee.sg",
            TW: "admin.shopee.tw",
            MY: "admin.shopee.com.my",
            PH: "admin.shopee.ph",
            TH: "admin.shopee.co.th",
            ID: "admin.shopee.co.id",
            VN: "admin.shopee.vn",
            BR: "admin.shopee.com.br",
            MX: "admin.shopee.com.mx",
            CO: "admin.shopee.com.co",
            CL: "admin.shopee.cl",
            AR: "admin.shopee.com.ar",
            FR: "admin.shopee.fr",
            PL: "admin.shopee.pl",
            ES: "admin.shopee.es",
            IN: "admin.shopee.in"
        }
        , p = {
            SG: "cv.shopee.sg",
            TW: "cv.shopee.tw",
            MY: "cv.shopee.com.my",
            PH: "cv.shopee.ph",
            TH: "cv.shopee.co.th",
            ID: "cv.shopee.co.id",
            VN: "cv.shopee.vn",
            BR: "cv.shopee.com.br",
            MX: "cv.shopee.com.mx",
            CO: "cv.shopee.com.co",
            CL: "cv.shopee.cl",
            AR: "cv.shopee.com.ar",
            FR: "cv.shopee.fr",
            PL: "cv.shopee.pl",
            ES: "cv.shopee.es",
            IN: "cv.shopee.in"
        }
        , h = {
            test: "test.",
            stable: "test-stable.",
            staging: "staging.",
            liveish: "live-test.",
            live: "",
            uat: "uat."
        }
        , d = {
            SG: ".sg",
            TW: ".tw",
            MY: ".com.my",
            PH: ".ph",
            TH: ".co.th",
            ID: ".co.id",
            VN: ".vn",
            BR: ".com.br",
            MX: ".com.mx",
            CO: ".com.co",
            CL: ".cl",
            AR: ".com.ar",
            FR: ".fr",
            PL: ".pl",
            ES: ".es",
            IN: ".in"
        }
        , l = {
            PH: ".com.ph"
        }
        , t = ["IN", "ES", "AR", "FR", "PL"]
        , a = {
            image: m,
            assets: n,
            mall: c,
            admin: i,
            video: p,
            env: h,
            cid: d,
            walletCid: l,
            deprecatedCids: t
        };
    return o
}
)()).then((o => {
    e.setModule("shopee__domain", o, {
        type: "module",
        version: "3.1.5",
        isSingleton: !1,
        originalPackageName: "@shopee/domain"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe..shopee.io/modules-federation/bundle/0/shopee__domain/pc/3.1.5.js.map
