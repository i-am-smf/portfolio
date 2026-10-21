import type { Metadata } from "next"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { ResumeViewer } from "@/components/site/resume-viewer"

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shaik Mohamed Fahad, software developer in Chennai. View, download, or print the PDF.",
  alternates: { canonical: "/resume" },
}

export default function ResumePage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame className="py-8 md:py-10">
        <PageTitle>Resume</PageTitle>
        <p className="mt-3 max-w-[62ch] text-muted-foreground">
          Shaik Mohamed Fahad T. View the resume here, or download and print a copy.
        </p>
        <div className="mt-6">
          <ResumeViewer />
        </div>
      </PageFrame>
    </div>
  )
}
