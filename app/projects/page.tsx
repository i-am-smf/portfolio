"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ProjectItem {
  id: string
  title: string
  shortDescription: string
  description: string
  sourceUrl: string
  technologies: string[]
}

const projectsData: ProjectItem[] = [
  {
    id: "lifefine-crm",
    title: "LifeFine CRM",
    shortDescription: "A simple tool to manage customer relationships for a water purifier company.",
    description:
      "Built with Python (Tkinter) and MySQL, this system offers customer management, service tracking, and complaint handling features.",
    sourceUrl: "https://github.com/i-am-smf/life-fine-software",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
  {
    id: "afk-monitoring-system",
    title: "AFK Monitoring System",
    shortDescription:
      "Developed a system to monitor idle time on a computer and shut it down if idle time exceeds the allowed limit.",
    description:
      "Implemented using Python with the pyautogui library for detecting user activity. Features include customizable idle time thresholds, warning notifications, and automatic shutdown procedures.",
    sourceUrl: "https://github.com/i-am-smf/afk-monitering-sytem",
    technologies: ["Python", "PyAutoGUI"],
  },
  {
    id: "secure-chat-api",
    title: "Secure Chat API",
    shortDescription: "Developed a Secure Chat API with end-to-end encryption and Blockchain-based authentication.",
    description:
      "The project involved translating design specifications into a fully functional system, integrating Fernet encryption for secure message transmission and smart contracts for automated user verification.",
    sourceUrl: "https://github.com/i-am-smf/Secure-Chat-using-Blockchain",
    technologies: ["Python", "Blockchain", "Encryption", "Smart Contracts"],
  },
  {
    id: "infinity-developer-discord-bot",
    title: "Infinity Developer Discord Bot",
    shortDescription: "Developed a fully automated bot to manage guild channels, duties, and settings on Discord.",
    description:
      "Utilized discord.py library with advanced features like role management, custom commands, and integration with external APIs for enhanced functionality.",
    sourceUrl: "https://github.com/infinity-developers/Infinity-Developer-Discord-Bot",
    technologies: ["Python", "Discord.py", "APIs"],
  },
  {
    id: "vegetable-shop-pos",
    title: "Interactive Vegetable Shop POS",
    shortDescription:
      "A Point of Sale (POS) System designed for managing vegetable shop sales, inventory, and billing.",
    description:
      "Developed using Python and Tkinter, this POS system supports both MySQL and SQLite databases. It features touchscreen compatibility, product management, sales processing, and inventory tracking.",
    sourceUrl: "https://github.com/i-am-smf/Simple-Vegetable-Shop-POS",
    technologies: ["Python", "Tkinter", "MySQL", "SQLite"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-7xl mx-auto px-4 py-20"
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Projects</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={`/projects/${project.id}`}>
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Source</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
