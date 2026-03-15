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
              className={`flex items-center gap-6 px-7 py-5 ${
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
                    className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-[#bfdbfe] hover:text-[#3b82f6] transition-colors cursor-default"
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
