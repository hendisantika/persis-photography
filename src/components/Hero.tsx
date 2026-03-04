import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent z-20 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent z-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-accent animate-fade-in">
          Community for Photographers in PERSIS
        </p>
        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in-up">
          Capturing Moments,
          <br />
          <span className="text-accent">Building Stories</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 animate-fade-in-up animation-delay-200">
          We are a passionate community of photographers united by our love for
          the art of visual storytelling. Join us in exploring, learning, and
          creating together.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="#gallery"
            className="rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-wider text-background hover:bg-accent-light transition-colors duration-300"
          >
            Explore Our Work
          </Link>
          <Link
            href="#about"
            className="rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in animation-delay-600">
        <span className="text-xs uppercase tracking-widest text-muted">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
