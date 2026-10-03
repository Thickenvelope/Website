/* ==========================================================================
   THICK ENVELOPE — SITE CONFIGURATION
   --------------------------------------------------------------------------
   This is the single source of truth for site-wide text, navigation, and
   contact details. Change a value here and it updates on every page.

   You do not need to touch any other file to update the items below.
   ========================================================================== */

window.SITE_CONFIG = {
  /* --- Identity -------------------------------------------------------- */
  name: "Thick Envelope",
  tagline: "A free college admissions hub for students and families.",
  shortDescription:
    "Clear guidance, real deadlines, and honest answers from students who have already been through it.",

  /* --- Contact & social ------------------------------------------------
     Leave a value as an empty string ("") to hide it from the footer.      */
  contactEmail: "hello@thickenvelope.org",
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "TikTok", url: "https://tiktok.com/" },
    { label: "YouTube", url: "https://youtube.com/" }
  ],

  /* --- Navigation ------------------------------------------------------
     "id" must match the data-page attribute on each HTML page's <body>.
     That is how the current page gets highlighted in the menu.             */
  nav: [
    { id: "home",        label: "Home",         href: "index.html" },
    { id: "resources",   label: "Resources",    href: "resources.html" },
    { id: "deadlines",   label: "Deadlines",    href: "deadlines.html" },
    { id: "tours",       label: "Campus Tours", href: "tours.html" },
    { id: "ambassadors", label: "Ambassadors",  href: "ambassadors.html" },
    { id: "newsletter",  label: "Newsletter",   href: "newsletter.html" }
  ],

  /* --- Header call-to-action button ------------------------------------ */
  headerCta: { label: "Join the Newsletter", href: "newsletter.html" },

  /* --- Home page hero -------------------------------------------------- */
  hero: {
    eyebrow: "Free · Independent · Student-Led",
    title: "Thick Envelope",
    subtitle:
      "The college admissions process, explained plainly — deadlines you can trust, resources that are actually free, and student ambassadors who answer honestly.",
    primaryCta:   { label: "Explore Resources",   href: "resources.html" },
    secondaryCta: { label: "See Key Deadlines",   href: "deadlines.html" }
  },

  /* --- Newsletter signup box ------------------------------------------
     formAction: leave as "" for now. In Phase 2 we paste the form URL from
     an email provider (Mailchimp, Buttondown, ConvertKit) here and the box
     starts collecting real subscribers with no other code changes.         */
  newsletter: {
    heading: "Never miss a deadline",
    body:
      "One short email each week: upcoming deadlines, new scholarships, and one piece of admissions advice worth reading. Free, and always will be.",
    buttonLabel: "Subscribe",
    placeholder: "you@example.com",
    reassurance: "No spam. Unsubscribe in one click.",
    formAction: ""
  },

  /* --- Home page section cards ---------------------------------------- */
  homeCards: [
    {
      eyebrow: "Guides & Templates",
      title: "Resources",
      body:
        "Essay frameworks, financial aid walkthroughs, and application checklists — organized by what you need and when you need it.",
      href: "resources.html",
      linkLabel: "Browse resources"
    },
    {
      eyebrow: "Stay On Schedule",
      title: "Deadlines",
      body:
        "Early Action, Early Decision, Regular Decision, FAFSA, and scholarship dates in one calendar you can actually read.",
      href: "deadlines.html",
      linkLabel: "View the calendar"
    },
    {
      eyebrow: "Talk To A Student",
      title: "Ambassadors",
      body:
        "Current undergraduates from colleges across the country, available to answer the questions brochures never cover.",
      href: "ambassadors.html",
      linkLabel: "Meet the ambassadors"
    }
  ],

  /* --- Trust strip (small stats under the hero) ------------------------
     Placeholder figures. Update once we have real numbers.                 */
  stats: [
    { value: "100%", label: "Free, forever" },
    { value: "40+",  label: "Partner campuses" },
    { value: "120+", label: "Student ambassadors" },
    { value: "0",    label: "Paywalls" }
  ],

  /* --- Footer ---------------------------------------------------------- */
  footer: {
    blurb:
      "Thick Envelope is an independent, student-run admissions resource. We are not affiliated with any college, university, or testing organization.",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "Resources",    href: "resources.html" },
          { label: "Deadlines",    href: "deadlines.html" },
          { label: "Campus Tours", href: "tours.html" },
          { label: "Ambassadors",  href: "ambassadors.html" }
        ]
      },
      {
        heading: "Get Involved",
        links: [
          { label: "Join the Newsletter",  href: "newsletter.html" },
          { label: "Become an Ambassador", href: "ambassadors.html" },
          { label: "Request a Tour",       href: "tours.html" }
        ]
      }
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms",   href: "#" }
    ]
  }
};
