import React from 'react';
import * as C from './styled';
import Button from '../Button/Button';

export default function Section() {
  return (
    <C.Container>
      <C.Text>Softwares modernos para sua empresa</C.Text>
      <C.SectionButtons>
        <C.ButtonSection>
          {/* <Button>
            <p>Começar </p>
          </Button> */}
          <Button>Cadastrar para noticias</Button>
        </C.ButtonSection>
      </C.SectionButtons>
    </C.Container>
  );
}
