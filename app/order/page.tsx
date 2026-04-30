'use client'

import { GlassCard } from '@/components/glass-card'
import { GlassButton } from '@/components/glass-button'
import { useCart } from '@/components/cart-provider'
import { useToast } from '@/components/toast-provider'
import { AIRecommendations } from '@/components/ai-recommendations'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function OrderPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart()
  const { showToast } = useToast()
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const isDeliveryFormValid = customerInfo.name.trim() && customerInfo.phone.trim() && customerInfo.address.trim()

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (items.length === 0) {
      showToast({
        title: 'Empty Cart',
        description: 'Please add items before placing an order',
        type: 'error',
      })
      return
    }

    if (!customerInfo.name.trim()) {
      showToast({
        title: 'Name Required',
        description: 'Please enter your name',
        type: 'error',
      })
      return
    }

    if (!customerInfo.phone.trim()) {
      showToast({
        title: 'Phone Required',
        description: 'Please enter your phone number',
        type: 'error',
      })
      return
    }

    if (!customerInfo.address.trim()) {
      showToast({
        title: 'Address Required',
        description: 'Please enter your delivery address',
        type: 'error',
      })
      return
    }

    // Simulate order placement
    showToast({
      title: 'Order Placed!',
      description: `Your order of ₹${total} has been received. We'll prepare it soon!`,
      type: 'success',
    })
    
    clearCart()
    setOrderPlaced(true)
    setCustomerInfo({ name: '', phone: '', email: '', address: '' })
    
    setTimeout(() => setOrderPlaced(false), 3000)
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Order</h1>
          <p className="text-lg text-foreground/70">Review your items and complete checkout</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* AI Recommendations */}
            {items.length > 0 && <AIRecommendations />}

            {items.length === 0 ? (
              <GlassCard className="p-12 text-center space-y-6">
                <ShoppingCart className="w-16 h-16 mx-auto text-foreground/40" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
                  <p className="text-foreground/70 mb-6">Add some delicious items from our menu</p>
                  <Link href="/menu">
                    <GlassButton variant="primary">Continue Shopping</GlassButton>
                  </Link>
                </div>
              </GlassCard>
            ) : (
              <div className="space-y-4 pt-4">
                {items.map((item) => (
                  <GlassCard key={item.id} className="p-4 flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-accent font-bold">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-white/20 dark:hover:bg-black/20 rounded-md transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-white/20 dark:hover:bg-black/20 rounded-md transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <p className="text-lg font-bold text-accent">₹{item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-500/20 rounded-md transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary & Checkout */}
          <div className="space-y-6">
            {/* Summary - Sticky */}
            {items.length > 0 && (
              <GlassCard className="p-6 space-y-4 sticky top-24 z-50 shadow-lg">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>
                
                <div className="space-y-2 border-t border-white/20 pt-4">
                  <div className="flex justify-between text-foreground/70 text-sm">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70 text-sm">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-accent">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  disabled={!isDeliveryFormValid}
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-200 ${
                    isDeliveryFormValid
                      ? 'bg-accent hover:bg-amber-600 text-white cursor-pointer'
                      : 'bg-gray-400 dark:bg-gray-600 text-white/50 cursor-not-allowed'
                  }`}
                >
                  {isDeliveryFormValid ? 'Place Order' : 'Complete Delivery Details'}
                </button>

                {!isDeliveryFormValid && (
                  <p className="text-xs text-yellow-600 dark:text-yellow-400 text-center">
                    Please fill in all delivery details below
                  </p>
                )}
              </GlassCard>
            )}

            {/* Checkout Form */}
            {items.length > 0 && (
              <GlassCard className="p-6 space-y-4 border-2 border-accent/30" id="checkout-form">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-foreground">Delivery Details</h2>
                  <p className="text-sm text-foreground/70">Complete the form below to proceed with your order</p>
                </div>
                
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="glass-input dark:glass-input-dark w-full px-4 py-2"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="glass-input dark:glass-input-dark w-full px-4 py-2"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="glass-input dark:glass-input-dark w-full px-4 py-2"
                      placeholder="Your email (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="glass-input dark:glass-input-dark w-full px-4 py-2 h-24 resize-none"
                      placeholder="Your complete delivery address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isDeliveryFormValid}
                    className={`w-full font-bold py-3 rounded-lg transition-all duration-200 ${
                      isDeliveryFormValid
                        ? 'bg-accent hover:bg-amber-600 text-white cursor-pointer'
                        : 'bg-gray-400 dark:bg-gray-600 text-white/50 cursor-not-allowed'
                    }`}
                  >
                    Place Order
                  </button>
                </form>

                {!isDeliveryFormValid && (
                  <p className="text-xs text-red-500 dark:text-red-400 text-center bg-red-500/10 p-2 rounded">
                    Please fill in Name, Phone, and Delivery Address to place your order
                  </p>
                )}
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
