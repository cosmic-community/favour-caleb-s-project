import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  if (!category) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-accent/20 transition-colors">
        🏷️
      </div>
      <h3 className="font-display font-semibold text-lg text-ink group-hover:text-accent transition-colors">
        {name}
      </h3>
      {description && (
        <p className="text-ink/50 text-sm mt-2 line-clamp-2">{description}</p>
      )}
    </Link>
  )
}