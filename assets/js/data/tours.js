/* ==========================================================================
   MOCK DATA — CAMPUS TOURS
   --------------------------------------------------------------------------
   Two separate lists live in this file:
     1. window.TOUR_TIPS   — advice for getting the most out of a visit
     2. window.TOUR_STOPS  — local campus visits we help coordinate

   Everything below is placeholder content. All colleges are fictional.
   ========================================================================== */

/* --------------------------------------------------------------------------
   TOUR TIPS

   RECORD SHAPE:
     id        unique short text id
     stage     "Before" | "During" | "After"  (groups the tips on the page)
     title     short headline
     body      1-3 sentences of practical advice
   -------------------------------------------------------------------------- */

window.TOUR_TIPS = [
  {
    id: "mock-tip-01",
    stage: "Before",
    title: "Register, even for a walk-up visit",
    body: "Many schools track demonstrated interest, and a registered visit is the easiest way to show it. It takes two minutes on the admissions website and it can matter at the margins."
  },
  {
    id: "mock-tip-02",
    stage: "Before",
    title: "Visit while classes are in session",
    body: "A campus in July tells you almost nothing. Go on a normal weekday during the academic year so you can see what the place actually feels like when students are there."
  },
  {
    id: "mock-tip-03",
    stage: "Before",
    title: "Write down three questions in advance",
    body: "Tour guides answer the same questions all day. Specific questions get specific answers — ask about advising load, lab access, or how housing works after sophomore year."
  },
  {
    id: "mock-tip-04",
    stage: "During",
    title: "Leave the official tour route",
    body: "Walk into the dining hall, the library at 9pm, and a residence hall lobby. The scripted path is designed to impress you; the unscripted parts tell you whether you would be happy there."
  },
  {
    id: "mock-tip-05",
    stage: "During",
    title: "Talk to a student who is not your guide",
    body: "Guides are selected and trained. Ask any student sitting outside what they would change about the school, and you will usually get a straight answer."
  },
  {
    id: "mock-tip-06",
    stage: "During",
    title: "Sit in on a class if you can",
    body: "Email a department a week ahead and ask. Most will say yes. Twenty minutes in a real lecture is worth more than the entire information session."
  },
  {
    id: "mock-tip-07",
    stage: "During",
    title: "Parents: let the student ask the questions",
    body: "Admissions staff notice who is driving the conversation. Hold your questions for the car ride home — and there will be plenty to talk about."
  },
  {
    id: "mock-tip-08",
    stage: "After",
    title: "Take notes the same day",
    body: "After four campuses they blur together. Write down one thing you loved and one thing that bothered you before you go to sleep, while the details are still sharp."
  },
  {
    id: "mock-tip-09",
    stage: "After",
    title: "Email the people you met",
    body: "A short, genuine thank-you to your tour guide or an admissions officer creates a record of contact. Keep it to three sentences and mention something specific."
  },
  {
    id: "mock-tip-10",
    stage: "After",
    title: "Rank the visit before you see the next one",
    body: "Give each campus a gut-feel score out of ten the day you visit. Comparing fresh impressions is far more reliable than comparing month-old memories."
  }
];

/* --------------------------------------------------------------------------
   TOUR STOPS — local campus visits

   RECORD SHAPE:
     id          unique short text id
     college     school name
     location    city, state
     type        "Private" | "Public" | "Liberal Arts" | "Technical"
     setting     "Urban" | "Suburban" | "Rural"
     duration    how long the visit runs
     nextDate    human-readable date text, or "Rolling" for always-open
     highlights  short list of what the visit covers (array of text)
     notes       one sentence of extra context
     status      "Open" | "Waitlist" | "Full"
   -------------------------------------------------------------------------- */

window.TOUR_STOPS = [
  {
    id: "mock-tour-01",
    college: "Northgate University",
    location: "Boston, MA",
    type: "Private",
    setting: "Urban",
    duration: "2 hours",
    nextDate: "Saturday, March 14",
    highlights: ["Student-led walking tour", "Dining hall lunch", "Financial aid Q&A"],
    notes: "Runs rain or shine; the route is mostly outdoors so dress accordingly.",
    status: "Open"
  },
  {
    id: "mock-tour-02",
    college: "Lakemont State University",
    location: "Ann Arbor, MI",
    type: "Public",
    setting: "Suburban",
    duration: "3 hours",
    nextDate: "Saturday, March 21",
    highlights: ["Honors college session", "Residence hall walkthrough", "Engineering labs"],
    notes: "Large campus with a shuttle leg in the middle — comfortable shoes recommended.",
    status: "Waitlist"
  },
  {
    id: "mock-tour-03",
    college: "Camden Hill College",
    location: "Atlanta, GA",
    type: "Liberal Arts",
    setting: "Suburban",
    duration: "90 minutes",
    nextDate: "Friday, April 3",
    highlights: ["Sit in on a seminar", "Meet a faculty advisor", "Library and study spaces"],
    notes: "Small group format, capped at twelve families per visit.",
    status: "Open"
  },
  {
    id: "mock-tour-04",
    college: "Pinecrest Institute of Technology",
    location: "Pasadena, CA",
    type: "Technical",
    setting: "Urban",
    duration: "2.5 hours",
    nextDate: "Saturday, April 11",
    highlights: ["Research lab demos", "Maker space access", "Current student panel"],
    notes: "Closed-toe shoes are required for the lab portion of the visit.",
    status: "Open"
  },
  {
    id: "mock-tour-05",
    college: "Fairhaven University",
    location: "Madison, WI",
    type: "Public",
    setting: "Urban",
    duration: "2 hours",
    nextDate: "Rolling",
    highlights: ["Business school tour", "Internship office overview", "Campus recreation center"],
    notes: "Self-scheduled on weekdays; pick any slot that works for your family.",
    status: "Open"
  },
  {
    id: "mock-tour-06",
    college: "Summit Valley College",
    location: "Nashville, TN",
    type: "Liberal Arts",
    setting: "Rural",
    duration: "4 hours",
    nextDate: "Saturday, April 25",
    highlights: ["Arts facilities", "Audition prep workshop", "Overnight host option"],
    notes: "The audition workshop fills first; register early if that is your focus.",
    status: "Full"
  }
];
