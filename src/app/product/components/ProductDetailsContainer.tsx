'use client'
import { Product } from '@/app/lib/type'
import { AppDispatch, RootState } from '@/app/store'
import { addToCart } from '@/app/store/features/cartSlice'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetailsSection from './ProductDetailsSection'
type ProductDetailsContainerProps = {
  product: Product
}
export default function ProductDetailsContainer({ product }: ProductDetailsContainerProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(32)
  const images = [product.mainImg, ...product.relatedImg]
  const sizes = product.sizes

  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isInCart = cartItems.some((item) => item.id === product.id)

  const dispatch = useDispatch<AppDispatch>()

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const availableProduct = (size = 32) => {
    const selectedSize = product.sizes.find((item) => item.size === size)
    return selectedSize ? selectedSize.quantity : 0
  }

  const handleAddToCart = () => {
    console.log('This function is beign called')
    dispatch(addToCart({ ...product, quantity: 1 }))

    console.log('Is state updated')
  }

  return (
    <div className='min-h-screen'>
      <div className='max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className='space-y-4'>
            <div className='relative bg-white rounded-2xl overflow-hidden shadow-lg group'>
              <Image
                src={images[selectedImage]}
                alt='Product'
                width={600}
                height={500}
                className='w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <button
                onClick={handlePrevImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-100 transition-all opacity-0 group-hover:opacity-100'
              >
                <ChevronLeft className='w-6 h-6 text-blue-900' />
              </button>
              <button
                onClick={handleNextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-100 transition-all opacity-0 group-hover:opacity-100'
              >
                <ChevronRight className='w-6 h-6 text-blue-900' />
              </button>
            </div>
            <div className='grid grid-cols-4 gap-3'>
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden transition-all cursor-pointer ${
                    selectedImage === index
                      ? 'ring-2 ring-blue-900 ring-offset-2'
                      : 'hover:opacity-75'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className='w-full aspect-square object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          <div className='space-y-6'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold text-blue-900'>{product.name}</h1>
              <p className='text-lg text-blue-900'>{product.productDescription}</p>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-blue-400' />
                ))}
              </div>
              <span className='text-sm text-blue-600'>(128 reviews)</span>
            </div>

            <div className='flex items-baseline gap-4'>
              <span className='text-4xl font-extrabold text-blue-900'>${product.price}</span>
              <span className='text-2xl text-blue-400 line-through'>${product.oldPrice}</span>
              {product.oldPrice > product.price && (
                <span className='bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full'>
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                </span>
              )}
            </div>
            <div className='space-y-5'>
              <div>
                <label className='block text-sm font-semibold text-blue-900 mb-3'>
                  Select Size
                </label>
                <div className='grid grid-cols-6 gap-2'>
                  {sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(item.size)}
                      className={`py-3 px-4 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                        selectedSize === item.size
                          ? 'bg-blue-900 text-white shadow-md'
                          : 'bg-white text-blue-900 border border-blue-300 hover:border-blue-700'
                      }`}
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-2'>
              {availableProduct(selectedSize) > 0 ? (
                <span className='inline-block bg-blue-100 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm'>
                  {availableProduct(selectedSize)} in stock
                </span>
              ) : (
                <span className='inline-block bg-gray-200 text-gray-500 text-sm font-semibold px-3 py-1 rounded-full'>
                  Out of stock
                </span>
              )}
            </div>

            <div className='flex gap-3 pt-4'>
              {isInCart ? (
                <Link href='/cart' className='flex-1'>
                  <button
                    onClick={handleAddToCart}
                    className='cursor-pointer w-full  bg-blue-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                  >
                    <ShoppingCart className='w-5 h-5' />
                    View In Cart
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className='cursor-pointer flex-1 bg-blue-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              )}

              <button className='cursor-pointer bg-white border-2 border-blue-900 text-blue-900 p-4 rounded-xl hover:bg-blue-50 transition-all'>
                <Heart className='w-6 h-6' />
              </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6'>
              <div className='flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-300'>
                <Truck className='w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-semibold text-sm text-gray-900'>Free Shipping</h3>
                  <p className='text-xs text-gray-600 mt-0.5'>On orders over $50</p>
                </div>
              </div>

              <div className='flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-300'>
                <Shield className='w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-semibold text-sm text-gray-900'>Secure Payment</h3>
                  <p className='text-xs text-gray-600 mt-0.5'>100% protected</p>
                </div>
              </div>

              <div className='flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-300'>
                <RotateCcw className='w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-semibold text-sm text-gray-900'>Easy Returns</h3>
                  <p className='text-xs text-gray-600 mt-0.5'>30-day policy</p>
                </div>
              </div>
            </div>

            <ProductDetailsSection
              details={product.productDetails}
              description={product.productDescription}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
