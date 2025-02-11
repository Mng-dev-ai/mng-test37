import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Full Stack Software Engineer
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Crafting elegant solutions and transforming ideas into scalable digital experiences.
          </p>
          <div className="flex space-x-4">
            <Button size="lg">
              <Send className="mr-2" /> Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" /> Download CV
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img 
            src="https://picsum.photos/seed/engineer/500/500" 
            alt="Software Engineer" 
            className="rounded-full w-80 h-80 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}