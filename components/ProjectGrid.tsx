import type { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🖼️</div>
        <p className="text-ink/50 text-lg">No projects to display yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        if (!project || !project.id) return null
        return <ProjectCard key={project.id} project={project} />
      })}
    </div>
  )
}