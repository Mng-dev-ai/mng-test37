import React from 'react'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, Tech Innovations Inc.',
    quote: 'John is an exceptional engineer who consistently delivers high-quality, scalable solutions.',
    avatar: 'https://picsum.photos/seed/avatar1/200/200'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, StartUp Hub',
    quote: 'Working with John transformed our development process. His expertise is unmatched.',
    avatar: 'https://picsum.photos/seed/avatar2/200/200'
  }
]

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-background border rounded-xl p-6 flex flex-col items-start"
            >
              <Quote className="text-primary mb-4 text-4xl" />
              <p className="text-lg italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}