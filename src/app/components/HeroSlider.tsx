'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HeroSlider() {
  return (
    <div className='relative w-full h-[400px] sm:h-[500px] md:h-[500px]  2xl:h-[700px] mt-4'>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect='fade'
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className='h-full'
      >
        <SwiperSlide className='relative h-full rounded-2xl overflow-hidden'>
          <Image
            src='/images/slider1.jpg'
            alt='Hero Slide 1'
            fill
            className='object-cover object-top'
          />
        </SwiperSlide>

        <SwiperSlide className='relative h-full rounded-2xl overflow-hidden'>
          <Image
            src='/images/slider2.jpg'
            alt='Hero Slide 2'
            fill
            className='object-cover object-top'
          />
        </SwiperSlide>

        <SwiperSlide className='relative h-full rounded-2xl overflow-hidden'>
          <Image
            src='/images/slider3.jpg'
            alt='Hero Slide 3'
            fill
            className='object-cover object-top'
          />
        </SwiperSlide>

        <SwiperSlide className='relative h-full rounded-2xl overflow-hidden'>
          <Image
            src='/images/slider4.jpg'
            alt='Hero Slide 4'
            fill
            className='object-cover object-top'
          />
        </SwiperSlide>

        <SwiperSlide className='relative h-full rounded-2xl overflow-hidden'>
          <Image
            src='/images/slider5.jpg'
            alt='Hero Slide 5'
            fill
            className='object-cover object-top'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
