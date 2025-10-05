'use client'

import ProductCard from '@/app/components/ProductCard'
import { Product } from '@/app/lib/type'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type RelatedProductPropsTypes = {
  relatedProducts: Product[]
}

export default function RelatedRroduct({ relatedProducts }: RelatedProductPropsTypes) {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Related Products</h2>

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
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
