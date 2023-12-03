import React from 'react';
import * as C from './styled';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

export default function Header() {
  return (
    <C.Container>
      <Logo />
      <C.DropMenu>
        <span>
          Sobre <C.IconArrow />
        </span>
      </C.DropMenu>
      <C.DropMenu>
        <span>
          Produtos <C.IconArrow />
        </span>
      </C.DropMenu>
      <C.DropMenu>
        <span>
          Social <C.IconArrow />
        </span>
      </C.DropMenu>
      <C.ButtonContainer>
        <Button>
          <p>Saiba +</p>
        </Button>
      </C.ButtonContainer>
    </C.Container>
  );
}
