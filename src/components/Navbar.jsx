// import { useState, useEffect } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'

// const navLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'Services', to: '/services' },
//   { label: 'About', to: '/about' },
//   { label: 'Contact', to: '/contact' },
// ]

// const LOGO_URL =
//   'https://res.cloudinary.com/dxommxt6d/image/upload/v1772266092/icon_oww0vp.png'

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [logoError, setLogoError] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//   }, [location])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center">
//               {!logoError ? (
//                 <img
//                   src={LOGO_URL}
//                   alt="Minor Group of Technologies"
//                   className="w-full h-full object-contain p-1"
//                   onError={() => setLogoError(true)}
//                   loading="eager"
//                 />
//               ) : (
//                 <span className="text-white font-bold text-sm">MG</span>
//               )}
//             </div>

//             <span className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
//               Minor Group
//               <br />
//               <span className="text-xs font-medium text-gray-500">of Technologies</span>
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === '/'}
//                 className={({ isActive }) =>
//                   `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                     isActive
//                       ? 'text-gray-900 bg-gray-100'
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden md:flex items-center">
//             <Link
//               to="/contact"
//               className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors duration-200"
//             >
//               Book a Consultation
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
//           <div className="px-4 py-3 space-y-1">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === '/'}
//                 className={({ isActive }) =>
//                   `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                     isActive
//                       ? 'text-gray-900 bg-gray-100'
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}

//             <div className="pt-2 pb-1">
//               <Link
//                 to="/contact"
//                 className="block w-full text-center bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors duration-200"
//               >
//                 Book a Consultation
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }


import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const LOGO_URL = 'https://res.cloudinary.com/dxommxt6d/image/upload/v172266092/icon_oww0vp.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-sky-500 flex items-center justify-center shadow-md group-hover:bg-sky-600 transition-colors">
              {!logoError ? (
                <img
                  src={LOGO_URL}
                  alt="Minor Group"
                  className="w-full h-full object-contain p-1.5"
                  onError={() => setLogoError(true)}
                  loading="eager"
                />
              ) : (
                <span className="text-white font-bold text-sm">MG</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sky-900 text-base sm:text-lg leading-tight">
                Minor Group
              </span>
              <span className="text-xs font-medium text-sky-600">
                of Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-sky-500'
                      : 'text-sky-700 hover:text-sky-600 hover:bg-sky-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-sky-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-sky-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sky-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-sky-500'
                      : 'text-sky-700 hover:text-sky-600 hover:bg-sky-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3 pb-1">
              <Link
                to="/contact"
                className="block w-full text-center bg-sky-500 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors duration-200 shadow-md"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}