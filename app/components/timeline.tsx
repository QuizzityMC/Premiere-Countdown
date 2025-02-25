import { CalendarDays } from "lucide-react"

const events = [
  { date: "February 27, 2025, 4:20 PM", description: "Filming Act 3 Scene 4 and Act 4 Scene 5" },
  { date: "Week of March 3, 2025", description: "Additional Filming (Act 4 Scene 2)" },
  { date: "March 17, 2025", description: "Project Deadline" },
  { date: "March 21, 2025, 5:30 PM (AEST)", description: 'Premiere of "The Body In the Night"' },
]

export function Timeline() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-300">Production Timeline</h3>
      <ol className="relative border-l border-gray-700">
        {events.map((event, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
              <CalendarDays className="w-3 h-3 text-blue-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-purple-300">{event.description}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{event.date}</time>
          </li>
        ))}
      </ol>
    </div>
  )
}

