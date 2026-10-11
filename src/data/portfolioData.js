// ──────────────────────────────────────────────
// Portfolio Data — edit this file to update content
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Anish Kumawat",
  initials: "AK",
  email: "anish.kumawat2401@gmail.com",
  phone: "+91 9887442517",
  location: "Lucknow, India",
  github: "https://github.com/Anish033-coder",
  linkedin: "https://www.linkedin.com/in/anish-kumawat-233177346/",
  leetcode: "https://leetcode.com/Anish033",
  codeforces: "https://codeforces.com/profile/Anish033",
  codechef: "https://www.codechef.com/users/anish_033",
  resumeLink: "/Anish_resume.pdf",
};

export const heroData = {
  greeting: "Hi, I'm",
  roles: [
    "Full Stack Developer",
    "Backend Engineer",
    "Competitive Programmer",
  ],
  tagline:
    "I build things that handle real concurrency, not just TODO apps.",
};

export const aboutData = {
  bio: [
    "I'm a 3rd year CS student at IIIT Lucknow, who spends most of his time between Codeforces contests and building backend systems. 800+ problems solved, Specialist on CF, 3-Star on CodeChef — I genuinely enjoy the grind of competitive programming.",
    "That same thinking shapes how I write software. My projects deal with concurrent transactions, row-level locking, and ACID compliance — not because they sound impressive, but because those are the problems I find interesting. I also mess around with the Gemini API and build tools that actually go to production.",
  ],
  education: {
    institution: "Indian Institute of Information Technology, Lucknow",
    shortName: "IIIT Lucknow",
    degree: "B.Tech in Computer Science",
    duration: "Jul 2024 — May 2028",
  },
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
  ],
};

export const skillsData = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "C", "JavaScript"],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "JWT Auth",
      "ACID / Transactions",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML", "Tailwind CSS"],
  },
  {
    category: "Core Concepts",
    skills: [
      "OOD",
      "Design Patterns",
      "System Design Basics",
      "SDLC",
      "Middleware Pattern",
      "Secure Coding",
    ],
  },
  {
    category: "AI / ML",
    skills: ["Gemini API", "Amazon Bedrock", "RAG", "LLM Integration", "LightGBM"],
  },
  {
    category: "Dev Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Jest",
      "CI/CD",
      "Postman",
      "Linux",
      "Vercel",
      "Render",
      "AWS",
    ],
  },
];

