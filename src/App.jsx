import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Seo from './components/Seo.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Careers from './pages/Careers.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import TAMService from './pages/Services/TAMService.jsx'
import SaaSMVPDevelopment from './pages/Services/SaaSMVPDevelopment.jsx'
import BusinessDashboardDevelopment from './pages/Services/BusinessDashboardDevelopment.jsx'
import CompanyWebsiteDevelopment from './pages/Services/CompanyWebsiteDevelopment.jsx'
import AutomationSystemIntegration from './pages/Services/AutomationSystemIntegration.jsx'
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx'
import TermsOfService from './pages/legal/TermsOfService.jsx'
import CookiePolicy from './pages/legal/CookiePolicy.jsx'
import Disclaimer from './pages/legal/Disclaimer.jsx'
import RefundPolicy from './pages/legal/RefundPolicy.jsx'
import GlobalLegalHub from './pages/legal/GlobalLegalHub.jsx'

export function SiteContent() {
  return <>
    <Seo />
    <Analytics />
    <ScrollToTop />
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" tabIndex="-1" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
}
export default function App() { return <BrowserRouter><SiteContent /></BrowserRouter> }

