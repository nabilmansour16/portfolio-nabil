export default function StatTicker() {
  const stats = [
    { value: "MERN", label: "Main stack" },
    { value: "3+", label: "Deployments" },
    { value: "AR/VR", label: "EduXR built" },
    { value: "2 yrs", label: "DevUp AI lead" },
    { value: "TEDx", label: "Organizer" },
  ];

  // Duplicate for seamless loop
  const doubled = [...stats, ...stats];

  return (
    <section className="border-y border-gray-200 overflow-hidden">
      <div className="relative">
        <div className="ticker-track py-4">
          {doubled.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-10 border-r border-gray-200 shrink-0"
            >
              <div className="text-center">
                <div className="font-grotesk font-bold text-xl text-[#3b82f6]">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
