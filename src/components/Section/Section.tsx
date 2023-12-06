import React from 'react';
import * as C from './styled';
import ButtonGlogal from '../Button/Button';

export default function Section() {
  return (
    <C.Container>
      <C.Text>Softwares modernos para sua empresa</C.Text>
      <C.SectionButtonGlogals>
        <C.ButtonGlogalSection>
          {/* <ButtonGlogal>
            <p>Começar </p>
          </ButtonGlogal> */}
          <ButtonGlogal>Cadastrar para noticias</ButtonGlogal>
        </C.ButtonGlogalSection>
      </C.SectionButtonGlogals>
    </C.Container>
  );
}
