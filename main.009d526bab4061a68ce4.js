( () => {
    "use strict";
    var e, t, o = {
        611: (e, t, o) => {
            o.d(t, {
                Z: () => m
            });
            var s = o(432)
              , r = o(634)
              , n = o(748);
            const a = document.querySelector(".datepicker-sidebar")
              , c = document.querySelector(".sbdatepicker__body--dates")
              , i = document.querySelector(".sbdatepicker-title")
              , l = document.querySelector(".sb-datepicker-change-date")
              , d = document.querySelector(".sb-yearpicker-title")
              , u = document.querySelectorAll(".sb-monthpicker__month");
            function m(e, t, o) {
                o.setDate(...e.getDateArray());
                let m = o.getMonthArray()
                  , g = t.getMonthEntryDates(m)
                  , h = e.getWeek()
                  , p = !1
                  , y = 0
                  , [f,b] = [null, null];
                function v() {
                    const e = o.getMonthName()
                      , t = o.getYear();
                    i.textContent = `${e} ${t}`
                }
                function S(t) {
                    c.innerText = "";
                    const s = e.getComponent();
                    for (let n = 0; n < t.length; n++) {
                        const a = document.createElement("div")
                          , i = document.createElement("div");
                        a.classList.add("sbdatepicker__body--dates-cell"),
                        i.classList.add("sbdatepicker__body--datename"),
                        t[n].getMonth() !== o.getMonth() && i.classList.add("sbdatepicker__body--datename-disabled"),
                        "week" === s && h.getDate() === t[n].getDate() && h.getMonth() === t[n].getMonth() && h.getFullYear() === t[n].getFullYear() && (p = !0),
                        p ? (y++,
                        y <= 7 && a.classList.add("sbdatepicker__body--dates-week")) : a.classList.remove("sbdatepicker__body--dates-week"),
                        e.isToday(t[n]) && (i.setAttribute("class", "sbdatepicker__body--datename"),
                        i.classList.add("sbdatepicker__body--datename-today")),
                        t[n].getDate() === e.getDateSelected() && t[n].getMonth() === o.getMonth() && (i.classList.contains("sbdatepicker__body--datename-today") || (i.setAttribute("class", "sbdatepicker__body--datename"),
                        i.classList.add("sbdatepicker__body--datename-selected"))),
                        i.textContent = t[n].getDate();
                        const l = (0,
                        r.Ye)(t[n]);
                        i.setAttribute("data-datepicker-date", l),
                        g.includes(l) ? i.classList.contains("sbdatepicker__body--datename-selected") || i.classList.contains("sbdatepicker__body--datename-today") || (i.setAttribute("class", "sbdatepicker__body--datename"),
                        i.classList.add("sbdatepicker__body--datename-entries")) : i.classList.remove("sbdatepicker__body--datename-entries"),
                        a.append(i),
                        c.append(a)
                    }
                }
                function k() {
                    m = o.getMonthArray(),
                    g = t.getMonthEntryDates(m),
                    h = e.getWeek(),
                    y = 0,
                    p = !1
                }
                function w(r, n, a) {
                    e.setDate(r, n, a),
                    e.setDateSelected(a),
                    o.setDate(r, n, a),
                    (0,
                    s.Z)(e.getComponent(), e, t, o),
                    k(),
                    S(m),
                    v(),
                    m = []
                }
                function _(t, o) {
                    e.setDateSelected(o);
                    const s = document.querySelectorAll(".sbdatepicker__body--datename-selected");
                    for (const e of s)
                        e.classList.remove("sbdatepicker__body--datename-selected");
                    t.target.setAttribute("class", "sbdatepicker__body--datename"),
                    t.target.classList.add("sbdatepicker__body--datename-selected")
                }
                function A(t) {
                    const o = t.target
                      , [s,r,n] = o.getAttribute("data-datepicker-date").split("-").map((e => Number.parseInt(e)))
                      , a = e.getComponent();
                    if ("list" !== a)
                        return "year" === a ? e.getYear() !== s ? void w(s, r, n) : void _(t, n) : "month" === a ? e.getMonth() !== r ? void w(s, r, n) : void _(t, n) : "week" === a ? t.target.parentElement.classList.contains("sbdatepicker__body--dates-week") ? void _(t, n) : void w(s, r, n) : "day" === a ? e.isToday(new Date(s,r,n)) ? void _(t, n) : void w(s, r, n) : void 0;
                    _(t, n)
                }
                function D() {
                    f = o.getMonth(),
                    b = o.getYear(),
                    l.classList.add("show-sbdpcd"),
                    x(null, !0),
                    C(o.getMonth(), !0)
                }
                function L() {
                    f === o.getMonth() && b === o.getYear() || (k(),
                    S(m),
                    v(),
                    m = []),
                    l.classList.remove("show-sbdpcd")
                }
                function C(e, t) {
                    const s = e;
                    if (t || s !== o.getMonth()) {
                        o.setMonth(s);
                        for (const [e,t] of u.entries())
                            e === s ? t.classList.add("monthpicker__active-month") : t.classList.remove("monthpicker__active-month")
                    }
                }
                function x(e, t) {
                    if (t)
                        return void (d.textContent = o.getYear());
                    const s = Number.parseInt(o.getYear()) + e;
                    s != +o.getYear() && (o.setYear(s),
                    d.textContent = s)
                }
                function E(e) {
                    const t = (0,
                    n.As)(e, ".sbdatepicker__body--datename")
                      , s = (0,
                    n.As)(e, ".sbdatepicker-nav--next")
                      , r = (0,
                    n.As)(e, ".sbdatepicker-nav--prev")
                      , a = (0,
                    n.As)(e, ".sbdatepicker-title")
                      , c = (0,
                    n.As)(e, ".sb-close-change-date")
                      , i = (0,
                    n.As)(e, ".sb-yearpicker-next")
                      , l = (0,
                    n.As)(e, ".sb-yearpicker-prev")
                      , d = (0,
                    n.As)(e, ".sb-monthpicker__month");
                    if (t)
                        A(e);
                    else {
                        if (s)
                            return o.setNextMonth(),
                            k(),
                            S(m),
                            v(),
                            void (m = []);
                        if (r)
                            return o.setPrevMonth(),
                            k(),
                            S(m),
                            v(),
                            void (m = []);
                        if (t)
                            A(e);
                        else if (a)
                            D();
                        else if (c)
                            L();
                        else if (i)
                            x(1, !1);
                        else if (l)
                            x(-1, !1);
                        else if (d) {
                            C(Number.parseInt(e.target.getAttribute("data-sbdp-month")), !1)
                        } else
                            ;
                    }
                }
                l.classList.remove("show-sbdpcd"),
                v(),
                S(m),
                a.onclick = E,
                m = null,
                g = null
            }
        }
        ,
        432: (e, t, o) => {
            o.d(t, {
                Z: () => l
            });
            var s = o(151);
            const r = new Set
              , n = {
                year: [document.querySelector(".yearview"), () => o.e(935).then(o.bind(o, 935)).then((e => e.default)), () => o.e(828).then(o.bind(o, 828)).then(( () => r.add("year")))],
                month: [document.querySelector(".monthview"), () => Promise.all([o.e(728), o.e(712)]).then(o.bind(o, 712)).then((e => e.default)), () => o.e(97).then(o.bind(o, 97)).then(( () => r.add("month")))],
                week: [document.querySelector(".weekview"), () => Promise.all([o.e(728), o.e(629)]).then(o.bind(o, 629)).then((e => e.default)), () => o.e(208).then(o.bind(o, 208)).then(( () => r.add("week")))],
                day: [document.querySelector(".dayview"), () => Promise.all([o.e(728), o.e(137)]).then(o.bind(o, 137)).then((e => e.default)), () => o.e(115).then(o.bind(o, 115)).then(( () => r.add("day")))],
                list: [document.querySelector(".listview"), () => o.e(215).then(o.bind(o, 215)).then((e => e.default)), () => o.e(431).then(o.bind(o, 431)).then(( () => r.add("list")))]
            }
              , a = ["year", "month", "week", "day", "list"];
            let[c,i] = [null, null];
            function l(e, t, o, l) {
                c = i,
                i = e,
                function() {
                    const t = o.getResetPreviousViewCallback();
                    null !== c && null !== t && c !== i && t();
                    for (const t of a)
                        t !== e && n[t][0].classList.add("hide-view")
                }(),
                document.title = t.getMonthName(),
                async function(e) {
                    const [a,c,i] = n[e];
                    !function(e, t) {
                        const {labels: o} = s.Z
                          , {weekdaysLong: r, monthsLong: n} = o
                          , a = new Date
                          , c = document.querySelector(".btn-today");
                        c.setAttribute("data-tooltip", `${r[a.getDay()]}, ${n[a.getMonth()]} ${a.getDate()}`);
                        const i = document.querySelector(".datetime-content--title")
                          , l = document.querySelector(".header")
                          , d = document.querySelector(".select__modal")
                          , u = document.querySelector(".prev")
                          , m = document.querySelector(".next")
                          , g = document.querySelector(".h-col-2")
                          , h = document.querySelector(".datetime-content")
                          , p = document.querySelector(".prev-next")
                          , y = (e, t) => {
                            i.textContent = t,
                            p.classList.remove("datetime-inactive"),
                            c.classList.remove("datetime-inactive"),
                            g.style.paddingRight = "0",
                            h.classList.remove("datetime-list"),
                            h.removeAttribute("style"),
                            p.removeAttribute("style")
                        }
                          , f = e => {
                            "list" !== e && (u.setAttribute("data-tooltip", `prev ${e}`),
                            m.setAttribute("data-tooltip", `next ${e}`)),
                            d.textContent = e[0].toUpperCase() + e.slice(1),
                            d.setAttribute("data-value", e.slice(0, 1).toUpperCase())
                        }
                        ;
                        switch (t) {
                        case "day":
                            y(0, `${e.getMonthName()} ${e.getDay()}, ${e.getYear()}`),
                            f("day");
                            break;
                        case "week":
                            y(0, e.getWeekRange()),
                            f("week");
                            break;
                        case "month":
                            y(0, `${e.getMonthName()} ${e.getYear()}`),
                            f("month");
                            break;
                        case "year":
                            y(0, e.getYear()),
                            f("year");
                            break;
                        case "list":
                            f("list"),
                            l.style.borderBottom = "1px solid var(--mediumgrey1)",
                            p.setAttribute("style", "pointer-events:none;"),
                            p.classList.add("datetime-inactive"),
                            c.classList.add("datetime-inactive"),
                            h.classList.add("datetime-list")
                        }
                    }(t, e),
                    t.setComponent(e),
                    (await c())(t, o, l),
                    console.log(t),
                    r.has(e) || await i(),
                    a.classList.remove("hide-view")
                }(e)
            }
        }
        ,
        827: (e, t, o) => {
            o.d(t, {
                HY: () => n,
                Jc: () => a,
                ZP: () => r
            });
            var s = o(748);
            class r {
                constructor(e, t, o, r, n, a) {
                    this.category = e,
                    this.completed = t,
                    this.description = o,
                    this.end = r,
                    this.id = (0,
                    s.Ox)(),
                    this.start = n,
                    this.title = a
                }
            }
            class n {
                constructor(e, t) {
                    this.boxes = e,
                    this.boxesTop = t
                }
                setAllBoxes(e) {
                    this.boxes = e.day,
                    this.boxesTop = e.allDay
                }
                addBox(e) {
                    this.boxes.push(e)
                }
                addBoxTop(e) {
                    this.boxesTop.push(e)
                }
                getBox(e) {
                    return this.boxes.find((t => t.id === e))
                }
                getBoxes() {
                    return this.boxes
                }
                getBoxesTop() {
                    return this.boxesTop
                }
                getLength() {
                    return this.boxes.length
                }
                getBoxesByColumn(e) {
                    return this.boxes.filter((t => +t.coordinates.x === e))
                }
                getBoxesByColumnTop(e) {
                    return this.boxesTop.filter((t => +t.coordinates.x === e))
                }
                getBoxesTopLengths() {
                    return this.getBoxesTop().reduce(( (e, t) => {
                        const o = new Date(t.start);
                        return e[o.getDay()] ? e[o.getDay()]++ : e[o.getDay()] = 1,
                        e
                    }
                    ), {})
                }
                getColumnsWithMultipleBoxes() {
                    const e = {}
                      , t = [];
                    for (const o of this.boxes)
                        e[o.coordinates.x] ? (e[o.coordinates.x]++,
                        2 === e[o.coordinates.x] && t.push(o.coordinates.x)) : e[o.coordinates.x] = 1;
                    return t
                }
                getEntriesByTitle(e) {
                    return this.boxes.filter((t => t.title.toLowerCase().includes(e.toLowerCase())))
                }
                updateCoordinates(e, t) {
                    this.getBox(e).coordinates = t
                }
                sortByY(e) {
                    return e.sort(( (e, t) => +e.coordinates.y - +t.coordinates.y))
                }
                updateStore(e, t, o) {
                    const s = this.getBox(t).coordinates
                      , r = 15 * +s.y
                      , n = 15 * +s.e
                      , a = o[+s.x]
                      , c = new Date(a)
                      , i = Math.floor(r / 60)
                      , l = r % 60;
                    c.setHours(i),
                    c.setMinutes(l);
                    const d = new Date(a)
                      , u = Math.floor(n / 60)
                      , m = n % 60;
                    d.setHours(u),
                    d.setMinutes(m),
                    e.updateEntry(t, {
                        start: c,
                        end: d
                    })
                }
            }
            class a {
                constructor(e, t) {
                    this.boxes = e,
                    this.boxesTop = t
                }
                setAllBoxes(e) {
                    this.boxes = e.day,
                    this.boxesTop = e.allDay
                }
                addBox(e) {
                    this.boxes.push(e)
                }
                addBoxTop(e) {
                    this.boxesTop.push(e)
                }
                getBox(e) {
                    return this.boxes.find((t => t.id === e))
                }
                getBoxes() {
                    return this.boxes
                }
                getBoxesTop() {
                    return this.boxesTop
                }
                getAllBoxes() {
                    return [...this.boxes, ...this.boxesTop]
                }
                getLength() {
                    return this.boxes.length
                }
                getBoxesTopLengths() {
                    return this.getBoxesTop().reduce(( (e, t) => {
                        const o = new Date(t.start);
                        return e[o.getDay()] ? e[o.getDay()]++ : e[o.getDay()] = 1,
                        e
                    }
                    ), {})
                }
                getEntriesByTitle(e) {
                    return this.boxes.filter((t => t.title.toLowerCase().includes(e.toLowerCase())))
                }
                updateCoordinates(e, t) {
                    this.getBox(e).coordinates = t
                }
                getEntriesEndingOnDay(e) {
                    return this.boxes.filter((t => +t.coordinates.e === e))
                }
                sortByY(e) {
                    return e.sort(( (e, t) => {
                        const o = +e.coordinates.y - +t.coordinates.y;
                        return 0 === o ? +e.coordinates.e - +t.coordinates.e : o
                    }
                    ))
                }
                updateStore(e, t) {
                    const o = this.getBox(t)
                      , s = o.coordinates
                      , r = 15 * +s.y
                      , n = 15 * +s.e
                      , a = new Date(o.start)
                      , c = Math.floor(r / 60)
                      , i = r % 60;
                    a.setHours(c),
                    a.setMinutes(i);
                    const l = new Date(o.start);
                    let d = Math.floor(n / 60)
                      , u = n % 60;
                    24 === d && (d = 23,
                    u = 59),
                    l.setHours(d),
                    l.setMinutes(u),
                    e.updateEntry(t, {
                        start: a,
                        end: l
                    })
                }
            }
        }
        ,
        151: (e, t, o) => {
            o.d(t, {
                Z: () => s
            });
            const s = {
                labels: {
                    monthsLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShortLower: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                    monthsLongLower: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdaysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
                    numbers: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"]
                },
                colorsMutedMed: {
                    red: {
                        1: "#df2ab5",
                        2: "#af1f8d",
                        3: "#981b7b",
                        4: "#bc136f",
                        5: "#ab1369",
                        6: "#941361",
                        7: "#84135c",
                        8: "#a81f9c",
                        9: "#941b85",
                        10: "#bc138c",
                        11: "#ab1381",
                        12: "#941371",
                        13: "#c126b6"
                    },
                    orange: {
                        1: "#ee6a8b",
                        2: "#d4476a",
                        3: "#d44c52",
                        4: "#cb444a",
                        5: "#af3d46",
                        6: "#9c3a44",
                        7: "#883642",
                        8: "#d44785",
                        9: "#d44467",
                        10: "#cb3b5e",
                        11: "#af3855",
                        12: "#9c354e",
                        13: "#d65f91"
                    },
                    green: {
                        1: "#1e9e6d",
                        2: "#19855c",
                        3: "#177c56",
                        4: "#166f4d",
                        5: "#156a4a",
                        6: "#125e41",
                        7: "#11593d",
                        8: "#19854c",
                        9: "#177c47",
                        10: "#166f42",
                        11: "#156a40",
                        12: "#125e3b",
                        13: "#1b8e4f"
                    },
                    blue: {
                        1: "#14759a",
                        2: "#117698",
                        3: "#307ea7",
                        4: "#1d6f99",
                        5: "#196489",
                        6: "#16597a",
                        7: "#124f6c",
                        8: "#118891",
                        9: "#3092a7",
                        10: "#1d8499",
                        11: "#197589",
                        12: "#16677a",
                        13: "#127a87"
                    },
                    purple: {
                        1: "#33418b",
                        2: "#33428c",
                        3: "#3c4176",
                        4: "#373d81",
                        5: "#303571",
                        6: "#292f63",
                        7: "#242a5a",
                        8: "#33528c",
                        9: "#3b4576",
                        10: "#374981",
                        11: "#2f3d71",
                        12: "#293563",
                        13: "#2e487d"
                    },
                    grey: {
                        1: "#859392",
                        2: "#5f6a69",
                        3: "#4d5656",
                        4: "#4b5858",
                        5: "#506160",
                        6: "#566968",
                        7: "#607a7a",
                        8: "#5f6a68",
                        9: "#4d5655",
                        10: "#4b5856",
                        11: "#50615d",
                        12: "#566964",
                        13: "#788482"
                    }
                }
            }
        }
        ,
        634: (e, t, o) => {
            o.d(t, {
                $M: () => p,
                DT: () => i,
                If: () => l,
                J_: () => v,
                OT: () => d,
                RU: () => f,
                To: () => q,
                VN: () => E,
                VT: () => y,
                Ye: () => u,
                Z_: () => C,
                aN: () => g,
                cF: () => D,
                cp: () => _,
                du: () => M,
                gG: () => a,
                gO: () => b,
                hc: () => m,
                kt: () => n,
                lS: () => L,
                o4: () => x,
                pH: () => S,
                tB: () => A,
                vY: () => k,
                yi: () => c
            });
            var s = o(151)
              , r = o(255);
            function n(e, t=":") {
                return e.split(t).map((e => Number.parseInt(e)))
            }
            function a(e, t) {
                t >= 60 && (t = 0,
                e += 1);
                let o = e < 12 ? "am" : "pm";
                return `${e % 12 || 12}:${t.toString().padStart(2, "0")} ${o}`
            }
            function c(e, t) {
                return t >= 60 && (t = 0,
                e += 1),
                `${e % 24}:${t.toString().padStart(2, "0")}`
            }
            function i(e, t) {
                t >= 60 ? (t = 0,
                e += 1) : t % 15 != 0 && (t = 15 * Math.ceil(t / 15));
                let o = (t + 15) % 60
                  , s = (e + Math.floor((t + 15) / 60)) % 24;
                var r;
                return [a(s, o), [s, (r = o,
                (r = "number" == typeof r ? r.toString() : r).padStart(2, "0"))]]
            }
            function l(e) {
                return e instanceof Date && !Number.isNaN(e) ? e : new Date(e)
            }
            function d(e) {
                return `${(e = l(e)).getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
            }
            function u(e) {
                return `${(e = l(e)).getFullYear()}-${e.getMonth()}-${e.getDate()}`
            }
            function m(e) {
                return [+e.getFullYear(), +e.getMonth() + 1, +e.getDate()]
            }
            function g(e, t) {
                return [e,t] = [l(e), l(t)],
                e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
            }
            function h(e) {
                const t = {
                    year: 31536e3,
                    day: 86400,
                    hour: 3600
                }
                  , o = [];
                if (0 === e)
                    return "now";
                for (const s in t)
                    if (e >= t[s]) {
                        let r = Math.floor(e / t[s]);
                        o.push(r += r > 1 ? " " + s + "s" : " " + s),
                        e %= t[s]
                    }
                return o.length > 1 ? o.join(", ").replace(/,([^,]*)$/, " &$1") : o[0]
            }
            function p(e, t, o) {
                const {monthsShort: r} = s.Z.labels;
                [e,t] = [l(e), l(t)];
                const [n,a,c] = [e.getDate(), r[e.getMonth()], e.getFullYear()]
                  , [i,d,u] = [t.getDate(), r[t.getMonth()], t.getFullYear()];
                let m = c
                  , g = u;
                return o && (m = c.toString().slice(2, 4),
                g = u.toString().slice(2, 4)),
                c === u ? a === d ? n === i ? `${a} ${n} ${c}` : `${a} ${n} – ${i}, ${c}` : `${a} ${n} – ${d} ${i}, ${c}` : `${a} ${n}, ${m} – ${d} ${i}, ${g}`
            }
            function y(e, t) {
                [e,t] = [new Date(e), new Date(t)];
                let o = e.getMinutes()
                  , s = t.getMinutes();
                s = s % 15 == 0 ? s : s + (15 - s % 15),
                o = o % 15 == 0 ? o : o + (15 - o % 15);
                let n = (0,
                r.mr)(e.getHours(), o);
                const a = (0,
                r.mr)(t.getHours(), s);
                return n.slice(-2) === a.slice(-2) && (n = n.slice(0, -2)),
                `${n} – ${a}`
            }
            function f(e) {
                const t = e.split("-");
                return new Date(t[0],t[1] - 1,t[2])
            }
            function b(e, t) {
                return [e,t] = [new Date(e), new Date(t)],
                e.getTime() < t.getTime()
            }
            function v(e) {
                return e instanceof Date && !Number.isNaN(e)
            }
            function S(e, t, o) {
                return e.getAttribute(t).split("-").map(( (e, t) => "month" === o && 1 === t ? Number.parseInt(e) - 1 : Number.parseInt(e)))
            }
            function k(e) {
                return new Date(e.map((e => Number.parseInt(e))))
            }
            function w(e, t, o) {
                return e = l(e),
                new Date(e.getFullYear(),e.getMonth(),e.getDate(),Number.parseInt(t),Number.parseInt(o),1,1)
            }
            function _(e, t, o) {
                return [w(e = l(e), t[0], o[0]), w(e, t[1], o[1])]
            }
            function A(e) {
                const t = new Date
                  , [o,s,r] = e
                  , n = new Date(o,s,r);
                n.setHours(t.getHours()),
                n.setMinutes(0);
                const a = new Date(n);
                return a.setHours(t.getHours()),
                a.setMinutes(30),
                [n, a]
            }
            function D(e, t) {
                [e,t] = [l(e), l(t)];
                const o = e => {
                    const t = e.getMinutes();
                    return 0 === t ? "00" : t
                }
                ;
                return {
                    dateObj: [e, t],
                    minutes: [o(e), o(t)],
                    formatted: [u(e), u(t)]
                }
            }
            function L(e) {
                return e.length <= 1 ? e : e.sort(( (e, t) => "end"in e && "end"in t ? new Date(e.end) - new Date(t.end) || new Date(e.start) - new Date(t.start) : e - t))
            }
            function C(e, t) {
                return Math.floor(t.getTime() / 1e3) - Math.floor(e.getTime() / 1e3)
            }
            function x(e, t) {
                const {labels: o} = s.Z
                  , [n,a] = [e.getFullYear(), t.getFullYear()]
                  , [c,i] = [e.getMonth(), t.getMonth()]
                  , [l,d] = [e.getDate(), t.getDate()]
                  , [u,m] = [e.getHours(), t.getHours()]
                  , [g,p] = [e.getMinutes(), t.getMinutes()];
                let y = !1;
                const f = new Date;
                if (b(e, f) && (y = !0),
                n === a) {
                    if (c === i) {
                        if (l === d) {
                            const s = function(e) {
                                const t = {
                                    hour: 3600,
                                    minute: 60
                                }
                                  , o = [];
                                if (0 === e)
                                    return "now";
                                for (const s in t)
                                    if (e >= t[s]) {
                                        let r = Math.floor(e / t[s]);
                                        o.push(r += r > 1 ? " " + s + "s" : " " + s),
                                        e %= t[s]
                                    }
                                return o.length > 1 ? o.join(", ").replace(/,([^,]*)$/, " &$1") : o[0]
                            }(C(y ? f : e, t));
                            return {
                                date: `${o.monthsLong[c]} ${l}, ${n} (${(0,
                                r.eJ)([u, m], [g, p])})`,
                                time: s
                            }
                        }
                        {
                            const s = h(C(y ? f : e, t));
                            return {
                                date: `${o.monthsLong[c]} ${l} – ${d}, ${n}`,
                                time: s
                            }
                        }
                    }
                    {
                        const s = h(C(y ? f : e, t));
                        return {
                            date: `${o.monthsShort[c]} ${l} – ${o.monthsShort[i]} ${d}, ${a}`,
                            time: s
                        }
                    }
                }
                {
                    const s = h(C(y ? f : e, t));
                    return {
                        date: `${o.monthsShort[c]} ${l}, ${n} – ${o.monthsShort[i]} ${d}, ${a}`,
                        time: s
                    }
                }
            }
            function E() {
                const e = new Date;
                return `${Number.parseInt(e.getDate())}`
            }
            function M(e, t) {
                return C(e, t) > 86400
            }
            function q(e) {
                if (e > 3 && e < 21)
                    return "th";
                switch (e % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
                }
            }
        }
        ,
        748: (e, t, o) => {
            function s(e, t) {
                return e.target.closest(t)
            }
            function r(e, t) {
                let o = 0
                  , s = 0
                  , r = 0;
                const n = t;
                return o = "0x" + e[1] + e[2],
                s = "0x" + e[3] + e[4],
                r = "0x" + e[5] + e[6],
                "rgba(" + +o + "," + +s + "," + +r + "," + n + ")"
            }
            function n() {
                return Date.now().toString(36) + Math.random().toString(36).slice(2)
            }
            o.d(t, {
                As: () => s,
                Dc: () => c,
                Ox: () => n,
                P2: () => a,
                kE: () => l,
                tb: () => i,
                v0: () => r
            });
            const a = (e, t) => {
                let o, s, r;
                return function(...n) {
                    o ? (clearTimeout(s),
                    s = setTimeout(( () => {
                        Date.now() - r >= t && (e.apply(this, n),
                        r = Date.now())
                    }
                    ), Math.max(t - (Date.now() - r), 0))) : (e.apply(this, n),
                    r = Date.now(),
                    o = !0)
                }
            }
            ;
            function c(e, t) {
                const o = document.querySelector(".body")
                  , s = document.getElementsByName("color-scheme")[0]
                  , r = e.getColorScheme()
                  , n = o.classList.contains("light-mode")
                  , a = o.classList.contains("contrast-mode")
                  , c = t.getAnimationStatus();
                if ("light" === r && n && !a || "dark" === r && !n && !a || "contrast" === r && a && !n)
                    return void setTimeout(( () => {
                        o.setAttribute("data-disable-transitions", c)
                    }
                    ), 2e3);
                const i = (t, r, n) => {
                    o.setAttribute("data-disable-transitions", !0),
                    e.setColorScheme(t),
                    s.setAttribute("content", r),
                    o.setAttribute("class", n),
                    setTimeout(( () => {
                        o.setAttribute("data-disable-transitions", c)
                    }
                    ), 350)
                }
                ;
                switch (r) {
                case "light":
                    i("light", "light", "body light-mode");
                    break;
                case "contrast":
                    i("contrast", "dark", "body contrast-mode");
                    break;
                default:
                    i("dark", "dark light", "body")
                }
            }
            function i(e, t, o, s, r=!1, n=null) {
                const [a,c] = [e, t]
                  , [i,l] = o
                  , [d,u] = s;
                let m;
                r && n ? (m = i - a / 2 + n / 2,
                e + i + 4 >= d && (m = d - a - 4)) : m = i + a > d ? i - a - 6 : i;
                let g = l + c > u ? u - c - 6 : l;
                return m < 0 && (m = Math.abs(m)),
                g < 0 && (g = 56),
                [m, g]
            }
            function l(e) {
                return !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(e)
            }
        }
        ,
        340: (e, t, o) => {
            o.d(t, {
                G0: () => n,
                Ml: () => s,
                NM: () => i,
                Z: () => r,
                bg: () => c,
                pr: () => a
            });
            const s = () => {
                const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                e.setAttribute("height", "20"),
                e.setAttribute("width", "20"),
                e.setAttribute("fill", "var(--white3)");
                const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return t.setAttribute("d", "M10 16q-.625 0-1.062-.438Q8.5 15.125 8.5 14.5t.438-1.062Q9.375 13 10 13t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 16 10 16Zm0-4.5q-.625 0-1.062-.438Q8.5 10.625 8.5 10t.438-1.062Q9.375 8.5 10 8.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM10 7q-.625 0-1.062-.438Q8.5 6.125 8.5 5.5t.438-1.062Q9.375 4 10 4t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 7 10 7Z"),
                e.append(t),
                e
            }
              , r = e => {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("height", "24"),
                t.setAttribute("width", "24"),
                t.setAttribute("viewBox", "0 0 24 24"),
                e ? t.setAttribute("fill", e) : t.setAttribute("fill", "var(--white3)");
                const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                o.setAttribute("d", "M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z");
                const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return s.setAttribute("d", "M9 8h2v9H9zm4 0h2v9h-2z"),
                t.append(o, s),
                t
            }
              , n = e => {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("height", "20"),
                t.setAttribute("width", "20"),
                e ? t.setAttribute("fill", e) : t.setAttribute("fill", "var(--white3)");
                const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return o.setAttribute("d", "M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"),
                t.append(o),
                t
            }
              , a = e => {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("height", "18px"),
                t.setAttribute("width", "18px"),
                t.setAttribute("viewBox", "0 0 24 24"),
                e ? t.setAttribute("fill", e) : t.setAttribute("fill", "var(--white2)");
                const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                o.setAttribute("d", "M0 0h24v24H0z"),
                o.setAttribute("fill", "none");
                const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return s.setAttribute("d", "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"),
                t.append(o, s),
                t
            }
              , c = e => {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("height", "24"),
                t.setAttribute("width", "24"),
                e ? t.setAttribute("fill", e) : t.setAttribute("fill", "var(--white4)");
                const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return o.setAttribute("d", "M6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14Z"),
                t.append(o),
                t
            }
              , i = e => {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("height", "18px"),
                t.setAttribute("width", "18px"),
                t.setAttribute("viewBox", "0 0 24 24"),
                e ? t.setAttribute("fill", e) : t.setAttribute("fill", "var(--white3)");
                const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                o.setAttribute("d", "M0 0h24v24H0z"),
                o.setAttribute("fill", "none");
                const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return s.setAttribute("d", "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"),
                t.append(o, s),
                t
            }
        }
        ,
        255: (e, t, o) => {
            function s(e, t) {
                let o;
                return 60 === t && (t = 0,
                e += 1),
                0 == +e ? (e = 12,
                o = "am") : e < 12 ? o = "am" : 12 === e ? o = "pm" : 24 === e ? (o = "am",
                e -= 12) : (e -= 12,
                o = "pm"),
                0 == +t ? `${e}${o}` : `${e}:${t}${o}`
            }
            function r(e, t) {
                const [o,r] = e
                  , [n,a] = t;
                let c = s(o, n);
                const i = s(r, a);
                return c.slice(-2) === i.slice(-2) && (c = c.slice(0, -2)),
                `${c} – ${i}`
            }
            o.d(t, {
                ZP: () => n,
                eJ: () => r,
                mr: () => s
            });
            const n = function(e, t) {
                const o = Math.floor(+e / 4)
                  , r = 15 * +e % 60
                  , n = Math.floor((e + t) / 4)
                  , a = 15 * (e + t) % 60;
                let c = s(o, r);
                const i = s(n, a);
                return c.slice(-2) === i.slice(-2) && (c = c.slice(0, -2)),
                `${c} – ${i}`
            }
        }
    }, s = {};
    function r(e) {
        var t = s[e];
        if (void 0 !== t)
            return t.exports;
        var n = s[e] = {
            exports: {}
        };
        return o[e](n, n.exports, r),
        n.exports
    }
    r.m = o,
    r.d = (e, t) => {
        for (var o in t)
            r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    r.f = {},
    r.e = e => Promise.all(Object.keys(r.f).reduce(( (t, o) => (r.f[o](e, t),
    t)), [])),
    r.u = e => e + "." + {
        97: "84e0b56f04f80e5667af",
        115: "4bd17f5ceea718b99727",
        137: "696b14cef70fa37b855c",
        208: "3483a8ab399976057664",
        215: "b9713b60ac033758eb26",
        431: "c44ed5eb19949f704132",
        629: "6195451f1ae1530f5dc2",
        712: "4689b95e3587c04a1b19",
        728: "ed2404caaa41e3499645",
        787: "820dad9b633e41f583c3",
        828: "b69a53f17369d64b55c0",
        935: "18665d5a099b0b9ee38e"
    }[e] + ".js",
    r.miniCssF = e => e + ".css",
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "google-calendar-clone-vanilla:",
    r.l = (o, s, n, a) => {
        if (e[o])
            e[o].push(s);
        else {
            var c, i;
            if (void 0 !== n)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var u = l[d];
                    if (u.getAttribute("src") == o || u.getAttribute("data-webpack") == t + n) {
                        c = u;
                        break
                    }
                }
            c || (i = !0,
            (c = document.createElement("script")).charset = "utf-8",
            c.timeout = 120,
            r.nc && c.setAttribute("nonce", r.nc),
            c.setAttribute("data-webpack", t + n),
            c.src = o),
            e[o] = [s];
            var m = (t, s) => {
                c.onerror = c.onload = null,
                clearTimeout(g);
                var r = e[o];
                if (delete e[o],
                c.parentNode && c.parentNode.removeChild(c),
                r && r.forEach((e => e(s))),
                t)
                    return t(s)
            }
              , g = setTimeout(m.bind(null, void 0, {
                type: "timeout",
                target: c
            }), 12e4);
            c.onerror = m.bind(null, c.onerror),
            c.onload = m.bind(null, c.onload),
            i && document.head.appendChild(c)
        }
    }
    ,
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var o = t.getElementsByTagName("script");
            o.length && (e = o[o.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        r.p = e
    }
    )(),
    ( () => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(( (t, o) => {
                var s = r.miniCssF(e)
                  , n = r.p + s;
                if (( (e, t) => {
                    for (var o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                        var r = (a = o[s]).getAttribute("data-href") || a.getAttribute("href");
                        if ("stylesheet" === a.rel && (r === e || r === t))
                            return a
                    }
                    var n = document.getElementsByTagName("style");
                    for (s = 0; s < n.length; s++) {
                        var a;
                        if ((r = (a = n[s]).getAttribute("data-href")) === e || r === t)
                            return a
                    }
                }
                )(s, n))
                    return t();
                ( (e, t, o, s, r) => {
                    var n = document.createElement("link");
                    n.rel = "stylesheet",
                    n.type = "text/css",
                    n.onerror = n.onload = o => {
                        if (n.onerror = n.onload = null,
                        "load" === o.type)
                            s();
                        else {
                            var a = o && ("load" === o.type ? "missing" : o.type)
                              , c = o && o.target && o.target.href || t
                              , i = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                            i.code = "CSS_CHUNK_LOAD_FAILED",
                            i.type = a,
                            i.request = c,
                            n.parentNode.removeChild(n),
                            r(i)
                        }
                    }
                    ,
                    n.href = t,
                    o ? o.parentNode.insertBefore(n, o.nextSibling) : document.head.appendChild(n)
                }
                )(e, n, null, t, o)
            }
            ))
              , t = {
                179: 0
            };
            r.f.miniCss = (o, s) => {
                t[o] ? s.push(t[o]) : 0 !== t[o] && {
                    97: 1,
                    115: 1,
                    208: 1,
                    431: 1,
                    787: 1,
                    828: 1
                }[o] && s.push(t[o] = e(o).then(( () => {
                    t[o] = 0
                }
                ), (e => {
                    throw delete t[o],
                    e
                }
                )))
            }
        }
    }
    )(),
    ( () => {
        var e = {
            179: 0
        };
        r.f.j = (t, o) => {
            var s = r.o(e, t) ? e[t] : void 0;
            if (0 !== s)
                if (s)
                    o.push(s[2]);
                else {
                    var n = new Promise(( (o, r) => s = e[t] = [o, r]));
                    o.push(s[2] = n);
                    var a = r.p + r.u(t)
                      , c = new Error;
                    r.l(a, (o => {
                        if (r.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0),
                        s)) {
                            var n = o && ("load" === o.type ? "missing" : o.type)
                              , a = o && o.target && o.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")",
                            c.name = "ChunkLoadError",
                            c.type = n,
                            c.request = a,
                            s[1](c)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t, o) => {
            var s, n, [a,c,i] = o, l = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (s in c)
                    r.o(c, s) && (r.m[s] = c[s]);
                if (i)
                    i(r)
            }
            for (t && t(o); l < a.length; l++)
                n = a[l],
                r.o(e, n) && e[n] && e[n][0](),
                e[n] = 0
        }
          , o = self.webpackChunkgoogle_calendar_clone_vanilla = self.webpackChunkgoogle_calendar_clone_vanilla || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )(),
    ( () => {
        var e = r(432)
          , t = r(151)
          , o = r(634)
          , s = r(748)
          , n = r(340);
        const a = document.querySelector(".datepicker")
          , c = document.querySelector(".datepicker-overlay")
          , i = document.querySelector(".datepicker__body--dates")
          , l = document.querySelector(".datepicker-title")
          , d = document.querySelector(".datepicker-change-date")
          , u = document.querySelector(".prev")
          , m = document.querySelector(".next")
          , g = document.querySelector(".yearpicker-title")
          , h = document.querySelectorAll(".monthpicker__month");
        function p(t, r, n, p) {
            let y, f = n.getMonthArray(), b = 0;
            const v = "form" === p ? n.getDateSelected() : t.getDateSelected();
            let[S,k] = [null, null];
            const w = (0,
            s.P2)((function(e) {
                const t = d.classList.contains("show-dpcd");
                switch (e.key) {
                case "ArrowDown":
                    t ? E(-1, !1) : C();
                    break;
                case "ArrowUp":
                    t ? E(1, !1) : L();
                    break;
                case "ArrowRight":
                    t ? M("next") : function() {
                        let e = document.querySelector(".datepicker__body--datename-selected");
                        const t = e.parentElement
                          , o = t?.nextElementSibling?.firstElementChild;
                        if (o && null != o) {
                            e.classList.remove("datepicker__body--datename-selected"),
                            o.classList.add("datepicker__body--datename-selected");
                            const t = o.getAttribute("data-datepicker-date")
                              , s = Number.parseInt(t.split("-")[2]);
                            return void n.setDateSelected(s)
                        }
                        L(),
                        n.setDateSelected(1),
                        e = document.querySelector(".datepicker__body--datename-selected"),
                        e.classList.remove("datepicker__body--datename-selected");
                        document.querySelectorAll(".datepicker__body--datename")[0].classList.add("datepicker__body--datename-selected")
                    }();
                    break;
                case "ArrowLeft":
                    t ? M("prev") : function() {
                        let e = document.querySelector(".datepicker__body--datename-selected");
                        const t = e.parentElement
                          , o = t?.previousElementSibling?.firstElementChild;
                        if (o && null != o)
                            return e.classList.remove("datepicker__body--datename-selected"),
                            void o.classList.add("datepicker__body--datename-selected");
                        {
                            C();
                            const t = n.getDaysInMonth();
                            n.setDateSelected(+t),
                            e = document.querySelector(".datepicker__body--datename-selected"),
                            e.classList.remove("datepicker__body--datename-selected");
                            document.querySelectorAll(".datepicker__body--datename").at(-1).classList.add("datepicker__body--datename-selected")
                        }
                    }();
                    break;
                case "Enter":
                    if (d.classList.contains("show-dpcd"))
                        $();
                    else {
                        const e = document.querySelector(".datepicker__body--datename-selected");
                        if (null !== e && e) {
                            D(null, (0,
                            o.pH)(e, "data-datepicker-date"))
                        } else
                            D(null, [n.getYear(), n.getMonth(), 28])
                    }
                    break;
                case "Escape":
                    d.classList.contains("show-dpcd") ? $() : N()
                }
            }
            ), 100);
            function _() {
                const e = n.getYear()
                  , t = n.getMonthName();
                l.textContent = `${t} ${e}`
            }
            function A(e) {
                i.innerText = "";
                let s = r.getMonthEntryDates(e)
                  , a = t.getWeek();
                for (let r = 0; r < e.length; r++) {
                    const c = document.createElement("div")
                      , l = document.createElement("div");
                    c.classList.add("datepicker__body--dates-cell"),
                    l.classList.add("datepicker__body--datename"),
                    e[r].getMonth() !== n.getMonth() && l.classList.add("datepicker__body--datename-disabled"),
                    (0,
                    o.aN)(e[r], a) && "week" === t.getComponent() && (y = !0),
                    y ? (b++,
                    b <= 7 && c.classList.add("datepicker__body--dates-week")) : c.classList.remove("datepicker__body--dates-week"),
                    e[r].getDate() === v && e[r].getMonth() === n.getMonth() && (l.classList.contains("datepicker__body--datename-today") || (l.setAttribute("class", "datepicker__body--datename"),
                    l.classList.add("datepicker__body--datename-selected"))),
                    t.isToday(e[r]) && (l.setAttribute("class", "datepicker__body--datename"),
                    l.classList.add("datepicker__body--datename-today")),
                    l.innerText = e[r].getDate();
                    const d = (0,
                    o.Ye)(e[r]);
                    l.setAttribute("data-datepicker-date", d),
                    s.includes(d) ? l.classList.contains("datepicker__body--datename-today") || l.classList.contains("datepicker__body--datename-selected") || (l.setAttribute("class", "datepicker__body--datename"),
                    l.classList.add("datepicker__body--datename-entries")) : l.classList.remove("datepicker__body--datename-entries"),
                    c.append(l),
                    i.append(c)
                }
                a = null,
                s = []
            }
            function D(s, a) {
                let[c,i,l] = [null, null, null];
                if (null === s)
                    c = a[0],
                    i = a[1],
                    l = a[2];
                else {
                    const e = (0,
                    o.pH)(s.target, "data-datepicker-date");
                    c = e[0],
                    i = e[1],
                    l = e[2]
                }
                "form" === p ? (!function(e, s, r) {
                    n.setDate(e, s, r),
                    t.setDateSelected(r);
                    const a = n.getDate()
                      , c = document.querySelector(".active-form-date");
                    c.setAttribute("data-form-date", `${e}-${s}-${r}`),
                    c.textContent = `${n.getMonthName().slice(0, 3)} ${r}, ${e}`;
                    const i = document?.querySelector(".inactive-form-date")
                      , l = i.getAttribute("data-form-date").split("-").map((e => Number.parseInt(e)))
                      , d = new Date(l[0],l[1],l[2])
                      , u = i.getAttribute("data-form-date-type");
                    ((0,
                    o.gO)(d, a) && "end" === u || (0,
                    o.gO)(a, d) && "start" === u) && (i.setAttribute("data-form-date", `${e}-${s}-${r}`),
                    i.textContent = `${n.getMonthName().slice(0, 3)} ${r}, ${e}`)
                }(c, i, l),
                N()) : function(o, s, a) {
                    t.setDate(o, s, a),
                    t.setDateSelected(a),
                    (0,
                    e.Z)(t.getComponent(), t, r, n),
                    n.setDate(o, s, a),
                    N()
                }(c, i, l)
            }
            function L() {
                n.setNextMonth(),
                f = n.getMonthArray(),
                A(f),
                _()
            }
            function C() {
                n.setPrevMonth(),
                f = n.getMonthArray(),
                A(f),
                _()
            }
            function x(e, t) {
                const o = e;
                if (t || o !== n.getMonth()) {
                    n.setMonth(o);
                    for (const [e,t] of h.entries())
                        e === o ? t.classList.add("monthpicker__active-month") : t.classList.remove("monthpicker__active-month")
                }
            }
            function E(e, t) {
                if (t)
                    return void (g.textContent = n.getYear());
                const o = Number.parseInt(n.getYear()) + e;
                o != +n.getYear() && (n.setYear(o),
                g.textContent = o)
            }
            function M(e) {
                const t = document.querySelector(".monthpicker__active-month")
                  , o = Number.parseInt(t.getAttribute("data-dp-month"));
                x("next" === e ? (o + 1) % 12 : 0 === o ? 11 : o - 1)
            }
            function q() {
                S = n.getMonth(),
                k = n.getYear(),
                d.classList.add("show-dpcd"),
                E(null, !0),
                x(n.getMonth(), !0)
            }
            function $() {
                S === n.getMonth() && k === n.getYear() || (f = n.getMonthArray(),
                A(f),
                _()),
                d.classList.remove("show-dpcd")
            }
            function N() {
                a.classList.add("hide-datepicker"),
                c.classList.add("hide-datepicker-overlay"),
                $();
                const e = r.getActiveOverlay().has("hide-form-overlay");
                !("list" !== t.getComponent()) && e || (u.removeAttribute("style"),
                m.removeAttribute("style")),
                "form" === p && document.querySelector(".active-form-date")?.classList.remove("active-form-date"),
                i.innerText = "",
                a.removeAttribute("tabindex"),
                b = 0,
                S = null,
                k = null,
                f = [],
                c.onclick = null,
                a.onclick = null,
                document.removeEventListener("keydown", w)
            }
            function Y(e) {
                const t = (0,
                s.As)(e, ".datepicker__body--datename")
                  , o = (0,
                s.As)(e, ".datepicker-nav--next")
                  , r = (0,
                s.As)(e, ".datepicker-nav--prev")
                  , n = (0,
                s.As)(e, ".datepicker-title")
                  , a = (0,
                s.As)(e, ".close-change-date")
                  , c = (0,
                s.As)(e, ".yearpicker-next")
                  , i = (0,
                s.As)(e, ".yearpicker-prev")
                  , l = (0,
                s.As)(e, ".monthpicker__month");
                if (t)
                    D(e);
                else if (o)
                    L();
                else if (r)
                    C();
                else if (n)
                    q();
                else if (a)
                    $();
                else if (c)
                    E(1, !1);
                else if (i)
                    E(-1, !1);
                else if (l) {
                    x(Number.parseInt(e.target.getAttribute("data-dp-month")), !1)
                } else
                    ;
            }
            _(),
            A(f),
            r.setResetDatepickerCallback(N),
            c.onclick = N,
            a.onclick = Y,
            document.addEventListener("keydown", w),
            f = []
        }
        var y = r(611)
          , f = r(827);
        const b = {
            0: {
                shortcut: "0",
                action: "change app theme"
            },
            1: {
                shortcut: ["1", "D"],
                action: "open day view"
            },
            2: {
                shortcut: ["2", "W"],
                action: "open week view"
            },
            3: {
                shortcut: ["3", "M"],
                action: "open month view"
            },
            4: {
                shortcut: ["4", "Y"],
                action: "open year view"
            },
            5: {
                shortcut: ["5", "L"],
                action: "open list view"
            },
            6: {
                shortcut: "v",
                action: "toggle view options"
            },
            7: {
                shortcut: "t",
                action: "set date to today"
            },
            8: {
                shortcut: "g",
                action: "enter date manually"
            },
            9: {
                shortcut: "n",
                action: "next period"
            },
            10: {
                shortcut: "p",
                action: "previous period"
            },
            11: {
                shortcut: "s",
                action: "toggle sidebar"
            },
            12: {
                shortcut: "f",
                action: "open form"
            },
            13: {
                shortcut: "+",
                action: "open new category form"
            },
            14: {
                shortcut: "a",
                action: "open settings"
            },
            15: {
                shortcut: ["/", "?"],
                action: "open keyboard shortcuts"
            },
            16: {
                shortcut: "e",
                action: "(entry options) opens form with entry details"
            },
            17: {
                shortcut: "↑",
                action: ["(datepicker) set date to next month/week", "(yearpicker) set year to next year"]
            },
            18: {
                shortcut: "↓",
                action: ["(datepicker) set date to prev month/week", "(yearpicker) set year to prev year"]
            },
            19: {
                shortcut: "←",
                action: ["(datepicker) set date to prev day", "(monthpicker) set month to prev month"]
            },
            20: {
                shortcut: "→",
                action: ["(datepicker) set date to next day", "(monthpicker) set month to next month"]
            },
            21: {
                shortcut: "DELETE",
                action: "(entry options) delete entry"
            },
            22: {
                shortcut: "ENTER",
                action: ["(datepicker) set date to selected date", "(form) submit form"]
            },
            23: {
                shortcut: "ESCAPE",
                action: "close any active modal/popup/form"
            }
        };
        const v = new class {
            constructor() {
                this.sessionOnlyKeys = new Set(["animationStatus", "dateSelected", "daySelected", "monthSelected", "pickerYearSelected", "pickerMonthSelected", "pickerDateSelected", "pickerDaySelected", "yearSelected", "colorScheme", "pickerDaySelected", "SidebarState", "component"]),
                this.cache = new Map,
                this.secondaryStorage = this.localStorageAvailable() ? localStorage : this.cache,
                this.serverStorageCache = new Map,
                this.serverStorage = new Map,
                this.hasServer = !1
            }
            setHasServer(e) {
                this.hasServer = e
            }
            getHasServer() {
                return this.hasServer
            }
            setUploadedData(e) {
                this.clear();
                for (const [t,o] of Object.entries(e))
                    this.setItem(t, o)
            }
            getAllData() {
                const e = {};
                for (let t = 0; t < this.length; t++) {
                    const o = this.key(t);
                    e[o] = this.getItem(o)
                }
                return e
            }
            localStorageAvailable() {
                try {
                    return localStorage.setItem("test", "test"),
                    localStorage.removeItem("test"),
                    !0
                } catch {
                    return !1
                }
            }
            setServerStorage(e) {
                this.serverStorage.set(e.key, e.value),
                this.secondaryStorage.setItem(e.key, e.value)
            }
            getServerStorage(e) {
                return this.serverStorage.get(e)
            }
            setItem(e, t) {
                this.hasServer ? this.sessionOnlyKeys.has(e) ? this.secondaryStorage.setItem(e, t) : this.setServerStorage({
                    key: e,
                    value: t
                }) : this.secondaryStorage.setItem(e, t)
            }
            getItem(e) {
                return this.hasServer ? this.sessionOnlyKeys.has(e) ? this.secondaryStorage.getItem(e) || null : this.getServerStorage(e) || this.secondaryStorage.getItem(e) || null : this.secondaryStorage.getItem(e) || null
            }
            removeItem(e) {
                this.hasServer ? (this.sessionOnlyKeys.has(e) || this.serverStorage.delete(e),
                this.secondaryStorage.removeItem(e)) : this.secondaryStorage.removeItem(e)
            }
            clear() {
                this.secondaryStorage.clear()
            }
            key(e) {
                return this.secondaryStorage instanceof Map ? [...this.secondaryStorage.keys()][e] : this.secondaryStorage.key(e)
            }
            get length() {
                return this.secondaryStorage instanceof Map ? this.secondaryStorage.size : this.secondaryStorage.length
            }
        }
        ;
        class S {
            constructor() {
                this.store = this.getInitStore(),
                this.userUpload = {},
                this.colors = t.Z.colorsMutedMed,
                this.ctg = this.getInitCtg(),
                this.activeOverlay = new Set,
                this.handleRenders = {
                    sidebar: {
                        callback: null
                    },
                    datepicker: {
                        reset: null
                    },
                    form: {
                        callback: null
                    },
                    reconfig: {
                        callback: null
                    },
                    categories: {
                        callback: null
                    },
                    calendars: {
                        previous: {
                            reset: null
                        },
                        month: {
                            reset: null,
                            resize: null
                        },
                        week: {
                            reset: null,
                            render: null
                        },
                        day: {
                            reset: null
                        },
                        list: {
                            reset: null
                        }
                    }
                },
                this.keyboardShortcuts = b,
                this.keyboardShortcutsStatus = !0,
                this.animationStatus = !1,
                this.hasServerIntegration = !1
            }
            getInitStore() {
                return v.getItem("store") ? JSON.parse(v.getItem("store")) : []
            }
            getInitCtg() {
                return v.getItem("ctg") ? JSON.parse(v.getItem("ctg")) : {
                    default: {
                        color: this.colors.blue[4],
                        active: !0
                    }
                }
            }
            setStoreForTesting(e) {
                this.store = e,
                S.setStore(this.store)
            }
            getStoreStats() {
                return [this.store.length, this.getAllCtgNames().length]
            }
            getAllMethodNames() {
                return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((e => "constructor" !== e && "getStoreStats" !== e))
            }
            static getStore() {
                return JSON.parse(v.getItem("store")) || []
            }
            static getActiveStore() {
                return JSON.parse(v.getItem("activeStore")) || []
            }
            static getCtg() {
                return JSON.parse(v.getItem("ctg")) || []
            }
            static getShortcutsStatus() {
                return JSON.parse(v.getItem("keyboardShortcutsStatus"))
            }
            static getAnimationStatus() {
                return JSON.parse(v.getItem("animationStatus"))
            }
            static setStore(e) {
                v.setItem("store", JSON.stringify(e))
            }
            static setActiveStore(e) {
                v.setItem("activeStore", JSON.stringify(e))
            }
            static setCtg(e) {
                v.setItem("ctg", JSON.stringify(e))
            }
            static setShortcutsStatus(e) {
                v.setItem("keyboardShortcutsStatus", JSON.stringify(e))
            }
            static setAnimationStatus(e) {
                v.setItem("animationStatus", JSON.stringify(e))
            }
            getColors() {
                return this.colors
            }
            getServerStatus() {
                return this.hasServerIntegration
            }
            addEntry(e) {
                this.store.push(e),
                S.setStore(this.store)
            }
            createEntry(...e) {
                this.addEntry(new f.ZP(...e)),
                S.setStore(this.store)
            }
            deleteEntry(e) {
                this.store = this.store.filter((t => t.id !== e)),
                S.setStore(this.store)
            }
            getActiveEntries() {
                const e = this.getActiveCategories();
                if (0 === e.length)
                    return [];
                return this.store.filter((t => e ? e.includes(t.category) : []))
            }
            getEntry(e) {
                return this.store.find((t => t.id === e))
            }
            getEntries() {
                return this.store || []
            }
            getEntriesByCtg(e) {
                return this.store.filter((t => t.category === e))
            }
            removeLastEntry() {
                this.store.pop(),
                S.setStore(this.store)
            }
            getLastEntryId() {
                return this.store.at(-1).id
            }
            compareEntries(e, t) {
                for (const o in e)
                    if ("id" !== o && "coordinates" !== o)
                        if ("end" === o || "start" === o) {
                            if (new Date(e[o]).getTime() - new Date(t[o]).getTime() != 0)
                                return !1
                        } else if (e[o] !== t[o])
                            return !1;
                return !0
            }
            updateEntry(e, t) {
                this.store = this.store.map((o => o.id === e ? Object.assign(o, t) : o)),
                S.setStore(this.store)
            }
            sortBy(e, t, o) {
                if (0 === e.length)
                    return [];
                const s = ["description", "title", "category"].includes(t)
                  , r = (e, t) => "desc" === o ? e - t : t - e;
                return e.sort(( (e, o) => "start" === t ? r(new Date(e.start), new Date(o.start)) : "end" === t ? r(new Date(e.end), new Date(o.end)) : s ? r(e[t].localeCompare(o[t])) : r(e[t], o[t])))
            }
            getFirstAndLastEntry() {
                const e = this.sortBy(this.getActiveEntries(), "start", "desc");
                return void 0 === e ? [0, 0] : [e[0].start, e.at(-1).end]
            }
            generateCoordinates(e, t) {
                [e,t] = [(0,
                o.If)(e), (0,
                o.If)(t)];
                const s = 4 * e.getHours() + Math.floor(e.getMinutes() / 15)
                  , r = 4 * t.getHours() + Math.floor(t.getMinutes() / 15) - s
                  , n = s + r;
                return (0,
                o.aN)(e, t) ? {
                    allDay: !1,
                    x: e.getDay(),
                    y: s,
                    h: r,
                    e: n
                } : {
                    allDay: !0,
                    x: e.getDay(),
                    x2: t.getDay()
                }
            }
            getDayEntries(e) {
                const t = this.getActiveEntries()
                  , o = {
                    allDay: [],
                    day: []
                };
                if (0 === t.length)
                    return o;
                const s = t.filter((t => {
                    const o = new Date(t.start)
                      , [s,r,n] = [o.getFullYear(), o.getMonth(), o.getDate()];
                    return s === e.getFullYear() && r === e.getMonth() && n === e.getDate()
                }
                ));
                for (const e of s)
                    e.coordinates = this.generateCoordinates(new Date(e.start), new Date(e.end)),
                    e.coordinates.allDay ? o.allDay.push(e) : o.day.push(e);
                return o
            }
            getDayEntriesArray(e) {
                const t = this.getActiveEntries();
                return 0 === t.length ? [] : t.filter((t => {
                    const o = new Date(t.start)
                      , [s,r,n] = [o.getFullYear(), o.getMonth(), o.getDate()];
                    return s === e.getFullYear() && r === e.getMonth() && n === e.getDate()
                }
                ))
            }
            getMonthEntries(e) {
                const t = this.getActiveEntries();
                return 0 === t.length ? [] : t.filter((t => {
                    const o = new Date(t.start);
                    return o >= e[0] && o <= e.at(-1)
                }
                ))
            }
            getMonthEntryDates(e) {
                const t = this.getMonthEntries(e)
                  , o = {};
                for (const e of t) {
                    const t = new Date(e.start)
                      , [s,r,n] = [t.getFullYear(), t.getMonth(), t.getDate()]
                      , a = `${s}-${r}-${n}`;
                    o[a] || (o[a] = []),
                    o[a].push(e)
                }
                return Object.keys(o)
            }
            getGroupedMonthEntries(e) {
                return e.reduce(( (e, t) => {
                    const o = new Date(t.start).getDate();
                    return e[o] || (e[o] = []),
                    e[o].push(t),
                    e
                }
                ), {})
            }
            getWeekEntries(e) {
                const t = this.getActiveEntries()
                  , [o,s] = [e[0], e[6]]
                  , r = {
                    allDay: [],
                    day: []
                };
                if (0 === t.length)
                    return r;
                const n = t.filter((e => {
                    const t = new Date(e.start);
                    return t >= o && t <= s
                }
                ));
                for (const e of n)
                    e.coordinates = this.generateCoordinates(new Date(e.start), new Date(e.end)),
                    e.coordinates.allDay ? r.allDay.push(e) : r.day.push(e);
                return r
            }
            getYearEntries(e) {
                const t = this.getActiveEntries();
                return 0 === t.length ? [] : t.filter((t => new Date(t.start).getFullYear() === e))
            }
            getGroupedYearEntries(e) {
                const t = {};
                for (const o of e) {
                    const e = new Date(o.start)
                      , s = e.getMonth()
                      , r = e.getDate();
                    t[s] || (t[s] = {}),
                    t[s][r] || (t[s][r] = []),
                    t[s][r].push(o)
                }
                return t
            }
            addNewCtg(e, t) {
                this.hasCtg(e) || (this.ctg[e] = {
                    color: t,
                    active: !0
                },
                S.setCtg(this.ctg))
            }
            deleteCategory(e) {
                this.hasCtg(e) && (delete this.ctg[e],
                S.setCtg(this.ctg))
            }
            getDefaultCtg() {
                return Object.entries(this.ctg)[0]
            }
            getFirstActiveCategory() {
                for (const [e,t] of Object.entries(this.ctg))
                    if (t.active)
                        return e;
                return "default"
            }
            getFirstActiveCategoryKeyPair() {
                for (const [e,t] of Object.entries(this.ctg))
                    if (t.active)
                        return [e, t.color];
                const e = this.getDefaultCtg();
                return [e[0], e[1].color]
            }
            getActiveCategories() {
                const e = Object.keys(this.ctg).filter((e => this.ctg[e].active));
                return e.length > 0 ? e : []
            }
            getActiveCategoriesKeyPair() {
                return Object.entries(this.ctg).filter((e => e[1].active))
            }
            getAllCtg() {
                return this.ctg
            }
            getAllCtgColors() {
                return Object.values(this.ctg).map((e => e.color))
            }
            getAllCtgNames() {
                return Object.keys(this.ctg)
            }
            getCtgColor(e) {
                return this.ctg[e].color
            }
            getCtgLength(e) {
                return this.store.filter((t => t.category === e)).length
            }
            hasCtg(e) {
                let t = !1;
                for (const o in this.ctg)
                    o.toLowerCase() === e.toLowerCase() && (t = !0);
                return t
            }
            moveCategoryEntriesToNewCategory(e, t, o) {
                if (this.hasCtg(e) || !0 === o) {
                    for (const o of this.store)
                        o.category === e && (o.category = t);
                    S.setStore(this.store)
                }
                this.deleteCategory(e)
            }
            removeCategoryAndEntries(e) {
                this.hasCtg(e) && (this.store = this.store.filter((t => t.category !== e)),
                S.setStore(this.store)),
                this.deleteCategory(e)
            }
            setCategoryStatus(e, t) {
                this.hasCtg(e) && (this.ctg[e].active = t,
                S.setCtg(this.ctg))
            }
            setAllCategoryStatusExcept(e, t) {
                for (const o in this.ctg)
                    this.ctg[o].active = o !== e ? t : !t;
                S.setCtg(this.ctg)
            }
            updateCtgColor(e, t) {
                this.hasCtg(e) && (this.ctg[e].color = t,
                S.setCtg(this.ctg))
            }
            getCtgIndex(e) {
                return Object.keys(this.ctg).indexOf(e)
            }
            updateCtg(e, t, o) {
                const s = Object.entries(this.ctg)
                  , r = null !== t
                  , n = s.length;
                !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(e) && (e = `category ${e}`);
                for (let n = 0; n < s.length; n++) {
                    const a = s[n][0];
                    o === a && (s[n][0] = e,
                    r && (s[n][1].color = t))
                }
                s.length === n ? (this.ctg = Object.fromEntries(s),
                this.moveCategoryEntriesToNewCategory(o, e, !0),
                S.setCtg(this.ctg)) : console.error("something went wrong with category name/color change")
            }
            getShortcuts() {
                return this.keyboardShortcuts
            }
            setShortcutsStatus(e) {
                this.keyboardShortcutsStatus = e,
                S.setShortcutsStatus(e)
            }
            getShortcutsStatus() {
                const e = S.getShortcutsStatus();
                return null === e || e
            }
            getAnimationStatus() {
                return null === S.getAnimationStatus() && (this.animationStatus = !1,
                v.setItem("animationStatus", JSON.stringify(!1))),
                this.animationStatus
            }
            setAnimationStatus(e) {
                this.animationStatus = e,
                S.setAnimationStatus(e)
            }
            addActiveOverlay(e) {
                this.activeOverlay.add(e)
            }
            removeActiveOverlay(e) {
                return 0 === this.activeOverlay.size ? void 0 : 1 === this.activeOverlay.size ? void (this.activeOverlay = new Set) : void (this.activeOverlay = new Set([...this.activeOverlay].filter((t => t !== e))))
            }
            getActiveOverlay() {
                return this.activeOverlay
            }
            hasActiveOverlay() {
                return this.activeOverlay.size > 0
            }
            setUserUpload(e) {
                v.setUploadedData(e),
                window.location.reload()
            }
            setFormRenderHandle(e, t) {
                this.handleRenders.calendars[e].render = t
            }
            setFormResetHandle(e, t) {
                this.handleRenders.calendars[e].reset = t
            }
            setRenderFormCallback(e) {
                this.handleRenders.form.callback = e
            }
            setRenderSidebarCallback(e) {
                this.handleRenders.sidebar.callback = e
            }
            setResizeHandle(e, t) {
                this.handleRenders.calendars[e].resize = t
            }
            setDataReconfigCallback(e) {
                this.handleRenders.reconfig.callback = e
            }
            setResetDatepickerCallback(e) {
                this.handleRenders.datepicker.reset = e
            }
            setResetPreviousViewCallback(e) {
                this.handleRenders.calendars.previous.reset = e
            }
            setRenderCategoriesCallback(e) {
                this.handleRenders.categories.callback = e
            }
            getRenderCategoriesCallback() {
                return this.handleRenders.categories.callback
            }
            getResetPreviousViewCallback() {
                return this.handleRenders.calendars.previous.reset
            }
            getResetDatepickerCallback() {
                return this.handleRenders.datepicker.reset
            }
            getDataReconfigCallback() {
                return this.handleRenders.reconfig.callback
            }
            getResizeHandle(e) {
                return void 0 === this.handleRenders.calendars[e] ? null : this.handleRenders.calendars[e].resize
            }
            getFormRenderHandle(e) {
                return void 0 === this.handleRenders.calendars[e] ? null : this.handleRenders.calendars[e].render
            }
            getFormResetHandle(e) {
                return void 0 === this.handleRenders.calendars[e].reset ? null : this.handleRenders.calendars[e].reset
            }
            getRenderFormCallback() {
                const e = this.handleRenders.form.callback;
                return null !== e ? e : null
            }
            getRenderSidebarCallback() {
                const e = this.handleRenders.sidebar.callback;
                return null !== e ? e : null
            }
        }
        const k = new S
          , w = document.querySelector(".toast");
        function _(e, t) {
            function o() {
                w.classList.remove("show-toast"),
                w.innerText = "",
                document.onmousedown = null,
                document.onkeydown = null,
                k.removeActiveOverlay("toast")
            }
            !async function() {
                "false" === w.getAttribute("data-has-css") && await r.e(787).then(r.bind(r, 787)).then(( () => {
                    w.setAttribute("data-has-css", "true")
                }
                )),
                w.innerText = "";
                const a = document.createElement("div");
                a.classList.add("toast-message"),
                a.textContent = e;
                const c = document.createElement("div");
                c.classList.add("close-toast-icon-wrapper"),
                c.append((0,
                n.G0)("var(--white4)"));
                const i = document.createElement("div");
                i.classList.add("undo-toast-wrapper");
                const l = document.createElement("div");
                l.classList.add("undo-toast-message"),
                l.textContent = "Undo",
                i.append(l),
                w.append(a, i, c),
                w.classList.add("show-toast"),
                k.addActiveOverlay("toast"),
                document.onkeydown = function(e) {
                    e.key && o()
                }
                ,
                document.onmousedown = function(e) {
                    if (!(0,
                    s.As)(e, ".toast"))
                        return void o();
                    const r = (0,
                    s.As)(e, ".undo-toast-wrapper")
                      , n = (0,
                    s.As)(e, ".close-toast-icon-wrapper");
                    if (r)
                        return t(),
                        void o();
                    n && o()
                }
            }()
        }
        const A = document.querySelector(".sidebar")
          , D = document.querySelector(".datepicker")
          , L = document.querySelector(".datepicker-overlay")
          , C = document.querySelector(".form-overlay")
          , x = document.querySelector(".form-modal-overlay")
          , E = document.querySelector(".entries__form")
          , M = document.querySelector(".entries__form--header")
          , q = document.querySelector(".entry-form")
          , $ = document.querySelector(".entries__form--body")
          , N = document.querySelector(".form--body__title-input")
          , Y = document.querySelector(".form--body__description-input")
          , O = document.querySelector(".form--body-start__date")
          , T = document.querySelector(".form--body-end__date")
          , I = document.querySelector(".form--body-start__time")
          , F = document.querySelector(".form--body-end__time")
          , P = document.querySelector(".form--body__category-modal")
          , R = document.querySelector(".close-options-floating__btn")
          , j = document.querySelector(".form--body__category-icon")
          , B = document.querySelector(".form--body__category-modal--wrapper")
          , H = document.querySelector(".form--body__category-modal--wrapper-selection")
          , Z = document.querySelector(".form--body__category-modal--wrapper__color")
          , W = document.querySelector(".form--body__category-modal--wrapper__title")
          , J = document.querySelector(".form--footer__button-save");
        function U(r, a, c) {
            let i, l, d, [u,m] = [null, null, null];
            function g() {
                const e = document?.querySelector(".timepicker")
                  , t = document?.querySelector(".timepicker-overlay")
                  , o = document?.querySelector(".timepicker-times__container")
                  , s = document?.querySelector(".active-form-time");
                e && (e.scrollTo(0, 0),
                e.remove(),
                t.remove(),
                t.onclick = null,
                o.onclick = null),
                s && s.classList.remove("active-form-time")
            }
            function h() {
                const {labels: e} = t.Z
                  , o = O.getAttribute("data-form-date").split("-").map((e => Number.parseInt(e)))
                  , s = new Date(o[0],o[1],o[2] + 1)
                  , r = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`
                  , n = e.monthsShort[s.getMonth()] + " " + s.getDate() + ", " + s.getFullYear();
                T.setAttribute("data-form-date", r),
                T.textContent = n,
                F.setAttribute("data-form-time", "00:30"),
                F.textContent = "12:30am"
            }
            function f(e, t, r, n) {
                const a = document.createElement("div");
                a.classList.add("timepicker"),
                a.style.top = `${e.y}px`,
                a.style.left = `${e.x}px`;
                const c = document.createElement("div");
                c.classList.add("timepicker-overlay");
                const i = document.createElement("div");
                i.classList.add("timepicker-times__container");
                const l = O.getAttribute("data-form-date")
                  , d = T.getAttribute("data-form-date");
                if (null !== n && l === d) {
                    l === d && "11:45" === t && (h(),
                    t = "00:00");
                    const e = I.getAttribute("data-form-time")
                      , [s,n] = (0,
                    o.kt)(e);
                    let[a,c] = [s, n];
                    for (let e = s; e < 24; e++)
                        for (let t = 0; t < 60; t += 15) {
                            const [s,n] = (0,
                            o.kt)(`${e}:${t}`);
                            if (s <= a && n <= c)
                                continue;
                            const l = document.createElement("div");
                            l.classList.add("timepicker-time"),
                            l.setAttribute("data-tp-for", r ? "end" : "start"),
                            l.setAttribute("data-tp-time", `${s}:${n}`),
                            l.textContent = (0,
                            o.gG)(s, n),
                            i.append(l)
                        }
                } else {
                    const [e,s] = (0,
                    o.kt)(t);
                    for (let t = 0; t < 24; t++)
                        for (let n = 0; n < 60; n += 15) {
                            const [a,c] = (0,
                            o.kt)(`${t}:${n}`)
                              , l = document.createElement("div");
                            l.classList.add("timepicker-time"),
                            l.setAttribute("data-tp-for", r ? "end" : "start"),
                            l.setAttribute("data-tp-time", `${a}:${c}`),
                            l.textContent = (0,
                            o.gG)(a, c),
                            a === e && c === s && l.classList.add("timepicker-time--selected"),
                            i.append(l)
                        }
                }
                a.append(i);
                const [u,m] = e;
                a.setAttribute("style", `top:${m}px; left:${u}px;`),
                document.body.prepend(c, a),
                c.onclick = g,
                i.onclick = e => {
                    (0,
                    s.As)(e, ".timepicker-time") && function(e) {
                        const {target: t} = e
                          , s = t.textContent
                          , r = t.getAttribute("data-tp-time")
                          , n = t.getAttribute("data-tp-for")
                          , [a,c] = (0,
                        o.kt)(r)
                          , [i,l] = (0,
                        o.kt)(F.getAttribute("data-form-time"));
                        if ("start" === n) {
                            if (I.textContent = s.startsWith("0") ? s.slice(1) : s,
                            I.setAttribute("data-form-time", r),
                            a > i || a === i && c >= l) {
                                let[e,t] = (0,
                                o.DT)(a, c);
                                F.textContent = e,
                                F.setAttribute("data-form-time", t.join(":"))
                            }
                        } else
                            F.textContent = s.startsWith("0") ? s.slice(1) : s,
                            F.setAttribute("data-form-time", r);
                        g()
                    }(e)
                }
                ;
                const p = document?.querySelector(".timepicker-time--selected");
                p && a.scrollTo(0, p.offsetTop)
            }
            function b(e, t) {
                e.preventDefault(),
                "start" === t ? (O.setAttribute("class", "form--body-start__date active-form-date"),
                T.setAttribute("class", "form--body-end__date inactive-form-date")) : (O.setAttribute("class", "form--body-start__date inactive-form-date"),
                T.setAttribute("class", "form--body-end__date active-form-date"));
                const [s,n,i] = (0,
                o.pH)(e.target, "data-form-date")
                  , l = e.target.getBoundingClientRect()
                  , d = Number.parseInt(l.left)
                  , u = Number.parseInt(l.bottom);
                let m = Number.parseInt(l.top);
                var g, h, y;
                "end" === t && (m -= 40),
                window.innerHeight - 216 <= u && (m = window.innerHeight - 242),
                D.setAttribute("style", `top:${m}px;left:${d}px;`),
                g = s,
                h = n,
                y = i,
                L.classList.remove("hide-datepicker-overlay"),
                D.classList.remove("hide-datepicker"),
                a.addActiveOverlay("hide-datepicker-overlay"),
                c.setDate(g, h, y),
                c.setDateSelected(y),
                p(r, a, c, "form")
            }
            function v(e) {
                return new Date(...e.split("-").map((e => Number.parseInt(e))))
            }
            function S(e, t) {
                return e.setHours(t[0]),
                e.setMinutes(t[1]),
                e.setSeconds(0),
                e
            }
            function k(e) {
                if (e.target.classList.contains("form-input-error"))
                    e.preventDefault(),
                    e.target.classList.remove("form-input-error"),
                    e.target.removeAttribute("data-form-error-message"),
                    e.target.firstElementChild.focus();
                else {
                    if (!e.target.classList.contains("form-input-error__custom-input"))
                        return;
                    e.target.classList.remove("form-input-error__custom-input"),
                    e.target.removeAttribute("data-form-error-message"),
                    e.target.focus()
                }
            }
            function w() {
                a.removeLastEntry(),
                (0,
                e.Z)(d, r, a, c)
            }
            function U() {
                const e = document?.querySelectorAll(".form-input-error");
                if (e)
                    for (const t of e)
                        t.classList.remove("form-input-error"),
                        t.removeAttribute("data-form-error-message")
            }
            function z() {
                D.classList.contains("hide-datepicker") || (D.classList.add("hide-datepicker"),
                L.classList.add("hide-datepicker-overlay")),
                U(),
                C.onclick = null,
                M.onmousedown = null,
                E.onclick = null,
                document.removeEventListener("keydown", oe),
                E.classList.add("hide-form"),
                C.classList.add("hide-form-overlay"),
                a.removeActiveOverlay("hide-datepicker-overlay"),
                a.removeActiveOverlay("hide-form-overlay"),
                q.reset(),
                Y.value = "",
                N.value = "",
                B.classList.contains("category-modal-open") && G();
                const e = a.getFormResetHandle(d);
                null !== e && (e(),
                a.setFormResetHandle(d, null))
            }
            function Q(t, o, s, n) {
                if (r.setDate(t.getFullYear(), t.getMonth(), t.getDate()),
                r.setDateSelected(t.getDate()),
                (0,
                e.Z)(d, r, a, c),
                a.getDayEntriesArray(r.getDate()).length <= 1 && (A.classList.contains("hide-sidebar") || (r.setDateSelected(m),
                (0,
                y.Z)(r, a, c))),
                z(),
                "create" === o)
                    setTimeout(( () => {
                        _("Event created", w)
                    }
                    ), 4);
                else {
                    if (!a.compareEntries(n, a.getEntry(s))) {
                        const t = () => {
                            !function(t, o) {
                                const s = new Date(o.start);
                                a.updateEntry(t, {
                                    category: o.category,
                                    completed: o.completed,
                                    description: o.description,
                                    end: new Date(o.end),
                                    id: t,
                                    start: s,
                                    title: o.title
                                }),
                                r.setDate(s.getFullYear(), s.getMonth(), s.getDate()),
                                r.setDateSelected(s.getDate()),
                                (0,
                                e.Z)(d, r, a, c)
                            }(s, n)
                        }
                        ;
                        setTimeout(( () => {
                            _("Event updated", t)
                        }
                        ), 4)
                    }
                }
            }
            function K(e) {
                e.preventDefault();
                const t = N.value
                  , s = Y.value
                  , [r,n] = function() {
                    const e = v(O.getAttribute("data-form-date"))
                      , t = I.getAttribute("data-form-time")
                      , [s,r] = (0,
                    o.kt)(t)
                      , n = v(T.getAttribute("data-form-date"))
                      , a = F.getAttribute("data-form-time")
                      , [c,i] = (0,
                    o.kt)(a);
                    return [S(e, [s, r]), S(n, [c, i])]
                }()
                  , c = B.getAttribute("data-form-category")
                  , i = function(e, t, s, r, n) {
                    const c = {
                        title: !0,
                        description: !0,
                        startDate: !0,
                        endDate: !0,
                        valid: !0
                    };
                    if ("string" == typeof e) {
                        const t = e.trim().replaceAll(/[^\s\w-]+|\s{2,}/g, " ");
                        t.length > 50 ? (c.title = "Title must be Less than 50 characters",
                        c.valid = !1) : 0 === t.length && (c.title = "Title cannot be empty",
                        c.valid = !1)
                    } else
                        c.title = "Title cannot be empty";
                    t.length >= 200 && (c.description = "Description must be less than 200 characters",
                    c.valid = !1),
                    a.hasCtg(s) && s || B.setAttribute("data-form-category", "default"),
                    r ? (0,
                    o.J_)(r) || (c.startDate = "Start date is not valid",
                    c.valid = !1) : (c.startDate = "Start date cannot be empty",
                    c.valid = !1),
                    n ? (0,
                    o.J_)(n) ? (0,
                    o.gO)(r, n) || (c.endDate = "End date must be after start date",
                    c.valid = !1) : (c.endDate = "End date is not valid",
                    c.valid = !1) : (c.endDate = "End date cannot be empty",
                    c.valid = !1);
                    const i = {};
                    let l;
                    for (const e in c)
                        !0 !== c[e] && (i[e] = c[e],
                        l = !0);
                    return !l || i
                }(t, s, c, r, n);
                if (!0 === i) {
                    if ("edit" === J.getAttribute("data-form-action")) {
                        const e = J.getAttribute("data-form-entry-id")
                          , o = structuredClone(a.getEntry(e));
                        return a.updateEntry(e, {
                            category: c,
                            completed: !1,
                            description: s,
                            end: n,
                            id: e,
                            start: r,
                            title: t
                        }),
                        void Q(r, "edit", e, o)
                    }
                    a.createEntry(c, !1, s, n, r, t),
                    Q(r, "create", a.getLastEntryId(), null)
                } else
                    !function(e) {
                        N.blur();
                        const t = {
                            title: N,
                            description: Y,
                            startDate: O,
                            endDate: T
                        }
                          , o = "data-form-error-message"
                          , s = "form-input-error"
                          , r = "form-input-error__custom-input"
                          , n = "form-error__submit-btn";
                        for (const n in e)
                            if (t[n])
                                if ("title" === n || "description" === n)
                                    t[n].parentElement.setAttribute(o, e[n]),
                                    t[n].parentElement.classList.add(s);
                                else {
                                    t[n].setAttribute(o, e[n]),
                                    t[n].classList.add(r);
                                    const s = t[n].parentElement.parentElement.firstElementChild.firstElementChild;
                                    s.style.fill = "var(--red2)",
                                    setTimeout(( () => {
                                        s.style.fill = "var(--white3)"
                                    }
                                    ), 1e3)
                                }
                        J.classList.add(n),
                        setTimeout(( () => {
                            J.classList.remove(n)
                        }
                        ), 1e3)
                    }(i)
            }
            function G() {
                R.style.display = "none",
                B.classList.remove("category-modal-open"),
                P.classList.add("hide-form-category-modal"),
                H.classList.remove("hide-form-category-selection"),
                x.classList.add("hide-form-overlay"),
                B.removeAttribute("style"),
                P.innerText = ""
            }
            function V(e, t) {
                const o = t.length;
                1 !== o && (R.removeAttribute("style"),
                setTimeout(( () => {
                    $.scrollTo({
                        top: $.scrollHeight,
                        behavior: "smooth"
                    })
                }
                ), 5),
                o >= 5 ? R.setAttribute("style", "top: -100px") : R.setAttribute("style", `top: ${20 * o * -1}px`),
                B.classList.add("category-modal-open"),
                B.style.height = o < 5 ? 32 * o + "px" : "160px",
                H.classList.add("hide-form-category-selection"),
                P.classList.remove("hide-form-category-modal"),
                P.style.height = 32 * o + "px",
                P.innerText = "",
                function(e, t) {
                    const o = B.getAttribute("data-form-category");
                    for (const [s,r] of t) {
                        const t = r.color
                          , a = document.createElement("div");
                        a.classList.add("category-modal--category"),
                        a.style.width = "200px",
                        a.style.backgroundColor = t,
                        a.setAttribute("data-form-category-title", s),
                        a.setAttribute("data-form-category-color", t);
                        const c = document.createElement("div");
                        c.classList.add("category-modal--category-color"),
                        c.style.backgroundColor = t;
                        const i = document.createElement("div");
                        if (i.classList.add("category-modal--category-title"),
                        i.textContent = s,
                        s === o) {
                            const e = (0,
                            n.pr)("var(--white4)")
                              , t = document.createElement("div");
                            t.classList.add("category-modal--category-check"),
                            t.append(e),
                            a.append(c, i, t)
                        } else
                            a.append(c, i);
                        e.append(a)
                    }
                }(P, t),
                x.classList.remove("hide-form-overlay"))
            }
            function X(e) {
                const t = e.getBoundingClientRect()
                  , [o,r] = (0,
                s.tb)(180, 200, [Number.parseInt(t.left), Number.parseInt(t.top)], [window.innerWidth, window.innerHeight], !1);
                return [o, r]
            }
            function ee(e) {
                const t = (0,
                s.As)(e, ".form-header--dragarea")
                  , o = (0,
                s.As)(e, ".form--header__icon-close");
                if (t) {
                    if (window.innerWidth < 500 || window.innerHeight < 500)
                        return;
                    !function(e) {
                        const t = document.querySelector(".form--header__icon-close")
                          , o = E.getBoundingClientRect()
                          , [r,n] = [Number.parseInt(o.left), Number.parseInt(o.top)];
                        E.style.margin = "0",
                        E.style.opacity = "0.8",
                        E.style.userSelect = "none",
                        E.style.top = n + "px",
                        E.style.left = r + "px",
                        E.style.bottom = "0",
                        E.style.right = "0",
                        t.style.pointerEvents = "none",
                        q.style.pointerEvents = "none";
                        let[a,c] = [e.clientX, e.clientY];
                        const [i,l] = [window.innerHeight, window.innerWidth]
                          , d = (0,
                        s.P2)((function(e) {
                            const [t,o] = [a - e.clientX, c - e.clientY];
                            a = e.clientX,
                            c = e.clientY,
                            E.offsetTop < 0 && (E.style.top = "0px"),
                            E.offsetLeft < 0 && (E.style.left = "0px"),
                            E.offsetLeft + E.offsetWidth > l && (E.style.left = l - E.offsetWidth + "px"),
                            E.offsetTop + E.offsetHeight > i && (E.style.top = i - E.offsetHeight + "px"),
                            E.style.top = E.offsetTop - o + "px",
                            E.style.left = E.offsetLeft - t + "px"
                        }
                        ), 10);
                        document.addEventListener("mousemove", d),
                        document.addEventListener("mouseup", (function e() {
                            E.style.opacity = "1",
                            E.style.userSelect = "all",
                            t.removeAttribute("style"),
                            q.removeAttribute("style"),
                            document.removeEventListener("mousemove", d),
                            document.removeEventListener("mouseup", e)
                        }
                        ))
                    }(e)
                } else
                    o && z()
            }
            function te(e) {
                const t = (0,
                s.As)(e, ".form--body-start__date")
                  , o = (0,
                s.As)(e, ".form--body-start__time")
                  , r = (0,
                s.As)(e, ".form--body-end__date")
                  , n = (0,
                s.As)(e, ".form--body-end__time")
                  , a = (0,
                s.As)(e, ".form--body__category-modal")
                  , c = (0,
                s.As)(e, ".form--body__category-modal--wrapper-selection")
                  , l = (0,
                s.As)(e, ".close-options-floating__btn")
                  , d = (0,
                s.As)(e, ".form-modal-overlay")
                  , u = (0,
                s.As)(e, ".form-input-error")
                  , m = (0,
                s.As)(e, ".form-input-error__custom-input")
                  , g = (0,
                s.As)(e, ".form--footer__button-cancel")
                  , h = (0,
                s.As)(e, ".form--footer__button-save");
                if (t)
                    b(e, "start");
                else {
                    if (o)
                        return e.target.classList.add("active-form-time"),
                        void f(X(e.target), I.getAttribute("data-form-time"), !1, null);
                    if (r)
                        b(e, "end");
                    else {
                        if (n)
                            return e.target.classList.add("active-form-time"),
                            void f(X(e.target), F.getAttribute("data-form-time"), !0, I.getAttribute("data-form-time"));
                        if (a)
                            P.childElementCount > 0 && function(e) {
                                const t = e.target.getAttribute("data-form-category-title")
                                  , o = e.target.getAttribute("data-form-category-color");
                                B.setAttribute("data-form-category", t),
                                j.firstElementChild.setAttribute("fill", o),
                                H.style.backgroundColor = o,
                                Z.style.backgroundColor = o,
                                W.textContent = t,
                                G()
                            }(e);
                        else if (c)
                            V(0, i);
                        else if (l)
                            G();
                        else if (d)
                            G();
                        else if (u)
                            k(e);
                        else {
                            if (!m)
                                return g ? (q.reset(),
                                U(),
                                se(),
                                void G()) : void (h && K(e));
                            k(e)
                        }
                    }
                }
            }
            function oe(e) {
                if (D.classList.contains("hide-datepicker")) {
                    const t = document?.querySelector(".timepicker")
                      , o = document?.querySelector(".hide-form-category-modal");
                    "Escape" === e.key && (null !== t ? g() : null === o ? G() : z()),
                    "Enter" === e.key && (null !== t ? g() : null === o ? G() : K(e))
                }
            }
            function se() {
                i = Object.entries(a.getAllCtg()),
                l = a.getActiveCategoriesKeyPair(),
                d = r.getComponent(),
                u = r.getYear(),
                m = r.getDay(),
                Y.value = "",
                N.blur(),
                N.value = "",
                setTimeout(( () => {
                    N.focus()
                }
                ), 10),
                function() {
                    const [e,t] = 0 === l.length ? [i[0][0], i[0][1].color] : [l[0][0], l[0][1].color];
                    B.setAttribute("data-form-category", e),
                    H.style.backgroundColor = t,
                    W.textContent = e,
                    Z.style.backgroundColor = t,
                    j.firstElementChild.setAttribute("fill", t)
                }(),
                c.setDate(r.getDate()),
                r.setDateSelected(m);
                const e = `${r.getMonthName().slice(0, 3)} ${m}, ${u}`;
                O.textContent = e,
                O.setAttribute("data-form-date", (0,
                o.Ye)(r.getDate())),
                T.textContent = e,
                T.setAttribute("data-form-date", (0,
                o.Ye)(r.getDate()));
                const t = r.getDate();
                let[s,n] = [t.getHours(), t.getMinutes()];
                n = n % 15 != 0 ? 15 * Math.ceil(n / 15) : n;
                let[g,p] = (0,
                o.DT)(s, n);
                23 === s && 45 === n && (h(),
                [g,p] = (0,
                o.DT)(1, 15)),
                F.textContent = g,
                F.setAttribute("data-form-time", p.join(":")),
                I.setAttribute("data-form-time", (0,
                o.yi)(s, n)),
                I.textContent = (0,
                o.gG)(s, n),
                J.setAttribute("data-form-action", "create"),
                J.setAttribute("data-form-id", ""),
                M.onmousedown = ee,
                C.onclick = z,
                E.onclick = te,
                document.addEventListener("keydown", oe)
            }
            se()
        }
        const z = document.querySelector(".go-to-date-overlay")
          , Q = document.querySelector(".go-to-date")
          , K = document.querySelector(".go-to-input")
          , G = document.querySelector(".go-to-err")
          , V = document.querySelector(".cancel-go-to")
          , X = document.querySelector(".submit-go-to");
        function ee(o, s, r) {
            const n = o.getDate()
              , {labels: a} = t.Z
              , {monthsShortLower: c} = a;
            function i() {
                G.style.display = "none",
                G.onmousedown = null
            }
            function l() {
                const t = function(e) {
                    const t = e.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
                      , o = e.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+(\d{1,2})\s+(\d{4})$/i);
                    let s, r, n;
                    if (t)
                        [,s,r,n] = t,
                        s = Number.parseInt(s, 10) - 1,
                        r = Number.parseInt(r, 10),
                        n = Number.parseInt(n, 10);
                    else {
                        if (!o)
                            return !1;
                        {
                            const [,e,t,a] = o;
                            s = c.indexOf(e.toLowerCase()),
                            r = Number.parseInt(t, 10),
                            n = Number.parseInt(a, 10)
                        }
                    }
                    const a = new Date(n,s,r);
                    return a.getFullYear() === n && a.getMonth() === s && a.getDate() === r && a
                }(K.value.toLowerCase());
                if (t instanceof Date) {
                    o.setDateFromDateObj(t),
                    o.setDateSelected(t.getDate()),
                    "hide" !== o.getSidebarState() && (0,
                    y.Z)(o, s, r);
                    const n = o.getComponent();
                    "list" === n && o.setComponent("day"),
                    u(),
                    (0,
                    e.Z)(n, o, s, r)
                } else
                    G.style.display = "block",
                    G.onmousedown = i
            }
            function d(e) {
                const t = e.key.toLowerCase();
                "escape" !== t ? "enter" !== t || l() : "block" === G.style.display ? i() : u()
            }
            function u() {
                document.removeEventListener("keydown", d),
                V.onclick = null,
                X.onclick = null,
                s.removeActiveOverlay("hide-gotodate"),
                z.classList.add("hide-gotodate"),
                Q.classList.add("hide-gotodate"),
                K.value = ""
            }
            i(),
            setTimeout(( () => {
                K.focus(),
                K.value = function() {
                    const [e,t,o] = [n.getFullYear(), n.getMonth(), n.getDate()];
                    return `${c[t]} ${o} ${e}`
                }()
            }
            ), 10),
            z.classList.remove("hide-gotodate"),
            Q.classList.remove("hide-gotodate"),
            s.addActiveOverlay("hide-gotodate"),
            document.addEventListener("keydown", d),
            V.onclick = u,
            X.onclick = l
        }
        const te = class {
            constructor(e, t) {
                this.catname = e,
                this.catcolor = t,
                this.errMsg = "",
                this.prevColorIdx = t,
                this.originalName = e,
                this.originalColor = t
            }
            setName(e) {
                this.catname = e
            }
            setColor(e) {
                this.catcolor = e
            }
            setPrevColor(e) {
                this.prevColorIdx = e
            }
            getName() {
                return this.catname
            }
            getColor() {
                return this.catcolor
            }
            prevColor() {
                return this.prevColorIdx
            }
            setErrMsg(e) {
                this.errMsg = e
            }
            getErrMsg() {
                return this.errMsg
            }
            getOriginalName() {
                return this.originalName
            }
            getOriginalColor() {
                return this.originalColor
            }
        }
          , oe = document.querySelector(".category__form")
          , se = document.querySelector(".category__form-overlay")
          , re = document.querySelector(".category__form-input")
          , ne = document.querySelector(".color-picker__options")
          , ae = document.querySelector(".ctg-input--err");
        function ce(e, t, o, r) {
            const n = Object.values(e.getColors())
              , a = new te(t.name,t.color);
            function c(e, t) {
                const o = document.createElement("div");
                return o.classList.add("color-picker--option"),
                o.style.backgroundColor = e,
                o.setAttribute("data-color-hex", e),
                e === t && (o.classList.add("selected-color"),
                a.setColor(e)),
                o
            }
            function i(t, r) {
                let n = t.trim().replaceAll(/[^\d\sA-Za-z]+|\s{2,}/g, " ").trim();
                (0,
                s.kE)(n) && (n = `category ${n}`);
                const c = a.getOriginalName();
                let i = !1;
                if (0 === n.length ? (a.setErrMsg("Category name is required"),
                i = !0) : e.hasCtg(n) && (!o || o && c !== n) && (a.setErrMsg("Category already exists"),
                i = !0),
                i)
                    return ae.classList.remove("hide-ctg-err"),
                    ae.textContent = a.getErrMsg(),
                    void (ae.onclick = () => {
                        ae.classList.add("hide-ctg-err"),
                        re.focus()
                    }
                    );
                {
                    if (o) {
                        if (c === n && a.getOriginalColor() === r)
                            return void l();
                        c !== n ? e.updateCtg(n, r, a.getName()) : e.updateCtgColor(c, r)
                    } else
                        e.addNewCtg(n, r);
                    const t = e.getRenderCategoriesCallback();
                    l(),
                    t()
                }
            }
            function l() {
                null !== r && r.removeAttribute("style"),
                oe.classList.add("hide-ctg-form"),
                se.classList.add("hide-ctg-form"),
                re.value = "",
                ae.classList.add("hide-ctg-err"),
                e.removeActiveOverlay("hide-ctg-form"),
                oe.onmousedown = null,
                se.onclick = null,
                document.removeEventListener("keydown", d)
            }
            function d(e) {
                const t = e.key.toLowerCase();
                "escape" === t ? ae.classList.contains("hide-ctg-err") ? l() : (ae.classList.add("hide-ctg-err"),
                re.focus()) : "enter" === t && i(re.value, a.getColor())
            }
            function u(e, t) {
                return e.target.closest(t)
            }
            function m(e) {
                const t = u(e, ".category__form--cancel")
                  , o = u(e, ".color-picker--option")
                  , s = u(e, ".category__form--submit");
                if (!t)
                    return o ? (function(e, t) {
                        const o = e.target
                          , s = o.getAttribute("data-color-hex");
                        s !== t && (document?.querySelector(".selected-color")?.classList.remove("selected-color"),
                        o.classList.add("selected-color"),
                        re.style.border = `2px solid ${s}`,
                        e.target.blur(),
                        a.setColor(s))
                    }(e, a.getColor()),
                    void re.focus()) : void (s && i(re.value, a.getColor()));
                l()
            }
            !function(e) {
                if (0 === ne.children.length)
                    for (const t of n)
                        for (const o of Object.values(t))
                            ne.append(c(o, e))
            }(a.getColor()),
            function(t) {
                if (e.addActiveOverlay("hide-ctg-form"),
                se.classList.remove("hide-ctg-form"),
                oe.classList.remove("hide-ctg-form"),
                oe.removeAttribute("style"),
                null !== r) {
                    const e = r.getBoundingClientRect()
                      , t = Number.parseInt(e.right);
                    oe.setAttribute("style", `left:${t}px;top:0;margin-top:auto;`)
                } else
                    oe.setAttribute("style", "inset:5%;margin:auto;");
                ae.classList.add("hide-ctg-err"),
                re.style.border = `2px solid ${a.getColor()}`,
                setTimeout(( () => {
                    t ? re.value = a.getName() : re.placeholder = "create new category...",
                    re.focus()
                }
                ), 4)
            }(o),
            oe.onmousedown = m,
            se.onclick = l,
            document.addEventListener("keydown", d)
        }
        const ie = document.querySelector(".shortcuts-modal-overlay")
          , le = document.querySelector(".shortcuts__modal")
          , de = document.querySelector(".shortcuts-modal-content")
          , ue = document.querySelector(".close-shortcuts-modal")
          , me = document.querySelector(".keyboard-disabled-sm-two");
        function ge(e) {
            function t(e, t) {
                const o = document.createElement("div");
                o.classList.add("sm-item");
                const s = document.createElement("div");
                s.classList.add("sm-key");
                const r = document.createElement("span");
                if (Array.isArray(e)) {
                    const t = document.createElement("span");
                    t.textContent = " or ";
                    const o = document.createElement("span");
                    r.textContent = e[0].toUpperCase(),
                    o.textContent = e[1].toUpperCase(),
                    s.append(r, t, o)
                } else
                    "ENTER" != e && "ESCAPE" != e && "DELETE" != e || r.classList.add("key-full"),
                    r.textContent = e.toUpperCase(),
                    s.append(r);
                const n = document.createElement("div");
                if (n.classList.add("sm-description"),
                Array.isArray(t)) {
                    o.classList.add("sm-item--full"),
                    n.classList.add("sm-description--full");
                    const e = document.createElement("span")
                      , s = document.createElement("span");
                    e.textContent = t[0],
                    s.textContent = t[1],
                    n.append(e, s)
                } else
                    n.textContent = t;
                return o.append(s, n),
                o
            }
            function o() {
                de.innerText = "",
                ie.classList.add("hide-shortcuts"),
                le.classList.add("hide-shortcuts"),
                e.removeActiveOverlay("hide-shortcuts"),
                document.removeEventListener("keydown", s)
            }
            function s(e) {
                const t = e.key.toLowerCase();
                "escape" !== t && "/" !== t && "?" !== t || o()
            }
            function r(e) {
                e ? (me.setAttribute("data-tooltip", "Keyboard shortcuts enabled"),
                me.firstElementChild.setAttribute("fill", "var(--primary1)")) : (me.setAttribute("data-tooltip", "Keyboard shortcuts disabled"),
                me.firstElementChild.setAttribute("fill", "var(--red1)"))
            }
            !function() {
                ie.classList.remove("hide-shortcuts"),
                le.classList.remove("hide-shortcuts"),
                e.addActiveOverlay("hide-shortcuts"),
                r(e.getShortcutsStatus());
                const n = e.getShortcuts();
                for (let e = 0; e < Object.values(n).length; e++) {
                    const o = Object.values(n)[e];
                    de.append(t(o.shortcut, o.action))
                }
                ie.onclick = o,
                ue.onclick = o,
                me.onclick = function() {
                    const t = !1 === e.getShortcutsStatus();
                    r(t),
                    e.setShortcutsStatus(t)
                }
                ,
                document.addEventListener("keydown", s)
            }()
        }
        const he = document.querySelector(".sb__categories")
          , pe = document.querySelector(".sb__categories--body")
          , ye = document.querySelector(".sb__categories--body-form")
          , fe = document.querySelector(".sb__categories--header")
          , be = document.querySelector(".sbch-caret");
        function ve(t, o, r) {
            const a = o.getDefaultCtg()[0];
            function c() {
                (0,
                e.Z)(t.getComponent(), t, o, r)
            }
            function i() {
                (0,
                y.Z)(t, o, r)
            }
            function l() {
                ye.innerText = "";
                const e = o.getAllCtg()
                  , t = Object.keys(e);
                for (let o = 0; o < t.length; o++) {
                    const [s,r,n] = [t[o], e[t[o]].color, e[t[o]].active];
                    d(s, r, n)
                }
            }
            function d(e, t, o) {
                const s = document.createElement("div");
                s.classList.add("sbch-form--item");
                const r = document.createElement("div");
                r.classList.add("sbch-form--item__col");
                const c = document.createElement("div");
                c.classList.add("sbch-form--item__checkbox--wrapper");
                const i = document.createElement("button");
                let l;
                i.classList.add("sbch-form--item__checkbox"),
                i.setAttribute("data-sbch-checked", `${o}`),
                i.setAttribute("data-sbch-category", e),
                o ? (i.style.backgroundColor = t,
                l = (0,
                n.pr)("var(--taskcolor0)")) : (i.style.backgroundColor = "var(--black1)",
                l = (0,
                n.pr)("none")),
                i.style.border = `2px solid ${t}`,
                i.append(l),
                c.append(i);
                const d = document.createElement("span");
                d.classList.add("sbch-form--item__label"),
                d.textContent = e,
                r.append(c, d);
                const u = document.createElement("div");
                u.classList.add("sbch-form--item__col--actions");
                const m = document.createElement("button");
                m.classList.add("sbch-col--actions__delete-icon"),
                m.setAttribute("data-sbch-category", e),
                m.setAttribute("data-sbch-color", t);
                const g = document.createElement("button");
                g.classList.add("sbch-col--actions__edit-icon"),
                g.setAttribute("data-sbch-category", e),
                g.setAttribute("data-sbch-color", t),
                e.toLowerCase() === a ? g.classList.add("sbch-col--actions__edit-icon--immutable") : (m.append((0,
                n.G0)("var(--white2)")),
                u.append(m)),
                g.append((0,
                n.Ml)("var(--white2)")),
                u.append(g),
                s.append(r, u),
                ye.append(s)
            }
            function u(e) {
                const t = (0,
                s.As)(e, ".sbch-col__one")
                  , r = (0,
                s.As)(e, ".sbch-col--actions__edit-icon")
                  , a = (0,
                s.As)(e, ".sbch-col--actions__delete-icon")
                  , d = (0,
                s.As)(e, ".sbch-form--item__col")
                  , u = (0,
                s.As)(e, ".sbch-plus");
                if (t)
                    return pe.classList.toggle("toggle-category--modal"),
                    pe.classList.contains("toggle-category--modal") ? be.classList.remove("sbch-caret--open") : be.classList.add("sbch-caret--open"),
                    fe.style.backgroundColor = "var(--black0)",
                    void setTimeout(( () => {
                        fe.style.backgroundColor = "var(--black1)"
                    }
                    ), 200);
                if (r) {
                    const t = {
                        name: e.target.getAttribute("data-sbch-category"),
                        color: e.target.getAttribute("data-sbch-color")
                    }
                      , r = e.target.parentElement.parentElement;
                    return r.style.borderBottom = `2px solid ${t.color}`,
                    void function(e, t) {
                        const [r,n] = t
                          , a = [e.clientX, Number.parseInt(n.getBoundingClientRect().top) - 8]
                          , [d,u] = (0,
                        s.tb)(192, 128, a, [window.innerWidth, window.innerHeight], !1, null)
                          , m = document.createElement("div");
                        m.classList.add("popup-ctg-options"),
                        m.style.top = `${u}px`,
                        m.style.left = `${d}px`;
                        const g = document.createElement("div");
                        g.classList.add("popup-ctg-options__overlay"),
                        o.addActiveOverlay("popup-ctg-options__overlay");
                        const h = document.createElement("div");
                        h.classList.add("option__open-ctg-edit"),
                        h.textContent = "Edit category (name, color)";
                        const p = document.createElement("div");
                        p.classList.add("option__close-other-ctg"),
                        p.textContent = "Display this only";
                        const y = document.createElement("div");
                        function f(e, t) {
                            document.querySelector(".popup-ctg-options").remove(),
                            document.querySelector(".popup-ctg-options__overlay").remove(),
                            o.removeActiveOverlay("popup-ctg-options__overlay"),
                            e && t.removeAttribute("style"),
                            document.removeEventListener("keydown", S)
                        }
                        function b() {
                            i(),
                            c(),
                            l()
                        }
                        function v() {
                            f(!0, n)
                        }
                        function S(e) {
                            "Escape" === e.key && v()
                        }
                        y.classList.add("option__open-other-ctg"),
                        y.textContent = "Display all but this",
                        m.append(h, p, y),
                        document.body.prepend(g, m),
                        document.addEventListener("keydown", S),
                        h.onclick = function() {
                            ce(o, r, !0, n),
                            f()
                        }
                        ,
                        g.onclick = v,
                        p.onclick = function() {
                            o.setAllCategoryStatusExcept(r.name, !1),
                            v(),
                            b()
                        }
                        ,
                        y.onclick = function() {
                            o.setAllCategoryStatusExcept(r.name, !0),
                            v(),
                            b()
                        }
                    }(e, [t, r])
                }
                if (a)
                    !function(e) {
                        const t = e.target.getAttribute("data-sbch-category")
                          , s = o.getCtgColor(t)
                          , r = s
                          , a = o.getCtgLength(t);
                        let d = !1;
                        const u = document.createElement("aside");
                        u.classList.add("popup-delete-ctg__overlay");
                        const m = document.createElement("aside");
                        m.classList.add("popup-delete-ctg"),
                        0 === a && (d = !0,
                        m.classList.add("popup-delete-ctg__no-entries"));
                        const g = 1 === a ? "entry" : "entries"
                          , h = document.createElement("div");
                        h.classList.add("popup-delete-ctg__header");
                        const p = document.createElement("div");
                        p.classList.add("popup-delete-ctg__title"),
                        p.style.border = `2px solid ${s}`,
                        p.style.backgroundColor = r,
                        p.textContent = `removing – "${t}"`;
                        const y = document.createElement("div");
                        if (y.classList.add("popup-delete-ctg__stats"),
                        y.textContent = `(${a} total ${g} in this category)`,
                        h.append(p, y),
                        m.append(h),
                        !d) {
                            const e = document.createElement("div");
                            e.classList.add("popup-delete-ctg__body");
                            const c = document.createElement("div")
                              , i = o.getAllCtgNames();
                            c.classList.add("popup-delete-ctg__options"),
                            c.classList.add("popup-delete-act"),
                            c.style.backgroundColor = r,
                            c.style.border = `2px solid ${s}`;
                            const l = document.createElement("input");
                            l.setAttribute("type", "radio"),
                            l.setAttribute("name", "popup-delete-ctg__option"),
                            l.setAttribute("id", "ctg-move"),
                            l.setAttribute("checked", "true");
                            const d = document.createElement("div")
                              , u = document.createElement("span")
                              , h = document.createElement("select");
                            d.classList.add("popup-delete-ctg__option--move"),
                            u.textContent = `Move "${t}" ${g} to `,
                            h.classList.add("popup-delete-ctg__option--move-select");
                            for (let e = 0; e < i.length; e++)
                                if (i[e] !== t) {
                                    const t = document.createElement("option");
                                    t.value = i[e],
                                    t.textContent = i[e],
                                    h.append(t)
                                }
                            d.append(u, h),
                            c.append(l, d);
                            const p = document.createElement("div");
                            p.classList.add("popup-delete-ctg__options"),
                            p.style.border = `2px solid ${s}`;
                            const y = document.createElement("input");
                            y.setAttribute("type", "radio"),
                            y.setAttribute("name", "popup-delete-ctg__option"),
                            y.setAttribute("id", "ctg-delete");
                            const f = document.createElement("div");
                            f.classList.add("popup-delete-ctg__option--remove");
                            const b = document.createElement("span");
                            b.textContent = `Delete "${t}" and ${a} ${g} (irreversible)`;
                            const v = (0,
                            n.Z)(s)
                              , S = e => {
                                if ("ctg-delete" !== e.target.id && "ctg-move" !== e.target.id && !e.target.classList.contains("popup-delete-ctg__option--move") && !e.target.classList.contains("popup-delete-ctg__option--move-select")) {
                                    e.target.closest(".popup-delete-ctg__options").querySelector("input").checked = !0;
                                    for (const e of document.querySelectorAll(".popup-delete-ctg__options"))
                                        e.setAttribute("style", `background-color: transparent; border: 2px solid ${s};`),
                                        e.classList.remove("popup-delete-act");
                                    e.target.closest(".popup-delete-ctg__options").setAttribute("style", `background-color: ${r}; border: 2px solid ${s};`),
                                    e.target.closest(".popup-delete-ctg__options").classList.add("popup-delete-act")
                                }
                            }
                            ;
                            f.append(b, v),
                            p.append(y, f),
                            e.append(c, p),
                            m.append(e),
                            c.onclick = S,
                            p.onclick = S
                        }
                        const f = document.createElement("div");
                        f.classList.add("popup-delete-ctg__footer");
                        const b = document.createElement("button");
                        b.textContent = "cancel",
                        b.classList.add("popup-delete-ctg__btn--cancel"),
                        b.style.backgroundColor = r;
                        const v = document.createElement("button");
                        v.classList.add("popup-delete-ctg__btn--proceed"),
                        v.textContent = "proceed",
                        f.append(b, v),
                        m.append(f),
                        document.body.append(u, m),
                        o.addActiveOverlay("popup-delete-ctg__overlay");
                        const S = e => {
                            "Escape" === e.key && k()
                        }
                          , k = () => {
                            m.remove(),
                            u.remove(),
                            o.removeActiveOverlay("popup-delete-ctg__overlay"),
                            document.removeEventListener("keydown", S)
                        }
                        ;
                        v.onclick = () => {
                            if (d)
                                o.deleteCategory(t);
                            else {
                                const e = document?.querySelector("input[name='popup-delete-ctg__option']:checked").id
                                  , s = document.querySelector(".popup-delete-ctg__option--move-select").value;
                                "ctg-move" === e ? o.moveCategoryEntriesToNewCategory(t, s) : "ctg-delete" === e && o.removeCategoryAndEntries(t)
                            }
                            k(),
                            c(),
                            i(),
                            l()
                        }
                        ,
                        u.onclick = k,
                        b.onclick = k,
                        document.addEventListener("keydown", S)
                    }(e);
                else if (d)
                    !function(e) {
                        const t = e.target.children[0].children[0]
                          , s = t.getAttribute("data-sbch-checked")
                          , r = t.getAttribute("data-sbch-category")
                          , n = o.getCtgColor(r);
                        "true" === s ? (t.setAttribute("data-sbch-checked", "false"),
                        o.setCategoryStatus(r, !1),
                        t.style.backgroundColor = "var(--black1)",
                        t.firstChild.setAttribute("fill", "none")) : (t.setAttribute("data-sbch-checked", "true"),
                        o.setCategoryStatus(r, !0),
                        t.style.backgroundColor = n,
                        t.firstChild.setAttribute("fill", "var(--taskcolor0)")),
                        i(),
                        c()
                    }(e);
                else if (u) {
                    const t = {
                        name: "new category",
                        color: o.getDefaultCtg()[1].color
                    };
                    ce(o, t, !1, e.target)
                } else
                    ;
            }
            ( () => {
                l();
                o.setRenderCategoriesCallback(( () => {
                    l(),
                    c()
                }
                )),
                he.onmousedown = u
            }
            )()
        }
        const Se = function(e) {
            return new Promise((t => {
                if (navigator.clipboard && "function" == typeof navigator.clipboard.writeText)
                    navigator.clipboard.writeText(e).then(( () => t(e))).catch(( () => t("")));
                else if (window.isSecureContext) {
                    const o = document.createElement("textarea");
                    o.value = e,
                    o.style.position = "fixed",
                    o.style.left = "-999999px",
                    o.style.top = "-999999px",
                    o.setAttribute("readonly", ""),
                    document.body.append(o),
                    o.focus(),
                    o.select();
                    try {
                        const s = document.execCommand("copy");
                        o.remove(),
                        t(s ? e : "")
                    } catch {
                        o.remove(),
                        t("")
                    }
                } else
                    t("")
            }
            ))
        }
          , ke = document.querySelector(".sb__info")
          , we = document.querySelector(".sb__info-popup")
          , _e = document.querySelector(".sb__info-popup-overlay")
          , Ae = document.querySelector(".select-popup-info")
          , De = document.querySelector(".close-sb-info")
          , Le = document.querySelector(".sbip-title")
          , Ce = document.querySelector(".sbip-content");
        function xe(e) {
            const t = {
                notes: {
                    title: "Breakdown of project & current status",
                    content: "These are my project notes"
                },
                privacy: {
                    title: "Cookies and Data Privacy",
                    content: "This project uses an open source license"
                },
                terms: {
                    title: "Code license and terms of use",
                    content: "All data is stored locally meaning no data is sent to a server."
                }
            };
            function o() {
                e.removeActiveOverlay("hide-sb-info-popup"),
                we.classList.add("hide-sb-info-popup"),
                _e.classList.add("hide-sb-info-popup"),
                document.removeEventListener("keydown", a),
                _e.onclick = null,
                De.onclick = null
            }
            function r(e) {
                Le.innerText = t[e].title,
                Ce.innerText = t[e].content
            }
            function n(e) {
                r(e.target.value)
            }
            function a(e) {
                "Escape" === e.key && o()
            }
            function c(t) {
                const s = ["notes", "privacy", "terms"].indexOf(t);
                Ae.selectedIndex = s,
                e.addActiveOverlay("hide-sb-info-popup"),
                we.classList.remove("hide-sb-info-popup"),
                _e.classList.remove("hide-sb-info-popup"),
                r(Ae.value),
                Ae.onchange = n,
                _e.onclick = o,
                De.onclick = o,
                document.addEventListener("keydown", a)
            }
            ke.onmousedown = function(e) {
                const t = (0,
                s.As)(e, ".sb__project-notes")
                  , o = (0,
                s.As)(e, ".sb__privacy")
                  , r = (0,
                s.As)(e, ".sb__terms")
                  , n = (0,
                s.As)(e, ".sbl-email");
                t ? c("notes") : o ? c("privacy") : r ? c("terms") : n && Se("ottofy@zohomail.com")
            }
        }
        const Ee = document.querySelector(".sidebar-sub-menu__overlay")
          , Me = document.querySelector(".sidebar-sub-menu")
          , qe = document.querySelector(".body")
          , $e = document.querySelectorAll(".theme-radio__input")
          , Ne = document.querySelector(".smia-toggle-shortcuts-checkbox")
          , Ye = document.querySelector(".smdt-toggle-checkbox")
          , Oe = document.querySelector(".keyboard-disabled-sm");
        function Te(e, t) {
            const r = ["dark", "light", "contrast"]
              , n = "hide-sidebar-sub-menu";
            function a(e) {
                const t = document.querySelector(".sb-sub-popup-confirm");
                if ("Escape" === e.key) {
                    if (t)
                        return t.remove(),
                        void Ee.classList.remove("sub-overlay-vis");
                    c(),
                    Ee.classList.remove("sub-overlay-vis")
                }
                if ("a" === e.key.toLowerCase()) {
                    if (t)
                        return;
                    c()
                }
            }
            function c() {
                const t = document.querySelector(".sb-sub-popup-confirm");
                if (t)
                    return t.remove(),
                    void Ee.classList.remove("sub-overlay-vis");
                e.removeActiveOverlay(n),
                Me.classList.add(n),
                Ee.classList.add(n),
                document.removeEventListener("keydown", a),
                Ee.onclick = null
            }
            function i(e) {
                e ? (Oe.setAttribute("data-tooltip", "Keyboard shortcuts enabled"),
                Oe.firstElementChild.setAttribute("fill", "var(--primary1)")) : (Oe.setAttribute("data-tooltip", "Keyboard shortcuts disabled"),
                Oe.firstElementChild.setAttribute("fill", "var(--red1)"))
            }
            function l() {
                Ee.classList.remove("sub-overlay-vis");
                const e = document.querySelector(".sb-sub-popup-confirm");
                e && e.remove()
            }
            function d(t) {
                if ("download" === t)
                    !function() {
                        const t = JSON.stringify(v.getAllData(), null, 2)
                          , [s,r] = e.getStoreStats()
                          , n = `ENT_${s}_CAT_${r}_${(0,
                        o.VN)()}`
                          , a = new Blob([t],{
                            type: "application/json"
                        })
                          , c = URL.createObjectURL(a)
                          , i = document.createElement("a");
                        i.href = c,
                        i.download = n + ".json",
                        document.body.append(i),
                        i.click(),
                        URL.revokeObjectURL(c),
                        i.remove()
                    }();
                else {
                    const t = function() {
                        const t = document.createElement("div");
                        t.classList.add("sb-sub-popup-confirm");
                        const [o,s] = e.getStoreStats();
                        let r, [n,a] = [!1, !1];
                        o > 0 && (n = `Overwriting ${o} entries`),
                        s > 1 && (a = 2 === s ? "1 category." : +s - 1 + " categories."),
                        r = n && a ? `${n} and ${a}` : n && !a ? `${n}.` : !n && a ? `No entries. Overwriting ${a}` : "Current calendar has no entries or categories.";
                        const c = document.createElement("div");
                        c.classList.add("sb-sub-popup-subtitle"),
                        c.textContent = r;
                        const i = document.createElement("div");
                        i.classList.add("sb-sub-popup-subtitle"),
                        i.textContent = "This action is irreversible.";
                        const l = document.createElement("div");
                        l.classList.add("sb-sub-popup-title"),
                        l.textContent = 'Please ensure you have a valid backup before proceeding. Use the "validate .json" button next to "upload .json" to check that everything is in order.';
                        const d = document.createElement("div");
                        d.classList.add("sb-sub-popup-btns");
                        const u = document.createElement("button");
                        u.classList.add("sb-sub-popup-btn--cancel"),
                        u.textContent = "Cancel";
                        const m = document.createElement("button");
                        return m.classList.add("sb-sub-popup-btn--proceed"),
                        m.textContent = "Proceed",
                        d.append(u, m),
                        t.append(c, i, l, d),
                        t
                    }();
                    document.body.append(t),
                    Ee.classList.add("sub-overlay-vis");
                    const o = t.querySelector(".sb-sub-popup-btn--cancel")
                      , s = t.querySelector(".sb-sub-popup-btn--proceed");
                    o.onclick = l,
                    s.onclick = () => async function(e, t) {
                        return new Promise(( (o, s) => {
                            const r = document.createElement("input");
                            r.type = "file",
                            r.accept = "application/json",
                            r.onchange = async n => {
                                try {
                                    const s = n.target.files[0];
                                    if (!s)
                                        throw new Error("No file selected");
                                    const r = await s.text()
                                      , a = JSON.parse(r);
                                    e.setUserUpload(a),
                                    t(),
                                    o(a)
                                } catch (e) {
                                    console.error("Error processing file:", e),
                                    s(e)
                                } finally {
                                    r.remove(),
                                    t()
                                }
                            }
                            ,
                            document.body.append(r),
                            r.click()
                        }
                        ))
                    }(e, c).then((e => {
                        console.log("JSON upload successful:", e)
                    }
                    )).catch((e => {
                        console.error("JSON upload failed:", e)
                    }
                    ))
                }
            }
            function u(e) {
                const t = document.querySelector(".toggle-animations-icon__sm")
                  , o = {
                    on: document.querySelector(".tai-on"),
                    off: document.querySelector(".tai-off")
                };
                e ? (o.on.classList.remove("hide-tai"),
                o.off.classList.add("hide-tai"),
                t.setAttribute("data-tooltip", "Animations Enabled")) : (o.on.classList.add("hide-tai"),
                o.off.classList.remove("hide-tai"),
                t.setAttribute("data-tooltip", "Animations Disabled"))
            }
            function m(t) {
                const o = !1 === Ye.checked;
                e.setAnimationStatus(o),
                u(o),
                t && (Ye.checked = o),
                qe.setAttribute("data-disable-transitions", !o)
            }
            function g(o) {
                const r = (0,
                s.As)(o, ".down-json")
                  , n = (0,
                s.As)(o, ".upload-json")
                  , a = (0,
                s.As)(o, ".theme-option")
                  , l = (0,
                s.As)(o, ".toggle-kb-shortcuts-btn__smia")
                  , u = (0,
                s.As)(o, ".smia-disable-shortcuts__btn")
                  , g = (0,
                s.As)(o, ".keyboard-disabled-sm")
                  , h = (0,
                s.As)(o, ".smdt-toggle")
                  , p = (0,
                s.As)(o, ".toggle-animations-icon__sm")
                  , y = (0,
                s.As)(o, ".close-sub-menu");
                if (r)
                    d("download");
                else if (n)
                    d("upload");
                else {
                    if (!a)
                        return l ? (c(),
                        void ge(e)) : void (u ? function() {
                            const t = !1 === Ne.checked;
                            e.setShortcutsStatus(t),
                            i(t)
                        }() : g ? function() {
                            let t = e.getShortcutsStatus();
                            t = !t,
                            e.setShortcutsStatus(t),
                            i(t),
                            Ne.checked = t
                        }() : h ? m() : p ? m(!0) : y && c());
                    !function(o) {
                        const r = o.target.firstElementChild
                          , n = r.value;
                        r.checked = !0,
                        n !== t.getColorScheme() && (t.setColorScheme(n),
                        (0,
                        s.Dc)(t, e))
                    }(o)
                }
            }
            !function() {
                const o = r.indexOf(t.getColorScheme());
                $e[o].checked = !0;
                const s = e.getShortcutsStatus();
                i(s),
                Ne.checked = s;
                const l = e.getAnimationStatus();
                u(l),
                Ye.checked = l,
                e.addActiveOverlay(n),
                Me.classList.remove(n),
                Ee.classList.remove(n),
                document.addEventListener("keydown", a),
                Ee.onclick = c
            }(),
            Me.onmousedown = g
        }
        const Ie = document.querySelector(".h__container")
          , Fe = document.querySelector(".logo")
          , Pe = document.querySelector(".toggle-form")
          , Re = document.querySelector(".sb-toggle-form-btn")
          , je = document.querySelector(".sb-data-btn")
          , Be = document.querySelector(".form-overlay")
          , He = document.querySelector(".entries__form")
          , Ze = document.querySelector(".datepicker")
          , We = document.querySelector(".datepicker-overlay")
          , Je = document.querySelector(".prev-next")
          , Ue = document.querySelector(".datetime-content")
          , ze = document.querySelector(".datepicker-sidebar")
          , Qe = document.querySelector(".sbdatepicker__body--dates")
          , Ke = document.querySelector(".sb__categories--body-form")
          , Ge = document.querySelector(".select__modal")
          , Ve = document.querySelector(".change-view--overlay")
          , Xe = document.querySelector(".change-view--wrapper")
          , et = document.querySelector(".sidebar")
          , tt = document.querySelector(".sb__info")
          , ot = document.querySelector(".sb__categories")
          , st = document.querySelector(".container__calendars")
          , rt = document.querySelector(".yearview")
          , nt = document.querySelector(".monthview")
          , at = document.querySelector(".listview__body")
          , ct = document.querySelector(".collapse-view");
        class it {
            constructor() {
                this.colorScheme = "dark",
                this.component = "month",
                this.sidebarState = "hide",
                this.date = new Date,
                this.gmt = (new Date).getTimezoneOffset() / 60,
                this.dateSelected = 1,
                this.daySelected = this.date.getDate(),
                this.monthSelected = this.date.getMonth(),
                this.yearSelected = this.date.getFullYear(),
                this.month = this.getMonth(),
                this.monthArray = this.getMonthArray(),
                this.week = this.getWeek()
            }
            setDefaults() {
                const e = {
                    yearSelected: [this.date.getFullYear(), it.setLocalYear],
                    monthSelected: [this.date.getMonth(), it.setLocalMonth],
                    daySelected: [this.date.getDate(), it.setLocalDay],
                    dateSelected: [1, it.setLocalDateSelected],
                    colorScheme: ["dark", it.setLocalColorScheme],
                    component: ["month", it.setLocalComponent]
                };
                for (const [t,o] of Object.entries(e))
                    if (null === v.getItem(t)) {
                        const [e,s] = o;
                        void 0 === this[t] && (this[t] = e),
                        s(this[t])
                    }
            }
            static getLocalDay() {
                return void 0 === +v.getItem("daySelected") ? 1 : +v.getItem("daySelected")
            }
            static getLocalMonth() {
                return void 0 === +v.getItem("monthSelected") ? 1 : +v.getItem("monthSelected")
            }
            static getLocalYear() {
                return void 0 === +v.getItem("yearSelected") ? 1 : +v.getItem("yearSelected")
            }
            static getLocalDateSelected() {
                return +v.getItem("dateSelected")
            }
            static getLocalComponent() {
                return v.getItem("component")
            }
            static getLocalColorScheme() {
                return v.getItem("colorScheme")
            }
            static getLocalSidebarState() {
                return this.sidebarState
            }
            static setLocalDay(e) {
                v.setItem("daySelected", e)
            }
            static setLocalMonth(e) {
                v.setItem("monthSelected", e)
            }
            static setLocalYear(e) {
                v.setItem("yearSelected", e)
            }
            static setLocalDateSelected(e) {
                v.setItem("dateSelected", e)
            }
            static setLocalComponent(e) {
                v.setItem("component", e)
            }
            static setLocalSidebarState(e) {
                v.setItem("sidebarState", e)
            }
            static setLocalColorScheme(e) {
                v.setItem("colorScheme", e)
            }
            getAllMethodNames() {
                return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((e => "constructor" !== e && "getStoreStats" !== e))
            }
            getColorScheme() {
                return it.getLocalColorScheme()
            }
            setColorScheme(e) {
                this.colorScheme = e,
                it.setLocalColorScheme(e)
            }
            setSidebarState(e) {
                this.sidebarState = e,
                it.setLocalSidebarState(e)
            }
            toggleSidebarState() {
                this.sidebarState = "open" === this.getSidebarState() ? "hide" : "open"
            }
            getComponent() {
                return it.getLocalComponent() || "month"
            }
            setComponent(e) {
                this.component !== e && (this.component = e,
                window.location.hash = e,
                it.setLocalComponent(e))
            }
            getSidebarState() {
                return this.sidebarState || "hide"
            }
            setDay(e) {
                this.daySelected = e,
                it.setLocalDay(e)
            }
            setMonth(e) {
                this.monthSelected = e,
                it.setLocalMonth(e)
            }
            setYear(e) {
                this.yearSelected = e,
                it.setLocalYear(e)
            }
            setDate(e, t, o) {
                this.setYear(e),
                this.setMonth(t),
                this.setDay(o)
            }
            setDateFromDateObj(e) {
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setDateSelected(e) {
                this.dateSelected = e,
                it.setLocalDateSelected(e)
            }
            setPrevDay() {
                const e = new Date(this.getYear(),this.getMonth(),this.getDay() - 1);
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setPrevWeek() {
                const e = new Date(this.getYear(),this.getMonth(),this.getDay() - 7);
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setPrevMonth() {
                const e = new Date(this.getYear(),+this.getMonth() - 1,this.getDay());
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setPrevYear() {
                this.setYear(this.getYear() - 1)
            }
            setNextDay() {
                const e = new Date(this.getYear(),this.getMonth(),this.getDay() + 1);
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setNextWeek() {
                const e = new Date(this.getYear(),this.getMonth(),this.getDay() + 7);
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setNextMonth() {
                const e = new Date(this.getYear(),this.getMonth() + 1,this.getDay());
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setNextYear() {
                this.setYear(this.getYear() + 1)
            }
            getGmt() {
                return this.gmt
            }
            getDateSelected() {
                return +it.getLocalDateSelected()
            }
            getDay() {
                return +it.getLocalDay()
            }
            getMonth() {
                return +it.getLocalMonth()
            }
            getYear() {
                return +it.getLocalYear() || this.date.getFullYear()
            }
            getDate() {
                return new Date(this.getYear(),this.getMonth(),this.getDay())
            }
            getDateArray() {
                return [this.getYear(), this.getMonth(), this.getDay()]
            }
            getToday() {
                return this.date
            }
            getWeek() {
                const e = this.getDate();
                return e.setDate(e.getDate() - e.getDay()),
                e
            }
            getWeekday() {
                return this.getDate().getDay()
            }
            getWeekArray() {
                const e = this.getWeek()
                  , t = [];
                for (let o = 0; o < 7; o++)
                    o < 6 ? t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate() + o)) : t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate() + o,23,59,59,999));
                return t
            }
            getWeekRange() {
                const {labels: e} = t.Z
                  , o = this.getWeekArray()
                  , [s,r] = [o[0].getMonth(), o[6].getMonth()]
                  , [n,a] = [o[0].getDate(), o[6].getDate()];
                return s === r ? `${e.monthsShort[s]} ${n} – ${a}, ${o[0].getFullYear()}` : `${e.monthsShort[s]} ${n} – ${a} ${e.monthsShort[r]}, ${o[1].getFullYear()}`
            }
            getWeekNumber() {
                const e = new Date(Date.UTC(this.getYear(), this.getMonth(), this.getDay()));
                e.setUTCDate(e.getUTCDate() + 4 - (e.getUTCDay() || 7));
                const t = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
                return Math.ceil(((e - t) / 864e5 + 1) / 7)
            }
            getMonthName() {
                const {labels: e} = t.Z;
                return e.monthsLong[this.getMonth()]
            }
            getDaysInMonth() {
                return new Date(this.getYear(),this.getMonth() + 1,0).getDate()
            }
            getMonthArrayStart(e, t) {
                const o = []
                  , s = new Date(e,t,1).getDay();
                for (let r = 0; r < s; r++)
                    o.push(new Date(e,t,0 - r));
                return o
            }
            getMonthArrayEnd(e, t, o=!1) {
                const s = [];
                if (o) {
                    for (let o = 1; o < 8; o++)
                        s.push(new Date(e,+t + 1,o));
                    return s
                }
                {
                    const o = new Date(e,t + 1,0).getDay();
                    for (let r = 1; r < 7 - o; r++)
                        s.push(new Date(e,+t + 1,r));
                    return s
                }
            }
            getMonthArray() {
                const e = [];
                let t = [this.getYear(), this.getMonth()]
                  , [o,s] = t;
                const r = this.getMonthArrayStart(o, s);
                for (let t = r.length - 1; t >= 0; t--)
                    e.push(r[t]);
                [o,s] = t;
                const n = new Date(o,s + 1,0).getDate();
                for (let t = 1; t <= n; t++)
                    e.push(new Date(o,s,t));
                e.at(-1).setHours(23, 59, 59, 999),
                [o,s] = t;
                let a = this.getMonthArrayEnd(o, s);
                if (28 === e.length && a.length < 7) {
                    const t = e.at(-1);
                    a = this.getMonthArrayEnd(t.getFullYear(), t.getMonth(), !0)
                }
                for (let t = 0; t < a.length; t++)
                    t === a.length - 1 && a[t].setHours(23, 59, 59, 999),
                    e.push(a[t]);
                return e
            }
            isToday(e) {
                return e ? (0,
                o.aN)(e, new Date) : (0,
                o.aN)(this.getDate(), new Date)
            }
        }
        class lt {
            constructor() {
                this.date = new Date,
                this.dateSelected = this.date.getDate(),
                this.daySelected = this.date.getDate(),
                this.monthSelected = this.date.getMonth(),
                this.yearSelected = this.date.getFullYear(),
                this.month = this.getMonth(),
                this.monthArray = this.getMonthArray()
            }
            setDefaults() {
                const e = {
                    pickerYearSelected: [this.yearSelected, this.date.getFullYear(), lt.setLocalPickerYear],
                    pickerMonthSelected: [this.monthSelected, this.date.getMonth(), lt.setLocalPickerMonth],
                    pickerDaySelected: [this.daySelected, this.date.getDate(), lt.setLocalPickerDay],
                    pickerDateSelected: [this.dateSelected, this.date.getDate(), lt.setLocalPickerDateSelected]
                };
                for (const [t,o] of Object.entries(e))
                    if (null === v.getItem(t)) {
                        const [e,t,s] = o;
                        void 0 === this[e] && (this[e] = t),
                        s(e)
                    }
            }
            static getLocalPickerDay() {
                return +v.getItem("pickerDaySelected")
            }
            static getLocalPickerMonth() {
                return +v.getItem("pickerMonthSelected")
            }
            static getLocalPickerYear() {
                return +v.getItem("pickerYearSelected")
            }
            static getLocalPickerDateSelected() {
                return +v.getItem("pickerDateSelected")
            }
            static setLocalPickerDay(e) {
                v.setItem("pickerDaySelected", e)
            }
            static setLocalPickerMonth(e) {
                v.setItem("pickerMonthSelected", e)
            }
            static setLocalPickerYear(e) {
                v.setItem("pickerYearSelected", e)
            }
            static setLocalPickerDateSelected(e) {
                v.setItem("pickerDateSelected", e)
            }
            setDay(e) {
                this.daySelected = e,
                lt.setLocalPickerDay(e)
            }
            setMonth(e) {
                this.monthSelected = e,
                lt.setLocalPickerMonth(e)
            }
            setYear(e) {
                this.yearSelected = e,
                lt.setLocalPickerYear(e)
            }
            setDateSelected(e) {
                this.dateSelected = e,
                lt.setLocalPickerDateSelected(e)
            }
            setDate(e, t, o) {
                this.setYear(e),
                this.setMonth(t),
                this.setDay(o)
            }
            setDateFromDateObj(e) {
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            resetDate() {
                this.setDate(this.date.getFullYear(), this.date.getMonth(), this.date.getDate())
            }
            setPrevMonth() {
                const e = new Date(this.getYear(),this.getMonth() - 1,this.getDay());
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            setNextMonth() {
                const e = new Date(this.getYear(),this.getMonth() + 1,this.getDay());
                this.setDate(e.getFullYear(), e.getMonth(), e.getDate())
            }
            getDateSelected() {
                return +lt.getLocalPickerDateSelected()
            }
            getDay() {
                return +lt.getLocalPickerDay()
            }
            getMonth() {
                return +lt.getLocalPickerMonth()
            }
            getYear() {
                return +lt.getLocalPickerYear()
            }
            getDate() {
                return new Date(this.getYear(),this.getMonth(),this.getDay())
            }
            getToday() {
                return this.date
            }
            getMonthName() {
                const {labels: e} = t.Z;
                return e.monthsLong[this.getMonth()]
            }
            getDaysInMonth() {
                return new Date(this.getYear(),this.getMonth() + 1,0).getDate()
            }
            getMonthArrayStart(e, t) {
                const o = []
                  , s = new Date(e,t,1).getDay();
                for (let r = 0; r < s; r++)
                    o.push(new Date(e,t,0 - r));
                return o
            }
            getMonthArrayEnd(e, t) {
                const o = []
                  , s = new Date(e,t + 1,0).getDay();
                for (let r = 1; r < 7 - s; r++)
                    o.push(new Date(e,+t + 1,r));
                return o
            }
            getMonthArray() {
                const e = [];
                let t = [this.getYear(), this.getMonth()]
                  , [o,s] = t;
                const r = this.getMonthArrayStart(o, s);
                for (let t = r.length - 1; t >= 0; t--)
                    e.push(r[t]);
                [o,s] = t;
                for (let t = 1; t <= this.getDaysInMonth(); t++)
                    e.push(new Date(o,s,t));
                const n = this.getMonthArrayEnd(o, s);
                for (let t = 0; t < n.length; t++)
                    t === n.length - 1 && n[t].setHours(23, 59, 59, 999),
                    e.push(n[t]);
                return e
            }
        }
        const dt = new it
          , ut = new lt;
        dt.setDefaults(),
        ut.setDefaults();
        const mt = dt;
        (0,
        s.Dc)(mt, k),
        function(t, o, r) {
            function n(s) {
                (0,
                e.Z)(s, t, r, o)
            }
            function a() {
                et.classList.contains("hide-sidebar") || (o.setDate(t.getYear(), t.getMonth(), t.getDay()),
                (0,
                y.Z)(t, r, o))
            }
            function c() {
                t.setPrevDay(),
                n("day"),
                t.setDateSelected(t.getDay()),
                a()
            }
            function i() {
                t.setNextDay(),
                n("day"),
                t.setDateSelected(t.getDay()),
                a()
            }
            function l() {
                t.setPrevWeek(),
                n("week"),
                a()
            }
            function d() {
                t.setNextWeek(),
                n("week"),
                a()
            }
            function u() {
                t.setPrevMonth(),
                n("month"),
                a()
            }
            function m() {
                t.setNextMonth(),
                n("month"),
                a()
            }
            function g() {
                t.setPrevYear(),
                n("year"),
                a()
            }
            function h() {
                t.setNextYear(),
                n("year"),
                a()
            }
            let f = 250;
            async function b() {
                U(t, r, o),
                He.setAttribute("style", "top:5%;left:5%;right:5%;bottom:5%;margin:auto;"),
                He.classList.remove("hide-form"),
                Be.classList.remove("hide-form-overlay"),
                r.addActiveOverlay("hide-form-overlay")
            }
            function v() {
                Te(r, t)
            }
            async function S() {
                if ("hide" === t.getSidebarState())
                    Pe.onclick = b,
                    Re.onclick = null,
                    je.onclick = null,
                    ze.onclick = null,
                    tt.onmousedown = null,
                    ot.onmousedown = null,
                    setTimeout(( () => {
                        Qe.innerText = "",
                        Ke.innerText = ""
                    }
                    ), 100),
                    st.classList.remove("container__calendars-sb-active"),
                    et.classList.add("hide-sidebar"),
                    Pe.classList.remove("hide-toggle--form"),
                    Je.classList.remove("prevnext-inactive"),
                    Ue.classList.remove("prevnext-inactive"),
                    Je.removeAttribute("tabindex"),
                    Ue.removeAttribute("tabindex"),
                    at.removeAttribute("style");
                else {
                    Pe.onclick = null,
                    Re.onclick = b,
                    je.onclick = v,
                    "list" === t.getComponent() && (at.style.width = "100%",
                    at.style.marginLeft = "0"),
                    st.classList.add("container__calendars-sb-active"),
                    et.classList.remove("hide-sidebar"),
                    Pe.classList.add("hide-toggle--form"),
                    Je.classList.add("prevnext-inactive"),
                    Ue.classList.add("prevnext-inactive"),
                    Je.setAttribute("tabindex", "-1"),
                    Ue.setAttribute("tabindex", "-1");
                    const e = r.getResetDatepickerCallback();
                    null !== e && (e(),
                    r.setResetDatepickerCallback(null)),
                    o.setDate(+t.getYear(), +t.getMonth(), +t.getDay()),
                    o.setDateSelected(+t.getDay()),
                    et.classList.contains("hide-sidebar") || (ve(t, r, o),
                    xe(r)),
                    a()
                }
            }
            function k() {
                const e = t.getComponent();
                t.isToday() || "list" === e || (t.setDateFromDateObj(new Date),
                n(e),
                a())
            }
            function w(e) {
                const o = "next" === e
                  , s = o ? "left" : "right"
                  , n = {
                    day: {
                        element: () => document.querySelector(".dayview--header-day__number"),
                        action: o ? i : c
                    },
                    week: {
                        element: () => document.querySelector(".weekview--header"),
                        action: o ? d : l
                    },
                    month: {
                        element: () => nt,
                        action: o ? m : u
                    },
                    year: {
                        element: () => rt,
                        action: o ? h : g
                    }
                }[t.getComponent()];
                n && function(e, t, o) {
                    if (r.getAnimationStatus()) {
                        e.classList.contains("weekview--header") || (st.style.overflowX = "hidden",
                        setTimeout(( () => {
                            st.style.overflowX = "auto"
                        }
                        ), 200)),
                        e.classList.remove("transition--" + ("left" === t ? "right" : "left"));
                        const s = `transition--${t}`;
                        e.classList.contains(s) ? (o(),
                        f += 250) : (e.classList.add(s),
                        setTimeout(( () => {
                            e.classList.remove(s)
                        }
                        ), f),
                        o(),
                        f = 250)
                    } else
                        o()
                }("function" == typeof n.element ? n.element() : n.element, s, n.action)
            }
            function _() {
                Ge.classList.remove("selection--active"),
                Ve.style.display = "none",
                Ve.classList.add("toggle-options"),
                Xe.classList.add("toggle-options"),
                Xe.classList.remove("toggle-animate")
            }
            function A(e, o) {
                const s = t.getComponent();
                "week" === e || "day" === e ? (ct.onclick = q,
                ct.classList.remove("hide-cbt")) : (ct.onclick = null,
                ct.classList.add("hide-cbt")),
                (e !== s || o) && (_(),
                t.setComponent(e),
                n(e),
                Xe.setAttribute("data-view-option-active", e),
                (s || "week" === e) && a(),
                document.activeElement.blur())
            }
            function D() {
                Ge.classList.add("selection--active"),
                Ve.classList.remove("toggle-options"),
                Ve.style.display = "block",
                Xe.classList.remove("toggle-options"),
                Xe.classList.add("toggle-animate");
                Xe.onclick = e => A(e.target.getAttribute("data-view-option")),
                Ve.onclick = _
            }
            const L = (0,
            s.P2)((function(e) {
                switch (e.key.toLowerCase()) {
                case "d":
                case "1":
                    A("day");
                    break;
                case "w":
                case "2":
                    A("week");
                    break;
                case "m":
                case "3":
                    A("month");
                    break;
                case "y":
                case "4":
                    A("year");
                    break;
                case "l":
                case "5":
                    A("list");
                    break;
                case "s":
                    t.toggleSidebarState(),
                    S();
                    break;
                case "f":
                    b();
                    break;
                case "v":
                    (e => {
                        Ge.classList.contains("selection--active") ? "v" === e.key.toLowerCase() && _() : D()
                    }
                    )(e);
                    break;
                case "p":
                    w("prev");
                    break;
                case "n":
                    w("next");
                    break;
                case "t":
                    k();
                    break;
                case "a":
                    v();
                    break;
                case "?":
                case "/":
                    ge(r);
                    break;
                case "0":
                    {
                        const e = t.getColorScheme()
                          , o = ["light", "dark", "contrast"];
                        t.setColorScheme(o[(o.indexOf(e) + 1) % 3]),
                        (0,
                        s.Dc)(t, r);
                        break
                    }
                case "g":
                    ee(t, r, o);
                    break;
                case "+":
                    "hide" === t.getSidebarState() && (t.toggleSidebarState(),
                    S()),
                    ce(r, {
                        name: "new category",
                        color: r.getDefaultCtg()[1].color
                    }, !1, null);
                    break
                }
            }
            ), 150)
              , C = (0,
            s.P2)((function(e) {
                e.preventDefault();
                const n = (0,
                s.As)(e, ".menu")
                  , a = (0,
                s.As)(e, ".btn-today")
                  , c = (0,
                s.As)(e, ".prev")
                  , i = (0,
                s.As)(e, ".next")
                  , l = (0,
                s.As)(e, ".datetime-content")
                  , d = (0,
                s.As)(e, ".h-search")
                  , u = (0,
                s.As)(e, ".settings")
                  , m = (0,
                s.As)(e, ".select__modal");
                if (n)
                    return t.toggleSidebarState(),
                    void S();
                a ? k() : c ? w("prev") : i ? w("next") : l ? function(e) {
                    Ze.classList.remove("hide-datepicker"),
                    We.classList.remove("hide-datepicker-overlay"),
                    o.setDateFromDateObj(t.getDate());
                    const s = e.target.getBoundingClientRect()
                      , n = Number.parseInt(s.left)
                      , a = Number.parseInt(n / window.innerWidth * 100);
                    Ze.setAttribute("style", `left:${a}%;top:12px;`),
                    p(t, r, o, "header")
                }(e) : d ? ee(t, r, o) : u ? v() : m && D()
            }
            ), 150);
            let[x,E] = ["", ""];
            function M(e) {
                r.getShortcutsStatus() && (r.hasActiveOverlay() || (x = e.key,
                "Control" !== x ? "Control" !== E || "Control" === x ? L(e) : E = "" : E = "Control"))
            }
            function q() {
                const e = t.getComponent();
                "week" !== e && "day" !== e || (document.querySelector(".cv-svg-on").classList.toggle("hide-cbt"),
                document.querySelector(".cv-svg-off").classList.toggle("hide-cbt"),
                "day" === e ? document.querySelector(".dayview--header").classList.toggle("dvh-collapse") : (document.querySelector(".weekview--header").classList.toggle("wvh-collapse"),
                document.querySelector(".weekview__grid").classList.toggle("wvh-body-collapse")))
            }
            ( () => {
                A(t.getComponent(), !0),
                Ge.setAttribute("data-value", `${t.getComponent().slice(0, 1).toUpperCase()}`),
                Fe.setAttribute("data-current-day-of-month", (new Date).getDate()),
                S(),
                r.setRenderFormCallback(b);
                r.setRenderSidebarCallback(( () => {
                    t.setSidebarState("open"),
                    S()
                }
                )),
                Ie.onclick = (0,
                s.P2)(C, 150),
                document.addEventListener("keydown", M),
                function() {
                    const e = new Set(["list", "year", "month", "week", "day"])
                      , o = () => {
                        const o = window.location.hash.slice(1);
                        if (e.has(o))
                            t.getComponent() !== o && A(o);
                        else {
                            const e = t.getComponent();
                            window.location.hash = e
                        }
                    }
                    ;
                    window.addEventListener("hashchange", o),
                    document.addEventListener("DOMContentLoaded", o)
                }()
            }
            )()
        }(mt, ut, k)
    }
    )()
}
)();
