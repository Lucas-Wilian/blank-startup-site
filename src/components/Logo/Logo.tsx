import React from 'react';
import * as C from './styled';

export default function Logo() {
  return (
    <C.Container>
      <C.ContainerFrame>
        <C.IconBlank />
        <C.IconShadowGhost />
      </C.ContainerFrame>
      <C.Logo>BLANK</C.Logo>
    </C.Container>
  );
}
