(self.mfeModules = self.mfeModules || []).push(["shopee__pc-page-configuration-context", ["Platform", "React", "ReactRedux"], (e, r, t) => () => Promise.resolve((() => {
    "use strict";
    var e = {
        d: (r, t) => {
            for (var o in t)
                e.o(t, o) && !e.o(r, o) && Object.defineProperty(r, o, {
                    enumerable: !0,
                    get: t[o]
                })
        }
        ,
        o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
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
            FOOTER_PAGE_TYPE: () => p,
            Footer: () => C,
            Header: () => O,
            PageConfigurationContext: () => m,
            PageConfigurationProvider: () => _,
            __exports: () => R
        });
    var n = {};
    e.r(n),
        e.d(n, {
            DEFAULT_PAGE_CONTEXT: () => E,
            PageConfigurationContext: () => m
        });
    var a = {};
    e.r(a),
        e.d(a, {
            FOOTER_PAGE_TYPE: () => p,
            Footer: () => C,
            Header: () => O,
            PageConfigurationContext: () => m,
            PageConfigurationProvider: () => _
        });
    var s = {};
    e.r(s),
        e.d(s, {
            FOOTER_PAGE_TYPE: () => p,
            Footer: () => F,
            Header: () => A,
            PageConfigurationContext: () => m,
            PageConfigurationProvider: () => S,
            PageConfigurationSsrRehydrator: () => v
        });
    const u = Object.assign.bind()
        , p = Object.freeze({
            HOME: 0,
            SHOP: 1,
            PRODUCT: 2,
            EVENT: 3,
            SEARCH_RESULT: 4,
            COLLECTION: 5,
            CATEGORY_PAGE: 6,
            OFFICIAL_SHOP: 8,
            FLASH_SALE: 9,
            ALL_CAMPAIGNS: 10,
            GROUP_BUY_BROWSE_DEAL: 11,
            SHOPEE_MART: 14
        })
        , P = "SET_DEFAULT_THEME"
        , c = "SET_OFFICIAL_SHOP_THEME"
        , l = "SET_SHOPEE_MART_THEME";
    function i(e) {
        return {
            type: P,
            page: e
        }
    }
    function f(e, r) {
        return {
            type: c,
            show: e,
            page: r
        }
    }
    function g(e) {
        return {
            type: l,
            page: e
        }
    }
    var d = (e => (e.DEFAULT = "default",
        e.OFS = "ofs",
        e.S_MART = "s-mart",
        e.HEB = "heb",
        e))(d || {});
    d.DEFAULT;
    const h = r
        , T = t
        , E = {
            headerProps: {
                enable: !1
            },
            footerProps: {
                enable: !1
            },
            pageTheme: d.DEFAULT,
            promises: {},
            setHeaderProps: () => { }
            ,
            setFooterProps: () => { }
            ,
            setPageTheme: () => { }
            ,
            handlers: {
                fetchCartDrawerItems: () => { }
            }
        }
        , m = h.createContext(E);
    function _({ children: e, context: r, handlers: t = {
        fetchCartDrawerItems: () => { }
    } }) {
        var o, n, a;
        const [s, p] = h.useState(r)
            , P = (0,
                T.useDispatch)();
        return h.createElement(m.Provider, {
            value: {
                headerProps: null != (o = null == s ? void 0 : s.headerProps) ? o : {},
                footerProps: null != (n = null == s ? void 0 : s.footerProps) ? n : {},
                pageTheme: null != (a = null == s ? void 0 : s.pageTheme) ? a : d.DEFAULT,
                setHeaderProps: e => {
                    p((r => u({}, r, {
                        headerProps: e
                    })))
                }
                ,
                setFooterProps: e => {
                    p((r => u({}, r, {
                        footerProps: e
                    })))
                }
                ,
                setPageTheme: ({ theme: e, pageName: r }) => {
                    e && r ? (p((r => u({}, r, {
                        pageTheme: e
                    }))),
                        e === d.S_MART ? P(g(r)) : e === d.OFS ? P(f(!0, r)) : e === d.DEFAULT && P(i(r))) : P(i(""))
                }
                ,
                handlers: t
            }
        }, e)
    }
    function O(e) {
        const { setHeaderProps: r } = h.useContext(m);
        return h.useEffect((() => {
            r(e)
        }
        ), [JSON.stringify(e)]),
            null
    }
    function C(e) {
        const { setFooterProps: r } = h.useContext(m);
        return h.useEffect((() => {
            r(e)
        }
        ), [JSON.stringify(e)]),
            null
    }
    function S({ children: e, context: r }) {
        const t = h.useRef()
            , o = (0,
                T.useDispatch)()
            , n = h.useRef({
                header: () => { }
                ,
                footer: () => { }
            })
            , a = h.useRef({
                header: new Promise((e => {
                    n.current.header = e
                }
                )),
                footer: new Promise((e => {
                    n.current.footer = e
                }
                ))
            })
            , s = h.useRef((({ pageName: e, theme: n }) => {
                n && e && (t.current ? t.current.pageTheme = n : t.current = {
                    pageTheme: n
                },
                    r && (r.pageTheme = n),
                    n === d.S_MART ? o(g(e)) : n === d.OFS ? o(f(!0, e)) : n === d.DEFAULT && o(i(e)))
            }
            ))
            , u = h.useRef((e => {
                t.current ? t.current.headerProps = e : t.current = {
                    headerProps: e
                },
                    n.current.header(e),
                    r && (r.headerProps = e)
            }
            ))
            , p = h.useRef((e => {
                t.current ? t.current.footerProps = e : t.current = {
                    footerProps: e
                },
                    n.current.footer(e),
                    r && (r.footerProps = e)
            }
            ));
        return h.createElement(m.Provider, {
            value: {
                get headerProps() {
                    var e, r;
                    return null != (e = null == (r = t.current) ? void 0 : r.headerProps) ? e : {}
                },
                get footerProps() {
                    var e, r;
                    return null != (e = null == (r = t.current) ? void 0 : r.footerProps) ? e : {}
                },
                get pageTheme() {
                    var e, r;
                    return null != (e = null == (r = t.current) ? void 0 : r.pageTheme) ? e : d.DEFAULT
                },
                get promises() {
                    var e;
                    return null != (e = a.current) ? e : {}
                },
                get setHeaderProps() {
                    return u.current
                },
                get setFooterProps() {
                    return p.current
                },
                get setPageTheme() {
                    return s.current
                }
            }
        }, e)
    }
    function v({ pageContext: e, pageName: r }) {
        const { setHeaderProps: t, setFooterProps: o, setPageTheme: n } = h.useContext(m);
        return h.useMemo((() => {
            null != e && e.headerProps && t(e.headerProps),
                null != e && e.footerProps && o(e.footerProps),
                null != e && e.pageTheme && r && n({
                    pageName: r,
                    theme: e.pageTheme
                })
        }
        ), []),
            null
    }
    function A(e) {
        const { setHeaderProps: r } = h.useContext(m);
        return h.useMemo((() => {
            r(e)
        }
        ), []),
            null
    }
    function F(e) {
        const { setFooterProps: r } = h.useContext(m);
        return h.useMemo((() => {
            r(e)
        }
        ), []),
            null
    }
    const R = {
        "./client": a,
        "./server": s,
        "./context": n
    };
    return o
}
)()).then((r => {
    e.setModule("shopee__pc-page-configuration-context", r, {
        type: "module",
        version: "0.2.28",
        isSingleton: !0,
        originalPackageName: "@shopee/pc-page-configuration-context"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe.shopee.io/modules-federation/bundle/0/shopee__pc-page-configuration-context/0.2.28.js.map
