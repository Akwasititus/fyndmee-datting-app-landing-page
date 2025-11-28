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

const SubSection = ({ title, children }: any) => (
  <div className="ml-4 mb-4">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <div className="text-gray-700 dark:text-white/70 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
)

export default function TermsOfService() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-600 dark:text-white/60 text-lg">
            Last updated: November 27, 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12">
          <Section delay={0.1}>
            <p className="text-gray-700 dark:text-white/70 italic mb-4">
              Please read these Terms of Service ("Terms") carefully before using the Fynd Mee mobile application (the "App") and related services (collectively, the "Service") operated by [Fynd Mee Legal Entity Name] ("us," "we," or "our").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </Section>

          <Section title="1. Acceptance of Terms" delay={0.15}>
            <p>
              These Terms constitute a legally binding agreement between you and Fynd Mee. You acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated by reference into these Terms.
            </p>
          </Section>

          <Section title="2. Eligibility" delay={0.2}>
            <p>
              You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and abide by all of them. You must not have been previously banned or removed from the Service by us for violation of these Terms or applicable laws.
            </p>
          </Section>

          <Section title="3. Your Account and Security" delay={0.25}>
            <SubSection title="a. Account Creation">
              <p>
                You may be required to register for an account using your mobile number, email address, or third-party social media login. You agree to provide accurate, current, and complete information during the registration process.
              </p>
            </SubSection>

            <SubSection title="b. Account Responsibility">
              <p>
                You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to immediately notify Fynd Mee of any unauthorised use of your account.
              </p>
            </SubSection>

            <SubSection title="c. Single Account">
              <p>
                You may only register one account. If we find that you have created multiple accounts, we reserve the right to terminate any or all of them.
              </p>
            </SubSection>

            <SubSection title="d. Mobile Device Use">
              <p>
                When accessing the Service via a mobile device, you acknowledge that your mobile carrier's normal rates and fees (such as data charges) will apply. You are responsible for ensuring your device is compatible with the Service.
              </p>
            </SubSection>
          </Section>

          <Section title="4. User Content and Conduct" delay={0.3}>
            <SubSection title="a. Definition">
              <p>
                "User Content" means any information, text, photos, audio, video, or other materials you upload, post, or display on the Service.
              </p>
            </SubSection>

            <SubSection title="b. User Content Rules">
              <p className="mb-2">You agree not to post, transmit, or share any User Content that:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Is illegal, threatening, defamatory, obscene, or harassing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Promotes discrimination, racism, hatred, or harm against any individual or group.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Violates or infringes upon the rights of any third party (including intellectual property, privacy, and publicity rights).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Is misleading, fraudulent, or promotes illegal activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Contains nudity, pornography, or sexually explicit material.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Contains unsolicited mass mailings or "spam."</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="c. Prohibited Conduct">
              <p className="mb-2">You agree not to:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Use the Service for any commercial or solicitous purposes (e.g., selling products, soliciting services, or promoting other businesses).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Harass, stalk, intimidate, or abuse other users.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Impersonate any person or entity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Use any automated systems or software to extract data from the Service.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Use the Service to transmit computer viruses or any code designed to interrupt, destroy, or limit the functionality of any software or hardware.</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="d. Content Screening and Removal">
              <p>
                While Fynd Mee does not routinely pre-screen User Content, we reserve the right (but have no obligation) to remove or edit any User Content that violates these Terms or is otherwise objectionable.
              </p>
            </SubSection>
          </Section>

          <Section title="5. License to Fynd Mee" delay={0.35}>
            <p>
              By posting User Content on the Service, you automatically grant to Fynd Mee a perpetual, irrevocable, non-exclusive, fully-paid, royalty-free, transferable, sub-licensable, worldwide license to use, reproduce, modify, translate, distribute, and display such User Content in connection with the operation of the Service and Fynd Mee's business (including for promotional purposes).
            </p>
          </Section>

          <Section title="6. Safety and Interactions with Other Users" delay={0.4}>
            <p>
              Fynd Mee is not responsible for the conduct of any user on or off the Service. You agree to take all necessary precautions in all interactions with other users, particularly if you decide to communicate off the Service or meet in person. You understand that Fynd Mee makes no guarantees, either express or implied, regarding your compatibility with individuals you meet through the Service.
            </p>
          </Section>

          <Section title="7. Fees and Payment" delay={0.45}>
            <p>
              If you purchase a paid subscription or feature, payments will be processed by the third-party platform through which you downloaded the App (e.g., Apple App Store or Google Play Store). You agree to the pricing and payment terms presented to you at the time of purchase. All payments are non-refundable, and there are no refunds or credits for partially used periods. Subscriptions may auto-renew until cancelled. You are responsible for any sales taxes that may apply to your purchase.
            </p>
          </Section>

          <Section title="8. Termination of Account" delay={0.5}>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may discontinue using the Service or use the deletion feature within the app.
            </p>
          </Section>

          <Section title="9. Disclaimer of Warranties" delay={0.55}>
            <p className="uppercase text-sm">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. FYND MEE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. FYND MEE MAKES NO WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. WE DO NOT GUARANTEE THE NUMBER OR QUALITY OF MATCHES YOU WILL RECEIVE.
            </p>
          </Section>

          <Section title="10. Limitation of Liability" delay={0.6}>
            <p className="uppercase text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL FYND MEE, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (iii) ANY CONTENT OBTAINED FROM THE SERVICE; AND (iv) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY.
            </p>
          </Section>

          <Section title="11. Indemnification" delay={0.65}>
            <p>
              You agree to indemnify, defend, and hold harmless Fynd Mee and its officers, directors, employees, and agents from any and all claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Service; (b) your violation of these Terms; or (c) your violation of any rights of another person or entity.
            </p>
          </Section>

          <Section title="12. Governing Law" delay={0.7}>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="13. Changes to Terms" delay={0.75}>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </Section>

          <Section title="Contact Us" delay={0.8}>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a 
                href="mailto:admin@fyndmee.app" 
                className="text-[#AB1E3E] hover:text-rose-500 transition-colors underline"
              >
                admin@fyndmee.app
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
