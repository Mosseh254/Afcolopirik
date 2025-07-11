import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Award, Heart, CheckCircle, Star, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 animate-fade-in text-balance">
              Trusted Legal Guidance for{' '}
              <span className="text-primary">Families</span> and{' '}
              <span className="text-secondary">Founders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up text-pretty">
              Whether you're protecting what you've built or building what's next, I help you navigate estate planning and business law with confidence, compassion, and clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button variant="elegant" size="xl" asChild>
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <div className="flex items-center space-x-2 text-neutral-600">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-medium">500+ Satisfied Clients</span>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-neutral-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5.0</div>
                <div className="text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From protecting your family's future to launching your business dreams, I provide expert guidance tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Estate Planning */}
            <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant hover:shadow-warm transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white p-3 rounded-xl mr-4 group-hover:bg-primary-light transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-neutral-900">Estate Planning</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Protect what matters most with comprehensive estate planning that secures your family's future and honors your legacy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  Wills & Trusts
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  Estate Tax Planning
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  Powers of Attorney
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  Asset Protection
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link href="/services#estate-planning">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Business Law */}
            <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant hover:shadow-warm transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-secondary text-white p-3 rounded-xl mr-4 group-hover:bg-secondary-light transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-neutral-900">Business Law</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Build your business on solid legal foundations with strategic guidance that grows with your entrepreneurial vision.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  Business Formation
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  Contract Review
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  Tax Strategy
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  Compliance Guidance
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link href="/services#business-law">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Who I Work With
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              I specialize in serving NYC-based professionals, families, and entrepreneurs who value thoughtful, personalized legal guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Heart className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">NYC Families</h3>
              <p className="text-neutral-600">
                Busy professionals and growing families who want peace of mind knowing their loved ones are protected.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Users className="h-12 w-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Women & Couples</h3>
              <p className="text-neutral-600">
                Forward-thinking individuals and partnerships prioritizing smart financial and legal planning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Award className="h-12 w-12 text-accent mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Entrepreneurs & Creatives</h3>
              <p className="text-neutral-600">
                Business founders and creative professionals building something meaningful and lasting.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/who-i-work-with">
                Learn More About My Clients
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-neutral-600">
              Real experiences from families and founders I've had the privilege to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-2xl shadow-elegant">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6 italic">
                "Laura made estate planning feel approachable and empowering. Her guidance gave our family incredible peace of mind."
              </blockquote>
              <div className="font-semibold text-neutral-900">Sarah & Michael Chen</div>
              <div className="text-neutral-600">Young Family, Manhattan</div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl shadow-elegant">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6 italic">
                "As both attorney and CPA, Laura's dual expertise saved us time, money, and countless headaches. Truly invaluable."
              </blockquote>
              <div className="font-semibold text-neutral-900">Jessica Rodriguez</div>
              <div className="text-neutral-600">Creative Agency Founder</div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl shadow-elegant">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6 italic">
                "Laura's warmth and expertise made complex legal matters feel manageable. She truly cares about her clients."
              </blockquote>
              <div className="font-semibold text-neutral-900">David Thompson</div>
              <div className="text-neutral-600">Tech Entrepreneur</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" asChild>
              <Link href="/testimonials">
                Read More Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step toward securing your family's future or building your business dreams. Let's discuss how I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">
                Book a Call Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-lg">(212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-lg">hello@lauraecowan.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-serif font-medium text-white">
            Legal Clarity for Life and Business
          </p>
        </div>
      </section>
    </div>
  )
}
