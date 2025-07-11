import React from 'react'
import Link from 'next/link'
import { Star, Quote, ArrowRight, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Client Testimonials | Laura E. Cowan Law | NYC Attorney & CPA Reviews",
  description: "Read testimonials from satisfied clients of Laura E. Cowan, trusted NYC attorney and CPA. 500+ clients served with 5-star ratings in estate planning and business law.",
}

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    title: "Young Family, Manhattan",
    rating: 5,
    text: "Laura made estate planning feel approachable and empowering. Her guidance gave our family incredible peace of mind. As new parents, we were overwhelmed by all the decisions we needed to make, but Laura walked us through every step with patience and clarity. Her dual expertise as both attorney and CPA meant we got comprehensive advice that addressed both legal and financial considerations.",
    service: "Estate Planning",
    date: "November 2023"
  },
  {
    id: 2,
    name: "Jessica Rodriguez",
    title: "Creative Agency Founder",
    rating: 5,
    text: "As both attorney and CPA, Laura's dual expertise saved us time, money, and countless headaches. Truly invaluable. She helped me structure my creative agency in a way that protects my personal assets while optimizing our tax situation. I can't imagine working with separate professionals for legal and accounting matters when Laura provides such integrated expertise.",
    service: "Business Formation",
    date: "October 2023"
  },
  {
    id: 3,
    name: "David Thompson",
    title: "Tech Entrepreneur",
    rating: 5,
    text: "Laura's warmth and expertise made complex legal matters feel manageable. She truly cares about her clients. When I was launching my tech startup, Laura not only helped with the legal formation but also provided strategic guidance on equity structures and tax planning that positioned us for future investment rounds.",
    service: "Business Law",
    date: "September 2023"
  },
  {
    id: 4,
    name: "Maria Santos",
    title: "Small Business Owner, Brooklyn",
    rating: 5,
    text: "The contract review Laura provided saved my business from a potentially disastrous partnership agreement. Her attention to detail is remarkable, and she explained every clause in terms I could understand. Having a lawyer who also understands the financial implications of legal decisions is a game-changer.",
    service: "Contract Review",
    date: "August 2023"
  },
  {
    id: 5,
    name: "Robert & Jennifer Kim",
    title: "Executive Couple, Upper East Side",
    rating: 5,
    text: "We've worked with several attorneys over the years, but Laura stands out for her comprehensive approach and genuine care. She created a sophisticated estate plan that addressed our complex financial situation while keeping our children's best interests at heart. The ongoing support she provides gives us confidence as our circumstances change.",
    service: "Estate Planning",
    date: "July 2023"
  },
  {
    id: 6,
    name: "Amanda Foster",
    title: "Fashion Designer & Entrepreneur",
    rating: 5,
    text: "Laura understood the unique challenges of my creative business and helped structure everything to protect my intellectual property while minimizing taxes. Her advice has been instrumental in scaling my business profitably. She doesn't just handle legal matters—she's become a trusted business advisor.",
    service: "Business Law & IP",
    date: "June 2023"
  },
  {
    id: 7,
    name: "Dr. James Wellington",
    title: "Medical Practice Owner",
    rating: 5,
    text: "The asset protection strategies Laura implemented have given me peace of mind in my high-liability profession. Her ability to explain complex legal concepts in simple terms made the entire process smooth and stress-free. I recommend her to all my physician colleagues.",
    service: "Asset Protection",
    date: "May 2023"
  },
  {
    id: 8,
    name: "Lisa Chang",
    title: "Non-Profit Executive",
    rating: 5,
    text: "Laura's charitable giving strategies helped us maximize our impact while providing significant tax benefits. She coordinated beautifully with our financial advisor and accountant to create a comprehensive plan. Her knowledge of both legal and tax implications is invaluable for sophisticated planning.",
    service: "Charitable Planning",
    date: "April 2023"
  }
]

const stats = [
  { number: "500+", label: "Satisfied Clients" },
  { number: "5.0", label: "Average Rating" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Retention" }
]

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 animate-fade-in">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from families and founders who have trusted me with their most important legal matters.
            </p>
          </div>

          {/* Overall Rating */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-elegant">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-neutral-900">5.0</span>
              <span className="text-neutral-600">from 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These testimonials reflect the trust and results that define every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-warm transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-semibold text-neutral-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600 mb-2">{testimonial.title}</div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Why Clients Trust Laura
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The qualities and approach that consistently earn 5-star reviews and long-term client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Heart className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Genuine Care</h3>
              <p className="text-neutral-600">
                Every client relationship is built on genuine understanding and empathy for your unique situation and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Users className="h-12 w-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Dual Expertise</h3>
              <p className="text-neutral-600">
                As both attorney and CPA, I provide integrated legal and tax guidance that saves time and optimizes outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <Award className="h-12 w-12 text-accent mx-auto" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Proven Results</h3>
              <p className="text-neutral-600">
                15+ years of experience and 500+ satisfied clients demonstrate consistent delivery of exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Professional Recognition
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Awards and recognition from legal and accounting organizations reflect professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Rising Star</h3>
              <p className="text-neutral-600 text-sm">Super Lawyers</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-secondary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Member</h3>
              <p className="text-neutral-600 text-sm">NYC Bar Association</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-accent/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">CPA</h3>
              <p className="text-neutral-600 text-sm">AICPA Member</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Top Rated</h3>
              <p className="text-neutral-600 text-sm">Client Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Client Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Recent Client Highlights
            </h2>
            <p className="text-xl text-neutral-600">
              A few recent examples of how I've helped clients achieve their goals.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-neutral-700 italic mb-4">
                    "Laura's estate planning expertise helped us save over $200,000 in potential estate taxes while ensuring our children's future is secure. Her approach was both sophisticated and clearly explained."
                  </blockquote>
                  <div className="font-semibold text-neutral-900">Executive Couple</div>
                  <div className="text-neutral-600">Complex Estate Planning - $2.5M Estate</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                  <Quote className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <blockquote className="text-lg text-neutral-700 italic mb-4">
                    "The business structure Laura created saved us $50,000 in taxes in our first year and positioned us perfectly for our Series A funding round. Her dual expertise made all the difference."
                  </blockquote>
                  <div className="font-semibold text-neutral-900">Tech Startup Founder</div>
                  <div className="text-neutral-600">Business Formation & Tax Planning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Join My Satisfied Clients
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the same level of care, expertise, and results that have earned these testimonials. Let's discuss how I can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}