export const profile = {
  name: "Shaik Mohamed Fahad T",
  shortName: "Shaik Mohamed Fahad",
  role: "Software Developer | Python Developer",
  location: "Chennai, Tamil Nadu",
  postalCode: "600042",
  phoneDisplay: "+91 73736 75313",
  phoneHref: "tel:+917373675313",
  email: "fahadguy8@gmail.com",
  summary:
    "Software developer with hands-on experience designing application workflows, screens, and processes, alongside Python development for APIs, automation tools, and secure communication systems. Comfortable working across design and development to turn planned workflows into working software. Skilled in problem-solving, quick to learn new technologies, and effective in fast-paced development environments.",
}

export type ExperiencePoint =
  | string
  | {
      before: string
      label: string
      href: string
      after: string
    }

export const experience: Array<{
  role: string
  organization?: string
  duration: string
  status?: string
  points: ExperiencePoint[]
}> = [
  {
    role: "Senior Software Developer",
    organization: "Nexudo Tech Solutions",
    duration: "Sep 2025 – Present",
    status: "Currently serving notice period",
    points: [
      "Designed application workflows, page and screen layouts, and process flows for software products.",
      "Contributed to application development using Python and Flask, translating designs into working functionality and APIs.",
      "Collaborated across design and development functions to ensure workflows were implemented as planned.",
    ] as ExperiencePoint[],
  },
  {
    role: "Freelance Full-Stack Developer",
    duration: "2023 – 2025",
    status: undefined,
    points: [
      {
        before: "Designed and developed the official website for ",
        label: "Photazo.in",
        href: "https://photazo.in",
        after: ", a real estate company, using React, Next.js, and PostgreSQL.",
      },
      {
        before: "Designed and developed the official website for ",
        label: "Lifefinetechnology.com",
        href: "https://lifefinetechnology.com",
        after: ", a water tech company, using React, Next.js, and PostgreSQL.",
      },
      "Designed and developed the official website for Aayisha Collection using React and Next.js.",
      "Handled complete project delivery independently, including coding, UI/UX design, and client coordination.",
    ] as ExperiencePoint[],
  },
]

export type ProjectSummary = {
  id: string
  title: string
  description: string
  technologies?: string[]
  meta?: string
  sourceUrl?: string
}

export const currentProjects: ProjectSummary[] = [
  {
    id: "aayisha-collection-ecommerce",
    title: "E-Commerce Mobile Application",
    meta: "Aayisha Collection · Nexudo Tech Solutions",
    description:
      "Designed the complete Aayisha Collection application, including the database schema, Flutter and Dart mobile structure, admin dashboard website, and workflows for product browsing, cart, checkout, and payment.",
    technologies: ["Flutter", "Dart"],
  },
  {
    id: "speed-eagle-pest-control",
    title: "Pest Control Management Software",
    meta: "Speed Eagle Pest Control LLC · Nexudo Tech Solutions",
    description:
      "Designed the database schema and application structure for customer accounts, service scheduling, and technician assignments, plus screens for booking, job status, and service reports.",
  },
  {
    id: "vibezon-academy",
    title: "Course Selling Platform",
    meta: "Vibezon Academy · Nexudo Tech Solutions",
    description:
      "Designed the database schema and application structure for the course catalog, enrollment, and payments, plus screens for course browsing, checkout, and the student dashboard.",
  },
  {
    id: "miles-away-cargo",
    title: "Logistics Management System",
    meta: "Miles Away Cargo Private Limited · Nexudo Tech Solutions",
    description:
      "Designed the database schema and application structure for shipment records, vehicle assignment, and cargo tracking, plus screens for dispatch, shipment status, and delivery confirmation.",
  },
  {
    id: "food-delivery-subscriptions",
    title: "Subscription-Based Food Delivery Management System",
    meta: "Nexudo Tech Solutions",
    description:
      "Designed the database schema and application structure for subscription plans, recurring orders, and delivery scheduling, plus screens for sign-up, meal customization, and delivery tracking.",
  },
]

export const earlierProjects: ProjectSummary[] = [
  {
    id: "lifefine-crm",
    title: "LifeFine CRM",
    meta: "Earlier work",
    description:
      "Built with Python (Tkinter) and MySQL, this system offers customer management, service tracking, and complaint handling features.",
    sourceUrl: "https://github.com/i-am-smf/life-fine-software",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
  {
    id: "afk-monitoring-system",
    title: "AFK Monitoring System",
    meta: "Earlier work",
    description:
      "Implemented using Python with the pyautogui library for detecting user activity. Features include customizable idle time thresholds, warning notifications, and automatic shutdown procedures.",
    sourceUrl: "https://github.com/i-am-smf/afk-monitering-sytem",
    technologies: ["Python", "PyAutoGUI"],
  },
  {
    id: "secure-chat-api",
    title: "Secure Chat API",
    meta: "Earlier work",
    description:
      "Secure chat API with end-to-end encryption and blockchain-based authentication for message transmission and user verification.",
    sourceUrl: "https://github.com/i-am-smf/Secure-Chat-using-Blockchain",
    technologies: ["Python", "Blockchain", "Encryption", "Smart Contracts"],
  },
  {
    id: "infinity-developer-discord-bot",
    title: "Infinity Developer Discord Bot",
    meta: "Earlier work",
    description:
      "Discord bot built with discord.py for role management, custom commands, and automated channel settings.",
    sourceUrl: "https://github.com/infinity-developers/Infinity-Developer-Discord-Bot",
    technologies: ["Python", "Discord.py", "APIs"],
  },
  {
    id: "vegetable-shop-pos",
    title: "Interactive Vegetable Shop POS",
    meta: "Earlier work",
    description:
      "Python and Tkinter point-of-sale system with MySQL and SQLite support for product management, sales, and inventory tracking.",
    sourceUrl: "https://github.com/i-am-smf/Simple-Vegetable-Shop-POS",
    technologies: ["Python", "Tkinter", "MySQL", "SQLite"],
  },
]
