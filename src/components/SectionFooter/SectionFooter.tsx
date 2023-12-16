import React from 'react';
import * as C from './styled';
import ButtonGlogal from '../Button/Button';
import CarrosselFooter from '../CarrosselFooter/CarrosselFooter';

export default function SectionFooter() {
  return (
    <C.Container>
      <C.Section>
        <C.Title>Venha ser um BLANK </C.Title>
        <CarrosselFooter />
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
      </C.Section>
      <C.SectionFooter>
        <p>
          Seja o Primeiro a saber sobre as nossas novidades e
          promoções, venha fazer parte do futuro com a BLANK.
        </p>
      </C.SectionFooter>
    </C.Container>
  );
}
