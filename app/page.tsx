"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  MessageCircle,
  Instagram,
  DiscIcon as Discord,
  Code,
  Server,
  Database,
  Bot,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import type React from "react"

interface ProjectItem {
  title: string
  description: string
  details: string
  sourceUrl: string
}

interface EducationItem {
  institution: string
  degree: string
  duration: string
}

interface AchievementItem {
  title: string
  event: string
  date: string
}

interface CertificateItem {
  title: string
  organization: string
  date?: string
  details?: string
  link?: string
  image?: string
}

const ProjectCard: React.FC<ProjectItem> = ({ title, description, details, sourceUrl }) => {
  const [isHovered, setIsHovered] = useState(false)
  const projectId = title.toLowerCase().replace(/ /g, "-")

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-16">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <p className="text-sm text-muted-foreground">{details}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 right-6 flex gap-3"
        >
          <Link href={`/projects/${projectId}`} className="flex-1">
            <Button className="w-full">View Project</Button>
          </Link>
          <Link href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full">
              View Source
            </Button>
          </Link>
        </motion.div>
      </CardContent>
    </Card>
  )
}

const EducationCard: React.FC<{ items: EducationItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Education Details</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/education">
          <Button className="w-full">Go to Education Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const AchievementCard: React.FC<{ items: AchievementItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Achievements</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.event}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/achievements">
          <Button className="w-full">Go to Achievements Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const CertificateCard: React.FC<{ items: CertificateItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Certificates</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.organization}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/certificates">
          <Button className="w-full">Go to Certificates Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

interface SkillItem {
  title: string
  description: string
  icon: React.ReactNode
}

const SkillCard: React.FC<SkillItem> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2"
        >
          <p className="text-sm text-muted-foreground">{description}</p>
        </motion.div>
      </CardContent>
    </Card>
  )
}

const backgroundImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518818419601-72c8673f5852?q=80&w=2072&auto=format&fit=crop",
]

