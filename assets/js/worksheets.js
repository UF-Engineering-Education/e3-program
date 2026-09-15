/* Mentor worksheets: print one sheet at a time, and grow textareas so that
   whatever was typed is fully visible on the printed page.

   Nothing here stores or transmits what a mentor types — these forms hold notes
   about a named colleague, so the values live in the DOM and nowhere else. */
(function () {
  "use strict";

  var sheets = document.querySelectorAll(".sheet");
  if (!sheets.length) return;

  /* ---- Print a single worksheet ----------------------------------------- */
  // A print stylesheet can't select "the sheet whose button was pressed", so the
  // choice is marked in the DOM first: body flags that one sheet is targeted,
  // and the sheet itself carries the class the print rules keep visible.
  var clearTarget = function () {
    document.body.classList.remove("is-printing-one");
    Array.prototype.forEach.call(sheets, function (sheet) {
      sheet.classList.remove("is-printing");
    });
  };

  Array.prototype.forEach.call(
    document.querySelectorAll("[data-print-sheet]"),
    function (btn) {
      btn.addEventListener("click", function () {
        var sheet = document.getElementById(btn.getAttribute("data-print-sheet"));
        if (!sheet) return;

        clearTarget();
        sheet.classList.add("is-printing");
        document.body.classList.add("is-printing-one");

        // Safari fires no afterprint in some versions; clearing before the
        // dialog opens would undo the targeting, so clear on a timer too.
        window.print();
        window.setTimeout(clearTarget, 1000);
      });
    }
  );

  window.addEventListener("afterprint", clearTarget);

  /* ---- Grow textareas to fit their content ------------------------------ */
  // A scrolled textarea prints only the visible rows, which would silently drop
  // half of a long answer from the PDF.
  var fit = function (el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  Array.prototype.forEach.call(
    document.querySelectorAll(".sheet textarea"),
    function (el) {
      el.addEventListener("input", function () {
        fit(el);
      });
    }
  );

  window.addEventListener("beforeprint", function () {
    Array.prototype.forEach.call(
      document.querySelectorAll(".sheet textarea"),
      function (el) {
        if (el.value) fit(el);
      }
    );
  });
})();
