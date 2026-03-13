"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, CircuitBoard, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const coordinators = [
    { name: "Coordinator (Transistron)", phone: "+91 89041 75693  :  +91 87621 23799" },
    { name: "Coordinator (Spinovate)", phone: "+91 73383 30412  : +91 83104 30956" },
  ]

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ]

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Themes", href: "#themes" },
    { label: "Rulebook", href: "#rulebook" },
    { label: "Register", href: "#registration" },
  ]

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <CircuitBoard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">RESONANCE</h3>
                  <p className="text-xs text-blue-400">2.0</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Electronics Innovation Event at KLE Technological University, Belagavi
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:resonance@kletech.ac.in"
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Shivanishanbhag213@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">
                    KLE Technological University<br />
                    Dr. M. S. Sheshgiri Campus<br />
                    Belagavi, Karnataka
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Coordinators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-4">Event Coordinators</h4>
              <ul className="space-y-4">
                {coordinators.map((coordinator, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300 text-sm font-medium">{coordinator.name}</p>
                      <a
                        href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
                        className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                      >
                        {coordinator.phone}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              RESONANCE 2.0 - Electronics Innovation Event
            </p>
            <p className="text-slate-600 text-xs">
              KLE Technological University - Belagavi
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
