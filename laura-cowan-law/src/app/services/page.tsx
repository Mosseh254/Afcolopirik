import React from 'react'
import Link from 'next/link'
import { Shield, Users, FileText, Calculator, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Legal Services | Estate Planning & Business Law | Laura E. Cowan",
  description: "Expert estate planning and business law services in NYC. Wills, trusts, business formation, tax strategy, and more. Attorney & CPA with 15+ years experience.",
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 animate-fade-in">
              Legal Services
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal guidance for life's most important decisions, backed by dual expertise as attorney and CPA.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Estate Planning */}
            <div id="estate-planning" className="scroll-mt-20">
              <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-white p-4 rounded-xl mr-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-neutral-900">Estate Planning</h2>
                    <p className="text-neutral-600">Protect what you've built</p>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  Comprehensive estate planning that safeguards your family's future and honors your legacy. I combine legal expertise with tax strategy to maximize protection and minimize burden.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Core Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Wills & Testament Drafting</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Revocable & Irrevocable Trusts</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Powers of Attorney</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Healthcare Directives</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Estate Tax Planning</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Asset Protection Strategies</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Charitable Giving Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">What Sets Me Apart</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Dual attorney/CPA expertise for comprehensive tax planning</li>
                      <li>• Plain-language explanations of complex legal concepts</li>
                      <li>• Ongoing support as your life circumstances change</li>
                      <li>• Coordination with your existing financial advisors</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Investment Range</h4>
                    <div className="space-y-2 text-neutral-700">
                      <p><strong>Basic Will Package:</strong> $1,500 - $2,500</p>
                      <p><strong>Comprehensive Estate Plan:</strong> $3,500 - $7,500</p>
                      <p><strong>Complex Trust Planning:</strong> $7,500 - $15,000+</p>
                    </div>
                    <p className="text-sm text-neutral-600 mt-3">
                      Final pricing depends on complexity and specific needs. Free consultation to discuss your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Law */}
            <div id="business-law" className="scroll-mt-20">
              <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-white p-4 rounded-xl mr-6">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-neutral-900">Business Law</h2>
                    <p className="text-neutral-600">Build what's next</p>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  Strategic business law guidance that grows with your entrepreneurial vision. From startup formation to ongoing compliance, I provide the legal foundation for business success.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Core Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Business Entity Formation (LLC, Corp, Partnership)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Operating Agreements & Bylaws</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Contract Drafting & Review</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Business Tax Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Employment Law Compliance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Intellectual Property Basics</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Business Succession Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">My Business Approach</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Entrepreneur-friendly guidance from someone who gets it</li>
                      <li>• Practical solutions that scale with your business</li>
                      <li>• Proactive compliance to prevent costly mistakes</li>
                      <li>• Integrated legal and tax planning for maximum efficiency</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Investment Range</h4>
                    <div className="space-y-2 text-neutral-700">
                      <p><strong>Business Formation:</strong> $1,200 - $3,000</p>
                      <p><strong>Operating Agreement:</strong> $2,000 - $5,000</p>
                      <p><strong>Ongoing Legal Support:</strong> $350/hour or $2,500/month retainer</p>
                    </div>
                    <p className="text-sm text-neutral-600 mt-3">
                      Many services available as flat fees. Free consultation to discuss your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              How We Work Together
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A clear, straightforward process designed to make complex legal matters manageable and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Clock className="h-8 w-8 text-primary mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">1. Initial Consultation</h3>
              <p className="text-neutral-600">
                Free 30-minute discussion to understand your needs and explain how I can help.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <FileText className="h-8 w-8 text-secondary mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">2. Strategy & Planning</h3>
              <p className="text-neutral-600">
                Develop a customized legal strategy with clear timeline and transparent pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <div className="bg-accent/10 p-3 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">3. Implementation</h3>
              <p className="text-neutral-600">
                Execute your legal strategy with regular updates and clear communication throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-elegant mb-6 mx-auto w-fit">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">4. Ongoing Support</h3>
              <p className="text-neutral-600">
                Continued guidance as your life and business evolve, ensuring your legal foundation stays strong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Areas of Specialization
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Deep expertise in the legal areas that matter most to families and entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Wills & Trusts</h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive estate planning documents tailored to your family's unique needs and goals.
              </p>
            </div>

            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-secondary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Calculator className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Tax Strategy</h3>
              <p className="text-neutral-600 text-sm">
                Integrated legal and tax planning to minimize your family's and business's tax burden.
              </p>
            </div>

            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-accent/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Business Formation</h3>
              <p className="text-neutral-600 text-sm">
                Strategic entity selection and formation to protect your business and optimize operations.
              </p>
            </div>

            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Asset Protection</h3>
              <p className="text-neutral-600 text-sm">
                Sophisticated strategies to protect your wealth from potential creditors and litigation.
              </p>
            </div>

            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-secondary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Contract Law</h3>
              <p className="text-neutral-600 text-sm">
                Expert contract drafting, review, and negotiation to protect your business interests.
              </p>
            </div>

            <div className="bg-gradient-warm p-6 rounded-2xl shadow-elegant text-center">
              <div className="bg-accent/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Business Succession</h3>
              <p className="text-neutral-600 text-sm">
                Planning for the future of your business, whether through family transfer or sale.
              </p>
            </div>
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
            Every great legal strategy starts with a conversation. Let's discuss your specific needs and how I can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/about">
                Learn More About Laura
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}