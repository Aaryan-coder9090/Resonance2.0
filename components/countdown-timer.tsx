"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"

interface TimeUnits {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, eventName }: { targetDate: Date; eventName: string }) {
  const [time, setTime] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const calculateTime = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!isLoaded) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ]

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6 justify-center">
        <Clock className="w-5 h-5 text-blue-400" />
        <h4 className="text-white font-semibold">{eventName} Countdown</h4>
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-full p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-medium">{unit.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
