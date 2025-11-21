"use client"

import Link from 'next/link'
import { motion } from "framer-motion"
import { MapPin, Clock, Users, ArrowRight, Calendar, Briefcase, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
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

    {
      id: 2,
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
    
    {
      id: 3,
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


    {
      id: 4,
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
    
    



  
    
  ]

  const handleApplyClick = (jobId: number) => {
    // Navigate to job detail page
    window.location.href = `/careers/${jobId}`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">

        {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#AB1E3E] dark:hover:text-[#AB1E3E] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Come Build With Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're looking for talented people who want to help create something special.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-400">Join our team and make a real impact</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 hover:border-[#AB1E3E]/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Experience: {job.experience}
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => handleApplyClick(job.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 lg:mt-0 lg:ml-6 bg-[#AB1E3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}