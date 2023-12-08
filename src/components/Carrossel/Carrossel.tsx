import React, { useState } from 'react';
import * as C from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carrossel() {
  const [langue, setLangue] = useState([
    'TypeScript',
    'JavaScript',
    'ReactJS',
    'ReactNative',
    'NextJS',
    'Python',
    'Node',
    'NestJs',
    'Prisma',
    'HTML',
    'CSS',
  ]);

  return (
    <C.Container>
      <C.Title>Tecnologias mais usadas em projetos</C.Title>
      {/* <C.Carrossel>
        {langue.map((item: string, index) => (
          <p key={index}>{item}</p>
        ))}
      </C.Carrossel> */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </C.Container>
  );
}
