import React from 'react'
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiKubernetes 
} from 'react-icons/si'
import { motion } from 'framer-motion'

const skills = [
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' }
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
              <skill.icon className="text-5xl mb-4 text-primary" />
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}