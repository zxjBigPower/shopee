(self.mfeModules = self.mfeModules || []).push(["shopee__settings", ["Platform"], e => () => Promise.resolve((() => {
    "use strict";
    var a, r, s, n, i, l = {
        141: (e, a, r) => {
            r.microfeA(e, (function () {
                return Promise.all([r.microfeM(0)]).then((function () {
                    e.exports = a,
                        r.r(a),
                        r.d(a, {
                            BRAND_SALE_URL: () => m,
                            CAPITAL_CITY: () => _,
                            CONF: () => i,
                            CONF_KEYS: () => n,
                            COUNTRY_CONFIG: () => E,
                            CSContactNumber: () => t,
                            DEFAULT_COLLAPSE_DISPLAY_LIMIT: () => S,
                            DEFAULT_COLLAPSE_START_OFFSET: () => I,
                            ENABLE_OFFICIAL_MALL: () => A,
                            FILTER_SHORTCUTS: () => O,
                            FLASH_SALE_URL: () => N,
                            MART_FLASH_SALE_URL: () => p,
                            OFFENSIVE_HIDES: () => c,
                            PAGE_TYPE: () => o,
                            SEARCH_FILTER_PANEL_CONFIG: () => L,
                            SHIPPING_FEE_ADDRESS_MAX_LEVEL: () => u,
                            __exports: () => C,
                            getConf: () => l,
                            getCountryConfig: () => g
                        });
                    const s = r.microfeI(0);
                    var n = {
                        PRICE_FILTER_DEFAULT_RANGE: "PRICE_FILTER_DEFAULT_RANGE",
                        SHOW_SOLD_COUNT: "SHOW_SOLD_COUNT",
                        OFFENSIVE_HIDE: "OFFENSIVE_HIDE",
                        SELLER_DEFINED_FREE_SHIPPING_PROMOTION: "SELLER_DEFINED_FREE_SHIPPING_PROMOTION"
                    }
                        , i = {
                            [n.SHOW_SOLD_COUNT]: {
                                SG: !0,
                                TW: !0,
                                ID: !0,
                                TH: !0,
                                default: !1
                            },
                            [n.SELLER_DEFINED_FREE_SHIPPING_PROMOTION]: {
                                default: !0
                            },
                            [n.PRICE_FILTER_DEFAULT_RANGE]: {
                                SG: [{
                                    price_min: 0,
                                    price_max: 1e6
                                }, {
                                    price_min: 1e6,
                                    price_max: 2e6
                                }, {
                                    price_min: 2e6,
                                    price_max: 3e6
                                }],
                                MY: [{
                                    price_min: 0,
                                    price_max: 2e6
                                }, {
                                    price_min: 2e6,
                                    price_max: 4e6
                                }, {
                                    price_min: 4e6,
                                    price_max: 6e6
                                }],
                                PH: [{
                                    price_min: 0,
                                    price_max: 2e7
                                }, {
                                    price_min: 2e7,
                                    price_max: 4e7
                                }, {
                                    price_min: 4e7,
                                    price_max: 6e7
                                }],
                                ID: [{
                                    price_min: 0,
                                    price_max: 75e8
                                }, {
                                    price_min: 75e8,
                                    price_max: 15e9
                                }, {
                                    price_min: 15e9,
                                    price_max: 2e10
                                }],
                                TW: [{
                                    price_min: 0,
                                    price_max: 3e7
                                }, {
                                    price_min: 3e7,
                                    price_max: 7e7
                                }, {
                                    price_min: 7e7,
                                    price_max: 1e8
                                }],
                                TH: [{
                                    price_min: 0,
                                    price_max: 15e6
                                }, {
                                    price_min: 15e6,
                                    price_max: 3e7
                                }, {
                                    price_min: 3e7,
                                    price_max: 45e6
                                }],
                                VN: [{
                                    price_min: 0,
                                    price_max: 1e10
                                }, {
                                    price_min: 1e10,
                                    price_max: 2e10
                                }, {
                                    price_min: 2e10,
                                    price_max: 3e10
                                }],
                                BR: [{
                                    price_min: 0,
                                    price_max: 2e6
                                }, {
                                    price_min: 2e6,
                                    price_max: 4e6
                                }, {
                                    price_min: 4e6,
                                    price_max: 6e6
                                }],
                                MX: [{
                                    price_min: 0,
                                    price_max: 1e7
                                }, {
                                    price_min: 1e7,
                                    price_max: 2e7
                                }, {
                                    price_min: 2e7,
                                    price_max: 3e7
                                }],
                                CO: [{
                                    price_min: 0,
                                    price_max: 13e8
                                }, {
                                    price_min: 13e8,
                                    price_max: 26e8
                                }, {
                                    price_min: 26e8,
                                    price_max: 39e8
                                }],
                                CL: [{
                                    price_min: 0,
                                    price_max: 3e8
                                }, {
                                    price_min: 3e8,
                                    price_max: 6e8
                                }, {
                                    price_min: 6e8,
                                    price_max: 9e8
                                }],
                                AR: [{
                                    price_min: 0,
                                    price_max: 4e7
                                }, {
                                    price_min: 4e7,
                                    price_max: 8e7
                                }, {
                                    price_min: 8e7,
                                    price_max: 12e7
                                }],
                                FR: [{
                                    price_min: 0,
                                    price_max: 5e5
                                }, {
                                    price_min: 5e5,
                                    price_max: 1e6
                                }, {
                                    price_min: 1e6,
                                    price_max: 15e5
                                }],
                                PL: [{
                                    price_min: 0,
                                    price_max: 15e5
                                }, {
                                    price_min: 15e5,
                                    price_max: 3e6
                                }, {
                                    price_min: 3e6,
                                    price_max: 45e5
                                }],
                                ES: [{
                                    price_min: 0,
                                    price_max: 5e5
                                }, {
                                    price_min: 5e5,
                                    price_max: 1e6
                                }, {
                                    price_min: 1e6,
                                    price_max: 15e5
                                }],
                                IN: [{
                                    price_min: 0,
                                    price_max: 2e7
                                }, {
                                    price_min: 2e7,
                                    price_max: 4e7
                                }, {
                                    price_min: 4e7,
                                    price_max: 6e7
                                }]
                            },
                            [n.OFFENSIVE_HIDE]: {
                                MY: !0,
                                TW: !0,
                                default: !1
                            }
                        };
                    function l(e, a) {
                        const r = i[a];
                        return r.hasOwnProperty(e) ? r[e] : r.default
                    }
                    var t = {
                        SG: "+65 6206 6610",
                        MY: "03 - 2777 9222",
                        TW: "(02) 6636 6559",
                        PH: "02 880 5200",
                        VN: "19001221",
                        ID: "1500702",
                        TH: "02-017-8399",
                        BR: "customer service contact number here",
                        MX: "customer service contact number here",
                        CO: "customer service contact number here",
                        CL: "customer service contact number here",
                        AR: "customer service contact number here",
                        FR: "customer service contact number here",
                        PL: "customer service contact number here",
                        ES: "customer service contact number here",
                        IN: "customer service contact number here"
                    }
                        , E = {
                            default: {
                                language: s.LANGUAGES.en,
                                currency: "SGD",
                                adultAge: 18,
                                countryName: "",
                                languages: null
                            },
                            SG: {
                                language: s.LANGUAGES.en,
                                currency: "SGD",
                                adultAge: 18,
                                countryName: "Singapore",
                                languages: [{
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }, {
                                    languageCode: s.LANGUAGES["zh-Hans"],
                                    languageName: "简体中文"
                                }, {
                                    languageCode: s.LANGUAGES.ms,
                                    languageName: "Bahasa Melayu"
                                }]
                            },
                            ID: {
                                language: s.LANGUAGES.id,
                                currency: "IDR",
                                countryName: "Indonesia",
                                adultAge: 21,
                                languages: [{
                                    languageCode: s.LANGUAGES.id,
                                    languageName: "Bahasa Indonesia"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            TH: {
                                language: s.LANGUAGES.th,
                                languages: [{
                                    languageCode: s.LANGUAGES.th,
                                    languageName: "ไทย"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }, {
                                    languageCode: s.LANGUAGES.my,
                                    languageName: "Burmese"
                                }],
                                currency: "THB",
                                countryName: "Thailand",
                                adultAge: 20
                            },
                            VN: {
                                language: s.LANGUAGES.vi,
                                currency: "VND",
                                countryName: "Việt Nam",
                                adultAge: 18,
                                languages: [{
                                    languageCode: s.LANGUAGES.vi,
                                    languageName: "Tiếng Việt"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            PH: {
                                language: s.LANGUAGES.en,
                                currency: "PHP",
                                adultAge: 18,
                                countryName: "Philippines",
                                languages: [{
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }, {
                                    languageCode: s.LANGUAGES["zh-Hans"],
                                    languageName: "简体中文"
                                }, {
                                    languageCode: s.LANGUAGES.fil,
                                    languageName: "Filipino"
                                }]
                            },
                            TW: {
                                language: s.LANGUAGES["zh-Hant"],
                                currency: "TWD",
                                adultAge: 18,
                                countryName: "蝦皮購物",
                                languages: [{
                                    languageCode: s.LANGUAGES["zh-Hant"],
                                    languageName: "繁體中文"
                                }, {
                                    languageCode: s.LANGUAGES["zh-Hans"],
                                    languageName: "简体中文"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            MY: {
                                language: s.LANGUAGES.en,
                                currency: "MYR",
                                countryName: "Malaysia",
                                adultAge: 18,
                                languages: [{
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }, {
                                    languageCode: s.LANGUAGES["zh-Hans"],
                                    languageName: "简体中文"
                                }, {
                                    languageCode: s.LANGUAGES.ms,
                                    languageName: "Bahasa Melayu"
                                }]
                            },
                            BR: {
                                adultAge: 18,
                                language: s.LANGUAGES["pt-BR"],
                                currency: "BRL",
                                countryName: "Brasil",
                                languages: [{
                                    languageCode: s.LANGUAGES["pt-BR"],
                                    languageName: "Português - BR"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            MX: {
                                adultAge: 18,
                                language: s.LANGUAGES["es-MX"],
                                currency: "MXN",
                                countryName: "México",
                                languages: [{
                                    languageCode: s.LANGUAGES["es-MX"],
                                    languageName: "Español-Mexico"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            CO: {
                                adultAge: 18,
                                language: s.LANGUAGES["es-CO"],
                                currency: "COP",
                                countryName: "Colombia",
                                languages: [{
                                    languageCode: s.LANGUAGES["es-CO"],
                                    languageName: "Español-Colombia"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            CL: {
                                adultAge: 18,
                                language: s.LANGUAGES["es-CL"],
                                currency: "CLP",
                                countryName: "Chile",
                                languages: [{
                                    languageCode: s.LANGUAGES["es-CL"],
                                    languageName: "Español-Chile"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            AR: {
                                adultAge: 18,
                                language: s.LANGUAGES["es-AR"],
                                currency: "ARS",
                                countryName: "Argentina",
                                languages: [{
                                    languageCode: s.LANGUAGES["es-AR"],
                                    languageName: "Español-Argentina"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            FR: {
                                adultAge: 18,
                                language: s.LANGUAGES.fr,
                                currency: "EUR",
                                countryName: "France",
                                languages: [{
                                    languageCode: s.LANGUAGES.fr,
                                    languageName: "Français"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            PL: {
                                adultAge: 18,
                                language: s.LANGUAGES.pl,
                                currency: "PLN",
                                countryName: "Polska",
                                languages: [{
                                    languageCode: s.LANGUAGES.pl,
                                    languageName: "Polski"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            ES: {
                                adultAge: 18,
                                language: s.LANGUAGES["es-ES"],
                                currency: "EUR",
                                countryName: "España",
                                languages: [{
                                    languageCode: s.LANGUAGES["es-ES"],
                                    languageName: "España-Spain"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            },
                            IN: {
                                adultAge: 18,
                                language: s.LANGUAGES.en,
                                currency: "INR",
                                countryName: "India",
                                languages: [{
                                    languageCode: s.LANGUAGES.hi,
                                    languageName: "हिन्दी"
                                }, {
                                    languageCode: s.LANGUAGES.en,
                                    languageName: "English"
                                }]
                            }
                        };
                    function g(e) {
                        return E[e] || E.default
                    }
                    var _ = {
                        SG: {
                            state: "",
                            city: ""
                        },
                        TW: {
                            state: "臺北市",
                            city: "中正區"
                        },
                        PH: {
                            state: "Metro Manila",
                            city: "Metro Manila",
                            district: "Binondo",
                            town: "Barangay 288"
                        },
                        VN: {
                            state: "Hà Nội",
                            city: "Quận Hoàn Kiếm",
                            district: "Phường Tràng Tiền"
                        },
                        ID: {
                            state: "DKI JAKARTA",
                            city: "KOTA JAKARTA PUSAT",
                            district: "MENTENG"
                        },
                        TH: {
                            state: "จังหวัดกรุงเทพมหานคร",
                            city: "เขตพระนคร"
                        },
                        MY: {
                            state: "Kuala Lumpur",
                            city: "KL City"
                        },
                        BR: {
                            state: "São Paulo",
                            city: "São Paulo",
                            zipcode: "05024040"
                        },
                        MX: {
                            state: "Ciudad de México",
                            city: "Milpa Alta",
                            district: "Ciudad de México",
                            zipcode: "01000"
                        },
                        CO: {
                            state: "Bogotá, D.C.",
                            city: "Bogotá, D.C."
                        },
                        CL: {
                            state: "Metropolitana De Santiago",
                            city: "Santiago"
                        },
                        AR: {
                            state: "CAPITAL FEDERAL",
                            city: "CIUDAD AUTONOMA BUENOS AIRES"
                        },
                        FR: {
                            state: "Paris",
                            city: "Paris"
                        },
                        PL: {
                            state: "Mazowieckie",
                            city: "Warszawa",
                            district: "Warszawa",
                            zipcode: "00065"
                        },
                        ES: {
                            state: "Madrid",
                            city: "Madrid"
                        },
                        IN: {
                            state: "New Delhi",
                            city: "New Delhi",
                            zipcode: "110000"
                        }
                    }
                        , u = {
                            SG: 2,
                            TW: 2,
                            PH: 4,
                            VN: 3,
                            ID: 3,
                            TH: 2,
                            MY: 2,
                            BR: 2,
                            MX: 3,
                            CO: 2,
                            CL: 2,
                            AR: 2,
                            FR: 2,
                            PL: 4,
                            ES: 2,
                            IN: 2
                        }
                        , c = {}
                        , o = {
                            PRODUCT: 0,
                            CATEGORY: 1,
                            SHOP: 2,
                            COLLECTION: 3,
                            EVENT: 4,
                            BRIDGE_CMD: 5,
                            SEO: 6,
                            COIN: 7,
                            DIRECT: 8,
                            OTHERS: -1
                        }
                        , A = {
                            SG: !0,
                            TW: !0,
                            ID: !0,
                            VN: !0,
                            MY: !0,
                            TH: !0,
                            PH: !0,
                            BR: !1,
                            MX: !1,
                            CO: !1,
                            CL: !1,
                            AR: !1,
                            FR: !1,
                            PL: !1,
                            ES: !1,
                            IN: !1
                        }
                        , m = {
                            SG: "/mall-flash-sale",
                            PH: "/mall-flash-sale",
                            ID: "/mall-flash-sale",
                            TW: "/mall-flash-sale",
                            VN: "/mall-flash-sale",
                            MY: "/mall-flash-sale",
                            TH: "/mall-flash-sale",
                            BR: "/mall-flash-sale",
                            MX: "/mall-flash-sale",
                            CO: "/mall-flash-sale",
                            CL: "/mall-flash-sale",
                            AR: "/mall-flash-sale",
                            FR: "/mall-flash-sale",
                            PL: "/mall-flash-sale",
                            ES: "/mall-flash-sale",
                            IN: "/mall-hot-deals"
                        }
                        , N = {
                            SG: "/flash_deals",
                            PH: "/flash_deals",
                            ID: "/flash_sale",
                            TW: "/flash_sale",
                            VN: "/flash_sale",
                            MY: "/shocking_sale",
                            TH: "/flash_sale",
                            BR: "/flash_sale",
                            MX: "/flash_sale",
                            CO: "/flash_sale",
                            CL: "/flash_sale",
                            FR: "/promo_flash",
                            PL: "/okazje_dnia",
                            ES: "/venta_flash",
                            AR: "/flash_sale",
                            IN: "/hot_deals"
                        }
                        , p = {
                            SG: "/supermarket/flash-deals",
                            PH: "/supermarket/flash-deals",
                            ID: "/supermarket/flash-sale",
                            TW: "/supermarket/flash-sale",
                            VN: "/supermarket/flash-sale",
                            MY: "/supermarket/shocking-sale",
                            TH: "/supermarket/flash-sale",
                            BR: "/supermarket/flash-sale",
                            MX: "/supermarket/flash-sale",
                            CO: "/supermarket/flash-sale",
                            CL: "/supermarket/flash-sale",
                            AR: "/supermarket/flash-sale",
                            FR: "/supermarket/flash-sale",
                            PL: "/supermarket/flash-sale",
                            ES: "/supermarket/flash-sale",
                            IN: "/supermarket/hot-deals"
                        }
                        , S = 4
                        , I = 4
                        , L = {
                            default: {
                                groups: ["FACET", "LOCATIONS", "SHIPPING_OPTIONS", {
                                    group: "SHOP_TYPE",
                                    filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"]
                                }, {
                                        group: "SERVICE_AND_PROMOTION",
                                        filters: ["WHOLESALE", "WITH_DISCOUNT", "FREE_SHIPPING", "HAS_LOWEST_PRICE_GUARANTEE"]
                                    }, {
                                        group: "CONDITION",
                                        filters: ["NEW_ITEM", "USED_ITEM"]
                                    }, "PRICE_RANGE"]
                            },
                            TW: {
                                groups: ["FACET", "LOCATIONS", "SHIPPING_OPTIONS", {
                                    group: "SHOP_TYPE",
                                    filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"]
                                }, {
                                        group: "SERVICE_AND_PROMOTION",
                                        filters: ["WHOLESALE", "WITH_DISCOUNT", "FREE_SHIPPING", "PAY_CREDIT_CARD"]
                                    }, {
                                        group: "CONDITION",
                                        filters: ["NEW_ITEM", "USED_ITEM"]
                                    }, "PRICE_RANGE"]
                            },
                            MY: {
                                groups: ["FACET", "LOCATIONS", {
                                    group: "SHOP_TYPE",
                                    filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"]
                                }, {
                                        group: "SERVICE_AND_PROMOTION",
                                        filters: ["WHOLESALE", "WITH_DISCOUNT", "FREE_SHIPPING", "HAS_LOWEST_PRICE_GUARANTEE"]
                                    }, {
                                        group: "CONDITION",
                                        filters: ["NEW_ITEM", "USED_ITEM"]
                                    }, "PRICE_RANGE"]
                            },
                            ID: {
                                groups: ["FACET", "LOCATIONS", "SHIPPING_OPTIONS", {
                                    group: "CONDITION",
                                    filters: ["NEW_ITEM", "USED_ITEM"]
                                }, {
                                        group: "SHOP_TYPE",
                                        filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"]
                                    }, {
                                        collapseDisplayLimit: 2,
                                        group: "SERVICE_AND_PROMOTION",
                                        collapseStartOffset: 2,
                                        filters: ["FREE_SHIPPING", "WITH_DISCOUNT", "WHOLESALE", "PAY_COD", "HAS_LOWEST_PRICE_GUARANTEE", "INSTALLMENT"]
                                    }, "PRICE_RANGE"]
                            },
                            TH: {
                                groups: ["FACET", "LOCATIONS", {
                                    group: "SHOP_TYPE",
                                    filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"]
                                }, {
                                        group: "SERVICE_AND_PROMOTION",
                                        filters: ["WHOLESALE", "WITH_DISCOUNT", "FREE_SHIPPING", "HAS_LOWEST_PRICE_GUARANTEE"]
                                    }, {
                                        group: "CONDITION",
                                        filters: ["NEW_ITEM", "USED_ITEM"]
                                    }, "PRICE_RANGE"]
                            },
                            BR: {
                                groups: ["FACET", "LOCATIONS", "SHIPPING_OPTIONS", {
                                    group: "SHOP_TYPE",
                                    filters: ["PREFERRED", "SERVICE_BY_SHOPEE"]
                                }, {
                                        group: "SERVICE_AND_PROMOTION",
                                        filters: ["WHOLESALE", "WITH_DISCOUNT", "FREE_SHIPPING", "HAS_LOWEST_PRICE_GUARANTEE"]
                                    }, {
                                        group: "CONDITION",
                                        filters: ["NEW_ITEM", "USED_ITEM"]
                                    }, "PRICE_RANGE"]
                            },
                            MX: {},
                            CO: {},
                            CL: {},
                            AR: {},
                            FR: {},
                            PL: {},
                            ES: {},
                            IN: {}
                        }
                        , O = {
                            default: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "PRICE_RANGE"],
                            TW: ["SERVICE_BY_SHOPEE", "OFFICIAL_MALL", "PREFERRED", "FREE_SHIPPING"],
                            VN: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "SHIPPING_OPTIONS"],
                            TH: ["OFFICIAL_MALL", "PREFERRED", "FREE_SHIPPING", "PRICE_RANGE"],
                            MY: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "PAY_COD"],
                            ID: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE", "SHIPPING_OPTIONS"],
                            BR: ["PREFERRED", "LOCATIONS", "PRICE_RANGE"],
                            MX: [],
                            CO: [],
                            CL: [],
                            AR: [],
                            FR: [],
                            PL: [],
                            ES: [],
                            IN: []
                        };
                    const R = JSON.parse('{"name":"@shopee/settings","version":"3.3.0","license":"UNLICENSED","author":"Platform","contributors":["Kenrick <kenrick@sea.com>","Tan Li Hau <tanlh@sea.com>"],"repository":{"type":"git","url":"https://git.garena.com/shopee/shopee_react_native.git","directory":"platform/public/common-utils/platform-api/settings"},"exports":{".":{"types":"./dist/index.d.ts","webpack":"./dist/index.mjs","module":"./dist/index.mjs","import":"./dist/index.mjs","require":"./dist/index.js","default":"./dist/index.mjs"},"./package.json":"./package.json"},"main":"dist/index.js","module":"dist/index.mjs","files":["dist/","src/","CHANGELOG.md"],"sideEffects":false,"types":"dist/index.d.ts","dependencies":{"@shopee/language":"^3.4.0"},"devDependencies":{"@types/jest":"^29.5.12","@types/node":"~20","tsup":"^6.7.0","@shopee/bb8-babel":"^2.4.15","@shopee/bb8-lint":"^4.8.1","@shopee/bb8-typescript":"^4.5.0","@shopee/bb8-test":"^6.0.9","@types/shopee-global":"^5.4.16"},"keywords":["config"],"publishConfig":{"access":"public","registry":"https://npm.shopee.io/"},"scripts":{"_phase:build":"tsup src/index.ts --dts --external @shopee/platform --format esm,cjs --clean 1>&2","_phase:lint":"bb8-lint src --ext .js,.json,.jsx,.ts,.tsx","_phase:typecheck":"bb8-tsc 1>&2","build":"tsup src/index.ts --dts --external @shopee/platform --format esm,cjs --clean","lint":"bb8-lint src --ext .js,.json,.jsx,.ts,.tsx","lint:diff":"bb8-lint --ext .js,.json,.jsx,.ts,.tsx --shopee-since-git-hash","typecheck":"bb8-tsc"}}')
                        , C = {
                            "./package.json": r.t(R, 2)
                        }
                }
                ))
            }
            ))
        }
    }, t = {};
    function E(e) {
        var a = t[e];
        if (void 0 !== a)
            return a.exports;
        var r = t[e] = {
            exports: {}
        };
        return l[e](r, r.exports, E),
            r.exports
    }
    return E.microfeA = (e, a) => {
        e.exports;
        var r, s, n = e.exports = new Promise(((e, a) => {
            r = e,
                s = a
        }
        ));
        a().then((() => {
            if (e.exports.then) {
                var a = e.exports;
                e.exports = n,
                    a.then(r, s)
            } else
                r(e.exports)
        }
        )).catch(s)
    }
        ,
        a = {
            0: {
                version: "3.3.0",
                bundler: "webpack"
            }
        },
        r = {
            0: "shopee__language"
        },
        s = {
            type: "module",
            requester: "shopee__settings"
        },
        E.microfeM = n => e.getModule(r[n], Object.assign({}, s, a[n])),
        E.microfeI = n => e.getModuleImmediate(r[n], Object.assign({}, s, a[n])),
        e._.registerFederatedModules({
            base: s,
            map: a,
            name: r
        }),
        i = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
        E.t = function (e, a) {
            if (1 & a && (e = this(e)),
                8 & a)
                return e;
            if ("object" == typeof e && e) {
                if (4 & a && e.__esModule)
                    return e;
                if (16 & a && "function" == typeof e.then)
                    return e
            }
            var r = Object.create(null);
            E.r(r);
            var s = {};
            n = n || [null, i({}), i([]), i(i)];
            for (var l = 2 & a && e; "object" == typeof l && !~n.indexOf(l); l = i(l))
                Object.getOwnPropertyNames(l).forEach((a => s[a] = () => e[a]));
            return s.default = () => e,
                E.d(r, s),
                r
        }
        ,
        E.d = (e, a) => {
            for (var r in a)
                E.o(a, r) && !E.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: a[r]
                })
        }
        ,
        E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a),
        E.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        E(141)
}
)()).then((a => {
    e.setModule("shopee__settings", a, {
        type: "module",
        version: "3.3.0",
        isSingleton: !1,
        originalPackageName: "@shopee/settings"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe.shopee.io/modules-federation/bundle/0/shopee__settings/3.3.0.js.map
