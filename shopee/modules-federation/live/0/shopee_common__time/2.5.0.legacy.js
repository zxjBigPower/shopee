(self.mfeModules = self.mfeModules || []).push(["shopee_common__time", ["Platform"], e => () => Promise.resolve((() => {
    "use strict";
    var e = {
        d: (t, a) => {
            for (var r in a)
                e.o(a, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: a[r]
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
            Format: () => oe,
            addDuration: () => h,
            addUnit: () => c,
            convertUnit: () => p,
            durationLocales: () => v,
            endOf: () => g,
            formatDuration: () => V,
            formatTime: () => re,
            startOf: () => y,
            timeBetween: () => f,
            timeLocales: () => ne
        });
    const a = Object.assign.bind()
        , r = ["order", "dateLiteral", "dateLiteralWord", "timeLiteral", "separator", "weekLiteral", "msLiteral"]
        , o = {
            y: "year",
            M: "month",
            w: "week",
            d: "day",
            h: "hour",
            m: "minute",
            s: "second",
            S: "millisecond"
        }
        , n = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"]
        , s = ["numeric", "2-digit", "short", "long"]
        , i = [365, 30, 7, 24, 60, 60, 1e3, 1];
    function u(e) {
        return !isNaN(parseInt(e, 10))
    }
    function l(e) {
        return n.includes(e)
    }
    function m(e) {
        return e instanceof Date && !isNaN(e.valueOf())
    }
    function d(e, t = 2) {
        return ("0".repeat(t) + String(e)).slice(-t)
    }
    function h(e, t) {
        let a = new Date(e);
        for (let r = n.length; r > 0; r--) {
            const e = n[r - 1];
            t[e] && (a = c(a, t[e], e))
        }
        return a
    }
    function c(e, t, a) {
        const r = new Date(e);
        if (!m(r) || !u(t) || !l(a))
            throw new TypeError("Invalid number or unit");
        switch (a) {
            case "millisecond":
                r.setMilliseconds(r.getMilliseconds() + t);
                break;
            case "second":
                r.setSeconds(r.getSeconds() + t);
                break;
            case "minute":
                r.setMinutes(r.getMinutes() + t);
                break;
            case "hour":
                r.setHours(r.getHours() + t);
                break;
            case "day":
                r.setDate(r.getDate() + t);
                break;
            case "week":
                r.setDate(r.getDate() + 7 * t);
                break;
            case "year":
                t *= 12;
            case "month":
                const e = r.getDate();
                r.setMonth(r.getMonth() + t + 1, 0),
                    r.setDate(Math.min(e, r.getDate()))
        }
        return r
    }
    function y(e, t, a = {
        startDay: 1
    }) {
        const r = new Date(t);
        if (!l(e) || !m(r) || !u(a.startDay))
            throw new TypeError("Invalid unit or date or start day");
        const o = r.getDay()
            , n = r.getDate();
        switch (e) {
            case "year":
                r.setMonth(0);
            case "month":
                r.setDate(1);
            case "week":
            case "day":
                r.setHours(0);
            case "hour":
                r.setMinutes(0);
            case "minute":
                r.setSeconds(0);
            case "second":
                r.setMilliseconds(0)
        }
        if ("week" === e) {
            const e = (o - a.startDay + 7) % 7;
            r.setDate(n - e)
        }
        return r
    }
    function g(e, t, a = {
        startDay: 1
    }) {
        const r = new Date(t);
        if (!l(e) || !m(r) || !u(a.startDay))
            throw new TypeError("Invalid unit or date or start day");
        const o = r.getDay()
            , n = r.getDate();
        switch (e) {
            case "year":
                r.setMonth(11);
            case "month":
                r.setMonth(r.getMonth() + 1, 0);
            case "week":
            case "day":
                r.setHours(23);
            case "hour":
                r.setMinutes(59);
            case "minute":
                r.setSeconds(59);
            case "second":
                r.setMilliseconds(999)
        }
        if ("week" === e) {
            const e = (o - a.startDay + 7) % 7;
            r.setDate(n - e + 6)
        }
        return r
    }
    function p(e, t, a = "millisecond") {
        if (!u(e) || !l(t) || !l(a))
            throw new TypeError("Invalid unit or value");
        if (t === a)
            return e;
        const r = n.indexOf(t)
            , o = n.indexOf(a)
            , s = o - r > 0 ? 1 : -1;
        if (r + o === 1)
            return e * 12 ** s;
        e *= (r < 3 ? i[r] : 1) / (o < 3 ? i[o] : 1);
        const m = Math.max(Math.min(r, o), 3)
            , d = Math.max(r, o, 3);
        return i.slice(m, d).reduce(((e, t) => e * t ** s), e)
    }
    function f(e, t, a = Date.now(), r = !1) {
        if (t = new Date(t),
            a = new Date(a),
            !m(t) || !m(a) || !l(e))
            throw new TypeError("Invalid unit or dates");
        const o = p(+t - +a, "millisecond", e);
        return r ? o > 0 ? Math.ceil(o) : Math.floor(o) : o
    }
    const w = {
        separator: " ",
        suffix: ["# ago", "in #"],
        year: ["a year", "# year", "# years"],
        month: ["a month", "# month", "# months"],
        week: ["a week", "# week", "# weeks"],
        day: ["a day", "# day", "# days"],
        hour: ["an hour", "# hour", "# hours"],
        minute: ["a minute", "# minute", "# minutes"],
        second: ["a few seconds", "# second", "# seconds"],
        millisecond: ["", ""]
    }
        , S = {
            separator: " ",
            suffix: ["hace #", "en #"],
            year: ["un año", "# año", "# años"],
            month: ["un mes", "# mes", "# meses"],
            week: ["una semana", "# semana", "# semanas"],
            day: ["un día", "# día", "# días"],
            hour: ["una hora", "# hora", "# horas"],
            minute: ["un minuto", "# minuto", "# minutos"],
            second: ["unos pocos segundos", "# segundo", "# segundos"],
            millisecond: ["", ""]
        }
        , b = a({}, S, {
            second: ["hace unos segundos", "# segundo", "# segundos"]
        });
    var k = Object.freeze({
        __proto__: null,
        default: w,
        CN: {
            separator: "",
            suffix: ["#前", "#内"],
            year: ["一年", "#年"],
            month: ["一个月", "#个月"],
            week: ["一周", "#周"],
            day: ["一天", "#天"],
            hour: ["一小时", "#小时"],
            minute: ["一分钟", "#分钟"],
            second: ["几秒", "#秒"],
            millisecond: ["", ""]
        },
        ID: {
            separator: " ",
            suffix: ["# yang lalu", "dalam #"],
            year: ["setahun", "# tahun"],
            month: ["sebulan", "# bulan"],
            week: ["seminggu", "# minggu"],
            day: ["sehari", "# hari"],
            hour: ["sejam", "# jam"],
            minute: ["semenit", "# menit"],
            second: ["beberapa detik", "# detik"],
            millisecond: ["", ""]
        },
        MY: {
            separator: " ",
            suffix: ["# yang lepas", "dalam #"],
            year: ["setahun", "# tahun"],
            month: ["sebulan", "# bulan"],
            week: ["seminggu", "# minggu"],
            day: ["sehari", "# hari"],
            hour: ["sejam", "# jam"],
            minute: ["seminit", "# minit"],
            second: ["beberapa saat", "# saat"],
            millisecond: ["", ""]
        },
        PH: w,
        SG: w,
        TH: {
            separator: " ",
            suffix: ["#ที่แล้ว", "อีก #"],
            year: ["1 ปี", "# ปี"],
            month: ["1 เดือน", "# เดือน"],
            week: ["1 สัปดาห์", "# สัปดาห์"],
            day: ["1 วัน", "# วัน"],
            hour: ["1 ชั่วโมง", "# ชั่วโมง"],
            minute: ["1 นาที", "# นาที"],
            second: ["ไม่กี่วินาที", "# วินาที"],
            millisecond: ["", ""]
        },
        TW: {
            separator: "",
            suffix: ["#前", "#內"],
            year: ["一年", "#年"],
            month: ["一個月", "#個月"],
            week: ["一週", "#週"],
            day: ["一天", "#天"],
            hour: ["一小時", "#小時"],
            minute: ["一分鐘", "#分鐘"],
            second: ["幾秒", "#秒"],
            millisecond: ["", ""]
        },
        VN: {
            separator: " ",
            suffix: ["# trước", "# tới"],
            year: ["một năm", "# năm"],
            month: ["một tháng", "# tháng"],
            week: ["một tuần", "# tuần"],
            day: ["một ngày", "# ngày"],
            hour: ["một giờ", "# giờ"],
            minute: ["một phút", "# phút"],
            second: ["vài giây", "# giây"],
            millisecond: ["", ""]
        },
        BR: {
            separator: " ",
            suffix: ["há #", "em #"],
            year: ["um ano", "# ano", "# anos"],
            month: ["um mês", "# mês", "# meses"],
            week: ["uma semana", "# semana", "# semanas"],
            day: ["um dia", "# dia", "# dias"],
            hour: ["uma hora", "# hora", "# horas"],
            minute: ["um minuto", "# minuto", "# minutos"],
            second: ["poucos segundos", "# segundo", "# segundos"],
            millisecond: ["", ""]
        },
        MX: S,
        CO: S,
        CL: S,
        AR: b,
        PL: {
            separator: " ",
            suffix: ["# temu", "w #"],
            year: ["rok", "# rok", "# lat(a)"],
            month: ["miesiąc", "# miesiąc", "# miesięcy/e"],
            week: ["tydzień", "# tydzień", "# tygodnie"],
            day: ["dzień", "# dzień", "# dni"],
            hour: ["godzina", "# godzina", "# godzin(y)"],
            minute: ["minuta", "# minuta", "# minut(y)"],
            second: ["kilka sekund", "# sekunda", "# sekund"],
            millisecond: ["", ""]
        },
        ES: S,
        FR: {
            separator: " ",
            suffix: ["il y a #", "dans #"],
            year: ["un an", "# an", "# ans"],
            month: ["un mois", "# mois", "# mois"],
            week: ["une semaine", "# semaine", "# semaines"],
            day: ["un jour", "# jour", "# jours"],
            hour: ["une heure", "# heure", "# heures"],
            minute: ["une minute", "# minute", "# minutes"],
            second: ["quelques secondes", "# seconde", "# secondes"],
            millisecond: ["", ""]
        },
        IN: {
            separator: " ",
            suffix: ["# पहले", "# में"],
            year: ["एक साल", "# साल", "# साल"],
            month: ["# महीना", "# महीना", "# महीने"],
            week: ["सप्ताह", "# हफ्ता", "# हफ्तों"],
            day: ["एक दिन", "# दिन", "# दिन"],
            hour: ["एक घंटा", "# घंटा", "# घंटे"],
            minute: ["एक मिनट", "# मिनट", "# मिनट"],
            second: ["कुछ क्षणों", "# क्षण", "# क्षण"],
            millisecond: ["", ""]
        },
        KR: {
            separator: " ",
            suffix: ["# 전", "# 안에"],
            year: ["1년", "#년"],
            month: ["1개월", "#개월"],
            week: ["1주", "#주"],
            day: ["1일", "#일"],
            hour: ["1시간", "#시간"],
            minute: ["1분", "#분"],
            second: ["1초", "#초"],
            millisecond: ["", ""]
        },
        JP: {
            separator: " ",
            suffix: ["#前", "#以内"],
            year: ["1年", "#年"],
            month: ["1か月", "#か月"],
            week: ["1週間", "#週間"],
            day: ["1日", "#日"],
            hour: ["1時間", "#時間"],
            minute: ["1分", "#分"],
            second: ["数秒", "#秒"],
            millisecond: ["", ""]
        },
        MM: {
            separator: " ",
            suffix: ["လွန်ခဲ့သော #", "လာမည့် # အတွင်း"],
            year: ["တစ်နှစ်", "# နှစ်", "# နှစ်"],
            month: ["တစ်လ", "# လ", "# လ"],
            week: ["တစ်ပတ်", "# ပတ်", "# ပတ်"],
            day: ["တစ်ရက်", "# ရက်", "# ရက်"],
            hour: ["တစ်နာရီ", "# နာရီ", "# နာရီ"],
            minute: ["တစ်မိနစ်", "# မိနစ်", "# မိနစ်"],
            second: ["စက္ကန့်အနည်းငယ်", "# စက္ကန့်", "# စက္ကန့်"],
            millisecond: ["", ""]
        }
    });
    const M = {
        year: 3,
        month: 2,
        week: 2,
        day: 2,
        hour: 1,
        minute: 1,
        second: 1,
        millisecond: 1
    }
        , L = i.reduceRight(((e, t, a) => [t * e[Math.max(2 - a, 0)]].concat(e)), [1]);
    function V(e, t, r = Date.now(), o = {}) {
        try {
            if (t = new Date(t),
                r = new Date(r),
                !e || !m(r) || !m(t))
                throw new TypeError("Invalid locale or from/to dates");
            const { unitLowerBounds: s = {}, startUnit: i = null, endUnit: u = null, totalUnits: l = 0, useWords: h = !1, includeWeek: c = !1, addSuffix: y = !1, numberFormat: g = "numeric", roundLast: p = "round" } = o
                , f = a({}, M, s);
            if (i && !n.includes(i) || u && !n.includes(u))
                throw new RangeError("Invalid start or end units");
            const w = t >= r;
            w || ([t, r] = [r, t]);
            let S = +t - +r;
            const b = 6
                , k = 2;
            let V = i ? Math.min(n.indexOf(i), b) : n.findIndex(((e, t) => "second" === e || S >= L[t] * f[e]));
            const v = Math.min(n.indexOf(u || "second"), b) + 1;
            V = Math.min(V, v - 1);
            const D = l > 0 ? l : u ? v - V : 2
                , j = [];
            let T = t.getFullYear() - r.getFullYear()
                , z = t.getMonth() - r.getMonth()
                , O = t.getDate() - r.getDate();
            if (O < 0) {
                const e = new Date(t.getFullYear(), t.getMonth(), 0).getDate();
                O += e + Math.max(0, r.getDate() - e),
                    z--
            }
            z < 0 && (z += 12,
                T--);
            for (let e = V; ; e++) {
                e === k && e++;
                const t = n[e];
                let a = S / L[e];
                const r = 0 === j.length;
                if ("day" === t ? (r || (a = O + a % 1),
                    c && (!r || a >= 7 * f.week || "week" === i) && (j.push(["week", a / 7]),
                        a %= 7)) : "month" === t ? a = z + O / 31 + Number(r && 12 * T) : "year" === t && (a = T + z / 12),
                    e >= v || j.length >= D)
                    break;
                j.push([t, a]),
                    S %= L[e]
            }
            const { separator: N, suffix: x } = e
                , A = "function" == typeof p ? p(...j[j.length - 1]) : p
                , E = j.map((([t, a], r, o) => {
                    a = r === o.length - 1 ? Math[A](a) : Math.floor(a);
                    const n = h && (1 === a || a < 10 && "second" === t) ? 0 : 1 === a ? 1 : 2
                        , s = e[t] ? e[t][n] || e[t][n - 1] : "#"
                        , i = "2-digit" === g ? d(a) : String(a);
                    return s.replace("#", i)
                }
                )).filter(Boolean).join(N);
            return y ? x[Number(w)].replace("#", E) : E
        } catch (s) {
            return ""
        }
    }
    const v = k
        , D = {
            useLocale: "en-US",
            order: "wdMyhmsS",
            dateLiteral: " ",
            monthShortValues: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sept,Oct,Nov,Dec".split(","),
            monthValues: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            weekShortValues: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            weekValues: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
        }
        , j = "日一二三四五六"
        , T = Array.from({
            length: 12
        }).map(((e, t) => `${t + 1}月`))
        , z = {
            useLocale: "zh-CN",
            order: "yMdhmsSw",
            dateLiteral: "-",
            dateLiteralWord: "",
            weekShortValues: j.split("").map((e => "周" + e)),
            weekValues: j.split("").map((e => "星期" + e)),
            monthShortValues: T,
            monthValues: T,
            transform(e, t, a) {
                ["year", "month", "day"].forEach(((e, r) => ("long" === a[e] || "short" === a[e]) && (t[e] = String(Number(t[e].replace("月", ""))) + "年月日"[r])))
            }
        }
        , O = {
            useLocale: "id-ID",
            order: "wdMyhmsS",
            dateLiteral: " ",
            monthShortValues: "Jan,Feb,Mar,Apr,Mei,Jun,Jul,Ags,Sep,Okt,Nov,Des".split(","),
            monthValues: "Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember".split(","),
            transform(e, t, a) {
                t.month = "short" === a.month && 7 === e.getMonth() ? "Ags" : t.month
            },
            weekShortValues: "Min,Sen,Sel,Rab,Kam,Jum,Sab".split(","),
            weekValues: "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu".split(",")
        }
        , N = {
            useLocale: "ms-MY",
            order: "wdMyhmsS",
            dateLiteral: " ",
            monthShortValues: "Jan,Feb,Mac,Apr,Mei,Jun,Julai,Og,Sept,Okt,Nov,Dis".split(","),
            monthValues: "Januari,Februari,Mac,April,Mei,Jun,Julai,Ogos,September,Oktober,November,Disember".split(","),
            weekShortValues: "Ahd,Isn,Sel,Rab,Kha,Jum,Sab".split(","),
            weekValues: "Ahad,Isnin,Selasa,Rabu,Khamis,Jumaat,Sabtu".split(",")
        }
        , x = a({}, D, {
            useLocale: "en-PH"
        })
        , A = a({}, D, {
            useLocale: "en-SG"
        })
        , E = {
            useLocale: "th-TH",
            order: "wdMyhmsS",
            dateLiteral: " ",
            monthShortValues: "ม.ค.,ก.พ.,มี.ค.,เม.ย.,พ.ค.,มิ.ย.,ก.ค.,ส.ค.,ก.ย.,ต.ค.,พ.ย.,ธ.ค.".split(","),
            monthValues: "มกราคม,กุมภาพันธ์,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(","),
            weekShortValues: "อา.,จ.,อ.,พ.,พฤ.,ศ.,ส.".split(","),
            weekValues: "วันอาทิตย์,วันจันทร์,วันอังคาร,วันพุธ,วันพฤหัสบดี,วันศุกร์,วันเสาร์".split(",")
        }
        , J = a({}, z, {
            useLocale: "zh-TW",
            weekShortValues: j.split("").map((e => "週" + e))
        })
        , _ = {
            useLocale: "vn-VN",
            order: "whmsSdMy",
            dateLiteral: " ",
            monthShortValues: Array.from({
                length: 12
            }).map(((e, t) => "Th" + String(101 + t).slice(-2))),
            monthValues: Array.from({
                length: 12
            }).map(((e, t) => "Tháng " + String(t + 1))),
            weekShortValues: "CN,T2,T3,T4,T5,T6,T7".split(","),
            weekValues: "chủ nhật,thứ hai,thứ ba,thứ tư,thứ năm,thứ sáu,thứ bảy".split(",")
        }
        , W = {
            useLocale: "pt-BR",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: " \\de ",
            monthShortValues: "jan,fev,mar,abr,maio,jun,jul,ago,set,out,nov,dez".split(","),
            monthValues: "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro".split(","),
            weekShortValues: "dom,seg,ter,qua,qui,sex,sáb".split(","),
            weekValues: "domingo,segunda-feira,terça-feira,quarta-feira,quinta-feira,sexta-feira,sábado".split(",")
        }
        , R = {
            useLocale: "es-MX",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: " \\de ",
            monthShortValues: "ene.,feb.,mar.,abr.,may.,jun.,jul.,ago.,sep.,oct.,nov.,dic.".split(","),
            monthValues: "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(","),
            weekShortValues: "dom.,lun.,mar.,mié.,jue.,vie.,sáb.".split(","),
            weekValues: "domingo,lunes,martes,miércoles,jueves,viernes,sábado".split(",")
        }
        , C = a({}, R)
        , I = a({}, R)
        , P = a({}, R)
        , F = {
            useLocale: "es-AR",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: " \\de ",
            monthShortValues: "ene.,feb.,mar.,abr.,may.,jun.,jul.,ago.,sep.,oct.,nov.,dic.".split(","),
            monthValues: "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(","),
            weekShortValues: "dom.,lun.,mar.,mié.,jue.,vie.,sáb.".split(","),
            weekValues: "domingo,lunes,martes,miércoles,jueves,viernes,sábado".split(",")
        }
        , H = {
            useLocale: "pl",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: "",
            monthShortValues: "stycz.,luty,mar.,kwiec.,maj,czerw.,lip.,sierp.,wrzes.,pazdz.,listop.,grudz.".split(","),
            monthValues: "Styczeń,Luty,Marzec,Kwiecień,Maj,Czerwiec,Lipiec,Sierpień,Wrzesień,Październik,Listopad,Grudzień".split(","),
            weekShortValues: "nie.,pon.,wt.,śr.,czw.,pią.,sob.".split(","),
            weekValues: "Niedziela,Poniedziałek,Wtorek,Środa,Czwartek,Piątek,Sobota".split(",")
        }
        , B = {
            useLocale: "es-ES",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: " \\de ",
            monthShortValues: "ene.,feb.,mar.,abr.,may.,jun.,jul.,ago.,sep.,oct.,nov.,dic.".split(","),
            monthValues: "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(","),
            weekShortValues: "dom.,lun.,mar.,mié.,jue.,vie.,sáb.".split(","),
            weekValues: "domingo,lunes,martes,miércoles,jueves,viernes,sábado".split(",")
        }
        , K = {
            useLocale: "fr",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: "",
            monthShortValues: "janv.,févr.,mars,avril,mai,juin,juil.,août,sept.,oct.,nov.,déc.".split(","),
            monthValues: "janvier,février,mars,avril,mai,juin,juillet,aout,septembre,octobre,novembre,décembre".split(","),
            weekShortValues: "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
            weekValues: "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(",")
        }
        , U = {
            useLocale: "hi",
            order: "wdMyhmsS",
            dateLiteral: "/",
            dateLiteralWord: "",
            monthShortValues: "जनवरी,फरवरी,मार्च,अप्रैल,मई,जून,जुलाई,अगस्त,सितंबर,अक्टूबर,नवंबर,दिसंबर".split(","),
            monthValues: "जनवरी,फरवरी,मार्च,अप्रैल,मई,जून,जुलाई,अगस्त,सितंबर,अक्टूबर,नवंबर,दिसंबर".split(","),
            weekShortValues: "रविवार,सोमवार,मंगलवार,बुधवार,गुरुवार,शुक्रवार,शनिवार".split(","),
            weekValues: "रविवार,सोमवार,मंगलवार,बुधवार,गुरुवार,शुक्रवार,शनिवार".split(",")
        }
        , X = {
            useLocale: "kr",
            order: "yMdhmsSw",
            dateLiteral: "-",
            dateLiteralWord: "",
            weekShortValues: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            weekValues: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            transform(e, t, a) {
                ["year", "month", "day"].forEach(((e, r) => ("long" === a[e] || "short" === a[e]) && (t[e] = String(Number(t[e])) + ["년", "월", "일"][r])))
            }
        }
        , Y = {
            useLocale: "jp",
            order: "yMdhmsSw",
            dateLiteral: "-",
            dateLiteralWord: "",
            weekShortValues: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            weekValues: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            transform(e, t, a) {
                ["year", "month", "day"].forEach(((e, r) => ("long" === a[e] || "short" === a[e]) && (t[e] = String(Number(t[e])) + ["年", "月", "日"][r])))
            }
        }
        , q = ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"]
        , G = ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"]
        , $ = {
            useLocale: "my",
            order: "wdMyhmsS",
            dateLiteral: " ",
            monthShortValues: q,
            monthValues: q,
            weekShortValues: G,
            weekValues: G
        };
    var Q = Object.freeze({
        __proto__: null,
        default: D,
        CN: z,
        ID: O,
        MY: N,
        PH: x,
        SG: A,
        TH: E,
        TW: J,
        VN: _,
        BR: W,
        MX: C,
        CO: I,
        CL: P,
        AR: F,
        PL: H,
        ES: B,
        FR: K,
        IN: U,
        KR: X,
        JP: Y,
        MM: $
    });
    const Z = /\\?(y+|M+|w+|d+|h+|m+|s+|S+)/g
        , ee = new Map
        , te = new Map;
    function ae(e) {
        const t = JSON.stringify(e);
        if (void 0 !== te.get(t))
            return te.get(t);
        const { order: a = "wdMyhmsS", dateLiteral: n = "/", dateLiteralWord: s = e.dateLiteral || "/", timeLiteral: i = ":", separator: u = " ", weekLiteral: l = ", ", msLiteral: m = "." } = e
            , d = function (e, t) {
                if (null == e)
                    return {};
                var a = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r))
                            continue;
                        a[r] = e[r]
                    }
                return a
            }(e, r)
            , h = e => "yMd".includes(e)
            , c = e => "hms".includes(e)
            , y = e => "w" === e
            , g = a.split("").filter((e => !!d[o[e]])).reduce(((e, t, a, r) => {
                const g = [t, r[a + 1]]
                    , p = g.map((e => d[o[e]])).some((e => ["short", "long"].includes(e)));
                return e + t + (a === r.length - 1 ? "" : g.every(h) ? p ? s : n : g.every(c) ? i : g.some(h) && g.some(c) ? u : g.some(y) ? l : "S" === g[1] ? m : "")
            }
            ), "");
        return te.set(t, g),
            g
    }
    function re(e, t, r) {
        try {
            const i = new Date(t);
            if (!e || !m(i))
                throw new TypeError("Invalid locale or date");
            let u, l;
            "function" == typeof r && (r = r(e)),
                "string" == typeof r ? [u, l] = function (e) {
                    if (void 0 !== ee.get(e))
                        return ee.get(e);
                    const t = {}
                        , a = e.replace(Z, ((e, a) => {
                            const r = e === a ? "" : e.slice(0, 2);
                            if (!(a = e === a ? a : e.slice(2)))
                                return r;
                            const n = o[a[0]]
                                , i = "y" === a[0] && 4 === a.length ? 0 : Math.min(a.length - 1, 3);
                            return t[n] = s[i],
                                r + a[0]
                        }
                        ));
                    return ee.set(e, [a, t]),
                        [a, t]
                }(r) : (e = a({}, e, r),
                    [u, l] = [ae(e), r]);
            const h = function (e, t, a) {
                const r = {
                    year: t.getFullYear(),
                    month: t.getMonth() + 1,
                    week: t.getDay(),
                    day: t.getDate(),
                    hour: t.getHours(),
                    minute: t.getMinutes(),
                    second: t.getSeconds(),
                    millisecond: t.getMilliseconds()
                };
                return n.reduce(((t, o) => (a[o] && (t[o] = function (e, t, a, r) {
                    switch (r) {
                        case "numeric":
                            return String(t);
                        case "2-digit":
                            return d(String(t));
                        case "long":
                            return "month" === a && e.monthValues ? e.monthValues[t - 1] : "week" === a && e.weekValues ? e.weekValues[t] : d(String(t), Math.max(String(t).length, 2));
                        case "short":
                            if ("month" === a && e.monthShortValues)
                                return e.monthShortValues[t - 1];
                            if ("week" === a && e.weekShortValues)
                                return e.weekShortValues[t];
                        default:
                            return String(t)
                    }
                }(e, r[o], o, a[o])),
                    t)), {})
            }(e, i, l);
            return "function" == typeof e.transform && e.transform(i, h, l),
                u.replace(Z, ((e, t) => {
                    const a = e === t ? "" : e.slice(1, 2)
                        , r = e === t ? t : e.slice(2);
                    return a + (h[o[r]] || "")
                }
                ))
        } catch (i) {
            return ""
        }
    }
    class oe {
        static DATE(e) {
            return a({
                dateLiteral: "-",
                day: "2-digit",
                year: "numeric",
                month: "2-digit"
            }, {
                "en-PH": {
                    dateLiteral: "/",
                    order: "wMdyhmsS"
                },
                "pt-BR": {
                    dateLiteral: "/"
                },
                "es-MX": {
                    dateLiteral: "/"
                },
                "es-CO": {
                    dateLiteral: "/"
                },
                "es-CL": {
                    dateLiteral: "/"
                },
                "es-AR": {
                    dateLiteral: "/"
                },
                pl: {
                    dateLiteral: "/"
                },
                "es-ES": {
                    dateLiteral: "/"
                },
                fr: {
                    dateLiteral: "/"
                }
            }[e.useLocale])
        }
        static DATE_TIME(e) {
            return a({}, oe.DATE(e), {
                hour: "2-digit",
                minute: "2-digit"
            })
        }
        static DATE_TIME_SHORT(e) {
            return a({}, oe.DATE_TIME(e), {
                year: "2-digit"
            })
        }
        static FROM_DATE(e) {
            return a({
                month: "short",
                day: "numeric"
            }, {
                "zh-CN": {
                    year: "long",
                    day: "short"
                },
                "zh-TW": {
                    year: "long",
                    day: "short"
                },
                kr: {
                    year: "long",
                    day: "short"
                },
                jp: {
                    year: "long",
                    day: "short"
                },
                "es-MX": {
                    month: "long"
                },
                "es-CO": {
                    month: "long"
                },
                "es-CL": {
                    month: "long"
                }
            }[e.useLocale])
        }
        static TO_DATE(e) {
            return a({
                year: "numeric",
                month: "short",
                day: "numeric"
            }, {
                "zh-CN": {
                    year: void 0,
                    day: "short"
                },
                "zh-TW": {
                    year: void 0,
                    day: "short"
                },
                kr: {
                    year: void 0,
                    day: "short"
                },
                jp: {
                    year: void 0,
                    day: "short"
                },
                "es-MX": {
                    month: "long"
                },
                "es-CO": {
                    month: "long"
                },
                "es-CL": {
                    month: "long"
                }
            }[e.useLocale])
        }
        static NATURAL_DATE(e = ["day", "month"]) {
            return t => {
                const r = {
                    year: "long",
                    month: ["vn-VN", "th-TH", "es-MX", "es-CO", "es-CL"].includes(t.useLocale) ? "long" : "short",
                    day: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    week: "short",
                    millisecond: "numeric"
                };
                return e.reduce(((e, t) => a({}, e, {
                    [t]: r[t]
                })), {})
            }
        }
    }
    const ne = Q;
    return t
}
)()).then((t => {
    e.setModule("shopee_common__time", t, {
        type: "module",
        version: "2.5.0",
        isSingleton: !1,
        originalPackageName: "@shopee_common/time"
    })
}
)), 2]);
//# sourceMappingURL=https://files.webfe.shopee.io/modules-federation/bundle/0/shopee_common__time/2.5.0.js.map
