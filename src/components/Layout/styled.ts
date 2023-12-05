import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Section = styled.div`
  padding: 0rem 6rem;
  background: ${({ theme }) => theme.colors.blk_theme_background};
`;
