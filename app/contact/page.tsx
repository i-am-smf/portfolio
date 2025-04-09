"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  ArrowLeft,
  ExternalLink,
  FileText,
} from "lucide-react"

export default function ContactPage() {
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

  const handleViewResume = () => {
    window.open("/Shaik_Mohamed_Fahad_Resume.pdf", "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-5xl mx-auto px-4 py-20"
      >
        <div className="flex items-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 73736 75313</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <button onClick={handleWhatsAppClick} className="font-medium text-left hover:underline">
                        +91 73736 75313
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">fahadguy8@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6">Social Profiles</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="https://github.com/i-am-smf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/shaik-mohamed-fahad-826971178"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/i_am_smf_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                  </Link>

                  <Link
                    href="https://discord.gg/MGr2ZemqyE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Discord</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6">Shaik Mohamed Fahad</h2>
                <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230317_123617.jpg-PUBHZyiKZyhhJvIQ1qbsKYIqbGHpkz.jpeg"
                    alt="Profile photo of Shaik Mohamed Fahad"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                  <Button onClick={handleViewResume} className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
