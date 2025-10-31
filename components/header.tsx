// 'use client'
// import { Button } from "@/components/ui/button"
// import { Menu, X, MessageCircle, Send, Sparkles } from "lucide-react"
// import { useState } from "react"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [active, setActive] = useState("home")
//   const [showSocials, setShowSocials] = useState(false)
//   const [showproducts, setShowProducts] = useState(false)

//   const navItems = [
//     // { id: "home", label: "Home", href: "#" },
//     { id: "theapp", label: "The App", href: "#theapp" },
//     { id: "products", label: "Products", href: "#products" },
//     { id: "newsroom", label: "News Room", href: "#newsroom" },
//     { id: "download", label: "Download", href: "#download" }
//   ]

//   const socials = [
//     { name: "WhatsApp", icon: MessageCircle, link: "https://chat.whatsapp.com/your-group-link", color: "bg-[#25D366]" },
//     { name: "Telegram", icon: Send, link: "https://t.me/your-channel", color: "bg-[#0088cc]" }
//   ]

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img
//             src="/images/logos.png"
//             alt="Fynd Mee logo"
//             className="h-8 w-8 object-contain rounded-md hover:scale-110 transition-transform drop-shadow-lg"
//             style={{ filter: 'brightness(0) invert(1)' }}
//           />
//           <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">Fynd Mee</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map(item => (
//             <a
//               key={item.id}
//               href={item.href}
//               onClick={() => setActive(item.id)}
//               className={`font-medium transition-all hover:scale-105 drop-shadow-md ${
//                 active === item.id 
//                   ? "text-[#AB1E3E] font-bold" 
//                   : "text-white/90 hover:text-white"
//               }`}
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         {/* Desktop Button */}
//         <div className="hidden md:block relative">
//           <Button 
//             onClick={() => setShowSocials(!showSocials)}
//             className="bg-[#AB1E3E] hover:bg-[#8B1830] text-white border-none hover:scale-105 hover:shadow-xl shadow-lg transition-all flex items-center gap-2"
//           >
//             <Sparkles className="animate-pulse" size={18} />
//             Join the Community
//           </Button>
          
//           {showSocials && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//               {socials.map(social => (
//                 <a
//                   key={social.name}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <div className={`${social.color} p-2 rounded-lg`}>
//                     <social.icon className="text-white" size={20} />
//                   </div>
//                   <span className="font-medium text-gray-700">{social.name}</span>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden backdrop-blur-md border-t border-white/10">
//           <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
//             {navItems.map(item => (
//               <a
//                 key={item.id}
//                 href={item.href}
//                 onClick={() => {
//                   setActive(item.id)
//                   setIsOpen(false)
//                 }}
//                 className={`font-medium py-2 hover:pl-2 transition-all ${
//                   active === item.id
//                     ? "text-white font-bold border-l-4 border-white pl-2"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
            
//             <div className="pt-2 border-t border-white/20 mt-2">
//               <p className="text-white/70 text-sm mb-3">Join our community</p>
//               {socials.map(social => (
//                 <a
//                   key={social.name}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-3 px-3 py-2.5 mb-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
//                 >
//                   <div className={`${social.color} p-2 rounded-lg`}>
//                     <social.icon className="text-white" size={18} />
//                   </div>
//                   <span className="font-medium text-white">{social.name}</span>
//                 </a>
//               ))}
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }



'use client'
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, Send, Sparkles, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [showSocials, setShowSocials] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  const navItems = [
    { id: "FeatureCard", label: "The App", href: "#FeatureCard" },
    { id: "products", label: "Products", href: "#products" },
    { id: "newsroom", label: "News Room", href: "#newsroom" },
    { id: "download", label: "Download", href: "#download" },
    // { id: "download", label: "Download", href: "#download" }
  ]

  const socials = [
    { name: "WhatsApp", icon: MessageCircle, link: "https://chat.whatsapp.com/your-group-link", color: "bg-[#25D366]" },
    { name: "Telegram", icon: Send, link: "https://t.me/your-channel", color: "bg-[#0088cc]" }
  ]

  const products = [
    { 
      id: "fyndmee-plus", 
      label: "FyndMee Plus", 
      description: "Premium features for enhanced networking",
      href: "/pricing/plus", // Add your actual page routes here
      price: "$9.99/month"
    },
    { 
      id: "fyndmee-royal", 
      label: "FyndMee Royal", 
      description: "Exclusive features for power users",
      href: "/pricing/royal",
      price: "$19.99/month"
    },
    { 
      id: "fyndmee-gold", 
      label: "FyndMee Gold", 
      description: "Ultimate package with all features",
      href: "/pricing/gold",
      price: "$29.99/month"
    }
  ]

  const handleProductClick = (href: string) => {
    window.location.href = href; // Or use your preferred navigation method
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logos.png"
            alt="Fynd Mee logo"
            className="h-8 w-8 object-contain rounded-md hover:scale-110 transition-transform drop-shadow-lg"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">Fynd Mee</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            item.id === "products" ? (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setShowProducts(!showProducts)}
                  className={`font-medium transition-all hover:scale-105 drop-shadow-md flex items-center gap-1 ${
                    active === item.id 
                      ? "text-[#AB1E3E] font-bold" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform ${showProducts ? 'rotate-180' : ''}`} />
                </button>
                
                {showProducts && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {products.map(product => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.href)}
                        className="flex flex-col items-start w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="font-semibold text-gray-800">{product.label}</span>
                          <span className="text-[#AB1E3E] font-bold text-sm">{product.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`font-medium transition-all hover:scale-105 drop-shadow-md ${
                  active === item.id 
                    ? "text-[#AB1E3E] font-bold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Button 
              onClick={() => setShowSocials(!showSocials)}
              className="bg-[#AB1E3E] hover:bg-[#8B1830] text-white border-none hover:scale-105 hover:shadow-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="animate-pulse" size={18} />
              Join the Community
            </Button>
            
            {showSocials && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {socials.map(social => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className={`${social.color} p-2 rounded-lg`}>
                      <social.icon className="text-white" size={20} />
                    </div>
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map(item => (
              item.id === "products" ? (
                <div key={item.id} className="flex flex-col space-y-2">
                  <button
                    onClick={() => setShowProducts(!showProducts)}
                    className={`font-medium py-2 hover:pl-2 transition-all text-left flex items-center justify-between ${
                      active === item.id
                        ? "text-white font-bold border-l-4 border-white pl-2"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${showProducts ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showProducts && (
                    <div className="ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                      {products.map(product => (
                        <button
                          key={product.id}
                          onClick={() => {
                            handleProductClick(product.href);
                            setIsOpen(false);
                          }}
                          className="flex flex-col items-start w-full py-2 px-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white">{product.label}</span>
                            <span className="text-[#AB1E3E] font-bold text-sm">{product.price}</span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">{product.description}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.id)
                    setIsOpen(false)
                  }}
                  className={`font-medium py-2 hover:pl-2 transition-all ${
                    active === item.id
                      ? "text-white font-bold border-l-4 border-white pl-2"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
            
            <div className="pt-2 border-t border-white/20 mt-2">
              <p className="text-white/70 text-sm mb-3">Join our community</p>
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-3 py-2.5 mb-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                >
                  <div className={`${social.color} p-2 rounded-lg`}>
                    <social.icon className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-white">{social.name}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
