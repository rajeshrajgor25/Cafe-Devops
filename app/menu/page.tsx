'use client'

import { useState } from 'react'
import { GlassCard } from '@/components/glass-card'
import Image from 'next/image'
import { useCart } from '@/components/cart-provider'
import Link from 'next/link'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: 'coffee' | 'pasta' | 'pizza' | 'sides'
  image: string
}

const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: 'Espresso',
    description: 'Pure, bold, and concentrated',
    price: 120,
    category: 'coffee',
    image: '/images/espresso.jpg',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Classic espresso and steamed milk',
    price: 180,
    category: 'coffee',
    image: '/images/cappuccino.jpg',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Smooth and creamy espresso drink',
    price: 180,
    category: 'coffee',
    image: '/images/latte.jpg',
  },
  {
    id: 4,
    name: 'Cold Brew',
    description: 'Smooth, refreshing, and full-bodied',
    price: 150,
    category: 'coffee',
    image: '/images/cold-brew.jpg',
  },

  // Pasta
  {
    id: 5,
    name: 'White Creamy Pasta',
    description: 'Rich Alfredo sauce with fresh parmesan',
    price: 280,
    category: 'pasta',
    image: '/images/white-cream-pasta.jpg',
  },
  {
    id: 6,
    name: 'Red Mayo Pasta',
    description: 'Tangy tomato and mayo-based sauce',
    price: 280,
    category: 'pasta',
    image: '/images/red-mayo-pasta.jpg',
  },
  {
    id: 7,
    name: 'Cheese Pasta',
    description: 'Loaded with melted mozzarella and cheddar',
    price: 300,
    category: 'pasta',
    image: '/images/cheese-pasta.jpg',
  },
  {
    id: 8,
    name: 'Chicken Pasta',
    description: 'Grilled chicken with creamy sauce',
    price: 320,
    category: 'pasta',
    image: '/images/chicken-pasta.jpg',
  },

  // Pizza
  {
    id: 9,
    name: 'Margherita',
    description: 'Simple tomato sauce and cheese',
    price: 250,
    category: 'pizza',
    image: '/images/margherita-pizza.jpg',
  },
  {
    id: 10,
    name: 'Cheese N Corn',
    description: 'Sweet corn, cheese, and sauce',
    price: 280,
    category: 'pizza',
    image: '/images/cheese-corn-pizza.jpg',
  },
  {
    id: 11,
    name: 'Farm Fresh',
    description: 'Onion, capsicum, and tomato',
    price: 280,
    category: 'pizza',
    image: '/images/farm-fresh-pizza.jpg',
  },
  {
    id: 12,
    name: 'Veg Supreme',
    description: 'Onion, capsicum, tomato, mushroom, corn, olive',
    price: 320,
    category: 'pizza',
    image: '/images/veg-supreme-pizza.jpg',
  },
  {
    id: 13,
    name: 'Paneer Tikka',
    description: 'Paneer cubes with tandoor seasoning',
    price: 300,
    category: 'pizza',
    image: '/images/paneer-pizza.jpg',
  },
  {
    id: 14,
    name: 'Schezwan Veg',
    description: 'Marinated onions, capsicum, and jalapeno',
    price: 290,
    category: 'pizza',
    image: '/images/schezwan-pizza.jpg',
  },

  // Sides
  {
    id: 15,
    name: 'Garlic Bread',
    description: 'Crispy bread with garlic butter and herbs',
    price: 150,
    category: 'sides',
    image: '/images/garlic-bread.jpg',
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<'coffee' | 'pasta' | 'pizza' | 'sides' | 'all'>('all')
  const { addItem } = useCart()

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'sides', label: 'Sides' },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
            Our Menu
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our delicious selection of specialty coffee, fresh pasta, authentic pizza, and more
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <GlassCard key={item.id} hover className="p-0 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>

                {/* Price and Button */}
                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-2xl font-bold text-accent">₹{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-accent hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <GlassCard className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Ready to Order?</h2>
            <p className="text-foreground/70">
              Add your favorite items to the cart and proceed to checkout for a seamless ordering experience.
            </p>
            <Link href="/order">
              <button className="bg-accent hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                View Cart
              </button>
            </Link>
          </GlassCard>

          <GlassCard className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Special Orders?</h2>
            <p className="text-foreground/70">
              Have a special request or dietary requirements? Contact us and we&apos;ll make it happen!
            </p>
            <Link href="/contact">
              <button className="bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 text-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Contact Us
              </button>
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
