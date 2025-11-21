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

  1:{
    title: "Marketing & Digital Strategy Lead",
    type: "Full-time",
    location: "Remote",
    department: "Marketing",
    experience: "6 months – 1 year",
    description: "Lead digital marketing, brand storytelling, and engagement across all BB Group projects.",
    fullDescription: "BB Group is seeking a creative and data-driven Marketing & Digital Strategy Lead to drive our digital presence and brand growth across Africa. You will lead marketing strategy for Fynd Mee, Caregiver Africa, Recycle Tech, and all BB Group innovations. This role involves campaign planning, analytics, content strategy, and building strong brand stories that connect with audiences online and offline.",
    responsibilities: [
      "Plan and manage digital marketing campaigns across social media, search, and email",
      "Lead creative content planning for Fynd Mee and other BB Group projects",
      "Work with the production team to design videos, promotional assets, and influencer partnerships",
      "Analyze marketing data to measure performance and guide decisions",
      "Collaborate with design and development teams to ensure brand consistency",
      "Strengthen BB Group’s online presence through storytelling and community engagement"
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Communications, Business, or related field (or certified digital marketing training)",
      "6 months – 1 year of relevant marketing experience (internship, volunteer, or full-time)",
      "Good understanding of Instagram, TikTok, YouTube, LinkedIn, X/Twitter, and Meta Ads",
      "Experience with SEO, content strategy, and analytics tools",
      "Strong writing, communication, and presentation skills",
      "Creative thinker who understands audience behavior and digital trends",
      "Self-motivated and comfortable working remotely",
      "Passionate about Africa’s growth, innovation, and storytelling"
    ],
    extra: {
      aboutBBGroup: "BB Group is a Pan-African innovation company driving technology, creativity, and development across the continent. Our mission includes innovation, digitization, industrialization, and improving everyday life through impactful projects.",
      projects: [
        "Fynd Mee – Social connection mobile app made for Africa",
        "Caregiver Africa – Platform connecting families with trusted caregivers (coming soon)",
        "Recycle Tech – Clean technology and sustainable development initiative"
      ],
      successTraits: [
        "Naturally curious, creative, and bold",
        "Understands both marketing strategy and audience behavior",
        "Enjoys experimenting with new tools",
        "Organized, reliable, and positive team player"
      ],
      applicationDeadline: "Applications are reviewed on a rolling basis"
    },
    salary: "Competitive salary based on experience",
    applyEmail: "info@bbgroupglobal.com"
  },

  
2: {
  title: "HR & Accounting Associate",
  type: "Full-time",
  location: "Remote",
  department: "Operations",
  experience: "6 months – 1 year",
  description: "Support HR, payroll, team coordination, and financial reporting across all BB Group projects.",
  fullDescription: "BB Group is seeking a dependable and organized HR & Accounting Associate to support both the people operations and financial systems of the company. You will assist with recruitment, onboarding, payroll, accounting, budgeting, and internal coordination across all BB Group projects, including Fynd Mee, Caregiver Africa, and Recycle Tech. This role works closely with leadership to ensure smooth operations, structured processes, and accurate reporting as the company grows.",
  responsibilities: [
    "Manage recruitment, onboarding, and employee contract documentation",
    "Assist in drafting job descriptions and scheduling interviews",
    "Maintain employee records, attendance tracking, and payroll schedules",
    "Prepare and update monthly financial and salary reports",
    "Track payments, budgets, and project-related expenses",
    "Support leadership with budget planning and financial forecasting",
    "Ensure data confidentiality, compliance, and accuracy",
    "Coordinate communication between departments to support smooth operations"
  ],
  requirements: [
    "Bachelor’s degree in Human Resources, Accounting, Business Administration, or related field (or certified HR/finance training)",
    "6 months – 1 year of HR or accounting experience (internship, volunteer, or full-time)",
    "Basic understanding of HR processes (recruitment, onboarding, payroll)",
    "Basic accounting knowledge (records, budgeting, expense tracking)",
    "Strong organizational and documentation skills",
    "Good communication and interpersonal skills",
    "Comfortable using digital tools and remote team collaboration platforms",
    "Reliable, detail-oriented, and discreet with sensitive information"
  ],
  extra: {
    aboutBBGroup: "BB Group is a Pan-African innovation company driving technology, creativity, and development across the continent. We build projects that improve everyday life through innovation, digitization, and sustainable growth.",
    projects: [
      "Fynd Mee – Social connection mobile app made for Africa",
      "Caregiver Africa – Platform connecting families with trusted caregivers (coming soon)",
      "Recycle Tech – Clean technology and sustainable development initiative"
    ],
    successTraits: [
      "Dependable and highly organized",
      "Clear communicator with strong attention to detail",
      "Understands people and numbers equally well"
    ],
    applicationDeadline: "Applications are reviewed on a rolling basis"
  },
  salary: "Competitive salary based on experience",
  applyEmail: "info@bbgroupglobal.com"
},

