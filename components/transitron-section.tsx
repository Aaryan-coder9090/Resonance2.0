"use client"

import { motion } from "framer-motion"
import { Zap, Cpu, Users, IndianRupee, CheckCircle2, Clock, FileCode, Wrench, Settings, ArrowRight, AlertTriangle, MonitorSmartphone, CircuitBoard, Lightbulb, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function TransitronSection() {
  const simulationTools = [
    "LTspice",
    "Proteus",
    "Falstad",
    "Circuit.io",
    "Multisim",
  ]

  const allowedComponents = [
    "Resistors",
    "Capacitors",
    "Inductors",
    "Diodes",
    "Transistors (BJT, MOSFET)",
    "Operational Amplifiers (Op-Amps)",
    "Logic Gates (74xx Series)",
    "Timers (555, etc.)",
    "Voltage Regulators",
    "LEDs & Displays",
  ]

  const notAllowed = [
    "Arduino, Raspberry Pi, or any microcontroller",
    "Pre-built modules (sensor modules, relay modules)",
    "FPGA or CPLD boards",
    "Pre-assembled development boards",
  ]

  const evaluationCriteria = [
    { title: "Circuit Design", description: "Correctness and efficiency of the design", percentage: 30 },
    { title: "Simulation Accuracy", description: "Proper simulation with expected outputs", percentage: 25 },
    { title: "Implementation", description: "Quality of breadboard implementation", percentage: 25 },
    { title: "Modification Round", description: "Adaptability and problem-solving skills", percentage: 20 },
  ]

  return (
    <section id="transitron" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

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
            <span className="text-sm text-blue-400 font-medium">Featured Event</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              TRANSISTRON
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A hands-on hardware circuit design challenge where participants design, simulate, and build 
            real circuits using discrete components. From simulation to breadboard implementation!
          </p>

          {/* Team Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">1-4 Members per Team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20">
              <IndianRupee className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">Entry Fee: Rs.400 per Team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">Components Provided On-Site</span>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-2xl mx-auto mb-20 p-6 rounded-2xl border border-blue-500/30 bg-slate-800/50 backdrop-blur-sm"
        >
          <CountdownTimer targetDate={new Date("2026-04-16")} eventName="Transitron" />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">How Transitron Works</h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl border border-blue-500/30 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/60 group-hover:bg-slate-800/70">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  1
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Choose Theme</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Select one of five engineering themes covering analog circuits, digital logic, 
                  audio systems, and more.
                </p>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-500/50 z-10">
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl border border-cyan-500/30 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/60 group-hover:bg-slate-800/70">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-xl font-bold text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  2
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <MonitorSmartphone className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Simulation Round</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Design and simulate your circuit using approved tools like LTspice, Proteus, 
                  Falstad, Circuit.io, or Multisim.
                </p>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-500/50 z-10">
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl border border-teal-500/30 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-500/60 group-hover:bg-slate-800/70">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-xl font-bold text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  3
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <CircuitBoard className="w-5 h-5 text-teal-400" />
                  <h4 className="text-lg font-semibold text-white">Breadboard Build</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Build your circuit physically on a breadboard using discrete components. 
                  Demonstrate working functionality.
                </p>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-500/50 z-10">
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl border border-green-500/30 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/60 group-hover:bg-slate-800/70">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  4
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Modification Round</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Receive a modification challenge and adapt your circuit accordingly. 
                  Test your problem-solving skills!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Two Column Info Section */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Simulation Tools & Components */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full rounded-2xl border border-blue-500/30 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <div className="p-6 md:p-8">
                {/* Simulation Tools */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <FileCode className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Approved Simulation Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {simulationTools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Allowed Components */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Allowed Components</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {allowedComponents.map((component, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700/30">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Not Allowed & Important Rules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full rounded-2xl border border-red-500/30 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="p-6 md:p-8">
                {/* Not Allowed */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Not Allowed</h3>
                  </div>
                  <div className="space-y-2">
                    {notAllowed.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                        <span className="text-red-400 mt-0.5">✕</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Rules */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Key Rules</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm">All circuits must be built on breadboards only</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm">Components will be provided at the venue</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm">Soldering is not allowed during the event</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm">Teams must demonstrate working circuits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Problem Statement Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Problem Statement Book</h3>
                <p className="text-slate-400">
                  Download the official Transitron problem statement book to understand the challenges and themes.
                </p>
              </div>
              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 flex-shrink-0"
                asChild
              >
                <a href="/theme-book.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Evaluation Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Evaluation Criteria</h3>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-6 md:p-8">
            <div className="space-y-4">
              {evaluationCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-white font-medium">{criteria.title}</span>
                      <span className="text-slate-500 text-sm ml-2 hidden sm:inline">- {criteria.description}</span>
                    </div>
                    <span className="text-blue-400 font-bold">{criteria.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${criteria.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm p-6">
            <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Pro Tips for Success</h4>
            <p className="text-slate-400 text-sm">
              Practice with simulation tools beforehand. Focus on clean circuit design and proper 
              component placement on the breadboard. Be prepared for modifications — adaptability 
              is key! Document your design process as judges will ask questions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
