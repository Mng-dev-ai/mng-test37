import React from 'react'
import { 
  Layers, 
  Code, 
  Server, 
  Terminal, 
  Container, 
  Cloud 
} from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { icon: Layers, name: 'React' },
  { icon: Code, name: 'TypeScript' },
  { icon: Server, name: 'Node.js' },
  { icon: Terminal, name: 'Python' },
  { icon: Container, name: 'Docker' },
  { icon: Cloud, name: 'Kubernetes' }
]

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies & Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <skill.icon className="w-12 h-12 mb-4 text-primary stroke-1" />
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}