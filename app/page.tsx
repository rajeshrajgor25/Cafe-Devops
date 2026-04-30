'use client'

import { GlassCard } from '@/components/glass-card'
import { GlassButton } from '@/components/glass-button'
import Link from 'next/link'
import { Coffee, Leaf, Clock, Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const features = [
  {
    icon: Coffee,
    title: 'Premium Beans',
    description: 'Sourced from the finest coffee-growing regions worldwide',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Ethically sourced and environmentally conscious',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Roasted fresh every morning for peak flavor',
  },
  {
    icon: Star,
    title: 'Expert Craft',
    description: 'Master baristas with passion for perfection',
  },
]

interface FeaturedItem {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Simple tomato sauce and cheese perfection',
    price: 250,
    image: '/images/margherita-pizza.jpg',
  },
  {
    id: 2,
    name: 'White Creamy Pasta',
    description: 'Rich Alfredo sauce with fresh parmesan',
    price: 280,
    image: '/images/white-cream-pasta.jpg',
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'Classic espresso and steamed milk blend',
    price: 180,
    image: '/images/cappuccino.jpg',
  },
]

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Welcome to <span className="gradient-accent">Brevita Café</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80">
                  Experience the finest specialty coffee, authentic pizzas, fresh pasta, and more. Crafted with passion and precision. Every visit creates a memory.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/menu">
                  <GlassButton variant="primary">Explore Menu</GlassButton>
                </Link>
                <Link href="/contact">
                  <GlassButton variant="secondary">Visit Us</GlassButton>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <div className="glass-card dark:glass-card-dark p-0 overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/images/premium-coffee-experience.jpg"
                    alt="Premium Coffee Experience"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-xl font-semibold text-foreground">Premium Coffee Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 dark:bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Brevita?</h2>
            <p className="text-lg text-foreground/70">Committed to excellence in every aspect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <GlassCard key={idx} className="p-6 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Favorites</h2>
            <p className="text-lg text-foreground/70">Try our most popular items - Coffee, Pizza & Pasta</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <GlassCard key={item.id} hover className="p-0 overflow-hidden space-y-0">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">₹{item.price}</span>
                    <Link href="/order">
                      <button className="bg-accent hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <GlassButton variant="primary">View Full Menu</GlassButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready for Your Perfect Cup?</h2>
            <p className="text-lg text-foreground/80">
              Visit Brevita Café today and discover why coffee lovers choose us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <GlassButton variant="primary">Find Us</GlassButton>
              </Link>
              <Link href="/menu">
                <GlassButton variant="secondary">See Our Menu</GlassButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
