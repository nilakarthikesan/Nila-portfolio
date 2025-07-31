import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three end‑to‑end projects that demonstrate my expertise in full‑stack development, 
            LLM evaluation, vector search/RAG, and AI agent integration.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
} 