import React from 'react';
import * as C from './styled';

export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return <C.Container>{children}</C.Container>;
}
