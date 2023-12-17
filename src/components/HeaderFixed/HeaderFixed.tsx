import React from 'react';
import * as C from './styled';

export default function HeaderFixed() {
  return (
    <C.Container>
      <span>
        <C.UsersIcon /> Social
      </span>
      <span>
        <C.OsIcon />
        Plataformas
      </span>
      <span>
        <C.ProIcon />
        Projetos
      </span>
    </C.Container>
  );
}
