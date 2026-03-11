"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gauge, Cpu, Volume2, Search, Shield, ChevronDown, X, Zap } from "lucide-react"
import themesData from "@/data/themes.json"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  gauge: Gauge,
  cpu: Cpu,
  "volume-2": Volume2,
  search: Search,
  shield: Shield,
}

interface Theme {
  id: number
  title: string
  icon: string
  color: string
  problemStatements: string[]
}

export function ThemesSection() {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null)
  const themes: Theme[] = themesData.themes

  const toggleTheme = (id: number) => {
    setExpandedTheme(expandedTheme === id ? null : id)
  }

  return (
    <section id="themes" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Innovation Tracks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Themes
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore five cutting-edge themes with 50 unique problem statements designed to challenge your circuit design skills
          </p>
        </motion.div>

        {/* Theme Cards Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {themes.map((theme, index) => {
            const IconComponent = iconMap[theme.icon] || Gauge
            const isExpanded = expandedTheme === theme.id

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? "border-blue-500/50 bg-slate-800/80"
                      : "border-slate-700/50 bg-slate-800/50 hover:border-blue-500/30 hover:bg-slate-800/70"
                  }`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 blur-xl transition-opacity duration-300 ${
                      isExpanded ? "opacity-10" : "group-hover:opacity-5"
                    }`}
                  />

                  {/* Card Header */}
                  <button
                    onClick={() => toggleTheme(theme.id)}
                    className="relative w-full p-6 flex items-center gap-4 text-left"
                  >
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${theme.color} p-0.5`}
                    >
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {theme.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        {theme.problemStatements.length} Problem Statements
                      </p>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-700/50 pt-6">
                            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                              Problem Statements
                            </h4>
                            <ul className="space-y-3">
                              {theme.problemStatements.map((statement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex gap-3 items-start"
                                >
                                  <span
                                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center text-xs font-bold text-white`}
                                  >
                                    {idx + 1}
                                  </span>
                                  <span className="text-slate-300 text-sm leading-relaxed">
                                    {statement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              5
            </div>
            <div className="text-sm text-slate-400 mt-1">Technical Themes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              50
            </div>
            <div className="text-sm text-slate-400 mt-1">Problem Statements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Unlimited
            </div>
            <div className="text-sm text-slate-400 mt-1">Innovation Potential</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
