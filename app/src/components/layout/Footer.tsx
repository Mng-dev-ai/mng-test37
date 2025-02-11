import React from 'react'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail 
} from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 John Doe. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}