'use client'
import { AppDispatch, RootState } from '@/app/store'
import { addToCart, removeFromCart } from '@/app/store/features/cartSlice'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'

export default function CartContainer() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, totalPrice } = useSelector((state: RootState) => state.cart)

  const handleIncrease = (id: number) => {
    const item = items.find((i) => i.id === id)
    if (item) dispatch(addToCart({ ...item, quantity: 1 }))
  }

  const handleDecrease = (id: number) => {
    const item = items.find((i) => i.id === id)
    if (item) {
      if (item.quantity === 1) {
        dispatch(removeFromCart(id))
      } else {
        dispatch(addToCart({ ...item, quantity: -1 }))
      }
    }
  }

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id))
  }

  if (items.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>Shopping Cart</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 space-y-6'>
          {items.map((item) => (
            <div
              key={item.id}
              className='flex gap-4 items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-200'
            >
              <Image
                src={item.mainImg || '/images/product-img/product1.jpg'}
                alt={item.name}
                width={120}
                height={120}
                className='rounded-xl object-cover'
              />

              <div className='flex-grow'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>{item.name}</h3>
                    <p className='text-gray-600 mt-1'>৳{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className='p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 cursor-pointer'
                  >
                    <Trash2 className='w-4 h-4' />
                  </button>
                </div>

                <div className='flex items-center justify-between mt-4'>
                  <div className='flex items-center gap-3'>
                    <span className='text-sm text-gray-600'>Quantity:</span>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        disabled={item.quantity <= 1}
                        className='p-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer'
                      >
                        <Minus className='w-4 h-4' />
                      </button>
                      <span className='w-8 text-center font-medium'>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className='p-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-20 cursor-pointer'
                      >
                        <Plus className='w-4 h-4' />
                      </button>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='text-lg font-semibold text-gray-900'>
                      ৳{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='lg:col-span-1'>
          <div className='bg-white rounded-xl shadow-md p-6 sticky top-8'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Order Summary</h2>

            <div className='space-y-3 mb-6'>
              <div className='flex justify-between text-gray-600'>
                <span>Shipping</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Tax (5%)</span>
                <span>৳{(totalPrice * 0.05).toLocaleString('en-IN')}</span>
              </div>
              <div className='border-t pt-3'>
                <div className='flex justify-between text-lg font-semibold text-gray-900'>
                  <span>Total</span>
                  <span>৳{(totalPrice * 1.05).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <button className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mb-4 cursor-pointer'>
              Proceed to Checkout
            </button>

            <button
              onClick={() => window.history.back()}
              className='w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200 font-medium cursor-pointer'
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
