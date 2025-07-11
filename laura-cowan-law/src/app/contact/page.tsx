"use client"

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Note: This would normally be exported from the page component, but we'll keep it simple for now
// export const metadata: Metadata = {
//   title: "Contact Laura E. Cowan | Book a Consultation | NYC Attorney & CPA",
//   description: "Schedule a consultation with Laura E. Cowan, trusted NYC attorney and CPA. Get expert guidance on estate planning and business law. Call (212) 555-0123 or book online.",
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to an API endpoint
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Thank You!
            </h2>
            <p className="text-neutral-600 mb-6">
              Your message has been received. I'll get back to you within 24 hours to schedule your consultation.
            </p>
            <Button 
              variant="elegant" 
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 animate-fade-in">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your legal needs? I'm here to provide the guidance and support you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Phone</h3>
                    <p className="text-neutral-600 mb-2">(212) 555-0123</p>
                    <p className="text-sm text-neutral-500">Available Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Email</h3>
                    <p className="text-neutral-600 mb-2">hello@lauraecowan.com</p>
                    <p className="text-sm text-neutral-500">I respond to all emails within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Office</h3>
                    <p className="text-neutral-600 mb-2">123 Main Street, Suite 400<br />New York, NY 10001</p>
                    <p className="text-sm text-neutral-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Office Hours</h3>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-warm p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Initial Consultation</h3>
                <p className="text-neutral-600 mb-4">
                  Your first 30-minute consultation is complimentary. We'll discuss your needs and how I can help you achieve your goals.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• No obligation or pressure</li>
                  <li>• Clear explanation of next steps</li>
                  <li>• Transparent fee structure</li>
                  <li>• Available in-person or virtually</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                  Schedule Your Consultation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="(212) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="business-law">Business Law</option>
                      <option value="wills-trusts">Wills & Trusts</option>
                      <option value="business-formation">Business Formation</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="general-consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      How Can I Help You?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your situation and what you'd like to accomplish..."
                    />
                  </div>

                  <Button type="submit" variant="elegant" size="lg" className="w-full">
                    Send Message & Book Consultation
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-neutral-600 text-center">
                    By submitting this form, you agree to our privacy policy. Your information is secure and will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Here are some frequently asked questions about working with me.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">What should I bring to our first meeting?</h3>
              <p className="text-neutral-600">
                Just bring yourself and any specific questions or documents you think might be relevant. I'll guide you through what we need to discuss and can advise on any additional documents for future meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">How much do your services cost?</h3>
              <p className="text-neutral-600">
                My fee structure is transparent and tailored to your specific needs. During our initial consultation, I'll provide a clear estimate based on the scope of work required. I offer both flat-fee and hourly arrangements depending on the service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Do you offer virtual consultations?</h3>
              <p className="text-neutral-600">
                Yes! I offer both in-person and virtual consultations to accommodate your schedule and comfort level. Many of my services can be handled entirely remotely if preferred.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">How quickly can we get started?</h3>
              <p className="text-neutral-600">
                I typically have availability for initial consultations within 1-2 business days. For urgent matters, I can often accommodate same-day or next-day meetings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}