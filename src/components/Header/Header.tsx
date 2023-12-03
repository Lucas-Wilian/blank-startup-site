import React from 'react';
import * as C from './styled';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

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
          {/* <C.DropdownLink>Link1</C.DropdownLink>
          <C.DropdownLink>Link2</C.DropdownLink>
          <C.DropdownLink>Link3</C.DropdownLink>
          <C.DropdownLink>Link4</C.DropdownLink> */}
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            Produtos <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          {/* <C.DropdownLink>Link1</C.DropdownLink>
          <C.DropdownLink>Link2</C.DropdownLink>
          <C.DropdownLink>Link3</C.DropdownLink>
          <C.DropdownLink>Link4</C.DropdownLink> */}
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            Social <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          {/* <C.DropdownLink>Link1</C.DropdownLink>
          <C.DropdownLink>Link2</C.DropdownLink>
          <C.DropdownLink>Link3</C.DropdownLink>
          <C.DropdownLink>Link4</C.DropdownLink> */}
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.ButtonContainer>
        <Button>
          <p>Saiba +</p>
        </Button>
      </C.ButtonContainer>
    </C.Container>
  );
}
