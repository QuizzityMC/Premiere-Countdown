"use client"

import { useState, useEffect } from "react"
import { CountdownTimer } from "./components/countdown-timer"
import { Timeline } from "./components/timeline"
import Link from "next/link"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const premiereDate = new Date("2025-03-21T17:30:00+10:00")

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          ADS Films Presents
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-300">The Body In the Night</h2>
        <div className="text-center">
          <p className="text-xl md:text-2xl mb-4">Premiere Countdown</p>
          {mounted && <CountdownTimer targetDate={premiereDate} />}
        </div>
        <p className="text-center text-lg md:text-xl">Join us on Friday, March 21, 2025 at 5:30 PM (AEST)</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.adsfilms.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300"
          >
            Visit ADS Films
          </Link>
          <Link
            href="https://tickets.adsfilms.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition duration-300"
          >
            Book Tickets
          </Link>
        </div>
        <Timeline />
      </div>
    </main>
  )
}

