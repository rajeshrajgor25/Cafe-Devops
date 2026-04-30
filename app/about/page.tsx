'use client'

import { GlassCard } from '@/components/glass-card'
import { GlassButton } from '@/components/glass-button'
import Link from 'next/link'
import { Heart, Award, Users, Zap, Coffee, Globe, Leaf } from 'lucide-react'
import React from 'react'

const values = [
  {
    icon: Heart,
    title: 'Quality First',
    description: 'We obsess over every detail in coffee, pizza, pasta, and every dish we serve.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning recipes and premium sourced ingredients from around the world.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Creating a welcoming space for food and coffee lovers to gather.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly blending traditional recipes with modern culinary techniques.',
  },
]

interface TeamMember {
  id: number
  name: string
  role: string
  icon: React.ReactNode
  bio: string
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'Founder & Head Chef',
    icon: <Coffee className="w-12 h-12 text-accent" />,
    bio: 'Culinary master with 25 years of Italian expertise',
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Head Barista',
    icon: <Globe className="w-12 h-12 text-accent" />,
    bio: 'Award-winning barista sourcing premium beans',
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    role: 'Pizza & Pasta Master',
    icon: <Zap className="w-12 h-12 text-accent" />,
    bio: 'Traditional Italian recipes with modern flair',
  },
  {
    id: 4,
    name: 'Alex Thompson',
    role: 'Customer Experience',
    icon: <Users className="w-12 h-12 text-accent" />,
    bio: 'Ensures every customer leaves with a smile',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-12 md:pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Launched in December 2025, Brevita Café is dedicated to serving the finest specialty coffee, authentic pizzas, fresh pasta, and delicious sides with passion and precision.
          </p>
        </div>

        {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="space-y-6">
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Journey Begins</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Starting in December 2025, Brevita Café was founded with a bold vision: to create the ultimate culinary destination combining premium specialty coffee with authentic Italian-inspired cuisines. Our founder, Marco Rossi, brought decades of experience from Rome&apos;s finest establishments.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Today, Brevita Café is your go-to place for exceptional coffee, freshly made pizzas, handcrafted pasta, and more—all crafted with passion and precision.
                </p>
              </GlassCard>
            </div>

            <GlassCard className="p-8 text-center">
              <div className="mb-4"><Leaf className="w-16 h-16 mx-auto text-accent" /></div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Rooted in Passion</h3>
              <p className="text-foreground/70">Growing from a dream to a destination</p>
            </GlassCard>
          </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-foreground/70">What drives us every single day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <GlassCard key={idx} className="p-6 text-center space-y-3">
                  <Icon className="w-12 h-12 mx-auto text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-foreground/70">Passionate people behind every perfect cup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <GlassCard key={member.id} hover className="p-6 text-center space-y-4">
                <div className="flex justify-center">{member.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                  <p className="text-sm text-foreground/70 mt-2">{member.bio}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
          </div>

          <div className="space-y-4">
            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">Dec 2025</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Grand Opening</h3>
                  <p className="text-foreground/70">Launched Brevita Café with coffee, pizza, pasta, and culinary excellence</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">Q1 2026</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Menu Expansion</h3>
                  <p className="text-foreground/70">Introduced new specialty pizzas, pasta varieties, and seasonal beverages</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">Q2 2026</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Recognition</h3>
                  <p className="text-foreground/70">Became the preferred destination for food and coffee lovers</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">Q3 2026</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Digital Platform Launch</h3>
                  <p className="text-foreground/70">Launched our beautiful new website with online ordering and delivery</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA Section */}
        <GlassCard className="p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience Brevita Today</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join our community of coffee and food lovers. Discover why Brevita Café is more than just a café—it&apos;s your culinary destination for premium coffee, authentic pizzas, fresh pasta, and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/menu">
              <GlassButton variant="primary">View Menu</GlassButton>
            </Link>
            <Link href="/contact">
              <GlassButton variant="secondary">Visit Us</GlassButton>
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
