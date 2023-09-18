"use strict";
! function() {
    var a = navigator.userAgent.toLowerCase(),
        t = new Date,
        e = ($(document), $(window)),
        r = $("html"),
        s = ($("body"), r.hasClass("desktop")),
        o = -1 !== a.indexOf("msie") ? parseInt(a.split("msie")[1], 10) : -1 !== a.indexOf("trident") ? 11 : -1 !== a.indexOf("edge") && 12,
        n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        i = !1,
        l = !1,
        d = {
            bootstrapTooltip: $("[data-toggle='tooltip']"),
            copyrightYear: $(".copyright-year"),
            materialParallax: $(".parallax-container"),
            preloader: $(".preloader"),
            rdNavbar: $(".rd-navbar"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            wow: $(".wow")
        };
    e.on("load", function() {
        if (d.preloader.length && !l && pageTransition({
                target: document.querySelector(".page"),
                delay: 0,
                duration: 500,
                classIn: "fadeIn",
                classOut: "fadeOut",
                classActive: "animated",
                conditions: function(a, t) {
                    return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(t) && !a.currentTarget.hasAttribute("data-lightgallery")
                },
                onTransitionStart: function(a) {
                    setTimeout(function() {
                        d.preloader.removeClass("loaded")
                    }, .75 * a.duration)
                },
                onReady: function() {
                    d.preloader.addClass("loaded"), i = !0
                }
            }), d.materialParallax.length) {
            if (l || o || n)
                for (var a = 0; a < d.materialParallax.length; a++) {
                    var t = $(d.materialParallax[a]);
                    t.addClass("parallax-disabled"), t.css({
                        "background-image": "url(" + t.data("parallax-img") + ")"
                    })
                } else d.materialParallax.parallax()
        }
    }), $(function() {
        function a(a, t) {
            var e, r = 0;
            if (a.length) {
                for (var s = 0; s < a.length; s++) {
                    var o = $(a[s]);
                    if ((e = o.regula("validate")).length)
                        for (b = 0; b < e.length; b++) r++, o.siblings(".form-validation").text(e[b].message).parent().addClass("has-error");
                    else o.siblings(".form-validation").text("").parent().removeClass("has-error")
                }
                return t && t.length ? validateReCaptcha(t) && 0 === r : 0 === r
            }
            return !0
        }

        function i(a) {
            d.bootstrapTooltip.tooltip("dispose"), window.innerWidth < 576 ? d.bootstrapTooltip.tooltip({
                placement: "bottom"
            }) : d.bootstrapTooltip.tooltip({
                placement: a
            })
        }
        if (l = window.xMode, navigator.platform.match(/(Mac)/i) && r.addClass("mac-os"), o && (12 === o && r.addClass("ie-edge"), 11 === o && r.addClass("ie-11"), o < 10 && r.addClass("lt-ie-10"), o < 11 && r.addClass("ie-10")), d.bootstrapTooltip.length) {
            var c = d.bootstrapTooltip.attr("data-placement");
            i(c), e.on("resize orientationchange", function() {
                i(c)
            })
        }
        if (d.copyrightYear.length && d.copyrightYear.text(t.getFullYear()), s && !l && $().UItoTop({
                easingType: "easeOutQuad",
                containerClass: "ui-to-top fa fa-angle-up"
            }), d.rdNavbar.length) {
            for (p = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], g = [0, 576, 768, 992, 1200, 1600], v = {}, u = f = 0, h = g.length; f < h; u = ++f) m = g[u], v[g[u]] || (v[g[u]] = {}), d.rdNavbar.attr("data" + p[u] + "layout") && (v[g[u]].layout = d.rdNavbar.attr("data" + p[u] + "layout")), d.rdNavbar.attr("data" + p[u] + "device-layout") && (v[g[u]].deviceLayout = d.rdNavbar.attr("data" + p[u] + "device-layout")), d.rdNavbar.attr("data" + p[u] + "hover-on") && (v[g[u]].focusOnHover = "true" === d.rdNavbar.attr("data" + p[u] + "hover-on")), d.rdNavbar.attr("data" + p[u] + "auto-height") && (v[g[u]].autoHeight = "true" === d.rdNavbar.attr("data" + p[u] + "auto-height")), l ? v[g[u]].stickUp = !1 : d.rdNavbar.attr("data" + p[u] + "stick-up") && (v[g[u]].stickUp = "true" === d.rdNavbar.attr("data" + p[u] + "stick-up")), d.rdNavbar.attr("data" + p[u] + "stick-up-offset") && (v[g[u]].stickUpOffset = d.rdNavbar.attr("data" + p[u] + "stick-up-offset"));
            d.rdNavbar.RDNavbar({
                anchorNav: !l,
                stickUpClone: !!d.rdNavbar.attr("data-stick-up-clone") && !l && "true" === d.rdNavbar.attr("data-stick-up-clone"),
                responsive: v,
                callbacks: {
                    onStuck: function() {
                        var a = this.$element.find(".rd-search input");
                        a && a.val("").trigger("propertychange")
                    },
                    onDropdownOver: function() {
                        return !l
                    },
                    onUnstuck: function() {
                        if (null !== this.$clone) {
                            var a = this.$clone.find(".rd-search input");
                            a && (a.val("").trigger("propertychange"), a.trigger("blur"))
                        }
                    }
                }
            }), d.rdNavbar.attr("data-body-class") && (document.body.className += " " + d.rdNavbar.attr("data-body-class"))
        }
        if (r.hasClass("wow-animation") && d.wow.length && !l && s && new WOW().init(), d.rdInputLabel.length && d.rdInputLabel.RDInputLabel(), d.regula.length && function a(t) {
                regula.custom({
                    name: "PhoneNumber",
                    defaultMessage: "Invalid phone number format",
                    validator: function() {
                        return "" === this.value || /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value)
                    }
                });
                for (var e = 0; e < t.length; e++) {
                    var r, s = $(t[e]);
                    s.addClass("form-control-has-validation").after("<span class='form-validation'></span>"), (r = s.parent().find(".form-validation")).is(":last-child") && s.addClass("form-control-last-child")
                }
                t.on("input change propertychange blur", function(a) {
                    var t, r = $(this);
                    if (("blur" === a.type || r.parent().hasClass("has-error")) && !r.parents(".rd-mailform").hasClass("success")) {
                        if ((t = r.regula("validate")).length)
                            for (e = 0; e < t.length; e++) r.siblings(".form-validation").text(t[e].message).parent().addClass("has-error");
                        else r.siblings(".form-validation").text("").parent().removeClass("has-error")
                    }
                }).regula("bind");
                for (var o = [{
                        type: regula.Constraint.Required,
                        newMessage: "The text field is required."
                    }, {
                        type: regula.Constraint.Email,
                        newMessage: "The email is not a valid email."
                    }, {
                        type: regula.Constraint.Numeric,
                        newMessage: "Only numbers are required"
                    }, {
                        type: regula.Constraint.Selected,
                        newMessage: "Please choose an option."
                    }], e = 0; e < o.length; e++) {
                    var n = o[e];
                    regula.override({
                        constraintType: n.type,
                        defaultMessage: n.newMessage
                    })
                }
            }(d.regula), d.rdMailForm.length) {
            var p, u, f, h, m, g, v, b, C = {
                MF000: "Successfully sent!",
                MF001: "Recipients are not set!",
                MF002: "Form will not work locally!",
                MF003: "Please, define email field in your form!",
                MF004: "Please, define type of your form!",
                MF254: "Something went wrong with PHPMailer!",
                MF255: "Aw, snap! Something went wrong."
            };
            for (u = 0; u < d.rdMailForm.length; u++) {
                var x = $(d.rdMailForm[u]),
                    y = !1;
                x.attr("novalidate", "novalidate").ajaxForm({
                    data: {
                        "form-type": x.attr("data-form-type") || "contact",
                        counter: u
                    },
                    beforeSubmit: function(t, e, r) {
                        if (!l) {
                            var s = $(d.rdMailForm[this.extraData.counter]),
                                o = s.find("[data-constraints]"),
                                n = $("#" + s.attr("data-form-output")),
                                i = s.find(".recaptcha"),
                                c = !0;
                            if (n.removeClass("active error success"), !a(o, i)) return !1;
                            if (i.length) {
                                var p = i.find(".g-recaptcha-response").val(),
                                    u = {
                                        CPT001: 'Please, setup you "site key" and "secret key" of reCaptcha',
                                        CPT002: "Something wrong with google reCaptcha"
                                    };
                                y = !0, $.ajax({
                                    method: "POST",
                                    url: "bat/reCaptcha.php",
                                    data: {
                                        "g-recaptcha-response": p
                                    },
                                    async: !1
                                }).done(function(a) {
                                    "CPT000" !== a && (n.hasClass("snackbars") ? (n.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + u[a] + "</span></p>"), setTimeout(function() {
                                        n.removeClass("active")
                                    }, 3500), c = !1) : n.html(u[a]), n.addClass("active"))
                                })
                            }
                            if (!c) return !1;
                            s.addClass("form-in-process"), n.hasClass("snackbars") && (n.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'), n.addClass("active"))
                        }
                    },
                    error: function(a) {
                        if (!l) {
                            var t = $("#" + $(d.rdMailForm[this.extraData.counter]).attr("data-form-output")),
                                e = $(d.rdMailForm[this.extraData.counter]);
                            t.text(C[a]), e.removeClass("form-in-process"), y && grecaptcha.reset()
                        }
                    },
                    success: function(a) {
                        if (!l) {
                            var t = $(d.rdMailForm[this.extraData.counter]),
                                e = $("#" + t.attr("data-form-output")),
                                r = t.find("select");
                            t.addClass("success").removeClass("form-in-process"), y && grecaptcha.reset(), a = 5 === a.length ? a : "MF255", e.text(C[a]), "MF000" === a ? e.hasClass("snackbars") ? e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + C[a] + "</span></p>") : e.addClass("active success") : e.hasClass("snackbars") ? e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + C[a] + "</span></p>") : e.addClass("active error"), t.clearForm(), r.length && r.select2("val", ""), t.find("input, textarea").trigger("blur"), setTimeout(function() {
                                e.removeClass("active error success"), t.removeClass("success")
                            }, 3500)
                        }
                    }
                })
            }
        }!$("[data-parallax-scroll]").length || l || n || ParallaxScroll.init()
    })
}();
