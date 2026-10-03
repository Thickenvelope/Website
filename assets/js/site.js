/* ==========================================================================
   THICK ENVELOPE — SHARED SITE SCRIPT
   --------------------------------------------------------------------------
   Responsibilities
     1. Render the header / navigation into <header id="site-header">
     2. Render the footer into <footer id="site-footer">
     3. Run the mobile menu drawer
     4. Handle newsletter form submissions
     5. Expose small helpers used by the per-page scripts

   This file must be loaded AFTER assets/js/config.js.
   ========================================================================== */

(function () {
  "use strict";

  var CFG = window.SITE_CONFIG;

  if (!CFG) {
    console.error("[Thick Envelope] config.js did not load. Check the script order in your HTML.");
    return;
  }

  /* ======================================================================
     HELPERS
     ====================================================================== */

  /* Escapes text before it goes into HTML, so an apostrophe or angle
     bracket in the data can never break the page or inject markup. */
  function esc(value) {
    return String(value === undefined || value === null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* "Maya Okafor" -> "MO" */
  function initials(name) {
    var parts = String(name || "").trim().split(/\s+/);
    if (!parts[0]) return "?";
    var first = parts[0].charAt(0);
    var last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
    return (first + last).toUpperCase();
  }

  /* Unique, sorted list of a single field across a list of records. */
  function uniqueValues(records, field) {
    var seen = [];
    records.forEach(function (record) {
      var value = record[field];
      if (value && seen.indexOf(value) === -1) seen.push(value);
    });
    return seen.sort();
  }

  window.TE = {
    esc: esc,
    initials: initials,
    uniqueValues: uniqueValues
  };


  /* ======================================================================
     HEADER / NAVIGATION
     ====================================================================== */

  function buildHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;

    var currentPage = document.body.getAttribute("data-page") || "";

    var navItems = CFG.nav.map(function (item) {
      var isActive = item.id === currentPage;
      return (
        '<li><a class="nav-link' + (isActive ? " is-active" : "") + '" href="' + esc(item.href) + '"' +
        (isActive ? ' aria-current="page"' : "") +
        ">" + esc(item.label) + "</a></li>"
      );
    }).join("");

    var cta = CFG.headerCta;

    host.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand-mark" aria-hidden="true">TE</span>' +
          '<span class="brand-text">' +
            '<span class="brand-name">' + esc(CFG.name) + "</span>" +
            '<span class="brand-sub">College Admissions Hub</span>' +
          "</span>" +
        "</a>" +

        '<nav class="site-nav" id="site-nav" aria-label="Main navigation">' +
          '<button class="nav-close" type="button" id="nav-close" aria-label="Close menu">&times;</button>' +
          '<ul class="nav-list">' + navItems + "</ul>" +
          '<div class="nav-cta-mobile">' +
            '<a class="btn btn--primary btn--block" href="' + esc(cta.href) + '">' + esc(cta.label) + "</a>" +
          "</div>" +
        "</nav>" +

        '<div class="header-actions">' +
          '<a class="btn btn--primary btn--sm" href="' + esc(cta.href) + '">' + esc(cta.label) + "</a>" +
          '<button class="nav-toggle" type="button" id="nav-toggle" ' +
            'aria-controls="site-nav" aria-expanded="false" aria-label="Open menu">' +
            '<span class="nav-toggle-bars" aria-hidden="true"></span>' +
          "</button>" +
        "</div>" +
      "</div>" +
      '<div class="nav-backdrop" id="nav-backdrop"></div>';

    initMobileMenu();
    initScrollShadow(host);
  }

  function initMobileMenu() {
    var nav      = document.getElementById("site-nav");
    var toggle   = document.getElementById("nav-toggle");
    var closeBtn = document.getElementById("nav-close");
    var backdrop = document.getElementById("nav-backdrop");

    if (!nav || !toggle || !backdrop) return;

    function openMenu() {
      nav.classList.add("is-open");
      backdrop.classList.add("is-open");
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu(returnFocus) {
      nav.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      if (returnFocus) toggle.focus();
    }

    function isOpen() {
      return nav.classList.contains("is-open");
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) closeMenu(true);
      else openMenu();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () { closeMenu(true); });
    }

    backdrop.addEventListener("click", function () { closeMenu(false); });

    /* Tapping any link in the drawer navigates, so tidy up first. */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) closeMenu(true);
    });

    /* If the window grows past the mobile breakpoint while the drawer is
       open, reset state so the desktop nav is not left in a broken mode. */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960 && isOpen()) closeMenu(false);
    });
  }

  /* Adds a soft shadow under the header once the page is scrolled. */
  function initScrollShadow(header) {
    function update() {
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }


  /* ======================================================================
     FOOTER
     ====================================================================== */

  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;

    var F = CFG.footer;

    var columns = F.columns.map(function (column) {
      var links = column.links.map(function (link) {
        return '<li><a href="' + esc(link.href) + '">' + esc(link.label) + "</a></li>";
      }).join("");
      return (
        "<div>" +
          '<h4 class="footer-heading">' + esc(column.heading) + "</h4>" +
          '<ul class="footer-links">' + links + "</ul>" +
        "</div>"
      );
    }).join("");

    var socialLinks = (CFG.social || []).map(function (item) {
      return '<li><a href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer">' +
             esc(item.label) + "</a></li>";
    }).join("");

    var contactBlock = CFG.contactEmail
      ? '<p class="footer-contact"><a href="mailto:' + esc(CFG.contactEmail) + '">' +
        esc(CFG.contactEmail) + "</a></p>"
      : "";

    var connectColumn = (socialLinks || contactBlock)
      ? "<div>" +
          '<h4 class="footer-heading">Connect</h4>' +
          (socialLinks ? '<ul class="footer-links">' + socialLinks + "</ul>" : "") +
          contactBlock +
        "</div>"
      : "";

    var legalLinks = (F.legal || []).map(function (link) {
      return '<li><a href="' + esc(link.href) + '">' + esc(link.label) + "</a></li>";
    }).join("");

    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<span class="brand-name">' + esc(CFG.name) + "</span>" +
            '<p class="footer-blurb">' + esc(F.blurb) + "</p>" +
          "</div>" +
          columns +
          connectColumn +
        "</div>" +
        '<div class="footer-bottom">' +
          "<p>&copy; " + new Date().getFullYear() + " " + esc(CFG.name) + ". All rights reserved.</p>" +
          (legalLinks ? '<ul class="footer-legal">' + legalLinks + "</ul>" : "") +
        "</div>" +
      "</div>";
  }


  /* ======================================================================
     NEWSLETTER FORMS
     ----------------------------------------------------------------------
     Any form with class "newsletter-form" is handled here.

     While CFG.newsletter.formAction is an empty string we validate the
     address and show a confirmation message without sending anything.
     Once a real form URL is added to config.js, the form posts to the
     email provider instead. No markup changes needed.
     ====================================================================== */

  function initNewsletterForms() {
    var forms = document.querySelectorAll(".newsletter-form");
    var action = (CFG.newsletter && CFG.newsletter.formAction) || "";

    Array.prototype.forEach.call(forms, function (form) {
      var input   = form.querySelector('input[type="email"]');
      var message = form.parentNode.querySelector(".form-message");

      if (action) {
        form.setAttribute("action", action);
        form.setAttribute("method", "post");
        return; /* Let the browser post straight to the provider. */
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!input || !message) return;

        var value = input.value.trim();
        var looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

        if (!looksLikeEmail) {
          message.textContent = "Please enter a valid email address so we know where to send it.";
          message.hidden = false;
          input.focus();
          return;
        }

        message.textContent =
          "Thanks — " + value + " is on the list. (Signups are not live yet; " +
          "we are connecting the email service next.)";
        message.hidden = false;
        form.reset();
      });
    });
  }


  /* ======================================================================
     TEXT FILLED IN FROM CONFIG
     ----------------------------------------------------------------------
     Any element with data-config="path.to.value" gets its text replaced
     with that value from config.js.
     ====================================================================== */

  function applyConfigText() {
    var nodes = document.querySelectorAll("[data-config]");

    Array.prototype.forEach.call(nodes, function (node) {
      var path = node.getAttribute("data-config");
      var value = path.split(".").reduce(function (accumulator, key) {
        return accumulator && accumulator[key] !== undefined ? accumulator[key] : undefined;
      }, CFG);

      if (typeof value === "string") node.textContent = value;
    });
  }


  /* ======================================================================
     START
     ====================================================================== */

  function start() {
    buildHeader();
    buildFooter();
    applyConfigText();
    initNewsletterForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
