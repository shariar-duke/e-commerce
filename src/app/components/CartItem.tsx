'use client'
import { RootState } from '@/app/store'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function CartItem() {
  const items = useSelector((state: RootState) => state.cart.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <Link href={'/cart'}>
      <div className='relative cursor-pointer'>
        <ShoppingCart className='w-8 h-8 text-gray-700' />

        {totalItems > 0 && (
          <span className='absolute -top-1 -right-2 w-6 h-6 flex items-center justify-center text-xs font-bold text-white bg-blue-600 rounded-full'>
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  )
}
