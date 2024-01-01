import React from 'react';
import * as C from './styled';
import CardProjects from '../CardProjects/CardProjects';

export default function SectionProjects() {
  return (
    <C.Container>
      <C.Title>Nossos principais projetos</C.Title>
      <C.GridProjects>
        <C.CollumGrid>
          <C.ContainerImg />
          <C.ContainerImg />
        </C.CollumGrid>
        <C.CollumGridSpan />
        <C.CollumGrid>
          <C.ContainerImg />
          <C.ContainerImg />
        </C.CollumGrid>
        <C.CollumGrid>
          <C.ContainerImg />
          <C.ContainerImg />
        </C.CollumGrid>
      </C.GridProjects>
      <C.BackgroundContainer />
    </C.Container>
  );
}
