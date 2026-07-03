import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return null

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const client = getMetafieldValue(project.metadata?.client)
  const category = project.metadata?.category
  const categoryName = category
    ? getMetafieldValue(category.metadata?.name) || category.title
    : ''
  const image = project.metadata?.main_image

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-ink/20">
            🎨
          </div>
        )}
        {categoryName && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
            {categoryName}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>
        {client && (
          <p className="text-ink/50 text-sm mt-1">Client: {client}</p>
        )}
      </div>
    </Link>
  )
}