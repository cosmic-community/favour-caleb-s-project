// app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)

  return {
    title: `${title} | Favour Caleb's Project`,
    description: description || 'A graphic design project.',
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const client = getMetafieldValue(project.metadata?.client)
  const completionDate = formatDate(getMetafieldValue(project.metadata?.completion_date))
  const mainImage = project.metadata?.main_image
  const gallery = project.metadata?.gallery
  const category = project.metadata?.category
  const categoryName = category
    ? getMetafieldValue(category.metadata?.name) || category.title
    : ''

  return (
    <article className="max-w-content mx-auto px-6 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-accent font-medium hover:text-accent-dark transition-colors mb-6"
      >
        ← Back to projects
      </Link>

      <header className="mb-8">
        {categoryName && (
          <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
            {categoryName}
          </span>
        )}
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink text-balance">
          {title}
        </h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-ink/50 text-sm">
          {client && (
            <span>
              <strong className="text-ink/70">Client:</strong> {client}
            </span>
          )}
          {completionDate && (
            <span>
              <strong className="text-ink/70">Completed:</strong> {completionDate}
            </span>
          )}
        </div>
      </header>

      {mainImage && (
        <div className="rounded-2xl overflow-hidden mb-10 bg-ink/5">
          <img
            src={`${mainImage.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {description && (
        <div className="prose prose-lg max-w-none text-ink/80 mb-12">
          <p className="whitespace-pre-line">{description}</p>
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <section>
          <h2 className="font-display font-bold text-2xl text-ink mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((image, index) => {
              if (!image || !image.imgix_url) return null
              return (
                <div key={index} className="rounded-xl overflow-hidden bg-ink/5">
                  <img
                    src={`${image.imgix_url}?w=1600&h=1200&fit=crop&auto=format,compress`}
                    alt={`${title} — gallery image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}