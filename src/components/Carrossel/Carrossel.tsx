import React, { useState } from 'react';
import * as C from './styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

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
      <C.Title>Algumas tecnologias usadas em projetos</C.Title>

      <C.Carrossel>
        <C.Left />
        <Splide
          options={{
            type: 'loop',
            gap: '2rem',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 5,
            focus: 'center',
            breakpoints: {
              1420: {
                perPage: 4,
                gap: '1.5rem',
              },
              1235: {
                perPage: 3,
                gap: '1.3rem',
              },
              900: {
                perPage: 2,
                // gap: '2px',
              },
              800: {
                perPage: 2,
                gap: '13rem',
              },
            },
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {langue.map((item, index) => (
            <SplideSlide key={index}>
              <C.CarrosselComponent>
                <p>{item}</p>
              </C.CarrosselComponent>
            </SplideSlide>
          ))}
        </Splide>
        <C.Right />
      </C.Carrossel>
    </C.Container>
  );
}
