
// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function DownloadPage() {
//   const [email, setEmail] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle email submission
//     console.log('Email submitted:', email)
//     setEmail('')
//     alert('Download link sent to your email!')
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-br from-rose-50 to-pink-100 dark:from-slate-900 dark:to-slate-800">
//       {/* Main Content - Centered Layout */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">


//           <div className="relative w-full h-full">
//             <div className="relative rounded-3xl overflow-hidden">
//               <Image
//                 src="/images/download-image.png"
//                 alt="FyndMee App"
//                 width={900} 
//                 height={900}
//                 className="rounded-3xl shadow-2xl"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="flex-1 max-w-md text-center lg:text-left">
//             {/* Main Heading */}
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
//               Meet New People Today
//             </h1>

//             {/* Subheading */}
//             <h2 className="text-3xl lg:text-4xl font-bold text-[#AB1E3E] mb-8">
//               Download FyndMee
//             </h2>

//             {/* App Store Badges */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
//               >
//                 <div className="mr-3">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xs">Download on the</div>
//                   <div className="text-lg font-semibold">App Store</div>
//                 </div>
//               </a>
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
//               >
//                 <div className="mr-3">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 10.937-2.302-2.302 10.937-10.937zm3.199-3.198l2.807 2.806a2 2 0 0 1 0 2.829l-2.807 2.807-2.808-2.807 2.808-2.807zM5.864 2.21L8.167 4.51 5.33 7.346 3.027 5.043 5.864 2.21z" />
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xs">Get it on</div>
//                   <div className="text-lg font-semibold">Google Play</div>
//                 </div>
//               </a>
//             </div>

//             {/* Email Signup */}
//             <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-rose-200 dark:bg-slate-700/80 dark:border-slate-600">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//                 Get Direct Download Link
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
//                 Enter your email and we'll send you a direct download link
//               </p>
//               <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#AB1E3E]"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-[#AB1E3E] text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors whitespace-nowrap"
//                 >
//                   Send Link
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function DownloadPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
    alert('Download link sent to your email!')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 to-pink-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      
      {/* Main Content - Centered Layout */}
      <div className="container mx-auto px-4 py-8">

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
      
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* Centered Image Section */}
          <div className="flex justify-center items-center w-full">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dddddd.jpg"
                  alt="FyndMee App"
                  width={300} 
                  height={300}
                  className="w-full object-contain rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-md text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Meet New People Today
            </h1>

            {/* Subheading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#AB1E3E] mb-8">
              Download FyndMee
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 10.937-2.302-2.302 10.937-10.937zm3.199-3.198l2.807 2.806a2 2 0 0 1 0 2.829l-2.807 2.807-2.808-2.807 2.808-2.807zM5.864 2.21L8.167 4.51 5.33 7.346 3.027 5.043 5.864 2.21z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Email Signup */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-rose-200 dark:bg-slate-700/80 dark:border-slate-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Get Direct Download Link
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Enter your email and we'll send you a direct download link
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#AB1E3E]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#AB1E3E] text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors whitespace-nowrap"
                >
                  Send Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}