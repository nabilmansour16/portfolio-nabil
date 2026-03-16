const skillRows = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "C++", "Java"],
  },
  {
    category: "Tools",
    skills: ["Git/GitHub", "Docker", "Linux", "MongoDB Atlas"],
  },
];

const skillColors: Record<string, string> = {
  // Frontend
  React: "border-cyan-200 bg-cyan-50 text-cyan-700 hover:border-cyan-400 hover:bg-cyan-100",
  JavaScript: "border-yellow-200 bg-yellow-50 text-yellow-700 hover:border-yellow-400 hover:bg-yellow-100",
  HTML5: "border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-400 hover:bg-orange-100",
  CSS3: "border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100",
  Bootstrap: "border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-400 hover:bg-purple-100",
  // Backend
  "Node.js": "border-green-300 bg-green-50 text-green-700 hover:border-green-400 hover:bg-green-100",
  Express: "border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400 hover:bg-gray-100",
  "REST APIs": "border-indigo-200 bg-indigo-50 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-100",
  MongoDB: "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-100",
  // Languages
  Python: "border-blue-300 bg-blue-50 text-blue-800 hover:border-blue-400 hover:bg-blue-100",
  "C++": "border-blue-400 bg-blue-50 text-blue-900 hover:border-blue-500 hover:bg-blue-100",
  Java: "border-red-200 bg-red-50 text-red-700 hover:border-red-400 hover:bg-red-100",
  // Tools
  "Git/GitHub": "border-gray-800 bg-gray-50 text-gray-800 hover:bg-gray-800 hover:text-white",
  Docker: "border-blue-300 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100",
  Linux: "border-yellow-300 bg-yellow-50 text-yellow-800 hover:border-yellow-400 hover:bg-yellow-100",
  "MongoDB Atlas": "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-100",
};

export default function Skills() {
  return (
    <section className="py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-grotesk font-bold text-3xl text-gray-900">
            Skills
          </h2>
          <span className="text-sm text-gray-400 font-medium">Tech I use</span>
        </div>

        <div className="rounded-xl border border-gray-200 overflow-hidden">
          {skillRows.map((row, i) => (
            <div
              key={row.category}
              className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-7 py-5 ${
                i < skillRows.length - 1 ? "border-b border-gray-200" : ""
              } hover:bg-gray-50 transition-colors`}
            >
              <span
                className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0"
                style={{ width: 80 }}
              >
                {row.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-colors cursor-default ${
                      skillColors[skill] || "border-gray-200 bg-white text-gray-700 hover:border-[#bfdbfe] hover:text-[#3b82f6]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
