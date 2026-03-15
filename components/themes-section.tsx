"use client"

import { motion } from "framer-motion"
import { Gauge, Cpu, Volume2, Search, Shield, Zap } from "lucide-react"

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
}

export function ThemesSection() {

  const themes: Theme[] = [
    {
      id: 1,
      title: "Analog Sensing for Industrial Applications",
      icon: "gauge",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Digital Logic Systems for Automation and Safety Control",
      icon: "cpu",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Audio-based Human Interaction and Safety Sensing Systems",
      icon: "volume-2",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Discrete Logic Design and VLSI Principles for Industrial Systems",
      icon: "search",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Fail-safe Timing and Power Management Protection Systems",
      icon: "shield",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="themes" className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Innovation Tracks
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Themes
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore the five technical themes for the competition.
          </p>
        </motion.div>

        {/* Theme Cards */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {themes.map((theme, index) => {
            const IconComponent = iconMap[theme.icon] || Gauge

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 flex items-center gap-4 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all">

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${theme.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {theme.title}
                  </h3>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
