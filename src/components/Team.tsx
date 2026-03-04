import Image from "next/image";

const team = [
  {
    name: "Agus",
    role: "Photographer",
    specialty: "Event & Documentary",
    image: "/members/agus.jpg",
  },
  {
    name: "Dafiq",
    role: "Photographer",
    specialty: "Street & Urban",
    image: "/members/dafiq.jpg",
  },
  {
    name: "Fadhil",
    role: "Photographer",
    specialty: "Portrait & Conceptual",
    image: "/members/fadhil.jpg",
  },
  {
    name: "Fidi",
    role: "Photographer",
    specialty: "Landscape & Nature",
    image: "/members/fidi.jpg",
  },
  {
    name: "Hajar",
    role: "Photographer",
    specialty: "Portrait & Fashion",
    image: "/members/hajar.jpg",
  },
  {
    name: "Ilal",
    role: "Photographer",
    specialty: "Documentary & Journalism",
    image: "/members/ilal.jpg",
  },
  {
    name: "Iyan",
    role: "Photographer",
    specialty: "Architecture & Travel",
    image: "/members/iyan.jpg",
  },
  {
    name: "Jamilah",
    role: "Photographer",
    specialty: "Fine Art & Conceptual",
    image: "/members/jamilah.jpg",
  },
  {
    name: "Jibril",
    role: "Photographer",
    specialty: "Event & Wedding",
    image: "/members/jibril.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            Our Members
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            The People Behind the <span className="text-accent">Lens</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Meet the passionate photographers who make up our community.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              {/* Photo */}
              <div className="relative mx-auto mb-6 aspect-[2/3] max-w-[280px] overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-xs uppercase tracking-wider text-accent">
                    {member.specialty}
                  </p>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
