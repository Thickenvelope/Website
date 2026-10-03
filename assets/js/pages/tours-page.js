/* ==========================================================================
   CAMPUS TOURS PAGE SCRIPT
   --------------------------------------------------------------------------
   Renders two things from assets/js/data/tours.js:
     1. Tour tips, grouped into Before / During / After
     2. Local tour stop cards
   ========================================================================== */

(function () {
  "use strict";

  var TIPS  = window.TOUR_TIPS  || [];
  var STOPS = window.TOUR_STOPS || [];
  var esc = window.TE.esc;

  var STAGES = [
    { key: "Before", heading: "Before you go",      blurb: "Groundwork that makes the visit worth the drive." },
    { key: "During", heading: "While you are there", blurb: "What to look at once the official tour starts." },
    { key: "After",  heading: "After the visit",     blurb: "How to hold on to what you learned." }
  ];

  var STATUS_CLASS = {
    Open:     "badge--ok",
    Waitlist: "badge--warn",
    Full:     "badge--off"
  };

  function renderTips() {
    var host = document.getElementById("tour-tips");
    if (!host) return;

    host.innerHTML = STAGES.map(function (stage) {
      var tips = TIPS.filter(function (tip) { return tip.stage === stage.key; });
      if (!tips.length) return "";

      var cards = tips.map(function (tip) {
        return (
          '<article class="tip-card">' +
            "<h3>" + esc(tip.title) + "</h3>" +
            "<p>" + esc(tip.body) + "</p>" +
          "</article>"
        );
      }).join("");

      return (
        '<div class="tip-stage">' +
          '<div class="section-head">' +
            '<span class="eyebrow">' + esc(stage.key) + "</span>" +
            "<h2>" + esc(stage.heading) + "</h2>" +
            "<p>" + esc(stage.blurb) + "</p>" +
          "</div>" +
          '<div class="grid grid--2">' + cards + "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderStops() {
    var host = document.getElementById("tour-stops");
    if (!host) return;

    host.innerHTML = STOPS.map(function (stop) {
      var statusClass = STATUS_CLASS[stop.status] || "badge--neutral";

      var highlights = (stop.highlights || []).map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("");

      return (
        '<article class="card tour-card">' +
          '<div class="tour-card-head">' +
            "<h3>" + esc(stop.college) + "</h3>" +
            '<span class="badge ' + statusClass + '">' + esc(stop.status) + "</span>" +
          "</div>" +
          '<p class="tour-location">' + esc(stop.location) + "</p>" +

          '<div class="card-body">' +
            '<ul class="detail-list">' +
              '<li><span class="dt">Type</span><span class="dd">' + esc(stop.type) + " &middot; " + esc(stop.setting) + "</span></li>" +
              '<li><span class="dt">Length</span><span class="dd">' + esc(stop.duration) + "</span></li>" +
              '<li><span class="dt">Next date</span><span class="dd">' + esc(stop.nextDate) + "</span></li>" +
            "</ul>" +

            '<h4 class="visually-hidden">What the visit covers</h4>' +
            '<ul class="check-list">' + highlights + "</ul>" +
            '<p class="tour-notes">' + esc(stop.notes) + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function start() {
    renderTips();
    renderStops();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
