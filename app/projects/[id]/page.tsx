"use client"

import type React from "react"

import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Github,
  Database,
  Users,
  WrenchIcon,
  MessageSquare,
  Search,
  Calendar,
  Clock,
  AlertTriangle,
  PowerOff,
  MousePointer,
  Lock,
  Shield,
  Smartphone,
  Key,
  ShoppingCart,
  PercentIcon,
  BarChart2,
  Layers,
  Type,
  Settings,
  Server,
  Zap,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectDetails {
  id: string
  title: string
  description: string
  longDescription: string
  sourceUrl: string
  technologies: Array<{
    name: string
    description: string
  }>
  features: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
  codeSnippets?: Array<{
    title: string
    description: string
    code: string
    language: string
  }>
  workflow?: string[]
  additionalInfo?: {
    title: string
    content: string
    link?: string
  }
}

const projectsData: ProjectDetails[] = [
  {
    id: "lifefine-crm",
    title: "LifeFine CRM",
    description: "A simple tool to manage customer relationships for a water purifier company.",
    longDescription:
      "LifeFine is a powerful customer management system designed to streamline service tracking, complaint handling, and customer database management. Built with Python (Tkinter) and MySQL, this system offers an intuitive user interface and seamless data handling capabilities.",
    sourceUrl: "https://github.com/i-am-smf/life-fine-software",
    technologies: [
      {
        name: "Python",
        description: "Core logic & GUI development",
      },
      {
        name: "Tkinter",
        description: "Interactive and easy-to-use graphical interface",
      },
      {
        name: "MySQL",
        description: "Secure database for managing customer records",
      },
      {
        name: "Pillow",
        description: "For handling and displaying images",
      },
      {
        name: "tkcalendar",
        description: "Enhancing UI with date selection",
      },
    ],
    features: [
      {
        icon: <Users className="h-5 w-5" />,
        title: "Customer Management",
        description: "Add, edit, and store customer information",
      },
      {
        icon: <WrenchIcon className="h-5 w-5" />,
        title: "Service Records",
        description: "Track service visits, parts replaced, and charges",
      },
      {
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Complaint Handling",
        description: "Manage and resolve customer complaints efficiently",
      },
      {
        icon: <Search className="h-5 w-5" />,
        title: "Search & Reports",
        description: "Easily search customers and generate detailed records",
      },
    ],
    codeSnippets: [
      {
        title: "Database Connection",
        description: "Establishing connection with MySQL database",
        code: `import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="password",
  database="LIFEFINE"
)
my_cursor = mydb.cursor()`,
        language: "python",
      },
      {
        title: "Adding a New Customer",
        description: "Function to insert a new customer into the database",
        code: `def insert_customer():
  sql_command = "INSERT INTO all_customers (id_number, first_name, last_name, address, phone) VALUES (%s, %s, %s, %s, %s)"
  values = (id_num.get(), f_name.get(), l_name.get(), address.get(), phone.get())
  my_cursor.execute(sql_command, values)
  mydb.commit()`,
        language: "python",
      },
      {
        title: "Fetching Customer Records",
        description: "Function to retrieve all customer records",
        code: `def fetch_customers():
  my_cursor.execute("SELECT * FROM all_customers")
  for customer in my_cursor.fetchall():
      print(customer)`,
        language: "python",
      },
    ],
    workflow: [
      "New Customer Registration – Add new customers with detailed information",
      "Service Tracking – Log service visits and track maintenance history",
      "Complaint Management – Record and address customer complaints",
      "Customer Lookup – Search customers based on ID, location, or service history",
    ],
  },
  {
    id: "afk-monitoring-system",
    title: "AFK Monitoring System",
    description: "An Automated Power Shutdown System (APSS) that monitors idle time and initiates automatic shutdown.",
    longDescription:
      "The AFK Monitoring System, also known as the Automated Power Shutdown System (APSS), is a Python-based application that monitors a computer's idle time and initiates an automatic shutdown process when the system remains inactive for a specified duration. This helps in reducing unnecessary power consumption and improving system efficiency.",
    sourceUrl: "https://github.com/i-am-smf/afk-monitering-sytem",
    technologies: [
      { name: "Python", description: "Core logic and implementation" },
      { name: "Tkinter", description: "GUI for warning and countdown messages" },
      { name: "Win32 API", description: "Used to track system idle time" },
      { name: "OS Module", description: "Executes system shutdown commands" },
    ],
    features: [
      {
        icon: <Clock className="h-5 w-5" />,
        title: "Idle Time Detection",
        description: "Tracks system inactivity in real-time",
      },
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: "Alert Notification",
        description: "Warns the user before initiating shutdown",
      },
      {
        icon: <Calendar className="h-5 w-5" />,
        title: "Countdown Timer",
        description: "Provides a 30-second window for user intervention",
      },
      {
        icon: <PowerOff className="h-5 w-5" />,
        title: "Automatic Shutdown",
        description: "Shuts down the system if no activity is detected",
      },
      {
        icon: <MousePointer className="h-5 w-5" />,
        title: "User Override",
        description: "Allows users to cancel shutdown by interacting with the alert window",
      },
    ],
    codeSnippets: [
      {
        title: "Detecting System Idle Time",
        description: "Function to calculate the system's idle time",
        code: `from win32api import GetTickCount, GetLastInputInfo

def getIdleTime():
  return (GetTickCount() - GetLastInputInfo()) / 1000.0`,
        language: "python",
      },
      {
        title: "Initiating System Shutdown",
        description: "Function to execute system shutdown",
        code: `from os import system

def shutdown():
  print("System Shutdown")
  system("shutdown /s /t 1")`,
        language: "python",
      },
      {
        title: "Countdown Timer Implementation",
        description: "Class to create and manage the countdown timer GUI",
        code: `from tkinter import Tk, Label

class Countdown:
  def __init__(self):
      self.i = 30
      self.startcounting()
  
  def startcounting(self):
      self.warwin = Tk()
      self.warwin.title("WARNING WINDOW")
      self.message = Label(self.warwin, text="System is going to Shutdown in ...", font=("Arial", 17))
      self.message.pack()
      self.label = Label(self.warwin, text="00", font=("Arial", 200))
      self.label.pack()
      self.warwin.protocol("WM_DELETE_WINDOW", self.stopshutdown)
      self.start()
      self.warwin.mainloop()
  
  def start(self):
      self.label.config(text=f"{self.i}")
      if self.i == 0:
          shutdown()
      else:
          self.label.after(1000, self.start)
          self.i -= 1
  
  def stopshutdown(self):
      print("Shutdown Process Terminated")
      self.warwin.destroy()`,
        language: "python",
      },
    ],
    workflow: [
      "Idle Time Calculation – The system checks the idle time every 5 minutes",
      "Alert System – If the idle time exceeds 10 minutes, a warning popup appears",
      "Countdown Timer – A 30-second countdown initiates before shutdown",
      "Shutdown Execution – If the user does not intervene, the system shuts down",
      "Interruption Handling – If the user interacts with the system, the process resets",
    ],
  },
  {
    id: "secure-chat-api",
    title: "Secure Chat API",
    description:
      "A highly secure, encrypted messaging system with Blockchain Authentication for user verification and message integrity.",
    longDescription:
      "The Secure Chat API is an advanced communication system that combines end-to-end encryption with blockchain technology for authentication. This project ensures secure and verifiable communication between users across multiple platforms while maintaining high security and privacy standards.",
    sourceUrl: "https://github.com/i-am-smf/Secure-Chat-using-Blockchain",
    technologies: [
      { name: "Python", description: "Core language for development" },
      { name: "Tkinter", description: "GUI for the chat application" },
      { name: "Socket Programming", description: "Handles real-time communication" },
      { name: "Cryptography (Fernet)", description: "Implements strong encryption" },
      { name: "MySQL", description: "Manages user credentials and messages" },
      { name: "Blockchain (Base64 Hashing)", description: "Provides authentication and security" },
    ],
    features: [
      {
        icon: <Lock className="h-5 w-5" />,
        title: "End-to-End Encryption",
        description: "All messages are encrypted using Fernet encryption for secure communication",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Blockchain Authentication",
        description: "User identities are verified using blockchain-generated hash values",
      },
      {
        icon: <Smartphone className="h-5 w-5" />,
        title: "Cross-Platform Compatibility",
        description: "Works on desktop, mobile, and web applications",
      },
      {
        icon: <Database className="h-5 w-5" />,
        title: "Decentralized Message Integrity",
        description: "Uses blockchain to prevent message tampering",
      },
      {
        icon: <Key className="h-5 w-5" />,
        title: "User Authentication",
        description: "Secure login and identity verification mechanisms",
      },
    ],
    codeSnippets: [
      {
        title: "Secure User Authentication with Blockchain Hashing",
        description: "Function to generate a secure key using user identity and timestamp",
        code: `import base64
from cryptography.fernet import Fernet

def key_generator(user_identity, timestamp):
  str_key = f"{timestamp}{user_identity}".ljust(32, '0')
  return base64.b64encode(str_key.encode('utf-8'))`,
        language: "python",
      },
      {
        title: "Encrypting Messages Before Transmission",
        description: "Function to encrypt messages using Fernet encryption",
        code: `import datetime
from cryptography.fernet import Fernet

def encrypt_message(message, user_identity):
  key = key_generator(user_identity, str(int(datetime.datetime.now().timestamp())))
  cipher = Fernet(key)
  return cipher.encrypt(message.encode())`,
        language: "python",
      },
      {
        title: "Socket Server Handling Real-Time Messaging",
        description: "Function to start a socket server for real-time communication",
        code: `from socket import socket, AF_INET, SOCK_STREAM
import threading

def start_server():
  server = socket(AF_INET, SOCK_STREAM)
  server.bind(("127.0.0.1", 5555))
  server.listen()
  
  print("Server is listening...")
  while True:
      client_socket, client_addr = server.accept()
      threading.Thread(target=handle_client, args=(client_socket,)).start()

def handle_client(client_socket):
  # Handle client communication here
  pass`,
        language: "python",
      },
      {
        title: "Blockchain-based Message Verification",
        description: "Function to verify message integrity using blockchain hashing",
        code: `import hashlib

def verify_message(message, blockchain_hash):
  message_hash = hashlib.sha256(message.encode()).hexdigest()
  return message_hash == blockchain_hash`,
        language: "python",
      },
    ],
    workflow: [
      "User Authentication – Secure login using mobile number verification",
      "Encryption Mechanism – Messages are encrypted before being sent",
      "Blockchain Verification – Hash values verify message authenticity",
      "Real-Time Communication – Messages are transmitted securely using socket programming",
      "Message Broadcasting – Messages are relayed across connected users",
    ],
  },
  {
    id: "infinity-developer-discord-bot",
    title: "Infinity Developer Discord Bot",
    description: "An advanced tool designed to manage and customize font styles across Discord channels automatically.",
    longDescription:
      "The Infinity Developer Discord Bot is an advanced tool designed to manage and customize font styles across Discord channels automatically. With its Auto Font System, the bot applies selected font styles to all newly created channels, ensuring a consistent and unique aesthetic for servers.",
    sourceUrl: "https://github.com/infinity-developers/Infinity-Developer-Discord-Bot",
    technologies: [
      { name: "Python", description: "Core programming language" },
      { name: "Discord.py", description: "API wrapper for Discord bot interactions" },
      { name: "Database (Optional)", description: "Stores font preferences for servers" },
      { name: "REST API (Optional)", description: "Fetches additional font styles dynamically" },
    ],
    features: [
      {
        icon: <Type className="h-5 w-5" />,
        title: "Automated Font Application",
        description: "Ensures newly created channels adopt the selected font style automatically",
      },
      {
        icon: <Layers className="h-5 w-5" />,
        title: "Diverse Font Selection",
        description: "Choose from a variety of pre-defined fonts for customization",
      },
      {
        icon: <Settings className="h-5 w-5" />,
        title: "Simple Activation & Management",
        description: "Easily enable or disable the Auto Font System using commands",
      },
      {
        icon: <Server className="h-5 w-5" />,
        title: "Seamless Discord Integration",
        description: "Works efficiently across multiple Discord servers",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Customization Flexibility",
        description: "Tailor font styles to match server themes and preferences",
      },
    ],
    workflow: [
      "Activate Auto Font System – Use `/setup_auto_font` to start font customization",
      "Font Selection – Choose from multiple available fonts to apply to channel names",
      "System Status Management – Toggle between `+ Resume` (enable) and `- Pause` (disable)",
      "Real-Time Updates – Any newly created channel will automatically reflect the selected font style",
      "Embed Confirmation – The bot provides an embedded response displaying the current settings",
    ],
    additionalInfo: {
      title: "Why Choose Infinity Developer Bot?",
      content:
        "- Unique Aesthetic Customization – Automates server-wide font styling\n- Easy to Use – Intuitive commands for quick setup\n- Multiple Font Options – Pre-defined fonts for a personalized experience\n- Efficient & Scalable – Supports multiple Discord servers with ease\n- Admin-Only Controls – Ensures only authorized users can configure the settings",
      link: "https://infinity-developers.gitbook.io/infinity-development/guides/auto-font-system",
    },
    codeSnippets: [
      {
        title: "Auto Font Application on Channel Update",
        description: "This listener function automatically applies the selected font to updated channels.",
        code: `@commands.Cog.listener()
async def on_guild_channel_update(self, before: discord.abc.GuildChannel, after: discord.abc.GuildChannel):
    guild = after.guild
    
    if self.is_status_resumed(guild=guild):
        if isinstance(after, discord.CategoryChannel):
            return
        
        elif after.id in log_list:
            log_list.remove(after.id)
            return
        
        if before.name != after.name:
            log_list.append(after.id)
            await self.change_channel_font(after, guild=guild)`,
        language: "python",
      },
      {
        title: "Font Generation Command",
        description: "This command allows users to generate custom fonts for their server.",
        code: `@discord.app_commands.command(name="font_generate", description="Generate a font")
async def font_generate(self, interaction: discord.Interaction):
    await interaction.response.send_modal(self.generator_modal)`,
        language: "python",
      },
      {
        title: "Changing Channel Font Automatically",
        description: "This function applies the selected font to a channel and logs the change.",
        code: `async def change_channel_font(self, channel: discord.abc.GuildChannel, guild: discord.Guild):
    log_embed = discord.Embed(title="Auto Fonts Log", color=discord.Color.from_str("#98F5FF"))
    log_embed.add_field(name="Before", value=channel.name)
    old_name = channel.name
    settings = self.get_guild_font_settings(guild=guild)
    new_name = font_converter(old_name=channel.name, font=settings[2])
    if new_name == old_name:
        return
    await channel._edit(options={'name': new_name}, reason="auto_fonts")
    log_embed.add_field(name="After", value=new_name)
    log_embed.add_field(name="Channel", value=f"{channel.mention}")
    await self.send_log(log_channel_id=settings[4], embed=log_embed)`,
        language: "python",
      },
    ],
  },
  {
    id: "vegetable-shop-pos",
    title: "Interactive Vegetable Shop POS",
    description: "A Point of Sale (POS) System designed for managing vegetable shop sales, inventory, and billing.",
    longDescription:
      "The POS (Point of Sale) System is a Python-based application designed for managing vegetable shop sales, inventory, and billing. It provides a user-friendly interface for shop owners to track products, process sales, and generate invoices efficiently. The system supports both MySQL and SQLite databases for flexible data storage.",
    sourceUrl: "https://github.com/i-am-smf/Simple-Vegetable-Shop-POS",
    technologies: [
      { name: "Python", description: "Core language for development" },
      { name: "Tkinter", description: "GUI framework for user-friendly interaction" },
      { name: "MySQL", description: "Primary database for inventory and sales records" },
      { name: "SQLite", description: "Alternative database support" },
      { name: "Threading", description: "Ensures smooth performance" },
      { name: "Math Module", description: "Handles calculations" },
    ],
    features: [
      {
        icon: <Smartphone className="h-5 w-5" />,
        title: "Touchscreen Compatibility",
        description: "Designed for touchscreen-based devices",
      },
      {
        icon: <Database className="h-5 w-5" />,
        title: "Product Management",
        description: "Add, update, and view available products",
      },
      {
        icon: <ShoppingCart className="h-5 w-5" />,
        title: "Sales Processing",
        description: "Manage transactions with automatic total calculations",
      },
      {
        icon: <PercentIcon className="h-5 w-5" />,
        title: "Discount Handling",
        description: "Apply discounts and calculate net amounts",
      },
      {
        icon: <BarChart2 className="h-5 w-5" />,
        title: "Inventory Tracking",
        description: "Monitor stock levels and reorder points",
      },
      {
        icon: <Layers className="h-5 w-5" />,
        title: "Dynamic UI",
        description: "A Tkinter-based interface with real-time updates",
      },
    ],
    codeSnippets: [
      {
        title: "Database Connection Handling",
        description: "Function to connect to either MySQL or SQLite database",
        code: `import mysql.connector
import sqlite3

def db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="password",
            database="vegetableshop"
        )
        return connection, 'mysql'
    except:
        connection = sqlite3.connect('vegetableshop.db')
        return connection, 'sqlite3'`,
        language: "python",
      },
      {
        title: "Adding a Product to the Database",
        description: "Function to add a new product to the database",
        code: `def add_product(name, regional_name, rate):
    query = "INSERT INTO products (product_name, regional_name, rate) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, regional_name, rate))
    connection.commit()`,
        language: "python",
      },
      {
        title: "Sales Processing and Total Calculation",
        description: "Function to calculate the total amount of a sale",
        code: `def calculate_total(cart_items):
    total_amount = sum(item['quantity'] * item['rate'] for item in cart_items)
    return total_amount`,
        language: "python",
      },
    ],
    workflow: [
      "Database Connection – Detects and connects to either MySQL or SQLite",
      "Product Management – Allows shop owners to add and view product details",
      "Sales Transactions – Enables users to select items and complete purchases",
      "Discount & Billing – Applies automatic calculations for total amounts",
      "POS Interface – Displays sales, inventory, and transaction summaries",
    ],
  },
]

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
      <code className="text-sm font-mono text-muted-foreground whitespace-pre">{code}</code>
    </pre>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-4xl mx-auto px-4 py-20"
      >
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <Github className="h-5 w-5" />
              View Source Code
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="tech">Technologies</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground">{project.longDescription}</p>
              </CardContent>
            </Card>

            {project.workflow && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                  <div className="space-y-4">
                    {project.workflow.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {project.additionalInfo && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{project.additionalInfo.title}</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{project.additionalInfo.content}</p>
                  {project.additionalInfo.link && (
                    <Link
                      href={project.additionalInfo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-4 inline-block"
                    >
                      Learn More
                    </Link>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">{feature.icon}</div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
                <div className="grid gap-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="px-3 py-1 rounded bg-primary/10 text-primary font-medium text-sm">
                        {tech.name}
                      </div>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="space-y-8">
            {project.codeSnippets?.map((snippet, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{snippet.title}</h3>
                  <p className="text-muted-foreground mb-4">{snippet.description}</p>
                  <CodeBlock code={snippet.code} language={snippet.language} />
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
