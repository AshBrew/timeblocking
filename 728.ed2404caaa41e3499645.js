"use strict";
(self.webpackChunkgoogle_calendar_clone_vanilla = self.webpackChunkgoogle_calendar_clone_vanilla || []).push([[728], {
    287: (t, e, o) => {
        o.d(e, {
            Z: () => s
        });
        var n = o(151)
          , r = o(748);
        const s = new class {
            constructor() {
                this.headerOffset = document.querySelector(".header"),
                this.form = document.querySelector(".entries__form"),
                this.formBody = document.querySelector(".entries__form--body"),
                this.formTitleDescription = document.querySelectorAll(".form-body-single"),
                this.formStartEndCtg = document.querySelectorAll(".form-body-double"),
                this.formsubmitbtn = document.querySelector(".form--footer__button-save"),
                this.formCategoryWrapper = document.querySelector(".form--body__category-modal--wrapper"),
                this.formCategorySelect = document.querySelector(".form--body__category-modal--wrapper-selection"),
                this.formCategoryWrapperIcon = document.querySelector(".form--body__category-modal--wrapper__color"),
                this.formCategoryTitle = document.querySelector(".form--body__category-modal--wrapper__title"),
                this.formCatgoryIcon = document.querySelector(".form--body__category-icon")
            }
            setFormStyle(t, e, o, n) {
                o || (o = !1),
                n || (n = null);
                const [s,i] = (0,
                r.tb)(this.form.offsetWidth, this.form.offsetHeight, [t, e], [window.innerWidth, window.innerHeight], o, n);
                this.form.style.left = `${s}px`,
                this.form.style.top = `${i}px`,
                this.form.style.margin = "0"
            }
            setFormSubmitType(t, e) {
                this.formsubmitbtn.setAttribute("data-form-action", t),
                this.formsubmitbtn.setAttribute("data-form-entry-id", null === e ? e = "" : e)
            }
            configFormTitleDescriptionInput(t, e) {
                for (const [o,n] of this.formTitleDescription.entries())
                    n.firstElementChild.value = [t, e][o]
            }
            setFormDateInput(t, e, o, r) {
                const {labels: s} = n.Z
                  , [i,a] = [t.firstElementChild, t.lastElementChild]
                  , d = `${e.getHours()}:${o}`;
                a.setAttribute("data-form-time", d),
                a.textContent = `${0 == +e.getHours() || 12 == +e.getHours() ? 12 : e.getHours() % 12}:${o}${e.getHours() < 12 ? "am" : "pm"}`,
                i.setAttribute("data-form-date", r),
                i.textContent = `${s.monthsShort[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`
            }
            setFormDatepickerDate(t, e, o) {
                o = new Date(o),
                t.setDateSelected(o.getDate()),
                e.setDate(t.getYear(), t.getMonth(), t.getDay()),
                e.setDateSelected(o.getDate())
            }
            configFormDateInputs(t) {
                for (let e = 0; e < 2; e++)
                    this.setFormDateInput(this.formStartEndCtg[e].lastElementChild, t.dateObj[e], t.minutes[e], t.formatted[e])
            }
            configFormCategoryInput(t) {
                const [e,o] = t;
                this.formCategoryWrapper.setAttribute("data-form-category", e),
                this.formCategorySelect.style.backgroundColor = o,
                this.formCategoryWrapperIcon.style.backgroundColor = o,
                this.formCatgoryIcon.firstChild.setAttribute("fill", o),
                this.formCategoryTitle.textContent = e
            }
            getConfig(t) {
                this.setFormSubmitType(t.submission.type, t.submission.id),
                this.configFormCategoryInput([t.category.name, t.category.color]),
                this.configFormDateInputs(t.dates.object),
                "edit" === t.submission.type && this.configFormTitleDescriptionInput(t.submission.title, t.submission.description)
            }
        }
    }
    ,
    944: (t, e, o) => {
        o.d(e, {
            Z: () => n
        });
        class n {
            constructor() {
                this.submission = {},
                this.category = {},
                this.dates = {}
            }
            setSubmission(t, e, o, n) {
                this.submission = {
                    type: t,
                    id: e || null,
                    title: o || null,
                    description: n || null
                }
            }
            setCategory(t, e) {
                this.category = {
                    name: t,
                    color: e
                }
            }
            setDates(t) {
                this.dates = {
                    object: t
                }
            }
            getSetup() {
                return {
                    submission: this.submission,
                    category: this.category,
                    dates: this.dates
                }
            }
        }
    }
    ,
    683: (t, e, o) => {
        o.d(e, {
            Z: () => b
        });
        var n = o(432)
          , r = o(634)
          , s = o(748);
        const i = document.querySelector(".entry__options--overlay")
          , a = document.querySelector(".entry__options")
          , d = document.querySelector(".entry__options--header")
          , c = document.querySelector(".entry__options-date")
          , l = document.querySelector(".entry__options-time")
          , u = document.querySelector(".eob-title")
          , m = document.querySelector(".eob-description")
          , p = document.querySelector(".eob-category--icon")
          , y = document.querySelector(".eob-category");
        function b(t, e, o, b, f) {
            function h() {
                e.getRenderFormCallback()(),
                f(),
                v()
            }
            function g() {
                const r = document.createElement("div");
                r.classList.add("delete-popup");
                const s = document.createElement("div");
                s.classList.add("delete-popup__btns");
                const i = document.createElement("button");
                i.classList.add("delete-popup__cancel"),
                i.textContent = "Cancel";
                const d = document.createElement("button");
                d.classList.add("delete-popup__confirm"),
                d.textContent = "Delete";
                const c = document.createElement("p");
                c.classList.add("delete-popup__text"),
                c.textContent = "Are you sure you want to delete this entry?",
                s.append(i, d),
                r.append(c, s),
                a.append(r);
                const l = () => {
                    r.remove()
                }
                ;
                i.onclick = l,
                d.onclick = () => {
                    var r;
                    r = o,
                    e.deleteEntry(r.id),
                    v(),
                    (0,
                    n.Z)(t.getComponent(), t, e, b),
                    l();
                    const s = e.getFormResetHandle(t.getComponent());
                    null !== s && s()
                }
            }
            function x() {
                const o = e.getFormResetHandle(t.getComponent());
                v(),
                o()
            }
            function v() {
                for (const t of [c, l, u, m, y])
                    t.innerText = "";
                a.classList.add("entry__options--hidden"),
                i.classList.add("entry__options--hidden"),
                e.removeActiveOverlay("entry__options--hidden"),
                m.parentElement.removeAttribute("style"),
                a.onclick = null,
                i.onclick = null,
                d.focus(),
                document.removeEventListener("keydown", _)
            }
            function _(t) {
                const e = document?.querySelector(".delete-popup");
                if ("Escape" === t.key) {
                    if (e)
                        return void e.remove();
                    x()
                }
                "e" === t.key.toLowerCase() && h(),
                "Delete" === t.key && g()
            }
            function C(t) {
                const e = (0,
                s.As)(t, ".eoi__edit")
                  , o = (0,
                s.As)(t, ".eoi__delete")
                  , n = (0,
                s.As)(t, ".eoi__close");
                e ? h() : o ? g() : n && x()
            }
            !function() {
                a.classList.remove("entry__options--hidden"),
                i.classList.remove("entry__options--hidden"),
                e.addActiveOverlay("entry__options--hidden");
                const [t,n] = [new Date(o.start), new Date(o.end)];
                let s = !1;
                (0,
                r.aN)(t, new Date) && (s = !0);
                const d = (0,
                r.o4)(t, n);
                if (c.textContent = d.date,
                null !== d.time)
                    if (void 0 === d.time) {
                        const t = (new Date).getTime() - n.getTime()
                          , e = Math.floor(t / 864e5);
                        let o;
                        if (0 === e) {
                            const e = Math.floor(t / 36e5)
                              , n = Math.floor((t - 1e3 * e * 60 * 60) / 6e4);
                            0 === e ? o = 1 === n ? `ended ${n} minute ago` : `ended ${n} minutes ago` : 1 === e ? o = `ended ${e} hour ago` : e > 1 && (o = `ended ${e} hours ago`)
                        } else
                            o = 1 === e ? "ended yesterday" : `ended ${e} days ago`;
                        l.textContent = o
                    } else
                        l.textContent = s ? "ending in " + d.time : d.time;
                u.textContent = o.title,
                0 === o.description ? m.parentElement.style.display = "none" : m.textContent = o.description,
                p.setAttribute("fill", e.getCtgColor(o.category)),
                y.textContent = o.category,
                a.onclick = C,
                i.onclick = x,
                document.addEventListener("keydown", _)
            }()
        }
    }
    ,
    375: (t, e, o) => {
        o.d(e, {
            E_: () => m,
            Kd: () => b,
            Ly: () => c,
            Xd: () => p,
            ZB: () => l,
            ZP: () => g,
            c4: () => a,
            dO: () => d,
            ft: () => h,
            gn: () => f,
            iE: () => s,
            mg: () => u,
            nF: () => i,
            zW: () => y
        });
        var n = o(255);
        const r = {
            boxClasses: {
                week: {
                    base: "box",
                    ontop: "box-ontop",
                    active: "box-mv-dragactive",
                    temporary: "temporary-box",
                    prepend: "box-"
                },
                day: {
                    base: "dv-box",
                    ontop: "dv-box-ontop",
                    active: "dv-box-mv-dragactive",
                    temporary: "dv-temporary-box",
                    prepend: "dv-box-"
                }
            },
            boxAttributes: {
                week: {
                    updatecoord: ["data-box-id", "data-start-time", "data-time-intervals"],
                    dataIdx: "box-idx",
                    dataId: "data-box-id",
                    dataCol: "data-box-col",
                    prepend: "data-",
                    prepentwo: "data-wv-"
                },
                day: {
                    updatecoord: ["data-dv-box-id", "data-dv-start-time", "data-dv-time-intervals"],
                    dataIdx: "data-dv-box-index",
                    dataId: "data-dv-box-id",
                    prepend: "data-dv-",
                    prepentwo: "data-dv-"
                }
            },
            boxGrid: {
                leftCoord: ["0.00", "5.00", "10.00", "25.00", "55.00", "70.00", "5.00", "10.00", "25.00", "55.00", "80.00", "15.00", "5.00", "25.00", "65.00"],
                widthCoord: ["100.00", "95.00", "90.00", "75.00", "45.00", "30.00", "45.00", "55.00", "75.00", "45.00", "20.00", "45.00", "30.00", "50.00", "25.00"]
            },
            styles: {
                newBox: {
                    left: "0%",
                    height: "12.5px",
                    width: "97%"
                }
            }
        };
        function s(t, e, o) {
            const n = document.querySelector(".sidebar")
              , r = document.querySelector(".resize-overlay");
            switch (t) {
            case "dragstart":
                n.classList.contains("hide-sidebar") || 0 === e.offsetLeft && n.classList.add("sidebar--dragged-over"),
                o.addActiveOverlay("hide-resize-overlay"),
                r.classList.remove("hide-resize-overlay");
                break;
            case "dragend":
                o.removeActiveOverlay("hide-resize-overlay"),
                n.classList.remove("sidebar--dragged-over"),
                r.classList.add("hide-resize-overlay"),
                document.body.style.cursor = "default"
            }
        }
        function i(t, e, o) {
            const [n,s,i] = r.boxAttributes[e].updatecoord.map((e => t.getAttribute(e)))
              , a = "week" === e ? t.getAttribute("data-box-col") : 1;
            o.updateCoordinates(n, {
                x: Number.parseInt(a),
                y: Number.parseInt(s),
                h: Number.parseInt(i),
                e: Number.parseInt(s) + Number.parseInt(i)
            })
        }
        function a(t, e) {
            let o = +t.style.top.split("px")[0];
            o = o >= 0 ? o / 12.5 : 0;
            const n = +t.style.height.split("px")[0] / 12.5
              , s = o + n
              , i = r.boxAttributes[e].prepend;
            t.setAttribute(`${i}start-time`, o),
            t.setAttribute(`${i}time-intervals`, n),
            t.setAttribute(`${i}end-time`, s)
        }
        function d(t, e, o, s) {
            const i = r.boxClasses[o].base
              , a = r.boxAttributes[o].prepend
              , d = r.boxAttributes[o].prependtwo
              , c = e.coordinates
              , l = document.createElement("div");
            l.classList.add(i),
            l.style.backgroundColor = s,
            l.style.top = 12.5 * +c.y + "px",
            l.style.height = 12.5 * +c.h + "px",
            l.style.left = "calc((100% - 0px) * 0 + 0px)",
            l.style.width = "calc((100% - 4px) * 1)";
            const u = document.createElement("div");
            u.classList.add(`${i}__header`);
            const m = document.createElement("div");
            m.classList.add(`${i}-title`),
            m.textContent = e.title,
            u.append(m);
            const p = document.createElement("div");
            p.classList.add(`${i}__content`);
            const y = document.createElement("span");
            y.classList.add(`${i}-time`),
            p.append(y);
            const b = document.createElement("div");
            b.classList.add(`${i}-resize-s`),
            "true" === t.getAttribute(`${d}top`) ? (l.setAttribute(`${d}start`, c.x),
            l.setAttribute(`${d}end`, c.x2)) : (l.setAttribute(`${a}start-time`, c.y),
            l.setAttribute(`${a}time-intervals`, c.h),
            l.setAttribute(`${a}end-time`, +c.y + +c.h),
            "week" === o ? (l.setAttribute("data-box-col", c.x),
            l.setAttribute("box-idx", 1)) : l.setAttribute("data-dv-box-index", 1),
            y.textContent = (0,
            n.ZP)(c.y, +c.h)),
            l.setAttribute(`${a}box-id`, e.id),
            l.setAttribute(`${a}box-category`, e.category),
            l.append(u, p, b),
            t.append(l)
        }
        function c(t, e, o, n) {
            const s = t.cloneNode(!0);
            s.classList.add(`${r.boxClasses[n].temporary}`),
            o ? e.insertBefore(s, t.nextElementSibling) : e.append(s)
        }
        function l(t, e) {
            const o = r.styles.newBox;
            return `top:${t}px; left:${o.left}; height:${o.height}; width:${o.width}; background-color:${e};`
        }
        function u(t, e) {
            e.setAttribute("class", r.boxClasses[t].base),
            e.style.left = "calc((100% - 0px) * 0 + 0px)",
            e.style.width = "calc((100% - 4px) * 1)"
        }
        function m(t) {
            const e = r.boxClasses[t].base
              , o = document.createElement("div")
              , n = document.createElement("div");
            return o.classList.add(`${e}__header`),
            n.classList.add(`${e}-title`),
            n.textContent = "(no title)",
            o.append(n),
            o
        }
        function p(t) {
            const e = Math.floor(t / 12.5 / 4)
              , o = 15 * Math.floor(t / 12.5 % 4);
            return [e, o, e, +o + 15]
        }
        function y(t, e) {
            return Math.floor((t + e) / 12.5 / 4)
        }
        function b(t, e) {
            return 15 * Math.floor((t + e) / 12.5 % 4)
        }
        function f(t) {
            return {
                height: t.style.height,
                left: t.style.left,
                width: t.style.width,
                class: t.getAttribute("class")
            }
        }
        function h(t, e) {
            t.setAttribute("class", e.class),
            t.style.left = e.left,
            t.style.width = e.width
        }
        const g = function(t, e, o) {
            const {boxClasses: n, boxAttributes: s, boxGrid: i} = r
              , {ontop: a} = n[e]
              , {dataId: d} = s[e]
              , {leftCoord: c, widthCoord: l} = i
              , u = "week" === e ? o.getBoxesByColumn(t) : o.getBoxes();
            if (0 === u.length)
                return;
            (function(t) {
                t.sort(( (t, e) => t.coordinates.y - e.coordinates.y));
                let e = []
                  , o = [];
                function n(t, e) {
                    let o = t.coordinates.y + t.coordinates.h
                      , n = e.coordinates.y + e.coordinates.h;
                    return t.coordinates.y <= e.coordinates.y && o > e.coordinates.y || e.coordinates.y <= t.coordinates.y && n > t.coordinates.y
                }
                for (let r of t)
                    0 === o.length || o.some((t => n(t, r))) ? o.push(r) : (e.push(o),
                    o = [r]);
                return o.length > 0 && e.push(o),
                e
            }
            )(u).forEach((t => {
                for (let s = 0; s < t.length; s++) {
                    const i = t[s]
                      , {id: u} = i
                      , m = document.querySelector(`[${d}="${u}"]`)
                      , p = s % l.length;
                    m.style.zIndex = s + 1,
                    s > 0 && m.classList.add(a),
                    o = p,
                    n = c,
                    r = l,
                    (e = m).style.left = `${Number.parseFloat(n[o])}%`,
                    e.style.width = `${Number.parseFloat(r[o])}%`
                }
                var e, o, n, r
            }
            ))
        }
    }
}]);
