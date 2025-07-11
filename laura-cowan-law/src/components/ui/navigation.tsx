"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Laura' },
  { href: '/services', label: 'Services' },
  { href: '/who-i-work-with', label: 'Who I Work With' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/blog', label: 'Blog + Events' },
  { href: '/contact', label: 'Contact' }
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl font-serif font-semibold text-primary group-hover:text-primary-light transition-colors">
              Laura E. Cowan
            </div>
            <div className="hidden sm:block text-sm text-neutral-600 font-medium">
              Attorney & CPA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary/5",
                  pathname === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-neutral-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Phone className="h-4 w-4" />
              <span>(212) 555-0123</span>
            </div>
            <Button variant="elegant" size="default" asChild>
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="lg:hidden">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 mt-4">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Phone className="h-4 w-4" />
                  <span>(212) 555-0123</span>
                </div>
                <Button variant="elegant" size="sm" asChild>
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}