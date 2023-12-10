import { styled, css } from 'styled-components';

export const Container = styled.div`
  color: white;
  position: sticky;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blk_theme_background};
  border-bottom: solid 0.1rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  z-index: 2;
`;
