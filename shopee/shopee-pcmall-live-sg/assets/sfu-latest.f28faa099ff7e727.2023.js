"use strict";
(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([[9211], {
    56658: (e, t, i) => {
        i.d(t, {
            DV: () => ez
        });
        var a, r, o, s, n, c, l, p, d, h, u, f, v, m, g, _, y, w, R, b, C, H = "device_sz_fingerprint", P = "sz-token", S = "af-ac-enc-sz-token", E = "x-sz-sdk-version", k = "d-nonptcha-sync", A = "/verify/traffic", x = "/verify/traffic/error", T = "/buyer/login", I = {
            onInit: () => { }
            ,
            onComplete: () => { }
            ,
            onFail: () => { }
            ,
            onTimeout: () => { }
        }, F = ((o = {})[(r = ed)(0)] = I,
            o[r(1)] = I,
            o.hookFUFetch = I,
            o.hookFUXhr = I,
            o), O = {
                test: "90a081b48a9c87345189bda87a989d23",
                uat: "5a733eaa4e1df48aa36fd9316f093107",
                staging: "d9dd212362d63e8ddb085bb5bce5259f",
                stable: "dc6fe70845cb784460ead6c7fd76bb91",
                live: "f9ffc83459897a13dd14c537e84b1753"
            }, U = ((a = {}).env = {
                test: "test.",
                stable: "test-stable.",
                staging: "staging.",
                liveish: "live-test.",
                live: "",
                uat: "uat."
            },
                a.cid = {
                    SG: "sg",
                    TW: "xiapi",
                    MY: "my",
                    PH: "ph",
                    TH: "th",
                    ID: "id",
                    VN: "vn",
                    BR: "br",
                    MX: "mx",
                    CO: "co",
                    CL: "cl",
                    PL: "pl",
                    AR: "xiapi",
                    ES: "xiapi",
                    FR: "xiapi",
                    IN: "xiapi"
                },
                a), D = ["/api/v2/item/get", "/api/v4/item/get", "/api/v4/pdp/get", "/api/v4/pdp/get_pc", "/api/v4/pdp/get_rw"], L = ["/api/v4/search/search_facet", "/api/v4/search/search_items", "/api/v4/search/search_page_common", "/api/v4/search/get_ymal_items", "/api/v4/search/search_filter_config", "/api/v4/search/search_mart_items", "/api/v4/search/search_user"], z = ["/api/v4/shop/get_shop_detail", "/api/v4/shop/get_categories", "/api/v4/shop/get_shop_tab", "/api/v4/shop/rcmd_items", "/api/v4/shop/get_shop_base", "/api/v4/shop/get_shop_seo", "/api/v4/shop/get_products_tab_data", "/api/v4/shop/get_membership_data", "/api/v4/shop/get_campaign_preview", "/api/v4/shop/get_top_products", "/api/v4/shop/get_shop_seller_show", "/api/v4/shop/get_shop_seller_info", "/api/v4/shop/is_show", "/api/v4/shop/get_shop_by_user", "/api/v4/shop/get_follow_prize_campaign", "/api/v4/shop/get_shop_base_preview", "/api/v4/shop/search_items", "/api/v4/shop/get_shop_core_info", "/api/v4/shop/get_popup_data", "/api/v4/shop/get_campaign_tab_data", "/api/v4/shop/block_user", "/api/v4/shop/get_scp_list", "/api/v4/shop/get_shop_tab_preview", "/api/v4/shop/unfollow", "/api/v4/shop/follow"], N = Object.freeze({
                    REQUEST_TIMEOUT: -99,
                    FE_SERVER_ERROR: -999,
                    SERVER_ERROR: 10005,
                    t: 0x562056f
                });
        function M() {
            return ["Np4EZfwGk8zANbm4v1mP", "Ih2LrfwGk8zANbm4v1mP", "ZsdEr1ZGQXfMZhGgQWf8IhzAn8zDZh2FNbEGrxzAQW2AvhfCrn", "ZsdEr1ZGQXfMZhGgQWf8IhzAmW2Ak1zyI1ZEIB", "ZsdEr1ZGQXfMZhGgQWf8IhzAzWzANprEk1f0Np2M", "Q1LUZpKXz1fEZxrUQXmWQxGMNbn", "kp40NvrAkbzXn12MrWGC", "r1z0z1zYmhz1NpwGmWGMr1zAQsdEICn"]
        }
        (n = s || (s = {}))[n.Captcha = 1] = "Captcha",
            n[n.ForceLogin = 2] = "ForceLogin",
            n[n.Redirect = 5] = "Redirect",
            n[n.FORCE_DOWNLOAD_APP = 8] = "FORCE_DOWNLOAD_APP",
            n[n.FORCE_BIND_PHONE = 9] = "FORCE_BIND_PHONE",
            n[n.VERIFY_PHONE = 10] = "VERIFY_PHONE",
            (l = c || (c = {}))[l.Block = 2] = "Block",
            l[l.Challenge = 3] = "Challenge",
            (d = p || (p = {}))[d.Level1 = 1] = "Level1",
            d[d.Level2 = 2] = "Level2",
            d[d.Level3 = 3] = "Level3",
            (u = h || (h = {})).External = "1",
            u.Internal = "2",
            (v = f || (f = {})).ShopeeInternal = "1",
            v.ShopeeApp = "2",
            (g = m || (m = {}))[g.AntiCrawler = 0] = "AntiCrawler",
            g[g.Dfp = 1] = "Dfp",
            (y = _ || (_ = {})).Request = "request",
            y.Success = "success",
            y.Timeout = "timeout",
            y.Failed = "failed",
            (R = w || (w = {}))[R.PC = 0] = "PC",
            R[R.RW = 1] = "RW",
            R[R.SHOPEELIVE = 2] = "SHOPEELIVE",
            R[R.BANK = 3] = "BANK",
            (C = b || (b = {})).FORCEAPP = "1",
            C.BINDPHONE = "2",
            C.VERIFYPHONE = "3";
        var B, q, j = !("undefined" == typeof window || !window.document || !window.document.createElement), W = /beeshop|shopee/i, V = /shopee.*app_type=2(\s|$)/i, G = /shopee-food-driver/i, X = /shopee-express-driver/i, Z = /shopeepay|airpay/i, Q = /mitra/i, Y = /seatalk/i, J = /shopee-toc-acc-sdk/i, K = /now/i, $ = /spinjam.*app_type=20(\s|$)/i;
        (q = B || (B = {}))[q.Shopee = 1] = "Shopee",
            q[q.ShopeeFoodDriver = 2] = "ShopeeFoodDriver",
            q[q.ShopeePartner = 3] = "ShopeePartner",
            q[q.ShopeeExpressDriver = 4] = "ShopeeExpressDriver",
            q[q.ShopeePay = 5] = "ShopeePay",
            q[q.Mitra = 6] = "Mitra",
            q[q.SeaTalk = 7] = "SeaTalk",
            q[q.ShopeeAccountSdk = 8] = "ShopeeAccountSdk",
            q[q.ShopeeFoodBuyer = 11] = "ShopeeFoodBuyer",
            q[q.SPinjam = 12] = "SPinjam";
        var ee = () => void 0 !== ((e = (() => {
            if (j)
                return window.navigator.userAgent
        }
        )()) => {
            if (void 0 !== e)
                return G.test(e) ? B.ShopeeFoodDriver : V.test(e) ? B.ShopeePartner : X.test(e) ? B.ShopeeExpressDriver : Q.test(e) ? B.Mitra : Y.test(e) ? B.SeaTalk : J.test(e) ? B.ShopeeAccountSdk : K.test(e) ? B.ShopeeFoodBuyer : Z.test(e) ? B.ShopeePay : W.test(e) ? B.Shopee : $.test(e) ? B.SPinjam : void 0
        }
        )();
        function et(e, t) {
            var i = function (e, t = !1) {
                if (!e)
                    return "";
                var i = Object.keys(e).filter(t => null != e[t]);
                return i.length ? (t ? "" : "?") + i.sort().map(function (t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&") : ""
            }(t);
            if (!i.substring(1))
                return e;
            var [a, r] = e.split("#");
            return a = a.indexOf("?") > -1 ? a + "&" + i.substring(1) : "" + a + i,
                r ? a + "#" + r : a
        }
        var ei = [/^(seller\.)((xiapi|sg|th|vn|id|ph|br|my|tw|mx|co|cl|in|ar|pl|fr|es)\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.cn$/, /^(banhang\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.vn$/, /^(seller\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.(co\.(id|th)|com\.(ar|br|co|mx|my)|cl|es|fr|in|ph|pl|sg|tw)$/];
        function ea(e) {
            if (!e)
                return !1;
            try {
                var { hostname: t } = new URL(e);
                return ei.some(e => e.test(t))
            } catch {
                return !1
            }
        }
        function er() {
            return self.__ENV__
        }
        function eo() {
            return self.__LOCALE__
        }
        var es, en = ((es = {}).malls = {
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
        },
            es.envs = {
                test: "test.",
                stable: "test-stable.",
                staging: "staging.",
                liveish: "live-test.",
                live: "",
                uat: "uat."
            },
            es);
        function ec(e) {
            var { env: t, locale: i } = e;
            return "https://" + en.envs[t] + en.malls[i]
        }
        var el = /web_sdk_host=snack/i;
        function ep({ isRelative: e, host: t, path: i, params: a }) {
            return et("" + (e ? "" : t) + i, a)
        }
        function ed(e, t) {
            var i = M();
            return M.Al || (M.Al = []),
                (ed = function (t, a) {
                    t -= 0;
                    var r = M.Al[t];
                    return r || (void 0 === ed.AG && (ed.AV = function (e) {
                        for (var t, i, a = "", r = "", o = 0, s = 0; i = e.charAt(s++); ~i && (t = o % 4 ? 64 * t + i : i,
                            o++ % 4) && (a += String.fromCharCode(255 & t >> (-2 * o & 6))))
                            i = "ojegxfhsudqiywtcnmalvzpbkrNIQZROBLYSXGWCTEHPJFMUVKAD0318647952+/=".indexOf(i);
                        for (var n = 0, c = a.length; n < c; n++)
                            r += "%" + ("00" + a.charCodeAt(n).toString(16)).slice(-2);
                        return decodeURIComponent(r)
                    }
                        ,
                        e = arguments,
                        ed.AG = !0),
                        r = ed.AV(i[t]),
                        M.Al[t] = r),
                        r
                }
                )(e, t)
        }
        function eh({ history: e, redirectType: t, shouldReplaceHistory: i, absoluteRedirectPath: a, relativeRedirectPath: r }) {
            var o, s;
            t !== h.External && e ? i ? e.replace(r) : ee() ? window?.WebViewJavascriptBridge?.callHandler("navigate", ((o = {}).url = a,
                o.popSelf = 0,
                o.navbar = {},
                o)) : e.push(r) : i ? location.replace(a) : ee() ? window?.WebViewJavascriptBridge?.callHandler("navigate", ((s = {}).url = a,
                    s.popSelf = 0,
                    s.navbar = {},
                    s)) : location.href = a
        }
        function eu({ history: e, next: t, appKey: i, scene: a = "crawler_item", shouldReplaceHistory: r = !0, clientId: o, redirectType: s = h.External, verificationPageHost: n = location.origin, antiBotTrackingId: c, setRedirecting: l }) {
            s !== h.External && e || l && l();
            var p, d, u, f = {
                is_initial: !0,
                app_key: i,
                scene: a,
                client_id: o,
                redirect_type: s,
                next: t,
                should_replace_history: r,
                anti_bot_tracking_id: c,
                ...t.includes("__mobile__") || ee() ? {
                    __mobile__: 1
                } : {}
            };
            eh(((u = {}).history = e,
                u.redirectType = s,
                u.shouldReplaceHistory = r,
                u.absoluteRedirectPath = ep(((d = {
                    isRelative: !1
                }).host = n,
                    d.path = A,
                    d.params = f,
                    d)),
                u.relativeRedirectPath = ep(((p = {
                    isRelative: !0
                }).host = n,
                    p.path = A,
                    p.params = f,
                    p)),
                u))
        }
        function ef({ history: e, trackingId: t, shouldReplaceHistory: i = !0, redirectType: a = h.External, verificationPageHost: r = location.origin, homeUrl: o, isLoggedIn: s = !0, error_type: n }) {
            var c, l, p, d, u, f, v = {
                tracking_id: t,
                is_logged_in: s,
                home_url: o || location.origin,
                ...n ? ((p = {}).type = n,
                    p) : {},
                ...n === b.BINDPHONE || n === b.VERIFYPHONE ? ((l = {}).next = location.href,
                    l) : {},
                ...location.origin.includes("xiapibuy") ? ((c = {}).origin = location.origin,
                    c) : {},
                ...ee() ? {
                    __mobile__: 1
                } : {}
            };
            eh(((f = {}).history = e,
                f.redirectType = a,
                f.shouldReplaceHistory = i,
                f.absoluteRedirectPath = ep(((u = {
                    isRelative: !1
                }).host = r,
                    u.path = x,
                    u.params = v,
                    u)),
                f.relativeRedirectPath = ep(((d = {
                    isRelative: !0
                }).host = r,
                    d.path = x,
                    d.params = v,
                    d)),
                f))
        }
        function ev({ history: e, next: t, redirectType: i = h.External, shouldReplaceHistory: a = !0, verificationPageHost: r = location.origin, isFromGoogleAdsPDP: o, trackingId: s }) {
            var n, c = {
                next: t,
                ...t.includes("__mobile__") || ee() ? {
                    __mobile__: 1
                } : {},
                ...o ? ((n = {}).is_from_fu = (new Date).getTime(),
                    n) : {},
                fu_tracking_id: s
            };
            if (function () {
                if (j) {
                    var e = window.navigator.userAgent;
                    if (el.test(e))
                        return !0
                }
                return !1
            }())
                window.SHPLSBridge && (async () => {
                    await window.SHPLSBridge.checkLogin() || (await window.SHPLSBridge.login(),
                        window.location.reload())
                }
                )();
            else if (ee())
                window?.WebViewJavascriptBridge?.callHandler("login", ((p = {}).redirectPath = et("main", ((l = {}).apprl = t,
                    l)),
                    p.redirectTab = 1,
                    p), e => {
                        0 === e?.error && location.replace(t)
                    }
                );
            else if (location.origin.includes("xiapibuy")) {
                var l, p, d, u, f, v, m, g, _, y, w = window.location.origin + "/api/seller_platform/nonce/callback/", R = window.btoa(JSON.stringify(((m = {}).next = window.location.href,
                    m))), b = er();
                eh(((v = {}).history = e,
                    v.redirectType = h.External,
                    v.shouldReplaceHistory = a,
                    v.absoluteRedirectPath = ep(((f = {
                        isRelative: !1
                    }).host = "https://account.seller." + (U.env[b] || "") + "shopee.com",
                        f.path = "/signin/oauth/identifier",
                        (u = {
                            account_type: 2
                        }).client_id = O[b] || O.live,
                        u.require_passwd = !0,
                        u.login_types = "[1,2,3,4,5]",
                        u.redirect_uri = w,
                        u.region = eo(),
                        u.response_type = "tob_nonce",
                        u.scope = "profile",
                        u.state = R,
                        f.params = u,
                        f)),
                    v.relativeRedirectPath = ep(((d = {
                        isRelative: !0
                    }).host = r,
                        d.path = T,
                        d.params = c,
                        d)),
                    v))
            } else
                eh(((y = {}).history = e,
                    y.redirectType = i,
                    y.shouldReplaceHistory = a,
                    y.absoluteRedirectPath = ep(((_ = {
                        isRelative: !1
                    }).host = r,
                        _.path = T,
                        _.params = c,
                        _)),
                    y.relativeRedirectPath = ep(((g = {
                        isRelative: !0
                    }).host = r,
                        g.path = T,
                        g.params = c,
                        g)),
                    y))
        }
        function em(e, t) {
            return new Promise((i, a) => {
                setTimeout(() => {
                    try {
                        i(t())
                    } catch (e) {
                        a(e)
                    }
                }
                    , e)
            }
            )
        }
        var eg = "1.12.22-1"
            , e_ = e => {
                var t, i;
                ea(window.location.href) || window?.Sentry?.captureException(e, ((i = {}).tags = ((t = {
                    sentryProjectSlug: "shopee-secure-fetch-utils"
                }).sfuVersion = "" + eg,
                    t),
                    i))
            }
            ;
        function ey({ antiCrawlerConfig: e, response: t, pathname: i, platform: a, source: r, setRedirecting: o, getRedirecting: n, triggerAntiCrawlerCustomizedErrorPage: l, triggerAntiCrawlerForceLogin: p, triggerAntiCrawlerVerification: d, enablePopup: u }) {
            if (t && e && (t[3] ? (F = (T = t)[4],
                O = T[0],
                D = T[1],
                M = T[2],
                z = T[3],
                I = T[6],
                L = I?.[0],
                B = I?.[1]) : (F = (T = t).challenge_type,
                    O = T.action_type,
                    D = T.tracking_id,
                    M = T.is_login,
                    z = T.error,
                    L = T.captcha_extra_info?.tracking_id,
                    B = T.captcha?.business),
                !(z !== N.t || location.href.includes("/verify/traffic") || location.href.includes("/verify/captcha"))) && !(n && o && n())) {
                if (O === c.Block) {
                    var f, v, m, g, _, y, R, C, H, P, S, E, k, x, T, I, F, O, D, L, z, M, B, q = a === w.SHOPEELIVE ? location.origin + "/pc/setup" : e.homeUrl;
                    return void l(((x = {}).trackingId = D || "",
                        x.shouldReplaceHistory = e.shouldReplaceHistory,
                        x.redirectType = e.redirectType,
                        x.isLoggedIn = M,
                        x.verificationPageHost = e.verificationPageHost,
                        x.homeUrl = q,
                        x))
                }
                if (F === s.Captcha) {
                    var W = a == w.PC || a == w.RW ? (B || "TSS") + "." + w[a] : r ? (B || "TSS") + "." + r : e.appKey;
                    if (!W)
                        return;
                    return void (u && e.usePopupCaptcha ? (({ appKey: e, scene: t = "crawler_item", clientId: i, shouldReplaceHistory: a, antiBotTrackingId: r, verificationPageHost: o }) => {
                        if (j && !document.querySelector("#sfu-captcha-modal")) {
                            var s, n, c = document.createElement("div");
                            c.setAttribute("id", "sfu-captcha-modal"),
                                c.classList.add("sfu-captcha-modal"),
                                c.classList.add("open");
                            var l = document.createElement("div");
                            l.classList.add("sfu-captcha-modal-body"),
                                c.appendChild(l);
                            var p = document.createElement("iframe")
                                , d = ((n = {
                                    is_initial: !0
                                }).app_key = e,
                                    n.scene = t,
                                    n.client_id = i,
                                    n.redirect_type = h.Internal,
                                    n.use_popup = !0,
                                    n.should_replace_history = a,
                                    n.anti_bot_tracking_id = r,
                                    n.__mobile__ = "1",
                                    n)
                                , u = ep(((s = {
                                    isRelative: !1
                                }).host = o || window.location.protocol + "//" + window.location.host,
                                    s.path = A,
                                    s.params = d,
                                    s));
                            p.setAttribute("src", u),
                                p.setAttribute("name", "sfu-captcha-modal-iframe"),
                                p.style.width = "100%",
                                p.style.height = "100%",
                                l.appendChild(p),
                                document.body.appendChild(c),
                                document.body.classList.add("sfu-captcha-modal-open");
                            var f = document.createElement("script");
                            f.setAttribute("type", "text/javascript");
                            var v = document.createTextNode(`
    function closeSFUCaptchaModal() {
        var sfuCaptchaModal = document.querySelector('#sfu-captcha-modal');
        if(sfuCaptchaModal){
          sfuCaptchaModal.remove();
        }
        document.body.classList.remove('sfu-captcha-modal-open');
    }
    `);
                            f.appendChild(v);
                            var m = document.createElement("style");
                            m.setAttribute("type", "text/css");
                            var g = document.createTextNode(`
    .sfu-captcha-modal {
        display: none;
        position: fixed; 
        inset: 0;
        background-color: rgba(0, 0, 0, .75);
        z-index: 100000;
        overflow: auto;
    }
    .sfu-captcha-modal.open {
        display: flex;
    }
    .sfu-captcha-modal-body {
        width: 80vw;
        max-width: 500px;
        min-width:  400px;
        height: 550px;
        margin: auto; 
        background: #fff;
    }
    .sfu-captcha-modal iframe {
      box-sizing: border-box;
    }
    body.sfu-captcha-modal-open {
        overflow: hidden;
    }`);
                            return m.appendChild(g),
                                document.getElementsByTagName("head")[0].appendChild(m),
                                document.getElementsByTagName("head")[0].appendChild(f)
                        }
                    }
                    )(((k = {}).clientId = e.captchaClientId || "",
                        k.next = e.next || location.href,
                        k.appKey = W,
                        k.scene = "crawler_item",
                        k.redirectType = e.redirectType,
                        k.shouldReplaceHistory = e.shouldReplaceHistory,
                        k.verificationPageHost = e.verificationPageHost,
                        k.antiBotTrackingId = L,
                        k)) : d(((E = {}).clientId = e.captchaClientId || "",
                            E.next = e.next || location.href,
                            E.appKey = W,
                            E.scene = "crawler_item",
                            E.redirectType = e.redirectType,
                            E.shouldReplaceHistory = e.shouldReplaceHistory,
                            E.verificationPageHost = e.verificationPageHost,
                            E.antiBotTrackingId = L,
                            E.setRedirecting = o,
                            E)))
                }
                if (F === s.Redirect) {
                    var V = er()
                        , G = eo();
                    if (V && G) {
                        var X = "https://" + (U.cid[G] || "xiapi") + "." + (U.env[V] || "") + "xiapibuy.com";
                        location.replace(X)
                    }
                    return
                }
                if (F === s.ForceLogin) {
                    if (location.href.includes("/buyer/login") || location.href.includes("/buyer/authenticate"))
                        return;
                    var Z = location.pathname.startsWith("/product") && location.href.includes("gads_t_sig");
                    Z && (a === w.PC || a === w.RW) && (window.BITrack ? window.BITrack(((S = {}).data = ((P = {
                        type: "v3"
                    }).timestamp = (new Date).getTime(),
                        (H = {
                            operation: "action_sfu_handle"
                        }).data = ((C = {
                            code: 1
                        }).scenario = JSON.stringify(((R = {}).response = t,
                            R.pathname = i,
                            R)),
                            C),
                        P.info = H,
                        P),
                        S)) : ea(window.location.href) || window?.Sentry?.captureMessage("BITrack is not defined", ((y = {}).tags = ((_ = {
                            sentryProjectSlug: "shopee-secure-fetch-utils"
                        }).sfuVersion = "" + eg,
                            _),
                            y))),
                        p(((g = {}).next = e.next || location.href,
                            g.redirectType = e.redirectType,
                            g.shouldReplaceHistory = e.shouldReplaceHistory,
                            g.verificationPageHost = e.verificationPageHost,
                            g.isFromGoogleAdsPDP = Z,
                            g.trackingId = D || "",
                            g))
                }
                if (F === s.FORCE_DOWNLOAD_APP)
                    return void l(((m = {}).trackingId = D || "",
                        m.shouldReplaceHistory = e.shouldReplaceHistory,
                        m.redirectType = e.redirectType,
                        m.verificationPageHost = e.verificationPageHost,
                        m.error_type = b.FORCEAPP,
                        m));
                if (F === s.FORCE_BIND_PHONE)
                    return void l(((v = {}).trackingId = D || "",
                        v.shouldReplaceHistory = e.shouldReplaceHistory,
                        v.redirectType = e.redirectType,
                        v.verificationPageHost = e.verificationPageHost,
                        v.error_type = b.BINDPHONE,
                        v));
                if (F === s.VERIFY_PHONE)
                    return void l(((f = {}).trackingId = D || "",
                        f.shouldReplaceHistory = e.shouldReplaceHistory,
                        f.redirectType = e.redirectType,
                        f.verificationPageHost = e.verificationPageHost,
                        f.error_type = b.VERIFYPHONE,
                        f))
            }
        }
        var ew = (e, t, i, a) => {
            if (!e.allowCors && !i || a && e.limitMethods && !e.limitMethods.some(e => e.toLowerCase() === a.toLowerCase()))
                return !1;
            switch (e.match) {
                case "contain":
                    if (t.includes(e.policyurl))
                        return !e.exclude || !e.exclude.some(e => t.includes(e));
                    break;
                case "regexp":
                    if (e.policyurl.test(t))
                        return !e.exclude || !e.exclude.some(e => t.includes(e));
                    break;
                case "full":
                    if (e.policyurl === t)
                        return !0
            }
            return !1
        }
            , eR = (e, t, i, a) => {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (ew(o, t, i, a))
                        return o
                }
            }
            ;
        class eb {
            items;
            maxSize;
            constructor(e = 20) {
                this.items = [],
                    this.maxSize = e
            }
            enqueue(e) {
                this.size() >= this.maxSize && (this.dequeue(),
                    e instanceof eP && this.items[0].civid),
                    this.items.push(e)
            }
            dequeue() {
                return this.isEmpty() ? "Underflow" : this.items.shift()
            }
            isEmpty() {
                return 0 === this.items.length
            }
            size() {
                return this.items.length
            }
            getItems() {
                return this.items
            }
        }
        class eC {
            key;
            timestamp;
            constructor(e, t) {
                this.key = e,
                    this.timestamp = t
            }
            serialize() {
                var e = new ArrayBuffer(6)
                    , t = new DataView(e);
                return t.setUint16(0, this.key),
                    t.setUint32(2, this.timestamp),
                    e
            }
        }
        class eH {
            x;
            y;
            timestamp;
            constructor(e, t, i) {
                this.x = e,
                    this.y = t,
                    this.timestamp = i
            }
            serialize() {
                var e = new ArrayBuffer(8)
                    , t = new DataView(e);
                return t.setUint16(0, this.x),
                    t.setUint16(2, this.y),
                    t.setUint32(4, this.timestamp),
                    e
            }
        }
        class eP {
            operation;
            timestamp;
            civid;
            page_type;
            page_section;
            target_type;
            last_civ_id;
            itemidl;
            itemidr;
            shopidl;
            shopidr;
            constructor(e, t, i, a, r, o, s, n, c, l, p) {
                this.operation = e,
                    this.timestamp = t,
                    this.civid = i,
                    this.page_type = a,
                    this.page_section = r,
                    this.target_type = o,
                    this.last_civ_id = s,
                    this.itemidl = n,
                    this.itemidr = c,
                    this.shopidl = l,
                    this.shopidr = p
            }
            serialize(e) {
                var t = new ArrayBuffer(34)
                    , i = new DataView(t);
                i.setUint8(0, this.operation),
                    i.setUint32(1, this.timestamp),
                    i.setUint8(5, e.indexOf(this.civid));
                for (var a = 0; a < this.page_type.length; a++)
                    i.setUint8(6 + a, this.page_type.charCodeAt(a));
                for (a = 0; a < this.page_section.length; a++)
                    i.setUint8(11 + a, this.page_section.charCodeAt(a));
                return i.setUint8(16, this.target_type),
                    i.setUint8(17, e.indexOf(this.last_civ_id)),
                    i.setUint32(18, this.itemidl),
                    i.setUint32(22, this.itemidr),
                    i.setUint32(26, this.shopidl),
                    i.setUint32(30, this.shopidr),
                    t
            }
        }
        class eS {
            basetimestampl;
            basetimestampr;
            cividmaplen;
            eventlen;
            oribitlen;
            cividmap;
            currentTimeOffset;
            nonce;
            constructor(e, t, i, a, r, o, s, n) {
                this.basetimestampl = e,
                    this.basetimestampr = t,
                    this.cividmaplen = i,
                    this.eventlen = a,
                    this.oribitlen = r,
                    this.cividmap = o,
                    this.currentTimeOffset = s,
                    this.nonce = n
            }
            serialize() {
                var e = this.cividmap.length
                    , t = new ArrayBuffer(23 + e)
                    , i = new DataView(t);
                i.setUint32(0, this.basetimestampl),
                    i.setUint32(4, this.basetimestampr),
                    i.setUint8(8, this.cividmaplen),
                    i.setUint8(9, this.eventlen),
                    i.setUint8(10, this.oribitlen);
                for (var a = 0; a < e; a++)
                    i.setUint8(11 + a, this.cividmap.charCodeAt(a));
                for (i.setUint32(11 + e, this.currentTimeOffset),
                    a = 0; a < 8; a++)
                    i.setUint8(15 + e + a, this.nonce[a]);
                return t
            }
        }
        var eE = new eb(20)
            , ek = new eb(21)
            , eA = new eb(5)
            , ex = new eb(5)
            , eT = {
                view: 1,
                auto_view: 2,
                click: 3,
                impression: 4,
                other: 5
            }
            , eI = {
                item: 1,
                shop: 2,
                voucher: 3,
                banner: 4,
                category: 5,
                skinny_banner: 6,
                cluster: 7,
                tab: 8,
                other: 9
            };
        function eF() {
            try {
                var e = void 0 !== performance.timeOrigin ? performance.timeOrigin : performance.timing.navigationStart
                    , t = Math.floor(performance.now());
                e < 1e10 && (e *= 1e3);
                var i = Math.floor(e / 1e9)
                    , a = Math.floor(e % 1e9)
                    , r = [];
                eE.getItems().map(e => {
                    r.includes(e.civid) || "" === e.civid || r.push(e.civid),
                        r.includes(e.last_civ_id) || "" === e.last_civ_id || r.push(e.last_civ_id)
                }
                ),
                    eA.getItems().map(e => {
                        r.includes(e.civid) || "" === e.civid || r.push(e.civid),
                            r.includes(e.last_civ_id) || "" === e.last_civ_id || r.push(e.last_civ_id)
                    }
                    );
                var o = function (e = 8) {
                    for (var t = new Uint8Array(e), i = 0; i < e; i++)
                        t[i] = Math.floor(256 * Math.random());
                    return t
                }()
                    , s = new eS(i, a, r.length, eE.size() + eA.size(), ek.size(), r.join(""), t, o)
                    , n = 23 + s.cividmap.length + 34 * (eE.size() + eA.size()) + 8 * ek.size() + 6 * ex.size()
                    , c = new ArrayBuffer(n)
                    , l = new Uint8Array(c);
                l.set(new Uint8Array(s.serialize()), 0);
                var p = 23 + s.cividmap.length;
                eE.getItems().map(e => {
                    e?.serialize && (l.set(new Uint8Array(e.serialize(r)), p),
                        p += 34)
                }
                ),
                    eA.getItems().map(e => {
                        e?.serialize && (l.set(new Uint8Array(e.serialize(r)), p),
                            p += 34)
                    }
                    ),
                    ek.getItems().map(e => {
                        e?.serialize && (l.set(new Uint8Array(e.serialize()), p),
                            p += 8)
                    }
                    ),
                    ex.getItems().map(e => {
                        e?.serialize && (l.set(new Uint8Array(e.serialize()), p),
                            p += 6)
                    }
                    );
                for (var d = btoa(String.fromCharCode.apply(null, Array.from(l))), h = "", u = 1, f = 0; f < d.length; f++)
                    d[f] === d[f + 1] ? u++ : (h += u >= 5 ? "A|" + u + "|" : d[f].repeat(u),
                        u = 1);
                return h
            } catch (e) {
                return e_(e),
                    "error"
            }
        }
        var eO, eU, eD = ((eU = {})["/webapi/v1/shop_page/replay/add"] = {
            shouldReplaceHistory: "false"
        },
            eU["/webapi/v1/host_config/permission"] = {
                shouldReplaceHistory: "false"
            },
            eU["/webapi/v1/item/my_shop"] = {
                shouldReplaceHistory: "false"
            },
            eU["/webapi/v1/item/my_likes"] = {
                shouldReplaceHistory: "false"
            },
            eU["/webapi/v1/item/my_recent"] = {
                shouldReplaceHistory: "false"
            },
            eU["/webapi/v1/item/parse_url"] = {
                shouldReplaceHistory: "false"
            },
            eU), eL = ((eO = {})["/api/v4/microsite/get_items"] = {
                shouldReplaceHistory: "false"
            },
                eO["/api/v4/market_coin/get_product_feeds"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v2/add_on_deal/info"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v2/add_on_deal/get_main_item_info"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v2/add_on_deal/get_add_on_deal_list"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v2/add_on_deal/get_sub_item_info"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/flash_sale/flash_sale_get_items"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/flash_sale/spm/get_all_itemids"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/pdp/other_quantities/get"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/product/get_shop_info"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/search/search_prefills"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/search/search_hint"] = {
                    shouldReplaceHistory: "false"
                },
                eO["/api/v4/search/trending_search"] = {
                    shouldReplaceHistory: "false"
                },
                eO);
        function ez({ locale: e, env: t, platform: a, source: r, enableGlobalHook: o, enableTMS: s, baseUrl: n = "", shouldAppendHost: c, allowShortDfp: l = !0, headers: p, enablePopup: d = !1, handleMaintenanceModeResponse: u, policies: f, performanceTrackings: v = F, onError: g = () => { }
            , onJsonResponse: _ = () => { }
        }) {
            var y, R, b, C, A = (R = {},
                a == w.PC || a == w.RW ? R = eL : a === w.SHOPEELIVE && (R = eD),
                R), x = function ({ locale: e, env: t, platform: a, source: r, ACConfig: o, performanceTrackings: s = F, enableGlobalHook: n, enableTMS: c, enablePopup: l, policies: p, onError: d = () => { }
                }) {
                    var u, f = null, v = null, g = null, _ = null, y = null, R = null, b = !1;
                    function C() {
                        b = !0
                    }
                    function A() {
                        return b
                    }
                    function x(e) {
                        (a === w.PC || a === w.RW) && e_(e)
                    }
                    async function T({ history: r, onFail: o = () => { }
                    }) {
                        var n, c, l, p, d = ed;
                        if (a !== w.BANK && (r && (R = r),
                            null == v && null == g && j))
                            try {
                                s[d(0)].onInit(),
                                    s[d(1)].onInit(),
                                    v = (async () => i.e(6476).then(i.bind(i, 92497)))(),
                                    f = await v,
                                    s[d(1)].onComplete(),
                                    (e || t) && (f.default ? f.default.setSdkConfig({
                                        ...e ? ((p = {}).region = e,
                                            p) : {},
                                        ...t ? ((l = {}).env = t,
                                            l) : {}
                                    }) : f.setSdkConfig({
                                        ...e ? ((c = {}).region = e,
                                            c) : {},
                                        ...t ? ((n = {}).env = t,
                                            n) : {}
                                    })),
                                    g = f.default ? f.default.initSdk(m.Dfp) : f.initSdk(m.Dfp),
                                    _ = em(5e3, () => ({
                                        timeout: !0
                                    })),
                                    y = em(1e3, () => ({
                                        timeout: !0
                                    })),
                                    s[d(0)].onComplete()
                            } catch (e) {
                                x(e),
                                    s[d(0)].onFail?.(),
                                    o()
                            }
                    }
                    function I() {
                        var e, t = function (e) {
                            for (var t = "", i = 0; i < e.length; i++)
                                t += e[i].toString(16).padStart(2, "0");
                            return t
                        }(function () {
                            for (var e = new Uint8Array(8), t = 0; t < 8; t++)
                                e[t] = Math.floor(256 * Math.random());
                            return e
                        }());
                        return (e = {})["af-ac-enc-dat"] = t,
                            e
                    }
                    async function O({ shouldWaitForDfpInit: e = !1 } = {}) {
                        try {
                            return await v,
                                await Promise.race([g, e ? _ : y]),
                                f.default ? f.default.getClientCheckData() : f.getClientCheckData()
                        } catch (e) {
                            return x(e),
                                d(e),
                                ""
                        }
                    }
                    async function U({ shouldWaitForDfpInit: e = !1, useHeader: t, customDfp: i }) {
                        var a, r, o;
                        try {
                            await v,
                                await Promise.race([g, e ? _ : y]);
                            var s = "string" == typeof i ? i : await O(((o = {})[ed(5)] = e,
                                o));
                            return t ? s.length >= 300 ? {} : ((r = {})[P] = s,
                                r) : ((a = {})[H] = s,
                                    a)
                        } catch (e) {
                            return x(e),
                                d(e),
                                {}
                        }
                    }
                    function N() {
                        return "" + eg
                    }
                    async function M() {
                        try {
                            await v;
                            var e = f.default ? f.default.getDegradedData() : f.getDegradedData();
                            return e && "string" == typeof e ? [...e].some(e => e.charCodeAt(0) > 127) ? "" : e : ""
                        } catch {
                            return ""
                        }
                    }
                    async function B() {
                        try {
                            await v;
                            var e = f.default ? await f.default.getLongToken() : await f.getLongToken();
                            return e && "string" == typeof e ? e : ""
                        } catch (e) {
                            return x(e),
                                ""
                        }
                    }
                    return (() => {
                        if (j && n && !window.__fu_hook) {
                            window.__fu_hook = !0,
                                c && function () {
                                    try {
                                        document.addEventListener("keydown", function (e) {
                                            try {
                                                var t, i = performance.now();
                                                if (void 0 !== e.key && null !== e.key)
                                                    1 == e.key.length ? t = new eC(e.key.charCodeAt(0), i) : e.key.length > 1 && (t = new eC(e.key.charCodeAt(0) << 8 | e.key.charCodeAt(e.key.length - 1), i)),
                                                        ex.enqueue(t);
                                                else if (void 0 !== e.keyCode) {
                                                    var a = new eC(e.keyCode, i);
                                                    ex.enqueue(a)
                                                }
                                            } catch (e) {
                                                return e_(e),
                                                    "error"
                                            }
                                        }),
                                            navigator.maxTouchPoints > 0 ? (document.addEventListener("touchmove", function (e) {
                                                try {
                                                    if (void 0 !== e.touches && null !== e.touches) {
                                                        var t = void 0;
                                                        if (e.touches.length > 0 ? t = e.touches : e.changedTouches.length > 0 && (t = e.changedTouches),
                                                            void 0 !== t) {
                                                            var i = performance.now()
                                                                , a = new eH(t[0].clientX + 1e4, t[0].clientY, i);
                                                            ek.enqueue(a)
                                                        }
                                                    }
                                                } catch (e) {
                                                    return e_(e),
                                                        "error"
                                                }
                                            }),
                                                document.addEventListener("touchend", function (e) {
                                                    try {
                                                        if (void 0 !== e.touches && null !== e.touches) {
                                                            var t = void 0;
                                                            if (e.touches.length > 0 ? t = e.touches : e.changedTouches.length > 0 && (t = e.changedTouches),
                                                                void 0 !== t) {
                                                                var i = performance.now()
                                                                    , a = new eH(t[0].clientX + 1e4, t[0].clientY, i);
                                                                ek.enqueue(a)
                                                            }
                                                        }
                                                    } catch (e) {
                                                        return e_(e),
                                                            "error"
                                                    }
                                                })) : (document.addEventListener("mousemove", function (e) {
                                                    try {
                                                        var t = performance.now()
                                                            , i = new eH(e.clientX, e.clientY, t);
                                                        ek.enqueue(i)
                                                    } catch (e) {
                                                        return e_(e),
                                                            "error"
                                                    }
                                                }),
                                                    document.addEventListener("click", function (e) {
                                                        try {
                                                            var t = performance.now()
                                                                , i = new eH(e.clientX + 1e4, e.clientY, t);
                                                            ek.enqueue(i)
                                                        } catch (e) {
                                                            return e_(e),
                                                                "error"
                                                        }
                                                    }))
                                    } catch (e) {
                                        e_(e)
                                    }
                                    if ("function" == typeof window.IDBObjectStore) {
                                        var e = IDBObjectStore.prototype.add;
                                        try {
                                            IDBObjectStore.prototype.add = function (t, i) {
                                                try {
                                                    if ("object" == typeof t && null !== t && null !== t.data && void 0 !== t.data) {
                                                        var a = JSON.parse(t.data);
                                                        if (null !== a.operation && void 0 !== a.operation) {
                                                            var r = -1 !== eT[a.operation] ? eT[a.operation] : 0
                                                                , o = a.event_timestamp - (void 0 !== performance.timeOrigin ? performance.timeOrigin : performance.timing.navigationStart)
                                                                , s = a.civ_id.replace(/-/g, "")
                                                                , n = a.page_type.slice(0, 5)
                                                                , c = a.page_section.slice(0, 5)
                                                                , l = 0;
                                                            "" != a.target_type && null !== a.target_type && (l = eI[a.target_type] ? eI[a.target_type] : 9);
                                                            var p = "";
                                                            null !== a.last_civ_id && void 0 !== a.last_civ_id && (p = a.last_civ_id.replace(/-/g, ""));
                                                            var d = 0
                                                                , h = 0;
                                                            if (null !== a.data && void 0 !== a.data) {
                                                                var u = a.data;
                                                                if (null !== u.viewed_objects && void 0 !== u.viewed_objects && u.viewed_objects.length > 0) {
                                                                    var f = u.viewed_objects[0];
                                                                    null != f && (null !== f.ctx_itemid && void 0 !== f.ctx_itemid && (d = f.ctx_itemid),
                                                                        null !== f.itemid && void 0 !== f.itemid && (d = f.itemid),
                                                                        null !== f.item_id && void 0 !== f.item_id && (d = f.item_id),
                                                                        null !== f.ctx_shopid && void 0 !== f.ctx_shopid && (h = f.ctx_shopid),
                                                                        null !== f.shopid && void 0 !== f.shopid && (h = f.shopid),
                                                                        null !== f.shop_id && void 0 !== f.shop_id && (h = f.shop_id))
                                                                }
                                                            }
                                                            var v = Math.floor(d / 1e9)
                                                                , m = d % 1e9
                                                                , g = Math.floor(h / 1e9)
                                                                , _ = h % 1e9;
                                                            3 == r ? eA.enqueue(new eP(r, o, s, n, c, l, p, v, m, g, _)) : eE.enqueue(new eP(r, o, s, n, c, l, p, v, m, g, _))
                                                        }
                                                    }
                                                } catch (e) {
                                                    e_(e)
                                                }
                                                return e.call(this, t, i)
                                            }
                                        } catch (e) {
                                            e_(e)
                                        }
                                    }
                                }();
                            var { fetch: i } = window;
                            window.fetch = async (...n) => {
                                var d, u, f, v, m, g, [_, y] = n;
                                try {
                                    var b, H = (b = window.Request && _ instanceof Request ? new URL(_.url, window.location.origin) : new URL(_.toString(), window.location.origin)).origin === window.location.origin, P = b.pathname.replace(/\/+$/, ""), F = y?.method?.toLowerCase(), O = performance.now(), U = !1, B = !1;
                                    if (!U && y?.anticrawler && (U = !0),
                                        c && (D.some(e => P === e) || L.some(e => P === e) || z.some(e => P === e)) && (B = !0),
                                        !U && p && Array.isArray(p) && p.length > 0 && (U = !!eR(p, P, H, F)),
                                        U) {
                                        s.hookFUFetch.onInit(),
                                            T({});
                                        var q = N()
                                            , j = await M()
                                            , W = I();
                                        if (window.Request && _ instanceof Request) {
                                            if (_.headers.set(E, q),
                                                _.headers.set(S, j),
                                                Object.entries(W).forEach(([e, t]) => {
                                                    _.headers.set(e, t)
                                                }
                                                ),
                                                B) {
                                                var V = eF();
                                                _.headers.set(k, V)
                                            }
                                        } else if (y)
                                            if (Array.isArray(y.headers)) {
                                                if (y.headers.push([E, q]),
                                                    y.headers.push([S, j]),
                                                    Object.entries(W).forEach(([e, t]) => {
                                                        (y?.headers).push([e, t])
                                                    }
                                                    ),
                                                    B) {
                                                    var G = eF();
                                                    y.headers.push([k, G])
                                                }
                                            } else
                                                y.headers = {
                                                    ...y.headers,
                                                    ...W,
                                                    [S]: j,
                                                    [E]: q,
                                                    ...B ? ((g = {})[k] = eF(),
                                                        g) : {}
                                                };
                                        else
                                            (m = {}).headers = {
                                                ...W,
                                                [S]: j,
                                                [E]: q,
                                                ...B ? ((v = {})[k] = eF(),
                                                    v) : {}
                                            },
                                                y = m;
                                        (a === w.PC || a === w.RW) && (window.__SFUC || (window.__SFUC = 0),
                                            window.__SFUC++);
                                        var X = performance.now()
                                            , Z = Math.floor(X - O);
                                        y?.anticrawler || s.hookFUFetch.onComplete(Z)
                                    }
                                    var Q = await i(_, y);
                                    if (!Q || !Q.ok)
                                        return Q;
                                    try {
                                        var { status: Y } = Q;
                                        if (U && Y >= 200 && Y < 300 && 204 !== Y) {
                                            var J = Q.headers.get("content-type");
                                            if (J && J.includes("application/json")) {
                                                var K = await Q.clone().json();
                                                if (!K || "object" != typeof K || Array.isArray(K))
                                                    return Q;
                                                var $ = y?.anticrawler ? y.anticrawler : o?.[P];
                                                ey((u = ed,
                                                    (f = {}).antiCrawlerConfig = {
                                                        redirectType: a == w.PC || a == w.RW ? h.Internal : h.External,
                                                        verificationPageHost: a == w.PC || a == w.RW ? location.origin : ec(((d = {}).env = t || "live",
                                                            d.locale = e || "SG",
                                                            d)),
                                                        ...$,
                                                        shouldReplaceHistory: !1 !== $?.shouldReplaceHistory && "false" !== $?.shouldReplaceHistory
                                                    },
                                                    f.response = K,
                                                    f.pathname = P,
                                                    f.platform = a,
                                                    f.source = r,
                                                    f.setRedirecting = C,
                                                    f.getRedirecting = A,
                                                    f[u(2)] = e => ef({
                                                        ...e,
                                                        history: R
                                                    }),
                                                    f[u(3)] = e => ev({
                                                        ...e,
                                                        history: R
                                                    }),
                                                    f[u(4)] = e => eu({
                                                        ...e,
                                                        history: R
                                                    }),
                                                    f.enablePopup = l,
                                                    f))
                                            }
                                        }
                                        return Q
                                    } catch (e) {
                                        return x(e),
                                            Q
                                    }
                                } catch (e) {
                                    return x(e),
                                        i(...n)
                                }
                            }
                                ;
                            var d = XMLHttpRequest.prototype.open
                                , u = XMLHttpRequest.prototype.setRequestHeader
                                , f = XMLHttpRequest.prototype.send;
                            XMLHttpRequest.prototype.open = function (...e) {
                                this.openargs = e,
                                    this.headers = {},
                                    d.apply(this, e)
                            }
                                ,
                                XMLHttpRequest.prototype.setRequestHeader = function (e, t) {
                                    this.headers[e] = t,
                                        u.call(this, e, t)
                                }
                                ,
                                XMLHttpRequest.prototype.send = async function (i) {
                                    try {
                                        var n = ""
                                            , d = !1
                                            , u = !1;
                                        if (this.openargs) {
                                            var v = new URL(this.openargs[1].toString(), window.location.origin)
                                                , m = v.origin === window.location.origin;
                                            n = v.pathname.replace(/\/+$/, "");
                                            var g = this.openargs[0].toLowerCase()
                                                , _ = performance.now();
                                            if (p && Array.isArray(p) && p.length > 0 && (d = !!eR(p, n, m, g)),
                                                c && (D.some(e => n === e) || L.some(e => n === e) || z.some(e => n === e)) && (u = !0),
                                                d) {
                                                s.hookFUXhr.onInit(),
                                                    T({});
                                                var y = N();
                                                this.headers[E] || this.setRequestHeader(E, y);
                                                var b = I();
                                                for (var H in b)
                                                    this.headers[H] || this.setRequestHeader(H, b[H]);
                                                var P = await M();
                                                if (this.headers[S] || this.setRequestHeader(S, P),
                                                    u) {
                                                    var F = eF();
                                                    this.headers[k] || this.setRequestHeader(k, F)
                                                }
                                                (a === w.PC || a === w.RW) && (window.__SFUC || (window.__SFUC = 0),
                                                    window.__SFUC++);
                                                var O = performance.now()
                                                    , U = Math.floor(O - _);
                                                s.hookFUXhr.onComplete(U)
                                            }
                                        }
                                        var B = this.onreadystatechange;
                                        this.onreadystatechange = (...i) => {
                                            if (this.readyState === XMLHttpRequest.DONE)
                                                try {
                                                    if (d && this.status >= 200 && this.status < 300 && 204 !== this.status) {
                                                        var s, c, p, u = this.getResponseHeader("Content-Type");
                                                        if (u && !u.includes("application/json"))
                                                            return;
                                                        var f = this.responseType;
                                                        if ("blob" == f || "arraybuffer" == f || "document" == f)
                                                            return;
                                                        var v = f && "text" !== f && this.response ? this.response : JSON.parse(this.responseText)
                                                            , m = o?.[n];
                                                        ey((c = ed,
                                                            (p = {}).antiCrawlerConfig = {
                                                                redirectType: a == w.PC || a == w.RW ? h.Internal : h.External,
                                                                verificationPageHost: a == w.PC || a == w.RW ? location.origin : ec(((s = {}).env = t || "live",
                                                                    s.locale = e || "SG",
                                                                    s)),
                                                                ...m,
                                                                shouldReplaceHistory: "false" !== m?.shouldReplaceHistory
                                                            },
                                                            p.response = v,
                                                            p.pathname = n,
                                                            p.source = r,
                                                            p.platform = a,
                                                            p.setRedirecting = C,
                                                            p.getRedirecting = A,
                                                            p[c(2)] = e => ef({
                                                                ...e,
                                                                history: R
                                                            }),
                                                            p[c(3)] = e => ev({
                                                                ...e,
                                                                history: R
                                                            }),
                                                            p[c(4)] = e => eu({
                                                                ...e,
                                                                history: R
                                                            }),
                                                            p.enablePopup = l,
                                                            p))
                                                    }
                                                } catch (e) {
                                                    x(e)
                                                }
                                            B?.apply(this, i)
                                        }
                                    } catch (e) {
                                        x(e)
                                    } finally {
                                        f.call(this, i)
                                    }
                                }
                        }
                    }
                    )(),
                        (u = {}).i = T,
                        u.o = N,
                        u.p = M,
                        u.l = B,
                        u.u = I,
                        u.h = e => eu({
                            ...e,
                            history: R
                        }),
                        u.v = e => ef({
                            ...e,
                            history: R
                        }),
                        u.m = e => ev({
                            ...e,
                            history: R
                        }),
                        u._ = O,
                        u.R = U,
                        u.getRedirecting = A,
                        u.setRedirecting = C,
                        u.ACConfig = o,
                        u
                }(((y = {}).locale = e,
                    y.platform = a,
                    y.source = r,
                    y.policies = f,
                    y.env = t,
                    y.ACConfig = A,
                    y.performanceTrackings = v,
                    y.enableTMS = s,
                    y.enableGlobalHook = o,
                    y.enablePopup = d,
                    y.onError = g,
                    y)), { i: T, _: I, R: O, v: U, m: M, h: B, o: q, p: W, l: V } = x;
            async function G(e, t, a) {
                var r, o, s;
                try {
                    var l = (j || /^(https?:)?\/\//.test(e)) && !c ? e : "" + n + e
                        , d = t?.isFormData ? a || new FormData : JSON.stringify(a)
                        , h = t?.isFormData ? void 0 : {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                        , f = await (window.global = window,
                            i.g && i.g.fetch ? i.g.fetch : fetch)(l, {
                                method: t && t.method ? t.method : "GET",
                                headers: {
                                    ...h,
                                    ...t?.overideCreateSFUHeaders ? t?.headers : {
                                        ...p,
                                        ...t?.headers
                                    }
                                },
                                ...t && !1 === t.withCredentials ? {} : {
                                    credentials: "include"
                                },
                                body: d,
                                signal: t?.signal,
                                anticrawler: t?.antiCrawlerConfig
                            })
                        , { status: v } = f;
                    if (v >= 200 && v < 300) {
                        var m = f.headers.get("content-type");
                        if (m && !m.includes("application/json"))
                            return f;
                        var g = await f.json();
                        return _(g, f),
                            "object" != typeof g || Array.isArray(g) ? g : {
                                ...g,
                                __raw: f
                            }
                    }
                    return 408 === v ? ((s = {}).error = N.REQUEST_TIMEOUT,
                        s.error_msg = v.toString(),
                        s.__raw = f,
                        s) : (u && u(f),
                            (o = {}).error = N.SERVER_ERROR,
                            o.error_msg = v?.toString(),
                            o.__raw = f,
                            o)
                } catch (e) {
                    return (r = {}).error = N.SERVER_ERROR,
                        r.error_msg = e,
                        r
                }
            }
            async function X(e, t) {
                var i = ed
                    , { antiCrawler: a, apiProtection: r, deviceFingerPrint: o } = t?.[i(6)] || {};
                o && T({});
                var s, n, c, l = await (o ? O(((c = {
                    useHeader: !0
                })[(n = ed)(5)] = o[n(5)] || !1,
                    c.customDfp = o.customDfp,
                    c)) : Promise.resolve({})), p = o?.dataFormatter ? o.dataFormatter(l["sz-token"] || "") : l, d = a ? x.u() : {};
                return await G(e, ((s = {
                    method: "GET"
                }).headers = {
                    ...t?.headers,
                    ...d,
                    ...p,
                    [E]: q()
                },
                    s.overideCreateSFUHeaders = t?.overideCreateSFUHeaders,
                    s.withCredentials = r?.withCredentials,
                    s.signal = t?.signal,
                    s.antiCrawlerConfig = a,
                    s))
            }
            async function Z(e, t, i) {
                var a = new FormData;
                for (var r in t)
                    a.append(r, t[r]);
                return Q(e, a, {
                    ...i,
                    isFormData: !0
                })
            }
            async function Q(e, t, i) {
                var a = ed
                    , { antiCrawler: r, apiProtection: o, deviceFingerPrint: s } = i?.[a(6)] || {};
                s && T({});
                var n, c, l, p = s ? await O((c = ed,
                    (l = {}).useHeader = s?.useHeader,
                    l[c(5)] = s[c(5)] || !1,
                    l.customDfp = s.customDfp,
                    l)) : {}, d = s?.dataFormatter ? s.dataFormatter(s?.useHeader ? p[P] || "" : p[H] || "") : p, h = i?.isFormData || s?.useHeader || d && 0 === Object.keys(d).length && Object.getPrototypeOf(d) === Object.prototype ? t : {
                        ...t,
                        ...d
                    }, u = r ? x.u() : {};
                return await G(e, ((n = {
                    method: "POST"
                }).headers = {
                    ...i?.headers,
                    ...u,
                    ...s?.useHeader ? d : {},
                    [E]: q()
                },
                    n.isFormData = i?.isFormData,
                    n.overideCreateSFUHeaders = i?.overideCreateSFUHeaders,
                    n.withCredentials = o?.withCredentials,
                    n.signal = i?.signal,
                    n.antiCrawlerConfig = r,
                    n), h)
            }
            return b = ed,
                (C = {}).http = G,
                C.get = X,
                C.post = Q,
                C.postForm = Z,
                C[b(0)] = function (e) {
                    var t;
                    j && x.i(((t = {}).history = e?.history,
                        t))
                }
                ,
                C[b(4)] = B,
                C[b(2)] = U,
                C[b(3)] = M,
                C[b(7)] = I,
                C.getLongToken = V,
                C
        }
    }
}]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-static/_/sfu-latest.f28faa099ff7e727.2023.js.map
