import React from 'react';
import * as C from './styled';
import ButtonGlogal from '../Button/Button';
import ParticlesBg from '../ParticlesBg/ParticlesBg';

export default function Section() {
  return (
    <C.Container>
      <ParticlesBg />
      <C.Text>Softwares modernos para sua empresa</C.Text>
      <C.SectionButton>
        <ButtonGlogal
          text='Cadastrar para noticias'
          font_size='1.7rem'
          background={false}
        />
        <ButtonGlogal
          text='Começar'
          font_size='1.7rem'
          background={true}
        />
      </C.SectionButton>
    </C.Container>
  );
}
