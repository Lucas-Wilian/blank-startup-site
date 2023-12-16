import { styled } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blk_theme_background};
  position: relative;
  z-index: 2;
  padding-top: 10px;
  border-top: 0.1rem solid
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
`;
