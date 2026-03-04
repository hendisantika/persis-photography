import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=800&fit=crop",
    alt: "Landscape photography - mountains at sunrise",
    category: "Landscape",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
    alt: "Portrait photography - artistic portrait",
    category: "Portrait",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
    alt: "Street photography - urban life",
    category: "Street",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    alt: "Nature photography - forest landscape",
    category: "Nature",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
    alt: "Portrait photography - natural light portrait",
    category: "Portrait",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop",
    alt: "Photography equipment and camera",
    category: "Behind the Scenes",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
    alt: "Travel photography - iconic landscape",
    category: "Travel",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
    alt: "Seascape photography - ocean waves",
    category: "Seascape",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            Our Work
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Community <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            A curated collection of stunning work from our talented community
            members. Each photograph tells a unique story.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={photo.span ? 800 : 400}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs uppercase tracking-wider text-accent mb-2">
                  {photo.category}
                </span>
                <p className="text-sm text-gray-300">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-muted">
            See more of our community&apos;s work on Instagram
          </p>
          <a
            href="https://www.instagram.com/persisphotography/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-accent px-8 py-4 text-sm uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @persisphotography
          </a>
        </div>
      </div>
    </section>
  );
}
