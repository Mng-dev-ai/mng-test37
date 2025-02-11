import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { motion } from 'framer-motion'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-accent/10 rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Let's Work Together
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea 
              placeholder="Your Message" 
              className="min-h-[150px]"
            />
            <div className="text-center">
              <Button size="lg">
                <Send className="mr-2" /> Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}