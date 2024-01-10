import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import Img1 from '../Assets/Capturar1.png';
import Img2 from '../Assets/Capturar2.png';
import Img3 from '../Assets/Capturar3.png';
import Img4 from '../Assets/Capturar4.png';

export default function SectionProjects() {
  return (
    <C.Container>
      <C.Title>Nossos principais projetos</C.Title>
      <C.GridProjects>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img1}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img3}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img4}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img1}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img2}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img3}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
        <C.ContainerImg>
          <Image
            quality={100}
            src={Img4}
            alt='test'
            style={{ width: '100%', height: '100%' }}
          />
        </C.ContainerImg>
      </C.GridProjects>
      <C.BackgroundContainer />
    </C.Container>
  );
}
