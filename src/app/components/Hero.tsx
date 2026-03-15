"use client";
export default function Hero() {
  return (
    <section
      id="about"
      className="pt-14 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {/* Column 1 — Identity */}
          <div className="p-10 flex flex-col gap-6 animate-fade-up delay-0">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                Full-Stack Developer
              </span>
            </div>
            <h1 className="font-grotesk font-bold text-5xl leading-[1.05] text-gray-900">
              Mansour
              <br />
              Nabil
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              3rd-year CS student. I build web apps, dabble in AI, and help
              others learn. Based in Boumerdès, Algeria.
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#3b82f6] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                Open for work
              </span>
            </div>
          </div>

          {/* Column 2 — Voice */}
          <div className="p-10 flex items-center animate-fade-up delay-100">
            <blockquote className="border-l-2 border-[#3b82f6] pl-6">
              <p className="text-gray-700 italic leading-relaxed text-base">
                &quot;Motivated, autonomous, and team-driven. I care about full-stack
                development, interactive systems, and solving real problems —
                especially at hackathons.&quot;
              </p>
            </blockquote>
          </div>

          {/* Column 3 — Contact links */}
          <div className="flex flex-col animate-fade-up delay-200">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-between px-8 py-5 bg-[#3b82f6] text-white font-medium hover:bg-blue-600 transition-colors"
            >
              <span>View my projects</span>
              <span className="text-lg">↓</span>
            </a>
            <a
              href="https://github.com/mansournabil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-8 py-5 border-b border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors group"
            >
              <span className="font-medium">GitHub</span>
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                ↗
              </span>
            </a>
            <a
              href="mailto:mansournabil1615@gmail.com"
              className="flex items-center justify-between px-8 py-5 border-b border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors group"
            >
              <span className="font-medium text-sm">
                mansournabil1615@gmail.com
              </span>
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                →
              </span>
            </a>
            <a
              href="tel:+213771187959"
              className="flex items-center justify-between px-8 py-5 text-gray-700 hover:bg-gray-50 transition-colors group flex-1"
            >
              <span className="font-medium">+213 771 187 959</span>
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
