import { getProjects, getCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'

export default async function HomePage() {
  const [projects, categories] = await Promise.all([
    getProjects(),
    getCategories(),
  ])

  const featuredProjects = projects.slice(0, 6)

  return (
    <div>
      <Hero />

      <section className="max-w-content mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-ink">
              Featured Projects
            </h2>
            <p className="text-ink/50 mt-2">A selection of recent creative work.</p>
          </div>
          <Link
            href="/projects"
            className="text-accent font-medium hover:text-accent-dark transition-colors whitespace-nowrap"
          >
            View all →
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      {categories.length > 0 && (
        <section className="max-w-content mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-3xl text-ink mb-8">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              if (!category || !category.id) return null
              return <CategoryCard key={category.id} category={category} />
            })}
          </div>
        </section>
      )}
    </div>
  )
}