/* Shared site behaviour: mobile nav, scroll reveal, footer year. */
(function () {
  "use strict";

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close when a link is chosen or the viewport grows past the breakpoint.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    // Keep in step with the nav breakpoint in style.css.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1150) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Current year in the footer --------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---- Dismissible floating call-out ------------------------------------ */
  var callout = document.querySelector("[data-callout-id]");

  if (callout) {
    var STORE_KEY = "e3-callout-dismissed";
    var calloutId = callout.getAttribute("data-callout-id");

    // Storage throws in private mode and when cookies are blocked; a failure
    // to remember the dismissal should never stop the notice working.
    var readStore = function () {
      try {
        return window.localStorage.getItem(STORE_KEY);
      } catch (err) {
        return null;
      }
    };

    var hideCallout = function (remember) {
      callout.classList.remove("is-visible");
      callout.hidden = true;
      if (!remember) return;
      try {
        window.localStorage.setItem(STORE_KEY, calloutId);
      } catch (err) {
        /* dismissal simply won't persist */
      }
    };

    if (readStore() !== calloutId) {
      // Let the page settle before sliding the notice in.
      window.setTimeout(function () {
        callout.hidden = false;
        // Two frames: the first commits the un-hidden starting state, the
        // second flips the class so the transition actually runs.
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            callout.classList.add("is-visible");
          });
        });
      }, 900);
    }

    var closeBtn = callout.querySelector("[data-callout-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        hideCallout(true);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !callout.hidden) hideCallout(true);
    });
  }

  /* ---- Scroll reveal ----------------------------------------------------- */
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) {
    io.observe(el);
  });
})();
