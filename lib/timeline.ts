export type TimelineItem = {
  date: string
  title: string
  detail: string
  kind: "Work" | "Education" | "Certificate" | "Achievement"
  href: string
}

export const timeline: TimelineItem[] = [
  {
    date: "Sep 2025 – Present",
    title: "Senior Software Developer",
    detail: "Nexudo Tech Solutions, Chennai. Currently serving notice.",
    kind: "Work",
    href: "/experience",
  },
  {
    date: "2023 – 2025",
    title: "Freelance Full-Stack Developer",
    detail: "Independent delivery of client websites, including design, development, and coordination.",
    kind: "Work",
    href: "/experience",
  },
  {
    date: "Jun 2020 – Apr 2024",
    title: "B.E. Computer Science",
    detail: "M.I.E.T. Engineering College. CGPA 7.30.",
    kind: "Education",
    href: "/education",
  },
  {
    date: "September 15, 2023",
    title: "3rd place, TechVein",
    detail: "TechQuest'23, Mount Zion College, Pudukkottai.",
    kind: "Achievement",
    href: "/achievements",
  },
  {
    date: "September 13, 2023",
    title: "1st place, Miniathon",
    detail: "Arcane 2K23, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.",
    kind: "Achievement",
    href: "/achievements",
  },
  {
    date: "Mar 20, 2023 – Mar 29, 2023",
    title: "DevOps on AWS",
    detail: "Value-added course at M.I.E.T. Engineering College.",
    kind: "Certificate",
    href: "/certificates",
  },
  {
    date: "February 17, 2023",
    title: "1st prize, Code Battle",
    detail: "Technoholix'23, NPR College of Engineering and Technology, Dindigul.",
    kind: "Achievement",
    href: "/achievements",
  },
  {
    date: "February 2, 2023",
    title: "2nd place, Zoom in Zoom out",
    detail: "Analytiixfest2k23, Bishop Heber College, Tiruchirappalli.",
    kind: "Achievement",
    href: "/achievements",
  },
  {
    date: "Sep 19, 2022 – Sep 26, 2022",
    title: "RDBMS using MySQL",
    detail: "Value-added course with GFS India.",
    kind: "Certificate",
    href: "/certificates",
  },
  {
    date: "May 24, 2022 – Jun 1, 2022",
    title: ".NET using C#",
    detail: "Value-added course with Ameya Cloud.",
    kind: "Certificate",
    href: "/certificates",
  },
  {
    date: "Jun 2019 – Mar 2020",
    title: "12th grade",
    detail: "Sairam Matric Hr. Sec. School. 63.5%.",
    kind: "Education",
    href: "/education",
  },
]
