import React from 'react';
import * as C from './styled';
import Header from '../Header/Header';
import HeaderTop from '../HeaderTop/HeaderTop';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <C.Container>
      <HeaderTop />
      <Header />
      <C.Section>{children}</C.Section>
    </C.Container>
  );
}
