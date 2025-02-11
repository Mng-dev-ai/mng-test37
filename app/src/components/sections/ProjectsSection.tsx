import React from 'react'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Chatbot Platform',
    description: 'Full-stack AI chatbot with advanced natural language processing.',
    technologies: ['React', 'Node.js', 'OpenAI'],
    image: 'https://picsum.photos/seed/project1/400/300',
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'E-commerce Microservices',
    description: 'Scalable e-commerce platform using microservices architecture.',
    technologies: ['Kubernetes', 'Docker', 'TypeScript'],
    image: 'https://picsum.photos/seed/project2/400/300',
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'WebSocket-powered collaborative editing platform.',
    technologies: ['React', 'WebSockets', 'GraphQL'],
    image: 'https://picsum.photos/seed/project3/400/300',
    githubLink: '#',
    liveLink: '#'
  }
]

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-background border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-accent/10 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2" /> GitHub
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2" /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}