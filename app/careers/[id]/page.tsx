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
    applyEmail: "humanresource@bbgroupglobal.com"
  },

  2: {
    // id: 2,
    title: "HR & Accounting Associate",
    type: "Full-time",
    location: "Remote",
    department: "Operations",
    description: "Support HR, payroll, team coordination, and financial reporting across all BB Group projects.",
    
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
      education: "Bachelor's degree in Human Resources, Accounting, Business Administration, or related field (or certified HR or finance training)",
      experience: "At least 6 months–1 year of relevant experience (internship, volunteer, or full-time)"
    },
    
    positionSummary: "BB Group is seeking a reliable and organized HR & Accounting Associate to support both the people and financial operations of the company. The person in this role will handle team coordination, payroll, basic accounting, and reporting across all BB Group projects — including Fynd Mee, Caregiver Africa, and Recycle Tech. You will work closely with the founder and project leads to keep everything running smoothly — from recruitment and contracts to budgeting and financial tracking. This is a key role that helps the company stay structured and transparent as we grow.",
    
    responsibilities: [
      "Manage team recruitment, onboarding, and contract documentation",
      "Support in drafting job descriptions and organizing interviews",
      "Maintain accurate employee records, attendance, and payroll schedules",
      "Prepare and update monthly financial and salary reports",
      "Track all payments, budgets, and project-related expenses",
      "Work with leadership to plan and forecast upcoming budgets",
      "Ensure confidentiality, compliance, and accuracy in all HR and accounting data",
      "Coordinate communication between departments to ensure smooth team operations"
    ],
    
    requirements: [
      "Good understanding of digital platforms (Instagram, TikTok, YouTube, LinkedIn, X/Twitter, Meta Ads).",
      "Experience with SEO, content strategy, and analytics tools.",
      "Strong writing, communication, and presentation skills.",
      "Strategic and creative thinker who can turn ideas into action.",
      "Self-motivated and comfortable working remotely with a team spread across regions.",
      "Passionate about Africa’s growth, innovation, and storytelling."
    ],
    
    successTraits: [
      "You're dependable, detail-oriented, and highly organized", 
      "You communicate clearly and handle sensitive information with care",
      "You understand both people and numbers — and keep them balanced"
    ],
    
    applicationDeadline: "Applications are reviewed on a rolling basis",
    salary: "Competitive salary based on experience",
    applyEmail: "humanresource@bbgroupglobal.com"
  },

  3: {
    // id: 3,
    title: "UI/UX Designer (Web & Mobile)",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    description: "Design clean, modern, and user-friendly interfaces for BB Group's mobile and web products.",
    
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
      education: "Bachelor's degree in Design, Computer Science, or related field (or certified UI/UX or web design training)",
      experience: "At least 6 months–1 year of relevant experience (internship, volunteer, or full-time)"
    },
    
    positionSummary: "BB Group is looking for a creative UI/UX Designer who can bring ideas to life through clean, modern, and user-friendly designs. The designer will work on both mobile and web interfaces, shaping how users experience our products such as Fynd Mee, Caregiver Africa, and Recycle Tech. You'll collaborate with developers, marketers, and project leads to design intuitive user journeys, build responsive web layouts, and ensure all BB Group digital platforms feel consistent and engaging.",
    
    responsibilities: [
      "Design user interfaces for mobile and web applications",
      "Develop design systems, mockups, and prototypes for new product features",
      "Work with developers to ensure seamless handoff of designs and proper implementation",
      "Conduct user research, collect feedback, and iterate on designs to improve usability",
      "Maintain a consistent design identity across all BB Group projects",
      "Contribute to creative direction for landing pages, campaigns, and brand visuals"
    ],
    
    requirements: [
      "Proficiency in Figma (primarily), Sketch, Framer, Miro, Penpoint or similar design tools",
      "Basic understanding of HTML, CSS, and responsive design principles",
      "Strong attention to detail and an eye for modern, minimal design",
      "Experience designing web landing pages and mobile app interfaces",
      "Good communication skills and the ability to collaborate with developers",
      "Interest in African tech, digital products, and creative storytelling"
    ],
    
    successTraits: [
      "You understand how design connects people to ideas",
      "You value feedback and continuous learning",
      "You can balance creativity with practicality",
      "You're passionate about using design to solve real-world problems"
    ],
    
    applicationDeadline: "Applications are reviewed on a rolling basis",
    salary: "Competitive salary based on experience",
    applyEmail: "humanresource@bbgroupglobal.com"
  },

  4: {
    // id: 4,
    title: "Software Developer (Full Stack)",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "Build and maintain web and mobile applications across all BB Group projects.",
    
    aboutCompany: {
      description: "BB Group is a Pan-African innovation company built to shape Africa's future through technology, creativity, and bold ideas. Founded in 2025, we focus on driving innovation, digitization, industrialization, and development across the continent.",
      mission: "We build and manage projects that make everyday life better for people and communities.",
      values: ["Integrity", "Inclusion", "Growth", "Bold thinking"],
      projects: [
        "Fynd Mee – a social connection mobile app made for Africa",
        "Caregiver Africa – a platform connecting families with trusted caregivers (coming soon)",
        "Recycle Tech – a future project focused on clean technology and sustainable development"
      ]
    },
    
    qualifications: {
      education: "Bachelor's degree in Computer Science, Software Engineering, or related field (or certified training in full-stack development)",
      experience: "At least 6 months–1 year of relevant experience (internship, volunteer, or full-time)"
    },
    
    positionSummary: "BB Group is seeking a skilled Software Developer with experience in both front-end and back-end development to join our growing tech team. The developer will play a key role in building, testing, and maintaining products such as Fynd Mee, our flagship dating platform, and upcoming projects like Caregiver Africa and Recycle Tech. You'll collaborate closely with our designers and project managers to bring ideas from concept to launch, ensuring performance, reliability, and smooth user experiences.",
    
    responsibilities: [
      "Develop and maintain web and mobile applications for BB Group projects",
      "Write clean, efficient, and well-documented code",
      "Collaborate with the design team to implement responsive UI/UX features",
      "Manage integrations with APIs, payment systems, and databases",
      "Test, debug, and optimize applications for performance and security",
      "Participate in technical discussions and recommend improvements"
    ],
    
    requirements: [
      "Experience with front-end tools (React, Next.js, or Vue) and back-end frameworks (Node.js, Django, or Laravel)",
      "Understanding of database management (Firebase, Supabase, MongoDB, or SQL)",
      "Basic knowledge of version control systems like GitHub or GitLab",
      "Familiarity with deployment platforms (Vercel, Netlify, or AWS)",
      "Problem-solving mindset and ability to work independently",
      "Strong communication and collaboration skills"
    ],
    
    successTraits: [
      "You enjoy turning ideas into working products",
      "You stay curious about new tools and coding trends",
      "You are reliable, detail-oriented, and love teamwork",
      "You care about building technology that improves lives across Africa"
    ],
    
    applicationDeadline: "Applications are reviewed on a rolling basis",
    salary: "Competitive salary based on experience",
    applyEmail: "humanresource@bbgroupglobal.com"
  }
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobData[id as keyof typeof jobData]

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black flex items-center justify-center">
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
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black">
      {/* Background effects - only visible in dark mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </header>

      {/* Job Detail */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {/* Job Header */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                  <MapPin className="w-5 h-5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                  <Clock className="w-5 h-5" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                  <Users className="w-5 h-5" />
                  <span>{job.department}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 mb-6">
                <p className="text-blue-800 dark:text-blue-300 font-semibold text-lg">
                  💰 {job.salary}
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-white/70">
                {job.description}
              </p>
            </div>

            {/* About BB Group */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                
                About BB Group
              </h2>
              
              <p className="text-gray-600 dark:text-white/70 mb-4">
                {job.aboutCompany.description}
              </p>
              
              <p className="text-gray-600 dark:text-white/70 mb-6">
                {job.aboutCompany.mission}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Values</h3>
                <div className="flex flex-wrap gap-2">
                  {job.aboutCompany.values.map((value: string, index: number) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-[#AB1E3E]/10 to-rose-500/10 text-[#AB1E3E] dark:text-rose-400 rounded-full text-sm font-medium border border-[#AB1E3E]/20">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Projects</h3>
                <ul className="space-y-2">
                  {job.aboutCompany.projects.map((project: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-white/70">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Qualifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div> */}
                  Education Qualification
                </h2>
                <p className="text-gray-600 dark:text-white/70">
                  {job.qualifications.education}
                </p>
              </div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div> */}
                  Relevant Experience
                </h2>
                <p className="text-gray-600 dark:text-white/70">
                  {job.qualifications.experience}
                </p>
              </div>
            </div>

            {/* Position Summary */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Position Summary
              </h2>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                {job.positionSummary}
              </p>
            </div>

            {/* Job Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Responsibilities */}
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div> */}
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-white/70">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div> */}
                  Skills & Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-white/70">
                      <div className="w-2 h-2 bg-[#AB1E3E] rounded-full mt-2 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Success Traits */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                {/* <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div> */}
                What Will Make You Successful
              </h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold">
                  <Calendar className="w-4 h-4" />
                  Application Deadline
                </div>
                <p className="text-amber-700 dark:text-amber-400 mt-1">
                  {job.applicationDeadline}
                </p>
              </div>

              <div className="grid gap-4">
                {job.successTraits.map((trait: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-white/70">
                      {trait}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 rounded-3xl p-8 text-white/90">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                How to Apply
              </h2>
              <p className="text-lg mb-4 text-white/90">
                Send your CV and Cover Letter with a brief description of yourself to:
              </p>
              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <p className="text-xl font-mono font-bold text-center">{job.applyEmail}</p>
              </div>
              <motion.button
                onClick={handleEmailApply}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#AB1E3E] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 w-full md:w-auto"
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
