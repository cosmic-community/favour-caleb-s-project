import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream mt-20">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎨</span>
              <span className="font-display font-bold text-lg">Favour Caleb</span>
            </div>
            <p className="text-cream/60 text-sm max-w-xs">
              Crafting bold, memorable visual identities and design experiences.
            </p>
          </div>
          <nav className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 uppercase tracking-wider text-xs mb-1">
                Explore
              </span>
              <Link href="/" className="text-cream/70 hover:text-accent-light transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-cream/70 hover:text-accent-light transition-colors">
                Projects
              </Link>
              <Link href="/categories" className="text-cream/70 hover:text-accent-light transition-colors">
                Categories
              </Link>
            </div>
          </nav>
        </div>
        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-cream/40 text-sm">
          © {year} Favour Caleb's Project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}