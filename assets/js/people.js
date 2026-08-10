/* Shared renderer for the Fellows and Mentors grids.
   Each page calls E3People.render({ ... }) with its own data. */
window.E3People = (function () {
  "use strict";

  var SILHOUETTE =
    '<div class="fellow__placeholder" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M12 12.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm0 2c-4.6 0-8.5 2.5-8.5 5.6V22h17v-1.9c0-3.1-3.9-5.6-8.5-5.6Z"/>' +
    "</svg></div>";

  var ICON_LINKEDIN =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 ' +
    '9h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.4 2.5 4.4 5.75V21h-4v-5.7' +
    'c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9z"/></svg>';

  var ICON_GLOBE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.9" stroke-linecap="round" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6"/>' +
    '<path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>';

  // A person is "named" once their profile has been announced; until then the
  // card renders as a to-be-announced placeholder.
  function isNamed(person) {
    return Boolean(person.name && person.name.trim());
  }

  function iconFor(url) {
    return /linkedin\.com/i.test(url) ? ICON_LINKEDIN : ICON_GLOBE;
  }

  function validLinks(person) {
    return (person.links || []).filter(function (l) {
      return l && l.url && l.label;
    });
  }

  // Icon-only profile links, shared by the card and the dialog. An icon has no
  // text, so the label becomes the accessible name and the hover tooltip.
  // Profile links point off-site, so they open in a new tab like the
  // hand-written external links in the pages.
  function iconLinks(person) {
    var items = validLinks(person)
      .map(function (l) {
        return (
          '<a class="fellow__link" href="' +
          esc(l.url) +
          '" target="_blank" rel="noopener" title="' +
          esc(l.label) +
          '" aria-label="' +
          esc(l.label) +
          (isNamed(person) ? " of " + esc(person.name) : "") +
          '">' +
          iconFor(l.url) +
          "</a>"
        );
      })
      .join("");

    return items ? '<p class="fellow__links">' + items + "</p>" : "";
  }

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

    /* ---- Full-bio dialog -------------------------------------------------
       Native <dialog> gives us the backdrop, Escape-to-close and focus
       trapping for free. Browsers without showModal() simply never get a
       clickable card, and the short bio on the card still reads fine. */
    var supportsDialog = typeof HTMLDialogElement === "function" &&
      typeof document.createElement("dialog").showModal === "function";
    var dialog = null;

    function ensureDialog() {
      if (dialog) return dialog;
      dialog = document.createElement("dialog");
      dialog.className = "person-dialog";
      dialog.innerHTML =
        '<button type="button" class="person-dialog__close" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2.2" stroke-linecap="round" aria-hidden="true">' +
        '<path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
        '<div class="person-dialog__body"></div>';
      document.body.appendChild(dialog);

      dialog.querySelector(".person-dialog__close")
        .addEventListener("click", function () {
          dialog.close();
        });

      // A click on the backdrop lands on the dialog element itself.
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog) dialog.close();
      });

      return dialog;
    }

    function openDialog(person) {
      var d = ensureDialog();
      var paras = person.bioFull;
      if (typeof paras === "string") paras = [paras];

      var photo = person.photo
        ? '<div class="person-dialog__photo"><img src="' + esc(person.photo) +
          '" alt="Headshot of ' + esc(person.name || singular) + '"></div>'
        : "";

      var links = iconLinks(person);

      d.querySelector(".person-dialog__body").innerHTML =
        // Photo and its icon links share one column, so the links sit
        // directly beneath the headshot rather than after the bio.
        (photo || links
          ? '<div class="person-dialog__aside">' + photo + links + "</div>"
          : "") +
        '<div class="person-dialog__text">' +
        '<h2 class="person-dialog__name">' + esc(person.name) + "</h2>" +
        '<p class="person-dialog__dept">' + esc(person.dept) + "</p>" +
        (person.role
          ? '<p class="person-dialog__role">' + esc(person.role) + "</p>"
          : "") +
        paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        "</div>";

      d.showModal();
    }

    /* ---- Card markup ---- */
    function card(person, index) {
      var named = isNamed(person);
      var displayName = named ? esc(person.name) : esc(tba);
      var expandable = Boolean(named && person.bioFull && supportsDialog);

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

      var links = iconLinks(person);

      // The button is the real control: it carries the accessible name and
      // keyboard focus. CSS stretches it over the whole card so a click
      // anywhere opens the dialog.
      var more = expandable
        ? '<button type="button" class="fellow__more" data-person="' + index +
          '">Read full bio<span class="u-visually-hidden"> of ' +
          displayName + "</span></button>"
        : "";

      return (
        '<li data-dept="' +
        esc(person.dept) +
        '"><article class="fellow' +
        (named ? "" : " fellow--tba") +
        (expandable ? " fellow--expandable" : "") +
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
        // One footer row: the button on the left, icon links pushed right.
        // Rendered only when there is something to put in it.
        (more || links
          ? '<div class="fellow__foot">' + more + links + "</div>"
          : "") +
        "</div></article></li>"
      );
    }

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".fellow__more");
      if (!btn) return;
      var person = people[Number(btn.dataset.person)];
      if (person) openDialog(person);
    });

    /* ---- Paint ---- */
    function paint(dept) {
      var list =
        !dept || dept === "all"
          ? people
          : people.filter(function (p) {
              return p.dept === dept;
            });

      // Announced profiles fill the grid from the top left, with the
      // still-to-be-named placeholders after them. Partitioning rather than
      // sorting keeps each group in its authored (department) order.
      list = list.filter(isNamed).concat(
        list.filter(function (p) {
          return !isNamed(p);
        })
      );

      // Index against `people`, not the filtered list, so the dialog still
      // resolves the right person when a department filter is active.
      grid.innerHTML = list
        .map(function (p) {
          return card(p, people.indexOf(p));
        })
        .join("");

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
