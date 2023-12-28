import React, { ReactNode } from 'react';
import * as C from './styled';

interface Props {
  text: string;
  icon: React.ReactNode;
}

export default function CardCarrossel({ text, icon }: Props) {
  return (
    <C.Container>
      <C.IconContainer>{icon}</C.IconContainer>
      <C.Title>{text}</C.Title>
    </C.Container>
  );
}
