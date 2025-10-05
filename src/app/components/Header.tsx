import { Search } from 'lucide-react'
import Link from 'next/link'
import CartItem from './CartItem'

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

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='w-[94vw] mx-auto flex flex-wrap items-center justify-between px-4 py-4 gap-4'>
        <Link href='/' className=' flex-shrink-0'>
          <h2 className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-0'>
            ShopNest
          </h2>
        </Link>

        <div className='flex-1 min-w-[200px] max-w-xl relative'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search products...'
            className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
          />
        </div>

        <nav className='flex flex-wrap items-center gap-4'>
          <Link
            href='#'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors hidden md:block'
          >
            Shop
          </Link>
          <Link
            href='#'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors hidden md:block'
          >
            About
          </Link>

          <CartItem />
        </nav>
      </div>

      <div className='bg-gray-50  sticky top-[64px] z-40'>
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
