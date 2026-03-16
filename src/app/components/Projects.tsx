const projects = [
  {
    id: "eduxr",
    span: "col-span-4",
    featured: true,
    tag: "HACKATHON · NOV 2025",
    title: "EduXR — AR/VR Education Platform",
    description:
      "Immersive ecosystem for virtual labs and hands-on learning. Includes student and teacher dashboards, a badge and achievement system, simulated payments for premium labs, and a 5G low-latency streaming demo. Built in 48 hours at InnovTech — the first AR/VR educational marketplace ever built in Algeria, organized by Djezzy, Anvredet, and MESRS.",
    pills: ["React", "Node.js", "AR/VR", "MongoDB", "5G"],
    statusLabel: "Hackathon",
    statusColor: "bg-purple-100 text-purple-700",
    num: null,
  },
  {
    id: "cert",
    span: "col-span-2",
    featured: false,
    isCert: true,
    tag: "CERTIFIED",
    title: "Full-Stack Developer",
    subtitle: "Code213, Algeria · 2024",
    pills: [],
    description: "",
    statusLabel: "",
    statusColor: "",
    num: null,
  },
  {
    id: "sonatrach",
    span: "col-span-2",
    featured: false,
    tag: null,
    num: "01",
    title: "SONATRACH Portal",
    description:
      "Redesign of an institutional portal for Algeria's national energy company. Built interactive JS components following strict internal architecture and security standards.",
    pills: ["JavaScript", "HTML5", "CSS3"],
    statusLabel: "Internship",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "mern",
    span: "col-span-2",
    featured: false,
    tag: null,
    num: "02",
    title: "MERN CRUD Apps",
    description:
      "Full-stack applications with authentication, data management, and interactive UIs. Secure REST APIs, MongoDB Atlas integration, and responsive React frontends.",
    pills: ["MongoDB", "Express", "React", "Node.js"],
    statusLabel: "Personal",
    statusColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "aihealth",
    span: "col-span-2",
    featured: false,
    tag: null,
    num: "03",
    title: "AI Health Projects",
    description:
      "Team-built AI applications in the health domain at DevUp Club. Ran workshops on computer vision and applied ML. Mentored new members on Python and pipeline design.",
    pills: ["Python", "scikit-learn", "Computer Vision"],
    statusLabel: "Club",
    statusColor: "bg-amber-100 text-amber-700",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-grotesk font-bold text-3xl text-gray-900">
            Projects
          </h2>
          <span className="text-sm text-gray-400 font-medium">
            Selected work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => {
            // Certification card
            if ((p as { isCert?: boolean }).isCert) {
              return (
                <div
                  key={p.id}
                  className="bento-card rounded-xl border border-gray-200 bg-white p-8 flex flex-col justify-between min-h-[220px] transition-all hover:border-[#bfdbfe] hover:shadow-md group cursor-default"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                    Certified
                  </span>
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center mb-4 group-hover:bg-[#3b82f6] transition-colors">
                      <svg
                        className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-grotesk font-semibold text-lg text-gray-900">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{(p as { subtitle?: string }).subtitle}</p>
                  </div>
                </div>
              );
            }

            // Featured (EduXR)
            if (p.featured) {
              return (
                <div
                  key={p.id}
                  className="bento-card rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-6 md:p-8 flex flex-col gap-4 min-h-[280px] transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                      {p.tag}
                    </span>
                    {p.statusLabel && (
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${p.statusColor}`}
                      >
                        {p.statusLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1.5 rounded-full bg-white border border-[#bfdbfe] text-xs font-semibold text-[#3b82f6] shadow-sm"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular cards
            return (
              <div
                key={p.id}
                className="bento-card rounded-xl border border-gray-200 bg-white p-6 md:p-7 flex flex-col gap-3 min-h-[220px] transition-all hover:border-[#bfdbfe] hover:shadow-md group cursor-default"
              >
                <div className="flex items-start justify-between">
                  {p.num && (
                    <span className="font-grotesk font-bold text-4xl md:text-5xl text-[#bfdbfe] leading-none group-hover:text-[#3b82f6] transition-colors">
                      {p.num}
                    </span>
                  )}
                  {p.statusLabel && (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${p.statusColor} ml-auto`}
                    >
                      {p.statusLabel}
                    </span>
                  )}
                </div>
                <h3 className="font-grotesk font-semibold text-lg text-gray-900 mt-2 md:-mt-1 group-hover:text-[#3b82f6] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 group-hover:bg-gray-100 transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
