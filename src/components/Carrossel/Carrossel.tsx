import React, { useEffect, useState } from 'react';
import * as C from './styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import imgData from '../../data/dataImg.json';
import carouselConfig from '../config/carousel-config';

interface imgProp {
  id: string;
  alt: string;
  url: string;
}

export default function Carrossel() {
  const [dataImg, setDataImg] = useState<imgProp[]>(imgData);

  return (
    <C.Container>
      <C.Title>Algumas tecnologias usadas em projetos</C.Title>
      <C.Carrossel>
        <C.Left />
        <Splide options={carouselConfig} extensions={{ AutoScroll }}>
          {dataImg.map((data) => (
            <SplideSlide key={data.id}>
              <C.CarrosselComponent>
                <Image
                  src={data.url}
                  alt={data.alt}
                  width={0}
                  height={0}
                  sizes='100vw'
                  quality={100}
                  // layout='responsive'
                  objectFit='center'
                  style={{
                    width: '100%',
                    height: '100%',
                    margin: '10px',
                  }}
                />
              </C.CarrosselComponent>
            </SplideSlide>
          ))}
        </Splide>
        <C.Right />
      </C.Carrossel>
    </C.Container>
  );
}
