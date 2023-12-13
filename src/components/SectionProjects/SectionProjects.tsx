import React from 'react';
import * as C from './styled';
import CardProjects from '../CardProjects/CardProjects';

export default function SectionProjects() {
  return (
    <C.Container>
      <C.Title>Nossos principais projetos</C.Title>
      <C.GridProjects>
        <C.CollumGrid />
        <C.CollumGridSpan />
        <C.CollumGrid />
        <C.CollumGrid />
        <C.CollumGrid />
        <C.CollumGrid>
          <C.GridCollum />
          <C.GridCollum />
        </C.CollumGrid>
        <C.CollumGrid />
      </C.GridProjects>
      <C.BackgroundContainer />
    </C.Container>
  );
}
