import React from 'react';
import * as C from './styled';
import Logo from '../Logo/Logo';
import ButtonGlogal from '../Button/Button';

export default function Header() {
  return (
    <C.Container>
      <Logo />

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            Sobre <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Sobre</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            Produtos <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Produtos</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            Social <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Redes Sociais</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.ButtonGlogalContainer>
        <ButtonGlogal>
          <p>Saiba +</p>
        </ButtonGlogal>
      </C.ButtonGlogalContainer>
    </C.Container>
  );
}
