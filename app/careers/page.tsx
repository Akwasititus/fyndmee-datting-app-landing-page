"use client"

import Link from 'next/link'
import { motion } from "framer-motion"
import { MapPin, Clock, Users, ArrowRight, Calendar, Briefcase, Globe, ArrowLeft } from 'lucide-react'

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
        "Strengthen BB Group's online presence through storytelling and community engagement"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, Business, or related field (or certified digital marketing training)",
        "6 months – 1 year of relevant marketing experience (internship, volunteer, or full-time)",
        "Good understanding of Instagram, TikTok, YouTube, LinkedIn, X/Twitter, and Meta Ads",
        "Experience with SEO, content strategy, and analytics tools",
        "Strong writing, communication, and presentation skills",
        "Creative thinker who understands audience behavior and digital trends",
        "Self-motivated and comfortable working remotely",
        "Passionate about Africa's growth, innovation, and storytelling"
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
      experience: "6 months – 1 year",
      department: "Operations",
      description: "Support HR, payroll, team coordination, and financial reporting across all BB Group projects.",

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
        "Basic understanding of HR processes (recruitment, onboarding, payroll)",
        "Basic accounting knowledge (records, budgeting, expense tracking)",
        "Strong organizational and documentation skills",
        "Good communication and interpersonal skills",
        "Comfortable using digital tools and remote team collaboration platforms",
        "Reliable, detail-oriented, and discreet with sensitive information"
      ],

      successTraits: [
        "You're dependable, detail-oriented, and highly organized",
        "You communicate clearly and handle sensitive information with care",
        "You understand both people and numbers — and keep them balanced"
      ],

      applicationDeadline: "Applications are reviewed on a rolling basis",
      salary: "Competitive salary based on experience",
      applyEmail: "info@bbgroupglobal.com"
    },

    {
      id: 3,
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
      applyEmail: "info@bbgroupglobal.com"
    },

    {
      id: 4,
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
      applyEmail: "info@bbgroupglobal.com"
    }
  ]

  const handleApplyClick = (jobId: number) => {
    window.location.href = `/careers/${jobId}`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black">
      {/* Background effects - only visible in dark mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}


        {/* Job Openings */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 dark:text-white/60">
              Join our team and make a real impact across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6 hover:border-[#AB1E3E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/5"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gradient-to-r from-[#AB1E3E]/10 to-rose-500/10 text-[#AB1E3E] dark:text-rose-400">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-white/70 mb-6">
                      {job.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => handleApplyClick(job.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-[#AB1E3E] to-rose-500 text-white/90 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#AB1E3E]/5 via-rose-500/5 to-pink-500/5 border border-[#AB1E3E]/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-gray-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for talented people who share our vision for Africa's future.
            </p>
            <a
              href="mailto:info@bbgroupglobal.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#AB1E3E] to-rose-500 text-white/90 font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
            >
              Send General Application
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
