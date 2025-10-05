import Image from 'next/image'
import Link from 'next/link'

export default function EmptyCart() {
  return (
    <div className='flex justify-center items-center mt-16'>
      <div className='flex flex-col items-center text-center space-y-4'>
        <Image
          src='/images/emptyCart.png'
          alt='Empty Cart'
          height={212}
          width={212}
          className='animate-slow-bounce'
        />
        <h2 className='text-2xl font-bold text-blue-900'>Your Cart is Empty</h2>
        <p className='text-gray-600 text-sm max-w-xs'>
          Looks like you haven not added any products yet. Start shopping to fill your cart!
        </p>

        <Link href='/'>
          <button className='mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer'>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
