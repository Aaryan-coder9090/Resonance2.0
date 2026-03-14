"use client"

import { motion } from "framer-motion"
import { FileText, Download, Zap, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RulebookSection() {
  const rulebooks = [
    {
      title: "TRANSISTRON",
      subtitle: "Rulebook",
      description: "Complete rules, scoring criteria, and guidelines for the hands-on electronics challenge.",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500 to-cyan-500",
      downloadLink: "/transitron-rulebook.pdf", // Replace with actual PDF link
    },
    {
      title: "SPINOVATE",
      subtitle: "Rulebook",
      description: "Rules for the spin-and-solve challenge including presentation guidelines.",
      icon: <RotateCcw className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500 to-pink-500",
      downloadLink: "/spinovate-rule-book .pdf", // Replace with actual PDF link
    },
  ]

  return (
    <section id="rulebook" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Documentation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rulebooks
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Download the complete rulebooks to understand the competition format, scoring criteria, and guidelines
          </p>
        </motion.div>

        {/* Rulebook Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rulebooks.map((rulebook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-slate-600/50">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${rulebook.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${rulebook.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      {rulebook.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-1">{rulebook.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{rulebook.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">{rulebook.description}</p>

                  {/* Download Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${rulebook.gradient} hover:opacity-90 text-white font-semibold py-5 rounded-xl transition-all duration-300 group-hover:shadow-lg`}
                    asChild
                  >
                    <a href={rulebook.downloadLink} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
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
