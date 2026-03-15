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
            What I've done
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card rounded-xl border border-gray-200 bg-white p-7"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-grotesk font-semibold text-lg text-gray-900">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-400 font-medium ml-4 shrink-0">
                  {exp.date}
                </span>
              </div>
              <p className="text-sm font-medium text-[#3b82f6] mb-4">
                {exp.company}
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0" />
                    {b}
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
