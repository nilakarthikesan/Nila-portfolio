'use client'

import { useState } from 'react'
import { Github, FileText, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className={`${project.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Goal:</h4>
          <p className="text-sm opacity-90 leading-relaxed">{project.goal}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <ul className="text-sm opacity-90 space-y-1">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {tech}
              </li>
            ))}
            {project.techStack.length > 3 && (
              <li className="text-xs opacity-75">
                +{project.techStack.length - 3} more technologies
              </li>
            )}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Key Learnings:</h4>
          <ul className="text-sm opacity-90 space-y-1">
            {project.keyLearnings.slice(0, 2).map((learning, i) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span className="line-clamp-2">{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Example Use Case:</h4>
          <p className="text-sm opacity-90 leading-relaxed line-clamp-3">
            {project.exampleUseCase}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-sm"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ExternalLink size={14} />
          </a>
          <a 
            href={project.links.architecture}
            className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-sm"
          >
            <FileText size={16} />
            <span>Architecture</span>
          </a>
          <a 
            href={project.links.dailyLog}
            className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-sm"
          >
            <Calendar size={16} />
            <span>Daily Log</span>
          </a>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-sm opacity-75 hover:opacity-100 transition-opacity"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-white border-opacity-20 animate-fade-in">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Full Tech Stack:</h4>
              <ul className="text-sm opacity-90 space-y-1">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">All Key Learnings:</h4>
              <ul className="text-sm opacity-90 space-y-1">
                {project.keyLearnings.map((learning, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 