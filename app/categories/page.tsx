import type { Metadata } from 'next'
import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata: Metadata = {
  title: "Categories | Favour Caleb's Project",
  description: 'Browse graphic design projects organized by category.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="font-display font-extrabold text-4xl text-ink">Categories</h1>
        <p className="text-ink/50 mt-3 max-w-xl">
          Explore design work grouped by discipline and project type.
        </p>
      </header>

      {categories.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🏷️</div>
          <p className="text-ink/50 text-lg">No categories available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            if (!category || !category.id) return null
            return <CategoryCard key={category.id} category={category} />
          })}
        </div>
      )}
    </div>
  )
}