import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import ButtonGlogal from '../Button/Button';

export default function SectionPlataform() {
  return (
    <C.Container>
      <C.Main>
        <C.Title>Multi-Platoforma</C.Title>
        <C.Content>
          Atendemos e desenvolvemos para qualquer platoforna do
          mercado
        </C.Content>
        <C.SubTitle>
          Multi serviços: mobile, web, desktopt, e outros
        </C.SubTitle>
        <ButtonGlogal
          text='Venha conhecer +'
          font_size='1.7rem'
          background={false}
        />
      </C.Main>
      <C.ImageContainer>
        <Image
          src='https://i.imgur.com/jjd41Ct.png'
          alt='blank-plataformas-os'
          width={0}
          height={0}
          sizes='100vw'
          quality={100}
          // layout='responsive'
          // objectFit='center'
          style={{
            width: '100%',
            height: '100%',
            padding: '5px 20px',
          }}
        />
      </C.ImageContainer>
    </C.Container>
  );
}
