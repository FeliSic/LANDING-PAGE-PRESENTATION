export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        <div className="bg-white/80 dark:bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-xl dark:shadow-2xl shadow-zinc-200/50 dark:shadow-black/30 border border-zinc-200/60 dark:border-zinc-700/60 p-6 md:p-10">
          {/* Encabezado */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Hi, i'm Felipe!
            </h1>
            <p className="mt-3 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Recibido en la Carrera de{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Software Developer
              </span>{" "}
              en <span className="font-medium">APX.SCHOOL</span> desde
              Argentina.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
              <span className="text-2xl mr-1">🛠</span> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "JavaScript XML",
                "TypeScript",
                "TypeScript XML",
                "CSS (Tailwind / Styled Components)",
                "React",
                "Next Js/Ts",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Inglés */}
          <div className="mt-6 flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl p-4 border border-zinc-200/70 dark:border-zinc-700/70">
            <div className="text-3xl">🇬🇧</div>
            <div>
              <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Idioma
              </p>
              <p className="text-lg font-medium">
                Inglés B1{" "}
                <span className="text-zinc-500 dark:text-zinc-400 text-base font-normal">
                  (Intermedio)
                </span>
              </p>
            </div>
          </div>

          {/* PROYECTOS */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight mb-5 flex items-center gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/50 w-2 h-8 rounded-full inline-block"></span>
              PROYECTOS HECHOS PARA DEMOSTRACIÓN:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Ecommerce */}
              <ProjectCard
                title="Ecommerce"
                emoji="🛍️"
                href="https://ecommerce-front-back-end.vercel.app"
              />
              {/* PET FINDER */}
              <ProjectCard
                title="PET FINDER"
                emoji="🐾"
                href="https://pet-finder-next-delta.vercel.app"
              />
              {/* PIEDRA PAPEL Y TIJERAS */}
              <ProjectCard
                title="PIEDRA PAPEL Y TIJERAS ONLINE"
                emoji="✂️"
                href="https://ppt-online-next.vercel.app"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Componente auxiliar para tarjetas de proyecto (dentro del mismo archivo o aparte)
function ProjectCard({
  title,
  emoji,
  href,
}: {
  title: string;
  emoji: string;
  href: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group block p-5 bg-zinc-50 dark:bg-zinc-800/70 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{emoji}</span>
        <h3 className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1">
        <span>Ver demo</span>
        <svg
          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </p>
    </a>
  );
}
