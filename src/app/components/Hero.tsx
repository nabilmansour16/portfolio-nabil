"use client";
export default function Hero() {
  return (
    <section
      id="about"
      className="pt-14 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Column 1 — Identity */}
          <div className="p-8 md:p-10 flex flex-col gap-6 animate-fade-up delay-0">
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
              others learn. Based in Algiers, Algeria.
            </p>
            <div className="mt-auto pt-6 md:pt-0 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#3b82f6] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                Open for work
              </span>
              <a
                href="/CV.NABIL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm hover:shadow"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Column 2 — Voice */}
          <div className="p-8 md:p-10 flex items-center animate-fade-up delay-100">
            <blockquote className="border-l-2 border-[#3b82f6] pl-6">
              <p className="text-gray-700 italic leading-relaxed text-base">
                &quot;Motivated, autonomous, and team-driven. I care about full-stack
                development, interactive systems, and solving real problems —
                especially at hackathons.&quot;
              </p>
            </blockquote>
          </div>

          {/* Column 3 — Contact links */}
          <div className="p-8 md:p-10 flex flex-col gap-4 animate-fade-up delay-200">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center justify-between p-6 rounded-2xl bg-[#3b82f6] text-white overflow-hidden transition-all hover:shadow-lg hover:bg-blue-600 hover:-translate-y-0.5"
            >
              <div className="relative z-10 flex flex-col">
                <span className="text-xs font-medium text-blue-200 uppercase tracking-widest mb-1">Portfolio</span>
                <span className="font-grotesk font-semibold text-xl">View my projects</span>
              </div>
              <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-xl">↓</span>
              </div>
            </a>

            <div className="flex flex-col gap-3 flex-1 mt-2">
              <a
                href="https://github.com/mansournabil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:border-[#bfdbfe] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#eff6ff] transition-colors border border-gray-100 group-hover:border-[#bfdbfe]">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#3b82f6] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-medium text-[15px]">GitHub</span>
                </div>
                <span className="text-gray-400 group-hover:text-[#3b82f6] transition-colors -rotate-45">→</span>
              </a>

              <a
                href="mailto:mansournabil1615@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:border-[#bfdbfe] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4 max-w-[85%]">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#eff6ff] transition-colors border border-gray-100 group-hover:border-[#bfdbfe]">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#3b82f6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <span className="font-medium text-sm md:text-[15px] truncate">mansournabil1615<span className="hidden lg:inline">@gmail.com</span></span>
                </div>
                <span className="text-gray-400 group-hover:text-[#3b82f6] transition-colors -rotate-45">→</span>
              </a>

              <a
                href="tel:+213771187959"
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:border-[#bfdbfe] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#eff6ff] transition-colors border border-gray-100 group-hover:border-[#bfdbfe]">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#3b82f6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.496-4.196-7.092-7.092l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  </div>
                  <span className="font-medium text-[15px]">+213 771 187 959</span>
                </div>
                <span className="text-gray-400 group-hover:text-[#3b82f6] transition-colors -rotate-45">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
