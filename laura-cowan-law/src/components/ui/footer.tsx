import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

const footerNavigation = {
  services: [
    { name: 'Estate Planning', href: '/services#estate-planning' },
    { name: 'Business Law', href: '/services#business-law' },
    { name: 'Wills & Trusts', href: '/services#wills-trusts' },
    { name: 'Business Formation', href: '/services#business-formation' },
  ],
  company: [
    { name: 'About Laura', href: '/about' },
    { name: 'Who I Work With', href: '/who-i-work-with' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Testimonials', href: '/testimonials' },
  ],
  resources: [
    { name: 'Blog + Events', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book a Call', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                  Laura E. Cowan
                </h3>
                <p className="text-neutral-300 mb-4">
                  Attorney & CPA
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Trusted legal guidance for families and founders. Helping you navigate estate planning and business law with confidence, compassion, and clarity.
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-neutral-300">500+ Satisfied Clients</span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-neutral-300">
                  <Phone className="h-4 w-4 text-primary-light" />
                  <span>(212) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-300">
                  <Mail className="h-4 w-4 text-primary-light" />
                  <span>hello@lauraecowan.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-300">
                  <MapPin className="h-4 w-4 text-primary-light" />
                  <span>New York City, NY</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-600 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Laura E. Cowan Law. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-neutral-500">
                Legal Clarity for Life and Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}