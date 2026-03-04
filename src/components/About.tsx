const stats = [
  { number: "50+", label: "Active Members" },
  { number: "100+", label: "Events Held" },
  { number: "5K+", label: "Photos Shared" },
  { number: "3+", label: "Years Growing" },
];

const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    title: "Passion for Photography",
    description:
      "We share an unwavering passion for capturing the beauty in every moment, from landscapes to portraits.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Strong Community",
    description:
      "We believe in the power of community — supporting, inspiring, and growing together as photographers.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Continuous Learning",
    description:
      "Through workshops, mentoring, and shared experiences, we constantly evolve our craft and artistic vision.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            About Us
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            More Than Just a{" "}
            <span className="text-accent">Photography Group</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            PERSIS Photography was born from a shared love of visual
            storytelling. We are a community of photographers in PERSIS — from
            beginners picking up their first camera to seasoned professionals —
            all united by the desire to capture life&apos;s most beautiful
            moments and tell compelling stories through our lenses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <p className="font-serif text-4xl font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
