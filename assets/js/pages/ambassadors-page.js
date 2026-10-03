/* ==========================================================================
   AMBASSADORS PAGE SCRIPT
   --------------------------------------------------------------------------
   Renders the ambassador directory from assets/js/data/ambassadors.js and
   wires up the region filter chips.
   ========================================================================== */

(function () {
  "use strict";

  var DATA = window.AMBASSADORS || [];
  var esc = window.TE.esc;
  var initials = window.TE.initials;
  var uniqueValues = window.TE.uniqueValues;

  var activeRegion = "All";

  var listEl, filterEl, countEl, emptyEl;

  function cardHtml(person) {
    var tags = (person.tags || []).map(function (tag) {
      return '<li><span class="badge badge--neutral">' + esc(tag) + "</span></li>";
    }).join("");

    var statusBadge = person.accepting
      ? '<span class="badge badge--ok">Taking questions</span>'
      : '<span class="badge badge--off">Paused</span>';

    var contactButton = person.accepting && person.contact
      ? '<a class="btn btn--outline btn--sm" href="mailto:' + esc(person.contact) +
        '?subject=' + encodeURIComponent("Question from a Thick Envelope visitor") + '">Send a question</a>'
      : '<span class="amb-meta">Check back soon</span>';

    return (
      '<article class="card amb-card">' +
        '<div class="amb-head">' +
          '<span class="amb-avatar" aria-hidden="true">' + esc(initials(person.name)) + "</span>" +
          "<div>" +
            '<div class="amb-name">' + esc(person.name) + "</div>" +
            '<div class="amb-college">' + esc(person.college) + "</div>" +
            '<div class="amb-meta">' + esc(person.year) + " &middot; " + esc(person.major) + "</div>" +
          "</div>" +
        "</div>" +

        '<div class="card-body">' +
          '<p class="amb-bio">' + esc(person.bio) + "</p>" +
          '<ul class="tag-list">' + tags + "</ul>" +
        "</div>" +

        '<div class="amb-foot">' +
          statusBadge +
          contactButton +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var visible = activeRegion === "All"
      ? DATA
      : DATA.filter(function (person) { return person.region === activeRegion; });

    listEl.innerHTML = visible.map(cardHtml).join("");

    countEl.textContent = visible.length === 1
      ? "Showing 1 ambassador"
      : "Showing " + visible.length + " ambassadors";

    emptyEl.hidden = visible.length > 0;
  }

  function renderFilters() {
    var regions = ["All"].concat(uniqueValues(DATA, "region"));

    filterEl.innerHTML = regions.map(function (region) {
      var isActive = region === activeRegion;
      return (
        '<button type="button" class="chip' + (isActive ? " is-active" : "") + '" ' +
        'data-region="' + esc(region) + '" aria-pressed="' + (isActive ? "true" : "false") + '">' +
        esc(region) + "</button>"
      );
    }).join("");
  }

  /* Updates the chips in place rather than re-rendering them, so the button
     the user just pressed keeps keyboard focus. */
  function syncFilterState() {
    Array.prototype.forEach.call(filterEl.querySelectorAll(".chip"), function (chip) {
      var isActive = chip.getAttribute("data-region") === activeRegion;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function onFilterClick(event) {
    var chip = event.target.closest(".chip");
    if (!chip) return;

    activeRegion = chip.getAttribute("data-region");
    syncFilterState();
    render();
  }

  function start() {
    listEl   = document.getElementById("ambassador-list");
    filterEl = document.getElementById("ambassador-filters");
    countEl  = document.getElementById("ambassador-count");
    emptyEl  = document.getElementById("ambassador-empty");

    if (!listEl || !filterEl || !countEl || !emptyEl) return;

    filterEl.addEventListener("click", onFilterClick);
    renderFilters();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
