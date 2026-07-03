// app/categories/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategory, getProjectsByCategory, getMetafieldValue } from '@/lib/cosmic'
import ProjectGrid from '@/components/ProjectGrid'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return { title: 'Category Not Found' }
  }

  const name = getMetafieldValue(category.metadata?.name) || category.title

  return {
    title: `${name} | Favour Caleb's Project`,
    description:
      getMetafieldValue(category.metadata?.description) ||
      `Projects in the ${name} category.`,
  }
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const projects = await getProjectsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-accent font-medium hover:text-accent-dark transition-colors mb-6"
      >
        ← Back to categories
      </Link>

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-4xl text-ink">{name}</h1>
        {description && (
          <p className="text-ink/50 mt-3 max-w-xl">{description}</p>
        )}
      </header>

      <ProjectGrid projects={projects} />
    </div>
  )
}