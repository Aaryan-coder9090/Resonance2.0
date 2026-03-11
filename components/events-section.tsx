"use client"

import { motion } from "framer-motion"
import { Zap, RotateCcw, Users, IndianRupee, Cpu, Presentation, Clock, CheckCircle2 } from "lucide-react"

interface EventCardProps {
  title: string
  description: string
  icon: React.ReactNode
  rounds: { title: string; description?: string }[]
  rules: { icon: React.ReactNode; text: string }[]
  gradient: string
  delay: number
}

function EventCard({ title, description, icon, rounds, rules, gradient, delay }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
        {/* Header gradient */}
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />
        
        {/* Glow effect */}
        <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${gradient} opacity-5`} />

        <div className="relative p-6 md:p-8">
          {/* Icon and title */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}>
              <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-8 leading-relaxed">{description}</p>

          {/* Rounds */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Competition Rounds</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {rounds.map((round, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-700/30"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-sm font-bold text-white`}>
                    {index + 1}
                  </div>
                  <span className="text-slate-200 text-sm font-medium">{round.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Rules</h4>
            <div className="space-y-3">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <div className="flex-shrink-0 text-blue-400">{rule.icon}</div>
                  <span className="text-sm">{rule.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}



export function EventsSection() {
  const events = [
    {
      title: "TRANSISTRON",
      description: "A hands-on electronics challenge where participants design and build practical circuits using discrete components. Test your skills from simulation to real-world implementation.",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      rounds: [
        { title: "Simulation" },
        { title: "Breadboard Implementation" },
        { title: "Circuit Modification" },
        { title: "Final Optimization" },
      ],
      rules: [
        { icon: <Users className="w-4 h-4" />, text: "Team size: 1-4 members" },
        { icon: <IndianRupee className="w-4 h-4" />, text: "Registration fee: Rs.400 per team" },
        { icon: <Cpu className="w-4 h-4" />, text: "Microcontrollers are not allowed" },
        { icon: <CheckCircle2 className="w-4 h-4" />, text: "Circuits must be built on breadboards" },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "SPINOVATE",
      description: "A creative engineering challenge where teams generate innovative solutions by combining randomly assigned constraints. Spin the wheels and showcase your problem-solving skills!",
      icon: <RotateCcw className="w-6 h-6 text-purple-400" />,
      rounds: [
        { title: "Poster Presentation" },
        { title: "Final PPT Presentation" },
      ],
      rules: [
        { icon: <Users className="w-4 h-4" />, text: "Maximum 3 members per team" },
        { icon: <IndianRupee className="w-4 h-4" />, text: "Entry fee: Rs.250 per team" },
        { icon: <Clock className="w-4 h-4" />, text: "1.5 hours for Round 1, no internet" },
        { icon: <CheckCircle2 className="w-4 h-4" />, text: "Top 6 teams advance to finals" },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

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
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Competition Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Two exciting competitions designed to test your electronics knowledge and innovation skills
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}
