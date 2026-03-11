"use client"

import { motion } from "framer-motion"
import { RotateCcw, Clock, Presentation, Users, Lightbulb, FileText, Ban, CheckCircle2, AlertCircle, Award, IndianRupee, Target, Shuffle, ChevronRight, AlertTriangle } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

export function SpinovateSection() {
  const baseProblems = [
    "Personal Safety",
    "Portable Purification System",
    "Fire Detection",
    "Smart Micro-Climate Control System",
  ]

  const challengeConstraints = [
    { type: "Technology Constraint", description: "Specific technology or component you must use" },
    { type: "Target Audience", description: "The user group your solution must serve" },
    { type: "Limitation / Twist", description: "Additional restriction to increase difficulty" },
  ]

  const posterRequirements = [
    "Problem Definition",
    "Proposed Solution",
    "Diagram / Flowchart",
    "Working Explanation",
    "Future Scope",
  ]

  const round2Requirements = [
    "Problem Statement",
    "Detailed Solution",
    "Technical Explanation",
    "Cost Estimation",
    "Future Scope",
  ]

  const evaluationCriteria = [
    { title: "Innovation", description: "Uniqueness and creativity of the solution", percentage: 30 },
    { title: "Feasibility", description: "Practicality and real-world applicability", percentage: 25 },
    { title: "Technical Accuracy", description: "Correctness of concepts and implementation", percentage: 20 },
    { title: "Presentation", description: "Clarity, structure, and communication", percentage: 15 },
    { title: "Constraint Handling", description: "How well constraints were incorporated", percentage: 10 },
  ]

  return (
    <section id="spinovate" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <RotateCcw className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Featured Event</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              SPINOVATE
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A creative engineering challenge where teams generate innovative solutions by combining 
            multiple randomly assigned constraints. Spin the wheels, embrace the challenge!
          </p>

          {/* Team Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm">Max 3 Members per Team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20">
              <IndianRupee className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm">Entry Fee: Rs.250 per Team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm">Interdisciplinary Teams Allowed</span>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-2xl mx-auto mb-20 p-6 rounded-2xl border border-purple-500/30 bg-slate-800/50 backdrop-blur-sm"
        >
          <CountdownTimer targetDate={new Date("2026-04-17")} eventName="Spinovate" />
        </motion.div>

        {/* Spinovate Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">The Spinovate Process</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1: Base Problem Wheel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-2xl border border-purple-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Base Problem Wheel
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Teams spin a wheel and receive one base problem statement:
                </p>
                <ul className="space-y-2">
                  {baseProblems.map((problem, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-500/50 z-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Step 2: Challenge Wheel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-2xl border border-pink-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-xl font-bold text-white mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Shuffle className="w-5 h-5 text-pink-400" />
                  Challenge Wheel
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Spin again to receive three constraints:
                </p>
                <ul className="space-y-3">
                  {challengeConstraints.map((constraint, index) => (
                    <li key={index} className="p-2 rounded-lg bg-slate-900/50 border border-slate-700/30">
                      <span className="text-pink-400 text-xs font-medium block">{constraint.type}</span>
                      <span className="text-slate-300 text-sm">{constraint.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-500/50 z-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Step 3: Final Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-full p-6 rounded-2xl border border-orange-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-xl font-bold text-white mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-orange-400" />
                  Final Problem Statement
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Teams must combine all elements to form a complete engineering challenge:
                </p>
                <div className="space-y-2 p-3 rounded-lg bg-slate-900/50 border border-orange-500/20">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-400">+</span>
                    <span className="text-slate-300">Base Problem</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-400">+</span>
                    <span className="text-slate-300">Technology Constraint</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-400">+</span>
                    <span className="text-slate-300">Target Audience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-400">+</span>
                    <span className="text-slate-300">Limitation / Twist</span>
                  </div>
                  <div className="border-t border-orange-500/20 mt-2 pt-2">
                    <span className="text-orange-400 font-medium text-sm">= Your Unique Challenge!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Problem Statement Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-400 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Problem Statements for Spinovate</h3>
                <p className="text-slate-300 leading-relaxed">
                  Problem statements for Spinovate will not be disclosed beforehand. Participants will receive 
                  their challenge during the event through the spinning wheel system. This ensures fairness and 
                  equal opportunity for all teams to demonstrate their innovative problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rounds */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Round 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full rounded-2xl border border-purple-500/30 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white">Round 1: Poster Presentation</h3>
                </div>

                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 w-fit">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm font-medium">Duration: 1.5 Hours</span>
                </div>

                <p className="text-slate-300 mb-6">
                  Teams will define the final problem, design their solution, and prepare a poster. 
                  No digital devices or internet allowed during this round.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Poster Must Include</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {posterRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700/30">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Presentation className="w-4 h-4 text-purple-400" />
                    Presentation Format
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">3</span>
                      <span className="text-slate-400 text-sm block">min presentation</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-purple-400">2</span>
                      <span className="text-slate-400 text-sm block">min Q&A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Round 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="h-full rounded-2xl border border-pink-500/30 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-orange-500" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-lg font-bold text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white">Round 2: Final Presentation</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <Award className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-300 text-sm font-medium">Top 6 Teams Shortlisted</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <Clock className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-300 text-sm font-medium">1 Hour to Prepare PPT</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">
                  Shortlisted teams must prepare a PowerPoint presentation explaining their solution 
                  in detail to the judges.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">PPT Must Cover</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {round2Requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700/30">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Presentation className="w-4 h-4 text-pink-400" />
                    Presentation Format
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-2xl font-bold text-pink-400">3</span>
                      <span className="text-slate-400 text-sm block">min presentation</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-pink-400">2</span>
                      <span className="text-slate-400 text-sm block">min Q&A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
                    <span className="text-purple-400 font-bold">{criteria.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${criteria.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
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
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm p-6">
            <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Pro Tips for Success</h4>
            <p className="text-slate-400 text-sm">
              Think outside the box, embrace the constraints as creative challenges, and focus on presenting 
              a clear, structured solution. The judges value innovative thinking and practical feasibility 
              over complex theoretical solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
