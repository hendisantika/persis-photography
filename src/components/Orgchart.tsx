const leadership = [
  { name: "Agus Nur Putra", role: "Ketua" },
  { name: "Jibril Abdurrahman", role: "Sekretaris" },
  { name: "Cecep Yasir Jihadudin", role: "Bendahara" },
];

const divisions = [
  {
    name: "Divisi Ide Kreatif",
    members: ["Muhamad Rizal"],
  },
  {
    name: "Divisi Pelaksana / Produksi",
    members: [
      "M. Rifaldi Mutakin",
      "Siti Hajar",
      "Jamilah Putri Hasanah",
      "Ahmad Fadhil MK",
      "Dafiq Al Fath",
    ],
  },
  {
    name: "Divisi Humas",
    members: ["Fidi Munadiyan"],
  },
  {
    name: "Divisi SDM",
    members: ["Iyan Gunawan", "Fadjar Indra Fauzi"],
  },
];

const anggota = [
  "Agus Wahyu",
  "Muhamad Ridwan Wauzi",
  "Rio Taufik Rahman",
  "Rian Saefurohman",
  "Dliya Muhaemin Aziz",
  "Nurul Hidayat",
  "Bubun Burhanudin",
  "Adila Putri",
];

export default function Orgchart() {
  return (
    <section id="orgchart" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            Struktur Organisasi
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Organization <span className="text-accent">Chart</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            The structure behind our creative community.
          </p>
        </div>

        {/* Leadership */}
        <div className="flex flex-col items-center mb-12">
          {/* Ketua */}
          <div className="relative mb-8">
            <div className="rounded-2xl border-2 border-accent bg-accent/10 px-10 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">
                {leadership[0].role}
              </p>
              <p className="font-serif text-xl font-semibold text-foreground">
                {leadership[0].name}
              </p>
            </div>
          </div>

          {/* Connector line */}
          <div className="w-px h-8 bg-accent/40" />

          {/* Sekretaris & Bendahara */}
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            {/* Horizontal connector */}
            <div className="hidden sm:block absolute top-0 left-1/4 right-1/4 h-px bg-accent/40" />

            {leadership.slice(1).map((leader) => (
              <div
                key={leader.role}
                className="rounded-2xl border border-accent/50 bg-surface px-8 py-5 text-center min-w-[220px]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">
                  {leader.role}
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {leader.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-12">
          <div className="w-px h-8 bg-accent/40" />
        </div>

        {/* Divisions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {divisions.map((division) => (
            <div
              key={division.name}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="font-serif text-base font-semibold text-accent mb-4 pb-3 border-b border-border">
                {division.name}
              </h3>
              <ul className="space-y-2">
                {division.members.map((member) => (
                  <li
                    key={member}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-12">
          <div className="w-px h-8 bg-accent/40" />
        </div>

        {/* Anggota */}
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h3 className="font-serif text-lg font-semibold text-accent mb-6 text-center">
            Anggota
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {anggota.map((member) => (
              <div
                key={member}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
