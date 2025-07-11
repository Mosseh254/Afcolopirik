import React from 'react'
import Link from 'next/link'
import { GraduationCap, Award, Users, Heart, CheckCircle, ArrowRight, Scale, Calculator, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Laura E. Cowan | Attorney & CPA | NYC Legal Services",
  description: "Meet Laura E. Cowan, trusted NYC attorney and CPA with 15+ years experience in estate planning and business law. Learn about her approach, credentials, and commitment to client success.",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 animate-fade-in">
              About Laura
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A trusted partner in life's most important legal decisions, combining the expertise of an attorney with the strategic insight of a CPA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Professional Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center shadow-elegant">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-neutral-600 italic">Professional headshot placeholder</p>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-8">
                Your Advocate for What Matters Most
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  I'm Laura E. Cowan, and I believe that legal services should be both expert and empowering. For over 15 years, I've had the privilege of helping families and entrepreneurs navigate some of life's most important decisions with confidence and clarity.
                </p>
                
                <p>
                  What sets me apart is my dual expertise as both an attorney and a CPA. This unique combination allows me to see the complete picture—not just the legal implications of your decisions, but the tax and financial strategies that can maximize your outcomes. Whether you're planning your estate or building your business, I bring a holistic perspective that saves you time, money, and stress.
                </p>
                
                <p>
                  My approach is rooted in the belief that exceptional legal guidance should feel personal, not corporate. I take the time to understand your unique situation, your goals, and your concerns. Then, I translate complex legal concepts into clear, actionable strategies that make sense for your life.
                </p>
                
                <p>
                  Every client deserves to feel heard, understood, and empowered. That's the foundation of everything I do.
                </p>
              </div>

              <div className="mt-8">
                <Button variant="elegant" size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="py-24 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Credentials & Education
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Combining rigorous legal training with advanced accounting expertise to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legal Education */}
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <div className="bg-primary text-white p-4 rounded-xl mx-auto w-fit mb-6">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Legal Education</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>J.D., Columbia Law School</li>
                <li>Order of the Coif</li>
                <li>Columbia Law Review</li>
                <li>New York State Bar</li>
              </ul>
            </div>

            {/* Accounting Credentials */}
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <div className="bg-secondary text-white p-4 rounded-xl mx-auto w-fit mb-6">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">CPA Credentials</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>M.S., Accounting, NYU Stern</li>
                <li>Certified Public Accountant</li>
                <li>AICPA Member</li>
                <li>Tax Strategy Specialization</li>
              </ul>
            </div>

            {/* Professional Recognition */}
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <div className="bg-accent text-white p-4 rounded-xl mx-auto w-fit mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Recognition</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>500+ Satisfied Clients</li>
                <li>5.0 Average Rating</li>
                <li>Rising Star, Super Lawyers</li>
                <li>NYC Bar Association</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Approach & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              My Approach & Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide every client relationship and legal strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Core Values */}
            <div>
              <h3 className="text-3xl font-serif font-semibold text-neutral-900 mb-8">Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">Compassion</h4>
                    <p className="text-neutral-600">Every legal matter involves real people with real concerns. I approach each situation with empathy and understanding.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">Clarity</h4>
                    <p className="text-neutral-600">Legal matters shouldn't be mysterious. I explain everything in plain language so you can make informed decisions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">Confidence</h4>
                    <p className="text-neutral-600">You should feel secure in your legal strategies. I provide the expertise and support to move forward with confidence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Style */}
            <div>
              <h3 className="text-3xl font-serif font-semibold text-neutral-900 mb-8">How I Work</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Listen First</h4>
                  <p className="text-neutral-600">Before proposing any solutions, I take the time to understand your unique situation, goals, and concerns.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Educate Always</h4>
                  <p className="text-neutral-600">Knowledge is power. I ensure you understand your options and the implications of each decision.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Execute Expertly</h4>
                  <p className="text-neutral-600">With clear direction established, I handle all the details with precision and care, keeping you informed every step of the way.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Support Continuously</h4>
                  <p className="text-neutral-600">Legal planning isn't a one-time event. I'm here for ongoing support as your life and business evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8">
            Beyond the Office
          </h2>
          <div className="text-lg text-neutral-700 leading-relaxed space-y-6">
            <p>
              When I'm not helping clients navigate complex legal matters, you'll find me exploring NYC's incredible food scene, practicing yoga, or volunteering with local literacy programs. I believe that a well-rounded life makes for better legal counsel—the more connected I am to my community, the better I can serve the people within it.
            </p>
            <p>
              I'm passionate about making legal services more accessible and less intimidating. That's why I regularly speak at community events and write about legal topics in everyday language. Everyone deserves to understand their legal rights and options.
            </p>
            <p className="text-xl font-medium text-neutral-900">
              "The law should serve people, not the other way around."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how my dual expertise as attorney and CPA can help you achieve your goals with confidence and clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="elegant" size="xl" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="xl" asChild>
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