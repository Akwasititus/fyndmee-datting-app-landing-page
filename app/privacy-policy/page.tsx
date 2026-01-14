

"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const Section = ({ title, children, delay = 0 }: any) => (
  <motion.div
    // variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay }}
    className="mb-8"
  >
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <div className="text-gray-700 dark:text-white/70 leading-relaxed space-y-3">
      {children}
    </div>
  </motion.div>
)

export default function PrivacyPolicy() {
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
            href="/"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-600 dark:text-white/60 text-lg">
            Last updated: November 28, 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12">
          <Section delay={0.1}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p>
              Fynd Mee (referred to as "we," "us," or "our") is committed to protecting the privacy and security of the personal information of our clients, partners, and website visitors. This Privacy Policy outlines our practices concerning the collection, use, disclosure, and protection of your personal information in connection with your use of our website and services.
            </p>
            <p>
              This policy is designed to be in compliance with applicable data protection laws and regulations, including GDPR and CCPA. We are dedicated to maintaining the highest standards of transparency and data integrity.
            </p>
          </Section>

          <Section title="Information We Collect" delay={0.15}>
            <p>
              We may collect personal information from you in various ways, including when you visit our website, fill out a contact form, subscribe to our newsletter, or engage with our services. The types of personal information we may collect include:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Contact Information:</strong> Name, email address, phone number, and postal address.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Business Information:</strong> Company name, job title, and other details related to your business inquiry or relationship with us.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Technical Data:</strong> IP address, browser type, operating system, pages viewed, and other usage data collected through cookies and similar tracking technologies.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Marketing Preferences:</strong> Your preferences for receiving marketing communications from us.</span>
              </li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" delay={0.2}>
            <p>
              We use the collected personal information for the following business purposes:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">To Provide Services:</strong> To respond to your inquiries, fulfill your requests, and provide you with information about our products and services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">To Improve Our Website:</strong> To analyze website usage and trends, and to enhance the functionality and user experience of our site.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">For Marketing and Communications:</strong> To send you updates, newsletters, and promotional materials that we believe may be of interest to you, in accordance with your communication preferences.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">For Internal Operations:</strong> To manage our business, comply with legal obligations, and protect our rights and property.</span>
              </li>
            </ul>
          </Section>

          <Section title="Sharing and Disclosure of Information" delay={0.25}>
            <p>
              We do not sell, rent, or trade your personal information. We may share your information with trusted third parties only under the following circumstances:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">With Service Providers:</strong> We may disclose information to third-party service providers who perform services on our behalf, such as web hosting, data analysis, and marketing assistance. These service providers are contractually obligated to maintain the confidentiality of your information and are prohibited from using it for any other purpose.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">For Legal and Compliance Purposes:</strong> We may disclose your information if required by law, court order, or governmental regulation, or if we believe such disclosure is necessary to protect our legal rights, the safety of others, or to investigate fraud.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">In a Business Transaction:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal information.</span>
              </li>
            </ul>
          </Section>

          <Section title="Data Security" delay={0.3}>
            <p>
              We are committed to protecting your personal information from unauthorized access, use, or disclosure. We have implemented robust technical and organizational security measures to safeguard the information we collect, including data encryption, access controls, and secure data storage practices. While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </Section>

          <Section title="Your Rights and Choices" delay={0.35}>
            <p>
              Depending on your location and applicable law, you may have certain rights regarding your personal information, including the right to:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Access:</strong> Request a copy of the personal information we hold about you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Correction:</strong> Request that we correct any inaccurate or incomplete information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Deletion:</strong> Request the deletion of your personal information under certain circumstances.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Objection:</strong> Object to the processing of your personal information for marketing or other purposes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#AB1E3E] mr-2">•</span>
                <span><strong className="text-gray-900 dark:text-white">Withdraw Consent:</strong> Where we rely on your consent to process your information, you have the right to withdraw that consent at any time.</span>
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please get in touch with us.
            </p>
          </Section>

          <Section title="Cookies and Tracking Technologies" delay={0.4}>
            <p>
              Our website uses cookies and similar technologies to enhance your experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy" delay={0.45}>
            <p>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or legal requirements. We will post the revised policy on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="Contact Us" delay={0.5}>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:{" "}
              <a 
                href="mailto:info@fyndmee.app" 
                className="text-[#AB1E3E] hover:text-rose-500 transition-colors underline"
              >
                info@fyndmee.app
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