3: {
  title: "UI/UX Designer (Web & Mobile)",
  type: "Full-time",
  location: "Remote",
  department: "Design",
  experience: "6 months – 1 year",
  description: "Design modern, clean, and intuitive user experiences for BB Group’s mobile and web products.",
  fullDescription: "BB Group is looking for a creative and detail-oriented UI/UX Designer to shape the user experience of our digital products, including Fynd Mee, Caregiver Africa, and Recycle Tech. You will design intuitive user flows, wireframes, prototypes, and polished interfaces for both mobile and web platforms. This role involves collaborating with developers, marketers, and project leads to ensure consistent, engaging, and user-friendly product experiences across all BB Group projects.",
  responsibilities: [
    "Design user interfaces for mobile and web applications",
    "Create design systems, mockups, wireframes, and prototypes for new features",
    "Collaborate with developers to ensure seamless handoff and implementation",
    "Conduct user research, gather feedback, and refine designs to improve usability",
    "Maintain a consistent visual identity across all BB Group projects",
    "Support creative direction for landing pages, campaigns, and brand visuals"
  ],
  requirements: [
    "Bachelor’s degree in Design, Computer Science, or related field (or certified UI/UX or web design training)",
    "6 months – 1 year of UI/UX design experience (internship, volunteer, or full-time)",
    "Proficiency in Figma (primary), Sketch, Framer, Miro, Penpot, or similar tools",
    "Basic understanding of HTML, CSS, and responsive design principles",
    "Strong attention to detail with an eye for clean, modern design",
    "Experience designing mobile interfaces and web landing pages",
    "Good communication skills and ability to collaborate with developers and teams",
    "Interest in African tech innovation and digital product design"
  ],
  extra: {
    aboutBBGroup: "BB Group is a Pan-African innovation company driving technology, creativity, and development across the continent. We build digital products that improve everyday life through innovation, design, and sustainable growth.",
    projects: [
      "Fynd Mee – Social connection mobile app made for Africa",
      "Caregiver Africa – Platform connecting families with trusted caregivers (coming soon)",
      "Recycle Tech – Clean technology and sustainable development initiative"
    ],
    successTraits: [
      "Understands how design connects people to ideas",
      "Values feedback and continuous learning",
      "Balances creativity with practicality",
      "Passionate about using design to solve real-world problems"
    ],
    applicationDeadline: "Applications are reviewed on a rolling basis"
  },
  salary: "Competitive salary based on experience",
  applyEmail: "info@bbgroupglobal.com"
},

4: {
  title: "Software Developer (Full Stack)",
  type: "Full-time",
  location: "Remote",
  department: "Engineering",
  experience: "6 months – 1 year",
  description: "Build and maintain web and mobile applications across all BB Group projects.",
  fullDescription: "BB Group is seeking a skilled Full Stack Software Developer to join our growing tech team. You will work on front-end and back-end development for products like Fynd Mee, Caregiver Africa, and Recycle Tech. This role involves building, testing, and maintaining applications while collaborating with designers and project managers to ensure smooth user experiences and high performance across all platforms.",
  responsibilities: [
    "Develop and maintain web and mobile applications for BB Group projects",
    "Write clean, efficient, and well-documented code",
    "Collaborate with the design team to implement responsive UI/UX features",
    "Integrate APIs, payment systems, and databases",
    "Test, debug, and optimize applications for performance and security",
    "Participate in technical discussions and propose improvements"
  ],
  requirements: [
    "Bachelor’s degree in Computer Science, Software Engineering, or related field (or certified full-stack training)",
    "6 months – 1 year of relevant development experience (internship, volunteer, or full-time)",
    "Experience with front-end frameworks (React, Next.js, or Vue) and back-end frameworks (Node.js, Django, or Laravel)",
    "Knowledge of database management (Firebase, Supabase, MongoDB, or SQL)",
    "Basic understanding of version control systems like GitHub or GitLab",
    "Familiarity with deployment platforms (Vercel, Netlify, or AWS)",
    "Problem-solving mindset and ability to work independently",
    "Strong communication and collaboration skills"
  ],
  extra: {
    aboutBBGroup: "BB Group is a Pan-African innovation company driving technology, creativity, and development across the continent. We build impactful digital products that improve everyday life through innovation, digitization, and sustainable growth.",
    projects: [
      "Fynd Mee – Social connection mobile app made for Africa",
      "Caregiver Africa – Platform connecting families with trusted caregivers (coming soon)",
      "Recycle Tech – Clean technology and sustainable development initiative"
    ],
    successTraits: [
      "Enjoys turning ideas into working products",
      "Curious about new tools, frameworks, and coding trends",
      "Reliable, detail-oriented, and a team player",
      "Passionate about building technology that improves lives across Africa"
    ],
    applicationDeadline: "Applications are reviewed on a rolling basis"
  },
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

