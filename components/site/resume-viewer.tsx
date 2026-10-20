"use client"

import { Download, ExternalLink, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

const resumePath = "/Shaik_Mohamed_Fahad_Resume.pdf"
const resumeName = "Shaik_Mohamed_Fahad_Resume.pdf"

export function ResumeViewer() {
  const printResume = () => {
    const frame = document.getElementById("resume-preview") as HTMLIFrameElement | null
    const previewWindow = frame?.contentWindow

    if (!previewWindow || frame?.offsetParent === null) {
      window.open(resumePath, "_blank", "noopener,noreferrer")
      return
    }

    previewWindow.focus()
    previewWindow.print()
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={resumePath} download={resumeName}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={resumePath} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Open
          </a>
        </Button>
        <Button type="button" variant="outline" className="hidden min-[768px]:inline-flex" onClick={printResume}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print
        </Button>
      </div>

      <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground min-[768px]:hidden">
        Open the PDF to read it on your phone. You can pinch to zoom, then download a copy if you want to keep it.
      </p>

      <div className="mt-6 hidden overflow-hidden rounded-lg border border-border bg-white min-[768px]:block">
        <iframe
          id="resume-preview"
          title="Resume of Shaik Mohamed Fahad"
          src={resumePath}
          className="h-[min(70dvh,900px)] min-h-[32rem] w-full"
        />
      </div>
    </div>
  )
}
