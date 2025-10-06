'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Product } from '../lib/type'
import CartItem from './CartItem'
import CustomModal from './CustomModal'

export default function Header() {
  const categories = [
    { name: 'Electronics', href: '#' },
    { name: 'Fashion', href: '#' },
    { name: 'Home', href: '#' },
    { name: 'Books', href: '#' },
    { name: 'Toys', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Beauty', href: '#' },
    { name: 'Gadgets', href: '#' },
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchQuery.trim().length === 0) {
        setSuggestions([])
        return
      }

      setIsLoading(true)
      try {
        const res = await fetch(`/api/products/search?name=${encodeURIComponent(searchQuery)}`)
        const data = await res.json()
        setSuggestions(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }, 500)

    return () => clearTimeout(handler)
  }, [searchQuery])

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='w-full md:w-[94vw] mx-auto flex flex-wrap items-center justify-between px-4 py-4 gap-4'>
        <Link href='/' className='flex-shrink-0'>
          <h2 className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent'>
            ShopNest
          </h2>
        </Link>

        <div className='flex-1 min-w-[200px] max-w-xl lg:max-w-2xl relative'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search products...'
            className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <div className='absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto z-50'>
              {isLoading ? (
                <div className='px-4 py-2 text-gray-400'>Searching...</div>
              ) : suggestions.length > 0 ? (
                suggestions.map((item) => (
                  <Link
                    href={`/product/${item.id}`}
                    key={item.id}
                    className='flex items-center gap-4 px-4 py-3 hover:bg-blue-50 transition-all border-b last:border-none'
                  >
                    <Image
                      src={item.mainImg}
                      alt={item.name}
                      height={44}
                      width={44}
                      className='object-cover rounded-md border'
                    />

                    <div className='flex-1 min-w-0'>
                      <h3 className='text-sm font-semibold text-gray-800 truncate'>{item.name}</h3>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.productDescription}
                      </p>
                      <div className='mt-1 text-lg font-bold text-blue-600'>
                        ৳{item.price.toLocaleString()}{' '}
                        <span className='text-gray-400 line-through ml-1 text-xs'>
                          ৳{item.oldPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className='px-4 py-2 text-gray-400'>No results found</div>
              )}
            </div>
          )}
        </div>

        <nav className='flex flex-wrap items-center gap-4'>
          <Link
            href='#'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors hidden md:block'
          >
            Shop
          </Link>
          <CustomModal />
          <CartItem />
        </nav>
      </div>

      <div className='bg-gray-50 sticky top-[64px] z-40'>
        <div className='max-w-[94vw] mx-auto overflow-x-auto flex items-center gap-4 px-4 py-3'>
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className='flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md text-sm text-gray-700 hover:text-blue-600 font-medium transition-all whitespace-nowrap'
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
