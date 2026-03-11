"use client"

import { motion } from "framer-motion"
import { MapPin, Zap, CircuitBoard, Lightbulb, Cpu, PenTool } from "lucide-react"

export function AboutSection() {
  const events = [
    {
      title: "TRANSITRON",
      description:
        "A hands-on electronics circuit design challenge where participants simulate, design, and implement real hardware circuits using discrete components on breadboards.",
      skills: "Circuit design, debugging, component selection, and practical implementation.",
      icon: <CircuitBoard className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      features: [
        { icon: <Cpu className="w-4 h-4" />, text: "Circuit Simulation" },
        { icon: <CircuitBoard className="w-4 h-4" />, text: "Breadboard Build" },
        { icon: <Zap className="w-4 h-4" />, text: "Hardware Debugging" },
      ],
    },
    {
      title: "SPINOVATE",
      description:
        "A creative engineering problem-solving competition where teams generate innovative solutions by combining a base problem with randomly assigned constraints, audience types, and limitations.",
      skills: "Design feasible engineering concepts and present solutions through posters and presentations.",
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      iconBg: "from-purple-500/20 to-pink-500/20",
      features: [
        { icon: <Lightbulb className="w-4 h-4" />, text: "Idea Generation" },
        { icon: <PenTool className="w-4 h-4" />, text: "Creative Design" },
        { icon: <Zap className="w-4 h-4" />, text: "Problem Solving" },
      ],
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">About The Event</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              RESONANCE 2.0
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed mb-6"
          >
            RESONANCE 2.0 is an engineering innovation event that brings together students to explore engineering creativity through{" "}
            <span className="text-white font-semibold">two distinct competitions</span> that test both technical skills and innovative thinking.
          </motion.p>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
          >
            <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-white font-medium">KLE Technological University</p>
              <p className="text-slate-400 text-sm">Dr. M. S. Sheshgiri Campus, Belagavi</p>
            </div>
          </motion.div>
        </div>

        {/* Event Components Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">Event Components</h3>
          <p className="text-slate-400 mt-2">Two complementary competitions: a hardware challenge and an innovation challenge</p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${event.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl bg-gradient-to-br ${event.bgGradient} border ${event.borderColor} p-6 md:p-8 transition-all duration-300 group-hover:border-opacity-60 group-hover:scale-[1.02]`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${event.iconBg} border ${event.borderColor} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  style={{
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                  }}
                >
                  <div className={`transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor] ${event.title === "TRANSITRON" ? "text-blue-400" : "text-purple-400"}`}>
                    {event.icon}
                  </div>
                </div>

                {/* Title */}
                <h4
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}
                >
                  {event.title}
                </h4>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-4">{event.description}</p>

                {/* Skills */}
                <p className="text-slate-400 text-sm mb-6">
                  <span className="text-white font-medium">Skills:</span> {event.skills}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {event.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border ${event.borderColor} text-xs`}
                    >
                      <span className={`bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </span>
                      <span className="text-slate-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${event.gradient} opacity-5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
