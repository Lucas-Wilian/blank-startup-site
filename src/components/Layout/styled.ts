import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.colors.blk_theme_background};
`;

export const ContainerHeader = styled.div`
  z-index: 4;
  position: relative;
`;
