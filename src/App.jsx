import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Analytics } from "@vercel/analytics/react"

// Services Linking -------------------

import TAMService from './pages/Services/TAMService.jsx'
import SaaSMVPDevelopment from './pages/Services/SaaSMVPDevelopment.jsx'
import BusinessDashboardDevelopment from './pages/Services/BusinessDashboardDevelopment.jsx'
import CompanyWebsiteDevelopment from './pages/Services/CompanyWebsiteDevelopment.jsx'
import AutomationSystemIntegration from './pages/Services/AutomationSystemIntegration.jsx'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import CookiePolicy from './pages/legal/CookiePolicy'
import Disclaimer from './pages/legal/Disclaimer'
import RefundPolicy from './pages/legal/RefundPolicy'
import GlobalLegalHub from './pages/legal/GlobalLegalHub'

//----------------------------------------
function App() {
  return (
    <Router>
      <Analytics/>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />


            <Route path="/services/tam-system-development" element={<TAMService />} />
            <Route path="/services/saas-mvp-development" element={<SaaSMVPDevelopment />} />
            <Route path="/services/business-dashboard-development" element={<BusinessDashboardDevelopment />} />
            <Route path="/services/company-website-development" element={<CompanyWebsiteDevelopment />} />
            <Route path="/services/automation-system-integration" element={<AutomationSystemIntegration />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/legal" element={<GlobalLegalHub />} />






          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App