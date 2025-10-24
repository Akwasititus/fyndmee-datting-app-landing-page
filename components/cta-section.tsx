"use client"

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Find Your{" "}
          <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Perfect Match
          </span>
          ?
        </h2>

        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Join thousands of people who have found love on LoveMatch. Your story could be next.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
            Download App Now
          </button>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>

        <p className="text-white/50 text-sm mt-8">
          Available on iOS and Android • Free to download • Premium features optional
        </p>
      </div>
    </section>
  )
}
