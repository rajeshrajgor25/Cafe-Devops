'use client'

import { GlassCard } from '@/components/glass-card'
import { GlassButton } from '@/components/glass-button'
import { useToast } from '@/components/toast-provider'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      showToast('Message sent successfully! We&apos;ll get back to you soon.', 'success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - with proper spacing */}
        <div className="text-center mb-16 pt-12 md:pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/70">We&apos;d love to hear from you. Visit us or send us a message.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <GlassCard className="p-8 space-y-4 text-center">
            <MapPin className="w-10 h-10 mx-auto text-accent" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">123 Coffee Street</p>
              <p className="text-foreground/70">Premium City, PC 12345</p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-center">
            <Phone className="w-10 h-10 mx-auto text-accent" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">(555) 123-4567</p>
              <p className="text-sm text-foreground/60 mt-2">Monday - Friday, 9am - 6pm</p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-center">
            <Mail className="w-10 h-10 mx-auto text-accent" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70 break-all">hello@brevitacafe.com</p>
              <p className="text-sm text-foreground/60 mt-2">We&apos;ll respond within 24 hours</p>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="glass-input dark:glass-input-dark w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="glass-input dark:glass-input-dark w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="glass-input dark:glass-input-dark w-full resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </GlassCard>

          {/* Hours & Map */}
          <div className="space-y-8">
            {/* Hours */}
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-foreground/80">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-foreground/80">
                  <span>Saturday</span>
                  <span className="font-semibold">7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-foreground/80">
                  <span>Sunday</span>
                  <span className="font-semibold">7:00 AM - 8:00 PM</span>
                </div>
              </div>
            </GlassCard>

            {/* Google Maps Embed */}
            <GlassCard className="p-0 overflow-hidden">
              <iframe
                width="100%"
                height="300"
                style={{ border: 'none' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a229b34d5f9%3A0x1c99b3a0e5e5e5e5!2s123%20Coffee%20St!5e0!3m2!1sen!2sus!4v1234567890"
              ></iframe>
            </GlassCard>
          </div>
        </div>

        {/* Special Events CTA */}
        <GlassCard className="p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Special Events & Private Bookings</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Interested in hosting a private event or coffee tasting at Brevita Café? Contact us to discuss your special occasion.
          </p>
          <GlassButton variant="primary">Book an Event</GlassButton>
        </GlassCard>
      </div>
    </div>
  )
}
