import type { Metadata } from "next"
import { PageFrame, PageTitle } from "@/components/site/page-frame"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Shaik Mohamed Fahad earned a B.E. in Computer Science from M.I.E.T. Engineering College (June 2020–April 2024, CGPA 7.30) and completed 12th grade at Sairam Matric Hr. Sec. School (63.5%).",
}

const educationData = [
  {
    institution: "M.I.E.T. Engineering College",
    degree: "B.E. Computer Science",
    duration: "Jun 2020 – Apr 2024",
    details:
      "CGPA: 7.30 - Studied core computer science subjects including algorithms, data structures, and software engineering. Participated in various coding competitions and hackathons, enhancing practical skills and problem-solving abilities. Engaged in multiple projects, applying theoretical knowledge to real-world scenarios and developing a strong foundation in software development practices.",
  },
  {
    institution: "Sairam Matric Hr. Sec. School",
    degree: "12th Grade",
    duration: "Jun 2019 – Mar 2020",
    details:
      "Percentage: 63.5% - Focused on mathematics, physics, and computer science. Participated in school-level programming contests, laying the groundwork for future pursuits in computer science. Developed a keen interest in technology and its applications, motivating the choice to pursue engineering in the field of computer science.",
  },
]

export default function EducationPage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame className="max-w-[760px]">
        <PageTitle>Education</PageTitle>
        <ol className="mt-10 space-y-10 border-l border-border pl-6">
          {educationData.map((item) => (
            <li key={item.institution} className="relative min-w-0">
              <span
                className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.institution}</h2>
              <p className="mt-1 text-base">{item.degree}</p>
              <p className="mt-4 max-w-[70ch] leading-relaxed text-muted-foreground">{item.details}</p>
            </li>
          ))}
        </ol>
      </PageFrame>
    </div>
  )
}
