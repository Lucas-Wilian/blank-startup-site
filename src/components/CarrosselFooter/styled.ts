import { css, styled } from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 0rem 6rem;
`;

export const Carrossel = styled.div`
  margin: auto;
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;

  p {
    font-weight: bold;
    text-align: center;
    font-size: 1.54rem;
    color: ${({ theme }) =>
      theme.colors.blk_theme_toggle_btn_background};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.blk_theme_contrast_hover};
    }
  }
`;

export const CarrosselComponent = styled.div`
  width: 250px;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
