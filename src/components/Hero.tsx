'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            I'm Nila!
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer that loves the intersection of{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">AI</span>,{' '}
            <span className="text-green-600 dark:text-green-400 font-semibold">LLMs</span>, and{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">modern web development</span>!
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
            Don't you think the web should be <span className="font-semibold text-foreground">fun again</span>? 
            Buttons and knobs and sounds and experimentation? We have an amazing medium here, 
            to be able to express and do whatever we want. Let's do it!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/nila" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/nila" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:nila@example.com" 
              className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>If you're a web surfer, I work on AI-powered applications and make rad, fun little projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 