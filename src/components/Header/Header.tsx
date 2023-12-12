import React from 'react';
import * as C from './styled';
import Logo from '../Logo/Logo';
import ButtonGlogal from '../Button/Button';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Header() {
  return (
    <C.Container>
      <Logo />
      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Sobre' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Sobre</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Produtos' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Produtos</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Sobre' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent>
          <p>Redes Sociais</p>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.ButtonGlogalContainer>
        <ButtonGlogal
          background={true}
          font_size='1rem'
          text='Saiba +'
          width='100%'
          height='100%'
        />
      </C.ButtonGlogalContainer>
    </C.Container>
  );
}
