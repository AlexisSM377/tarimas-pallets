// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export const SwipperHero = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper max-w-7xl mx-auto">
            <SwiperSlide>
                <Image
                    src="/cover.jpg"
                    alt="Madera de alta calidad"
                    fill
                    className="rounded-2xl"

                />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    )
}