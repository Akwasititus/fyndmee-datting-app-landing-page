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
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      experience: "2+ years",
      description: "Build amazing user experiences with modern web technologies.",
      fullDescription: "We are looking for a skilled Frontend Developer to join our growing team. You will be responsible for building responsive web applications using modern technologies and ensuring the best user experience.",
      responsibilities: [
        "Develop responsive web applications using React/Next.js",
        "Collaborate with design team to implement pixel-perfect UI",
        "Optimize applications for maximum speed and scalability",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and team meetings"
      ],
      requirements: [
        "2+ years of experience in frontend development",
        "Proficiency in React, Next.js, and TypeScript",
        "Experience with Tailwind CSS and modern CSS",
        "Knowledge of state management solutions",
        "Familiarity with version control (Git)"
      ],
      salary: "Competitive salary based on experience",
      applyEmail: "careers@fyndmee.com"
    },
    {
      id: 2,
      title: "UX/UI Designer", 
      type: "Full-time",
      location: "Hybrid",
      department: "Design",
      experience: "3+ years",
      description: "Create beautiful and intuitive designs that users love.",
      fullDescription: "Join our design team to create exceptional user experiences that help people connect meaningfully. You'll work on both mobile and web platforms.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Develop and maintain design systems",
        "Create engaging user interfaces and experiences"
      ],
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing design process",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries"
      ],
      salary: "Competitive salary + equity options",
      applyEmail: "careers@fyndmee.com"
    },
    {
      id: 3,
      title: "Backend Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      experience: "3+ years",
      description: "Develop scalable APIs and backend systems for our platform.",
      fullDescription: "We need a Backend Engineer to build and maintain our robust, scalable infrastructure that powers millions of connections.",
      responsibilities: [
        "Design and develop scalable backend systems",
        "Create and maintain RESTful APIs",
        "Implement database schemas and optimize queries",
        "Ensure system security and data protection",
        "Collaborate with frontend developers on API design"
      ],
      requirements: [
        "3+ years of backend development experience",
        "Proficiency in Node.js, Python, or Go",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of API design and microservices",
        "Understanding of cloud platforms (AWS, GCP)"
      ],
      salary: "Competitive salary with performance bonuses",
      applyEmail: "careers@fyndmee.com"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      type: "Full-time",
      location: "On-site",
      department: "Marketing",
      experience: "2+ years",
      description: "Grow our brand and user base through creative marketing strategies.",
      fullDescription: "Help us spread the word about FyndMee and connect with our target audience through innovative marketing campaigns.",
      responsibilities: [
        "Develop and execute marketing strategies",
        "Manage social media channels and content creation",
        "Analyze campaign performance and optimize ROI",
        "Collaborate with influencers and partners",
        "Create engaging content for various platforms"
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with social media marketing",
        "Knowledge of SEO and content marketing",
        "Analytical skills with marketing metrics",
        "Excellent written and verbal communication"
      ],
      salary: "Competitive salary + performance incentives",
      applyEmail: "careers@fyndmee.com"
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