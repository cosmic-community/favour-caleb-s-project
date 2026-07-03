import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-dark rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-content mx-auto px-6 py-24 md:py-32">
        <p className="text-accent-light font-medium tracking-widest uppercase text-sm mb-4">
          Graphic Design Portfolio
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
          Designs that speak louder than words.
        </h1>
        <p className="text-cream/60 text-lg mt-6 max-w-xl">
          Explore a collection of bold, thoughtful creative work spanning branding,
          identity, and visual storytelling.
        </p>
        <div className="flex gap-4 mt-10">
          <Link
            href="/projects"
            className="bg-accent hover:bg-accent-light text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/categories"
            className="border border-cream/20 hover:border-cream/40 text-cream font-medium px-6 py-3 rounded-full transition-colors"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  )
}