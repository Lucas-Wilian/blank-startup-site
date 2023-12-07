import React from 'react';
import * as C from './styled';

export default function Section() {
  return (
    <C.Container>
      <C.Text>Softwares modernos para sua empresa</C.Text>
      <C.SectionButton>
        {/* <ButtonGlogal>
            <p>Começar </p>
          </ButtonGlogal> */}
        <C.ButtonUnderline>Cadastrar para noticias</C.ButtonUnderline>
        <C.Button>Começar </C.Button>
      </C.SectionButton>
    </C.Container>
  );
}
