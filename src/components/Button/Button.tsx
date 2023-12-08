import React from 'react';
import * as C from './styled';

interface PropsGlobal {
  text: string;
  font_size?: string;
  background?: boolean;
  width?: string;
  height?: string;
}

export default function ButtonGlogal({
  text,
  font_size,
  background,
  width,
  height,
}: PropsGlobal) {
  return (
    <C.Container
      background={background}
      font_size={font_size}
      width={width}
      height={height}
    >
      <p>{text}</p>
    </C.Container>
  );
}
