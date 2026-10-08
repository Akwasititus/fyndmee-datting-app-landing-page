"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowLeft, Shield, AlertCircle, ShieldAlert } from 'lucide-react'

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

const WarningBox = ({ children }: any) => (
  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 my-4">
    <div className="flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
      <div className="text-amber-800 dark:text-amber-200">{children}</div>
    </div>
  </div>
)

const TipBox = ({ children }: any) => (
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 my-4">
    <div className="flex items-start gap-3">
      <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
      <div className="text-green-800 dark:text-green-200">{children}</div>
    </div>
  </div>
)

export default function SafeTips() {
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
            Safe{" "}
            <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
              Dating Tips
            </span>
          </h1>
          <p className="text-gray-600 dark:text-white/60 text-lg">
            Meeting new people is exciting. Stay safe with these guidelines.
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12">
          <Section delay={0.1}>
            <p className="text-gray-700 dark:text-white/70 italic mb-4">
              At Fynd Mee, your safety is our top priority. Safety features can help, but no verification or moderation system can guarantee that every person is who they claim to be. Always exercise caution when interacting with new people, whether online or in person.
            </p>
            <p>
              Use your best judgment and put your safety first. While you can't control others' actions, these tips can help protect you throughout your dating journey.
            </p>
          </Section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.12 }}
            aria-labelledby="child-safety-standards"
            className="mb-10 rounded-2xl border border-[#AB1E3E]/25 bg-gradient-to-br from-[#AB1E3E]/8 to-rose-500/5 p-6 md:p-8 dark:border-rose-400/25 dark:from-[#AB1E3E]/20 dark:to-rose-500/10"
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AB1E3E] text-white shadow-sm">
                <ShieldAlert aria-hidden="true" className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h2 id="child-safety-standards" className="text-2xl font-bold text-gray-900 dark:text-white">
                  Child Safety Standards
                </h2>
                <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/75">
                  Fynd Mee prohibits child sexual abuse and exploitation (CSAE). Users must not use Fynd Mee to groom, exploit, threaten, or sexually endanger a child, or to create, request, share, or distribute child sexual abuse material (CSAM). This rule applies to profiles, photos, messages, calls, and all other activity on Fynd Mee.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                  Report a child safety concern
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/75">
                  If you encounter a profile, content, or behaviour that may endanger a child, report it using the reporting option in the Fynd Mee app. You can also contact us at{" "}
                  <a
                    href="mailto:info@fyndmee.app"
                    className="font-semibold text-[#AB1E3E] underline decoration-[#AB1E3E]/40 underline-offset-4 transition-colors hover:text-rose-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] dark:text-rose-300 dark:hover:text-rose-200"
                  >
                    info@fyndmee.app
                  </a>
                  . If a child is in immediate danger, contact local emergency services.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                  How we respond
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/75">
                  We review child safety reports and take appropriate action in accordance with our standards and applicable law. This may include removing prohibited content, restricting or disabling accounts, and reporting confirmed CSAM to the relevant authorities where required.
                </p>
              </div>
            </div>
          </motion.section>

          <Section title="1. Online Safety" delay={0.15}>
            <SubSection title="Never Send Money or Share Financial Info">
              <WarningBox>
                <p className="font-semibold mb-2">Never send money or share financial information.</p>
                <p>
                  This includes wire transfers, gift cards, or cryptocurrency investments. Scammers often create fake emergencies to manipulate victims.
                </p>
              </WarningBox>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Never wire money – it's nearly impossible to trace or reverse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Don't share bank account or credit card details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Report anyone who asks for money immediately</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Protect Your Personal Information">
              <p>
                Keep personal details private until you've built trust with someone.
              </p>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Don't share your home or work address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Avoid sharing daily routines (e.g., gym schedules)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>If you're a parent, limit information about your children</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Stay on Fynd Mee Platform">
              <TipBox>
                Keep conversations on Fynd Mee while getting to know someone. Users with bad intentions often try to move chats elsewhere quickly.
              </TipBox>
              <p className="mt-2">
                Staying on the platform keeps the conversation connected to the relevant account if you need to report a safety concern.
              </p>
            </SubSection>

            <SubSection title="Watch for Red Flags">
              <p className="mb-2">Be cautious if someone:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Claims to be overseas but wants a serious relationship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Won't meet in person or do video calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Pushes for quick commitment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Has inconsistent stories or information</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="2. Meeting In Person" delay={0.2}>
            <SubSection title="Take Your Time">
              <p>
                Don't rush into meeting. Get to know the person through video calls first. Ask questions to identify any red flags or dealbreakers.
              </p>
            </SubSection>

            <SubSection title="Meet in Public">
              <TipBox>
                Always meet in populated, public places for initial dates – never at private homes.
              </TipBox>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Choose busy cafes, restaurants, or parks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>End the date if pressured to go somewhere private</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Tell Someone Your Plans">
              <p className="mb-2">Always inform a friend or family member:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Where you're going and who you're meeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>What time you expect to return</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Arrange to check in after the date</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Control Your Transportation">
              <p>
                Use your own transportation or ride-share services. This ensures you can leave whenever you want.
              </p>
              <WarningBox>
                Never agree to be picked up from your home on a first date.
              </WarningBox>
            </SubSection>

            <SubSection title="Stay Alert with Drinks">
              <p className="mb-2">Keep your drink and personal items secure:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Watch your drink being prepared</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Never leave drinks unattended</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Keep phone, wallet, and purse with you</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. Sexual Health & Consent" delay={0.25}>
            <SubSection title="Protect Your Health">
              <p>
                Practice safe sex. Use protection consistently to reduce STI risks. Remember some STIs transmit through skin-to-skin contact.
              </p>
            </SubSection>

            <SubSection title="Know Your Status">
              <p>
                Get tested regularly – many STIs show no symptoms. Open communication with partners is essential.
              </p>
            </SubSection>

            <SubSection title="Consent is Everything">
              <TipBox>
                All sexual activity requires clear, ongoing consent from all parties.
              </TipBox>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Check in with your partner regularly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Consent can be withdrawn at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Intoxication impairs the ability to consent</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="4. Report & Block Features" delay={0.3}>
            <SubSection title="Report Suspicious Behavior">
              <p className="mb-2">Report anyone who:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Asks for money or donations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Sends harassing or threatening messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Engages in inappropriate behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Has a fake or fraudulent profile</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Use Block Features">
              <p>
                Use the blocking option in the Fynd Mee app to stop unwanted contact. If the person contacts you from another account, report that account too.
              </p>
            </SubSection>
          </Section>

          <Section title="5. LGBTQ+ Safety" delay={0.35}>
            <SubSection title="Travel Considerations">
              <WarningBox>
                Research local laws when traveling. Some countries criminalize LGBTQ+ relationships or dating app use.
              </WarningBox>
              <p className="mt-2">
                Consider logging out of Fynd Mee in countries with restrictive laws. Your safety comes first.
              </p>
            </SubSection>

            <SubSection title="Extra Caution">
              <p>
                Be mindful of your surroundings and exercise extra caution when connecting with new people in unfamiliar locations.
              </p>
            </SubSection>
          </Section>

          <Section title="Emergency Resources" delay={0.4}>
            <p>
              If you feel you're in immediate danger, call emergency services in your country.
            </p>
            
            <SubSection title="Support Hotlines">
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Emergency Services: 911 (US/Canada) or local emergency number</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>National Sexual Assault Hotline: 1-800-656-4673</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Suicide & Crisis Lifeline: 988 (US)</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Remember">
              <TipBox>
                Trust your instincts. If something feels wrong, remove yourself from the situation. Your safety is more important than being polite.
              </TipBox>
            </SubSection>
          </Section>

          <Section title="Need Help?" delay={0.45}>
            <p>
              If you have safety concerns or need to report an incident, contact Fynd Mee support:
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-[#AB1E3E]/5 to-rose-500/5 rounded-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Fynd Mee Support</p>
              <a 
                href="mailto:info@fyndmee.app" 
                className="text-[#AB1E3E] hover:text-rose-500 transition-colors underline"
              >
                info@fyndmee.app
              </a>
              <p className="text-sm text-gray-600 dark:text-white/60 mt-2">
                Include the relevant profile details and a short description of what happened. Do not send passwords, verification codes, payment information, or other sensitive account credentials.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
