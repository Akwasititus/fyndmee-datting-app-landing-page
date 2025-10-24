import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left side: logo + name */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logos.png"
            alt="Fynd Mee logo"
            className="h-8 w-8 object-contain rounded-md transition-transform duration-300 hover:scale-110 drop-shadow-lg"
          />
          <span className="text-2xl font-bold text-white drop-shadow-lg">Fynd Mee</span>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-md">
            Home
          </a>
          <a href="#features" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-md">
            Features
          </a>
          <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-md">
            Pricing
          </a>
          <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-md">
            Mission
          </a>
          <a href="#faq" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-md">
            FAQ
          </a>
        </nav>

        {/* Right side button */}
        <Button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
          Join the Community
        </Button>
      </div>
    </header>
  )
}