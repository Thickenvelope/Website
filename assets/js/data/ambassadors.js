/* ==========================================================================
   MOCK DATA — COLLEGE AMBASSADORS
   --------------------------------------------------------------------------
   Placeholder records so the Ambassadors page is fully functional before we
   have real sign-ups. Every entry below is fictional.

   RECORD SHAPE (keep these keys identical for every ambassador):
     id          unique short text id, lowercase, no spaces
     name        ambassador's display name
     college     school they attend
     location    city, state
     year        "First-Year" | "Sophomore" | "Junior" | "Senior"
     major       course of study
     region      used for filtering: "Northeast" | "South" | "Midwest" | "West"
     tags        short topics they can speak to (array of text)
     bio         1-2 sentences, written in their own voice
     contact     email address, or "" if not public yet
     accepting   true = currently taking questions, false = paused
   ========================================================================== */

window.AMBASSADORS = [
  {
    id: "mock-amb-01",
    name: "Maya Okafor",
    college: "Northgate University",
    location: "Boston, MA",
    year: "Junior",
    major: "Molecular Biology",
    region: "Northeast",
    tags: ["Pre-Med", "Need-Based Aid", "First-Generation"],
    bio: "I applied to fourteen schools and understood maybe half of what I was doing. Happy to save you that confusion, especially around financial aid appeals.",
    contact: "maya.o@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-02",
    name: "Daniel Reyes",
    college: "Ridgefield College",
    location: "Portland, OR",
    year: "Senior",
    major: "Computer Science",
    region: "West",
    tags: ["Transfer Students", "CS Admissions", "Portfolio Reviews"],
    bio: "I started at a community college and transferred after two years. If that's the path you're considering, I can tell you exactly how it went.",
    contact: "d.reyes@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-03",
    name: "Priya Raghunathan",
    college: "Lakemont State University",
    location: "Ann Arbor, MI",
    year: "Sophomore",
    major: "Industrial Engineering",
    region: "Midwest",
    tags: ["Large Public Schools", "Honors Colleges", "Merit Scholarships"],
    bio: "Big state schools get a reputation for being impersonal. I'll give you an honest read on what that's actually like day to day.",
    contact: "praghu@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-04",
    name: "Jordan Whitfield",
    college: "Camden Hill College",
    location: "Atlanta, GA",
    year: "Junior",
    major: "Political Science",
    region: "South",
    tags: ["Liberal Arts", "Early Decision", "Essay Strategy"],
    bio: "I applied Early Decision and would make the same choice again — but only because I understood the tradeoff. Let's talk through whether it fits you.",
    contact: "jwhitfield@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-05",
    name: "Sofia Marchetti",
    college: "Pinecrest Institute of Technology",
    location: "Pasadena, CA",
    year: "Senior",
    major: "Mechanical Engineering",
    region: "West",
    tags: ["STEM Programs", "Research Opportunities", "Women in Engineering"],
    bio: "Four years of engineering coursework and three research placements. I can explain what actually separates these programs from each other.",
    contact: "s.marchetti@example.edu",
    accepting: false
  },
  {
    id: "mock-amb-06",
    name: "Elijah Brooks",
    college: "Harbor Point University",
    location: "Baltimore, MD",
    year: "Sophomore",
    major: "Public Health",
    region: "Northeast",
    tags: ["Athletic Recruitment", "Student Life", "Roommate Questions"],
    bio: "Recruited for track, and I learned the recruitment timeline the hard way. Ask me anything about balancing a sport with applications.",
    contact: "ebrooks@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-07",
    name: "Hannah Lindqvist",
    college: "Fairhaven University",
    location: "Madison, WI",
    year: "Junior",
    major: "Economics",
    region: "Midwest",
    tags: ["Business Programs", "Internships", "Study Abroad"],
    bio: "I came in undecided and switched majors twice. If you have no idea what you want to study yet, that is genuinely fine and I can prove it.",
    contact: "hlindqvist@example.edu",
    accepting: true
  },
  {
    id: "mock-amb-08",
    name: "Marcus Tran",
    college: "Summit Valley College",
    location: "Nashville, TN",
    year: "First-Year",
    major: "Music Performance",
    region: "South",
    tags: ["Arts Auditions", "Portfolio Programs", "Gap Years"],
    bio: "I took a gap year, auditioned at nine schools, and just finished my first semester. The audition process is still fresh in my memory.",
    contact: "m.tran@example.edu",
    accepting: true
  }
];
