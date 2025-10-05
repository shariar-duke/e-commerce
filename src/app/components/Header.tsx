import { Search } from 'lucide-react'
import Link from 'next/link'
import CartItem from './CartItem'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-[96vw] mx-auto flex items-center justify-between px-6 py-4'>
        <Link
          href='/'
          className='text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors'
        >
          MyShop
        </Link>

        <div className='flex-1 max-w-xl mx-6 relative'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search products...'
            className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
          />
        </div>

        <nav className='flex items-center space-x-6'>
          <Link
            href='#'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
          >
            Shop
          </Link>
          <Link
            href='#'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
          >
            About
          </Link>

          <CartItem />
        </nav>
      </div>
    </header>
  )
}
