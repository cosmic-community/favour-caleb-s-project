import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          <span className="font-display font-bold text-lg tracking-tight text-ink">
            Favour Caleb
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-ink/70 hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-ink/70 hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/categories" className="text-ink/70 hover:text-accent transition-colors">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  )
}