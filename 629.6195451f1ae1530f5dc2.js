"use strict";
(self.webpackChunkgoogle_calendar_clone_vanilla = self.webpackChunkgoogle_calendar_clone_vanilla || []).push([[629], {
    629: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => C
        });
        var o = n(432)
          , a = n(827)
          , s = n(151)
          , l = n(634)
          , d = n(375)
          , c = n(748)
          , r = n(340)
          , i = n(255)
          , u = n(287)
          , m = n(944)
          , g = n(683)
          , p = n(611);
        const y = document.querySelector(".sidebar")
          , b = document.querySelector(".resize-overlay")
          , v = document.querySelector(".weekview")
          , w = document.querySelector(".weekview--calendar")
          , f = document.querySelector(".weekview--header")
          , h = document.querySelectorAll(".weekview--header-day__number")
          , x = document.querySelector(".weekview__grid")
          , k = document.querySelectorAll(".allday--col")
          , L = document.querySelectorAll(".week--col");
        function C(e, t, n) {
            const C = e.getWeekArray()
              , E = t.getWeekEntries(C)
              , _ = new a.HY(E.day,E.allDay);
            let A = null;
            function S() {
                for (const e of L)
                    e.innerText = "";
                for (const e of k)
                    e.innerText = "";
                v.onmousedown = null,
                f.onclick = null
            }
            function B(e, t) {
                const n = document.createElement("div");
                n.classList.add("allday__cell"),
                n.classList.add("allday__cell--active");
                const o = document.createElement("div");
                o.classList.add("wv-ad--taskicons");
                const a = document.createElement("div");
                a.classList.add("wv-ad--taskicon"),
                a.style.backgroundColor = "#6F0C2B",
                o.append(a);
                const s = document.createElement("div");
                s.classList.add("wv-ad--celltitle"),
                s.textContent = `${t} more`;
                const l = document.createElement("div");
                l.classList.add("wv-ad--cellexpand"),
                l.append((0,
                r.NM)("var(--white3)")),
                n.append(o, s, l),
                e.append(n)
            }
            function D(e, n) {
                const o = document.createElement("div");
                o.classList.add("allday-modal__cell"),
                o.setAttribute("data-allday-modal-cell", n),
                o.setAttribute("data-allday-modal-cell-id", e.id),
                o.style.backgroundColor = t.getCtgColor(e.category);
                const a = document.createElement("div");
                a.classList.add("allday-modal__cell-content");
                const s = document.createElement("div");
                s.classList.add("allday-modal__cell-action-icons");
                const d = document.createElement("div");
                d.classList.add("allday-modal__celltitle"),
                d.textContent = e.title;
                const c = document.createElement("div");
                c.classList.add("allday-modal__cellend-date"),
                c.textContent = (0,
                l.$M)(new Date(e.start), new Date(e.end));
                const i = document.createElement("div");
                return i.classList.add("allday-modal__cellcategory-title"),
                i.textContent = "category: " + e.category,
                a.append(d, i, c),
                s.append((0,
                r.bg)("var(--taskcolor")),
                o.append(a, s),
                o
            }
            function Z(o, a, d, i, p) {
                const {labels: y} = s.Z
                  , w = y.weekdaysLong[i]
                  , f = a.getAttribute("data-wvtop-day")
                  , h = document.createElement("div");
                h.classList.add("allday-modal");
                const k = a.getBoundingClientRect();
                let L;
                L = d.length < 4 ? Number.parseInt(55 * d.length) + 60 : Number.parseInt(220) + 60;
                const [E,_] = (0,
                c.tb)(240, L, [Number.parseInt(k.left), Number.parseInt(k.top) + 24], [window.innerWidth, window.innerHeight], !0, Math.floor((window.innerWidth - 36 - x.offsetLeft) / 7));
                E + 250 > window.innerWidth ? h.style.left = window.innerWidth - 246 + "px" : h.style.left = E + "px",
                h.style.top = _ + "px";
                const A = document.createElement("div");
                A.classList.add("allday-modal__header");
                const S = document.createElement("div");
                S.classList.add("allday-modal-title"),
                S.textContent = `${w}, ${y.monthsLong[C[i].getMonth()]} ${f}${(0,
                l.To)(f)}`;
                const B = document.createElement("div");
                B.classList.add("close-allday-modal"),
                B.append((0,
                r.G0)("var(--white4"));
                const Z = document.createElement("div");
                function M(e) {
                    "Escape" === e.key && q()
                }
                function q() {
                    h.remove(),
                    h.onmousedown = null,
                    b.classList.add("hide-resize-overlay"),
                    b.onclick = null,
                    document.removeEventListener("keydown", M),
                    t.removeActiveOverlay("allday-modal"),
                    p.firstChild.firstChild.style.backgroundColor = "#6F0C2B",
                    p.classList.remove("allday-modal__cell--open")
                }
                Z.classList.add("allday-modal__content");
                for (const [e,t] of d.entries())
                    Z.append(D(t, e));
                A.append(S, B),
                h.append(A, Z),
                v.insertBefore(h, document.querySelector(".weekview__top")),
                t.addActiveOverlay("allday-modal"),
                b.onclick = q,
                h.onmousedown = function(o) {
                    const a = (0,
                    c.As)(o, ".close-allday-modal")
                      , s = (0,
                    c.As)(o, ".allday-modal__cell-action-icons");
                    a ? q() : s && function(o, a, s) {
                        const d = o.id
                          , r = o.start
                          , i = t.getCtgColor(o.category)
                          , p = s.target.getBoundingClientRect()
                          , [y,b] = (0,
                        c.tb)(400, 165, [Number.parseInt(p.right), s.clientY + 28], [window.innerWidth, window.innerHeight]);
                        t.setFormResetHandle("week", a);
                        const v = new m.Z;
                        v.setSubmission("edit", d, o.title, o.description),
                        v.setCategory(o.category, i),
                        v.setDates((0,
                        l.cF)(r, o.end)),
                        u.Z.setFormDatepickerDate(e, n, r);
                        const w = () => u.Z.getConfig(v.getSetup());
                        (0,
                        g.Z)(e, t, o, n, w);
                        const f = document.querySelector(".entry__options");
                        f.style.top = b + "px",
                        f.style.left = y + "px"
                    }(t.getEntry(o.target.parentElement.getAttribute("data-allday-modal-cell-id")), q, o)
                }
                ,
                document.addEventListener("keydown", M)
            }
            function M(e) {
                return document.querySelector(`[data-column-index="${e}"]`)
            }
            function q() {
                document.querySelector(".temp-week-box")?.remove()
            }
            function F(o, a) {
                (0,
                d.iE)("dragstart", v, t);
                const s = a.parentElement
                  , r = s.getAttribute("data-column-index");
                let b = s.getAttribute("data-column-index")
                  , w = !1;
                a.setAttribute("data-box-col", b);
                const f = +a.style.top.split("px")[0]
                  , h = +a.style.height.split("px")[0]
                  , k = o.pageY - x.offsetTop
                  , E = o.pageY;
                let A = o.pageX
                  , [S,B] = [0, 0]
                  , D = !1;
                const Z = e => {
                    S = Math.abs(e.clientX - A),
                    B = Math.abs(e.clientY - E),
                    D || (S > 3 || B > 3) && (D = !0,
                    document.body.style.cursor = "move",
                    a.classList.contains("box-ontop") && (w = !0,
                    (0,
                    d.mg)("week", a)),
                    a.classList.add("box-dragging"),
                    (0,
                    d.Ly)(a, s, w, "week"),
                    S = 0,
                    B = 0);
                    const t = x.offsetTop
                      , n = e.pageY - t
                      , o = n - k;
                    let l = 12.5 * Math.round((o + f) / 12.5);
                    if (l < 0 || n < 0)
                        return void (l = 0);
                    if (l + h > 1188)
                        return;
                    a.style.top = `${l}px`;
                    const c = e.pageX - A > 0 ? "right" : "left";
                    let r, i;
                    r = +b - 1 >= 0 ? Number.parseInt(M(b - 1).getBoundingClientRect().right) : null,
                    i = +b + 1 < L.length ? Number.parseInt(M(+b + 1).getBoundingClientRect().left) : null,
                    "right" === c && null !== i && e.pageX >= i && (M(+b + 1).append(a),
                    A = e.pageX,
                    b = +b + 1,
                    a.setAttribute("data-box-col", +b)),
                    "left" === c && null !== r && e.pageX <= r && (M(+b - 1).append(a),
                    A = e.pageX,
                    b = +b - 1,
                    a.setAttribute("data-box-col", +b))
                }
                ;
                document.addEventListener("mousemove", Z),
                document.addEventListener("mouseup", (function o() {
                    const s = document.querySelector(".temporary-box");
                    if (a.classList.remove("box-dragging"),
                    w && a.classList.add("box-ontop"),
                    null === s) {
                        const o = () => {
                            (0,
                            d.iE)("dragend", v, t),
                            a.classList.remove("wv-box-clicked")
                        }
                        ;
                        a.classList.add("wv-box-clicked");
                        const s = a.getAttribute("data-box-id")
                          , r = t.getEntry(s)
                          , i = r.start
                          , p = a.style.backgroundColor
                          , y = a.getBoundingClientRect()
                          , [b,w] = (0,
                        c.tb)(400, 165, [Number.parseInt(y.left), Number.parseInt(y.top) + 56], [window.innerWidth, window.innerHeight], !1);
                        t.setFormResetHandle("week", o);
                        const f = new m.Z;
                        f.setSubmission("edit", s, r.title, r.description),
                        f.setCategory(r.category, p),
                        f.setDates((0,
                        l.cF)(i, r.end)),
                        u.Z.setFormDatepickerDate(e, n, i);
                        const h = () => u.Z.getConfig(f.getSetup());
                        (0,
                        g.Z)(e, t, r, n, h);
                        const x = document.querySelector(".entry__options");
                        window.innerWidth > 580 ? (x.style.top = +w + "px",
                        x.style.left = b + "px") : x.style.top = "64px"
                    } else {
                        s.remove(),
                        (0,
                        d.c4)(a, "week");
                        const o = (0,
                        i.ZP)(+a.getAttribute("data-start-time"), +a.getAttribute("data-time-intervals"));
                        a.setAttribute("data-time", o),
                        a.children[1].children[0].textContent = o,
                        (0,
                        d.nF)(a, "week", _),
                        _.updateStore(t, a.getAttribute("data-box-id"), C),
                        b !== +r && (y.classList.contains("hide-sidebar") || (n.setDate(e.getYear(), e.getMonth(), e.getDay()),
                        (0,
                        p.Z)(e, t, n)));
                        const l = +a.getAttribute("data-box-col");
                        _.getBoxesByColumn(l).length > 1 ? (0,
                        d.ZP)(l, "week", _) : a.setAttribute("box-idx", "box-one"),
                        (0,
                        d.iE)("dragend", v, t)
                    }
                    document.removeEventListener("mousemove", Z),
                    document.removeEventListener("mouseup", o)
                }
                ))
            }
            function T(o) {
                (0,
                d.iE)("dragstart", v, t),
                document.body.style.cursor = "move";
                const [a,s] = t.getFirstActiveCategoryKeyPair()
                  , c = Number.parseInt(o.target.getAttribute("data-column-index"))
                  , r = document.createElement("div");
                r.setAttribute("class", "box box-dragging temp-week-box");
                const g = (0,
                d.E_)("week")
                  , p = document.createElement("div")
                  , y = document.createElement("span")
                  , b = document.createElement("span");
                p.classList.add("box__content"),
                y.classList.add("box-time"),
                b.classList.add("box-time");
                const w = +x.offsetTop
                  , f = Number.parseInt(x.scrollTop)
                  , h = o.pageY - x.offsetTop
                  , k = 12.5 * Math.round((h + Math.abs(f)) / 12.5);
                r.setAttribute("style", (0,
                d.ZB)(k, s));
                const L = {
                    y: +k / 12.5,
                    x: c,
                    h: 1,
                    e: 2
                };
                let[E,_,A,S] = (0,
                d.Xd)(k);
                function B(e) {
                    const t = e.pageY - w - h;
                    let n = 12.5 * Math.round(t / 12.5);
                    n <= 12.5 && (n = 12.5),
                    n + k > 1188 && (n = 1187.5 - k),
                    r.style.height = `${n}px`,
                    L.h = +n / 12.5,
                    L.e = +L.y + L.h,
                    A = Math.floor((+n + +k) / 12.5 / 4),
                    S = 15 * Math.floor((+n + +k) / 12.5 % 4),
                    y.style.wordBreak = "break-word",
                    y.textContent = `${(0,
                    i.mr)(E, _)} – `,
                    b.textContent = `${(0,
                    i.mr)(A, S)}`
                }
                p.append(y, b),
                r.append(g, p),
                o.target.append(r),
                document.addEventListener("mousemove", B),
                document.addEventListener("mouseup", (function o() {
                    const i = (0,
                    l.cp)(new Date(C[c]), [E, A], [_, S]);
                    !function(o, a, s, d, c) {
                        t.setFormResetHandle("week", q);
                        const r = t.getRenderFormCallback()
                          , i = new m.Z
                          , [g,p,y,b] = c;
                        i.setSubmission(g, p, y, b),
                        "create" === g && (o.style.opacity = .9);
                        const [v,w] = s;
                        i.setCategory(v, w);
                        const [f,h] = d;
                        i.setDates((0,
                        l.cF)(f, h)),
                        r(),
                        u.Z.setFormDatepickerDate(e, n, f),
                        u.Z.getConfig(i.getSetup())
                    }(r, 0, [a, s], i, ["create", null, null, null]),
                    (0,
                    d.iE)("dragend", v, t),
                    document.removeEventListener("mouseup", o),
                    document.removeEventListener("mousemove", B)
                }
                ))
            }
            function $(e) {
                const n = (0,
                c.As)(e, ".box-resize-s")
                  , o = (0,
                c.As)(e, ".box")
                  , a = (0,
                c.As)(e, ".week--col")
                  , s = (0,
                c.As)(e, ".allday--col");
                n ? function(e, n) {
                    (0,
                    d.iE)("dragstart", v, t),
                    document.body.style.cursor = "move";
                    const o = n.parentElement
                      , a = o.getAttribute("data-column-index");
                    n.setAttribute("data-box-col", a);
                    let s = !1;
                    const l = (0,
                    d.gn)(n);
                    n.classList.contains("box-ontop") && (s = !0,
                    (0,
                    d.mg)("week", n)),
                    n.classList.add("box-resizing");
                    const c = n.offsetTop;
                    (0,
                    d.Ly)(n, o, s, "week");
                    const r = e => {
                        const t = x.offsetTop;
                        let o = Math.abs(Number.parseInt(w.getBoundingClientRect().top));
                        o == t ? o -= t : w.getBoundingClientRect().top > 0 ? o = t - o : o += t;
                        const a = 12.5 * Math.round((e.pageY - c - t + o) / 12.5);
                        a <= 12.5 ? n.style.height = "12.5px" : a + Number.parseInt(n.style.top) > 1188 || (n.style.height = `${a}px`)
                    }
                      , u = () => {
                        if (document.querySelector(".temporary-box").remove(),
                        n.classList.remove("box-resizing"),
                        s && n.classList.add("box-ontop"),
                        n.style.height === l.height)
                            s && (n.setAttribute("class", l.class),
                            n.style.left = l.left,
                            n.style.width = l.width);
                        else {
                            (0,
                            d.c4)(n, "week");
                            const e = +n.getAttribute("data-start-time")
                              , o = +n.getAttribute("data-time-intervals")
                              , a = (0,
                            i.ZP)(e, o);
                            n.children[1].children[0].textContent = a,
                            (0,
                            d.nF)(n, "week", _);
                            const s = +n.getAttribute("data-box-col");
                            _.getBoxesByColumn(s).length > 1 && (0,
                            d.ZP)(s, "week", _),
                            _.updateStore(t, n.getAttribute("data-box-id"), C)
                        }
                        (0,
                        d.iE)("dragend", v, t),
                        document.removeEventListener("mousemove", r),
                        document.removeEventListener("mouseup", u)
                    }
                    ;
                    document.addEventListener("mousemove", r),
                    document.addEventListener("mouseup", u)
                }(0, e.target.parentElement) : o ? F(e, e.target) : a ? T(e, e.target) : s && e.target.childElementCount > 0 && function(e, t) {
                    const n = t.parentElement;
                    t.classList.add("allday-modal__cell--open"),
                    t.firstChild.firstChild.style.backgroundColor = "#01635b";
                    const o = Number.parseInt(n.getAttribute("data-allday-column"))
                      , a = _.getBoxesByColumnTop(o);
                    a.length > 0 && (Z(0, n, a, o, t),
                    b.classList.remove("hide-resize-overlay"))
                }(0, e.target)
            }
            function N() {
                !function() {
                    for (const e of L)
                        e.innerText = "";
                    for (const e of k)
                        e.innerText = "";
                    for (const e of _.getBoxes()) {
                        const n = e.coordinates.y;
                        (null === A || n < A) && (A = n);
                        const o = L[+e.coordinates.x];
                        (0,
                        d.dO)(o, e, "week", t.getCtgColor(e.category))
                    }
                    const e = _.getBoxesTopLengths();
                    for (const t in e)
                        B(k[+t], e[t])
                }();
                const e = _.getColumnsWithMultipleBoxes();
                for (const t of e)
                    (0,
                    d.ZP)(t, "week", _)
            }
            function I(a) {
                (0,
                c.As)(a, ".weekview--header-day__number") && function(a) {
                    const [s,d,c] = (0,
                    l.pH)(a.target, "data-weekview-date");
                    e.setDate(s, d, c),
                    e.setDateSelected(c),
                    e.setComponent("day"),
                    (0,
                    o.Z)("day", e, t, n)
                }(a)
            }
            !function() {
                let t, n;
                document.querySelector(".wv-gmt").textContent = `UTC ${e.getGmt()}`;
                const o = []
                  , a = []
                  , s = e.getToday()
                  , [l,d,c] = [s.getFullYear(), s.getMonth(), s.getDate()];
                for (const s of C) {
                    const [r,i,u] = [s.getFullYear(), s.getMonth(), s.getDate()];
                    o.push(u),
                    a.push(`${r}-${i}-${u}`),
                    u === e.getDateSelected() && i === e.getMonth() && (n = u),
                    u === c && i === d && r === l && (t = u)
                }
                for (const [e,s] of o.entries())
                    s === n ? h[e].classList.add("wvh--selected") : h[e].classList.remove("wvh--selected"),
                    s === t ? h[e].classList.add("wvh--today") : h[e].classList.remove("wvh--today"),
                    h[e].textContent = s,
                    h[e].setAttribute("data-weekview-date", a[e]),
                    k[e].setAttribute("data-wvtop-day", s)
            }(),
            N(),
            v.onmousedown = $,
            f.onclick = I,
            t.setResetPreviousViewCallback(S)
        }
    }
}]);
