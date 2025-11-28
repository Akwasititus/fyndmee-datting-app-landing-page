"use client"

import Link from 'next/link'
import { motion } from "framer-motion"
import { MapPin, Clock, Users, ArrowLeft, Calendar, Briefcase, Mail, FileText, Target, GraduationCap, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// This would typically come from your database or API
const jobData: { [key: string]: any } = {
  1: {
    title: "Marketing & Digital Strategy Lead",
    type: "Full-time",
    location: "Remote",
    department: "Marketing",
    description: "Lead digital marketing, brand storytelling, and engagement across all BB Group projects.",
    
    // New structured data
    aboutCompany: {
      description: "BB Group is a Pan-African innovation company built to shape Africa's future through technology, creativity, and bold ideas. Founded in 2025, we focus on driving innovation, digitization, industrialization, and development across the continent.",
      mission: "We build and manage projects that make everyday life better for people and communities.",
      values: ["Integrity", "Inclusion", "Growth", "Bold thinking"],
      projects: [
        "Fynd Mee – a social connection mobile-app made for Africa",
        "Caregiver Africa – a platform connecting families with trusted caregivers (coming soon)",
        "Recycle Tech – a future project focused on clean technology and sustainable development"
      ]
    },
    
    qualifications: {
      education: "Bachelor's degree in Marketing, Communications, Business, or related field (or certified digital marketing training)",
      experience: "At least 6 months–1 year of relevant work experience (internship, volunteer, or full-time)"
    },
    
    positionSummary: "BB Group is looking for a creative and data-driven marketer to lead our marketing and digital strategy across all BB Group projects. From Fynd Mee, our social connection mobile-app platform, to upcoming projects like Caregiver Africa and Recycle Tech, the Marketing & Digital Strategy Lead will play a major role in building strong brand stories, managing campaigns, and driving engagement across Africa and beyond. This person will help us shape how people see BB Group—telling our story, connecting with audiences, and building excitement for our projects online and offline.",
    
    responsibilities: [
      "Plan and manage digital marketing campaigns across social media, search, and email",
      "Lead creative content planning for Fynd Mee and other BB Group projects",
      "Work with the production team to design promotional campaigns, videos, and influencer partnerships",
      "Analyze marketing data to measure performance and guide decision-making",
      "Collaborate with the design and development teams to ensure brand consistency",
      "Build and grow BB Group's online presence through authentic storytelling and community engagement"
    ],
    
    requirements: [
      "Good understanding of digital platforms (Instagram, TikTok, YouTube, LinkedIn, X/Twitter, Meta Ads)",
      "Experience with SEO, content strategy, and analytics tools",
      "Strong writing, communication, and presentation skills",
      "Strategic and creative thinker who can turn ideas into action",
      "Self-motivated and comfortable working remotely with a team spread across regions",
      "Passionate about Africa's growth, innovation, and storytelling"
    ],
    
    successTraits: [
      "You are naturally curious, creative, and bold in your ideas",
      "You understand both marketing strategy and audience behavior",
      "You love trying new tools and learning as you go",
      "You are reliable, organized, and bring positive energy to teamwork"
    ],
    
    applicationDeadline: "Applications are reviewed on a rolling basis",
    salary: "Competitive salary based on experience",
    applyEmail: "info@bbgroupglobal.com"
  }
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
    const body = `Hello BB Group Team,\n\nI am interested in applying for the ${job.title} position.\n\nPlease find my details below:\n\n[Your brief description]\n\nBest regards,\n[Your Name]`
    
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
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-blue-800 dark:text-blue-300 font-semibold">
                  💰 {job.salary}
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
            </div>

            {/* About BB Group */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                About BB Group
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {job.aboutCompany.description}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {job.aboutCompany.mission}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Values</h3>
                <div className="flex flex-wrap gap-2">
                  {job.aboutCompany.values.map((value: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-[#AB1E3E]/10 text-[#AB1E3E] rounded-full text-sm font-medium">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Projects</h3>
                <ul className="space-y-2">
                  {job.aboutCompany.projects.map((project: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Qualifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#AB1E3E]" />
                  Education Qualification
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {job.qualifications.education}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#AB1E3E]" />
                  Relevant Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {job.qualifications.experience}
                </p>
              </div>
            </div>

            {/* Position Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Position Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {job.positionSummary}
              </p>
            </div>

            {/* Job Details Grid */}
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
                  Skills & Requirements
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

            {/* Success Traits */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                What Will Make You Successful
              </h2>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-300 font-semibold">
                  <Calendar className="w-4 h-4" />
                  Application Deadline
                </div>
                <p className="text-yellow-700 dark:text-yellow-400 mt-1">
                  {job.applicationDeadline}
                </p>
              </div>

              <div className="grid gap-4">
                {job.successTraits.map((trait: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {trait}
                    </p>
                  </div>
                ))}
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
