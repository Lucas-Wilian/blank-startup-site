import React from 'react';
import * as C from './styled';
import Header from '../Header/Header';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <C.Container>
      <Header />
      {children}
    </C.Container>
  );
}
