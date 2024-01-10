import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import img1 from '../assents/Capturar1.png';
import img2 from '../assents/Capturar2.png';
import img3 from '../assents/Capturar3.png';
import img4 from '../assents/Capturar4.png';

export default function SectionProjects() {
  return (
    <C.Container>
      <C.Title>Nossos principais projetos</C.Title>
      <C.GridProjects>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img1}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img3}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img4}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img1}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img3}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={img4}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
      </C.GridProjects>
      <C.BackgroundContainer />
    </C.Container>
  );
}
