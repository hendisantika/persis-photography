import Image from "next/image";

const team = [
  {
    name: "Ahmad Rizki",
    role: "Founder & Lead Photographer",
    specialty: "Landscape & Nature",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Siti Nurhaliza",
    role: "Community Manager",
    specialty: "Portrait & Fashion",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Budi Santoso",
    role: "Workshop Coordinator",
    specialty: "Street & Documentary",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dewi Anggraini",
    role: "Creative Director",
    specialty: "Fine Art & Conceptual",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            Our Team
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            The People Behind the <span className="text-accent">Lens</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Meet the passionate photographers who lead and inspire our
            community every day.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
