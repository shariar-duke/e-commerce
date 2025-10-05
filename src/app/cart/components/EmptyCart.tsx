import Image from 'next/image'

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
      </div>
    </div>
  )
}
