import Image from "next/image";

const projects = [
  {
    id: "Real Rent Car",
    span: "col-span-4",
    featured: true,
    title: "Real Rent Car",
    description:
      "Real Rent Car is a comprehensive open-source car rental platform that streamlines vehicle reservations, fleet management, and customer interactions. This is a complete rebuild (v2) featuring modern technologies and an improved user experience.",
    pills: ["laravel", "jquery", "tailwind", "mysql"],
    statusLabel: "Personal",
    statusColor: "bg-purple-100 text-purple-700",
    num: null,
    image: "/images/real-rent-car.png",
    link: "https://real-rent-car.galdi.dev/",
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
    link: "",
    image: "/images/code213.png",
  },
  {
    id: "Bakers Palace",
    span: "col-span-2",
    featured: false,
    tag: null,
    num: "01",
    title: "Bakers Palace",
    description:
      "Baker Palace is a modern bakery website designed to showcase delicious baked goods and provide customers with an easy way to explore products, menus, and bakery services online.",
    pills: ["MongoDB", "Express", "React", "Node.js"],
    statusLabel: "Personal",
    statusColor: "bg-green-100 text-green-700",
    image: "/images/bakers-palace.png",
    link: "https://bakers-palace.vercel.app/#/",
  },
  {
    id: "Sahim",
    span: "col-span-2",
    featured: false,
    tag: null,
    num: "02",
    title: "Sahim",
    description:
      "Saham is a platform built using Laravel, Filament, Tailwind CSS, and JavaScript. This platform aims to facilitate the donation and distribution of surplus food from restaurants and stores to those in need. It encompasses various features including home, donations, articles, about us, contact us pages, and three distinct panels for donors, charities, and an admin interface.",
    pills: ["laravel", "filament", "tailwind", "javascript"],
    statusLabel: "Personal",
    statusColor: "bg-pink-100 text-pink-700",
    image: "/images/sahim.png",
    link: "https://sahem.galdi.dev/",
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
                  className="bento-card relative rounded-xl border border-gray-200 bg-white min-h-[220px] transition-all hover:border-[#bfdbfe] hover:shadow-md group cursor-default overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    {(p as { image?: string }).image && (
                      <Image src={(p as { image?: string }).image as string} alt={p.title} fill className="object-cover" />
                    )}
                  </div>

                  <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[220px]">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                      Certified
                    </span>
                    <div className="mt-8">
                      <h3 className="font-grotesk font-semibold text-lg text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{(p as { subtitle?: string }).subtitle}</p>
                    </div>
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
                  {p.image && (
                    <div className="relative w-full h-56 md:h-72 mt-4 rounded-xl overflow-hidden border border-[#bfdbfe]/50 shadow-sm group-hover:shadow-md transition-shadow">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {p.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1.5 rounded-full bg-white border border-[#bfdbfe] text-xs font-semibold text-[#3b82f6] shadow-sm"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] hover:text-blue-700 transition-colors ml-4"
                      >
                        Visit
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
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
                {p.image && (
                  <div className="relative w-full h-40 mt-3 rounded-lg overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {p.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 group-hover:bg-gray-100 transition-colors"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-[#eff6ff] hover:text-[#3b82f6] transition-colors flex-shrink-0"
                      aria-label="View Project"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
