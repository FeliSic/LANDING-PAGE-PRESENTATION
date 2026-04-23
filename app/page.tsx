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
            <div className="flex flex-col gap-2">
              {[
                { label: "Frontend:", isHeader: true },
                {
                  label:
                    "Frameworks: React / Next.js (Experiencia en App & Pages Router)",
                },
                {
                  label:
                    "Lenguajes: JavaScript / TypeScript (incluyendo JSX / TSX)",
                },
                { label: "Estilos: CSS (Tailwind CSS / Styled Components)" },
                { label: "Consumo de datos: Fetch API / Axios" },
                { label: "Backend & Bases de Datos:", isHeader: true },
                {
                  label:
                    "APIs: Desarrollo de API RESTful (Métodos HTTP, Status Codes, JSON).",
                },
                { label: "ORM: Sequelize (Manejo de modelos y relaciones)." },
                {
                  label:
                    "Bases de Datos: SQL & NoSQL (Consultas nativas y modelado de datos).",
                },
                { label: "Herramientas & Seguridad:", isHeader: true },
                {
                  label:
                    "Seguridad: Autenticación con JWT (JSON Web Tokens) y NextAuth.",
                },
                { label: "Control de Versiones: Git / GitHub." },
                { label: "Metodologías & Arquitectura:", isHeader: true },
                { label: "Metodologías Ágiles: Scrum" },
                { label: "Arquitectura MVC (Model-View-Controller)" },
              ].map(({ label, isHeader }) =>
                isHeader ? (
                  <p
                    key={label}
                    className="mt-2 text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {label}
                  </p>
                ) : (
                  <span
                    key={label}
                    className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800/50 w-fit"
                  >
                    {label}
                  </span>
                ),
              )}
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

          {/* Redes */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/felipe-sicca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#0958a8] text-white text-sm font-semibold rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/FeliSic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-600 text-white text-sm font-semibold rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>

          {/* PROYECTOS */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight mb-5 flex items-center gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/50 w-2 h-8 rounded-full inline-block"></span>
              PROYECTOS HECHOS PARA DEMOSTRACIÓN:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ProjectCard
                title="Ecommerce"
                emoji="🛍️"
                href="https://ecommerce-front-back-end.vercel.app"
              />
              <ProjectCard
                title="PET FINDER"
                emoji="🐾"
                href="https://pet-finder-next-tau.vercel.app"
              />
              <ProjectCard
                title="PIEDRA PAPEL Y TIJERAS ONLINE"
                emoji="✂️"
                href="https://ppt-online-next.vercel.app"
              />
              <ProjectCard
                title="To-Do-KanBan"
                emoji="📋"
                href="https://to-do-kan-ban-omoh.vercel.app"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

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
