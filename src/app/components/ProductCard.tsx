'use client'
import { Product } from '@/app/lib/type'
import { RootState } from '@/app/store'
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import { addToCart } from '../store/features/cartSlice'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, mainImg, id, price, oldPrice, category } = product

  const dispatch = useDispatch<AppDispatch>()

  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isInCart = cartItems.some((item) => item.id === id)

  const handleAddToCart = () => {
    console.log('This function is beign called')
    dispatch(addToCart({ ...product, quantity: 1 }))

    console.log('Is state updated')
  }

  return (
    <article className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
      <div className='relative w-full h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
        <Link
          href={`/product/${id}${category ? `?category=${category}` : ''}`}
          className='relative block w-full h-full'
        >
          <Image
            src={mainImg || '/images/product-img/product1.jpg'}
            alt={name || 'Product Image'}
            quality={75}
            sizes='(min-width: 640px) 33vw, (min-width: 1280px) 25vw, 50vw'
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />

          <div className='absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10' />
        </Link>

        <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
          <button
            className='bg-white p-2.5 rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors'
            aria-label='Add to wishlist'
          >
            <Heart className='w-5 h-5' />
          </button>
          <button
            className='bg-white p-2.5 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transition-colors'
            aria-label='Quick view'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          </button>
        </div>

        <div className='absolute bottom-0 left-0 right-0 translate-y-0 transition-transform duration-300'>
          {isInCart ? (
            <Link href='/cart'>
              <button className='w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all'>
                <ShoppingCart className='w-5 h-5' />
                View In Cart
              </button>
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all'
            >
              <ShoppingCart className='w-5 h-5' />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className='flex flex-col flex-grow p-4'>
        {category && (
          <span className='text-xs font-medium text-blue-600 uppercase tracking-wide mb-2'>
            {category}
          </span>
        )}

        <Link href={`/product/${id}${category ? `?category=${category}` : ''}`}>
          <h2 className='text-base font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors leading-snug'>
            {name}
          </h2>
        </Link>

        <div className='mt-auto flex items-center justify-between'>
          <div className='flex flex-col'>
            {oldPrice && oldPrice > price && (
              <del className='text-sm text-gray-400'>৳{oldPrice.toLocaleString('en-IN')}</del>
            )}
            <span className='text-xl font-bold text-gray-900'>
              ৳{price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
