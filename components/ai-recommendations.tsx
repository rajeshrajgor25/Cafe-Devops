'use client'

import { useCart } from './cart-provider'
import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

interface RecommendedItem {
name: string
image: string
reason: string
}

const allMenuItems = [
{ id: 1, name: 'Espresso', image: '/images/espresso.jpg', category: 'coffee', price: 120 },
{ id: 2, name: 'Cappuccino', image: '/images/cappuccino.jpg', category: 'coffee', price: 180 },
{ id: 3, name: 'Latte', image: '/images/latte.jpg', category: 'coffee', price: 180 },
{ id: 4, name: 'Cold Brew', image: '/images/cold-brew.jpg', category: 'coffee', price: 150 },

{ id: 5, name: 'White Creamy Pasta', image: '/images/white-cream-pasta.jpg', category: 'pasta', price: 280 },
{ id: 6, name: 'Red Mayo Pasta', image: '/images/red-mayo-pasta.jpg', category: 'pasta', price: 280 },
{ id: 7, name: 'Cheese Pasta', image: '/images/cheese-pasta.jpg', category: 'pasta', price: 300 },
{ id: 8, name: 'Chicken Pasta', image: '/images/chicken-pasta.jpg', category: 'pasta', price: 320 },

{ id: 9, name: 'Margherita', image: '/images/margherita-pizza.jpg', category: 'pizza', price: 250 },
{ id: 10, name: 'Cheese N Corn', image: '/images/cheese-corn-pizza.jpg', category: 'pizza', price: 280 },
{ id: 11, name: 'Farm Fresh', image: '/images/farm-fresh-pizza.jpg', category: 'pizza', price: 280 },
{ id: 12, name: 'Veg Supreme', image: '/images/veg-supreme-pizza.jpg', category: 'pizza', price: 320 },

{ id: 15, name: 'Garlic Bread', image: '/images/garlic-bread.jpg', category: 'sides', price: 150 },
]

const comboMap: Record<string, string[]> = {
coffee: ['Garlic Bread', 'Cheese Pasta'],
pizza: ['Cold Brew', 'Garlic Bread'],
pasta: ['Cold Brew', 'Espresso'],
sides: ['Cappuccino']
}

export function AIRecommendations() {
const { items } = useCart()
const [recommendations, setRecommendations] = useState<RecommendedItem[]>([])
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
if (!items.length) {
setRecommendations([])
setIsVisible(false)
return
}

const hour = new Date().getHours()
const cartNames = items.map(i => i.name.toLowerCase())

const cartCategories = new Set<string>()
items.forEach(item => {
  const found = allMenuItems.find(m => m.name === item.name)
  if (found) cartCategories.add(found.category)
})

const scoreMap = new Map<string, number>()

const addScore = (name: string, score: number) => {
  if (cartNames.includes(name.toLowerCase())) return
  scoreMap.set(name, (scoreMap.get(name) || 0) + score)
}

cartCategories.forEach(cat => {
  comboMap[cat]?.forEach(item => addScore(item, 3))
})


if (hour < 12) {
  addScore('Cappuccino', 2)
  addScore('Espresso', 1)
} else if (hour < 18) {
  addScore('Espresso', 2)
  addScore('Cold Brew', 1)
} else {
  addScore('Cold Brew', 2)
  addScore('Veg Supreme', 2)
}

if (!cartCategories.has('coffee')) addScore('Latte', 2)
if (!cartCategories.has('sides')) addScore('Garlic Bread', 2)

const final = Array.from(scoreMap.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 2)
  .map(([name]) => {
    const found = allMenuItems.find(m => m.name === name)
    return {
      name,
      image: found?.image || '',
      reason: "Recommended just for you 🔥"
    }
  })

setRecommendations(final)
setIsVisible(final.length > 0)

}, [items])

if (!isVisible || !recommendations.length) return null

return ( <div className="bg-gradient-to-r from-amber-50/60 to-orange-50/60 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200/50 dark:border-amber-900/30 rounded-xl p-4 backdrop-blur-md shadow-sm">

  <div className="flex items-center gap-2 mb-3">
    <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
    <p className="font-semibold text-amber-900 dark:text-amber-100">
      Recommended for you 🔥
    </p>
  </div>

  <div className="space-y-2">
    {recommendations.map((rec, idx) => (
      <div 
        key={idx} 
        className="flex items-center gap-3 bg-white/70 dark:bg-black/30 rounded-lg p-3 hover:scale-[1.02] transition-all"
      >
        <div className="relative w-12 h-12 rounded overflow-hidden">
          <Image src={rec.image} alt={rec.name} fill className="object-cover" />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-sm">{rec.name}</p>
          <p className="text-xs opacity-70">{rec.reason}</p>
        </div>
      </div>
    ))}
  </div>
</div>

)
}