export default function Page() {
  const projectsData: ProjectItem[] = [
    {
      title: "AFK Monitoring System",
      description:
        "Developed a system to monitor idle time on a computer and shut it down if idle time exceeds the allowed limit.",
      details:
        "Implemented using Python with the pyautogui library for detecting user activity. Features include customizable idle time thresholds, warning notifications, and automatic shutdown procedures.",
      sourceUrl: "https://github.com/i-am-smf/afk-monitering-sytem",
    },
    {
      title: "Secure Chat API",
      description:
        "Developed a Secure Chat API with end-to-end encryption and Blockchain-based authentication to ensure secure communication.",
      details:
        "The project involved translating design specifications into a fully functional system, integrating Fernet encryption for secure message transmission and smart contracts for automated user verification. Technologies: Python (Tkinter, Threading, Socket), Blockchain Authentication, Smart Contracts, Fernet Encryption. The implementation focused on code quality, efficiency, and maintainability, following best practices in software development. System Requirements: 4GB RAM, Windows (8/10/11), Linux, Ubuntu.",
      sourceUrl: "https://github.com/i-am-smf/Secure-Chat-using-Blockchain",
    },
    {
      title: "Infinity Developer Discord Bot",
      description: "Developed a fully automated bot to manage guild channels, duties, and settings on Discord.",
      details:
        "Utilized discord.py library with advanced features like role management, custom commands, and integration with external APIs for enhanced functionality. Implements efficient caching and database management for scalability.",
      sourceUrl: "https://github.com/infinity-developers/Infinity-Developer-Discord-Bot",
    },
  ]

  const educationData: EducationItem[] = [
    {
      institution: "M.I.E.T. Engineering College",
      degree: "B.E. Computer Science",
      duration: "Jun 2020 – Apr 2024",
    },
    {
      institution: "Sairam Matric Hr. Sec. School",
      degree: "12th Grade",
      duration: "Jun 2019 – Mar 2020",
    },
  ]

  const achievementsData: AchievementItem[] = [
    {
      title: "1st Place - Miniathon Event",
      event: "Arcane 2K23 National Level Technical Symposium",
      date: "September 13, 2023",
    },
    {
      title: "1st Prize - Code Battle Event",
      event: "Technoholix'23, National Level Technical Symposium",
      date: "February 17, 2023",
    },
    {
      title: "2nd Place - Zoom in Zoom out Event",
      event: "Analytiixfest2k23 State Level Technical Symposium",
      date: "February 2, 2023",
    },
    {
      title: "3rd Place - TechVein Event",
      event: "TechQuest'23, National Level Technical Symposium",
      date: "September 15, 2023",
    },
  ]

  const certificatesData: CertificateItem[] = [
    {
      title: ".NET using C# language",
      organization: "Ameya Cloud",
      date: "May 24, 2022 – Jun 1, 2022",
      details: "Learned to create applications using .NET with Microsoft Visual Studio.",
      link: "https://ameyacloud.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980871.jpg-YL0g3FWZTgDJSYXYOiXvjZSS20wjCu.jpeg",
    },
    {
      title: "RDBMS using MySQL",
      organization: "GFS India",
      date: "Sep 19, 2022 – Sep 26, 2022",
      details: "Gained hands-on experience with SQL queries.",
      link: "https://gfsindia.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980885.jpg-zcQSO1Q3nHVkI7BWhLuYjXurBff2KI.jpeg",
    },
    {
      title: "DevOps on AWS",
      organization: "M.I.E.T. Engineering College",
      date: "Mar 20, 2023 – Mar 29, 2023",
      details: "Practiced various Git commands and DevOps tools on AWS.",
      link: "https://miet.edu",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980877.jpg-1OUDvkvP01abfrC8Af9vKKSLDFFM9b.jpeg",
    },
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = "917373675313" // Remove any special characters from the phone number
    const message = "Hi, I'd like to connect with you!" // Optional default message

    // Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    // Create the WhatsApp URL
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  const skillsData: SkillItem[] = [
    {
      title: "Software Development",
      description:
        "I design and develop scalable, efficient, and user-friendly software solutions, ensuring high performance and reliability across various platforms.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "API Development",
      description:
        "I create secure, well-documented, and efficient APIs that enable seamless communication between applications, ensuring smooth data exchange and integration.",
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: "Backend Development",
      description:
        "I specialize in building robust, high-performance backend architectures, optimizing server-side logic, database interactions, and API integrations for scalable applications.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Discord Bot Development",
      description:
        "I develop feature-rich Discord bots that automate tasks, enhance community engagement, and integrate advanced functionalities tailored to server needs.",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "Database Management",
      description:
        "I design, optimize, and maintain databases, ensuring data integrity, security, and efficient storage solutions for various applications. 🚀",
      icon: <Database className="h-5 w-5" />,
    },
  ]

  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {backgroundImages.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBg ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={bg || "/placeholder.svg"}
              alt="Background"
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto relative z-10 text-center px-4 md:px-6 pt-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">SHAIK MOHAMED FAHAD .T</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">Python Developer</h2>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/i-am-smf" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/20 backdrop-blur-sm border-primary/20 hover:bg-background/30"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shaik-mohamed-fahad-826971178" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/20 backdrop-blur-sm border-primary/20 hover:bg-background/30"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.instagram.com/i_am_smf_/" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/20 backdrop-blur-sm border-primary/20 hover:bg-background/30"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://discord.gg/MGr2ZemqyE" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/20 backdrop-blur-sm border-primary/20 hover:bg-background/30"
              >
                <Discord className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm a Python Developer with 6 months of experience in software application development. I excel at
                solving problems and creating innovative solutions, such as developing APIs, automated bots, and secure
                communications systems. I'm quick to learn new technologies and thrive in fast-paced environments.
                Passionate about coding, I constantly seek to improve my skills and embrace new challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-8 px-6 pb-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span>+91 73736 75313</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <Button
                          variant="link"
                          className="p-0 h-auto font-normal"
                          onClick={() => (window.location.href = "mailto:fahadguy8@gmail.com")}
                        >
                          fahadguy8@gmail.com
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>Chennai, Tamil Nadu</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-8 px-6 pb-6">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>Git</Badge>
                      <Badge>GitHub</Badge>
                      <Badge>SQL</Badge>
                      <Badge>AWS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                {/* <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Shaik_Mohamed_Fahad_Resume_ATS.pdf"
                    link.download = "Shaik_Mohamed_Fahad_Resume_ATS.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  ATS Resume
                </Button> */}
                <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Shaik_Mohamed_Fahad_Resume.pdf"
                    link.download = "Shaik_Mohamed_Fahad_Resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Creative Resume
                </Button>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230317_123617.jpg-PUBHZyiKZyhhJvIQ1qbsKYIqbGHpkz.jpeg"
                  alt="Profile photo in a tea plantation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 rounded-xl" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Well Versed In Section */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Well Versed In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <Link href="/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Certificates</h2>
              <CertificateCard items={certificatesData} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education & Achievements Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Education</h2>
              <EducationCard items={educationData} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Achievements</h2>
              <AchievementCard items={achievementsData} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Shaik Mohamed Fahad. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed and maintaining by <span className="font-semibold">i_am_smf_.py</span>, developed using{" "}
              <Link href="https://v0.dev" target="_blank" className="underline hover:text-primary">
                v0.dev
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-4">
        <Button
          onClick={() => (window.location.href = "mailto:fahadguy8@gmail.com")}
          className="rounded-full p-4 bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-lg"
          aria-label="Send email"
        >
          <Mail className="h-6 w-6 text-primary-foreground" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="rounded-full p-4 bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
}
