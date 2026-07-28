/* Shared renderer for the Fellows and Mentors grids.
   Each page calls E3People.render({ ... }) with its own data. */
window.E3People = (function () {
  "use strict";

  var SILHOUETTE =
    '<div class="fellow__placeholder" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M12 12.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm0 2c-4.6 0-8.5 2.5-8.5 5.6V22h17v-1.9c0-3.1-3.9-5.6-8.5-5.6Z"/>' +
    "</svg></div>";

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render(cfg) {
    var grid = document.getElementById(cfg.grid);
    if (!grid) return;

    var people = cfg.people || [];
    var filterBar = cfg.filters ? document.getElementById(cfg.filters) : null;
    var status = cfg.status ? document.getElementById(cfg.status) : null;
    var tally = cfg.tally ? document.getElementById(cfg.tally) : null;

    var singular = cfg.singular || "person";
    var plural = cfg.plural || "people";
    var tba = cfg.tba || "To be announced";
    var allLabel = cfg.allLabel || "All " + plural;
    var cohortLabel = cfg.cohortLabel || "";

    // Use the supplied department order; fall back to order of first appearance.
    var departments = (cfg.departments || []).slice();
    people.forEach(function (p) {
      if (p.dept && departments.indexOf(p.dept) === -1) departments.push(p.dept);
    });

    function countIn(dept) {
      return people.filter(function (p) {
        return p.dept === dept;
      }).length;
    }

    /* ---- Department tally ---- */
    if (tally) {
      tally.innerHTML = departments
        .map(function (dept) {
          return (
            "<div><dt>" + esc(dept) + "</dt><dd>" + countIn(dept) + "</dd></div>"
          );
        })
        .join("");
    }

    /* ---- Filter chips ---- */
    if (filterBar) {
      var chips = [
        '<button type="button" class="filter" aria-pressed="true" data-dept="all">' +
          esc(allLabel) +
          '<span class="filter__count">' +
          people.length +
          "</span></button>"
      ];

      departments.forEach(function (dept) {
        var n = countIn(dept);
        if (!n) return;
        chips.push(
          '<button type="button" class="filter" aria-pressed="false" data-dept="' +
            esc(dept) +
            '">' +
            esc(dept) +
            '<span class="filter__count">' +
            n +
            "</span></button>"
        );
      });

      filterBar.innerHTML = chips.join("");

      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter");
        if (!btn) return;
        filterBar.querySelectorAll(".filter").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
        paint(btn.dataset.dept);
      });
    }

    /* ---- Card markup ---- */
    function card(person) {
      var named = Boolean(person.name && person.name.trim());
      var displayName = named ? esc(person.name) : esc(tba);

      var photo = person.photo
        ? '<img src="' +
          esc(person.photo) +
          '" alt="Headshot of ' +
          esc(person.name || singular) +
          '" loading="lazy" width="600" height="600">'
        : SILHOUETTE;

      var role = person.role
        ? '<p class="fellow__role">' + esc(person.role) + "</p>"
        : "";

      var bio = person.bio
        ? '<p class="fellow__bio">' + esc(person.bio) + "</p>"
        : '<p class="fellow__bio muted">Profile coming soon.</p>';

      var links = (person.links || [])
        .filter(function (l) {
          return l && l.url && l.label;
        })
        .map(function (l) {
          // Profile links point off-site, so they open in a new tab like the
          // hand-written external links in the pages.
          return (
            '<a href="' +
            esc(l.url) +
            '" target="_blank" rel="noopener">' +
            esc(l.label) +
            "</a>"
          );
        })
        .join("");

      return (
        '<li data-dept="' +
        esc(person.dept) +
        '"><article class="fellow' +
        (named ? "" : " fellow--tba") +
        '"><div class="fellow__photo">' +
        photo +
        '</div><div class="fellow__body">' +
        '<h3 class="fellow__name">' +
        displayName +
        "</h3>" +
        '<p class="fellow__dept">' +
        esc(person.dept) +
        "</p>" +
        role +
        bio +
        (links ? '<p class="fellow__links">' + links + "</p>" : "") +
        "</div></article></li>"
      );
    }

    /* ---- Paint ---- */
    function paint(dept) {
      var list =
        !dept || dept === "all"
          ? people
          : people.filter(function (p) {
              return p.dept === dept;
            });

      grid.innerHTML = list.map(card).join("");

      if (status) {
        status.textContent =
          list.length +
          " " +
          (list.length === 1 ? singular : plural) +
          (dept && dept !== "all" ? " in " + dept : cohortLabel ? " " + cohortLabel : "");
      }
    }

    paint("all");
  }

  return { render: render };
})();
