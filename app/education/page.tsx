"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface EducationItem {
  institution: string
  degree: string
  duration: string
  details: string
}

const EducationRow: React.FC<EducationItem> = ({ institution, degree, duration, details }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="mb-4 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold">{institution}</h3>
            <p className="text-muted-foreground">{degree}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-muted-foreground mb-2">{duration}</p>
            {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-muted-foreground">{details}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

export default function EducationPage() {
  const educationData: EducationItem[] = [
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

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-3xl mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12">Education</h1>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <EducationRow key={index} {...item} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
