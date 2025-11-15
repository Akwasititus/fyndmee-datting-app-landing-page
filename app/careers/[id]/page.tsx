"use client"

import Link from 'next/link'
import { motion } from "framer-motion"
import { MapPin, Clock, Users, ArrowLeft, Calendar, Briefcase, Mail, FileText } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// This would typically come from your database or API
const jobData: { [key: string]: any } = {
  1: {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    experience: "2+ years",
    description: "Build amazing user experiences with modern web technologies.",
    fullDescription: "We are looking for a skilled Frontend Developer to join our growing team. You will be responsible for building responsive web applications using modern technologies and ensuring the best user experience for our dating platform.",
    responsibilities: [
      "Develop responsive web applications using React/Next.js",
      "Collaborate with design team to implement pixel-perfect UI",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and team meetings",
      "Implement responsive design and ensure cross-browser compatibility"
    ],
    requirements: [
      "2+ years of experience in frontend development",
      "Proficiency in React, Next.js, and TypeScript",
      "Experience with Tailwind CSS and modern CSS",
      "Knowledge of state management solutions (Zustand/Redux)",
      "Familiarity with version control (Git)",
      "Understanding of web performance optimization"
    ],
    salary: "Competitive salary based on experience + equity options",
    applyEmail: "careers@fyndmee.com"
  },
  2: {
    title: "UX/UI Designer", 
    type: "Full-time",
    location: "Hybrid",
    department: "Design",
    experience: "3+ years",
    description: "Create beautiful and intuitive designs that users love.",
    fullDescription: "Join our design team to create exceptional user experiences that help people connect meaningfully. You'll work on both mobile and web platforms, designing interfaces that make dating enjoyable and safe.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product and engineering teams",
      "Develop and maintain design systems",
      "Create engaging user interfaces and experiences",
      "Design for both web and mobile platforms"
    ],
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing design process",
      "Understanding of user-centered design principles",
      "Experience with design systems and component libraries",
      "Knowledge of accessibility best practices"
    ],
    salary: "Competitive salary + equity options",
    applyEmail: "careers@fyndmee.com"
  },
  // Add other jobs similarly...
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobData[id as keyof typeof jobData]

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Not Found</h1>
          <Link href="/careers" className="text-[#AB1E3E] hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  const handleEmailApply = () => {
    const subject = `Application for ${job.title}`
    const body = `Hello FyndMee Team,\n\nI am interested in applying for the ${job.title} position.\n\nPlease find my details below:\n\n[Your brief description]\n\nBest regards,\n[Your Name]`
    
    window.location.href = `mailto:${job.applyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
           
            <Link 
              href="/careers"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#AB1E3E] dark:hover:text-[#AB1E3E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </div>
        </div>
      </header>

      {/* Job Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {/* Job Header */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {job.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {job.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-5 h-5" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Briefcase className="w-5 h-5" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-300 font-semibold">
                  💰 {job.salary}
                </p>
              </div>
            </div>

            {/* Job Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Responsibilities */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#AB1E3E]" />
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#AB1E3E]" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-gradient-to-r from-[#AB1E3E] to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                How to Apply
              </h2>
              <p className="text-lg mb-4">
                Send your CV and Cover Letter with a brief description of yourself to:
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="text-xl font-mono font-bold">{job.applyEmail}</p>
              </div>
              <motion.button
                onClick={handleEmailApply}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#AB1E3E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Apply via Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

