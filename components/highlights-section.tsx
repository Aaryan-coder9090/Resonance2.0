"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, FileText, Trophy, Wrench, Star } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  delay: number
  color: string
}

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = target
    const incrementTime = (duration * 1000) / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

function StatCard({ icon, value, label, delay, color }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 overflow-hidden">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} p-0.5 mb-4`}>
          <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Value */}
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {typeof value === "number" ? <AnimatedCounter target={value} /> : value}
        </div>

        {/* Label */}
        <p className="text-slate-400 text-sm md:text-base">{label}</p>
      </div>
    </motion.div>
  )
}

export function HighlightsSection() {
  const stats = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      value: 5,
      label: "Technical Themes",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      value: 50,
      label: "Engineering Problems",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      value: "₹51,000",
      label: "Prize Pool",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      value: "Hands-on",
      label: "Circuit Design",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Challenge yourself with real engineering problems and showcase your circuit design skills
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
