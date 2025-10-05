'use client'

import { Product } from '@/app/lib/type'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../ProductCard'

type TopProductsContainerProps = {
  products: Product[]
}

export default function TopProductsContainer({ products }: TopProductsContainerProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6'>
        {products.slice(0, 5).map((p) => (
          <div key={p.id} className='animate-pulse bg-gray-100 h-64 rounded-lg'></div>
        ))}
      </div>
    )
  }

  return (
    <div className='mt-6'>
      <h2 className='text-2xl font-bold mb-4'>Top Products</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
