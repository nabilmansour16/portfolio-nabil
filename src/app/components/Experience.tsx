const experiences = [
  {
    id: "innovtech",
    title: "InnovTech Hackathon",
    date: "Nov 2025",
    company: "Djezzy × Anvredet × MESRS",
    bullets: [
      "Co-built EduXR — Algeria's first XR educational marketplace",
      "Led all web interfaces for three user types: student, teacher, university",
      "Implemented badge system, simulated premium lab payments, and a live 5G streaming demo",
      "Built and shipped in 48 hours",
    ],
  },
  {
    id: "devup",
    title: "AI Department Lead",
    date: "2024–2025",
    company: "DevUp Club · Université Boumerdès",
    bullets: [
      "Led the AI department for two years, organizing workshops on computer vision and applied ML",
      "Contributed to team-built AI applications in the health domain",
      "Mentored new members on Python, ML fundamentals, and pipeline architecture",
      "Provided technical support at internal events and hackathons",
    ],
  },
  {
    id: "sonatrach",
    title: "Web Dev Intern",
    date: "Dec 2023",
    company: "SONATRACH",
    bullets: [
      "Contributed to the redesign of an institutional web portal for Algeria's national energy company",
      "Built interactive JavaScript components following strict internal architecture, security, and documentation standards",
    ],
  },
  {
    id: "tedx",
    title: "Organizer",
    date: "2023–2025",
    company: "TEDx Boumerdès",
    bullets: [
      "Participated in organizing two annual editions of TEDx Boumerdès",
      "Coordinated collaborative activities and supported speaker preparation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="xp" className="py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-grotesk font-bold text-3xl text-gray-900">
            Experience
          </h2>
          <span className="text-sm text-gray-400 font-medium">
            What I&apos;ve done
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card rounded-xl border border-gray-200 bg-white p-7 transition-all hover:border-[#bfdbfe] hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 sm:mb-1 gap-1 sm:gap-4">
                <h3 className="font-grotesk font-semibold text-lg text-gray-900">
                  {exp.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-400 font-medium sm:ml-4 shrink-0 px-2.5 py-1 sm:px-0 sm:py-0 bg-gray-50 sm:bg-transparent rounded-md sm:rounded-none inline-flex w-fit">
                  {exp.date}
                </span>
              </div>
              <p className="text-sm font-medium text-[#3b82f6] mb-4">
                {exp.company}
              </p>
              <ul className="space-y-3 sm:space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
