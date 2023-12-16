import React, { useEffect, useState } from 'react';
import * as C from './styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import imgData from '../../data/dataImg.json';
import carouselConfig from '../config/carousel-config';

export default function CarrosselFooter() {
  const footerCarousel = [
    'Inovação',
    'Flexibilidade',
    'Portabilidade',
    'Eficiência',
    'Escalabilidade',
    'Integração',
    'Segurança',
    'Usabilidade',
    'Confiabilidade',
    'Colaboração',
    'Experiência do Usuário',
    'Desempenho',
    'Automatização',
    'Personalização',
  ];

  return (
    <C.Container>
      <C.Carrossel>
        <Splide options={carouselConfig} extensions={{ AutoScroll }}>
          {footerCarousel.map((data, index) => (
            <SplideSlide key={index}>
              <C.CarrosselComponent>
                <p>{data}</p>
              </C.CarrosselComponent>
            </SplideSlide>
          ))}
        </Splide>
      </C.Carrossel>
    </C.Container>
  );
}
