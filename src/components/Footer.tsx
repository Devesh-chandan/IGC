// src/components/Footer.tsx

import { Leaf, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-12">
        <div className="max-w-7xl mx-auto">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold">GreenCity AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering cities with AI-powered sustainability solutions for a greener future.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Connect + Theme Toggle */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Connect</h3>

              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-sm mb-2">Theme</h3>
                <ThemeToggle />
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} GreenCity AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
