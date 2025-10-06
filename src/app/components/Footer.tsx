import { Search } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#F9FAFB] pt-8 pb-6'>
      <div className='max-w-screen-3xl mx-auto px-10'>
        <div className='flex flex-col md:flex-row justify-between border-b border-gray-300 pb-6'>
          <h2 className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-0'>
            ShopNest
          </h2>

          <div className='flex flex-col md:text-right space-y-1 text-gray-600'>
            <p>High Quality, Great Prices, Happy Shoppers</p>
            <p>Stay Connected & Shop Smart</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6'>
          <div>
            <p className='text-lg font-semibold mb-2 text-black'>Categories</p>
            <div className='space-y-1 text-gray-600'>
              <p className='cursor-pointer hover:text-blue-600 transition'>{`Men's Fashion`}</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>{`Women's Fashion`}</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Kids</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Accessories</p>
            </div>
          </div>

          <div>
            <p className='text-lg font-semibold mb-2 text-black'>Company</p>
            <div className='space-y-1 text-gray-600 '>
              <p className='cursor-pointer hover:text-blue-600 transition'>About Us</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Contact</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Careers</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>FAQs</p>
            </div>
          </div>

          <div>
            <p className='text-lg font-semibold mb-2 text-black'>Explore</p>
            <div className='space-y-1 text-gray-600'>
              <p className='cursor-pointer hover:text-blue-600 transition'>New Arrivals</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Best Sellers</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Gadgets & Tech</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Toys & Games</p>
            </div>
          </div>

          <div>
            <p className='text-lg font-semibold mb-2 text-black'>Policies</p>
            <div className='space-y-1 text-gray-600'>
              <p className='cursor-pointer hover:text-blue-600 transition'>Privacy & Data</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Terms of Service</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Shipping Info</p>
              <p className='cursor-pointer hover:text-blue-600 transition'>Returns & Refunds</p>
            </div>
          </div>

          <div>
            <p className='text-lg font-semibold mb-2 text-black'>Newsletter</p>
            <p className='text-gray-600 mb-2'>Subscribe for updates on deals & offers</p>
            <div className='relative'>
              <input
                type='text'
                placeholder='Your email address'
                className='w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:border-blue-500 transition text-gray-400  dark:text-gray-400'
              />
              <Search
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400  dark:text-gray-400'
                size={18}
              />
            </div>
          </div>
        </div>

        <div className='mt-6 text-center text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
