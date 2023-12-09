import React, { useState } from 'react';
import * as C from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

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

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {langue.map((item, index) => (
          <SwiperSlide key={index}>
            <C.ContainerImg>
              <p>{item}</p>
            </C.ContainerImg>
          </SwiperSlide>
        ))}
      </Swiper>
    </C.Container>
  );
}
