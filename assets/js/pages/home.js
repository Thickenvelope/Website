/* ==========================================================================
   HOME PAGE SCRIPT
   --------------------------------------------------------------------------
   Renders the stats strip and the three section cards from config.js.
   Loaded only by index.html, after config.js and site.js.
   ========================================================================== */

(function () {
  "use strict";

  var CFG = window.SITE_CONFIG;
  var esc = window.TE.esc;

  function renderStats() {
    var host = document.getElementById("stats-list");
    if (!host || !CFG.stats) return;

    host.innerHTML = CFG.stats.map(function (stat) {
      return (
        "<li>" +
          '<span class="stat-value">' + esc(stat.value) + "</span>" +
          '<span class="stat-label">' + esc(stat.label) + "</span>" +
        "</li>"
      );
    }).join("");
  }

  function renderCards() {
    var host = document.getElementById("home-cards");
    if (!host || !CFG.homeCards) return;

    host.innerHTML = CFG.homeCards.map(function (card) {
      return (
        '<article class="card card--feature card--link">' +
          '<div class="card-body">' +
            '<span class="eyebrow">' + esc(card.eyebrow) + "</span>" +
            "<h3>" + esc(card.title) + "</h3>" +
            "<p>" + esc(card.body) + "</p>" +
          "</div>" +
          '<div class="card-footer">' +
            '<a class="arrow-link" href="' + esc(card.href) + '">' + esc(card.linkLabel) + "</a>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function start() {
    renderStats();
    renderCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
