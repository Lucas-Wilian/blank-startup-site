import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 0rem 6rem;
  position: relative;
  background: ${({ theme }) => theme.colors.blk_theme_border};
`;
