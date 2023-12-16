import React from 'react';
import * as C from './styled';

export default function LayoutBg({
  children,
}: {
  children: React.ReactNode;
}) {
  return <C.Container>{children}</C.Container>;
}
