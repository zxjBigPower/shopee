(() => {
    "use strict";
    var e = {}
        , a = {};
    function c(d) {
        var f = a[d];
        if (void 0 !== f)
            return f.exports;
        var b = a[d] = {
            id: d,
            loaded: !1,
            exports: {}
        };
        return e[d].call(b.exports, b, b.exports, c),
            b.loaded = !0,
            b.exports
    }
    c.m = e,
        c.microfeA = (e, a) => {
            e.exports;
            var c, d, f = e.exports = new Promise((e, a) => {
                c = e,
                    d = a
            }
            );
            a().then(() => {
                if (e.exports.then) {
                    var a = e.exports;
                    e.exports = f,
                        a.then(c, d)
                } else
                    c(e.exports)
            }
            ).catch(d)
        }
        ,
        (() => {
            var e = {
                0: {
                    version: "18.3.1",
                    bundler: "webpack",
                    dev: 1,
                    type: "platform",
                    alias: "React"
                },
                1: {
                    version: "18.3.1",
                    bundler: "webpack",
                    dev: 1,
                    type: "platform",
                    alias: "ReactDom"
                },
                2: {
                    version: "7.2.9",
                    bundler: "webpack",
                    type: "platform",
                    alias: "ReactRedux"
                },
                3: {
                    version: "1.0.10--shopee.5",
                    bundler: "webpack",
                    type: "platform",
                    alias: "ReactHelmet"
                },
                4: {
                    version: "1.3.2",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                5: {
                    version: "6.4.0",
                    bundler: "webpack",
                    type: "platform",
                    alias: "TrackingHoc"
                },
                6: {
                    version: "3.3.0",
                    bundler: "webpack"
                },
                7: {
                    version: "4.10.1",
                    bundler: "webpack",
                    type: "platform",
                    alias: "HistoryApi"
                },
                8: {
                    version: "5.3.4",
                    bundler: "webpack",
                    type: "platform",
                    alias: "ReactRouter"
                },
                9: {
                    version: "5.3.4",
                    bundler: "webpack",
                    type: "platform",
                    alias: "_ReactRouter"
                },
                10: {
                    version: "3.7.2",
                    bundler: "webpack",
                    type: "platform",
                    alias: "Redux"
                },
                11: function () {
                    var e, a, c = window.__ASSETS__.SAP || [], d = 100 * Math.random(), f = 0;
                    for (a = 0; a < c.length; a++)
                        if (d < (f += c[a].p)) {
                            e = c[a].v;
                            break
                        }
                    return e || (e = c[c.length - 1].v),
                    {
                        version: e
                    }
                }(),
                12: {
                    version: "0.2.28",
                    bundler: "webpack"
                },
                13: {
                    version: "0.2.3",
                    bundler: "webpack"
                },
                14: {
                    version: "1.5.0",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                15: {
                    version: "3.4.0",
                    bundler: "webpack"
                },
                16: {
                    version: "3.1.5",
                    bundler: "webpack"
                },
                17: {
                    version: "4.36.1",
                    bundler: "webpack"
                },
                18: {
                    version: "4.2.0",
                    bundler: "webpack"
                },
                19: {
                    version: "1.0.19",
                    platform: "pc",
                    bundler: "webpack"
                },
                20: {
                    version: "0.1.77",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                21: {
                    version: "0.1.77",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                22: {
                    version: "1.4.103",
                    platform: "pc",
                    bundler: "webpack"
                },
                23: {
                    version: "2.5.0",
                    bundler: "webpack"
                },
                24: {
                    version: "0.0.29",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                25: {
                    version: "0.0.47",
                    platform: "pc",
                    css: 1,
                    bundler: "webpack"
                },
                26: {
                    version: "1.18.0-1",
                    bundler: "webpack"
                }
            }
                , a = {
                    0: "react",
                    1: "react-dom",
                    2: "react-redux",
                    3: "react-helmet-async",
                    4: "shopee__cart-panel-context",
                    5: "shopee__tracking-hoc",
                    6: "shopee__settings",
                    7: "history",
                    8: "react-router-dom",
                    9: "react-router",
                    10: "redux",
                    11: "shopee__web_enhance_sap",
                    12: "shopee__pc-page-configuration-context",
                    13: "shopee__ccms-react",
                    14: "shopee__cart-panel",
                    15: "shopee__language",
                    16: "shopee__domain",
                    17: "tanstack__react-query",
                    18: "shopee_common__currency",
                    19: "shopee__item-card-elements",
                    20: "shopee__item-card-standard-v2",
                    21: "shopee__item-card-recommendation-v2",
                    22: "shopee__cart-prefetch-singleton",
                    23: "shopee_common__time",
                    24: "shopee__item-card-centralisation-dsl",
                    25: "shopee__item-card-centralisation",
                    26: "shopee__web-bridge-sdk"
                }
                , d = {
                    type: "module",
                    requester: "pcmall-static"
                };
            !function (e, a) {
                try {
                    var c = window.__MF_OVERRIDE__ || {};
                    Object.keys(e).forEach(function (d) {
                        var f = c[e[d]]
                            , b = a[d];
                        f && b && (b.version = f)
                    })
                } catch { }
            }(a, e),
                c.microfeM = c => Platform.getModule(a[c], Object.assign({}, d, e[c])),
                c.microfeI = c => Platform.getModuleImmediate(a[c], Object.assign({}, d, e[c]))
        }
        )(),
        c.amdO = {},
        (() => {
            var e = [];
            c.O = (a, d, f, b) => {
                if (d) {
                    b = b || 0;
                    for (var o = e.length; o > 0 && e[o - 1][2] > b; o--)
                        e[o] = e[o - 1];
                    e[o] = [d, f, b];
                    return
                }
                for (var r = 1 / 0, o = 0; o < e.length; o++) {
                    for (var [d, f, b] = e[o], t = !0, n = 0; n < d.length; n++)
                        (!1 & b || r >= b) && Object.keys(c.O).every(e => c.O[e](d[n])) ? d.splice(n--, 1) : (t = !1,
                            b < r && (r = b));
                    if (t) {
                        e.splice(o--, 1);
                        var i = f();
                        void 0 !== i && (a = i)
                    }
                }
                return a
            }
        }
        )(),
        c.n = e => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return c.d(a, {
                a: a
            }),
                a
        }
        ,
        (() => {
            var e, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            c.t = function (d, f) {
                if (1 & f && (d = this(d)),
                    8 & f || "object" == typeof d && d && (4 & f && d.__esModule || 16 & f && "function" == typeof d.then))
                    return d;
                var b = Object.create(null);
                c.r(b);
                var o = {};
                e = e || [null, a({}), a([]), a(a)];
                for (var r = 2 & f && d; "object" == typeof r && !~e.indexOf(r); r = a(r))
                    Object.getOwnPropertyNames(r).forEach(e => o[e] = () => d[e]);
                return o.default = () => d,
                    c.d(b, o),
                    b
            }
        }
        )(),
        c.d = (e, a) => {
            for (var d in a)
                c.o(a, d) && !c.o(e, d) && Object.defineProperty(e, d, {
                    enumerable: !0,
                    get: a[d]
                })
        }
        ,
        c.f = {},
        c.e = e => Promise.all(Object.keys(c.f).reduce((a, d) => (c.f[d](e, a),
            a), [])),
        c.u = e => "" + (({
            36: "SlsCollectionPointModal",
            188: "VLibrasIntegration",
            215: "PageAllCategories",
            271: "address.TW_address_to_zip-live-json",
            379: "ShopeeMartPageHeader",
            421: "CartPanel",
            510: "PaymentSelectionPage",
            535: "PageUserPayment",
            571: "ShopeeMartAddOnDealsPage",
            627: "address.BR-live-json",
            703: "HomePage",
            736: "PageLiveStreamingAuthentication",
            751: "PageVerifyEmail",
            797: "PageBranchReselection",
            816: "PageShareExpiration",
            879: "ProductLabelLanding",
            896: "AccountAddPhoneNumberV2",
            906: "RedirectRwBrowseDeal",
            951: "MyAccountPage",
            1070: "RedirectToCoinsHistory",
            1094: "SEORelatedLinks",
            1103: "PageOAuth",
            1204: "PageRatings",
            1349: "PageUserGDPRCookieSettings",
            1362: "InstallmentFilter",
            1422: "PageWelcomePackage",
            1451: "ShopCustomPage",
            1510: "RouteRedirectToMyAccountPayment",
            1677: "InformationBlockMX",
            1715: "LoginByQRCode",
            1806: "CoinExpirationPage",
            1824: "ShopeeFoodPaymentSelectionPage",
            1885: "address.CO-live-json",
            1912: "AccountDemoPage",
            2027: "CustomFooter",
            2052: "InformationBlockSG",
            2059: "ResetPassword",
            2062: "PageAuthenticationIVS",
            2201: "metadata-v2",
            2317: "PageKYCFreeShipping",
            2361: "PageUserPhone",
            2380: "CategorySiteMap",
            2402: "address.TH_address_to_zip-live-json",
            2413: "address.TH-en-live-json",
            2474: "PageVerifyPassword",
            2771: "TrendingLinks",
            2818: "PageGenericDownloadApp",
            2826: "InformationBlockTH",
            2863: "address.TH-live-json",
            2898: "PFBCookieSetter",
            2926: "UserKycMx",
            2935: "InformationBlockIN",
            3037: "PageIdentityVerification",
            3040: "PageFlashSaleSMart",
            3058: "ProductTagFilter",
            3121: "CaptchaSdk",
            3211: "UserPage",
            3214: "InformationBlockFR",
            3238: "InformationBlockES",
            3314: "PageDPPaymentSelection",
            3434: "PageLINEIntegration",
            3576: "PageVerifyEmailLinkSender",
            3635: "hash-utils",
            3653: "PageUserAddress",
            3705: "AccountAddPhoneNumberV3",
            3731: "MallLandingPage",
            3760: "PageBroadcastLanding",
            3838: "RouteRedirectForSBrowser",
            3887: "PageAccountRedirect",
            3903: "MarketplacePaymentPage",
            3945: "UserAvatar",
            3981: "UserKyc",
            3998: "PageCheckout",
            4026: "PageCategory",
            4119: "OrderDetailPage",
            4154: "AccountAddPassword",
            4226: "metadata-v2-th",
            4227: "PageCheckoutExternal",
            4231: "InformationBlockCL",
            4406: "NotificationSummary",
            4427: "PCLazyFooter",
            4509: "SlsLogisticsAddressModal",
            4600: "address.MX-live-json",
            4638: "PageIframeDataPipe",
            4643: "CookieConsentBanner",
            4772: "UserCollectionPointV2",
            4868: "PageVerifyOTP",
            4985: "RouteEmpty",
            4990: "WebPushNotification",
            5010: "metadata-v1",
            5059: "address.PH-live-json",
            5358: "AccountChangePhoneNumberV3",
            5412: "RouteUnifiedLink",
            5432: "LoginByOTP",
            5437: "PageFlashSale",
            5454: "SignupKyc",
            5455: "PageRCVCollection",
            5544: "BannerSDKPlayground",
            5555: "InformationBlockAR",
            5562: "InformationBlockPL",
            5665: "PageUserEmail",
            5722: "PCSummaryNotificationContainer",
            5804: "InformationBlockCO",
            5871: "PageAccountMicroFEDemo2",
            5908: "RouteRedirectToHome",
            5939: "address.VN-live-json",
            5957: "ShopeeMart",
            5999: "PageGDPRCookieGuestSetting",
            6048: "PageSVSPaymentSelection",
            6053: "PageReportUser",
            6103: "AccountChangePassword",
            6159: "PageDownloadApp",
            6174: "LoginByWhatsappToken",
            6186: "address.TH_address_to_zip-en-live-json",
            6190: "MallSellingPoints",
            6235: "SignupByOTP",
            6288: "ResetPasswordByEmail",
            6446: "PageItemRatingsOld",
            6476: "sws",
            6550: "address.CL-live-json",
            6555: "AccountChangePhoneNumber",
            6602: "ShopeePlayPaymentSelectionPage",
            6661: "address.SG-live-json",
            6826: "OfficialShopPageHeader",
            6855: "Popup",
            6872: "UserToCDemoPage",
            6888: "PageShoppingCart",
            6938: "ItemCardCentralisation",
            6940: "UserLogisticsAddressModal",
            7097: "PageCustomKYCTW",
            7213: "UserKycBr",
            7260: "PageVerifyEmailLinkReceiver",
            7421: "PageAddressSelectionDemo",
            7442: "PurchaseWithPurchasePage",
            7467: "NebulaToast",
            7568: "address.TW-live-json",
            7591: "PageNotification",
            7639: "PageRedirectToFlashSaleSMart",
            7709: "InformationBlockID",
            7739: "ProgramForm",
            7820: "HotWordList",
            7834: "WebTrackerBridge",
            7887: "RouteSellerLink",
            7929: "address.MY-live-json",
            8013: "UserKycVn",
            8018: "PageAntiCrawlerTest",
            8061: "AccessibilityDemoPage",
            8167: "AccountChangePhoneNumberV2",
            8173: "PageIntegrationTWEInvoice",
            8328: "MartSellingPoints",
            8396: "PageUserPassword",
            8410: "PageVerifyLinkReceiver",
            8434: "InformationBlockVN",
            8610: "InformationBlockBR",
            8640: "SellingPoints",
            8699: "ShopBundleDealLandingPage",
            8713: "PageIntegrationAddressCallback",
            8736: "address.ID-live-json",
            8799: "address.ID_address_to_zip-live-json",
            8866: "PageSearch",
            8868: "InformationBlockMY",
            8898: "ShopSearchPage",
            9005: "address.TW_zip_to_address-live-json",
            9099: "FooterInfoBlockPreview",
            9100: "EventPage",
            9104: "AccountAddPhoneNumber",
            9116: "PageUserGDPR",
            9148: "PageIdentityMicroFEDemo2",
            9159: "PageIdentityMicroFEDemo1",
            9167: "PageNotFound",
            9202: "DebugInformation",
            9214: "PageAuthenticationShopeePay",
            9226: "PageVerifyLinkSender",
            9235: "hash",
            9239: "SlsPageIntegrationAddressCallback",
            9283: "ItemCardCentralisationDSL",
            9312: "SocialBindAccount",
            9361: "PageIdentityDemo",
            9394: "HighEndBrandHeader",
            9424: "PageBrandSale",
            9471: "CookieConsentBannerV2",
            9565: "InformationBlockTW",
            9582: "LoginByPassword",
            9616: "PageVerifyQr",
            9668: "PageAccountMicroFEDemo1",
            9698: "PageLKPPSSO",
            9741: "PdpBundleDealLandingPage",
            9806: "InformationBlockPH",
            9866: "ComponentBuilderPlayground",
            9949: "PageDevtool",
            9955: "phone-parser"
        })[e] || e) + "." + ({
            36: "c7d8484268e7172c",
            170: "e1132970c68ecb64",
            188: "9a79a8deb4721e3e",
            215: "97bcd00c105d362e",
            226: "25d62dc502e7ca0b",
            271: "1211b6404c12a39b",
            277: "5ae14319c93c05c8",
            294: "2bd1427103160550",
            379: "12e908db7c00ce23",
            421: "0b1c2af480fbad54",
            423: "3370a44fd63c7a22",
            447: "9abff1bbc04c4e5b",
            510: "0cdf3d25e3e1e40f",
            535: "af75d8524f688018",
            571: "8429bf44cdbe903d",
            627: "c26100d002c8e54a",
            703: "bc7cd0b44b84eff9",
            713: "519d7ce1d2b1fbb7",
            736: "d472cd69747c2d67",
            751: "dcc4033f9d72f354",
            797: "3249e05da5349392",
            816: "b36eabed2b6a2397",
            845: "6355d6392551db85",
            857: "81e8f48282b3e951",
            879: "df132277f321bca6",
            896: "786fb02379e4e9dd",
            906: "76011441d38402a8",
            951: "0b8427f44b228370",
            970: "b412d41db3ef0b0d",
            1070: "b9225e016b1501ed",
            1077: "18f0f5a7afd8270e",
            1094: "d9089a0afc57231b",
            1103: "08fa3f135677b17a",
            1111: "2a241af4cac05453",
            1191: "716919a684ac25b1",
            1204: "9f5dbe80db661892",
            1349: "1664e1ee893eaf29",
            1362: "0c9e79da7f9c7c1a",
            1422: "0e5ac7b3bedf17fe",
            1451: "f24a177e3cf798ad",
            1474: "7119385e8d9f8f64",
            1510: "efe0a6e9d0eea844",
            1512: "95daf7d27669161a",
            1545: "05ece79b824c8867",
            1677: "b636b3980d43f28f",
            1715: "34b8b375305949f1",
            1747: "5828d82510bcc62b",
            1751: "dd9aaf8863b7e2db",
            1806: "20bbaeedca3d3e63",
            1824: "2718397e33997f31",
            1854: "ef2f08b0061a8b4b",
            1885: "eebb353c059c7f39",
            1912: "009d131032dbcdcb",
            1928: "791c2f1f6ead27ff",
            1993: "f570663dd333b320",
            2027: "c2116f29f815018e",
            2052: "bb0f16187cc44d7a",
            2059: "2f08ff724aad8613",
            2062: "41f80c1579c01824",
            2097: "3a781815880ac658",
            2196: "6cdc3d17ded79302",
            2201: "5d219d35363be12b",
            2282: "5b761c22565dfd2c",
            2317: "a7c93acde3f19fd9",
            2326: "8558744963286cac",
            2361: "fef3eaefa143bc70",
            2380: "4d216c144e3efb67",
            2396: "350e4d1fb8d79c81",
            2402: "fe87084041ab6179",
            2413: "f06d037727407ff8",
            2422: "e2ca312c80da3e2d",
            2474: "c0769ea862f0ec79",
            2519: "127f804a29fd8471",
            2572: "64dd4a083da1c825",
            2591: "f919dc661c038f57",
            2771: "21e584588ec9ac86",
            2818: "a049131f768e6069",
            2826: "340e312afc548bb7",
            2863: "f56a599b001a6536",
            2898: "24ce8f54b3249529",
            2926: "5419a1d05e0478c1",
            2935: "f731afde12f51cd6",
            2954: "7965ddd8dea6f2d0",
            2987: "2260e731eee9418a",
            3037: "4b30ebbcfd12a205",
            3040: "1ffffd3b41d07fe6",
            3058: "2d25379a41570d70",
            3060: "b666284fc76e93bf",
            3092: "bacb4a8cb1c78610",
            3113: "11e50bdadc8cbcd7",
            3121: "6c2e1aac2a5687cc",
            3165: "075316843db97c5c",
            3174: "7d5591a32c3c16c8",
            3211: "86040a2800bfaa08",
            3213: "263ed13f4476d994",
            3214: "075a81a579dafade",
            3238: "93b66aebd0e90266",
            3243: "55ccfabfd9f2249e",
            3286: "ef3cca1ffd655cf4",
            3314: "8f199026c279c68b",
            3434: "5af6f0bbd3079f61",
            3576: "1549e77bb5433230",
            3635: "e115e0d4c2cdb405",
            3653: "83c4452dc998e88b",
            3671: "cfc68fa3294ca007",
            3705: "e501448fb76c8e0f",
            3731: "4dffa73eaf87e7b9",
            3760: "000bb5a82601356a",
            3838: "837f5fdd9afa1152",
            3887: "e2e5ff629606f533",
            3903: "62b55da03bfa90a3",
            3926: "b0d0fd5d649ee0d2",
            3945: "368e2c222a81dad9",
            3981: "288cf771677bd9f8",
            3983: "aa64bd5dfd0381a4",
            3998: "8c73843979ba1c0c",
            4026: "dd732d7202a03259",
            4062: "89b0644a04c38ae0",
            4119: "f3f79f5c59cdea87",
            4154: "8a5c2e0724e44adc",
            4226: "d6bc63e888a0c783",
            4227: "189a10ba0165be25",
            4231: "42f60ab747f397e8",
            4289: "5324749dc83e4031",
            4405: "1c7ee232645ff20d",
            4406: "f32ab2d6f7ef4631",
            4427: "30fc3103a701b27e",
            4509: "054c7fe839b974eb",
            4516: "5f12f035f51d86fc",
            4600: "749a8bec7fd4da6f",
            4638: "678a0dac09f8f9d9",
            4643: "63a0838b5a882de7",
            4649: "cc369d9f3b0f3d7a",
            4669: "920b8c6ad2fcde6e",
            4739: "8df8b7ca23b2fe86",
            4772: "ec7487b640529d7a",
            4784: "2f91d2fbb6956da7",
            4868: "c8e034ec16e3f435",
            4942: "34b42b7bd2d0f526",
            4985: "b76361c5de0650d5",
            4990: "5ae7eaa9f362cbc0",
            5010: "ca2dc837be7302d5",
            5019: "56358dc6d6d5005f",
            5059: "18da5cdd05f8f664",
            5099: "8f70507e0c96ddd6",
            5136: "ec02dd927c2f2ba6",
            5167: "2df052b23ecfd90a",
            5358: "f1143b1fe7b1301b",
            5412: "eeeb8a502e71ad51",
            5416: "0e8e822c591157ba",
            5432: "c72125c1bf5c7d48",
            5437: "32bbb20e7f1c9568",
            5454: "354c56ddfa23936c",
            5455: "734ffe3f922a974f",
            5468: "8f6b7d078241c549",
            5478: "0fa292583bffde61",
            5520: "57f5214226074c11",
            5544: "3b0d1245e54418b0",
            5548: "76c6f8b31650a8a8",
            5555: "a4526d80fc8f146e",
            5562: "66a5c4133bfa5448",
            5665: "cc818ac36de546df",
            5722: "0952942cad72a6fb",
            5804: "cae4ea7b14be00b5",
            5871: "0f3a1d859e632c74",
            5908: "2c04791153cbc04f",
            5909: "f9053bd330f3f693",
            5939: "2a01a6a2c236ff31",
            5950: "afaa5cd2bbc95f4d",
            5957: "7f89e175ade8de5e",
            5974: "80faa71f4977be96",
            5999: "74185e97a5bd482e",
            6024: "b6ea101fde47478d",
            6048: "18c563936d9cb644",
            6053: "904f8740b43d174a",
            6103: "9c332d98eb0f098b",
            6159: "21ea91f548ac710c",
            6174: "90c956fb7620160a",
            6186: "e4efc4817b6a1103",
            6190: "4f1e3a93049e4d70",
            6235: "df5bec393f67be94",
            6288: "b090491eef63045b",
            6446: "7296e7751b5f31c8",
            6460: "7898aa4d45edf0c7",
            6476: "c01bc744b20d5576",
            6485: "def818aaf75144c5",
            6503: "4fc0c860b3f67641",
            6541: "363c547c2518a12d",
            6548: "93d6b077e388eb67",
            6550: "f4805cce8cc1e057",
            6555: "67684c157336237e",
            6602: "c769c50af5ba5b21",
            6661: "ab87440c162042e2",
            6778: "0fea9d4490095dd2",
            6786: "2b09ba9a296e8da5",
            6826: "b73cdd97e3f093b9",
            6855: "5d812bc2d75e48ee",
            6872: "574c5b3798f970a9",
            6888: "1d5dd19062ce4a33",
            6938: "eb1cdc1ecaeee785",
            6940: "54fab6c020f82678",
            7086: "301d1a86f605a1f1",
            7097: "6047de86fbfc0167",
            7205: "ce5910282d3539a7",
            7213: "0fc8717036e7caff",
            7260: "c3399dc486d4fa98",
            7273: "b4f8de273ff714f8",
            7304: "662641b0a044b585",
            7373: "13ec324d617ce651",
            7406: "3f080d39b1533fc2",
            7421: "9525045c20de3f50",
            7442: "d6adde52a54317cf",
            7467: "4c19bf0ed632d197",
            7568: "4841865d1c6e3b9d",
            7591: "c82e61cfb3f60f16",
            7639: "2c9844fe2ab06320",
            7676: "8e060c5811610475",
            7709: "285a3b78a82bf448",
            7725: "f7c07f38ae56eed3",
            7739: "ff9689b9e3ed382a",
            7741: "b2baf5e9e8d15550",
            7746: "76ce2f000cda2860",
            7820: "8d43e98b5a4c071f",
            7821: "5752185cdffe44db",
            7834: "730201d8e4dcff3e",
            7887: "912865e26e23be12",
            7896: "9a813e53500678c1",
            7929: "578767fe19058d0a",
            8013: "3afc74cc9af43a75",
            8018: "3e1f5d8f67bb39b5",
            8061: "91793aba5eed19fa",
            8164: "2f551a3621774ba1",
            8167: "243bbdc6b0b26d72",
            8173: "95b6375300e8415a",
            8328: "fec913ba8a9b830b",
            8396: "a41368ef2c295a99",
            8410: "de0de6f336f8f6fe",
            8434: "5f4ab3eabff8c7f0",
            8467: "f11c14a14e02ccde",
            8473: "61f215c628e33302",
            8487: "e3e05242ea81a33c",
            8610: "502cb49fdc26bf3e",
            8640: "007450eababde5ba",
            8699: "0518e0f0ecb5873f",
            8713: "b86d28f3450eedae",
            8736: "d4be1efdec93dab4",
            8799: "96e88811e8a1f851",
            8802: "7261bf0014389f02",
            8853: "ed2d619647e5b9c5",
            8866: "7120f51a2d94bfe1",
            8868: "ff55e97873f49293",
            8873: "de0a9083a4d3973f",
            8898: "d5e2edb1efdfb382",
            8906: "a074e790daaaf2f0",
            9005: "1d790236616b6c56",
            9099: "312ac2e2ba260eef",
            9100: "a6ef5f5958e19c64",
            9104: "1a58e38f00c54ead",
            9116: "a4089d445287881d",
            9148: "5bcd7a6ec9a452b3",
            9149: "ead95efc23956037",
            9150: "fd5d5bb39685cbdc",
            9159: "05749d54562896cd",
            9167: "f293ee99d6b14689",
            9200: "51d3421f0068835b",
            9202: "07388f6304af2130",
            9214: "91205aeab179eabe",
            9226: "d344d1af22dd636d",
            9235: "951eb7a4ee46a6e9",
            9239: "5f744402f7bd6ea5",
            9283: "b3c9e00a02ee85b0",
            9312: "fbdb30fc2649ebbf",
            9361: "0e64264fec38b7ff",
            9394: "bfea8c06a7ced9bb",
            9411: "e8b48d7cc32c3a46",
            9424: "4b16f5df7ad4eb4b",
            9447: "2f6e31fa54b6f61b",
            9471: "bb9889443cd73339",
            9565: "7c1888d1ab25a35e",
            9582: "19b1ea475d0eca26",
            9616: "6755dbb0d7d3d2b7",
            9654: "f7ed3fa875b56cab",
            9668: "5249c88fab46e7ad",
            9698: "74552867896c14e7",
            9710: "6edb59d0c7056647",
            9741: "7bbce5e689d4bac0",
            9778: "70ede5fc1c3fa1e4",
            9806: "af0e06d63b0f80e0",
            9866: "1efe77d6a748f239",
            9910: "a2ef33ac2b4d8ba1",
            9949: "07460ada3ac9681d",
            9955: "2fdbae92eeef37c9"
        })[e] + ".2023.js",
        c.miniCssF = e => "" + e + "." + ({
            170: "88a6070de167ed5a",
            188: "fadd9395c2fbec36",
            215: "1fd2d23f4acb3920",
            379: "e822639e4dcdb4d7",
            447: "d695791be73410b6",
            535: "62a25ec4ed53b712",
            571: "954a04d6e07eb0ca",
            713: "c8808d8d7b985540",
            751: "ba55b6409f920c45",
            797: "1b1080d03998842e",
            816: "2086669ccf8323c7",
            879: "d306f88821ff5428",
            896: "0508b5f32d99fcff",
            951: "9d7c95b2fdefa1a2",
            1077: "bd46660da99937a2",
            1094: "a41d136d12529f56",
            1103: "daed0cf9f74917d5",
            1191: "5f4f1ec796e43c0c",
            1349: "1e114b62325da306",
            1422: "4d2f741afd063871",
            1545: "c7c49221961dadd8",
            1677: "7f9f8549ea29edd9",
            1715: "ee1eede054662bf2",
            1751: "2883c4afd2123bb7",
            1824: "c86f71dfb2f574d5",
            1912: "8b42034d749f1bee",
            2027: "83183c75bc0edda4",
            2052: "b840e256a914f6dd",
            2059: "7e750c566441d4fc",
            2062: "a250483cad8b8c8c",
            2097: "92a94e0d87da5a15",
            2317: "e3994a8202436ea0",
            2361: "77f6589bf2ae3526",
            2380: "0175305dbea50da2",
            2396: "71c47dbe017a2e02",
            2474: "038c3bc9969ca23f",
            2771: "57c2f6560f9e4bb7",
            2818: "e9b0c15fe3cbc9a6",
            2826: "c86be8e3451743be",
            2926: "8995c62ede3ad8c2",
            2935: "24049d8ad4d952a1",
            2954: "0d560e57f548efdf",
            2987: "9aadd9f7fe5bb265",
            3092: "18f5f3761777217e",
            3174: "2a986bdd69e2f197",
            3211: "605a12d60726596f",
            3213: "d174c151c959fe73",
            3214: "2fa019d5744dcc40",
            3238: "576a3471efe50d10",
            3243: "125d5292bbaf8bfd",
            3286: "a7c2ea1550c98531",
            3314: "cc541d72ca42ca84",
            3434: "975f8ed42c5d9cce",
            3653: "ef839615843152a6",
            3705: "8912aa25317024f2",
            3731: "77455c08d55f7148",
            3760: "8ac55975d72c25ae",
            3903: "18aec3dfc6611df6",
            3926: "0877b9f755f24cb9",
            3945: "61902ad76360e1c6",
            3983: "4415ebb5b213c2fa",
            4062: "35ae23885fe8cfc4",
            4154: "51bcca99e09e7c69",
            4231: "a480e6f124b20dfa",
            4406: "4ebf23ccf25208f4",
            4427: "55d7bb7a279aeec8",
            4516: "ddce2e56b7412977",
            4643: "304c01012f996f49",
            4649: "3e816e18a8b94221",
            4669: "59648007a9b8a134",
            4739: "fd0f1f1371725afc",
            4748: "43437b9f9a35da1c",
            4772: "0bb5c229939a1854",
            4868: "8eecbf0cd5daa1f8",
            5358: "6a9f91eab3fbfffc",
            5432: "3912197750556ae5",
            5454: "919dd7a879610313",
            5455: "35e455a9708f8306",
            5468: "06f021215d6a1fc5",
            5520: "32c0cabe5da2173d",
            5544: "c5b875b83240bcd5",
            5548: "6741b120cecee0ef",
            5555: "f59279b38c4dd00a",
            5562: "dc7a627b8f8bde30",
            5665: "18d55fa3cd3faa3e",
            5722: "dd03087786e7207b",
            5804: "cc6bb2393b857817",
            5999: "147c9a2ac60a57a7",
            6024: "a7d6c299afff2fbf",
            6048: "d33ab3b3681f3ff1",
            6053: "42fe2846ac50d416",
            6103: "c83446b8a428a623",
            6159: "4d2f741afd063871",
            6190: "8cd4ae108b2defc5",
            6235: "f89b44f1e905d8e0",
            6288: "24677e0b46013f54",
            6541: "f5d79a317be102a5",
            6555: "d9d1deacd251f663",
            6602: "c86f71dfb2f574d5",
            6826: "d00a6b3c812290c7",
            6872: "4b7dfe5db65d321f",
            6940: "b81155746cc97877",
            7086: "35540a8b81cbc521",
            7097: "17b3d1a6d07cb7aa",
            7205: "04c5fa0a3194a609",
            7213: "75909819696e1d39",
            7304: "9ad7155e93e947a8",
            7406: "31345f287f5c24ea",
            7421: "10c23ef1ccfb90ef",
            7442: "954a04d6e07eb0ca",
            7467: "6896b4a47f642286",
            7591: "500982a8f8bcb06b",
            7676: "e286a4b416fc974b",
            7709: "e1d109600a795ce3",
            7746: "4c9a8705dd855a68",
            7820: "919c7fbc0fdcf58d",
            7821: "70477c1360bde9e0",
            8013: "3c22ffa2acdc9574",
            8018: "501fdbc01b54336b",
            8061: "b89aeaccfa79669b",
            8167: "ea80fa0339f41d3b",
            8173: "f7e9c21e7bba9d49",
            8328: "fa897cdd79884751",
            8365: "45a7b1014cd22182",
            8396: "203e0645d9c9a2cf",
            8434: "3fcce0d5de88229a",
            8473: "53867995f727e8db",
            8610: "9c76378bfff741ac",
            8713: "72d1b8c0b9cf00df",
            8853: "c860dd919fd70aad",
            8868: "a2e19d909b17a4d2",
            8906: "44e12cd12e69bbeb",
            9104: "d36273a9ca034261",
            9116: "5907749ee4373059",
            9149: "26734bd4c2c3790f",
            9150: "d01d8616787952cc",
            9167: "f411c946be9f649b",
            9200: "8952039b63e222da",
            9202: "25d717c1a1900eb9",
            9214: "163060e8da359163",
            9312: "0d92b59ff2cc6cf5",
            9361: "517fd28d7248b843",
            9394: "86bc593dbb952076",
            9447: "a738a2dc843d48db",
            9471: "4106f8b167ba6929",
            9565: "61662aabe41b6f2d",
            9582: "a317aaad501ff366",
            9698: "52d0797e8e631f05",
            9710: "e508528857d0f900",
            9806: "febd9339f741e651",
            9865: "bc8471de32675e7a",
            9866: "42c070e81632b601",
            9910: "9b17453bbaa5927a",
            9949: "b6a7e0a702f7b822"
        })[e] + ".2023.css",
        c.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || Function("return this")()
            } catch {
                if ("object" == typeof window)
                    return window
            }
        }(),
        c.hmd = e => ((e = Object.create(e)).children || (e.children = []),
            Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: () => {
                    throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                }
            }),
            e),
        c.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a),
        (() => {
            var e = {}
                , a = "shopee-pc:";
            c.l = (d, f, b, o) => {
                if (e[d])
                    return void e[d].push(f);
                if (void 0 !== b)
                    for (var r, t, n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                        var s = n[i];
                        if (s.getAttribute("src") == d || s.getAttribute("data-webpack") == a + b) {
                            r = s;
                            break
                        }
                    }
                r || (t = !0,
                    (r = document.createElement("script")).charset = "utf-8",
                    r.timeout = 120,
                    c.nc && r.setAttribute("nonce", c.nc),
                    r.setAttribute("data-webpack", a + b),
                    r.src = d),
                    e[d] = [f];
                var l = (a, c) => {
                    r.onerror = r.onload = null,
                        clearTimeout(p);
                    var f = e[d];
                    if (delete e[d],
                        r.parentNode && r.parentNode.removeChild(r),
                        f && f.forEach(e => e(c)),
                        a)
                        return a(c)
                }
                    , p = setTimeout(l.bind(null, void 0, {
                        type: "timeout",
                        target: r
                    }), 12e4);
                r.onerror = l.bind(null, r.onerror),
                    r.onload = l.bind(null, r.onload),
                    t && document.head.appendChild(r)
            }
        }
        )(),
        c.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        c.nmd = e => (e.paths = [],
            e.children || (e.children = []),
            e),
        c.p = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/",
        c.f.microfeF = (e, a) => {
            var d = {
                421: [14],
                879: [19, 20, 21],
                2059: [23],
                2062: [23],
                2422: [11],
                3760: [23],
                4289: [11],
                5358: [23],
                5665: [23],
                5722: [25],
                6174: [23],
                6938: [25],
                7591: [23, 25],
                7896: [4],
                8164: [22],
                8167: [23],
                8396: [23],
                9283: [24],
                9312: [23],
                9582: [23]
            }[e];
            d && d.forEach(e => {
                a.push(c.microfeM(e))
            }
            )
        }
        ,
        (() => {
            if ("undefined" != typeof document) {
                var e = {
                    7311: 0
                };
                c.f.miniCss = (a, d) => {
                    e[a] ? d.push(e[a]) : 0 !== e[a] && ({
                        170: 1,
                        188: 1,
                        215: 1,
                        379: 1,
                        447: 1,
                        535: 1,
                        571: 1,
                        713: 1,
                        751: 1,
                        797: 1,
                        816: 1,
                        879: 1,
                        896: 1,
                        951: 1,
                        1077: 1,
                        1094: 1,
                        1103: 1,
                        1191: 1,
                        1349: 1,
                        1422: 1,
                        1545: 1,
                        1677: 1,
                        1715: 1,
                        1751: 1,
                        1824: 1,
                        1912: 1,
                        2027: 1,
                        2052: 1,
                        2059: 1,
                        2062: 1,
                        2097: 1,
                        2317: 1,
                        2361: 1,
                        2380: 1,
                        2396: 1,
                        2474: 1,
                        2771: 1,
                        2818: 1,
                        2826: 1,
                        2926: 1,
                        2935: 1,
                        2954: 1,
                        2987: 1,
                        3092: 1,
                        3174: 1,
                        3211: 1,
                        3213: 1,
                        3214: 1,
                        3238: 1,
                        3243: 1,
                        3286: 1,
                        3314: 1,
                        3434: 1,
                        3653: 1,
                        3705: 1,
                        3731: 1,
                        3760: 1,
                        3903: 1,
                        3926: 1,
                        3945: 1,
                        3983: 1,
                        4062: 1,
                        4154: 1,
                        4231: 1,
                        4406: 1,
                        4427: 1,
                        4516: 1,
                        4643: 1,
                        4649: 1,
                        4669: 1,
                        4739: 1,
                        4748: 1,
                        4772: 1,
                        4868: 1,
                        5358: 1,
                        5432: 1,
                        5454: 1,
                        5455: 1,
                        5468: 1,
                        5520: 1,
                        5544: 1,
                        5548: 1,
                        5555: 1,
                        5562: 1,
                        5665: 1,
                        5722: 1,
                        5804: 1,
                        5999: 1,
                        6024: 1,
                        6048: 1,
                        6053: 1,
                        6103: 1,
                        6159: 1,
                        6190: 1,
                        6235: 1,
                        6288: 1,
                        6541: 1,
                        6555: 1,
                        6602: 1,
                        6826: 1,
                        6872: 1,
                        6940: 1,
                        7086: 1,
                        7097: 1,
                        7205: 1,
                        7213: 1,
                        7304: 1,
                        7406: 1,
                        7421: 1,
                        7442: 1,
                        7467: 1,
                        7591: 1,
                        7676: 1,
                        7709: 1,
                        7746: 1,
                        7820: 1,
                        7821: 1,
                        8013: 1,
                        8018: 1,
                        8061: 1,
                        8167: 1,
                        8173: 1,
                        8328: 1,
                        8365: 1,
                        8396: 1,
                        8434: 1,
                        8473: 1,
                        8610: 1,
                        8713: 1,
                        8853: 1,
                        8868: 1,
                        8906: 1,
                        9104: 1,
                        9116: 1,
                        9149: 1,
                        9150: 1,
                        9167: 1,
                        9200: 1,
                        9202: 1,
                        9214: 1,
                        9312: 1,
                        9361: 1,
                        9394: 1,
                        9447: 1,
                        9471: 1,
                        9565: 1,
                        9582: 1,
                        9698: 1,
                        9710: 1,
                        9806: 1,
                        9865: 1,
                        9866: 1,
                        9910: 1,
                        9949: 1
                    })[a] && d.push(e[a] = (e => new Promise((a, d) => {
                        var f = c.miniCssF(e)
                            , b = c.p + f;
                        if (((e, a) => {
                            for (var c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) {
                                var f = c[d]
                                    , b = f.getAttribute("data-href") || f.getAttribute("href");
                                if ("stylesheet" === f.rel && (b === e || b === a))
                                    return f
                            }
                            for (var o = document.getElementsByTagName("style"), d = 0; d < o.length; d++) {
                                var f = o[d]
                                    , b = f.getAttribute("data-href");
                                if (b === e || b === a)
                                    return f
                            }
                        }
                        )(f, b))
                            return a();
                        ((e, a, d, f, b) => {
                            var o = document.createElement("link");
                            return o.rel = "stylesheet",
                                o.type = "text/css",
                                c.nc && (o.nonce = c.nc),
                                o.onerror = o.onload = c => {
                                    if (o.onerror = o.onload = null,
                                        "load" === c.type)
                                        f();
                                    else {
                                        var d = c && c.type
                                            , r = c && c.target && c.target.href || a
                                            , t = Error("Loading CSS chunk " + e + ` failed.
(` + d + ": " + r + ")");
                                        t.name = "ChunkLoadError",
                                            t.code = "CSS_CHUNK_LOAD_FAILED",
                                            t.type = d,
                                            t.request = r,
                                            o.parentNode && o.parentNode.removeChild(o),
                                            b(t)
                                    }
                                }
                                ,
                                o.href = a,
                                document.head.appendChild(o)
                        }
                        )(e, b, 0, a, d)
                    }
                    ))(a).then(() => {
                        e[a] = 0
                    }
                        , c => {
                            throw delete e[a],
                            c
                        }
                    ))
                }
            }
        }
        )(),
        (() => {
            var e = {
                7311: 0
            };
            c.f.j = (a, d) => {
                var f = c.o(e, a) ? e[a] : void 0;
                if (0 !== f)
                    if (f)
                        d.push(f[2]);
                    else if (/^((83|98)65|4748|7311)$/.test(a))
                        e[a] = 0;
                    else {
                        var b = new Promise((c, d) => f = e[a] = [c, d]);
                        d.push(f[2] = b);
                        var o = c.p + c.u(a)
                            , r = Error();
                        c.l(o, d => {
                            if (c.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0),
                                f)) {
                                var b = d && ("load" === d.type ? "missing" : d.type)
                                    , o = d && d.target && d.target.src;
                                r.message = "Loading chunk " + a + ` failed.
(` + b + ": " + o + ")",
                                    r.name = "ChunkLoadError",
                                    r.type = b,
                                    r.request = o,
                                    f[1](r)
                            }
                        }
                            , "chunk-" + a, a)
                    }
            }
                ,
                c.O.j = a => 0 === e[a];
            var a = (a, d) => {
                var f, b, [o, r, t] = d, n = 0;
                if (o.some(a => 0 !== e[a])) {
                    for (f in r)
                        c.o(r, f) && (c.m[f] = r[f]);
                    if (t)
                        var i = t(c)
                }
                for (a && a(d); n < o.length; n++)
                    b = o[n],
                        c.o(e, b) && e[b] && e[b][0](),
                        e[b] = 0;
                return c.O(i)
            }
                , d = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || [];
            d.forEach(a.bind(null, 0)),
                d.push = a.bind(null, d.push.bind(d))
        }
        )(),
        c.nc = void 0
}
)();
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-static/_/webpack-runtime.8628b58cfb8aad62.2023.js.map
