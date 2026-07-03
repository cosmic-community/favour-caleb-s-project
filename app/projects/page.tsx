import type { Metadata } from 'next'
import { getProjects } from '@/lib/cosmic'
import ProjectGrid from '@/components/ProjectGrid'

export const metadata: Metadata = {
  title: "Projects | Favour Caleb's Project",
  description: 'Browse the full collection of graphic design projects.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="font-display font-extrabold text-4xl text-ink">All Projects</h1>
        <p className="text-ink/50 mt-3 max-w-xl">
          A complete showcase of design projects, from brand identities to visual campaigns.
        </p>
      </header>
      <ProjectGrid projects={projects} />
    </div>
  )
}