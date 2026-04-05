"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, IndianRupee, Cpu, Lightbulb, Sparkles, QrCode, CreditCard, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const registrationCards = [
  {
    title: "Transistron(registration is closed)",
    description: "Hardware Circuit Design Challenge",
    teamSize: "1-4 members",
    entryFee: "400",
    buttonText: "Register for Transistron",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf-15eD1no6gcXQgI64qtSKbW0wilgCXaC1iIhe8NJqMHAJzA/viewform",
    upiId: "7338330412@axl",
    showQR: false, // ❌ QR removed here
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    buttonGradient: "from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500",
    shadowColor: "shadow-blue-500/25 hover:shadow-blue-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Spinovate",
    description: "Innovation & Problem-Solving Challenge",
    teamSize: "Maximum 3 members",
    entryFee: "200",
    buttonText: "Register for Spinovate",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfTB7xCuB42qcg84LwDZyaBYUgAFxmYyuqUtEYvNlC30pbIQQ/viewform",
    upiId: "7338330412@axl",
    showQR: true, // ✅ QR stays here
    icon: <Lightbulb className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    buttonGradient: "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
    shadowColor: "shadow-purple-500/25 hover:shadow-purple-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Registration Open</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Registration
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose your event and register your team to compete in RESONANCE 2.0.
          </p>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="rounded-xl bg-slate-900/50 border border-slate-700/50 p-6">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-400" />
              How to Register
            </h3>

            <ol className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-semibold">1.</span>
                <span>Scan the UPI QR code and complete payment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-semibold">2.</span>
                <span>Fill the Google Form</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-semibold">3.</span>
                <span>Submit proof if required</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-semibold">4.</span>
                <span>Last date: April 11</span>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {registrationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40`} />

              <div className={`relative rounded-2xl border ${card.borderColor} bg-slate-900/80 overflow-hidden`}>
                <div className={`h-1.5 bg-gradient-to-r ${card.gradient}`} />

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${card.iconBg} border flex items-center justify-center ${card.iconColor}`}>
                      {card.icon}
                    </div>

                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{card.description}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <p className="text-white text-sm font-semibold">Team</p>
                      <p className="text-slate-400 text-xs">{card.teamSize}</p>
                    </div>
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <p className="text-white text-sm font-semibold">Fee</p>
                      <p className="text-slate-400 text-xs">Rs.{card.entryFee}</p>
                    </div>
                  </div>

                  {/* ✅ Conditional QR */}
                  {card.showQR && (
                    <div className="mb-6 text-center">
                      <img src="/upi-qr.png" className="w-40 mx-auto mb-2" />
                      <code className="text-xs text-slate-400">{card.upiId}</code>
                    </div>
                  )}

                  {/* Button */}
                  <Button asChild className="w-full">
                    <a href={card.formLink} target="_blank">
                      {card.buttonText}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
