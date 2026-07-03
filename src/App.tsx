import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import RentalFleet from './pages/RentalFleet'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/rental-fleet" element={<RentalFleet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
