import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu />
          </Button>
          <Button>Hire Me</Button>
        </div>
      </div>
    </header>
  )
}