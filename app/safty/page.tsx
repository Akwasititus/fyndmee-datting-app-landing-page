"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowLeft, Shield, AlertCircle, Heart, MessageSquare, Users, Phone, Lock, Eye, HelpCircle } from 'lucide-react'

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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#AB1E3E]/10 to-rose-500/10 border border-[#AB1E3E]/20 mb-6">
            <Shield className="w-5 h-5 text-[#AB1E3E]" />
            <span className="text-sm font-medium text-[#AB1E3E]">Your Safety Matters</span>
          </div>
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
              At Fynd Mee, your safety is our top priority. While we verify all profiles, you should always exercise caution when interacting with new people, whether online or in person.
            </p>
            <p>
              Use your best judgment and put your safety first. While you can't control others' actions, these tips can help protect you throughout your dating journey.
            </p>
          </Section>

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
                Our platform includes safety features and message filters to protect you.
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
                You can block any user instantly. Blocked users cannot contact you or see your profile.
              </p>
            </SubSection>

            <SubSection title="Our Safety Features">
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>All profiles are verified with facial recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>24/7 moderation team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>One-tap reporting and blocking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Screenshot detection for privacy</span>
                </li>
              </ul>
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
              If you have safety concerns or need to report an incident, contact our Trust & Safety team:
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-[#AB1E3E]/5 to-rose-500/5 rounded-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Fynd Mee Safety Team</p>
              <a 
                href="mailto:info@fyndmee.app" 
                className="text-[#AB1E3E] hover:text-rose-500 transition-colors underline"
              >
                info@fyndmee.app
              </a>
              <p className="text-sm text-gray-600 dark:text-white/60 mt-2">
                We review all reports within 24 hours and take appropriate action.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}