import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">🎨</div>
      <h1 className="font-display font-extrabold text-4xl text-ink mb-3">
        Page Not Found
      </h1>
      <p className="text-ink/50 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent hover:bg-accent-light text-white font-medium px-6 py-3 rounded-full transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}