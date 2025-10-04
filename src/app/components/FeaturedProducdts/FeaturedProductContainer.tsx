'use client'

import { Product } from '@/app/lib/type'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../ProductCard'

type FeaturedProductContainerProps = {
  products: Product[]
}

export default function FeaturedProductContainer({ products }: FeaturedProductContainerProps) {
  return (
    <div className='mt-6'>
      <h2 className='text-2xl font-bold mb-4'>Featured Products</h2>

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