export const projectsData = [
  {
    title: "KabadiSetu",
    subtitle: "Waste sorting & scrap pickups for Jaipur homes, in Hindi and English",
    stack: ["React", "TypeScript", "Python", "AWS Lambda", "DynamoDB", "Rekognition"],
    description:
      "Households identify an item by photo or search, learn which waste stream it belongs to, and send a clear pickup request to their local kabadiwala.",
    highlights: [
      "Live on AWS Mumbai: React on Amplify, Python on Lambda, DynamoDB, Cognito and Rekognition, deployed with AWS SAM",
      "116 automated tests, including double taps and a cancel racing an accept, run against DynamoDB Local",
      "The AI only names the item; versioned rules decide the waste stream and the person confirms. About $0.0013 per photo scan",
      "Built for the WeMakeDevs × AWS Environmental Hacks",
    ],
    liveDemo: "https://main.d364mryjpwg6jn.amplifyapp.com",
    github: "https://github.com/Anish033-coder/kabadi-setu",
    accent: "cyan",
  },
  {
    title: "Transaction Ledger & Balance Management System",
    stack: ["Node.js", "PostgreSQL", "React", "Jest"],
    description:
      "A ledger system that actually handles concurrent money transfers without losing a rupee.",
    highlights: [
      "Prevented race conditions using PostgreSQL SELECT FOR UPDATE with ORDER BY id — no more deadlocks",
      "Designed a double-entry ledger with balance snapshots and enforced idempotency via UNIQUE constraints",
      "Built a reconciliation service with 3 SQL integrity checks (balance vs. ledger sum, debit-credit parity, stuck transactions)",
      "Load-tested with 20 concurrent transfers (54ms runtime) — zero monetary loss, full ACID compliance",
    ],
    liveDemo: "https://transactional-lader-system.vercel.app",
    github: "https://github.com/Anish033-coder/Transactional_Ledger_System",
    accent: "purple",
  },
  {
    title: "Business Entity Resolution",
    subtitle: "Amazon ML Challenge 2026 · team lead",
    stack: ["Python", "Polars", "LightGBM", "MinHash LSH"],
    description:
      "Links business records across three noisy sources with no shared ID (typos, truncated names, Indic scripts) without merging look-alike businesses.",
    highlights: [
      "0.979 F0.5 on the public leaderboard, up from 0.929 for our first submission",
      "Blocking with name/address keys and MinHash keeps 98% of true pairs at about 39 candidates per record",
      "Two-stage LightGBM on 89 similarity and difference features; each record's matches chosen to maximise expected F0.5",
      "Traced a leaderboard regression with SHAP and fixed the statistic behind it. Runs on a 16 GB laptop CPU",
    ],
    github: "https://github.com/Anish033-coder/amazon-ml-2026",
    accent: "purple",
  },
  {
    title: "VidyaAI",
    subtitle: "AI tutor on Amazon Bedrock · team lead",
    stack: ["React", "Node.js", "Amazon Bedrock", "MongoDB"],
    description:
      "Turns a course's PDFs into a tutor that answers with citations to the exact passage, plus quizzes, mock interviews and practice exams.",
    highlights: [
      "Bedrock Knowledge Base RAG (Titan embeddings, OpenSearch Serverless) with source citations under every answer",
      "Five modes share one buildPrompt → callLLM pipeline, wrapped in Bedrock Guardrails",
      "Environment flags keep the earlier Jina + Groq path working as a fallback when AWS isn't configured",
      "Moved an existing RAG pipeline onto Bedrock in 4 days at First Commit (Bharat Builds Tour), team of 4",
    ],
    github: "https://github.com/Anish033-coder/vidyaai",
    accent: "cyan",
  },
  {
    title: "Interview Forge",
    subtitle: "AI-Powered Mock Interview Platform",
    stack: ["React", "Node.js", "PostgreSQL", "Gemini AI"],
    description:
      "An AI interviewer that bridges the gap between LeetCode correctness and real-world communication pressure.",
    highlights: [
      "Integrated Gemini and glot.io APIs for AI questioning and live code execution",
      "Evaluated self-hosted Judge0 (ARM64 issues) and pivoted to glot.io with server-side timeouts",
      "Configured cross-domain HTTP-only JWT cookies with sameSite: 'none' and secure: true to prevent XSS",
      "Set up CI/CD on Vercel + Render with automated health-check monitoring",
    ],
    liveDemo: "https://interview-simulator-xi.vercel.app",
    github: "https://github.com/Anish033-coder/interview-simulator",
    accent: "purple",
  },
];

export const cpData = {
  subtitle:
    "900+ problems solved across various coding platforms. Strong in algorithms, dynamic programming, greedy, and binary search.",
  platforms: [
    {
      name: "Codeforces",
      rating: 1507,
      badge: "Specialist",
      handle: "Anish033",
      link: "https://codeforces.com/profile/Anish033",
      color: "#00d4ff",
    },
    {
      name: "CodeChef",
      rating: 1628,
      badge: "3-Star ★★★",
      handle: "anish_033",
      link: "https://www.codechef.com/users/anish_033",
      color: "#a855f7",
    },
    {
      name: "LeetCode",
      rating: 1610,
      badge: null,
      handle: "Anish033",
      link: "https://leetcode.com/Anish033",
      color: "#f59e0b",
    },
  ],
  stats: [
    { value: "800+", label: "Problems Solved" },
    { value: "50+", label: "Contests" },
    { value: "1628", label: "Peak Rating" },
  ],
};

// export const experienceData = [
//   {
//     title: "Eifer — Sports Society",
//     role: "Senior-Member",
//     organization: "IIIT Lucknow",
//     description:
//       "Organised inter-house tournaments with 200+ participants",
//     period: "Present",
//     current: true,
//   },
//   // {
//   //   title: "Axios — Technical Society",
//   //   role: "Web Wing Member",
//   //   organization: "IIIT Lucknow",
//   //   description:
//   //     "Contributing to web development projects and technical initiatives for the college's official technical society",
//   //   period: "Aug 2025 — Jul 2026",
//   //   current: false,
//   // },
// ];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "CP", href: "#cp" },
  { label: "Contact", href: "#contact" },
];
