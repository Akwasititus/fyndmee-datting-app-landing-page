"use client"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-black border-t border-white/10 py-16 px-4">
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
              <span className="text-xl font-bold text-white">FyndMee</span>
            </div>
            <p className="text-white/70">Where authentic connections begin and love stories unfold.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Index</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  The App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Newsroom
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Press
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2025 Fyndmee. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-rose-400 transition">
                Twitter
              </a>
              <a href="#" className="text-white/50 hover:text-rose-400 transition">
                Instagram
              </a>
              <a href="#" className="text-white/50 hover:text-rose-400 transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
