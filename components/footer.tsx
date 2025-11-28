
"use client"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-white border-t border-gray-200 dark:bg-black dark:border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logos.png"
                alt="Fynd Mee logo"
                className="h-8 w-8 object-contain rounded-md hover:scale-110 transition-transform drop-shadow-lg"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Fynd Mee</span>
            </div>
            <p className="text-gray-600 dark:text-white/70">Where authentic connections begin and love stories unfold.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Index</h4>
            <ul className="space-y-2 text-gray-600 dark:text-white/70">
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  The App
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-rose-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-rose-400 transition">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-white/70">
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-rose-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privicy-policy" className="hover:text-rose-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-white/70">
              <li>
                <a href="/terms-of-sevice" className="hover:text-rose-400 transition">
                  Terms of Service
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Safety
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-white/50 text-sm">© 2025 Fynd mee. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-rose-400 transition dark:text-white/50">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-400 transition dark:text-white/50">
                Instagram
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-400 transition dark:text-white/50">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
